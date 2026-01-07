import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { sql } from "./db";

// Types
export type UserRole = "admin" | "staff" | "viewer";

export interface AdminUser {
  id: number;
  email: string;
  username: string;
  role: UserRole;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface SessionPayload {
  sessionId: string;
  userId: number;
  email: string;
  username: string;
  role: UserRole;
  expiresAt: Date;
}

// Configuration
const SESSION_COOKIE_NAME = "admin_session";
const SESSION_DURATION_HOURS = 12;
const BCRYPT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function findUserByIdentifier(
  identifier: string
): Promise<
  (AdminUser & { password_hash: string; access_code_hash: string }) | null
> {
  const result = await sql`
    SELECT id, email, username, password_hash, access_code_hash, role, is_active, created_at, updated_at
    FROM admin_users
    WHERE (email = ${identifier} OR username = ${identifier})
    LIMIT 1
  `;

  if (result.length === 0) return null;

  return {
    id: result[0].id as number,
    email: result[0].email as string,
    username: result[0].username as string,
    password_hash: result[0].password_hash as string,
    access_code_hash: result[0].access_code_hash as string,
    role: result[0].role as UserRole,
    is_active: result[0].is_active as boolean,
    created_at: result[0].created_at as string,
    updated_at: result[0].updated_at as string,
  };
}

export async function findUserByAccessCode(
  accessCode: string
): Promise<AdminUser | null> {
  const result = await sql`
    SELECT id, email, username, access_code_hash, role, is_active
    FROM admin_users
    WHERE is_active = true
  `;

  for (const row of result) {
    const isMatch = await verifyPassword(
      accessCode,
      row.access_code_hash as string
    );
    if (isMatch) {
      return {
        id: row.id as number,
        email: row.email as string,
        username: row.username as string,
        role: row.role as UserRole,
        is_active: row.is_active as boolean,
      };
    }
  }

  return null;
}

export async function createSession(userId: number): Promise<string> {
  const expiresAt = new Date(
    Date.now() + SESSION_DURATION_HOURS * 60 * 60 * 1000
  );

  const result = await sql`
    INSERT INTO admin_sessions (admin_user_id, expires_at)
    VALUES (${userId}, ${expiresAt.toISOString()})
    RETURNING id
  `;

  const sessionId = result[0].id as string;

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });

  return sessionId;
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionId) return null;

  try {
    const result = await sql`
      SELECT 
        s.id as session_id,
        s.expires_at,
        u.id as user_id,
        u.email,
        u.username,
        u.role,
        u.is_active
      FROM admin_sessions s
      JOIN admin_users u ON s.admin_user_id = u.id
      WHERE s.id = ${sessionId}::uuid
        AND s.expires_at > NOW()
        AND u.is_active = true
      LIMIT 1
    `;

    if (result.length === 0) {
      await destroySession();
      return null;
    }

    return {
      sessionId: result[0].session_id as string,
      userId: result[0].user_id as number,
      email: result[0].email as string,
      username: result[0].username as string,
      role: result[0].role as UserRole,
      expiresAt: new Date(result[0].expires_at as string),
    };
  } catch {
    return null;
  }
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (sessionId) {
    try {
      await sql`DELETE FROM admin_sessions WHERE id = ${sessionId}::uuid`;
    } catch {
      // Ignore errors during cleanup
    }
  }

  cookieStore.delete(SESSION_COOKIE_NAME);
}

// User Management Functions (Admin Only)
export async function getAllUsers(): Promise<AdminUser[]> {
  const result = await sql`
    SELECT id, email, username, role, is_active, created_at, updated_at
    FROM admin_users
    ORDER BY created_at DESC
  `;

  return result.map((row) => ({
    id: row.id as number,
    email: row.email as string,
    username: row.username as string,
    role: row.role as UserRole,
    is_active: row.is_active as boolean,
    created_at: row.created_at as string,
    updated_at: row.updated_at as string,
  }));
}

export async function createUser(data: {
  email: string;
  username: string;
  password: string;
  accessCode: string;
  role: UserRole;
}): Promise<AdminUser> {
  const passwordHash = await hashPassword(data.password);
  const accessCodeHash = await hashPassword(data.accessCode);

  const result = await sql`
    INSERT INTO admin_users (email, username, password_hash, access_code_hash, role, is_active)
    VALUES (${data.email}, ${data.username}, ${passwordHash}, ${accessCodeHash}, ${data.role}, true)
    RETURNING id, email, username, role, is_active, created_at, updated_at
  `;

  return {
    id: result[0].id as number,
    email: result[0].email as string,
    username: result[0].username as string,
    role: result[0].role as UserRole,
    is_active: result[0].is_active as boolean,
    created_at: result[0].created_at as string,
    updated_at: result[0].updated_at as string,
  };
}

export async function updateUserPassword(
  userId: number,
  newPassword: string
): Promise<boolean> {
  const passwordHash = await hashPassword(newPassword);

  const result = await sql`
    UPDATE admin_users
    SET password_hash = ${passwordHash}, updated_at = NOW()
    WHERE id = ${userId}
    RETURNING id
  `;

  return result.length > 0;
}

export async function updateUserAccessCode(
  userId: number,
  newAccessCode: string
): Promise<boolean> {
  const accessCodeHash = await hashPassword(newAccessCode);

  const result = await sql`
    UPDATE admin_users
    SET access_code_hash = ${accessCodeHash}, updated_at = NOW()
    WHERE id = ${userId}
    RETURNING id
  `;

  return result.length > 0;
}

export async function updateUserStatus(
  userId: number,
  isActive: boolean
): Promise<boolean> {
  const result = await sql`
    UPDATE admin_users
    SET is_active = ${isActive}, updated_at = NOW()
    WHERE id = ${userId}
    RETURNING id
  `;

  // If disabling user, delete their sessions
  if (!isActive) {
    await sql`DELETE FROM admin_sessions WHERE admin_user_id = ${userId}`;
  }

  return result.length > 0;
}

export async function updateUserRole(
  userId: number,
  role: UserRole
): Promise<boolean> {
  const result = await sql`
    UPDATE admin_users
    SET role = ${role}, updated_at = NOW()
    WHERE id = ${userId}
    RETURNING id
  `;

  return result.length > 0;
}

export async function deleteUser(userId: number): Promise<boolean> {
  // First delete sessions
  await sql`DELETE FROM admin_sessions WHERE admin_user_id = ${userId}`;

  const result = await sql`
    DELETE FROM admin_users WHERE id = ${userId} RETURNING id
  `;

  return result.length > 0;
}

// Permission checks
export function hasPermission(role: UserRole, action: string): boolean {
  const permissions: Record<UserRole, string[]> = {
    admin: [
      "view_messages",
      "update_status",
      "delete_messages",
      "export_data",
      "manage_users",
      "create_users",
      "reset_passwords",
    ],
    staff: ["view_messages", "update_status"],
    viewer: ["view_messages"],
  };

  return permissions[role]?.includes(action) ?? false;
}

export function canManageUsers(role: UserRole): boolean {
  return role === "admin";
}

export function canUpdateMessageStatus(role: UserRole): boolean {
  return role === "admin" || role === "staff";
}

export function canDeleteMessages(role: UserRole): boolean {
  return role === "admin";
}

export function canExportData(role: UserRole): boolean {
  return role === "admin";
}
