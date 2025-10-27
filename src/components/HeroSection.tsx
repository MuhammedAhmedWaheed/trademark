"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BadgeCheck, CircleDollarSign, Smile, Stamp, Star } from "lucide-react";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const STATS: StatItem[] = [
  {
    label: "Trademarks Registered",
    value: 3000,
    suffix: "+",
    description: "Trademarks Registered",
    Icon: Stamp,
  },
  {
    label: "Glowing Reviews",
    value: 1000,
    suffix: "+",
    description: "Glowing Reviews",
    Icon: Star,
  },
  {
    label: "Years of Experience",
    value: 10,
    suffix: "+",
    description: "Years of Experience",
    Icon: BadgeCheck,
  },
  {
    label: "Happy Customers",
    value: 99,
    suffix: "%",
    description: "Happy Customers",
    Icon: Smile,
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(() => STATS.map(() => 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    let frame: number;
    const start = performance.now();
    const duration = 1400;

    const animate = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        STATS.map((stat) => {
          const current = Math.round(stat.value * eased);
          return Math.min(current, stat.value);
        })
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCounts(STATS.map((stat) => stat.value));
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f2ff] to-[#ebe5ff] opacity-95" />
        <Image
          src="/hero-placeholder.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none select-none object-cover object-center opacity-70 md:object-right-bottom"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl lg:text-[2.8rem] lg:leading-[1.15] font-[var(--font-heading)]">
              Register Your U.S. Trademark Online Fast, Affordable and Without Any Hassle.
            </h1>
            <p className="max-w-xl text-base text-[#333333] sm:text-lg font-[var(--font-body)]">
              Protect your brand across the United States with expert support from senior case analysts and trademark paralegals. Legal Mark Experts makes registration simple in just 3 easy steps, 100% online.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
            >
              <CircleDollarSign className="h-4 w-4" />
              Check Pricing
            </Link>

            <span className="hidden text-sm text-[#4b4b63] sm:inline-block">
              Trusted by 3,000+ founders nationwide
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/trademark-registration"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#212121] shadow-md shadow-black/5 transition hover:bg-[#f1eefc]"
            >
              Explore Our Services
            </Link>
            <Link
              href="/trademark-registration-form"
              className="inline-flex items-center justify-center rounded-full bg-[#333333] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333]"
            >
              Start Your Trademark Application
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid gap-6 rounded-3xl bg-white/85 p-6 shadow-xl shadow-black/5 backdrop-blur md:grid-cols-2">
            {STATS.map(({ Icon, suffix, description }, index) => (
              <div key={description} className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0ecff] text-[#6c4cb1]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#212121] font-[var(--font-heading)]">
                    {counts[index]}
                    {suffix}
                  </div>
                  <div className="text-sm text-[#4a4a4a]">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
