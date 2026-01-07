import { NextRequest, NextResponse } from "next/server";
import {
  getSession,
  canManageUsers,
  updateUserPassword,
  updateUserAccessCode,
  updateUserStatus,
  updateUserRole,
  deleteUser,
  UserRole,
} from "@/lib/auth";

export const dynamic = "force-dynamic";

// PATCH update user (admin only)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!canManageUsers(session.role)) {
      return NextResponse.json(
        { success: false, error: "Access denied" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const userId = parseInt(id, 10);
    const body = await request.json();
    const { action, value } = body;

    // Prevent admin from modifying their own account in certain ways
    if (
      userId === session.userId &&
      (action === "status" || action === "role")
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Cannot modify your own account status or role",
        },
        { status: 400 }
      );
    }

    let success = false;

    switch (action) {
      case "password":
        if (!value || value.length < 8) {
          return NextResponse.json(
            { success: false, error: "Password must be at least 8 characters" },
            { status: 400 }
          );
        }
        success = await updateUserPassword(userId, value);
        break;

      case "accessCode":
        if (!value || value.length < 6) {
          return NextResponse.json(
            {
              success: false,
              error: "Access code must be at least 6 characters",
            },
            { status: 400 }
          );
        }
        success = await updateUserAccessCode(userId, value);
        break;

      case "status":
        if (typeof value !== "boolean") {
          return NextResponse.json(
            { success: false, error: "Invalid status value" },
            { status: 400 }
          );
        }
        success = await updateUserStatus(userId, value);
        break;

      case "role":
        const validRoles: UserRole[] = ["admin", "staff", "viewer"];
        if (!validRoles.includes(value)) {
          return NextResponse.json(
            { success: false, error: "Invalid role" },
            { status: 400 }
          );
        }
        success = await updateUserRole(userId, value);
        break;

      default:
        return NextResponse.json(
          { success: false, error: "Invalid action" },
          { status: 400 }
        );
    }

    if (!success) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update user error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred" },
      { status: 500 }
    );
  }
}

// DELETE user (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!canManageUsers(session.role)) {
      return NextResponse.json(
        { success: false, error: "Access denied" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const userId = parseInt(id, 10);

    // Prevent admin from deleting their own account
    if (userId === session.userId) {
      return NextResponse.json(
        { success: false, error: "Cannot delete your own account" },
        { status: 400 }
      );
    }

    const success = await deleteUser(userId);

    if (!success) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete user error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred" },
      { status: 500 }
    );
  }
}
