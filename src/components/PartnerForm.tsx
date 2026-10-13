"use client";

import { useState, type FormEvent } from "react";

const INPUT =
  "w-full bg-transparent border-b-2 border-white/20 py-3.5 sm:py-4 text-base sm:text-lg text-white placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors font-sans";
const LABEL = "block text-xs font-bold tracking-[0.15em] uppercase text-muted mb-1 font-display";

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
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
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setPhone("");
          }}
          className="text-xs uppercase font-bold text-accent hover:underline tracking-wider pt-2 font-display cursor-pointer"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6 sm:space-y-8">
      <div>
        <label htmlFor="partner-name" className={LABEL}>
          Name
        </label>
        <input
          id="partner-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          required
          placeholder="Your name"
          className={INPUT}
        />
      </div>

      <div>
        <label htmlFor="partner-email" className={LABEL}>
          Email
        </label>
        <input
          id="partner-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          placeholder="you@example.com"
          className={INPUT}
        />
      </div>

      <div>
        <label htmlFor="partner-phone" className={LABEL}>
          Phone number
        </label>
        <input
          id="partner-phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          required
          placeholder="+91"
          className={INPUT}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-black py-4 sm:py-5 text-sm sm:text-base font-extrabold uppercase tracking-wider rounded-xl hover:bg-accent-soft hover:shadow-[0_0_25px_var(--accent-glow)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer font-display"
      >
        SUBMIT
      </button>
    </form>
  );
}
