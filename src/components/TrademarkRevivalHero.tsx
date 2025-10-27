import Image from "next/image";

export default function TrademarkRevivalHero() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full space-y-6 lg:max-w-xl">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-snug text-[#212121] sm:text-4xl font-[var(--font-heading)]">
              Don&apos;t Lose Your Brand{" "}
              <span className="text-[#6c4cb1]">Restore Your Trademark</span>{" "}
              Today!
            </h1>
            <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              Has your trademark application been marked as abandoned or dead?
              We can help you bring your valuable trademark back to life. Check
              if your mark can be revived and get attorney support to file the
              right paperwork.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900">Shopper Approved</p>
                <p className="text-xs sm:text-sm text-gray-500">Rated 4.7/5 by 1000+ users</p>
              </div>
              <div className="mt-1 sm:mt-0">
                <div className="inline-flex items-center justify-center rounded-md bg-white px-2 py-1 ring-1 ring-gray-200">
                  <Image
                    src="/logo1.png"
                    alt="Shopper Approved"
                    width={120}
                    height={40}
                    className="h-7 w-auto object-contain sm:h-8"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900">Trustpilot</p>
                <p className="text-xs sm:text-sm text-gray-500">Rated 4.6/5 by 1000+ users</p>
              </div>
              <div className="mt-1 sm:mt-0">
                <div className="inline-flex items-center justify-center rounded-md bg-white px-2 py-1 ring-1 ring-gray-200">
                  <Image
                    src="/logo2.png"
                    alt="Trustpilot"
                    width={110}
                    height={40}
                    className="h-7 w-auto object-contain sm:h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:max-w-lg">
          <div className="overflow-hidden rounded-[32px] border border-[#E0E0E0] bg-[#F5F5F5] p-4 shadow-[0_32px_100px_-70px_rgba(33,33,33,0.55)]">
            <div className="overflow-hidden rounded-[24px] bg-white">
              <Image
                src="/trademarkrevival.png"
                alt="Team discussing trademark revival strategy"
                width={560}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
