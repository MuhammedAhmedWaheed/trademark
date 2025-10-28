"use client";

import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  { label: "Trademark Registration", href: "/services/trademark-registration" },
  { label: "Free Trademark Search", href: "/services/free-trademark-search" },
  { label: "Comprehensive Trademark Search", href: "/services/comprehensive-trademark-search" },
  { label: "Trademark Monitoring", href: "/services/trademark-monitoring" },
  { label: "Trademark Consultancy", href: "/services/trademark-consultancy" },
  { label: "Trademark Renewals", href: "/services/trademark-renewals" },
  { label: "Trademark Revival", href: "/services/trademark-revival" },
  { label: "Trademark Office Action", href: "/services/trademark-office-action" },
  { label: "Statement of Use", href: "/services/trademark-statement-of-use" },
  { label: "Extension of Use", href: "/services/trademark-extension-of-use" },
  { label: "Ownership Transfer", href: "/services/trademark-ownership-transfer" },
  { label: "Trademark Litigations", href: "/services/trademark-litigations" },
];

const RESOURCES = [
  { label: "About Us", href: "/resources/about" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Trademark Categories", href: "/resources/trademark-categories" },
];

const COMPANY = [
  { label: "Terms and Conditions", href: "/company/terms-and-conditions" },
  { label: "Privacy Policy", href: "/company/privacy-policy" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-white text-[#1b1b3a] border-t border-gray-200">
      <div className="mx-auto flex flex-col gap-12 px-4 py-14 sm:px-6 lg:max-w-6xl lg:flex-row lg:justify-between">
        <div className="max-w-sm space-y-6">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <Image src="/logo.png" alt="Legal Mark Experts logo" width={54} height={48} className="rounded" />
            <span className="text-2xl tracking-tight font-[var(--font-heading)] text-[#1b1b3a] transition group-hover:text-[#6c4cb1]">
              Legal Mark Experts
            </span>
          </Link>
          <div className="space-y-2 text-sm text-[#4b4b63] font-[var(--font-body)]">
            <p className="font-semibold text-[#1b1b3a]">Any Questions?</p>
            <p>Use the live chat for immediate assistance or reach us directly.</p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-[#e0e3ff] bg-[#f5f6ff] p-4 text-sm text-[#4b4b63]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6c4cb1] shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.47 15.47 0 006.59 6.59l1.82-1.82a1 1 0 011.05-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-.91 1 19 19 0 01-8.29-2.63 18.79 18.79 0 01-5.79-5.79A19 19 0 012 4.91 1 1 0 013 4h2.9a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.85 1.23z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#1b1b3a]">Call Us</p>
              <p>(877) 721-4579</p>
              <p>Mon-Fri 9AM-6PM CST</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap gap-10 text-sm leading-6">
          <FooterColumn title="Services" links={SERVICES} />
          <FooterColumn title="Resources" links={RESOURCES} />
          <div className="min-w-[180px] space-y-4">
            <FooterColumn title="Company" links={COMPANY} />
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wide text-[#6c4cb1] font-[var(--font-heading)]">
                Contact Us
              </h3>
              <Link href="/contact" className="block text-sm text-[#4b4b63] transition hover:text-[#6c4cb1]">
                Contact Us
              </Link>
            </div>
            <h3 className="text-sm uppercase tracking-wide text-[#6c4cb1] font-[var(--font-heading)] pt-2">
              Social Links
            </h3>
            <div className="mt-4 flex items-center gap-4 text-[#6c7295]">
              <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h3.96V21H3zm7.65 0H14.5v1.63h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.32 2.4 4.32 5.5V21h-3.96v-5.31c0-1.27-.02-2.89-1.76-2.89-1.76 0-2.03 1.37-2.03 2.79V21H10.6z" />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" label="X">
                <path d="M15.75 4.5h2.58l-5.64 6.45 6.64 8.55H14.9l-4.15-5.41-4.75 5.41H3.4l6-6.85-6.33-8.15h4.46l3.78 5.06z" />
              </SocialIcon>
              <SocialIcon href="https://facebook.com" label="Facebook">
                <path d="M13 22v-8h3l.5-3H13V8.5c0-.87.28-1.5 1.72-1.5H17V4.09C16.65 4.06 15.62 4 14.44 4 11.86 4 10 5.66 10 8.3V11H7v3h3v8h3z" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-[#f9f9ff]">
        <div className="mx-auto flex flex-col gap-6 px-4 py-8 text-sm text-[#4b4b63] sm:px-6 lg:max-w-6xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-semibold text-[#1b1b3a]">Privacy Policy</p>
            <p className="mt-2 max-w-3xl text-xs leading-relaxed text-[#6c7295] font-[var(--font-body)]">
              Legal Mark Experts provides information and software only. We do not provide legal advice or participate in any legal representation. Use of Legal Mark Experts is subject to our{" "}
              <Link href="/company/terms" className="text-[#6c4cb1] underline-offset-2 hover:underline">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="/company/privacy" className="text-[#6c4cb1] underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="space-y-3 text-right">
            <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6">
              <PaymentIcon brand="visa" label="Visa" />
              <PaymentIcon brand="mastercard" label="Mastercard" />
              <PaymentIcon brand="paypal" label="PayPal" />
              <PaymentIcon brand="discover" label="Discover" />
            </div>
            <p className="text-xs text-[#6c7295]">
              &copy; {new Date().getFullYear()} Legal Mark Experts, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="min-w-[180px] space-y-3">
      <h3 className="text-sm uppercase tracking-wide text-[#6c4cb1] font-[var(--font-heading)]">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-[#4b4b63] transition hover:text-[#6c4cb1]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} aria-label={label} className="transition hover:text-[#6c4cb1]">
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </Link>
  );
}

type PaymentBrand = "visa" | "mastercard" | "paypal" | "discover";

function PaymentIcon({ brand, label }: { brand: PaymentBrand; label: string }) {
  const sources: Record<PaymentBrand, string> = {
    visa: "/visa.png",
    mastercard: "/mastercard.png",
    paypal: "/paypal.png",
    discover: "/discover.png",
  };
  return (
    <span className="flex items-center" role="img" aria-label={label}>
      <span className="sr-only">{label}</span>
      <Image
        src={sources[brand]}
        alt={label}
        width={80}
        height={28}
        className="h-6 w-auto object-contain sm:h-7"
        priority={false}
      />
    </span>
  );
}
