import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailConfig } from "@/lib/email";

const abandonmentReasonLabels: Record<string, string> = {
  "missed-office-action": "Missed Office Action",
  "missed-sou": "Missed Statement of Use (SOU)",
  "uspto-rejection": "USPTO Rejection",
  other: "Other",
  unknown: "Don't Know",
};

const usageChannelLabels: Record<string, string> = {
  website: "Website",
  amazon: "Amazon",
  shopify: "Shopify",
  instagram: "Instagram",
  "product-label": "Product Label",
  none: "None yet",
};

export async function POST(request: Request) {
  try {
    const env = getEmailConfig();
    const formData = await request.formData();

    const fullName = (formData.get("fullName") ?? "").toString().trim();
    const company = (formData.get("company") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const phone = (formData.get("phone") ?? "").toString().trim();

    const trademarkName = (formData.get("trademarkName") ?? "").toString().trim();
    const serialNumber = (formData.get("serialNumber") ?? "").toString().trim();
    const goodsServices = (formData.get("goodsServices") ?? "").toString().trim();
    const abandonmentDate = (formData.get("abandonmentDate") ?? "").toString().trim();
    const abandonmentReason = (formData.get("abandonmentReason") ?? "").toString().trim();

    const brandUse = (formData.get("brandUse") ?? "").toString().trim();
    const presenceUrl = (formData.get("presenceUrl") ?? "").toString().trim();
    const usageChannels = formData.getAll("usageChannels").map((value) => value.toString());

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Full name, email, and phone number are required.",
        },
        { status: 400 },
      );
    }

    if (!trademarkName || !goodsServices || !abandonmentReason) {
      return NextResponse.json(
        {
          success: false,
          error: "Trademark name, goods/services description, and abandonment reason are required.",
        },
        { status: 400 },
      );
    }

    if (!brandUse) {
      return NextResponse.json(
        {
          success: false,
          error: "Please tell us whether you are still using the brand.",
        },
        { status: 400 },
      );
    }

    if (brandUse === "yes" && usageChannels.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Please let us know where the brand is used so we can prepare the right evidence.",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.user,
        pass: env.pass,
      },
    });

    const reasonLabel =
      abandonmentReasonLabels[abandonmentReason] ?? (abandonmentReason || "Not provided");
    const usageSummary =
      usageChannels.length > 0
        ? usageChannels.map((value) => usageChannelLabels[value] ?? value).join(", ")
        : brandUse === "yes"
          ? "Not specified (follow up needed)"
          : "Client reports the mark is not currently in use.";

    const formattedAbandonmentDate = (() => {
      if (!abandonmentDate) {
        return "Not provided";
      }
      const parsed = new Date(abandonmentDate);
      if (Number.isNaN(parsed.getTime())) {
        return abandonmentDate;
      }
      return parsed.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    })();

    const subject = `Trademark revival inquiry - ${trademarkName || fullName}`;

    const html = `
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <hr style="margin:16px 0;border:none;border-top:1px solid #e5e0f9;" />
      <p><strong>Trademark Name:</strong> ${trademarkName}</p>
      <p><strong>USPTO Serial Number:</strong> ${serialNumber || "Not provided"}</p>
      <p><strong>Goods / Services Description:</strong></p>
      <p>${goodsServices.replace(/\n/g, "<br/>")}</p>
      <p><strong>Date of Abandonment:</strong> ${formattedAbandonmentDate}</p>
      <p><strong>Reason for Abandonment:</strong> ${reasonLabel}</p>
      <hr style="margin:16px 0;border:none;border-top:1px solid #e5e0f9;" />
      <p><strong>Still in Use?:</strong> ${brandUse === "yes" ? "Yes" : "No"}</p>
      <p><strong>Usage Channels:</strong> ${usageSummary}</p>
      <p><strong>Website / Social Link:</strong> ${presenceUrl || "Not provided"}</p>
    `;

    const text = `
Full Name: ${fullName}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone}

Trademark Name: ${trademarkName}
USPTO Serial Number: ${serialNumber || "Not provided"}
Goods / Services Description:
${goodsServices}

Date of Abandonment: ${formattedAbandonmentDate}
Reason for Abandonment: ${reasonLabel}

Still in Use?: ${brandUse === "yes" ? "Yes" : "No"}
Usage Channels: ${usageSummary}
Website / Social Link: ${presenceUrl || "Not provided"}
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
    console.error("[trademark-revival] Failed to send email", error);
    const message = error instanceof Error ? error.message : "Unable to submit the form.";
    const status = message.toLowerCase().includes("missing environment") ? 500 : 502;
    return NextResponse.json({ success: false, error: message }, { status });
  }
}
