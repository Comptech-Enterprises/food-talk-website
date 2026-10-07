"use client";

import type { FormEvent } from "react";

const INPUT =
  "w-full bg-transparent border-b-2 border-fg/25 py-4 text-lg placeholder:text-muted/60 focus:outline-none focus:border-fg transition-colors";
const LABEL = "block text-xs font-bold tracking-[0.15em] uppercase text-muted mb-1";

export default function PartnerForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div>
        <label htmlFor="name" className={LABEL}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className={INPUT}
        />
      </div>

      <div>
        <label htmlFor="email" className={LABEL}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className={INPUT}
        />
      </div>

      <div>
        <label htmlFor="phone" className={LABEL}>
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="+91"
          className={INPUT}
        />
      </div>

      <button
        type="submit"
        className="w-full border border-fg bg-fg text-bg py-5 text-base font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors cursor-pointer"
      >
        SUBMIT
      </button>
    </form>
  );
}
