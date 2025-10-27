import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function RenewalIncontestabilityCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#6c4cb1] via-[#5639a1] to-[#3f2c7d] px-6 py-10 text-white shadow-[0_32px_80px_-48px_rgba(46,34,94,0.65)] sm:px-10 sm:py-12">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 75% 20%, rgba(255,255,255,0.25), transparent 55%)" }} />

          <div className="relative grid gap-8 sm:grid-cols-[minmax(0,320px)_minmax(0,1fr)] sm:items-center">
            <div className="relative mx-auto w-full max-w-[320px] sm:mx-0">
              <div className="relative overflow-hidden rounded-[28px] border border-white/25 bg-white/10 p-3 shadow-[0_25px_40px_-32px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#2d215b]/50">
                  <Image
                    src="/trademarkrenewal1.jpg"
                    alt="Trademark expert meeting with client"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 shadow-[0_18px_30px_-20px_rgba(12,8,32,0.6)] backdrop-blur">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6c4cb1]">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                </div>
              </div>
            </div>

            <div className="relative space-y-4 text-center sm:text-left">
              <h2 className="text-2xl sm:text-[2rem] font-[var(--font-heading)]">
                Elevate your mark with <span className="text-[#dcd3ff]">Section 15 incontestability</span>
              </h2>
              <p className="text-sm text-[#e8e3ff] sm:text-base font-[var(--font-body)]">
                Filing for incontestable status gives your trademark powerful legal standing, making challenges significantly harder and protecting the equity you have built into your brand.
              </p>
              <ul className="space-y-2 text-sm text-[#f0ecff]/90 sm:text-base">
                <li>• Strategic evidence preparation and filing oversight.</li>
                <li>• Deadline tracking so your Section 15 window is never missed.</li>
                <li>• Integrated renewal, monitoring, and enforcement support.</li>
              </ul>
              <div className="pt-4">
                <Link
                  href="/trademark-registration-form"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#3d2b78] shadow-lg shadow-black/20 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Secure Full Protection Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
