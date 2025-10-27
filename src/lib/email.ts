export type EmailConfig = {
  user: string;
  pass: string;
  to: string;
};

export function getEmailConfig(): EmailConfig {
  const user = process.env.CONTACT_EMAIL_USER;
  const pass = process.env.CONTACT_EMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_EMAIL_TO;

  const missing = [
    !user && "CONTACT_EMAIL_USER",
    !pass && "CONTACT_EMAIL_APP_PASSWORD",
    !to && "CONTACT_EMAIL_TO",
  ].filter(Boolean) as string[];

  if (missing.length) {
    throw new Error(
      `Missing environment variables: ${missing.join(
        ", "
      )}. Check your .env configuration.`
    );
  }

  return { user: user!, pass: pass!, to: to! };
}

