import Image from "next/image";

const advantages = [
  "Get legal advice from licensed attorneys about how to assess your risks and move forward with your mark.",
  "Includes conflicts with all registered, unregistered, and dead marks across trademark databases.",
  "Includes results from Google, Yahoo, Facebook, Wikipedia, Instagram, and more common-law sources.",
  "Instant report delivery in PDF, RTF, Word, HTML, and Excel formats sent directly to your email.",
  "We provide the highest data quality with special opinions from our supervising attorneys.",
];

export default function ComprehensiveTrademarkAdvantages() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-y-0 right-[-220px] hidden w-[36rem] rounded-full bg-[#6c4cb1]/10 blur-[140px] lg:block" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20">
        <div className="w-full space-y-8 lg:flex-1">
          <h2 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            Key <span className="text-[#6c4cb1]">Advantages</span>
          </h2>
          <ul className="space-y-4">
            {advantages.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F5E9] text-[#43A047] sm:h-6 sm:w-6">
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8.293 13.293a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L9 10.586 6.707 8.293A1 1 0 0 0 5.293 9.707l3 3Z" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex w-full items-center justify-center lg:flex-1">
          <div className="relative w-full max-w-md">
            <div className="relative aspect-square overflow-hidden rounded-[32px]">
              <Image
                src="/new3.png"
                alt="Key advantages visualization"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
