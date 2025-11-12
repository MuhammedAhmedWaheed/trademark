// app/about/page.tsx
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

export default function AboutPage(): JSX.Element {
  return (
    <main className="bg-white font-[var(--font-body)] text-[15px] leading-7 text-[#333333]">
      {/* Page Container */}
      <section className="mx-auto w-full max-w-[1200px] px-4 py-10 md:py-14">
        <div className="flex flex-col">
          {/* Main content */}
          <article>
            <header className="mb-6">
              <h1 className="text-3xl font-[var(--font-heading)] tracking-tight text-[#212121] md:text-[34px]">
                About Legal Mark Experts
              </h1>
            </header>

            <div className="space-y-6">
              <h1 className="text-2xl font-[var(--font-heading)] tracking-tight text-[#212121] md:text-[25px]">
                Our Story: Making Brand Protection Accessible to All
              </h1>
              <p>
                <span className="font-semibold">Legal Mark Experts</span> was founded on a simple but powerful idea. Every business, from solo entrepreneurs to growing enterprises, deserves access to expert, straightforward, and affordable trademark protection. We saw firsthand how many brilliant business owners overlooked this crucial step, often because the process seemed too complex, costly, or intimidating.

              </p>
              <p>
                We set out to change that. Our founders brought together a team of experienced trademark professionals, case analysts, and client support specialists to build a new kind of trademark service one that combines deep industry expertise with a streamlined, technology-driven process. We stripped away the jargon and the unnecessary hurdles, creating a clear path for anyone to protect their most valuable asset: their brand.
              </p>
             
            </div>

            <SectionTitle >Our Mission: Your Trusted Partner in Brand Security</SectionTitle>
            <p className="mt-3">
          Our mission is to empower businesses to grow with confidence by providing comprehensive, hassle-free trademark services. We believe that securing your brand identity shouldn't be an obstacle, but a strategic advantage. We are committed to safeguarding your name, logo, and slogans, ensuring your unique identity is legally protected in a competitive marketplace. We succeed when your brand is secure and your business can thrive.
            </p>

            <SectionTitle>Why We Are Different: The Legal Mark Experts Advantage</SectionTitle>
            <p className="mt-3">
             In an industry filled with confusing options, Legal Mark Experts stands apart by focusing on what truly matters.
              <ul>
                <li><span className="font-semibold"> • Unwavering Expertise: </span> Our team isn't just a group of processors; we are seasoned trademark professionals. We stay ahead of changes in intellectual property law and understand the nuances of the USPTO filing process, helping you avoid common pitfalls that can delay or derail an application.
              </li>
                 <li><span className="font-semibold"> • A Client-Centric Approach: </span> You are more than just an application number to us. We provide dedicated, personalized support to every client. Whether you have a simple question or need guidance on a complex office action, our team is here to provide clear, actionable advice.
              </li>
                <li><span className="font-semibold"> • Transparency and Integrity: </span> We believe in honest, straightforward service. That’s why we offer transparent, flat-fee pricing with no hidden costs. You’ll know exactly what you’re paying for from the very beginning.
              </li>
                 <li><span className="font-semibold"> • Efficiency Through Innovation: </span> We leverage a smart, streamlined online process to make trademark registration as efficient as possible. This allows us to deliver expert service quickly and affordably, without sacrificing quality or attention to detail.

              </li>
              </ul>
            </p>

            <SectionTitle>Headquarters</SectionTitle>
            <p className="mt-3">
              We’re headquartered in Tempe, Arizona. For directions and appointments, see our{" "}
              <Link href="/contact" className="text-[#6c4cb1] underline underline-offset-4">
                contact us
              </Link>{" "}
              page.
            </p>

            <address className="mt-6 not-italic leading-7">
              440 E. Southern Avenue Tempe, Arizona 85282
              <br />
              <span className="font-semibold">Tel:</span>{" "}
              <Link href="tel:+18777949511" className="hover:underline">
                1-877-794-9511
              </Link>
              <br />
              {/* <span className="font-semibold">Fax:</span>{" "}
              <Link href="fax:+16509892131" className="hover:underline">
                650-989-2131
              </Link> */}
             
              <span className="font-semibold">Email:</span>{" "}
              <Link
                href="mailto:info@legalmarkexperts.com"
                className="font-semibold text-[#6c4cb1] hover:underline"
              >
                info@legalmarkexperts.com
              </Link>
            </address>
          </article>
        </div>
      </section>
    </main>
  );
}

/* ==== small sub-components (Tailwind-only) ==== */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 text-xl font-[var(--font-heading)] tracking-tight text-[#212121] md:text-[25px]">
      {children}
    </h2>
  );
}
