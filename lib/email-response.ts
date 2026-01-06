export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
}

export function getAutoReplyEmailContent(name: string): string {
  return `Hello ${name},

Thank you for contacting Upright Solutions and Systems Consultancy Corp. We've successfully received your message and appreciate you taking the time to reach out.

Our team is currently reviewing your inquiry, and a representative will get back to you as soon as possible—typically within 1–2 business days.

If your request is urgent, you may also contact us directly at info@upright.ph.

We look forward to assisting you.

Kind regards,
Upright Solutions Team`;
}

export function getAutoReplyEmailHtml(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
          <!-- Logo Header -->
          <tr>
            <td style="padding: 40px 40px 30px 40px; text-align: center; border-bottom: 1px solid #eaeaea;">
              <img 
                src="https://upright.ph/images/logo/upright-logo.png" 
                alt="Upright Solutions" 
                width="180" 
                style="display: block; margin: 0 auto; max-width: 180px; height: auto;"
              />
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <h1 style="margin: 0 0 24px 0; font-size: 24px; font-weight: 600; color: #1a2b4a; line-height: 1.3;">
                Thank You for Reaching Out
              </h1>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                Hello ${name},
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                Thank you for contacting <strong>Upright Solutions and Systems Consultancy Corp.</strong> We've successfully received your message and appreciate you taking the time to reach out.
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                Our team is currently reviewing your inquiry, and a representative will get back to you as soon as possible—typically within <strong>1–2 business days</strong>.
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                If your request is urgent, you may also contact us directly at 
                <a href="mailto:info@upright.ph" style="color: #0000ff; text-decoration: none;">info@upright.ph</a>.
              </p>
              
              <p style="margin: 0 0 8px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                We look forward to assisting you.
              </p>
              
              <p style="margin: 30px 0 0 0; font-size: 16px; line-height: 1.6; color: #374151;">
                Kind regards,<br/>
                <strong style="color: #1a2b4a;">Upright Solutions Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f9fafb; border-top: 1px solid #eaeaea; border-radius: 0 0 8px 8px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">
                      Upright Solutions and Systems Consultancy Corp.
                    </p>
                    <p style="margin: 0 0 8px 0; font-size: 13px; color: #9ca3af;">
                      Manila, Philippines
                    </p>
                    <p style="margin: 0; font-size: 13px; color: #9ca3af;">
                      <a href="mailto:info@upright.ph" style="color: #6b7280; text-decoration: none;">info@upright.ph</a>
                      &nbsp;|&nbsp;
                      <a href="https://upright.ph" style="color: #6b7280; text-decoration: none;">upright.ph</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
        
        <!-- Unsubscribe / Legal -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto 0 auto;">
          <tr>
            <td style="text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">
                This is an automated response. Please do not reply directly to this email.
              </p>
            </td>
          </tr>
        </table>
        
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

export const emailSubject = "Thank You for Contacting Upright Solutions";
