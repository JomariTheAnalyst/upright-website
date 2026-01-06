import { NextRequest, NextResponse } from "next/server";
import {
  findUserByIdentifier,
  findUserByAccessCode,
  verifyPassword,
  createSession,
} from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { identifier, password, accessCode } = body;

    // Access Code login mode
    if (accessCode && !identifier && !password) {
      const user = await findUserByAccessCode(accessCode);

      if (!user) {
        return NextResponse.json(
          { success: false, error: "Invalid access code" },
          { status: 401 }
        );
      }

      await createSession(user.id);

      return NextResponse.json({
        success: true,
        user: {
          email: user.email,
          username: user.username,
          role: user.role,
        },
      });
    }

    // Email/Username + Password login mode
    if (identifier && password) {
      const user = await findUserByIdentifier(identifier);

      if (!user) {
        return NextResponse.json(
          { success: false, error: "Invalid credentials" },
          { status: 401 }
        );
      }

      if (!user.is_active) {
        return NextResponse.json(
          { success: false, error: "Account is disabled" },
          { status: 403 }
        );
      }

      const isPasswordValid = await verifyPassword(
        password,
        user.password_hash
      );
      if (!isPasswordValid) {
        return NextResponse.json(
          { success: false, error: "Invalid credentials" },
          { status: 401 }
        );
      }

      await createSession(user.id);

      return NextResponse.json({
        success: true,
        user: {
          email: user.email,
          username: user.username,
          role: user.role,
        },
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
