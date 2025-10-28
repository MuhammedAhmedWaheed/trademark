"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

type RevivalScenario = {
  id: string;
  label: string;
  title: string;
  summary: string;
  risk: string;
  assists: string[];
};

const SCENARIOS: RevivalScenario[] = [
  {
    id: "office-action-deadline",
    label: "Missed Response to Office Action Deadline",
    title: "Abandoned Due to Missed Response Deadline to Office Action",
    summary:
      "If you did not reply to a USPTO Office Action within six months, your application entered abandoned status and the USPTO removed it from active review.",
    risk:
      "What’s at risk: You lose your original filing date and the legal priority that came with it. Competitors can move ahead with similar names while your rights lapse.",
    assists: [
      "Review the entire USPTO file and Office Action history.",
      "Draft a precise legal response addressing every refusal and requirement.",
      "File a Petition to Revive that includes the required declaration of unintentional delay.",
      "Guide your application back into the USPTO workflow until it is active again.",
    ],
  },
  {
    id: "missed-sou",
    label: "Missed Statement of Use (SOU)",
    title: "Abandoned Due to Missed Statement of Use (SOU)",
    summary:
      "Your trademark will not register until you prove real-world use. If the SOU or a request for additional time was not filed, the USPTO treated the application as abandoned.",
    risk:
      "What’s at risk: Without the SOU, the registration never issues. You lose your place in line, your trademark rights pause, and you may have to start the filing process over.",
    assists: [
      "Prepare and file a Petition to Revive with the correct USPTO code.",
      "Submit a complete Statement of Use or request the final six-month extension.",
      "Audit every specimen to confirm it meets federal proof-of-use standards.",
      "Keep your application on track toward full registration.",
    ],
  },
  {
    id: "partial-refusal",
    label: "Missed Response to a Partial Refusal",
    title: "Abandoned Due to Missed Response to a Partial Refusal",
    summary:
      "Partial refusals can be confusing, but ignoring them can void an application that was otherwise headed toward approval.",
    risk:
      "What’s at risk: The USPTO can cancel your entire filing, including the classes that were previously accepted. This wastes filing fees, months of progress, and critical brand protection.",
    assists: [
      "Analyze every line of the USPTO’s partial refusal notice.",
      "Develop a response that satisfies trademark law requirements.",
      "File any needed Petition to Revive together with your legal reply.",
      "Safeguard each class and product line in your trademark portfolio.",
    ],
  },
  {
    id: "incomplete-response",
    label: "Incomplete Office Action Response",
    title: "Abandoned Due to Incomplete Office Action Response",
    summary:
      "Even if you answered the Office Action, the USPTO can still mark the application abandoned if parts of the response were missing or inaccurate.",
    risk:
      "What’s at risk: The USPTO stops reviewing your file, your application remains inactive, and your brand goes unprotected while time and investment are lost.",
    assists: [
      "Audit your prior response and pinpoint incomplete or incorrect sections.",
      "Identify the evidence, specimens, or legal arguments still required.",
      "Submit a corrected response with the Petition to Revive in a single filing.",
      "Send proactive status updates while the USPTO reopens your case.",
    ],
  },
  {
    id: "beyond-revival",
    label: "Abandonment Beyond the Revival Window",
    title: "Abandonment Beyond the Revival Window",
    summary:
      "If more than six months have passed since the abandonment notice, standard revival may no longer be available—but there can still be strategic options.",
    risk:
      "What’s at risk: Once the window closes, the original application is unusable. You lose the filing date and the legal right tied to that serial number.",
    assists: [
      "Investigate whether any equitable remedies remain under USPTO rules.",
      "Advise if refiling or pursuing a new mark offers a better outcome.",
      "Re-purpose prior evidence and filings to save time and cost.",
      "Move quickly to restore exclusive rights around your brand name.",
    ],
  },
];

export default function TrademarkRevivalServices({
  faqs = SCENARIOS,
}: {
  faqs?: RevivalScenario[];
}) {
  const scenarios = useMemo(() => (faqs.length ? faqs : SCENARIOS), [faqs]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % scenarios.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [scenarios.length]);

  const activeScenario = scenarios[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#f5f2ff] via-white to-transparent" />
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            Explore Our{" "}
            <span className="text-[#6c4cb1]">Revival Services</span>
          </h2>
            <p className="mt-4 text-base text-[#4b4b63] sm:text-lg font-[var(--font-body)]">
              No matter why your trademark was abandoned—missed deadline, paperwork issue,
              or a simple oversight—we help revive it and keep your hard-earned brand protected.
            </p>
        </div>

        <div className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="space-y-4 lg:w-[360px] lg:flex-shrink-0">
            {scenarios.map((scenario, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] ${
                    isActive
                      ? "border-[#6c4cb1] bg-[#6c4cb1] text-white shadow-[0_15px_35px_-25px_rgba(108,76,177,0.8)]"
                      : "border-[#e2e4f0] bg-white text-[#1b1b3a] hover:border-[#d2d5ea] hover:shadow-[0_12px_30px_-26px_rgba(108,76,177,0.45)]"
                  }`}
                  aria-pressed={isActive}
                >
                  {scenario.label}
                </button>
              );
            })}
          </div>

          <div className="relative flex-1">
            <div className="rounded-3xl border border-[#eaebf5] bg-white p-8 shadow-[0_30px_60px_-48px_rgba(108,76,177,0.7)] transition lg:min-h-full">
              <div
                key={activeScenario.id}
                className="space-y-6 animate-fade-up"
              >
                <header className="space-y-3">
                  <h3 className="text-2xl font-semibold text-[#212121] font-[var(--font-heading)]">
                    {activeScenario.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4b4b63] font-[var(--font-body)]">
                    {activeScenario.summary}
                  </p>
                  <p className="text-sm font-semibold leading-relaxed text-[#333333]">
                    {activeScenario.risk}
                  </p>
                </header>

                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6c4cb1]">
                    How Legal Mark Experts helps:
                  </p>
                  <ul className="space-y-3">
                    {activeScenario.assists.map((assist) => (
                      <li
                        key={assist}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#4b4b63]"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 text-[#6c4cb1]" />
                        <span>{assist}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_-28px_rgba(108,76,177,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
                  >
                    Check Status
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
