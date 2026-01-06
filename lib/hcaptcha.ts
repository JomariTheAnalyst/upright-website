interface HCaptchaVerifyResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  credit?: boolean;
  "error-codes"?: string[];
}

export interface HCaptchaResult {
  success: boolean;
  error?: string;
}

export async function verifyHCaptcha(token: string): Promise<HCaptchaResult> {
  const secretKey = process.env.HCAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("HCAPTCHA_SECRET_KEY is not configured");
    return { success: false, error: "Server configuration error" };
  }

  if (!token) {
    return { success: false, error: "Verification token is missing" };
  }

  try {
    const response = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    if (!response.ok) {
      console.error("hCaptcha API error:", response.status);
      return { success: false, error: "Verification service unavailable" };
    }

    const data: HCaptchaVerifyResponse = await response.json();

    if (data.success) {
      return { success: true };
    }

    // Log error codes for debugging (server-side only)
    if (data["error-codes"]) {
      console.error("hCaptcha verification failed:", data["error-codes"]);
    }

    return { success: false, error: "Verification failed. Please try again." };
  } catch (error) {
    console.error("hCaptcha verification error:", error);
    return { success: false, error: "Verification service unavailable" };
  }
}
