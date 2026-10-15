"use client";

import { useState, type FormEvent } from "react";

export default function AdvertiseForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          inquiryType: "Advertise With Us",
          leadSource: "Food Talk India — Advertise",
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
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs sm:text-sm text-red-400 font-sans leading-relaxed">
          {error}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="adv-name" className="mb-2 block text-xs uppercase tracking-widest text-muted">
            Name
          </label>
          <input
            id="adv-name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            className="w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors focus:border-accent"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="adv-email" className="mb-2 block text-xs uppercase tracking-widest text-muted">
            Email
          </label>
          <input
            id="adv-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            className="w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors focus:border-accent"
            placeholder="jane@brand.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="adv-company" className="mb-2 block text-xs uppercase tracking-widest text-muted">
            Company
          </label>
          <input
            id="adv-company"
            name="company"
            required
            value={formData.company}
            onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
            className="w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors focus:border-accent"
            placeholder="Acme Foods"
          />
        </div>
        <div>
          <label htmlFor="adv-mobile" className="mb-2 block text-xs uppercase tracking-widest text-muted">
            Mobile
          </label>
          <input
            id="adv-mobile"
            name="mobile"
            type="tel"
            required
            value={formData.mobile}
            onChange={(e) => setFormData((p) => ({ ...p, mobile: e.target.value }))}
            className="w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors focus:border-accent"
            placeholder="+91 98765 43210"
          />
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
          required
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
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
