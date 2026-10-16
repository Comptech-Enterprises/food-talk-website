"use client";

import { useState, type FormEvent } from "react";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default function AdvertiseForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobile: "",
    message: "",
    _hp: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [generalError, setGeneralError] = useState("");

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Email address is required.";
        if (!EMAIL_REGEX.test(value.trim()))
          return "Please enter a valid email address.";
        return "";
      case "company":
        if (!value.trim()) return "Company name is required.";
        if (value.trim().length < 2)
          return "Company name must be at least 2 characters.";
        return "";
      case "mobile": {
        if (!value.trim()) return "Phone number is required.";
        const digits = value.replace(/\D/g, "");
        if (digits.length < 8 || digits.length > 15) {
          return "Please enter a valid phone number (8–15 digits).";
        }
        return "";
      }
      default:
        return "";
    }
  };

  const handleBlur = (field: string) => {
    const error = validateField(field, formData[field as keyof typeof formData] || "");
    setFieldErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      const error = validateField(field, value);
      setFieldErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGeneralError("");

    const errors: Record<string, string> = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      company: validateField("company", formData.company),
      mobile: validateField("mobile", formData.mobile),
    };

    if (Object.values(errors).some((err) => !!err)) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          mobile: formData.mobile.trim(),
          message: formData.message.trim(),
          _hp: formData._hp,
          inquiryType: "Advertise With Us",
          leadSource: "Food Talk Website",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSent(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        mobile: "",
        message: "",
        _hp: "",
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setGeneralError(message);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-bg-elevated p-8 sm:p-12 text-center space-y-4">
        <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-xl font-bold">
          ✓
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
          Enquiry Received
        </h3>
        <p className="text-sm text-muted font-sans leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. Our team will review your partnership request and get in touch with you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-xs uppercase font-bold text-accent hover:underline tracking-wider pt-2 font-display cursor-pointer"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field */}
      <input
        type="text"
        name="_hp"
        value={formData._hp}
        onChange={(e) => handleChange("_hp", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {generalError && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs sm:text-sm text-red-400 font-sans leading-relaxed">
          {generalError}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="adv-name" className="mb-2 block text-xs uppercase tracking-widest text-muted">
            Name *
          </label>
          <input
            id="adv-name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            className={`w-full rounded-xl border bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors ${
              fieldErrors.name
                ? "border-red-500/80 focus:border-red-500"
                : "border-line focus:border-accent"
            }`}
            placeholder="Jane Doe"
          />
          {fieldErrors.name && (
            <p className="mt-1 text-xs text-red-400 font-sans">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="adv-email" className="mb-2 block text-xs uppercase tracking-widest text-muted">
            Email *
          </label>
          <input
            id="adv-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className={`w-full rounded-xl border bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors ${
              fieldErrors.email
                ? "border-red-500/80 focus:border-red-500"
                : "border-line focus:border-accent"
            }`}
            placeholder="jane@brand.com"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-xs text-red-400 font-sans">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="adv-company" className="mb-2 block text-xs uppercase tracking-widest text-muted">
            Company *
          </label>
          <input
            id="adv-company"
            name="company"
            required
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            onBlur={() => handleBlur("company")}
            className={`w-full rounded-xl border bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors ${
              fieldErrors.company
                ? "border-red-500/80 focus:border-red-500"
                : "border-line focus:border-accent"
            }`}
            placeholder="Acme Foods"
          />
          {fieldErrors.company && (
            <p className="mt-1 text-xs text-red-400 font-sans">{fieldErrors.company}</p>
          )}
        </div>

        <div>
          <label htmlFor="adv-mobile" className="mb-2 block text-xs uppercase tracking-widest text-muted">
            Mobile *
          </label>
          <input
            id="adv-mobile"
            name="mobile"
            type="tel"
            required
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            onBlur={() => handleBlur("mobile")}
            className={`w-full rounded-xl border bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors ${
              fieldErrors.mobile
                ? "border-red-500/80 focus:border-red-500"
                : "border-line focus:border-accent"
            }`}
            placeholder="+91 98765 43210"
          />
          {fieldErrors.mobile && (
            <p className="mt-1 text-xs text-red-400 font-sans">{fieldErrors.mobile}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="adv-message" className="mb-2 block text-xs uppercase tracking-widest text-muted">
          Message
        </label>
        <textarea
          id="adv-message"
          name="message"
          rows={5}
          maxLength={5000}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full resize-none rounded-xl border border-line bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors focus:border-accent"
          placeholder="Tell us about your campaign or partnership idea…"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-[color:var(--accent-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">
          {loading ? "Sending…" : "Send Enquiry"}
        </span>
        <svg
          viewBox="0 0 24 24"
          className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-[color:rgba(255,255,255,0.15)] transition-transform duration-500 group-hover:translate-x-0"
        />
      </button>
    </form>
  );
}
