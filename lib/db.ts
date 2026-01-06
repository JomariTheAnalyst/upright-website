import { neon } from "@neondatabase/serverless";

// Single source of truth for database connection
export const sql = neon(process.env.DATABASE_URL!);

// Types
export type MessageStatus = "New" | "Read" | "Replied" | "Archived";

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  status: MessageStatus;
  page_url?: string;
  source: string;
  created_at: Date;
}

// Create message in database
export async function createMessage(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  pageUrl?: string;
  source?: string;
}): Promise<{ id: number }> {
  const result = await sql`
    INSERT INTO messages (name, email, phone, company, subject, message, page_url, source)
    VALUES (
      ${data.name},
      ${data.email},
      ${data.phone || null},
      ${data.company || null},
      ${data.subject || null},
      ${data.message},
      ${data.pageUrl || null},
      ${data.source || "Website Contact Form"}
    )
    RETURNING id
  `;

  return { id: Number(result[0].id) };
}

// Get all messages with optional filtering
export async function getMessages(options?: {
  status?: MessageStatus;
  limit?: number;
}): Promise<ContactMessage[]> {
  const limit = options?.limit ?? 200;

  if (options?.status) {
    const result = await sql`
      SELECT * FROM messages 
      WHERE status = ${options.status}
      ORDER BY created_at DESC 
      LIMIT ${limit}
    `;
    return result as ContactMessage[];
  }

  const result = await sql`
    SELECT * FROM messages 
    ORDER BY created_at DESC 
    LIMIT ${limit}
  `;
  return result as ContactMessage[];
}

// Get single message by ID
export async function getMessageById(
  id: number
): Promise<ContactMessage | null> {
  const result = await sql`
    SELECT * FROM messages WHERE id = ${id}
  `;
  return (result[0] as ContactMessage) || null;
}

// Update message status
export async function updateMessageStatus(
  id: number,
  status: MessageStatus
): Promise<ContactMessage | null> {
  const result = await sql`
    UPDATE messages 
    SET status = ${status}
    WHERE id = ${id}
    RETURNING *
  `;
  return (result[0] as ContactMessage) || null;
}

// Get message statistics
export async function getMessageStats(): Promise<{
  total: number;
  new: number;
  read: number;
  replied: number;
  archived: number;
}> {
  const result = await sql`
    SELECT 
      COUNT(*)::int as total,
      COUNT(*) FILTER (WHERE status = 'New')::int as new,
      COUNT(*) FILTER (WHERE status = 'Read')::int as read,
      COUNT(*) FILTER (WHERE status = 'Replied')::int as replied,
      COUNT(*) FILTER (WHERE status = 'Archived')::int as archived
    FROM messages
  `;

  const stats = result[0];
  return {
    total: stats.total || 0,
    new: stats.new || 0,
    read: stats.read || 0,
    replied: stats.replied || 0,
    archived: stats.archived || 0,
  };
}

// Export messages to CSV format
export function exportMessagesToCSV(messages: ContactMessage[]): string {
  const headers = [
    "ID",
    "Date",
    "Name",
    "Email",
    "Company",
    "Phone",
    "Subject",
    "Message",
    "Status",
    "Source",
  ];
  const rows = messages.map((m) => [
    m.id,
    new Date(m.created_at).toISOString(),
    `"${m.name.replace(/"/g, '""')}"`,
    m.email,
    m.company ? `"${m.company.replace(/"/g, '""')}"` : "",
    m.phone || "",
    m.subject ? `"${m.subject.replace(/"/g, '""')}"` : "",
    `"${m.message.replace(/"/g, '""')}"`,
    m.status,
    m.source,
  ]);

  return [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
}
