import { NextRequest, NextResponse } from "next/server";
import {
  findUserByEmail,
  findUserByAccessCode,
  verifyPassword,
  createSession,
} from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, accessCode } = body;

    // Quick login with access code
    if (accessCode) {
      const user = await findUserByAccessCode(accessCode);
      if (!user) {
        return NextResponse.json(
          { success: false, error: "Invalid access code" },
          { status: 401 }
        );
      }

      await createSession(user);
      return NextResponse.json({
        success: true,
        user: { name: user.name, email: user.email, role: user.role },
      });
    }

    // Standard email/password login
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isValidPassword = await verifyPassword(password, user.passwordHash);
    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    await createSession(user);

    return NextResponse.json({
      success: true,
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
