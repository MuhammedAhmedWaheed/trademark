"use client";
import Link from "next/link";
import Image from "next/image";

export default function Litigation() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      {/* Left Content */}
      <div className="md:w-1/2">
        <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold leading-tight mb-4 text-[#212121]">
          Protect Your{" "}
          <span className="text-[#6c4cb1]">Trademark Rights</span>{" "}
          with Expert Litigation Support
        </h1>

        <p className="text-[#333] text-base md:text-lg mb-6 leading-relaxed">
          Take the first step against infringement with a clear, effective,
          attorney-backed warning.
        </p>

        <Link href="/contact"><button className="bg-[#6c4cb1] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#5b3d9d] transition-all shadow-md">
          Start Now
        </button></Link> 

        {/* Ratings Section */}
        <div className="flex flex-wrap gap-6 mt-8">
          {/* Rating Block 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">
                Rated 4.6/5 by 1000+ users
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Satisfaction Guaranteed
              </p>
            </div>
            <div className="mt-1 sm:mt-0">
              <div className="inline-flex items-center justify-center rounded-md ring-1 ring-gray-200 bg-white px-2 py-1">
                <Image
                  src="/logo1.png"
                  alt="Review Rating"
                  width={120}
                  height={40}
                  className="h-7 w-auto sm:h-8 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Rating Block 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">
                100% Satisfaction Guaranteed
              </p>
            </div>
            <div className="mt-1 sm:mt-0">
              <div className="inline-flex items-center justify-center rounded-md ring-1 ring-gray-200 bg-white px-2 py-1">
                <Image
                  src="/logo4.png"
                  alt="Guarantee Logo"
                  width={110}
                  height={40}
                  className="h-7 w-auto sm:h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative md:w-1/2 flex justify-center">
        <Image
          src="/ligitation1.png"
          alt="Litigation Support"
          width={420}
          height={420}
          className="rounded-2xl shadow-lg object-cover"
          priority
        />
      </div>
    </section>
  );
}
