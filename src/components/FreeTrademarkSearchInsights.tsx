import Image from "next/image";

export default function FreeTrademarkSearchInsights() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
            Similar Mark Intelligence
          </p>
          <h2 className="text-2xl font-semibold text-[#212121] sm:text-[2.4rem] font-[var(--font-heading)]">
            Search for similar <span className="text-[#6c4cb1]">trademarks</span>
          </h2>
          <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            Before you spend time and money on registration, confirm your mark is truly original. Our free search reduces the risk of legal conflicts, rebranding, and USPTO refusals.
          </p>
          <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            With Legal Mark Experts&apos; advanced search engine, you can quickly validate whether your trademark is available and distinct enough to protect.
          </p>
        </div>

        <div className="relative flex flex-1 justify-center">
          <div className="relative w-full max-w-[520px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
              <Image
                src="/freetrademark-1.png"
                alt="Dashboard preview of a USPTO trademark search report"
                fill
                sizes="(max-width: 640px) 440px, (max-width: 1024px) 480px, 520px"
                className="object-cover"
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
