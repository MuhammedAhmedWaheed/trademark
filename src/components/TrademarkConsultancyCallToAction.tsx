'use client';

import Image from "next/image";
import { useCallback, useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function TrademarkConsultancyCallToAction() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const resetFeedback = useCallback(() => {
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      firstName: (formData.get("firstName") ?? "").toString().trim(),
      lastName: (formData.get("lastName") ?? "").toString().trim(),
      phone: (formData.get("phone") ?? "").toString().trim(),
      email: (formData.get("email") ?? "").toString().trim(),
      topic: (formData.get("topic") ?? "").toString().trim(),
      message: (formData.get("message") ?? "").toString().trim(),
    };

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/consultancy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.success) {
        const message =
          data?.error ??
          "We couldn't submit your request right now. Please try again or email support@legalmarkexperts.com.";
        setStatus("error");
        setFeedback(message);
        return;
      }

      setStatus("success");
      setFeedback("Thanks for submitting the form, our senior case analyst will reach you out soon.");
      form.reset();
    } catch (error) {
      console.error("Failed to submit consultancy request", error);
      setStatus("error");
      setFeedback("We couldn't submit your request. Check your connection and try again.");
    }
  };

  return (
    <section id="consultation" className="relative overflow-hidden bg-[#F5F5F5] py-20">
      <div className="pointer-events-none absolute -left-12 top-10 h-28 w-28 rounded-full bg-[#6c4cb1]/15 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-40px] h-40 w-40 rounded-full bg-[#6c4cb1]/10 blur-[140px]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-8 rounded-[32px] bg-white p-8 shadow-[0_36px_120px_-70px_rgba(33,33,33,0.65)]">
          <div className="relative overflow-hidden rounded-[24px]">
            <Image
              src="/consultany.jpg"
              alt="Consultant speaking with client over video call"
              width={720}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#212121] sm:text-3xl font-[var(--font-heading)]">
              During your complimentary strategy call we will:
            </h2>
            <ul className="space-y-4 text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              {[
                "Identify the right protection path for your brand or invention.",
                "Explain each stage of the trademark process and estimated timelines.",
                "Review your documentation and answer specific legal questions.",
                "Provide a transparent, flat-fee proposal tailored to your goals.",
                "Outline next steps so you can move forward confidently after the call.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#333333] font-[var(--font-body)]">
              Calls typically last 20â€“40 minutes. Once you submit the form, we
              will email available times to connect with an experienced attorney.
            </p>
          </div>
        </div>
        <div className="space-y-6 rounded-[32px] bg-white p-8 shadow-[0_36px_120px_-70px_rgba(33,33,33,0.65)]">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)]">
              Book Your Free IP Strategy Call Online
            </p>
            <h3 className="text-3xl font-semibold text-[#212121] font-[var(--font-heading)]">
              Step 1 of 2
            </h3>
            <p className="text-sm text-[#333333] font-[var(--font-body)]">
              Complete the form below to request your consultation. After
              submitting, choose a time that works for you.
            </p>
          </div>
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            onChange={resetFeedback}
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="consult-first-name" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  First Name*
                </label>
                <input
                  id="consult-first-name"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  required
                  autoComplete="given-name"
                  className="h-12 w-full rounded-2xl border border-[#E0E0E0] px-4 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="consult-last-name" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  Last Name*
                </label>
                <input
                  id="consult-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  autoComplete="family-name"
                  className="h-12 w-full rounded-2xl border border-[#E0E0E0] px-4 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="consult-phone" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  Your Phone*
                </label>
                <input
                  id="consult-phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  required
                  autoComplete="tel"
                  className="h-12 w-full rounded-2xl border border-[#E0E0E0] px-4 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="consult-email" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  Your Email*
                </label>
                <input
                  id="consult-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="h-12 w-full rounded-2xl border border-[#E0E0E0] px-4 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="consult-topic" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                What can we help you with?*
              </label>
              <select
                id="consult-topic"
                name="topic"
                className="h-12 w-full rounded-2xl border border-[#E0E0E0] bg-white px-4 text-sm text-[#212121] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose a topic
                </option>
                <option value="Trademark Registration">Trademark Registration</option>
                <option value="Trademark Revival">Trademark Revival</option>
                <option value="Trademark Renewals">Trademark Renewals</option>
                <option value="Office Action Response">Office Action Response</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="consult-message" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                Message (Optional)
              </label>
              <textarea
                id="consult-message"
                name="message"
                rows={4}
                placeholder="Share any details to help us prepare for your call."
                className="w-full rounded-2xl border border-[#E0E0E0] px-4 py-3 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Request My Call"}
              <span className="ml-2 h-0.5 w-6 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </button>
            {status === "success" && feedback && (
              <p
                role="status"
                className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-3 text-sm text-[#166534]"
              >
                {feedback}
              </p>
            )}
            {status === "error" && feedback && (
              <p
                role="alert"
                className="rounded-2xl border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]"
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

















