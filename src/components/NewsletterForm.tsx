"use client";

import { useState, type FormEvent } from "react";

const cities = ["Delhi-NCR", "Mumbai", "Bangalore"] as const;

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);
  const [cityError, setCityError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const selected = cities.filter((c) => fd.getAll("city").includes(c));
    if (selected.length === 0) {
      setCityError(true);
      return;
    }
    setCityError(false);

    const subject = encodeURIComponent("Newsletter signup — Food Talk India");
    const body = encodeURIComponent(
      `Email: ${fd.get("email")}\nPhone: +91 ${fd.get("phone")}\nCities: ${selected.join(", ")}`
    );
    window.location.href = `mailto:info@theanthem.in?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nl-email" className="mb-2 block text-xs uppercase tracking-widest text-muted">
          Email*
        </label>
        <input
          id="nl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted-dim outline-none transition-colors focus:border-accent"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="nl-phone" className="mb-2 block text-xs uppercase tracking-widest text-muted">
          Phone*
        </label>
        <div className="flex overflow-hidden rounded-xl border border-line bg-bg-elevated focus-within:border-accent">
          <span className="flex shrink-0 items-center border-r border-line px-3 text-sm text-muted">
            +91
          </span>
          <input
            id="nl-phone"
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            autoComplete="tel-national"
            pattern="[0-9]{10}"
            maxLength={10}
            className="w-full bg-transparent px-4 py-3 text-fg placeholder:text-muted-dim outline-none"
            placeholder="98765 43210"
          />
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 block text-xs uppercase tracking-widest text-muted">
          City*
        </legend>
        <div className="flex flex-col gap-3">
          {cities.map((city) => (
            <label
              key={city}
              className="flex cursor-pointer items-center gap-3 text-sm text-fg"
            >
              <input
                type="checkbox"
                name="city"
                value={city}
                onChange={() => setCityError(false)}
                className="h-4 w-4 accent-[var(--accent)]"
              />
              {city}
            </label>
          ))}
        </div>
        {cityError ? (
          <p className="mt-2 text-xs text-accent">Pick at least one city.</p>
        ) : null}
      </fieldset>

      <button
        type="submit"
        className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-[color:var(--accent-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <span className="relative z-10">
          {sent ? "Opening mail client…" : "Subscribe"}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-[color:rgba(255,255,255,0.15)] transition-transform duration-500 group-hover:translate-x-0"
        />
      </button>
    </form>
  );
}
