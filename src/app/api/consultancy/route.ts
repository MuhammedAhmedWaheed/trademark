import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailConfig } from "@/lib/email";

type ConsultancyPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const env = getEmailConfig();

    const payload = (await request.json().catch(() => null)) as ConsultancyPayload | null;

    if (!payload) {
      return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
    }

    const firstName = (payload.firstName ?? "").trim();
    const lastName = (payload.lastName ?? "").trim();
    const email = (payload.email ?? "").trim();
    const phone = (payload.phone ?? "").trim();
    const topic = (payload.topic ?? "").trim();
    const message = (payload.message ?? "").trim();

    if (!firstName || !lastName || !email || !phone || !topic) {
      return NextResponse.json(
        {
          success: false,
          error: "First name, last name, email, phone, and topic are required.",
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

    const fullName = `${firstName} ${lastName}`.trim();
    const subject = `New trademark consultancy request from ${fullName}`;

    const html = `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Message:</strong></p>
      <p>${message ? message.replace(/\n/g, "<br/>") : "Not provided"}</p>
    `;

    const text = `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Topic: ${topic}

Message:
${message || "Not provided"}
    `.trim();

    await transporter.sendMail({
      from: `${fullName} <${env.user}>`,
      to: env.to,
      replyTo: `${fullName} <${email}>`,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[consultancy] Failed to send email", error);

    const message =
      error instanceof Error ? error.message : "Unable to submit your request right now.";
    const status = message.toLowerCase().includes("missing environment") ? 500 : 502;

    return NextResponse.json({ success: false, error: message }, { status });
  }
}
