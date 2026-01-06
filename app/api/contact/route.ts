import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ContactFormData,
  getAutoReplyEmailHtml,
  getAutoReplyEmailContent,
  emailSubject,
} from "@/lib/email-response";
import { verifyHCaptcha } from "@/lib/hcaptcha";
import { checkRateLimit, getClientIp } from "@/lib/rate-limiter";
import { createMessage } from "@/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limit configuration
const MAX_REQUESTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

// Validation helper
function validateContactForm(data: unknown): {
  valid: boolean;
  errors: string[];
  data?: ContactFormData;
} {
  const errors: string[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Invalid request body"] };
  }

  const body = data as Record<string, unknown>;

  // Required fields
  if (!body.name || typeof body.name !== "string" || body.name.trim() === "") {
    errors.push("Name is required");
  }

  if (
    !body.email ||
    typeof body.email !== "string" ||
    body.email.trim() === ""
  ) {
    errors.push("Email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push("Invalid email format");
  }

  if (
    !body.message ||
    typeof body.message !== "string" ||
    body.message.trim() === ""
  ) {
    errors.push("Message is required");
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    data: {
      name: (body.name as string).trim(),
      company: body.company ? (body.company as string).trim() : undefined,
      email: (body.email as string).trim().toLowerCase(),
      phone: body.phone ? (body.phone as string).trim() : undefined,
      message: (body.message as string).trim(),
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Step 1: Extract and verify hCaptcha token
    const hcaptchaToken = body.hcaptchaToken;
    if (!hcaptchaToken) {
      return NextResponse.json(
        { success: false, errors: ["Please complete the verification"] },
        { status: 400 }
      );
    }

    const hcaptchaResult = await verifyHCaptcha(hcaptchaToken);
    if (!hcaptchaResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: [
            hcaptchaResult.error || "Verification failed. Please try again.",
          ],
        },
        { status: 400 }
      );
    }

    // Step 2: Check rate limit
    const clientIp = getClientIp(request.headers);
    const rateLimitResult = checkRateLimit(clientIp, MAX_REQUESTS, WINDOW_MS);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: [
            "Too many submissions. Please wait a few minutes before trying again.",
          ],
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.resetIn),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(rateLimitResult.resetIn),
          },
        }
      );
    }

    // Step 3: Validate form input
    const validation = validateContactForm(body);
    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const formData = validation.data;

    // Step 4: Save message to Neon Postgres database
    let savedMessage;
    try {
      savedMessage = await createMessage({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        subject: body.subject as string | undefined,
        pageUrl: body.pageUrl as string | undefined,
        source: "Website Contact Form",
      });

      console.log("[DB] Contact form submission saved:", {
        id: savedMessage.id,
        name: formData.name,
        email: formData.email,
        timestamp: new Date().toISOString(),
      });
    } catch (dbError) {
      console.error("[DB] Failed to save message:", dbError);
      return NextResponse.json(
        {
          success: false,
          errors: ["Failed to save your message. Please try again."],
        },
        { status: 500 }
      );
    }

    // Step 5: Send auto-reply email via Resend
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Upright Solutions <no-reply@upright.ph>";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: formData.email,
      subject: emailSubject,
      html: getAutoReplyEmailHtml(formData.name),
      text: getAutoReplyEmailContent(formData.name),
    });

    if (error) {
      console.error("Resend error:", error);
      // Message was saved, but email failed - still return success with warning
      return NextResponse.json(
        {
          success: true,
          id: savedMessage.id,
          message:
            "Your message has been received. We could not send a confirmation email, but our team will respond soon.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: savedMessage.id,
        message:
          "Your message has been sent successfully. Check your email for confirmation.",
        emailId: data?.id,
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": String(rateLimitResult.remaining),
          "X-RateLimit-Reset": String(rateLimitResult.resetIn),
        },
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: ["An unexpected error occurred. Please try again."],
      },
      { status: 500 }
    );
  }
}
