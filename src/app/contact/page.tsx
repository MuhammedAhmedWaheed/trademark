// app/contact/page.tsx
"use client";

import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { JSX } from "react/jsx-runtime";


export default function ContactPage(): JSX.Element {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const resetFeedback = useCallback(() => {
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }, [status]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: (formData.get("name") ?? "").toString().trim(),
      email: (formData.get("email") ?? "").toString().trim(),
      phone: (formData.get("phone") ?? "").toString().trim(),
      subject: (formData.get("subject") ?? "").toString().trim(),
      message: (formData.get("message") ?? "").toString().trim(),
    };

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => null)) as { success?: boolean; error?: string } | null;

      if (!response.ok || !data?.success) {
        const message =
          data?.error ??
          "We couldn't send your message right now. Please try again or email support@legalmarkexperts.com.";
        setStatus("error");
        setFeedback(message);
        return;
      }

      setStatus("success");
      setFeedback("Thanks! We'll get back to you shortly.");
      form.reset();
    } catch (error) {
      console.error("Failed to submit contact form", error);
      setStatus("error");
      setFeedback("We couldn't send your message. Check your connection and try again.");
    }
  };

  return (
    <main className="bg-white font-[var(--font-body)] text-[#333333]">
      {/* Hero / Title */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pt-10 md:pt-14">
        <h1 className="font-[var(--font-heading)] text-3xl tracking-tight text-[#212121] md:text-[34px]">
          Contact Us
        </h1>
        <p className="mt-2 max-w-3xl text-[15px] leading-7">
          We&apos;re here to help with searches, filings, and anything else related to your brand.
        </p>
      </section>

      {/* Quick contact cards */}
      <section className="mx-auto w-full max-w-[1200px] px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            icon={<MessageSquare className="h-5 w-5 text-white" />}
            title="Live Chat"
            description={
              <>
                We’d love to talk about how we can help you.{" "}
                <Link href="/chat" className="text-[#6c4cb1] underline underline-offset-4">
                  Start a live chat
                </Link>
                .
              </>
            }
          />
          <ContactCard
            icon={<Phone className="h-5 w-5 text-white" />}
            title="Phone"
            description={
              <>
                Call us Mon–Fri 9AM–6PM CST&nbsp;
                <Link href="tel:+18777214579" className="text-[#6c4cb1] underline underline-offset-4">
                  (877) 721-4579
                </Link>
              </>
            }
          />
          <ContactCard
            icon={<Mail className="h-5 w-5 text-white" />}
            title="Email"
            description={
              <>
                You can email us anytime at{" "}
                <Link
                  href="mailto:support@legalmarkexperts.com"
                  className="text-[#6c4cb1] underline underline-offset-4"
                >
                  support@legalmarkexperts.com
                </Link>
                .
              </>
            }
          />
        </div>
      </section>

      {/* Map + Form */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Map */}
          <div className="order-2 overflow-hidden rounded-2xl border border-[#E0E0E0] lg:order-1 lg:col-span-6">
            <div className="flex items-center gap-2 bg-[#F5F5F5] px-4 py-3">
              <MapPin className="h-4 w-4 text-[#6c4cb1]" />
              <p className="text-sm">
                440 E. Southern Avenue, Tempe, AZ 85282 —{" "}
                <a
                  className="text-[#6c4cb1] underline underline-offset-4"
                  href="https://maps.google.com/?q=440 E. Southern Avenue, Tempe, AZ 85282"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
              </p>
            </div>
            <iframe
              title="Office location"
              className="h-[380px] w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106936.61698646378!2d-111.997!3d33.4147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08f2b6d1c9af%3A0xe3a3a8a2b7a9f7e!2sTempe%2C%20AZ!5e0!3m2!1sen!2sus!4v1699999999999"
            />
          </div>

          {/* Form */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <p className="mb-2 text-sm font-semibold tracking-wide text-[#6c4cb1]">Discover More</p>
            <h2 className="font-[var(--font-heading)] text-3xl tracking-tight text-[#212121]">
              Send us a message
            </h2>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit} onChange={resetFeedback} noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" id="name" required>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Full Name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" id="email" required>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="Email Address"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Phone" id="phone" required>
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  placeholder="Mobile Number"
                  className={inputClass}
                />
              </Field>

              <Field label="Subject" id="subject">
                <input id="subject" name="subject" type="text" placeholder="Subject" className={inputClass} />
              </Field>

              <Field label="Message" id="message">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className={inputClass + " resize-y"}
                />
              </Field>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6c4cb1] px-6 py-3 font-[var(--font-heading)] text-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6c4cb1] disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === "loading"}
              >
                <Send className="h-4 w-4" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && feedback && (
                <p role="status" className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-3 text-sm text-[#166534]">
                  {feedback}
                </p>
              )}

              {status === "error" && feedback && (
                <p role="alert" className="rounded-xl border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]">
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------ Subcomponents ------------------ */

function ContactCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[#E0E0E0] bg-white p-5 transition hover:shadow-sm">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#6c4cb1] shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="font-[var(--font-heading)] text-[15px] text-[#212121]">{title}</h3>
        <p className="mt-1 text-[14px] leading-6">{description}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1 block text-sm font-medium text-[#212121]">
        {label} {required ? <span className="text-[#6c4cb1]">*</span> : null}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#E0E0E0] bg-white px-4 py-3 text-[15px] placeholder:text-[#9ca3af] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/40";
