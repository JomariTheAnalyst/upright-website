"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  LogOut,
  Mail,
  RefreshCw,
  Download,
  X,
  Clock,
  User,
  Building,
  Phone,
  MessageSquare,
  CheckCircle,
  Archive,
  Eye,
} from "lucide-react";

type MessageStatus = "New" | "Read" | "Replied" | "Archived";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message: string;
  status: MessageStatus;
  source: string;
  created_at: string;
}

interface MessageStats {
  total: number;
  new: number;
  read: number;
  replied: number;
  archived: number;
}

interface UserInfo {
  name: string;
  email: string;
  role: "admin" | "staff";
}

const statusColors: Record<MessageStatus, string> = {
  New: "bg-blue-100 text-blue-800",
  Read: "bg-gray-100 text-gray-800",
  Replied: "bg-green-100 text-green-800",
  Archived: "bg-yellow-100 text-yellow-800",
};

const statusIcons: Record<MessageStatus, React.ReactNode> = {
  New: <Mail className="w-3 h-3" />,
  Read: <Eye className="w-3 h-3" />,
  Replied: <CheckCircle className="w-3 h-3" />,
  Archived: <Archive className="w-3 h-3" />,
};

export default function AdminMessagesPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [stats, setStats] = useState<MessageStats | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filterStatus, setFilterStatus] = useState<MessageStatus | "all">(
    "all"
  );

  const checkSession = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/session");
      const data = await response.json();

      if (!data.authenticated) {
        router.push("/admin/login");
        return false;
      }

      setUser(data.user);
      return true;
    } catch {
      router.push("/admin/login");
      return false;
    }
  }, [router]);

  const fetchMessages = useCallback(async () => {
    try {
      const url =
        filterStatus === "all"
          ? "/api/admin/messages"
          : `/api/admin/messages?status=${filterStatus}`;

      const response = await fetch(url, { cache: "no-store" });
      const data = await response.json();

      if (data.success) {
        setMessages(data.messages);
        setStats(data.stats);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  }, [filterStatus]);

  useEffect(() => {
    const init = async () => {
      const isAuthenticated = await checkSession();
      if (isAuthenticated) {
        await fetchMessages();
      }
      setIsLoading(false);
    };
    init();
  }, [checkSession, fetchMessages]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchMessages();
    setIsRefreshing(false);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const handleExport = () => {
    window.open("/api/admin/messages?format=csv", "_blank");
  };

  const handleStatusChange = async (
    messageId: number,
    newStatus: MessageStatus
  ) => {
    try {
      const response = await fetch(`/api/admin/messages/${messageId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === messageId ? { ...m, status: newStatus } : m
          )
        );
        if (selectedMessage?.id === messageId) {
          setSelectedMessage({ ...selectedMessage, status: newStatus });
        }
        // Refresh stats
        fetchMessages();
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
              {stats && (
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {stats.new} new
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">
                {user?.name} ({user?.role})
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <RefreshCw
                  className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
                />
              </Button>
              {user?.role === "admin" && (
                <Button variant="outline" size="sm" onClick={handleExport}>
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
              )}
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {[
              { label: "Total", value: stats.total, color: "bg-gray-500" },
              { label: "New", value: stats.new, color: "bg-blue-500" },
              { label: "Read", value: stats.read, color: "bg-gray-400" },
              { label: "Replied", value: stats.replied, color: "bg-green-500" },
              {
                label: "Archived",
                value: stats.archived,
                color: "bg-yellow-500",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Filter */}
        <div className="flex gap-2 mb-4">
          {(["all", "New", "Read", "Replied", "Archived"] as const).map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  filterStatus === status
                    ? "bg-[#1a2b4a] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {status === "all" ? "All" : status}
              </button>
            )
          )}
        </div>

        {/* Messages Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {messages.length === 0 ? (
            <div className="p-12 text-center">
              <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No messages found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Company
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {messages.map((message) => (
                    <tr
                      key={message.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedMessage(message)}
                    >
                      <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                        {formatDate(message.created_at)}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {message.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {message.email}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {message.company || "-"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                            statusColors[message.status]
                          }`}
                        >
                          {statusIcons[message.status]}
                          {message.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedMessage(message);
                          }}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Message Details
              </h2>
              <button
                onClick={() => setSelectedMessage(null)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {formatDate(selectedMessage.created_at)}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <User className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500">Name</p>
                      <p className="text-sm font-medium text-gray-900">
                        {selectedMessage.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        {selectedMessage.email}
                      </a>
                    </div>
                  </div>
                  {selectedMessage.company && (
                    <div className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Company</p>
                        <p className="text-sm font-medium text-gray-900">
                          {selectedMessage.company}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedMessage.phone && (
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <a
                          href={`tel:${selectedMessage.phone}`}
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          {selectedMessage.phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {selectedMessage.subject && (
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 mb-1">Subject</p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedMessage.subject}
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-2">Message</p>
                      <p className="text-sm text-gray-900 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status Update */}
                {user?.role === "admin" && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Update Status</p>
                    <div className="flex gap-2">
                      {(
                        [
                          "New",
                          "Read",
                          "Replied",
                          "Archived",
                        ] as MessageStatus[]
                      ).map((status) => (
                        <button
                          key={status}
                          onClick={() =>
                            handleStatusChange(selectedMessage.id, status)
                          }
                          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                            selectedMessage.status === status
                              ? statusColors[status]
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-2 p-4 border-t border-gray-200 bg-gray-50">
              <Button
                variant="outline"
                onClick={() => setSelectedMessage(null)}
              >
                Close
              </Button>
              <Button asChild>
                <a href={`mailto:${selectedMessage.email}`}>Reply via Email</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
