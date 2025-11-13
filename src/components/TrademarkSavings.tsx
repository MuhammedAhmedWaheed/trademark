"use client";

const SAVINGS_POINTS = [
  {
    number: "01",
    title: "Complete Our Simple Online Form",
    description:
      "Provide us with the necessary details about your brand, including your name or logo and the goods or services associated with it. Our intuitive form makes this quick and easy.",
  },
  {
    number: "02",
    title: "We Conduct a Search and Prepare Your Application",
    description:
      "Our specialists first conduct a direct-hit search to check for identical marks. Then, we meticulously prepare your trademark application, ensuring it meets all USPTO requirements and is placed in the correct classification to minimize the risk of rejection.",
  },
  {
    number: "03",
    title: "We File and Monitor Your Application",
    description:
      "Once prepared, we officially file your application with the USPTO. We then act as your correspondent, managing all communications from the USPTO, providing you with regular status updates, and keeping you informed until your trademark is successfully registered.",
  },
];

export default function TrademarkSavings() {
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
            Why Legal Mark Experts
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            Our Streamlined Trademark Registration Process
          </h2>
          <span className="mt-5 inline-flex h-[3px] w-16 rounded-full bg-[#6c4cb1]/50 sm:w-20" />
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SAVINGS_POINTS.map(({ number, title, description }) => (
            <article
              key={title}
              className="flex h-full flex-col gap-4 rounded-[26px] border border-[#e0e0e0] bg-white p-6 text-left shadow-[0_32px_90px_-70px_rgba(108,76,177,0.55)] transition hover:-translate-y-1 hover:border-[#cfc6ef] hover:shadow-[0_38px_110px_-70px_rgba(108,76,177,0.55)] sm:p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1edff] text-[#6c4cb1] font-semibold font-[var(--font-heading)] sm:h-12 sm:w-12">
                {number}
              </span>
              <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
