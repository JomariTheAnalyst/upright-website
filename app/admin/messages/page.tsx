"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Loader2,
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
  Search,
  Trash2,
  AlertTriangle,
  Inbox,
  TrendingUp,
  Mail,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

type MessageStatus = "New" | "Read" | "Replied" | "Archived";
type UserRole = "admin" | "staff" | "viewer";

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
  role: UserRole;
}

const statusConfig: Record<
  MessageStatus,
  { bg: string; text: string; dot: string }
> = {
  New: { bg: "bg-blue-50", text: "text-blue-600", dot: "bg-blue-500" },
  Read: { bg: "bg-slate-50", text: "text-slate-600", dot: "bg-slate-400" },
  Replied: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    dot: "bg-emerald-500",
  },
  Archived: { bg: "bg-amber-50", text: "text-amber-600", dot: "bg-amber-500" },
};

type DateFilter = "all" | "today" | "week" | "month";

export default function AdminMessagesPage() {
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
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<DateFilter>("all");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(
    null
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [sourceFilter, setSourceFilter] = useState<string>("all");

  const checkSession = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/session");
      const data = await response.json();
      if (data.authenticated) {
        setUser(data.user);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  const fetchMessages = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/messages", {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.success) {
        setMessages(data.messages);
        setStats(data.stats);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await checkSession();
      await fetchMessages();
      setIsLoading(false);
    };
    init();
  }, [checkSession, fetchMessages]);

  const uniqueSources = useMemo(() => {
    const sources = new Set(messages.map((m) => m.source));
    return Array.from(sources);
  }, [messages]);

  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      if (filterStatus !== "all" && msg.status !== filterStatus) return false;
      if (sourceFilter !== "all" && msg.source !== sourceFilter) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          msg.name.toLowerCase().includes(query) ||
          msg.email.toLowerCase().includes(query) ||
          (msg.company?.toLowerCase().includes(query) ?? false);
        if (!matchesSearch) return false;
      }
      if (dateFilter !== "all") {
        const msgDate = new Date(msg.created_at);
        const now = new Date();
        const startOfToday = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );
        if (dateFilter === "today" && msgDate < startOfToday) return false;
        if (dateFilter === "week") {
          const weekAgo = new Date(startOfToday);
          weekAgo.setDate(weekAgo.getDate() - 7);
          if (msgDate < weekAgo) return false;
        }
        if (dateFilter === "month") {
          const monthAgo = new Date(startOfToday);
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          if (msgDate < monthAgo) return false;
        }
      }
      return true;
    });
  }, [messages, filterStatus, searchQuery, dateFilter, sourceFilter]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchMessages();
    setIsRefreshing(false);
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
        fetchMessages();
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleDelete = async (messageId: number) => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/admin/messages/${messageId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setMessages((prev) => prev.filter((m) => m.id !== messageId));
        if (selectedMessage?.id === messageId) setSelectedMessage(null);
        setShowDeleteConfirm(null);
        fetchMessages();
      }
    } catch (error) {
      console.error("Failed to delete message:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const canUpdateStatus = user?.role === "admin" || user?.role === "staff";
  const canDelete = user?.role === "admin";
  const canExport = user?.role === "admin";

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <p className="text-sm text-slate-500">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto font-graphik">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-neutra font-bold text-slate-900">
            Messages
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage contact form inquiries
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="gap-1.5"
          >
            <RefreshCw
              className={cn("w-4 h-4", isRefreshing && "animate-spin")}
            />
            Refresh
          </Button>
          {canExport && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              className="gap-1.5"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          )}
        </div>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {[
            {
              label: "Total",
              value: stats.total,
              icon: TrendingUp,
              color: "from-slate-500 to-slate-600",
            },
            {
              label: "New",
              value: stats.new,
              icon: Mail,
              color: "from-blue-500 to-blue-600",
            },
            {
              label: "Read",
              value: stats.read,
              icon: Eye,
              color: "from-slate-400 to-slate-500",
            },
            {
              label: "Replied",
              value: stats.replied,
              icon: CheckCircle,
              color: "from-emerald-500 to-emerald-600",
            },
            {
              label: "Archived",
              value: stats.archived,
              icon: Archive,
              color: "from-amber-500 to-amber-600",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-500">
                  {stat.label}
                </span>
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Filters Bar */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-6 overflow-hidden">
        <div className="p-4 flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search by name, email, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-9 bg-slate-50 border-slate-200 text-sm"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) =>
                  setFilterStatus(e.target.value as MessageStatus | "all")
                }
                className="h-9 pl-3 pr-8 text-sm border border-slate-200 rounded-lg bg-white appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="New">New</option>
                <option value="Read">Read</option>
                <option value="Replied">Replied</option>
                <option value="Archived">Archived</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="h-9 pl-3 pr-8 text-sm border border-slate-200 rounded-lg bg-white appearance-none cursor-pointer"
              >
                <option value="all">All Sources</option>
                {uniqueSources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value as DateFilter)}
                className="h-9 pl-3 pr-8 text-sm border border-slate-200 rounded-lg bg-white appearance-none cursor-pointer"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {(searchQuery ||
              filterStatus !== "all" ||
              dateFilter !== "all" ||
              sourceFilter !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterStatus("all");
                  setDateFilter("all");
                  setSourceFilter("all");
                }}
                className="text-xs text-blue-600 hover:text-blue-700 font-medium px-2"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Messages Table - Clean Layout like the image */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.map((message, index) => (
                <tr
                  key={message.id}
                  className={cn(
                    "hover:bg-slate-50/50 transition-colors",
                    index !== filteredMessages.length - 1 &&
                      "border-b border-slate-50"
                  )}
                >
                  {/* Contact */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-slate-600">
                          {message.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">
                          {message.name}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {message.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Company */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">
                      {message.company || "—"}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-sm font-medium",
                        statusConfig[message.status].text
                      )}
                    >
                      <span
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          statusConfig[message.status].dot
                        )}
                      />
                      {message.status}
                    </span>
                  </td>

                  {/* Created */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">
                      {formatDate(message.created_at)}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => setSelectedMessage(message)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-400 hover:text-slate-600" />
                      </button>
                      <button
                        onClick={() =>
                          window.open(`mailto:${message.email}`, "_blank")
                        }
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Send Email"
                      >
                        <Mail className="w-4 h-4 text-slate-400 hover:text-slate-600" />
                      </button>
                      {canUpdateStatus && (
                        <button
                          onClick={() => {
                            const nextStatus: Record<
                              MessageStatus,
                              MessageStatus
                            > = {
                              New: "Read",
                              Read: "Replied",
                              Replied: "Archived",
                              Archived: "New",
                            };
                            handleStatusChange(
                              message.id,
                              nextStatus[message.status]
                            );
                          }}
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          title="Update Status"
                        >
                          <CheckCircle className="w-4 h-4 text-slate-400 hover:text-slate-600" />
                        </button>
                      )}
                      {canDelete && (
                        <button
                          onClick={() => setShowDeleteConfirm(message.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-slate-400 hover:text-red-500" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredMessages.length === 0 && (
          <div className="p-12 text-center">
            <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-slate-900 mb-1">
              No messages found
            </h3>
            <p className="text-sm text-slate-500">Try adjusting your filters</p>
          </div>
        )}
      </div>

      {/* Results count */}
      {filteredMessages.length > 0 && (
        <p className="text-xs text-slate-400 mt-3 text-right">
          Showing {filteredMessages.length} of {messages.length} messages
        </p>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Delete Message
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              Are you sure you want to delete this message? This action cannot
              be undone.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(showDeleteConfirm)}
                disabled={isDeleting}
                className="flex-1 bg-red-600 hover:bg-red-700"
              >
                {isDeleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Delete"
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-600">
                    {selectedMessage.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900">
                    {selectedMessage.name}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {selectedMessage.email}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMessage(null)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto max-h-[calc(90vh-180px)]">
              {/* Status & Date */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full",
                    statusConfig[selectedMessage.status].bg,
                    statusConfig[selectedMessage.status].text
                  )}
                >
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      statusConfig[selectedMessage.status].dot
                    )}
                  />
                  {selectedMessage.status}
                </span>
                <span className="text-sm text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {formatDate(selectedMessage.created_at)}
                </span>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <User className="w-3.5 h-3.5" />
                    <span className="text-xs">Name</span>
                  </div>
                  <p className="text-sm font-medium text-slate-900">
                    {selectedMessage.name}
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Mail className="w-3.5 h-3.5" />
                    <span className="text-xs">Email</span>
                  </div>
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    {selectedMessage.email}
                  </a>
                </div>
                {selectedMessage.company && (
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Building className="w-3.5 h-3.5" />
                      <span className="text-xs">Company</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900">
                      {selectedMessage.company}
                    </p>
                  </div>
                )}
                {selectedMessage.phone && (
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Phone className="w-3.5 h-3.5" />
                      <span className="text-xs">Phone</span>
                    </div>
                    <a
                      href={`tel:${selectedMessage.phone}`}
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      {selectedMessage.phone}
                    </a>
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="text-xs uppercase tracking-wide">
                    Message
                  </span>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>

              {/* Status Update */}
              {canUpdateStatus && (
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
                    Update Status
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(
                      ["New", "Read", "Replied", "Archived"] as MessageStatus[]
                    ).map((status) => (
                      <button
                        key={status}
                        onClick={() =>
                          handleStatusChange(selectedMessage.id, status)
                        }
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-all",
                          selectedMessage.status === status
                            ? `${statusConfig[status].bg} ${statusConfig[status].text}`
                            : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
                        )}
                      >
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            statusConfig[status].dot
                          )}
                        />
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between p-5 border-t border-slate-100 bg-slate-50">
              <div>
                {canDelete && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedMessage(null);
                      setShowDeleteConfirm(selectedMessage.id);
                    }}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setSelectedMessage(null)}
                >
                  Close
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href={`mailto:${selectedMessage.email}`}>
                    <Mail className="w-4 h-4 mr-1" />
                    Reply
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
