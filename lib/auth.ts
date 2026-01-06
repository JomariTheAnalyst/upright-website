import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { sql } from "./db";

// Types
export type UserRole = "admin" | "staff";

export interface AdminUser {
  id: number;
  email: string;
  username: string;
  role: UserRole;
  is_active: boolean;
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
    SELECT id, email, username, password_hash, access_code_hash, role, is_active
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

export async function cleanupExpiredSessions(): Promise<void> {
  await sql`DELETE FROM admin_sessions WHERE expires_at < NOW()`;
}

export function hasPermission(role: UserRole, action: string): boolean {
  const permissions: Record<UserRole, string[]> = {
    admin: ["view_messages", "update_status", "export_data", "manage_users"],
    staff: ["view_messages"],
  };

  return permissions[role]?.includes(action) ?? false;
}
