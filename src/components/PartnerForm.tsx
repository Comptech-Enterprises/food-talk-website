"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const INPUT =
  "w-full bg-transparent border-b-2 border-white/20 py-3.5 sm:py-4 text-base sm:text-lg text-white placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors font-sans";
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
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
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
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
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
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {errorMessage && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs sm:text-sm text-red-400 font-sans leading-relaxed">
          {errorMessage}
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
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Your name"
          className={INPUT}
        />
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
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="you@example.com"
          className={INPUT}
        />
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
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, company: e.target.value }))
          }
          placeholder="Your company"
          className={INPUT}
        />
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
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, mobile: e.target.value }))
          }
          placeholder="+91 98765 43210"
          className={INPUT}
        />
      </div>

      <div>
        <label htmlFor="partner-message" className={LABEL}>
          Message
        </label>
        <textarea
          id="partner-message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder="Tell us about your brand or collaboration idea…"
          className={`${INPUT} resize-none`}
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
