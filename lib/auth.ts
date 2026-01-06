import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

// Types
export type UserRole = "admin" | "staff";

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  passwordHash: string;
}

export interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  role: UserRole;
  expiresAt: Date;
}

// Configuration
const SESSION_COOKIE_NAME = "admin_session";
const SESSION_DURATION = 8 * 60 * 60 * 1000; // 8 hours

function getSecretKey(): Uint8Array {
  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret) {
    throw new Error("ADMIN_JWT_SECRET is not configured");
  }
  return new TextEncoder().encode(secret);
}

// In-memory admin users (in production, use a database)
// Passwords are hashed versions - generate with: bcrypt.hashSync("password", 10)
const ADMIN_USERS: AdminUser[] = [
  {
    id: "1",
    email: "admin@upright.ph",
    name: "Admin User",
    role: "admin",
    // Default password: "admin123" - CHANGE IN PRODUCTION
    passwordHash: "$2a$10$rQZ8K.Nh8YQVqKxLxL8Xz.8YQVqKxLxL8Xz.8YQVqKxLxL8Xz.8Y",
  },
  {
    id: "2",
    email: "staff@upright.ph",
    name: "Staff User",
    role: "staff",
    // Default password: "staff123" - CHANGE IN PRODUCTION
    passwordHash: "$2a$10$rQZ8K.Nh8YQVqKxLxL8Xz.8YQVqKxLxL8Xz.8YQVqKxLxL8Xz.8Y",
  },
];

// Quick access code for fast login (in production, store securely)
const ACCESS_CODES: Record<string, string> = {
  // accessCode: userId
};

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function findUserByEmail(
  email: string
): Promise<AdminUser | null> {
  // Check environment variables for admin credentials first
  const envAdminEmail = process.env.ADMIN_EMAIL;
  const envAdminPassword = process.env.ADMIN_PASSWORD_HASH;

  if (envAdminEmail && envAdminPassword && email === envAdminEmail) {
    return {
      id: "env-admin",
      email: envAdminEmail,
      name: "Administrator",
      role: "admin",
      passwordHash: envAdminPassword,
    };
  }

  return ADMIN_USERS.find((u) => u.email === email) || null;
}

export async function findUserByAccessCode(
  code: string
): Promise<AdminUser | null> {
  const envAccessCode = process.env.ADMIN_ACCESS_CODE;
  const envAdminEmail = process.env.ADMIN_EMAIL;

  if (envAccessCode && code === envAccessCode && envAdminEmail) {
    return findUserByEmail(envAdminEmail);
  }

  const userId = ACCESS_CODES[code];
  if (!userId) return null;
  return ADMIN_USERS.find((u) => u.id === userId) || null;
}

export async function createSession(user: AdminUser): Promise<string> {
  const expiresAt = new Date(Date.now() + SESSION_DURATION);

  const token = await new SignJWT({
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(getSecretKey());

  // Set HTTP-only cookie
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });

  return token;
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecretKey());

    return {
      userId: payload.userId as string,
      email: payload.email as string,
      name: payload.name as string,
      role: payload.role as UserRole,
      expiresAt: new Date((payload.exp as number) * 1000),
    };
  } catch {
    return null;
  }
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export function hasPermission(role: UserRole, action: string): boolean {
  const permissions: Record<UserRole, string[]> = {
    admin: ["view_messages", "update_status", "export_data", "manage_users"],
    staff: ["view_messages"],
  };

  return permissions[role]?.includes(action) ?? false;
}
