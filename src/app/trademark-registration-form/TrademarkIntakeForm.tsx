'use client';

import { useState, type FormEvent } from 'react';

type AssetType = 'name' | 'logo' | 'slogan';

type AssetOption = {
  id: AssetType;
  title: string;
  description: string;
  fieldLabel: string;
  fieldName: string;
  fieldType: 'text' | 'file';
  fieldAs?: 'input' | 'textarea';
  fieldRows?: number;
  placeholder?: string;
  accept?: string;
  helperText?: string;
};

const assetOptions: AssetOption[] = [
  {
    id: 'name',
    title: 'Name',
    description: 'Business name identifying your brand',
    fieldLabel: 'What name do you want to protect?',
    fieldName: 'markName',
    fieldType: 'text',
    placeholder: 'e.g., Legal Mark Experts',
  },
  {
    id: 'logo',
    title: 'Logo',
    description: 'Graphical design identifying your brand',
    fieldLabel: 'Upload your logo file',
    fieldName: 'logoFile',
    fieldType: 'file',
    accept: 'image/*',
    helperText: 'Supported formats: PNG, SVG, JPG up to 10 MB.',
  },
  {
    id: 'slogan',
    title: 'Slogan',
    description: 'Short phrase identifying your brand',
    fieldLabel: 'Enter your slogan or tagline',
    fieldName: 'sloganText',
    fieldType: 'text',
    fieldAs: 'textarea',
    fieldRows: 3,
    placeholder: 'e.g., Secure Every Mark.',
  },
];

export function TrademarkIntakeForm() {
  const [selectedAssets, setSelectedAssets] = useState<AssetType[]>([]);
  const [showAssetValidation, setShowAssetValidation] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const toggleAsset = (assetId: AssetType) => {
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setFeedbackMessage('');
    }

    setSelectedAssets((previous) => {
      const exists = previous.includes(assetId);
      const next = exists ? previous.filter((item) => item !== assetId) : [...previous, assetId];
      if (next.length > 0) {
        setShowAssetValidation(false);
      }
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedAssets.length === 0) {
      setShowAssetValidation(true);
      const firstCheckbox = event.currentTarget.querySelector<HTMLInputElement>('input[data-asset-option]');
      firstCheckbox?.focus();
      return;
    }

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitStatus('loading');
    setFeedbackMessage('');

    const formData = new FormData(form);

    try {
      const response = await fetch('/api/trademark-registration', {
        method: 'POST',
        body: formData,
      });
      const payload = (await response.json().catch(() => null)) as { success?: boolean; error?: string } | null;

      if (!response.ok || !payload?.success) {
        const errorMessage =
          payload?.error ??
          'We could not submit your request right now. Please try again or email support directly.';
        setSubmitStatus('error');
        setFeedbackMessage(errorMessage);
        return;
      }

      setSubmitStatus('success');
      setFeedbackMessage('Thanks! We received your trademark details and will follow up shortly.');
      form.reset();
      setSelectedAssets([]);
      setShowAssetValidation(false);
    } catch (error) {
      console.error('Failed to submit trademark registration form', error);
      setSubmitStatus('error');
      setFeedbackMessage('We could not submit your request. Please check your connection and try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8 rounded-3xl border border-[#e4def8] bg-white p-6 shadow-lg sm:p-8 lg:p-10"
    >
      {submitStatus === 'success' && feedbackMessage && (
        <div className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-4 text-sm text-[#166534]">
          {feedbackMessage}
        </div>
      )}
      {submitStatus === 'error' && feedbackMessage && (
        <div className="rounded-2xl border border-[#fecaca] bg-[#fef2f2] p-4 text-sm text-[#b91c1c]">
          {feedbackMessage}
        </div>
      )}

      <fieldset className="grid gap-5">
        <legend className="text-base font-semibold text-[#212121]">
          <span className="text-[#ff6f61]">*</span> Select what you are trying to protect
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          {assetOptions.map((option) => {
            const isSelected = selectedAssets.includes(option.id);

            return (
              <label
                key={option.id}
                htmlFor={`asset-${option.id}`}
                className={`relative flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition ${
                  isSelected
                    ? 'border-[#6c4cb1] bg-[#f4f0ff] shadow-sm'
                    : 'border-[#d7cef6] bg-white hover:border-[#b9a8f0]'
                }`}
              >
                <input
                  id={`asset-${option.id}`}
                  name="assets"
                  type="checkbox"
                  value={option.id}
                  data-asset-option
                  checked={isSelected}
                  onChange={() => toggleAsset(option.id)}
                  className="absolute inset-0 h-0 w-0 opacity-0"
                  aria-describedby={`asset-${option.id}-description`}
                />
                <div
                  className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${
                    isSelected ? 'bg-[#6c4cb1] text-white' : 'bg-[#efe9ff] text-[#6c4cb1]'
                  }`}
                >
                  {option.title.charAt(0)}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#212121]">{option.title}</p>
                  <p id={`asset-${option.id}-description`} className="text-xs text-[#4b4b63]">
                    {option.description}
                  </p>
                </div>
                <span
                  className={`ml-auto mt-1 flex h-5 w-5 items-center justify-center rounded-full border ${
                    isSelected
                      ? 'border-[#6c4cb1] bg-[#6c4cb1] text-white'
                      : 'border-[#cfc4f4] bg-white text-transparent'
                  }`}
                  aria-hidden="true"
                >
                  ✓
                </span>
              </label>
            );
          })}
        </div>
        {showAssetValidation && selectedAssets.length === 0 && (
          <p className="text-sm font-medium text-[#d23f3f]">Required field. Please select at least one option.</p>
        )}
      </fieldset>

      {selectedAssets.length > 0 && (
        <div className="grid gap-6 rounded-2xl bg-[#f8f6ff] p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">Provide Asset Details</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {assetOptions
              .filter((option) => selectedAssets.includes(option.id))
              .map((option) => (
                <div key={`field-${option.id}`} className="grid gap-2">
                  <Input
                    label={option.fieldLabel}
                    name={option.fieldName}
                    placeholder={option.placeholder}
                    type={option.fieldType === 'file' ? 'file' : undefined}
                    accept={option.accept}
                    as={option.fieldAs}
                    rows={option.fieldRows}
                    required
                  />
                  {option.helperText && <p className="text-xs text-[#4b4b63]">{option.helperText}</p>}
                </div>
              ))}
          </div>
        </div>
      )}

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">Contact Details</legend>
        <Input label="Full Name" name="fullName" placeholder="Jane Smith" required />
        <Input label="Company (optional)" name="company" placeholder="Legal Mark Holdings LLC" />
        <Input label="Email Address" name="email" type="email" placeholder="you@company.com" required />
        <Input label="Phone Number" name="phone" type="tel" placeholder="(555) 123-4567" required />
      </fieldset>

      <fieldset className="grid gap-4">
        <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">Goods & Services</legend>
        <Input
          label="How will you use this trademark?"
          name="goodsServices"
          placeholder="Describe the products or services sold under this mark."
          as="textarea"
          rows={4}
          required
        />
        <Input
          label="Where can we see this mark online? (website URL)"
          name="websiteUrl"
          type="url"
          placeholder="https://www.yourbrand.com"
        />
        <Input
          label="Are you using it in commerce yet? (optional)"
          name="currentUse"
          placeholder="Share how and where the mark is currently in use, if applicable."
          as="textarea"
          rows={3}
        />
      </fieldset>

      <fieldset className="grid gap-4">
        <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">Tell Us More (optional)</legend>
        <Input
          label="Please provide a brief description of the nature of your business."
          name="additionalNotes"
          as="textarea"
          rows={5}
        />
      </fieldset>

      <label className="flex items-start gap-3 rounded-2xl bg-[#f8f6ff] p-5 text-sm text-[#4b4b63]">
        <input type="checkbox" name="subscribe" className="mt-1 h-4 w-4 rounded border-[#c5b8ef] text-[#6c4cb1]" />
        <span>
          Keep me informed about trademark renewal deadlines, monitoring alerts, and Legal Mark Experts updates. You can
          opt out anytime.
        </span>
      </label>

      <div className="flex flex-col gap-3 rounded-2xl bg-[#f8f6ff] p-5 text-sm text-[#4b4b63] sm:flex-row sm:items-center sm:justify-between">
        <p>
          By submitting this form you agree to our{' '}
          <a href="/company/terms" className="text-[#6c4cb1] underline-offset-2 hover:underline">
            Engagement Agreement
          </a>{' '}
          and{' '}
          <a href="/company/privacy" className="text-[#6c4cb1] underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={submitStatus === 'loading'}
        >
          {submitStatus === 'loading' ? 'Submitting...' : 'Submit Registration Request'}
        </button>
      </div>
    </form>
  );
}

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  rows?: number;
  as?: 'input' | 'textarea';
  accept?: string;
};

function Input({
  label,
  name,
  placeholder,
  type = 'text',
  required,
  rows,
  as = 'input',
  accept,
}: InputProps) {
  const shared =
    'w-full rounded-2xl border border-[#d7cef6] bg-white px-4 py-3 text-sm text-[#212121] shadow-sm focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#d9d0f7]';

  return (
    <label className="grid gap-2 text-sm font-medium text-[#212121]">
      <span>{label}</span>
      {as === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows ?? 4}
          required={required}
          className={`${shared} resize-y`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          accept={accept}
          className={shared}
        />
      )}
    </label>
  );
}
