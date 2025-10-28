import type { Metadata } from "next";
import { TrademarkRevivalIntakeForm } from "./TrademarkRevivalIntakeForm";

export const metadata: Metadata = {
  title: "Trademark Revival Form | Legal Mark Experts",
  description:
    "Revive your abandoned trademark application with Legal Mark Experts. Share key abandonment details and our revival specialists will guide the reinstatement process.",
};

const highlights = [
  {
    title: "Abandonment Diagnosis",
    description: "We confirm why the USPTO closed your file and what evidence is still usable.",
  },
  {
    title: "Revival Strategy",
    description: "Get a tailored response plan covering petitions, statements of use, or refiling paths.",
  },
  {
    title: "USPTO Follow-Through",
    description: "We prepare filings, manage attorney responses, and track deadlines to reinstatement.",
  },
] as const;

export default function TrademarkRevivalFormPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <section className="relative overflow-hidden border-b border-[#e0d9f7] bg-gradient-to-r from-[#6c4cb1] via-[#7d5ed4] to-[#9a7ef0] text-white">
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_70%)]" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-5 py-20 sm:px-8 lg:px-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-white/70">Trademark Revival Intake Form</p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Restart Your USPTO Application with Legal Mark Experts
            </h1>
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">
              Share what happened with your abandoned filing and our revival attorneys will confirm the best route to get
              your mark back on track. Expect a personal review and next steps within one business day.
            </p>
          </div>
          <div className="grid flex-1 gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:grid-cols-2">
            {highlights.map((item) => (
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
            <h2 className="text-2xl font-semibold text-[#212121] sm:text-3xl">Tell Us About Your Abandoned Filing</h2>
            <p className="text-sm leading-relaxed text-[#4b4b63] sm:text-base">
              Provide the details you know about the original application, why it went abandoned, and how the brand is
              being used today. We will confirm the best route to revive or refile and outline the timeline, costs, and
              any missing evidence we will need from you.
            </p>
          </div>

          <TrademarkRevivalIntakeForm />
        </div>
      </section>
    </main>
  );
}

