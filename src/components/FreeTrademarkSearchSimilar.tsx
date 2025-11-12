import Image from "next/image";

export default function FreeTrademarkSearchSimilar() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="relative flex flex-1 justify-center">
          <div className="relative w-full max-w-[560px]">
            <div className="relative aspect-[1120/928] overflow-hidden rounded-[36px]">
              <Image
                src="/new1.png"
                alt="Competitor trademark search workflow showcasing filings"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
            Competitive Insights
          </p>
          <h2 className="text-2xl font-semibold text-[#212121] sm:text-[2.4rem] font-[var(--font-heading)]">
            What Our  <span className="text-[#6c4cb1]">Free Search Covers </span> 
          </h2>
          <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            Our free trademark search is a powerful preliminary tool designed to identify clear, direct conflicts.

          </p>
          <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
           This search is an excellent starting point, but it's important to understand its limitations. It does not search for similar-sounding names (phonetic equivalents), variations in spelling, or unregistered "common law" trademarks.

          </p>
        </div>
      </div>
    </section>
  );
}
