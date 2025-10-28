import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  ClipboardCheck,
  Clock,
  FileText,
  Flag,
  Handshake,
  Landmark,
  Layers,
  MonitorCheck,
  PenTool,
  Shield,
  ShieldAlert,
  Target,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engagement Agreement | Legal Mark Experts",
  description:
    "Review the Legal Mark Experts Engagement Agreement covering scope, billing, responsibilities, and the policies that guide our trademark services.",
};

const navHighlights = [
  {
    label: "Welcome",
    href: "#welcome",
    icon: Handshake,
    detail: "Understanding our relationship from day one.",
  },
  {
    label: "Scope of Representation",
    href: "#scope",
    icon: Target,
    detail: "Where and how we advocate on your behalf.",
  },
  {
    label: "Fees & Billing",
    href: "#fees",
    icon: FileText,
    detail: "How flat, hourly, and government fees are handled.",
  },
  {
    label: "Termination",
    href: "#termination",
    icon: Flag,
    detail: "Ending representation and related obligations.",
  },
  {
    label: "Subscriptions",
    href: "#subscriptions",
    icon: Layers,
    detail: "Requirements tied to discounted plans.",
  },
  {
    label: "Guarantees & Limits",
    href: "#guarantees",
    icon: ShieldAlert,
    detail: "Key boundaries on expected outcomes.",
  },
  {
    label: "Trademark Services",
    href: "#trademark-services",
    icon: PenTool,
    detail: "How we handle filings, specimens, and logos.",
  },
  {
    label: "Client Duties",
    href: "#client-duties",
    icon: ClipboardCheck,
    detail: "Information we rely on to serve you.",
  },
  {
    label: "Deadlines",
    href: "#deadlines",
    icon: Clock,
    detail: "Time-sensitive requirements and limitations.",
  },
  {
    label: "Conflicts & Future Work",
    href: "#conflicts",
    icon: Briefcase,
    detail: "How we address conflicts of interest.",
  },
  {
    label: "Refunds & Disputes",
    href: "#refunds",
    icon: Landmark,
    detail: "Refund eligibility and arbitration terms.",
  },
  {
    label: "Retention & Renewals",
    href: "#retention",
    icon: MonitorCheck,
    detail: "Record keeping and subscription renewals.",
  },
  {
    label: "Severability",
    href: "#severability",
    icon: Shield,
    detail: "Keeping this agreement enforceable.",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: UserCheck,
    detail: "How to reach your Legal Mark Experts team.",
  },
] as const;

export default function EngagementAgreementPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <section className="relative overflow-hidden border-b border-[#e6defb] bg-gradient-to-br from-[#6c4cb1] via-[#7f5dd0] to-[#a181ff] text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 60%)" }} />
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-10">
          <p className="text-sm uppercase tracking-[0.28em] text-white/70">Engagement Agreement</p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Legal Mark Experts Engagement Agreement
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Our engagement agreement defines how we partner with you on U.S. trademark matters—from scope and billing to
            client responsibilities and dispute resolution. Review the terms below so you know exactly what to expect as we
            protect your brand.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Trademark-Only Focus",
                copy: "Dedicated to trademark strategy, filings, and enforcement within the United States.",
                icon: Target,
              },
              {
                title: "Transparent Billing",
                copy: "Flat fees, hourly support, and government costs outlined upfront with no surprises.",
                icon: FileText,
              },
              {
                title: "Client Collaboration",
                copy: "We rely on accurate, timely information to position your mark for success.",
                icon: Handshake,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col gap-4 rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-white/85">{card.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#ede7f6] bg-[#f7f5fb]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-sm font-semibold tracking-wide text-[#6c4cb1] sm:text-base">
              Navigate This Agreement
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {navHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-[#ded8f4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#c9bef0] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3efff] text-[#6c4cb1] transition group-hover:bg-[#6c4cb1] group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-1 flex-col gap-2 text-left">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-base font-semibold text-[#212121]">{item.label}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#a79ae0] transition group-hover:text-[#6c4cb1]" aria-hidden="true" />
                    </div>
                    <p className="text-sm leading-relaxed text-[#4b4b63]">{item.detail}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <AgreementSection id="welcome" title="Welcome">
        <p>
          Thank you for choosing Legal Mark Experts, a private trademark law firm based in New York. We serve businesses
          across the United States with a singular focus on trademark registration for brand names, logos, and slogans.
          By using our services, you agree to our Terms of Service, Privacy Policy, Fee Agreement, and all applicable
          service terms referenced throughout our website.
        </p>
      </AgreementSection>

      <AgreementSection id="scope" title="Scope of Representation" tone="alt">
        <p>
          Legal Mark Experts represents clients on a limited-scope basis for U.S. trademark matters unless otherwise
          agreed in writing. Until we complete a conflict check and formally confirm representation, you are considered a
          prospective client. Once accepted, we represent only the named client. For corporate clients, our engagement
          does not extend to individual officers, owners, or affiliates in their personal capacity.
        </p>
      </AgreementSection>

      <AgreementSection id="fees" title="Fees & Billing">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Flat Fees",
              description:
                "Earned once substantive work begins, including strategic review, analysis, consultations, or any action performed by a Senior Case Analyst or Paralegal.",
            },
            {
              title: "Hourly Support",
              description: "Billed upon invoice for services outside flat-fee scopes or for additional consultations.",
            },
            {
              title: "Government Fees",
              description: "Non-refundable once paid to the USPTO or any relevant authority.",
            },
            {
              title: "Dormant Engagements",
              description:
                "If no work occurs for over six months, the engagement automatically terminates unless extended in writing.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-[#e1dcf6] bg-white p-6 text-sm text-[#4b4b63] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c5b8ef] hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#212121]">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </AgreementSection>

      <AgreementSection id="termination" title="Termination" tone="alt">
        <p>
          You may terminate our services at any time. Legal Mark Experts may also withdraw in accordance with applicable
          ethical guidelines. You remain responsible for all fees and expenses incurred up to the termination date.
        </p>
      </AgreementSection>

      <AgreementSection id="subscriptions" title="Subscriptions & Bundled Discounts">
        <p>Some discounted services require active subscriptions to maintain preferred pricing:</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#dfd7f6] bg-white p-6 text-sm text-[#4b4b63] shadow-sm">
            <h3 className="text-base font-semibold text-[#6c4cb1]">Trademark Watch Subscription</h3>
            <p className="mt-2">
              Requires a minimum six-month term to retain discounted filing fees. Early cancellation may trigger
              retroactive billing at standard rates.
            </p>
          </div>
          <div className="rounded-2xl border border-[#dfd7f6] bg-white p-6 text-sm text-[#4b4b63] shadow-sm">
            <h3 className="text-base font-semibold text-[#6c4cb1]">Privacy Guard & Registered Agent</h3>
            <p className="mt-2">
              Services auto-renew annually. Cancellations require formal written notice according to the plan terms.
            </p>
          </div>
        </div>
      </AgreementSection>

      <AgreementSection id="guarantees" title="No Guarantees and Important Limitations" tone="alt">
        <p>
          Legal Mark Experts has not made any guarantees or promises about the outcome of your trademark matter. Nothing
          in this agreement should be interpreted as a promise or warranty of success. Limited-scope engagements may not
          allow time to address every brand strategy question, meaning some issues could remain unresolved or outside our
          representation. If you need additional assistance beyond your current service, you may request a follow-up
          consultation for an additional fee.
        </p>
      </AgreementSection>

      <AgreementSection id="trademark-services" title="Trademark Services Overview">
        <p>When we prepare and file trademark applications on your behalf, the following terms apply:</p>
        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-[#e4def8] bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-[#212121]">1. Application Modifications</h3>
            <p className="mt-2 text-sm text-[#4b4b63]">
              You authorize Legal Mark Experts to make reasonable modifications that improve registrability, including
              editing the goods/services description, adjusting classifications, or accepting USPTO-recommended changes
              such as disclaimers or translations.
            </p>
          </div>
          <div className="rounded-2xl border border-[#e4def8] bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-[#212121]">2. Use-Based Applications & Specimens</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#4b4b63]">
              <li>Submit only authentic, accurate specimens with your Section 1(a) filings.</li>
              <li>Allow our team to review specimens and, if necessary, locate alternatives on your public channels.</li>
              <li>Respond within 72 hours to requests for replacement specimens.</li>
              <li>Permit filing under Section 1(b) if no acceptable specimen is available.</li>
              <li>Acknowledge that fraudulent specimens may require us to withdraw representation.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#e4def8] bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-[#212121]">3. Logo Trademark Applications</h3>
            <p className="mt-2 text-sm text-[#4b4b63]">
              We may file your logo in black-and-white or with color claims depending on the strategy that provides stronger
              protection. Please notify us in writing if you have a specific preference.
            </p>
          </div>
        </div>
      </AgreementSection>

      <AgreementSection id="client-duties" title="Client Responsibilities" tone="alt">
        <p>By engaging Legal Mark Experts, you confirm that:</p>
        <ul>
          <li>You own, or believe you own, the trademark and have the right to use it in U.S. commerce.</li>
          <li>To the best of your knowledge, no conflicting marks exist.</li>
          <li>All information you submit is accurate, truthful, and complete.</li>
          <li>Our filings rely on the information you provide; false or misleading statements can lead to denial or penalties.</li>
        </ul>
      </AgreementSection>

      <AgreementSection id="intent-to-use" title="Intent-to-Use Filings">
        <p>
          For Section 1(b) applications, you must use the mark in commerce before the USPTO will grant registration. You
          are responsible for filing a Statement of Use with a valid specimen and any required fees once use begins.
        </p>
      </AgreementSection>

      <AgreementSection id="deadlines" title="Time-Sensitive Deadlines" tone="alt">
        <p>
          Legal Mark Experts cannot file documents after a deadline passes. We may decline requests submitted fewer than
          seven days before a deadline if sufficient information is unavailable. Services will also be declined if filing
          would violate legal, ethical, or professional obligations.
        </p>
      </AgreementSection>

      <AgreementSection id="conflicts" title="Future Work and Conflicts of Interest">
        <p>
          Our engagement is limited to the services described. Legal Mark Experts may represent other clients in unrelated
          matters, including clients whose interests may be adverse to yours, provided your confidential information
          remains protected. If a conflict arises, we will take appropriate measures consistent with ethical standards.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#dfd8f7] bg-white p-6 text-sm text-[#4b4b63] shadow-sm">
            <h3 className="text-base font-semibold text-[#212121]">Communication Responsibility</h3>
            <p className="mt-2">
              Check your email and voicemail regularly to ensure you receive timely updates and requests from our team.
            </p>
          </div>
          <div className="rounded-2xl border border-[#dfd8f7] bg-white p-6 text-sm text-[#4b4b63] shadow-sm">
            <h3 className="text-base font-semibold text-[#212121]">International Matters</h3>
            <p className="mt-2">
              For trademark protection outside the United States, we may refer you to trusted third-party providers. You
              are responsible for their separate fees and terms.
            </p>
          </div>
        </div>
      </AgreementSection>

      <AgreementSection id="waivers" title="Advance Waiver & Counsel" tone="alt">
        <p>
          You consent in advance to Legal Mark Experts representing future clients in unrelated matters, even if their
          interests conflict with yours, so long as your confidential information is safeguarded. You are encouraged to
          consult independent legal counsel about any conflict waiver provisions in this agreement.
        </p>
      </AgreementSection>

      <AgreementSection id="disclosures" title="Disclosure and Public Filings">
        <p>
          You agree that we may disclose our representation for conflict checks or as part of required public filings.
          Information you supply may appear in publicly accessible USPTO records. We represent only the individual or
          entity named in this agreement. Notify us within one business day if you need us to consider conflicts involving
          affiliated companies or individuals.
        </p>
      </AgreementSection>

      <AgreementSection id="refunds" title="Refund Policy, Dispute Resolution & Arbitration" tone="alt">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#ded7f5] bg-white p-6 text-sm text-[#4b4b63] shadow-sm">
            <h3 className="text-base font-semibold text-[#212121]">Refunds</h3>
            <p className="mt-2">
              Refund requests for non-legal services must be submitted within five calendar days. Legal fees are
              non-refundable once services begin.
            </p>
          </div>
          <div className="rounded-2xl border border-[#ded7f5] bg-white p-6 text-sm text-[#4b4b63] shadow-sm">
            <h3 className="text-base font-semibold text-[#212121]">Dispute Resolution</h3>
            <p className="mt-2">
              Disputes are resolved through binding arbitration under JAMS rules in Santa Clara County, California, unless
              you opt out within 30 days. Arbitration covers claims related to fees, service quality, or trademark
              outcomes.
            </p>
          </div>
        </div>
      </AgreementSection>

      <AgreementSection id="client-commitments" title="Ongoing Client Commitments">
        <p>Throughout the engagement, you agree to:</p>
        <ul>
          <li>Provide accurate, timely information as requested.</li>
          <li>Keep contact information current.</li>
          <li>Pay all invoiced fees and expenses.</li>
          <li>Respond promptly to deadlines and communication from our team.</li>
        </ul>
      </AgreementSection>

      <AgreementSection id="retention" title="File Retention & Subscription Renewals" tone="alt">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#e0d9f7] bg-white p-6 text-sm text-[#4b4b63] shadow-sm">
            <h3 className="text-base font-semibold text-[#212121]">File Retention</h3>
            <p className="mt-2">
              Unfiled matter records may be deleted after one year. Filed records may be deleted after three years, in
              accordance with our retention policies.
            </p>
          </div>
          <div className="rounded-2xl border border-[#e0d9f7] bg-white p-6 text-sm text-[#4b4b63] shadow-sm">
            <h3 className="text-base font-semibold text-[#212121]">Subscriptions & Auto-Renewals</h3>
            <p className="mt-2">
              Subscriptions auto-renew unless cancelled in advance. Promotional offers may convert to paid plans. Early
              cancellation can result in losing discounted benefits.
            </p>
          </div>
        </div>
        <div className="mt-5 rounded-2xl border border-[#d8d0f5] bg-white p-6 text-sm text-[#4b4b63] shadow-sm">
          <h3 className="text-base font-semibold text-[#212121]">Termination of Services</h3>
          <p className="mt-2">
            We may suspend or terminate access if you breach terms, fail to pay, or disrupt service operations. If a third
            party sponsored your plan, you may transition to a personal plan to maintain continued access.
          </p>
        </div>
      </AgreementSection>

      <AgreementSection id="severability" title="Severability">
        <p>
          If any provision of this engagement agreement is deemed unenforceable, the remaining provisions remain in full
          force and effect, ensuring the overall agreement stays intact.
        </p>
      </AgreementSection>

      <AgreementSection id="contact" title="Contact Information" tone="alt">
        <div className="rounded-2xl border border-[#dcd4f6] bg-[#f5f2ff] p-6 shadow-sm">
          <p className="text-sm text-[#4b4b63]">
            Have questions or need to update your engagement details? Reach out to our support team.
          </p>
          <div className="mt-4 space-y-2 text-sm text-[#333333]">
            <p>
              <span className="font-semibold text-[#6c4cb1]">Address:</span> 440 E. Southern Avenue, Tempe, AZ 85282
            </p>
            <p>
              <span className="font-semibold text-[#6c4cb1]">Phone:</span>{" "}
              <a href="tel:18777949511" className="text-[#6c4cb1] underline-offset-2 hover:underline">
                1-877-794-9511
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#6c4cb1]">Email:</span>{" "}
              <a href="mailto:support@legalmarkexperts.com" className="text-[#6c4cb1] underline-offset-2 hover:underline">
                support@legalmarkexperts.com
              </a>
            </p>
          </div>
          <p className="mt-4 text-xs text-[#6c7295]">
            Our team is committed to providing timely, transparent communication throughout your trademark journey.
          </p>
        </div>
      </AgreementSection>
    </main>
  );
}

function AgreementSection({
  id,
  title,
  children,
  tone = "base",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  tone?: "base" | "alt";
}) {
  const palette =
    tone === "alt"
      ? "bg-[#f8f6ff] border-[#e6defb]"
      : "bg-white border-[#f0edf9]";

  return (
    <section id={id} className={`border-b ${palette}`}>
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="inline-flex h-1 w-12 rounded-full bg-gradient-to-r from-[#6c4cb1] to-[#8d6de0]" />
            <h2 className="text-2xl font-semibold text-[#212121] sm:text-3xl">{title}</h2>
          </div>
          <div className="space-y-6 text-sm leading-relaxed text-[#333333] sm:text-base [&_a]:text-[#6c4cb1] [&_a]:underline-offset-2 [&_a:hover]:underline [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_strong]:text-[#212121] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul>li>strong]:text-[#212121]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
