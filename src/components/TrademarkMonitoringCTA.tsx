import Link from "next/link";

export default function TrademarkMonitoringCTA() {
  return (
    <section className="relative overflow-hidden bg-[#6c4cb1] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_65%)]" />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl font-[var(--font-heading)]">
          Protect Your Brand with Confidence!
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base font-[var(--font-body)]">
          Stay ahead of potential conflicts and safeguard your trademarks with our comprehensive monitoring service.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#6c4cb1] transition duration-300 hover:bg-[#F5F5F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-[var(--font-heading)]"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
