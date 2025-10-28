"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* Theme */
const PURPLE = "#6c4cb1";

/* Icons */
function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Data */
const FEATURES = [
  "Watch service bundled • Get free infringement alerts on your mark",
  "Personalized video advisement from U.S. licensed trademark attorney.",
  "Google Meet / Zoom video consultation with U.S. licensed attorney.",
  "Rush Priority • Get free infringement alerts on your trademark.",
];

type Plan = {
  key: "subscription" | "standard" | "premium";
  name: string;
  price: string;
  per: string;
  recommended?: boolean;
  perks: boolean[];
};

const PLANS: Plan[] = [
  {
    key: "subscription",
    name: "Subscription",
    price: "$449",
    per: "/class",
    perks: [true, true, true, false],
  },
  {
    key: "standard",
    name: "Standard",
    price: "$599",
    per: "/class",
    perks: [false, true, true, false],
  },
  {
    key: "premium",
    name: "Premium",
    price: "$699",
    per: "/class",
    recommended: true,
    perks: [true, true, true, true],
  },
];

export default function Plans() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showBottomFade, setShowBottomFade] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const threshold = 48;
      const shouldShow =
        rect.bottom > viewportH - threshold && rect.top < viewportH;
      setShowBottomFade(shouldShow);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white px-4 sm:px-6 md:px-20 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#6c4cb1]">
          Legal Mark Expert
        </p>
        <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          <span className="text-[#212121]">Select Your </span>
          <span className="text-[#6c4cb1]">Statement of Use </span>
          <span className="text-[#212121]">Plan</span>
        </h2>
      </div>

      {/* Main container */}
      <div className="relative max-w-6xl mx-auto rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white overflow-hidden">
        {/* Layout wrapper */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <aside className="md:w-[300px] bg-white flex-shrink-0 border-b md:border-b-0 md:border-r border-[#e9ecf2]">
            <div className="flex items-center gap-3 px-5 sm:px-6 py-4 sm:py-5 border-b border-[#e9ecf2]">
              <Image
                src="/us.svg" // or "/us.svg"
                alt="US Flag"
                width={32}
                height={22}
                className="object-contain"
              />
              <p className="text-sm font-semibold text-[#212121] leading-tight">
                Compare statement of use plans
              </p>
            </div>

            <div className="px-5 sm:px-6 py-4 sm:py-6">
              <ul className="space-y-4 sm:space-y-6">
                {FEATURES.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#212121] leading-snug"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-[2px]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Plans container */}
          <div className="flex-1 overflow-x-auto md:overflow-visible">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-w-[320px] md:min-w-0">
              {PLANS.map((plan, idx) => (
                <div
                  key={plan.key}
                  className={`relative p-5 sm:p-6 md:p-7 border-t md:border-t-0 ${
                    idx > 0 ? "md:border-l border-[#eef1f7]" : ""
                  }`}
                >
                  {/* Plan card */}
                  <div
                    className={`relative rounded-2xl p-5 sm:p-6 mb-4 ${
                      plan.recommended
                        ? "text-white"
                        : "text-[#212121] bg-white"
                    }`}
                    style={
                      plan.recommended ? { backgroundColor: PURPLE } : undefined
                    }
                  >
                    {/* Recommended Tag */}
                    {plan.recommended && (
                      <div className="absolute -top-3 right-0 translate-x-[25%] bg-white rounded-l-full rounded-br-full shadow-md px-3 py-1.5 text-xs font-semibold text-[#6c4cb1] border border-[#e2d9f3]">
                        Recommended
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold opacity-90">
                        {plan.name}
                      </div>
                      <div
                        className={`text-base ${
                          plan.recommended
                            ? "opacity-90"
                            : "text-[#6c4cb1]"
                        }`}
                      >
                        {plan.key === "subscription"
                          ? "TN"
                          : plan.key === "standard"
                          ? "👍"
                          : "👑"}
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                        {plan.price}
                        <span
                          className={`text-xs sm:text-sm font-semibold ml-1 ${
                            plan.recommended
                              ? "opacity-90"
                              : "text-[#212121]/70"
                          }`}
                        >
                          {plan.per}
                        </span>
                      </div>
                    </div>

                    <Link href="/contact"><button
                      className={`mt-5 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                        plan.recommended
                          ? "bg-white text-[#6c4cb1]"
                          : "bg-[#6c4cb1] text-white"
                      }`}
                    >
                      Get Started
                    </button>
                    </Link>
                  </div>

                  {/* Perks */}
                  <ul className="space-y-4 sm:space-y-5">
                    {FEATURES.map((feature, i) => (
                      <li
                        key={`${plan.key}-${i}`}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#212121] leading-snug"
                      >
                        {plan.perks[i] ? (
                          <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-[2px]" />
                        ) : (
                          <XIcon className="h-5 w-5 text-red-500 flex-shrink-0 mt-[2px]" />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Smooth close fade */}
      {showBottomFade && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
      )}
    </section>
  );
}
