import { z } from "zod";

/**
 * Client-safe environment variables (NEXT_PUBLIC_* only).
 * Each key must be referenced as `process.env.NEXT_PUBLIC_X` literally
 * so Next.js can inline it into the browser bundle.
 */
const schema = z.object({
  NEXT_PUBLIC_HCAPTCHA_SITE_KEY: z.string().min(1),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

const parsed = schema.safeParse({
  NEXT_PUBLIC_HCAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
});

if (!parsed.success) {
  console.error("❌ Invalid client environment variables:", z.treeifyError(parsed.error).properties);
  throw new Error("Invalid client environment variables. See .env.example.");
}

export const clientEnv = parsed.data;
