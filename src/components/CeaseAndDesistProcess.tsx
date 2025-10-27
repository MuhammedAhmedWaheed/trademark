"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    title: "Submit Your Info",
    description:
      "Complete a secure intake form describing the infringing use, your proof of rights, and the outcome you want.",
  },
  {
    title: "Attorneys Draft Letter",
    description:
      "Our attorneys review your evidence, cite the right statutes, and prepare a tailored cease & desist letter for your situation.",
  },
  {
    title: "Receive & Track",
    description:
      "We deliver the letter digitally (with optional mailing) and keep you updated on delivery and responses inside your client portal.",
  },
];

export default function CeaseAndDesistProcess() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setActiveStep((prev) => (prev + 1) % steps.length),
      6000,
    );
    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
              How It Works
            </p>
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl font-[var(--font-heading)]">
                Send, Protect, and Resolve in Three Steps
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
                Follow our attorney-led workflow to stop infringement quickly and stay informed at every milestone.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)]"
              >
                Start My Letter
              </a>
              <span className="text-sm text-[#333333] font-[var(--font-body)]">
                Average turnaround:{" "}
                <strong className="font-semibold text-[#212121]">
                  48 hours
                </strong>
              </span>
            </div>
          </div>
          <div className="relative">
            <ol className="flex flex-col gap-3 rounded-[28px] border border-[#E0E0E0] bg-white p-6 shadow-[0_28px_100px_-70px_rgba(33,33,33,0.55)]">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <li key={step.title} className="relative">
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-expanded={isActive}
                      className={`group flex w-full items-start gap-4 rounded-[22px] border px-5 py-4 text-left transition duration-300 ${
                        isActive
                          ? "border-[#6c4cb1] bg-[#6c4cb1]/10 shadow-[0_16px_60px_-50px_rgba(108,76,177,0.6)]"
                          : "border-transparent bg-white hover:border-[#6c4cb1]/20 hover:bg-[#F5F5F5]"
                      }`}
                    >
                      <span
                        className={`mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold transition duration-300 ${isActive ? "border-[#6c4cb1] bg-[#6c4cb1] text-white shadow-sm" : isPast ? "border-[#6c4cb1] bg-white text-[#6c4cb1]" : "border-[#E0E0E0] bg-white text-[#9e9e9e]"}`}
                      >
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p
                          className={`text-base font-semibold font-[var(--font-heading)] transition duration-300 ${isActive ? "text-[#6c4cb1]" : "text-[#212121]"}`}
                        >
                          {step.title}
                        </p>
                        <div
                          className="overflow-hidden transition-all duration-500 ease-in-out"
                          style={{
                            maxHeight: isActive ? "160px" : "0px",
                            opacity: isActive ? 1 : 0,
                          }}
                        >
                          <p className="mt-2 text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
