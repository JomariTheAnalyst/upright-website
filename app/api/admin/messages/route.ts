import { NextRequest, NextResponse } from "next/server";
import { getSession, hasPermission } from "@/lib/auth";
import {
  getMessages,
  getMessageStats,
  exportMessagesToCSV,
  MessageStatus,
} from "@/lib/db";

// Disable caching for this route
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Check permission
    if (!hasPermission(session.role, "view_messages")) {
      return NextResponse.json(
        { success: false, error: "Access denied" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") as MessageStatus | null;
    const limit = parseInt(searchParams.get("limit") || "200", 10);
    const format = searchParams.get("format");

    // Get messages from Neon
    const messages = await getMessages({
      status: status || undefined,
      limit,
    });

    // Export as CSV if requested
    if (format === "csv") {
      if (!hasPermission(session.role, "export_data")) {
        return NextResponse.json(
          { success: false, error: "Access denied" },
          { status: 403 }
        );
      }

      const csv = exportMessagesToCSV(messages);
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="messages-${
            new Date().toISOString().split("T")[0]
          }.csv"`,
        },
      });
    }

    // Get stats
    const stats = await getMessageStats();

    return NextResponse.json({
      success: true,
      messages,
      total: messages.length,
      stats,
    });
  } catch (error) {
    console.error("Get messages error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred" },
      { status: 500 }
    );
  }
}
