import Image from "next/image";

const trustPoints = [
  {
    title: "100% Satisfaction",
    subtitle: "Guaranteed",
    accent: "#E6E0F4",
  },
  {
    title: "Trustpilot 4.8/5",
    subtitle: "1000+ Reviews",
    accent: "#DDD7F0",
  },
];

export default function TrademarkMonitoringHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-12 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,76,177,0.12),_transparent_65%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
            Ongoing Trademark Protection
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl lg:text-[3.1rem] lg:leading-[1.1] font-[var(--font-heading)]">
              Your <span className="text-[#6c4cb1]">Trademark Monitoring</span>{" "}
              with Ease and Expertise
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              Effortlessly manage trademarks, track risks, and stay protected
              with our customizable watch services driven by attorney oversight.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#6c4cb1] px-7 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:h-14 sm:w-auto sm:px-8 sm:text-base font-[var(--font-heading)]"
            >
              Get Started
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {trustPoints.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_30px_100px_-80px_rgba(33,33,33,0.6)] ring-1 ring-[#E0E0E0]/60"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-[#6c4cb1]"
                  style={{ backgroundColor: item.accent }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="m5 13 4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#333333] font-[var(--font-body)]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute -left-12 top-6 h-64 w-64 rounded-full bg-[#6c4cb1]/18 blur-3xl" />
          <div className="absolute -right-10 bottom-4 h-56 w-56 rounded-full bg-[#433079]/15 blur-[110px]" />
          <div className="relative w-full max-w-xl">
            <div className="absolute left-6 top-16 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_30px_80px_-60px_rgba(33,33,33,0.6)]">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="h-8 w-8 text-[#6c4cb1]"
                aria-hidden="true"
              >
                <path
                  d="M10 26c0-3.866 3.582-7 8-7s8 3.134 8 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <circle
                  cx="18"
                  cy="12"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="2.4"
                />
              </svg>
            </div>
            <div className="relative rounded-[48px] bg-gradient-to-br from-[#6c4cb1] via-[#433079] to-[#212121] p-[1.5px] shadow-[0_40px_120px_-70px_rgba(33,33,33,0.75)]">
              <div className="relative overflow-hidden rounded-[46px] bg-white/95">
                <Image
                  src="/trademarkmonitoring5.jpg"
                  alt="Legal experts reviewing live trademark monitoring dashboard"
                  width={640}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="h-auto w-full object-cover"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-[#211134]/45 via-transparent to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 right-10 h-36 w-36 rounded-full bg-[#9778dd]/40 blur-[90px]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-6 left-6 h-24 w-24 rounded-full bg-white/45 blur-[60px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
