import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Buffer } from "node:buffer";
import { getEmailConfig } from "@/lib/email";

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10 MB

type AssetType = "name" | "logo" | "slogan";

const assetLabels: Record<AssetType, string> = {
  name: "Name",
  logo: "Logo",
  slogan: "Slogan",
};

type Attachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

type AssetDetail = {
  type: AssetType;
  summary: string;
};

export async function POST(request: Request) {
  try {
    const env = getEmailConfig();
    const formData = await request.formData();

    const selectedAssets = formData
      .getAll("assets")
      .map((value) => value.toString().toLowerCase() as AssetType);

    const fullName = (formData.get("fullName") ?? "").toString().trim();
    const company = (formData.get("company") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const phone = (formData.get("phone") ?? "").toString().trim();
    const goodsServices = (formData.get("goodsServices") ?? "")
      .toString()
      .trim();
    const currentUse = (formData.get("currentUse") ?? "").toString().trim();
    const websiteUrl = (formData.get("websiteUrl") ?? "").toString().trim();
    const additionalNotes = (formData.get("additionalNotes") ?? "")
      .toString()
      .trim();
    const subscribe =
      (formData.get("subscribe") ?? "").toString().toLowerCase() === "on";

    if (!fullName || !email || !phone || !goodsServices) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Full name, email, phone, and goods & services details are required.",
        },
        { status: 400 }
      );
    }

    if (!selectedAssets.length) {
      return NextResponse.json(
        {
          success: false,
          error: "Please select at least one asset to protect.",
        },
        { status: 400 }
      );
    }

    const assetDetails: AssetDetail[] = [];
    const attachments: Attachment[] = [];

    for (const assetType of selectedAssets) {
      switch (assetType) {
        case "name": {
          const markName = (formData.get("markName") ?? "")
            .toString()
            .trim();
          if (!markName) {
            return NextResponse.json(
              {
                success: false,
                error: "Trademark name is required when Name is selected.",
              },
              { status: 400 }
            );
          }
          assetDetails.push({
            type: assetType,
            summary: `Trademark name: ${markName}`,
          });
          break;
        }

        case "slogan": {
          const sloganText = (formData.get("sloganText") ?? "")
            .toString()
            .trim();
          if (!sloganText) {
            return NextResponse.json(
              {
                success: false,
                error: "Please provide the slogan text.",
              },
              { status: 400 }
            );
          }
          assetDetails.push({
            type: assetType,
            summary: `Slogan: ${sloganText}`,
          });
          break;
        }

        case "logo": {
          const logoFile = formData.get("logoFile");
          if (!(logoFile instanceof File) || logoFile.size === 0) {
            return NextResponse.json(
              {
                success: false,
                error: "Logo file upload is required when Logo is selected.",
              },
              { status: 400 }
            );
          }
          if (logoFile.size > MAX_UPLOAD_BYTES) {
            return NextResponse.json(
              {
                success: false,
                error: "Logo file is larger than 10 MB.",
              },
              { status: 413 }
            );
          }
          const arrayBuffer = await logoFile.arrayBuffer();
          attachments.push({
            filename: logoFile.name || "logo-upload",
            content: Buffer.from(arrayBuffer),
            contentType: logoFile.type || undefined,
          });
          assetDetails.push({
            type: assetType,
            summary: `Logo file attached (${logoFile.type || "unknown type"})`,
          });
          break;
        }

        default:
          assetDetails.push({
            type: assetType,
            summary: `${assetLabels[assetType] ?? assetType} provided.`,
          });
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.user,
        pass: env.pass,
      },
    });

    const subject = `New trademark registration inquiry – ${fullName}`;

    const assetSummaryHtml = assetDetails
      .map(
        (item) =>
          `<li><strong>${assetLabels[item.type]}:</strong> ${item.summary
            .split("\n")
            .map((line) => line.trim())
            .join("<br/>")}</li>`
      )
      .join("");

    const assetSummaryText = assetDetails
      .map(
        (item) =>
          `${assetLabels[item.type]}: ${item.summary
            .split("\n")
            .map((line) => line.trim())
            .join(" ")}`
      )
      .join("\n");

    const html = `
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Goods & Services:</strong></p>
      <p>${goodsServices.replace(/\n/g, "<br/>")}</p>
      <p><strong>Website URL:</strong> ${websiteUrl || "Not provided"}</p>
      <p><strong>Current Use:</strong></p>
      <p>${currentUse ? currentUse.replace(/\n/g, "<br/>") : "Not provided"}</p>
      <p><strong>Assets to Protect:</strong></p>
      <ul>${assetSummaryHtml}</ul>
      <p><strong>Additional Notes:</strong></p>
      <p>${additionalNotes ? additionalNotes.replace(/\n/g, "<br/>") : "Not provided"}</p>
      <p><strong>Subscribed to updates:</strong> ${subscribe ? "Yes" : "No"}</p>
    `;

    const text = `
Full Name: ${fullName}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone}

Goods & Services:
${goodsServices}

Website URL:
${websiteUrl || "Not provided"}

Current Use:
${currentUse || "Not provided"}

Assets to Protect:
${assetSummaryText}

Additional Notes:
${additionalNotes || "Not provided"}

Subscribed to updates: ${subscribe ? "Yes" : "No"}
    `.trim();

    await transporter.sendMail({
      from: `${fullName} <${env.user}>`,
      to: env.to,
      replyTo: `${fullName} <${email}>`,
      subject,
      text,
      html,
      attachments: attachments.length ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[trademark-registration] Failed to send email", error);

    const message =
      error instanceof Error ? error.message : "Unable to submit the form.";
    const status = message.toLowerCase().includes("missing environment")
      ? 500
      : 502;

    return NextResponse.json({ success: false, error: message }, { status });
  }
}
