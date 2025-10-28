"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Search,
  Shield,
  Clock8,
  FileText,
  Globe,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

const CYCLE_DURATION = 5000;

type StepKey = "regular" | "incontestability" | "urgent" | "officeAction" | "international";

type Step = {
  key: StepKey;
  label: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  highlight: string;
  description: string;
  emphasis?: string;
  cta: string;
};

const STEPS: Step[] = [
  {
    key: "regular",
    label: "Regular Renewal",
    icon: Search,
    headline: "Keep Your Trademark Active",
    highlight: "Trademark Active",
    description:
      "Ensure your trademark stays legally protected by renewing it on time. Our specialists manage filings, proof of use, and monitoring so nothing slips.",
    cta: "Start Now",
  },
  {
    key: "incontestability",
    label: "Incontestability",
    subtitle: "Section 15 Filing",
    icon: Shield,
    headline: "Strengthen Your Trademark",
    highlight: "Strengthen Your Trademark",
    description:
      "Secure irrefutable rights with a Section 15 filing. We prepare the evidence, file on schedule, and document every step to fortify your mark.",
    cta: "Start Now",
  },
  {
    key: "urgent",
    label: "Urgent Renewal",
    icon: Clock8,
    headline: "Urgent Action Required",
    highlight: "Urgent Action",
    description:
      "In a grace period? We fast-track filings, respond to notices, and clear the queue before deadlines hit - protecting your mark from costly lapses.",
    cta: "Start Now",
  },
  {
    key: "officeAction",
    label: "Renewal Office Action",
    icon: FileText,
    headline: "Resolve Office Actions Quickly",
    highlight: "Office Actions",
    description:
      "Our attorneys craft precise responses, gather supporting evidence, and keep the USPTO engaged so your renewal stays on track.",
    cta: "Start Now",
  },
  {
    key: "international",
    label: "International",
    icon: Globe,
    headline: "Expand Your Global Protection",
    highlight: "Global Protection",
    description:
      "Coordinate renewals across jurisdictions with a single partner. We manage translations, local counsel, and staggered deadlines worldwide.",
    cta: "Plan a Consultation",
  },
];

export default function RenewalServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STEPS.length);
    }, CYCLE_DURATION);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCycleKey((prev) => prev + 1);
  }, [activeIndex]);

  const activeStep = STEPS[activeIndex];

  const handleActivate = (index: number) => {
    setActiveIndex(index);
    setCycleKey((prev) => prev + 1);
  };

  return (
    <section className="bg-[#f5f5f5] py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="space-y-3 text-center">
          <h2 className="text-3xl text-[#212121] sm:text-[2.5rem] font-[var(--font-heading)]">
            Full Service{" "}
            <span className="text-[#6c4cb1]">Trademark Renewal</span>
          </h2>
          <p className="text-base text-[#333333] sm:text-lg font-[var(--font-body)]">
            Renew your trademark to keep legal protection with guidance tailored for every renewal scenario.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,270px)] lg:items-start">
          <aside className="space-y-4 mx-auto w-full max-w-sm lg:mx-0">
            <ul className="space-y-4">
              {STEPS.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeIndex;

                return (
                  <li key={step.key} className="relative">
                    <button
                      type="button"
                      onClick={() => handleActivate(index)}
                    className={cn(
                      "relative flex w-full items-center gap-3 rounded-full border px-4 py-3 text-left transition duration-200 shadow-sm shadow-black/5",
                      isActive
                        ? "border-transparent bg-[#6c4cb1] text-white shadow-[0_12px_30px_-18px_rgba(108,76,177,0.9)] hover:border-transparent"
                        : "border-[#d7dcf1] bg-white text-[#1b1b3a] hover:border-[#b8c3ef]"
                    )}
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-full border text-[var(--font-heading)] text-base",
                          isActive
                            ? "border-white/30 bg-white/20 text-white"
                            : "border-[#d7dcf1] bg-[#f5f6ff] text-[#6c4cb1]"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col leading-tight">
                        {step.subtitle && (
                          <span
                            className={cn(
                              "text-[11px] font-semibold uppercase tracking-[0.08em]",
                              isActive ? "text-white/70" : "text-[#6c4cb1]"
                            )}
                          >
                            {step.subtitle}
                          </span>
                        )}
                        <span
                          className={cn(
                            "text-sm font-[var(--font-heading)]",
                            isActive ? "text-white" : "text-[#1b1b3a]"
                          )}
                        >
                          {step.label}
                        </span>
                      </span>

                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="relative flex justify-center">
            <div
              key={`${activeStep.key}-card-${cycleKey}`}
              className="w-full max-w-sm animate-fade-scale sm:max-w-md"
            >
              <PhoneFrame variant={activeStep.key} />
            </div>
          </div>

          <div
            key={`${activeStep.key}-copy-${cycleKey}`}
            className="space-y-6 text-center animate-fade-up lg:text-left"
          >
            <div className="space-y-3">
              <h3 className="text-xl text-[#212121] sm:text-2xl font-[var(--font-heading)]">
                {activeStep.headline.split(activeStep.highlight)[0]}
                <span className="text-[#6c4cb1]">{activeStep.highlight}</span>
                {activeStep.headline.split(activeStep.highlight)[1]}
              </h3>
              <p className="text-sm text-[#333333] sm:text-base font-[var(--font-body)]">
                {activeStep.description}
              </p>
            </div>
            <Link
              href="/trademark-registration-form"
              className="mx-auto inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] lg:mx-0"
            >
              {activeStep.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ variant }: { variant: StepKey }) {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] rounded-[46px] border border-white bg-white/80 p-5 shadow-[0_25px_50px_-35px_rgba(24,33,77,0.45)] backdrop-blur sm:max-w-[380px] sm:p-6">
      <div className="absolute left-1/2 top-5 h-1.5 w-20 -translate-x-1/2 rounded-full bg-[#e5e7fb]" />
      <div className="absolute left-4 top-6 h-8 w-8 rounded-full border border-[#e5e7fb] bg-white" />
      <div className="absolute right-4 top-6 h-8 w-8 rounded-full border border-[#e5e7fb] bg-white" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#dfe4ff] sm:h-[320px] sm:w-[320px]" />

      <div className="mt-12 flex h-full flex-col items-center justify-center">
        {variant === "regular" && <RegularCard />}
        {variant === "urgent" && <UrgentCard />}
        {variant === "incontestability" && <IncontestabilityCard />}
        {variant === "officeAction" && <OfficeActionCard />}
        {variant === "international" && <InternationalCard />}
      </div>
    </div>
  );
}

function RegularCard() {
  return (
    <div className="relative w-full max-w-xs rounded-[32px] border border-[#e4e5fb] bg-[#f4f2ff] p-5 text-[#212121] shadow-[0_18px_40px_-30px_rgba(43,24,77,0.6)]">
      <span className="absolute -top-6 left-6 rounded-full bg-white px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6c4cb1]">
        Trademarkia
      </span>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-[#6c4cb1]">
          M
        </div>
        <div>
          <p className="text-sm font-[var(--font-heading)]">Meta</p>
          <p className="text-xs text-[#5c5c76]">RN 88713620</p>
        </div>
      </div>
      <div className="mt-4 space-y-3 text-xs">
        <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_6px_20px_-12px_rgba(108,76,177,0.45)]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#6c4cb1]/70">Status</p>
            <p className="mt-1 flex items-center gap-1 font-semibold text-[#6c4cb1]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#6c4cb1]" />
              Registered
            </p>
          </div>
          <span className="text-[11px] text-[#4b4b63]">on 26 Jun 2020</span>
        </div>
        <div className="rounded-2xl border border-dashed border-[#d7dcf1] bg-white/70 px-4 py-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6c4cb1]/70">Renew By</p>
          <p className="mt-1 text-sm text-[#212121] font-[var(--font-heading)]">6 Jun 2026</p>
          <p className="text-[11px] font-semibold text-[#6c4cb1]">25 days to go</p>
        </div>
      </div>
    </div>
  );
}

function UrgentCard() {
  return (
    <div className="relative w-full max-w-xs rounded-[32px] border border-[#d8cff7] bg-[#f4f2ff] p-5 text-[#212121] shadow-[0_18px_42px_-24px_rgba(108,76,177,0.35)]">
      <span className="absolute -top-6 left-6 rounded-full bg-[#6c4cb1] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
        Alert
      </span>
      <div className="flex flex-col items-center justify-center gap-3 rounded-[26px] border border-[#d8cff7] bg-white px-6 py-8 text-center shadow-[0_10px_34px_-16px_rgba(108,76,177,0.4)]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eee8ff] text-[#6c4cb1]">
          <AlertTriangle className="h-9 w-9" />
        </div>
        <p className="text-base font-[var(--font-heading)] text-[#6c4cb1]">
          You&apos;re in the Grace Period
        </p>
        <p className="text-xs text-[#4a4a4a] font-[var(--font-body)]">
          Submit renewal documents within 25 days to maintain protection.
        </p>
      </div>
    </div>
  );
}

function IncontestabilityCard() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute left-1/2 top-3 w-40 -translate-x-1/2 rounded-full border border-dashed border-[#d5dcff]" />
      <div className="absolute -left-5 top-16 h-9 w-9 rounded-full border border-[#dbe0ff] bg-white shadow-[0_8px_20px_-18px_rgba(108,76,177,0.65)]" />
      <div className="absolute -right-5 bottom-8 h-9 w-9 rounded-full border border-[#dbe0ff] bg-white shadow-[0_8px_20px_-18px_rgba(108,76,177,0.65)]" />

      <div className="relative -rotate-3 rounded-[30px] border border-[#e6e8fa] bg-white/90 p-5 shadow-[0_24px_55px_-35px_rgba(19,36,79,0.55)]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3edff] text-lg font-semibold text-[#6c4cb1]">
            M
          </div>
          <div>
            <p className="text-sm font-[var(--font-heading)]">Meta</p>
            <p className="text-xs text-[#5c5c76]">RN 88713620</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 text-xs">
          <div className="rounded-2xl border border-dashed border-[#d7dcf1] px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#6c4cb1]/70">
              Section 15 Filing
            </p>
            <p className="mt-1 flex items-center gap-1 text-sm  text-[#1b1b3a] font-[var(--font-heading)]">
              Incontestability Ready
            </p>
            <p className="text-[11px] text-[#4b4b63]">
              Evidence prepared - Submit by 26 Jun 2025
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-[#f1ecff] px-4 py-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6c4cb1]">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold text-[#6c4cb1]">Stronger Protection</p>
              <p className="text-[11px] text-[#4b4b63]">Challenges become significantly harder.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OfficeActionCard() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute -left-6 top-10 h-10 w-10 rounded-full border border-[#dbe0ff] bg-white shadow-[0_12px_30px_-24px_rgba(33,49,109,0.55)]" />
      <div className="absolute -right-6 bottom-12 h-10 w-10 rounded-full border border-[#dbe0ff] bg-white shadow-[0_12px_30px_-24px_rgba(33,49,109,0.55)]" />

      <div className="relative rounded-[32px] border border-[#e4e6fb] bg-[#f5f7ff] p-5 text-[#1b1b3a] shadow-[0_24px_55px_-35px_rgba(19,36,79,0.55)]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-semibold text-[#6c4cb1]">
            M
          </div>
          <div>
            <p className="text-sm font-[var(--font-heading)]">Meta - Facebook Inc.</p>
            <p className="text-xs text-[#5c5c76]">RN 88713620 - Classes 45 &amp; 08</p>
          </div>
        </div>

        <div className="mt-4 space-y-3 text-xs">
          <div className="rounded-2xl border border-dashed border-[#d1d8f6] bg-white px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#6c4cb1]/70">
              Renewal Office Action
            </p>
            <p className="mt-1 flex items-center gap-1 text-[#1b1b3a] font-[var(--font-heading)]">
              Response Required
            </p>
            <p className="text-[11px] text-[#4b4b63]">Submit evidence by 6 Jun 2026</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_12px_30px_-30px_rgba(108,76,177,0.65)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0ecff] text-[#6c4cb1]">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold text-[#6c4cb1]">Draft in Review</p>
              <p className="text-[11px] text-[#4b4b63]">
                Attorney notes ready for client approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InternationalCard() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute -left-4 top-8 h-9 w-9 rounded-full border border-[#dbe0ff] bg-white shadow-[0_8px_22px_-18px_rgba(19,36,79,0.5)]" />
      <div className="absolute -right-6 bottom-8 h-10 w-10 rounded-full border border-[#dbe0ff] bg-white shadow-[0_8px_22px_-18px_rgba(19,36,79,0.5)]" />

      <div className="relative rounded-[34px] border border-[#e6e8fb] bg-white/90 p-6 shadow-[0_26px_58px_-38px_rgba(19,36,79,0.5)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-[var(--font-heading)] text-[#1b1b3a]">
            Global Renewal Plan
          </p>
          <span className="rounded-full bg-[#f2edff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6c4cb1]">
            Active
          </span>
        </div>

        <div className="mt-4 space-y-3 text-xs text-[#4b4b63]">
          <div className="grid gap-3 rounded-2xl bg-[#f5f6ff] p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#1b1b3a] font-[var(--font-heading)]">
                EUIPO
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#6c4cb1]">
                Due Mar 2026
              </span>
            </div>
            <p>Translations submitted - Attorney filing scheduled.</p>
          </div>

          <div className="grid gap-3 rounded-2xl border border-dashed border-[#dbe0ff] p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#1b1b3a] font-[var(--font-heading)]">
                Canada
              </span>
              <span className="rounded-full bg-[#f0ecff] px-3 py-1 text-[10px] font-semibold text-[#6c4cb1]">
                In Progress
              </span>
            </div>
            <p>Use evidence ready - Filing scheduled for 18 Feb 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


