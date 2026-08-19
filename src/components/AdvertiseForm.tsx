"use client";

import { useState, type FormEvent } from "react";

export default function AdvertiseForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Advertise With Us");
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nCompany: ${fd.get("company")}\nMobile: ${fd.get("mobile")}\n\n${fd.get("message")}`
    );
    window.location.href = `mailto:info@theanthem.in?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="adv-name" className="mb-2 block text-xs uppercase tracking-widest text-muted">
            Name
          </label>
          <input
            id="adv-name"
            name="name"
            required
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
          className="w-full resize-none rounded-xl border border-line bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors focus:border-accent"
          placeholder="Tell us about your campaign or partnership idea…"
        />
      </div>

      <button
        type="submit"
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-[color:var(--accent-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <span className="relative z-10">
          {sent ? "Opening mail client…" : "Send Enquiry"}
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
