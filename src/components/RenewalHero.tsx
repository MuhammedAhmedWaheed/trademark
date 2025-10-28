import Image from "next/image";
import Link from "next/link";

export default function RenewalHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f2ff] to-[#ebe5ff]" />
        <div className="absolute -top-24 left-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#6c4cb1]/18 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-[#6c4cb1]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl leading-tight text-[#212121] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] font-[var(--font-heading)]">
            Stay Protected with Our{" "}
            <span className="text-[#6c4cb1]">One-Stop Renewal Service</span>{" "}
            for All Your Needs
          </h1>
          <p className="mx-auto max-w-xl text-base text-[#333333] sm:text-lg font-[var(--font-body)] lg:mx-0">
            Ensure your trademark stays active with our renewal experts tracking every deadline and filing on your behalf.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/trademark-revival-form"
              className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
            >
              Renew Your Trademark
            </Link>
            <span className="text-sm text-[#4a4a4a] font-[var(--font-body)]">
              Talk with our specialists today.
            </span>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-[420px] rounded-[32px] border border-white/70 bg-white/85 p-4 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="aspect-[4/3] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ebe7ff] via-white to-[#f3f1ff]">
              <Image
                src="/trademarkrenewalhero.jpg"
                alt="Trademark renewal experts reviewing documentation"
                width={640}
                height={480}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
