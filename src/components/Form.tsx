'use client';

import { Send } from 'lucide-react';
import {
    JSX,
  useCallback,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Form(): JSX.Element {
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  const resetFeedback = useCallback(() => {
    if (status !== 'idle') {
      setStatus('idle');
      setFeedback('');
    }
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: (formData.get('name') ?? '').toString().trim(),
      email: (formData.get('email') ?? '').toString().trim(),
      phone: (formData.get('phone') ?? '').toString().trim(),
      subject: (formData.get('subject') ?? '').toString().trim(),
      message: (formData.get('message') ?? '').toString().trim(),
    };

    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.success) {
        const message =
          data?.error ??
          "We couldn't send your message right now. Please try again or email support@legalmarkexperts.com.";
        setStatus('error');
        setFeedback(message);
        return;
      }

      setStatus('success');
      setFeedback("Thanks! We'll get back to you shortly.");
      form.reset();
    } catch (error) {
      console.error('Failed to submit contact form', error);
      setStatus('error');
      setFeedback("We couldn't send your message. Check your connection and try again.");
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#f9f7ff] to-white py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:px-8">
        <div className="rounded-3xl bg-[#20134b] px-6 py-8 text-white shadow-lg sm:px-8 lg:w-2/5">
          <p className="text-xs uppercase tracking-[0.28em] text-white/70">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Let&rsquo;s talk about your brand
          </h2>
          <p className="mt-4 text-sm text-white/80 sm:text-base">
            Share a few details and our trademark specialists will reach out
            within one business day with next steps tailored to your goals.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-white/85">
            <InfoBlock title="Call us">
              +1 (347) 523-4473 <span className="text-white/60">Mon–Fri, 9am‑6pm EST</span>
            </InfoBlock>
            <InfoBlock title="Email">
              info@legalmarkexperts.com
            </InfoBlock>
            <InfoBlock title="Visit">
              971 US-202 202n nBranchburg, NJ 08876, USA
            </InfoBlock>
          </div>
        </div>

        <div className="flex-1 rounded-3xl border border-[#e4def8] bg-white px-5 py-6 shadow-xl sm:px-8 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">
            Send us a message
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#212121] sm:text-3xl">
            We&rsquo;ll respond within one business day
          </h3>

          <form
            className="mt-6 grid gap-5"
            onSubmit={handleSubmit}
            onChange={resetFeedback}
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" id="name" required>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Full Name"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" id="email" required>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="Email Address"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Phone" id="phone" required>
              <input
                id="phone"
                name="phone"
                required
                type="tel"
                placeholder="Mobile Number"
                className={inputClass}
              />
            </Field>

            <Field label="Subject" id="subject">
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className={inputClass}
              />
            </Field>

            <Field label="Message" id="message">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help?"
                className={`${inputClass} resize-y`}
              />
            </Field>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6c4cb1] px-6 py-3 font-semibold text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6c4cb1] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === 'loading'}
            >
              <Send className="h-4 w-4" />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && feedback && (
              <p
                role="status"
                className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-3 text-sm text-[#166534]"
              >
                {feedback}
              </p>
            )}

            {status === 'error' && feedback && (
              <p
                role="alert"
                className="rounded-xl border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]"
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1 block text-sm font-medium text-[#212121]">
        {label} {required ? <span className="text-[#6c4cb1]">*</span> : null}
      </span>
      {children}
    </label>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-white/60">
        {title}
      </p>
      <p className="mt-2 text-sm font-medium text-white sm:text-base">
        {children}
      </p>
    </div>
  );
}

const inputClass =
  'w-full rounded-2xl border border-[#E0E0E0] bg-white px-4 py-3 text-[15px] placeholder:text-[#9ca3af] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/40';
