import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailConfig } from "@/lib/email";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const env = getEmailConfig();

    const payload = (await request.json().catch(() => null)) as ContactPayload | null;

    if (!payload) {
      return NextResponse.json(
        { success: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const name = (payload.name ?? "").trim();
    const email = (payload.email ?? "").trim();
    const phone = (payload.phone ?? "").trim();
    const subject = (payload.subject ?? "").trim();
    const message = (payload.message ?? "").trim();

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and phone are required.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.user,
        pass: env.pass,
      },
    });

    const safeSubject =
      subject.length > 0
        ? subject
        : `New contact form submission from ${name}`;

    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <p><strong>Message:</strong></p>
      <p>${message ? message.replace(/\n/g, "<br/>") : "Not provided"}</p>
    `;

    const text = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${safeSubject}

Message:
${message || "Not provided"}
    `.trim();

    await transporter.sendMail({
      from: `${name} <${env.user}>`,
      to: env.to,
      replyTo: `${name} <${email}>`,
      subject: safeSubject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Failed to send email", error);

    const message =
      error instanceof Error ? error.message : "Unable to send your message.";
    const status = message.toLowerCase().includes("missing environment")
      ? 500
      : 502;

    return NextResponse.json({ success: false, error: message }, { status });
  }
}

