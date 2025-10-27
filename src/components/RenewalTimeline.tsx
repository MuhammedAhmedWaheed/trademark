"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Zap } from "lucide-react";

const AUTO_ROTATE = 6200;

type Tone = "neutral" | "primary" | "warning";

type TimelineStage = {
  id: string;
  label: string;
  heading: string;
  highlight?: string;
  description: string;
  badge?: string;
  badgeTone?: Tone;
  cta?: string;
  callout?: {
    heading: string;
    label: string;
    tone: Tone;
  };
};

const STAGES: TimelineStage[] = [
  {
    id: "filing",
    label: "Trademark Filing",
    heading: "Initial trademark filing and registration process.",
    highlight: "Initial trademark",
    description:
      "Start your protection journey with expert-prepared applications, precise classifications, and proactive USPTO monitoring.",
    badge: "Start Strong",
    badgeTone: "neutral",
    cta: "Renew Now",
  },
  {
    id: "first",
    label: "The 5th - 6th Year",
    heading: "First Renewal Period",
    highlight: "First Renewal",
    description:
      "Keep your mark active by renewing between the 5th and 6th anniversary of your original registration. We handle statements of use and maintenance filings for you.",
    badge: "Grace Period Support",
    badgeTone: "primary",
    callout: {
      heading: "You're in the Grace Period",
      label: "Expiration date",
      tone: "primary",
    },
    cta: "Renew Now",
  },
  {
    id: "second",
    label: "The 9th - 10th Year",
    heading: "Second Renewal Period",
    highlight: "Second Renewal",
    description:
      "Renew during the 9th to 10th year to avoid cancellation. Our team prepares Sections 8 & 9 filings and tracks all evidence requirements.",
    badge: "Section 8 & 9 Filings",
    badgeTone: "primary",
    callout: {
      heading: "Upcoming Renewal Window",
      label: "File Section 8 & 9",
      tone: "primary",
    },
    cta: "Renew Now",
  },
  {
    id: "ongoing",
    label: "Every 10 Years",
    heading: "Ongoing renewals",
    highlight: "Ongoing",
    description:
      "Maintain exclusive rights indefinitely with decade-by-decade renewals. We coordinate global deadlines and keep every registration compliant.",
    badge: "Stay Compliant",
    badgeTone: "primary",
    callout: {
      heading: "Stay Protected",
      label: "Renew every 10 years",
      tone: "primary",
    },
    cta: "Renew Now",
  },
];

export default function RenewalTimeline() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STAGES.length);
    }, AUTO_ROTATE);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setProgressKey((prev) => prev + 1);
  }, [activeIndex]);

  const activeStage = STAGES[activeIndex];

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <header className="space-y-2 text-center">
          <h2 className="text-3xl text-[#212121] sm:text-[2.5rem] font-[var(--font-heading)]">
            Stay on Track <span className="text-[#6c4cb1]">with Your Trademarks</span>
          </h2>
          <p className="text-base text-[#333333] sm:text-lg font-[var(--font-body)]">
            Trademark renewal is calculated based on the date of initial registration.
          </p>
        </header>

        <div className="rounded-[36px] border border-[#e1e6f7] bg-white p-6 shadow-[0_35px_70px_-45px_rgba(68,81,133,0.25)] sm:p-8 lg:p-12">
          <div className="flex flex-col gap-10">
            <TimelineTrack
              activeIndex={activeIndex}
              onSelect={handleSelect}
              progressKey={progressKey}
              activeStage={activeStage}
            />
            <StageDetail stage={activeStage} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineTrack({
  activeIndex,
  onSelect,
  progressKey,
  activeStage,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
  progressKey: number;
  activeStage: TimelineStage;
}) {
  const positions = useMemo(
    () =>
      STAGES.length > 1
        ? STAGES.map((_, index) => (index / (STAGES.length - 1)) * 100)
        : [0],
    []
  );

  const progressPercent =
    STAGES.length > 1 ? (activeIndex / (STAGES.length - 1)) * 100 : 0;

  return (
    <div className="relative mx-auto w-full max-w-3xl px-1 sm:px-6">
      <div className="relative h-[180px] sm:h-[160px]">
        <div className="absolute left-0 right-0 top-[92px] h-1 rounded-full bg-[#d6ddf3]" />
        <div className="absolute left-0 right-0 top-[92px] h-1 overflow-hidden rounded-full">
          <span className="absolute inset-0 bg-gradient-to-r from-[#1b1b3a] via-[#6c4cb1] to-[#6c4cb1] opacity-10" />
          <span
            key={progressKey}
            className="absolute inset-y-0 left-0 rounded-full bg-[#6c4cb1] animate-timeline-grow"
            style={{
              width: `${progressPercent}%`,
              animationDuration: `${AUTO_ROTATE - 400}ms`,
            }}
          />
        </div>

        {activeStage.callout && (
          <TimelineCallout
            key={`${activeStage.id}-callout-${progressKey}`}
            position={positions[activeIndex]}
            heading={activeStage.callout.heading}
            label={activeStage.callout.label}
            tone={activeStage.callout.tone}
          />
        )}

        {STAGES.map((stage, index) => {
          const isActive = index === activeIndex;
          const isComplete = index < activeIndex;
          const ringClass = isActive
            ? "border-[#6c4cb1] bg-[#6c4cb1] text-white shadow-[0_12px_32px_-18px_rgba(108,76,177,0.7)]"
            : isComplete
              ? "border-[#6c4cb1] bg-white text-[#6c4cb1]"
              : "border-[#d6ddf3] bg-white text-[#6c4cb1]";
          const innerRingClass = isActive
            ? "border-white"
            : isComplete
              ? "border-[#6c4cb1]"
              : "border-[#d6ddf3]";
          const innerDotClass = isActive
            ? "bg-white"
            : isComplete
              ? "bg-[#6c4cb1]"
              : "bg-[#d6ddf3]";

          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => onSelect(index)}
              className="group absolute flex -translate-x-1/2 flex-col items-center text-center focus-visible:outline-none"
              style={{ left: `${positions[index]}%`, top: "92px" }}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition ${ringClass}`}
                style={{ transform: "translateY(-50%)" }}
              >
                {index === 0 ? (
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${innerRingClass}`}
                  >
                    <span className={`h-3 w-3 rounded-full ${innerDotClass}`} />
                  </span>
                ) : (
                  <span
                    className={`h-3.5 w-3.5 rounded-full transition ${innerDotClass}`}
                  />
                )}
              </span>
              <span
                className={`mt-3 w-[84px] text-[11px] leading-tight sm:w-32 sm:text-sm font-[var(--font-body)] transition ${
                  isActive ? "text-[#6c4cb1]" : "text-[#5c627b]"
                }`}
              >
                {stage.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TimelineCallout({
  position,
  heading,
  label,
  tone,
}: {
  position: number;
  heading: string;
  label: string;
  tone: Tone;
}) {
  const toneStyles = getToneStyles(tone);
  const clampedPosition = Math.min(Math.max(position, 8), 92);
  return (
    <div
      className="absolute -top-8 flex -translate-x-1/2 flex-col items-center gap-2 sm:-top-10 animate-callout"
      style={{ left: `${clampedPosition}%` }}
    >
      <span
        className="text-[10px] uppercase tracking-[0.22em] font-[var(--font-body)]"
        style={{ color: toneStyles.text }}
      >
        {heading}
      </span>
      <div
        className="flex min-w-[150px] items-center gap-2 rounded-full px-4 py-2 text-xs  font-[var(--font-body)] shadow-sm"
        style={{
          border: `1px solid ${toneStyles.border}`,
          backgroundColor: toneStyles.background,
          color: toneStyles.text,
        }}
      >
        <Zap className="h-3.5 w-3.5" style={{ color: toneStyles.text }} />
        {label}
      </div>
      <span
        className="h-6 w-px"
        style={{ background: `linear-gradient(180deg, ${toneStyles.text}, transparent)` }}
      />
    </div>
  );
}

function StageDetail({ stage }: { stage: TimelineStage }) {
  return (
    <div className="rounded-[28px] bg-[#f7f9ff] p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="space-y-3 text-center sm:text-left">
          {stage.badge && (
            <span
              className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-[var(--font-body)] ${badgeToneClass(stage.badgeTone ?? "neutral")}`}
            >
              {stage.badge}
            </span>
          )}
          <h3 className="text-xl text-[#1b1b3a] sm:text-2xl font-[var(--font-heading)]">
            {stage.highlight ? (
              <>
                <span className="text-[#6c4cb1]">{stage.highlight}</span>
                {stage.heading.slice(stage.highlight.length)}
              </>
            ) : (
              stage.heading
            )}
          </h3>
          <p className="text-sm text-[#4b4b63] sm:text-base font-[var(--font-body)]">
            {stage.description}
          </p>
        </div>

        {stage.cta && (
          <Link
            href="/trademark-registration-form"
            className="mx-auto inline-flex min-w-[140px] items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:mx-0"
          >
            {stage.cta}
          </Link>
        )}
      </div>
    </div>
  );
}

function badgeToneClass(tone: Tone) {
  switch (tone) {
    case "primary":
      return "border-[#d7dcff] bg-white text-[#6c4cb1]";
    case "warning":
      return "border-[#daccff] bg-[#f5f2ff] text-[#6c4cb1]";
    default:
      return "border-[#d7dcf1] bg-white text-[#4b4b63]";
  }
}

function getToneStyles(tone: Tone) {
  switch (tone) {
    case "warning":
      return {
        background: "#f5f2ff",
        border: "#daccff",
        text: "#6c4cb1",
      };
    case "primary":
      return {
        background: "#eef0ff",
        border: "#d7dcff",
        text: "#6c4cb1",
      };
    default:
      return {
        background: "#ffffff",
        border: "#d7dcf1",
        text: "#4b4b63",
      };
  }
}
