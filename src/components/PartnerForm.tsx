"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const BASE_INPUT =
  "w-full bg-transparent border-b-2 py-3.5 sm:py-4 text-base sm:text-lg text-white placeholder:text-muted/60 focus:outline-none transition-colors font-sans";
const LABEL = "block text-xs font-bold tracking-[0.15em] uppercase text-muted mb-1 font-display";

function Required() {
  return <span className="text-red-500">*</span>;
}

export default function PartnerForm({
  inquiryType = "Brand Partner",
}: {
  inquiryType?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobile: "",
    message: "",
    _hp: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [generalError, setGeneralError] = useState("");

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        if (value.trim().length > 80) return "Name must be under 80 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Email address is required.";
        if (!EMAIL_REGEX.test(value.trim()))
          return "Please enter a valid email address (e.g. name@example.com).";
        return "";
      case "company":
        if (!value.trim()) return "Company or brand name is required.";
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
    setFieldErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      const error = validateField(field, value);
      setFieldErrors((prev) => ({
        ...prev,
        [field]: error,
      }));
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGeneralError("");

    // Validate all fields
    const errors: Record<string, string> = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      company: validateField("company", formData.company),
      mobile: validateField("mobile", formData.mobile),
    };

    const hasErrors = Object.values(errors).some((err) => !!err);
    if (hasErrors) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

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
          inquiryType,
          leadSource: "Food Talk Website",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        mobile: "",
        message: "",
        _hp: "",
      });
    } catch (err: any) {
      setStatus("error");
      setGeneralError(err.message || "Failed to submit. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="w-14 h-14 mx-auto rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-2xl font-bold">
          ✓
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
          THANK YOU!
        </h3>
        <p className="text-sm text-muted font-sans leading-relaxed max-w-sm mx-auto">
          We&apos;ve received your details and will get in touch with you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-xs uppercase font-bold text-accent hover:underline tracking-wider pt-2 font-display cursor-pointer"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 sm:space-y-8">
      {/* Honeypot field for bot spam prevention */}
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

      <div>
        <label htmlFor="partner-name" className={LABEL}>
          Name <Required />
        </label>
        <input
          id="partner-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={80}
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          placeholder="Your name"
          className={`${BASE_INPUT} ${
            fieldErrors.name
              ? "border-red-500/80 focus:border-red-500"
              : "border-white/20 focus:border-accent"
          }`}
        />
        {fieldErrors.name && (
          <p className="mt-1.5 text-xs text-red-400 font-sans">{fieldErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="partner-email" className={LABEL}>
          Email <Required />
        </label>
        <input
          id="partner-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={100}
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          placeholder="you@example.com"
          className={`${BASE_INPUT} ${
            fieldErrors.email
              ? "border-red-500/80 focus:border-red-500"
              : "border-white/20 focus:border-accent"
          }`}
        />
        {fieldErrors.email && (
          <p className="mt-1.5 text-xs text-red-400 font-sans">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="partner-company" className={LABEL}>
          Company <Required />
        </label>
        <input
          id="partner-company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          maxLength={200}
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          onBlur={() => handleBlur("company")}
          placeholder="Your company or brand"
          className={`${BASE_INPUT} ${
            fieldErrors.company
              ? "border-red-500/80 focus:border-red-500"
              : "border-white/20 focus:border-accent"
          }`}
        />
        {fieldErrors.company && (
          <p className="mt-1.5 text-xs text-red-400 font-sans">{fieldErrors.company}</p>
        )}
      </div>

      <div>
        <label htmlFor="partner-mobile" className={LABEL}>
          Mobile <Required />
        </label>
        <input
          id="partner-mobile"
          name="mobile"
          type="tel"
          autoComplete="tel"
          required
          maxLength={30}
          value={formData.mobile}
          onChange={(e) => handleChange("mobile", e.target.value)}
          onBlur={() => handleBlur("mobile")}
          placeholder="+91 98765 43210"
          className={`${BASE_INPUT} ${
            fieldErrors.mobile
              ? "border-red-500/80 focus:border-red-500"
              : "border-white/20 focus:border-accent"
          }`}
        />
        {fieldErrors.mobile && (
          <p className="mt-1.5 text-xs text-red-400 font-sans">{fieldErrors.mobile}</p>
        )}
      </div>

      <div>
        <label htmlFor="partner-message" className={LABEL}>
          Message
        </label>
        <textarea
          id="partner-message"
          name="message"
          rows={3}
          maxLength={5000}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us about your brand or collaboration idea…"
          className={`${BASE_INPUT} border-white/20 focus:border-accent resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent text-black py-4 sm:py-5 text-sm sm:text-base font-extrabold uppercase tracking-wider rounded-xl hover:bg-accent-soft hover:shadow-[0_0_25px_var(--accent-glow)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer font-display disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "SENDING…" : "SUBMIT"}
      </button>
    </form>
  );
}
