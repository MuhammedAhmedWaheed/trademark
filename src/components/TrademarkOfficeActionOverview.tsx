import Image from "next/image";

export default function TrademarkOfficeActionOverview() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 text-center sm:gap-12 sm:px-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold leading-tight text-[#212121] sm:text-3xl lg:text-4xl font-[var(--font-heading)]">
            More than <span className="text-[#6c4cb1]">60%</span> of trademark applications receive an{" "}
            <span className="text-[#6c4cb1]">office action</span>
          </h2>
          <p className="text-sm text-[#333333] sm:text-base font-[var(--font-body)]">
            With the help of a licensed attorney, most of these office actions can be handled easily.
          </p>
        </div>
        <div className="w-full max-w-3xl rounded-[32px] bg-white p-4 shadow-[0_35px_90px_-60px_rgba(33,33,33,0.45)] sm:p-6">
          <div className="overflow-hidden rounded-[24px] bg-[#ebe2ff]/60">
            <Image
              src="/trademarkofficeaction2.png"
              alt="Common USPTO office action issues surrounding an official notice"
              width={960}
              height={540}
              className="h-auto w-full object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
