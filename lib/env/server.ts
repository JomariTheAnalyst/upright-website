import "server-only";
import { z } from "zod";

/**
 * Server-side environment variables.
 * Validated once at import time; importing this file from a client
 * component is a build error thanks to `server-only`.
 */
const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.url(),
  HCAPTCHA_SECRET_KEY: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_EMAIL: z.string().min(1).default("Upright Solutions <no-reply@upright.ph>"),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid server environment variables:", z.treeifyError(parsed.error).properties);
  throw new Error("Invalid server environment variables. See .env.example.");
}

export const env = parsed.data;
