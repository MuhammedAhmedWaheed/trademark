import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  FileText,
  FolderOpen,
  Globe,
  Info,
  Layers,
  MessageSquare,
  PenLine,
  PhoneCall,
  RefreshCw,
  Scale,
  Share2,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Legal Mark Experts",
  description:
    "Learn how Legal Mark Experts collects, uses, protects, and shares personal information across our trademark services and website experiences.",
};

const quickLinks = [
  {
    label: "Introduction",
    href: "#introduction",
    icon: Info,
    blurb: "Our pledge to safeguard your privacy.",
  },
  {
    label: "Scope",
    href: "#scope",
    icon: Globe,
    blurb: "Who is covered under this policy.",
  },
  {
    label: "SMS Consent",
    href: "#sms-consent",
    icon: MessageSquare,
    blurb: "How messaging permissions are protected.",
  },
  {
    label: "Data We Collect",
    href: "#data-collection",
    icon: Database,
    blurb: "A look at the information we gather.",
  },
  {
    label: "Collection Methods",
    href: "#collection-methods",
    icon: FolderOpen,
    blurb: "The touchpoints where data is shared.",
  },
  {
    label: "How We Use Data",
    href: "#data-use",
    icon: Layers,
    blurb: "How insights power our services.",
  },
  {
    label: "Opt-Out Options",
    href: "#opt-out",
    icon: Share2,
    blurb: "Control over SMS and alerts.",
  },
  {
    label: "Disclosures",
    href: "#disclosures",
    icon: FileText,
    blurb: "When data sharing is required.",
  },
  {
    label: "Security Measures",
    href: "#security",
    icon: Shield,
    blurb: "Defense layers protecting your data.",
  },
  {
    label: "Data Retention",
    href: "#retention",
    icon: RefreshCw,
    blurb: "How long information is stored.",
  },
  {
    label: "Your Rights",
    href: "#rights",
    icon: Scale,
    blurb: "Requests, objections, and more.",
  },
  {
    label: "Policy Updates",
    href: "#changes",
    icon: PenLine,
    blurb: "Staying informed about revisions.",
  },
  {
    label: "Contact Us",
    href: "#contact",
    icon: PhoneCall,
    blurb: "Reach our dedicated privacy team.",
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <section className="relative overflow-hidden border-b border-[#e7e1f7] bg-gradient-to-r from-[#6c4cb1] via-[#7c5bc3] to-[#8d6de0] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(108,76,177,0.05))]" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Privacy Policy</p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Your Privacy, Protected with Purpose
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Secure Mark USA (&quot;Legal Mark Expert,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) delivers trademark registration, legal filing,
            and brand protection solutions for individuals and businesses throughout the United States. We are resolute in
            protecting the personal and confidential information entrusted to us. This policy explains the data we collect,
            how we use it, and the safeguards we maintain in accordance with applicable privacy laws.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Transparent Practices",
                description: "Clear explanations for how and why personal data is collected and processed.",
                icon: FileText,
              },
              {
                title: "Security First",
                description: "Layered safeguards including SSL encryption, hardened servers, and restricted access.",
                icon: Shield,
              },
              {
                title: "Respect for Choice",
                description: "Straightforward opt-out options and control over communication preferences.",
                icon: Share2,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-white/80">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#ede7f6] bg-[#f7f5fb]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)]">
            <div className="text-center">
              <h2 className="text-sm font-semibold tracking-wide text-[#6c4cb1] sm:text-base">
                Explore This Policy
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-[#ded8f4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#c6bbef] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3efff] text-[#6c4cb1] transition group-hover:bg-[#6c4cb1] group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-base font-semibold text-[#212121]">{item.label}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[#a598d8] transition group-hover:text-[#6c4cb1]" aria-hidden="true" />
                      </div>
                      <p className="text-sm leading-relaxed text-[#4b4b63]">{item.blurb}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Section id="introduction" title="Introduction">
        <p>
          Secure Mark USA (&quot;Legal Mark Expert,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides trademark registration services, legal
          document filing, and brand protection solutions for individuals and businesses in the United States. We
          understand the importance of safeguarding personal and confidential information. This Privacy Policy explains
          how we collect, use, and disclose personal data in accordance with applicable laws and regulations.
        </p>
      </Section>

      <Section id="scope" title="Scope" variant="alt">
        <p>This Privacy Policy applies to all personal data collected by Legal Mark Expert, including but not limited to:</p>
        <ul>
          <li>Individuals and businesses seeking trademark registration or related services</li>
          <li>Clients engaging us for legal filings, consultations, or brand protection support</li>
          <li>
            Visitors to our website{" "}
            <a href="https://www.securemarkusa.com" className="font-semibold">
              www.securemarkusa.com
            </a>
          </li>
        </ul>
      </Section>

      <Section id="sms-consent" title="SMS Consent">
        <div className="space-y-5">
          <p>
            We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you
            with that campaign&apos;s services. We may share your personal data, including your SMS opt-in or consent status,
            with trusted third parties that help us deliver messaging services such as platform providers, phone companies,
            or vendors assisting with text message delivery.
          </p>
          <div className="rounded-2xl border border-[#e0def1] bg-[#f8f6ff] p-5 shadow-sm">
            <p className="text-sm text-[#4b4b63]">
              All of the categories above exclude text messaging originator opt-in data and consent. This information will{" "}
              <strong>not</strong> be shared with any third parties.
            </p>
          </div>
        </div>
      </Section>

      <Section id="data-collection" title="Types of Personal Data Collected" variant="alt">
        <p>
          Legal Mark Expert may collect different categories of personal data depending on how you engage with us:
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              heading: "Contact Information",
              items: ["Name", "Email address", "Phone number", "Mailing address"],
            },
            {
              heading: "Business Information",
              items: ["Company name", "Business structure", "Ownership details"],
            },
            {
              heading: "Trademark Details",
              items: ["Product or service descriptions", "Logos and brand assets", "Evidence of trademark usage"],
            },
            {
              heading: "Payment & Records",
              items: ["Billing details", "Transaction records", "Support inquiries and consultation history"],
            },
          ].map((card) => (
            <div key={card.heading} className="rounded-2xl border border-[#ece8fa] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#6c4cb1]">{card.heading}</h3>
              <ul className="mt-3 space-y-1 text-sm text-[#4b4b63]">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="collection-methods" title="How We Collect Personal Data">
        <p>We gather personal data through the touchpoints you choose to interact with:</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Online Forms",
              description: "Service requests, trademark searches, consultations, and quote submissions completed on our site.",
            },
            {
              title: "Live Communications",
              description: "Follow-up emails, scheduled calls, live chat messages, and support tickets with our team.",
            },
            {
              title: "Website Analytics",
              description: "Visits, log files, cookies, and similar technologies that help improve performance and security.",
            },
            {
              title: "Document Exchanges",
              description: "Records provided for filings, onboarding questionnaires, and document uploads tied to your matter.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col rounded-2xl border border-[#e4dffa] bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#c8bbf1] hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-[#6c4cb1]">{card.title}</h3>
              <p className="mt-2 text-sm text-[#4b4b63]">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="data-use" title="How We Use Personal Data" variant="alt">
        <p>We rely on personal data to deliver a responsive, compliant client experience across every service line:</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Trademark Execution",
              description: "Prepare, file, and maintain trademark applications and related legal documents on your behalf.",
            },
            {
              title: "Service Communication",
              description: "Provide project updates, reminders, and consultation guidance tailored to your matter.",
            },
            {
              title: "Billing & Records",
              description: "Process payments securely, share invoices, and maintain accurate internal documentation.",
            },
            {
              title: "Client Support",
              description: "Respond to inquiries, diagnose issues, and resolve support requests quickly.",
            },
            {
              title: "Product Improvement",
              description: "Enhance services, refine website experiences, and develop features powered by aggregated insights.",
            },
            {
              title: "Compliance",
              description: "Satisfy legal obligations, respond to regulatory requests, and uphold professional standards.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col rounded-2xl border border-[#dcd4f6] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#bfb0ea] hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-[#212121]">{card.title}</h3>
              <p className="mt-2 text-sm text-[#4b4b63]">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="opt-out" title="Opt-Out Process">
        <div className="space-y-4">
          <p>You always have control over your messaging preferences:</p>
          <ol className="grid gap-4 list-decimal pl-5 sm:grid-cols-2 sm:pl-6 [&>li]:rounded-2xl [&>li]:border [&>li]:border-[#e1dcf6] [&>li]:bg-white [&>li]:p-5 [&>li]:text-sm [&>li]:leading-relaxed [&>li]:shadow-sm">
            <li>Reply to any text message from Legal Mark Expert with &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot;.</li>
            <li>Send a text to (845) 660-0206 with the same keywords at any time.</li>
          </ol>
          <p className="text-sm text-[#4b4b63]">
            Once we receive your request, we will promptly remove your number from future messaging campaigns.
          </p>
        </div>
      </Section>

      <Section id="disclosures" title="How We Disclose Personal Data" variant="alt">
        <p>We may share personal data in limited, purposeful scenarios:</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Operational Partners",
              description: "Specialized service providers that support payment processing, secure hosting, communication delivery, and similar business functions.",
            },
            {
              title: "Regulatory Requests",
              description: "Government agencies or regulatory bodies when disclosure is required by law, subpoena, or an official investigative request.",
            },
            {
              title: "Legal Counsel",
              description: "Attorneys assisting with disputes, enforcement actions, or claims requiring confidential information sharing.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col rounded-2xl border border-[#ddd6f8] bg-white p-6 text-sm text-[#4b4b63] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c7bdf2] hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-[#212121]">{card.title}</h3>
              <p className="mt-2">{card.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-[#e0def1] bg-[#f9f7ff] p-5 text-sm text-[#4b4b63]">
          We do <strong>not</strong> sell, rent, or share your personal data with third-party marketers.
        </p>
      </Section>

      <Section id="security" title="Security Measures">
        <p>We maintain layered technical and organizational safeguards to protect personal data:</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "SSL encryption across our website and client portals",
            "Secure servers, hardened infrastructure, and monitored firewalls",
            "Role-based internal access controls aligned with job responsibilities",
            "Regular data backups, integrity checks, and proactive monitoring",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[#ece8fa] bg-white p-5 text-sm text-[#4b4b63] shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="retention" title="Data Retention" variant="alt">
        <p>
          We retain personal data only as long as necessary to fulfill the services you have requested, comply with legal
          and regulatory obligations, and maintain accurate business records. When information is no longer required, we
          securely delete or anonymize the data consistent with industry best practices.
        </p>
      </Section>

      <Section id="rights" title="Rights of Individuals">
        <p>You may exercise the following rights where applicable under privacy regulations:</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            {
              heading: "Access & Portability",
              description: "Request a copy of the personal data we hold about you and understand how it is processed.",
            },
            {
              heading: "Correction & Deletion",
              description: "Ask us to correct inaccurate information or delete data when legally permissible.",
            },
            {
              heading: "Processing Preferences",
              description: "Object to or restrict specific types of processing based on your circumstances.",
            },
            {
              heading: "Regulatory Recourse",
              description: "Submit a complaint to a data protection authority if you believe your rights are not respected.",
            },
          ].map((card) => (
            <div key={card.heading} className="rounded-2xl border border-[#ece8fa] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#6c4cb1]">{card.heading}</h3>
              <p className="mt-2 text-sm text-[#4b4b63]">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="changes" title="Changes to This Privacy Policy" variant="alt">
        <p>
          We may update this Privacy Policy from time to time to reflect new services, evolving legal requirements, or
          improved privacy practices. Any updates will be posted on this page and become effective immediately upon
          posting. Continued use of our services constitutes acceptance of the revised policy.
        </p>
      </Section>

      <Section id="contact" title="Contact Us">
        <p>Questions about this Privacy Policy or how we handle your personal data? Our privacy team is ready to help.</p>
        <div className="mt-6 rounded-2xl border border-[#d9d1f1] bg-[#f4f1ff] p-6 shadow-sm">
          <p className="text-sm uppercase tracking-wide text-[#6c4cb1]">Legal Mark Expert</p>
          <div className="mt-3 space-y-2 text-sm text-[#4b4b63]">
            <p>
              <span className="font-semibold text-[#333333]">Email:</span>{" "}
              <a href="mailto:info@legalmarkexperts.com">info@legalmarkexperts.com</a>
            </p>
            <p>
              <span className="font-semibold text-[#333333]">Phone:</span>{" "}
              <a href="tel:+18456600206">(845) 660-0206</a>
            </p>
            <p>
              <span className="font-semibold text-[#333333]">Website:</span>{" "}
              <a href="https://legalmarkexperts.com">legalmarkexperts.com</a>
            </p>
          </div>
          <p className="mt-4 text-xs text-[#6c7295]">
            We are committed to protecting your privacy and ensuring personal data is handled responsibly.
          </p>
        </div>
      </Section>
    </main>
  );
}

function Section({
  id,
  title,
  children,
  variant = "default",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "alt";
}) {
  const sectionTone =
    variant === "alt"
      ? "bg-[#f8f6ff] border-[#e6defb]"
      : "bg-white border-[#f0edf9]";

  return (
    <section id={id} className={`border-b ${sectionTone}`}>
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
