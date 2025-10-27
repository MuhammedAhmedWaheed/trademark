import type { Metadata } from "next";
import { TrademarkIntakeForm } from "./TrademarkIntakeForm";

export const metadata: Metadata = {
  title: "Trademark Registration Form | Legal Mark Experts",
  description:
    "Start your trademark registration with Legal Mark Experts. Share your brand details and our specialists will follow up with tailored guidance.",
};

const guidance = [
  {
    title: "Fast Intake",
    description: "Submit brand, owner, and goods or services details in minutes.",
  },
  {
    title: "Expert Review",
    description: "A senior case analyst verifies eligibility and confirms the filing strategy.",
  },
  {
    title: "Guided Filing",
    description: "We prepare USPTO forms, specimens, and submit on your behalf.",
  },
] as const;

export default function TrademarkRegistrationFormPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <section className="relative overflow-hidden border-b border-[#e0d9f7] bg-gradient-to-r from-[#6c4cb1] via-[#7d5ed4] to-[#9a7ef0] text-white">
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_70%)]" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-5 py-20 sm:px-8 lg:px-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-white/70">Trademark Registration Form</p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Secure Your Brand with Legal Mark Experts
            </h1>
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">
              Complete the intake form below and our trademark professionals will review your submission, confirm next
              steps, and send you a custom proposal with transparent pricing.
            </p>
          </div>
          <div className="grid flex-1 gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:grid-cols-2">
            {guidance.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5fb] py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold text-[#212121] sm:text-3xl">Tell Us About Your Trademark</h2>
            <p className="text-sm leading-relaxed text-[#4b4b63] sm:text-base">
              Provide as much detail as you can. If anything is unclear, we will reach out before we file with the USPTO.
              After you submit, expect a confirmation email within one business day.
            </p>
          </div>

          <TrademarkIntakeForm />
        </div>
      </section>
    </main>
  );
}
