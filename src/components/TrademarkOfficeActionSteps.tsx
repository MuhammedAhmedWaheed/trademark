import Image from "next/image";
import Link from "next/link";

export default function TrademarkOfficeActionSteps() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="relative flex w-full items-center justify-center lg:max-w-xl">
          <div className="absolute inset-y-6 left-6 hidden w-[85%] rounded-full bg-[#f5f5f5] blur-3xl lg:block" aria-hidden />
          <div className="relative overflow-hidden rounded-[36px] bg-[#f5f5f5] p-6 shadow-[0_40px_120px_-85px_rgba(33,33,33,0.55)]">
            <Image
              src="/trademarkofficeaction3.png"
              alt="Two-step flow showing how to respond to a USPTO office action"
              width={640}
              height={460}
              className="h-auto w-full object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-8 lg:max-w-xl">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold leading-snug text-[#212121] sm:text-3xl lg:text-4xl font-[var(--font-heading)]">
              Respond to <span className="text-[#6c4cb1]">Office Action</span> in just{" "}
              <span className="text-[#6c4cb1]">2 simple steps</span>
            </h2>
            <p className="text-sm text-[#333333] sm:text-base font-[var(--font-body)]">
              All information you provide stays secure and confidential while our attorneys prepare your complete response.
            </p>
          </div>
          <div className="space-y-4 rounded-[26px] border border-[#ebe2ff] bg-[#f8f6ff] p-6 shadow-[0_25px_70px_-60px_rgba(108,76,177,0.45)]">
            <StepItem
              number="1"
              title="Select your mark"
              description="Choose the mark that needs an office action response — we surface your USPTO records instantly."
            />
            <div className="h-px bg-gradient-to-r from-[#ebe2ff] via-[#d7c8ff] to-[#ebe2ff]" aria-hidden />
            <StepItem
              number="2"
              title="Select complexity of office action"
              description="Pick from simple, medium, or complex responses and our licensed attorneys handle the rest."
            />
          </div>
          <div>
            <Link href="/contact">
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-[22px] bg-[#6c4cb1] px-8 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3f96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:h-14 sm:text-base font-[var(--font-heading)]"
            >
              Start Responding to Your Office Action
            </button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type StepItemProps = {
  number: string;
  title: string;
  description: string;
};

function StepItem({ number, title, description }: StepItemProps) {
  return (
    <div className="flex items-start gap-4 text-left sm:gap-5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#6c4cb1] shadow-[0_10px_25px_-18px_rgba(108,76,177,0.85)] sm:h-10 sm:w-10 sm:text-base font-[var(--font-heading)]">
        {number}
      </span>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-[#212121] sm:text-base font-[var(--font-heading)]">{title}</p>
        <p className="text-xs text-[#333333] sm:text-sm font-[var(--font-body)]">{description}</p>
      </div>
    </div>
  );
}
