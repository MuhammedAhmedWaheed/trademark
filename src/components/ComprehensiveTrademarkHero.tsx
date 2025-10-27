import Image from "next/image";

export default function ComprehensiveTrademarkHero() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex w-full flex-col gap-12 lg:max-w-xl">
          <div className="space-y-5">
            <p className="inline-flex items-center rounded-full bg-[#f5f5f5] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
              Attorney-led search
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
              Comprehensive <span className="text-[#6c4cb1]">USPTO</span>{" "}
              <span className="text-[#6c4cb1]">Trademark Search</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              Confirm your mark is clear before you invest in filing. Our team combines attorney insight and smart
              technology to surface conflicts across USPTO, common law, and digital channels, starting from{" "}
              <span className="font-semibold text-[#6c4cb1]">$199</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <div className="flex h-16 w-16 items-center justify-center">
                <Image src="/inclogo.png" alt="Inc. 500 laurel badge" width={44} height={44} />
              </div>
              <div className="text-sm text-[#212121] sm:text-base font-[var(--font-body)] leading-snug">
                <span className="block font-semibold">Inc500 Company</span>
                <span className="block text-[#333333]">for 4 consecutive years</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex h-16 w-16 items-center justify-center">
                <Image src="/onelogo.png" alt="#1 laurel badge" width={84} height={84} />
              </div>
              <div className="text-sm text-[#212121] sm:text-base font-[var(--font-body)] leading-snug">
                <span className="block font-semibold">No 1 Trademark filing</span>
                <span className="block text-[#333333]">service in the USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:max-w-lg">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-[#f0e9ff] blur-2xl lg:block" aria-hidden />
          <div className="absolute -right-3 bottom-8 hidden h-20 w-20 rounded-full bg-[#e4dbff] blur-2xl lg:block" aria-hidden />
          <div className="relative rounded-[40px] shadow-[0_40px_120px_-80px_rgba(33,33,33,0.55)] sm:p-8">
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src="/freetrademark2.png"
                alt="Comprehensive trademark search dashboard preview"
                width={560}
                height={520}
                className="h-auto w-full object-cover"
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
