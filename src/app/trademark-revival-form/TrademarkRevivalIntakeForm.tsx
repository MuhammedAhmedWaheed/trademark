'use client';

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

const abandonmentReasons = [
  { value: "missed-office-action", label: "Missed Office Action" },
  { value: "missed-sou", label: "Missed Statement of Use (SOU)" },
  { value: "uspto-rejection", label: "USPTO Rejection" },
  { value: "other", label: "Other" },
  { value: "unknown", label: "Don't Know" },
] as const;

const usageOptions = [
  { value: "website", label: "Website" },
  { value: "amazon", label: "Amazon" },
  { value: "shopify", label: "Shopify" },
  { value: "instagram", label: "Instagram" },
  { value: "product-label", label: "Product Label" },
  { value: "none", label: "None yet." },
] as const;

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function TrademarkRevivalIntakeForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [brandUse, setBrandUse] = useState("");
  const [selectedUsage, setSelectedUsage] = useState<string[]>([]);
  const [showUsageValidation, setShowUsageValidation] = useState(false);

  const resetFeedback = () => {
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setFeedbackMessage("");
    }
  };

  const handleBrandUseChange = (event: ChangeEvent<HTMLSelectElement>) => {
    resetFeedback();
    const value = event.target.value;
    setBrandUse(value);
    if (value === "no") {
      setSelectedUsage([]);
      setShowUsageValidation(false);
    } else if (value === "yes") {
      setSelectedUsage((previous) => {
        const filtered = previous.filter((item) => item !== "none");
        if (filtered.length) {
          setShowUsageValidation(false);
        }
        return filtered;
      });
    }
  };

  const toggleUsage = (value: string) => {
    resetFeedback();
    setSelectedUsage((previous) => {
      const exists = previous.includes(value);
      if (exists) {
        const next = previous.filter((item) => item !== value);
        if (!next.length) {
          setShowUsageValidation(false);
        }
        return next;
      }

      if (value === "none") {
        setShowUsageValidation(false);
        return ["none"];
      }

      const next = [...previous.filter((item) => item !== "none"), value];
      if (next.length) {
        setShowUsageValidation(false);
      }
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const brandUseValue = (formData.get("brandUse") ?? "").toString();
    const usageSelections = formData.getAll("usageChannels").map((value) => value.toString());

    if (brandUseValue === "yes" && usageSelections.length === 0) {
      setShowUsageValidation(true);
      const firstCheckbox = form.querySelector<HTMLInputElement>('input[data-usage-option]');
      firstCheckbox?.focus();
      return;
    }

    setShowUsageValidation(false);
    setSubmitStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/trademark-revival", {
        method: "POST",
        body: formData,
      });
      const payload = (await response.json().catch(() => null)) as { success?: boolean; error?: string } | null;

      if (!response.ok || !payload?.success) {
        const errorMessage =
          payload?.error ??
          "We could not submit your request at the moment. Please try again or email support@legalmarkexperts.com.";
        setSubmitStatus("error");
        setFeedbackMessage(errorMessage);
        return;
      }

      setSubmitStatus("success");
      setFeedbackMessage("Thanks for sharing these details. Our revival specialists will reach out within one business day.");
      form.reset();
      setBrandUse("");
      setSelectedUsage([]);
      setShowUsageValidation(false);
    } catch (error) {
      console.error("Failed to submit trademark revival form", error);
      setSubmitStatus("error");
      setFeedbackMessage("We could not submit your request. Please check your connection and try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8 rounded-3xl border border-[#e4def8] bg-white p-6 shadow-lg sm:p-8 lg:p-10"
      noValidate
    >
      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">
          Basic Contact Details
        </legend>
        <Input label="Full Name" name="fullName" placeholder="Jane Smith" required />
        <Input label="Company" name="company" placeholder="Legal Mark Holdings LLC" />
        <Input label="Email Address" name="email" type="email" placeholder="you@company.com" required />
        <Input label="Phone Number" name="phone" type="tel" placeholder="(555) 123-4567" required />
      </fieldset>

      <fieldset className="grid gap-4">
        <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">Application Information</legend>
        <Input
          label="Trademark Name"
          name="trademarkName"
          placeholder="Enter the name that was abandoned"
          required
        />
        <Input
          label="USPTO Serial Number"
          name="serialNumber"
          placeholder="e.g., 97-123456"
        />
        <Input
          label="Goods / Services Description"
          name="goodsServices"
          placeholder="Describe the products or services covered by this mark."
          as="textarea"
          rows={4}
          required
        />
        <Input
          label="Date of Abandonment (if known)"
          name="abandonmentDate"
          type="date"
        />
        <Select
          label="Reason for Abandonment"
          name="abandonmentReason"
          required
        >
          <option value="">Select a reason</option>
          {abandonmentReasons.map((reason) => (
            <option key={reason.value} value={reason.value}>
              {reason.label}
            </option>
          ))}
        </Select>
      </fieldset>

      <fieldset className="grid gap-6">
        <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">Current Status</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            label="Do you still use this brand?"
            name="brandUse"
            required
            value={brandUse}
            onChange={handleBrandUseChange}
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
          <Input
            label="Website or Social Media Link (if any)"
            name="presenceUrl"
            type="url"
            placeholder="https://www.yourbrand.com"
          />
        </div>
        <div className="rounded-2xl border border-[#d7cef6] bg-[#f8f6ff] p-5">
          <span className="block text-sm font-semibold text-[#212121]">Where is it used?</span>
          <span className="mt-1 block text-xs text-[#4b4b63]">
            Select all that apply. Choose “None yet.” if the mark is not yet in use.
          </span>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {usageOptions.map((option) => {
              const isDisabled =
                brandUse === "no"
                  ? option.value !== "none"
                  : brandUse === "yes"
                    ? option.value === "none"
                    : false;

              return (
                <label
                  key={option.value}
                  className="flex items-center gap-3 rounded-xl border border-transparent bg-white px-4 py-3 text-sm text-[#212121] shadow-sm transition hover:border-[#cfc4f6]"
                >
                  <input
                    type="checkbox"
                    name="usageChannels"
                    value={option.value}
                    checked={selectedUsage.includes(option.value)}
                    onChange={() => toggleUsage(option.value)}
                    className="h-4 w-4 rounded border-[#c5b8ef] text-[#6c4cb1] focus:ring-[#6c4cb1]"
                    data-usage-option
                    disabled={isDisabled}
                  />
                  <span>{option.label}</span>
                </label>
              );
            })}
          </div>
          {showUsageValidation && (
            <p className="mt-3 text-sm font-medium text-[#b32d2d]">
              Let us know where the brand appears so we can prepare the right proof of use.
            </p>
          )}
        </div>
      </fieldset>

      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-dashed border-transparent bg-transparent p-0 text-sm text-[#4b4b63]"
      >
        {feedbackMessage && (
          <div
            className={`rounded-2xl border px-4 py-3 ${
              submitStatus === "success"
                ? "border-[#b9f2d0] bg-[#f0fff7] text-[#20613c]"
                : "border-[#f5cdd0] bg-[#fff5f6] text-[#8b1e28]"
            }`}
          >
            {feedbackMessage}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 rounded-2xl bg-[#f8f6ff] p-5 text-sm text-[#4b4b63] sm:flex-row sm:items-center sm:justify-between">
        <p>By submitting you agree to our Engagement Agreement and Privacy Policy.</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={submitStatus === "loading"}
        >
          {submitStatus === "loading" ? "Submitting..." : "Submit Revival Request"}
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
  as?: "input" | "textarea";
};

function Input({ label, name, placeholder, type = "text", required, rows, as = "input" }: InputProps) {
  const shared =
    "w-full rounded-2xl border border-[#d7cef6] bg-white px-4 py-3 text-sm text-[#212121] shadow-sm focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#d9d0f7]";

  return (
    <label className="grid gap-2 text-sm font-medium text-[#212121]">
      <span>{label}</span>
      {as === "textarea" ? (
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
          className={shared}
        />
      )}
    </label>
  );
}

type SelectProps = {
  label: string;
  name: string;
  required?: boolean;
  children: ReactNode;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ label, name, required, children, value, onChange }: SelectProps) {
  const shared =
    "w-full rounded-2xl border border-[#d7cef6] bg-white px-4 py-3 text-sm text-[#212121] shadow-sm focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#d9d0f7]";

  const controlProps =
    value !== undefined
      ? { value, onChange }
      : { defaultValue: "", onChange };

  return (
    <label className="grid gap-2 text-sm font-medium text-[#212121]">
      <span>{label}</span>
      <select name={name} required={required} className={shared} {...controlProps}>
        {children}
      </select>
    </label>
  );
}
