import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, PenSquare } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Trademark Insights Blog | Legal Mark Experts",
  description:
    "Read the latest trademark strategies, case studies, and practical guidance from the Legal Mark Experts team. Explore 10 in-depth articles covering filings, monitoring, and brand protection.",
};

function sortPostsByDate() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  );
}

export default function BlogIndexPage() {
  const posts = sortPostsByDate();

  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden bg-[#f5f0ff]">
        <div className="absolute top-[-6rem] right-[-4rem] h-56 w-56 rounded-full bg-[#d2c2ff] blur-3xl opacity-40" />
        <div className="absolute bottom-[-8rem] left-[-4rem] h-64 w-64 rounded-full bg-[#f0e9ff] blur-3xl opacity-60" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 md:flex-row md:items-end md:gap-16 lg:px-8 lg:py-20">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#6c4cb1] shadow-sm shadow-[#6c4cb1]/10">
              <PenSquare className="h-4 w-4" />
              Legal Mark Experts Blog
            </span>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight text-[#1d1238] sm:text-4xl lg:text-5xl">
                Trademark intelligence for founders, in-house teams, and brand builders.
              </h1>
              <p className="max-w-2xl text-base text-[#40335f] sm:text-lg">
                Sharp, data-backed articles written by our trademark analysts. Understand the USPTO process, avoid
                costly pitfalls, and protect every inch of your brand identity with confidence.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/services/trademark-registration"
                className="inline-flex items-center gap-2 rounded-full bg-[#6c4cb1] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
              >
                Explore Trademark Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resources/about"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-[#341f66] shadow-md shadow-black/5 transition hover:bg-white"
              >
                Meet the Legal Mark Experts Team
              </Link>
            </div>
          </div>

          <div className="order-first grid flex-shrink-0 gap-4 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl shadow-[#6c4cb1]/10 backdrop-blur md:order-last md:max-w-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6c4cb1]">What you will find</p>
              <ul className="mt-3 space-y-2 text-sm text-[#40335f]">
                <li>• Real USPTO data that informs better filings.</li>
                <li>• Playbooks for office actions, monitoring, and revivals.</li>
                <li>• Launch checklists to safeguard your next brand rollout.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#6c4cb1]/10 p-4 text-sm text-[#2b1b4d]">
              New here? Start with{" "}
              <Link href="/resources/blog/why-most-diy-trademark-filings-get-rejected" className="font-semibold text-[#6c4cb1] underline-offset-4 hover:underline">
                Why DIY Filings Get Rejected
              </Link>{" "}
              to see how our experts eliminate office action risk from day one.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#1d1238] sm:text-3xl">Latest trademark insights</h2>
              <p className="text-sm text-[#5b4a7a] sm:text-base">
                Every article is crafted to match our service playbooks, so you can move from reading to action without guesswork.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f2ecff] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#6c4cb1]">
              {posts.length} articles
            </span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[#ece7ff] bg-white shadow-sm shadow-[#6c4cb1]/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6c4cb1]/20"
              >
                <div className="flex flex-col gap-5 p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-[#6c4cb1]">
                    <span>{post.tags[0]}</span>
                    <span className="h-1 w-1 rounded-full bg-[#c0b0ec]" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="space-y-3">
                    <Link href={`/resources/blog/${post.slug}`} className="block">
                      <h3 className="text-xl font-semibold text-[#20103d] transition group-hover:text-[#6c4cb1]">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm leading-6 text-[#4a3a6b]">{post.excerpt}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#f7f4ff] px-3 py-1 text-xs font-medium text-[#54417e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#eee9ff] bg-[#faf8ff] px-6 py-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#746098]">
                    <Clock className="h-4 w-4 text-[#6c4cb1]" />
                    <span>{post.published}</span>
                  </div>
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#6c4cb1] transition hover:gap-3"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ff] py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl border border-[#e7dcff] bg-white px-6 py-12 text-center shadow-lg shadow-[#6c4cb1]/10 sm:px-12">
          <h2 className="max-w-3xl text-2xl font-semibold text-[#24124a] sm:text-3xl">
            Ready to turn these insights into a registration strategy that matches your growth goals?
          </h2>
          <p className="max-w-2xl text-sm text-[#4f3f73] sm:text-base">
            Talk to a Legal Mark Experts strategist for a no-pressure consultation, or start your application online in minutes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/trademark-registration-form"
              className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-110"
            >
              Start a Trademark Application
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#f2ecff] px-6 py-3 text-sm font-semibold text-[#412a73] transition hover:bg-[#e7dbff]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
