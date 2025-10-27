import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight, Clock } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Legal Mark Experts Blog",
    };
  }

  return {
    title: `${post.title} | Legal Mark Experts Blog`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const orderedPosts = blogPosts.slice().sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  );
  const currentIndex = orderedPosts.findIndex((item) => item.slug === slug);
  const previousPost = currentIndex > 0 ? orderedPosts[currentIndex - 1] : undefined;
  const nextPost = currentIndex < orderedPosts.length - 1 ? orderedPosts[currentIndex + 1] : undefined;

  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden bg-[#f4efff]">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f2ff] to-[#e9defa] opacity-90" />
        <div className="absolute -top-24 right-20 h-56 w-56 rounded-full bg-[#cbb8ff] opacity-30 blur-3xl" />
        <div className="absolute -bottom-28 left-12 h-72 w-72 rounded-full bg-[#eadfff] opacity-50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#6c4cb1]">
            <Link href="/resources/blog" className="inline-flex items-center gap-1 hover:text-[#432b7d]">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to articles
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#b7a6e4]" />
            <span>Resources</span>
          </div>

          <div className="mt-8 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-[#6c4cb1] shadow-sm shadow-[#6c4cb1]/10">
              {post.tags.join(" • ")}
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-[#20123f] sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#544476]">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 font-medium">
                <Clock className="h-4 w-4 text-[#6c4cb1]" />
                {post.published}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 font-medium">
                <span className="h-2 w-2 rounded-full bg-[#6c4cb1]" />
                {post.readTime}
              </div>
            </div>

            <p className="max-w-3xl text-base text-[#43355f] sm:text-lg">{post.heroSummary}</p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
          <div className="space-y-14">
            {post.sections.map((section, sectionIndex) => (
              <section key={`${section.heading}-${sectionIndex}`} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#221544] sm:text-3xl">{section.heading}</h2>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${sectionIndex}-paragraph-${paragraphIndex}`} className="text-base leading-7 text-[#41335d]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="space-y-3 rounded-3xl border border-[#ede7ff] bg-[#f8f5ff] p-6 text-[#3c2d5c]">
                    {section.bullets.map((item, bulletIndex) => (
                      <li key={`${sectionIndex}-bullet-${bulletIndex}`} className="flex items-start gap-3 text-sm leading-6">
                        <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.highlight && (
                  <div className="rounded-3xl border border-[#d9cfff] bg-gradient-to-br from-[#f7f2ff] to-white p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">
                      {section.highlight.title}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-[#3f2f63]">
                      {section.highlight.items.map((item, highlightIndex) => (
                        <li key={`${sectionIndex}-highlight-${highlightIndex}`} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          <aside className="mt-16 rounded-3xl border border-[#e4dcff] bg-[#f8f5ff] p-8">
            <h2 className="text-xl font-semibold text-[#26164a]">Key takeaways</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#443566]">
              {post.keyTakeaways.map((item, takeawayIndex) => (
                <li key={`takeaway-${takeawayIndex}`} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <section className="bg-[#f5f0ff] py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-4 rounded-3xl border border-[#e4dcff] bg-white p-8 shadow-lg shadow-[#6c4cb1]/10 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-[#26164a] sm:text-2xl">
                Need help applying these insights to your brand?
              </h2>
              <p className="text-sm text-[#4f3e73] sm:text-base">
                Our senior case analysts prepare filings, responses, and monitoring plans tailored to your risk profile.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
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
                Talk to a Specialist
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">
              Continue learning
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              {previousPost && (
                <Link
                  href={`/resources/blog/${previousPost.slug}`}
                  className="group inline-flex items-center gap-3 rounded-2xl border border-[#e6ddff] bg-white px-5 py-4 text-sm font-semibold text-[#34215e] transition hover:border-[#6c4cb1] hover:text-[#6c4cb1]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {previousPost.title}
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/resources/blog/${nextPost.slug}`}
                  className="group inline-flex items-center gap-3 rounded-2xl border border-[#e6ddff] bg-white px-5 py-4 text-sm font-semibold text-[#34215e] transition hover:border-[#6c4cb1] hover:text-[#6c4cb1]"
                >
                  {nextPost.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
