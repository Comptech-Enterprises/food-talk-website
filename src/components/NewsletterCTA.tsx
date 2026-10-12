"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import LineReveal from "./LineReveal";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const COUNTRIES = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
];

const CITIES = ["Delhi-NCR", "Mumbai", "Banglore"] as const;

export default function NewsletterCTA() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [cityError, setCityError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleCity = (city: string) => {
    setCityError(false);
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedCities.length === 0) {
      setCityError(true);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="relative min-h-[550px] w-full flex items-center overflow-hidden py-16 md:py-24 border-b border-line bg-bg"
    >
      {/* Background Image with Parallax & Dark Overlay */}
      <Parallax className="absolute inset-0" speed={0.18} scale={1.2}>
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80"
          alt="Wine glasses clinking in warm light"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </Parallax>
      {/* Anthem Dark Wash & Ambient Glow */}
      <div className="absolute inset-0 bg-black/80 md:bg-black/75 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16 w-full">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left Column: Heading */}
          <div className="md:col-span-6 lg:col-span-7 text-left">
            <Reveal variant="left">
              <p className="font-display text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-accent inline-block" />
                JOIN THE CLUB
              </p>
            </Reveal>

            <LineReveal
              as="h2"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white"
              lines={[
                "GET ACCESS TO",
                <span key="highlight" className="text-gradient">
                  OUR EXPERIENCES.
                </span>,
              ]}
            />

            <Reveal delay={200} variant="up">
              <p className="mt-6 text-base sm:text-lg text-muted max-w-lg leading-relaxed font-sans">
                Curated dinners, chef collaborations, and private tastings — all
                delivered straight to your inbox before they sell out.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Theme-Adapted Form Card */}
          <div className="md:col-span-6 lg:col-span-5">
            <Reveal delay={250}>
              <div className="relative bg-surface/90 backdrop-blur-xl border border-line rounded-2xl p-6 sm:p-8 shadow-2xl text-left hover:border-accent/30 transition-colors">
                {/* Ambient glow inside card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-accent/10 blur-[80px]"
                />

                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-2xl font-bold">
                      ✓
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                      YOU’RE ON THE LIST!
                    </h3>
                    <p className="text-sm text-muted font-sans leading-relaxed">
                      Thank you for signing up. Watch out for an invite to our
                      upcoming dining experiences.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setEmail("");
                        setPhone("");
                        setSelectedCities([]);
                      }}
                      className="text-xs uppercase font-bold text-accent hover:underline tracking-wider pt-2 font-display cursor-pointer"
                    >
                      Sign up another contact
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative space-y-4 sm:space-y-5">
                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="signup-email"
                        className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5 font-display tracking-wider uppercase"
                      >
                        Email<span className="text-accent ml-0.5">*</span>
                      </label>
                      <input
                        id="signup-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full bg-surface-2 border border-line rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder:text-muted-2 font-sans focus:outline-none focus:bg-surface-3 focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5 font-display tracking-wider uppercase">
                        Phone<span className="text-accent ml-0.5">*</span>
                      </label>

                      {/* Country Dropdown */}
                      <div className="relative mb-2.5">
                        <button
                          type="button"
                          onClick={() => setCountryDropdownOpen((v) => !v)}
                          className="w-full bg-surface-2 border border-line rounded-lg px-4 py-3 flex items-center justify-between text-xs sm:text-sm text-white font-sans focus:outline-none focus:border-accent focus:bg-surface-3 transition-all cursor-pointer"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="text-lg leading-none">
                              {selectedCountry.flag}
                            </span>
                            <span className="font-medium text-white">
                              {selectedCountry.name}
                            </span>
                          </span>
                          <svg
                            className={`w-4 h-4 text-muted transition-transform duration-200 ${
                              countryDropdownOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Country Menu */}
                        {countryDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-surface-2 border border-line rounded-lg shadow-2xl z-30 max-h-48 overflow-y-auto">
                            {COUNTRIES.map((country) => (
                              <button
                                key={country.code + country.name}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setCountryDropdownOpen(false);
                                }}
                                className="w-full px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm text-left text-white/90 hover:bg-surface-3 hover:text-accent transition-colors cursor-pointer"
                              >
                                <span className="flex items-center gap-2.5 font-sans">
                                  <span className="text-base">
                                    {country.flag}
                                  </span>
                                  <span>{country.name}</span>
                                </span>
                                <span className="text-xs text-muted font-mono">
                                  {country.code}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Phone Input with Prefix */}
                      <div className="flex rounded-lg border border-line bg-surface-2 overflow-hidden focus-within:border-accent focus-within:ring-1 focus-within:ring-accent focus-within:bg-surface-3 transition-all">
                        <div className="bg-surface-3 border-r border-line px-4 py-3 text-xs sm:text-sm text-white font-mono font-medium flex items-center justify-center min-w-[65px] select-none">
                          {selectedCountry.code}
                        </div>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                          required
                          className="flex-1 bg-transparent px-4 py-3 text-xs sm:text-sm text-white placeholder:text-muted-2 outline-none font-sans"
                        />
                      </div>
                    </div>

                    {/* City Checkboxes */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2 font-display tracking-wider uppercase">
                        City<span className="text-accent ml-0.5">*</span>
                      </label>
                      <div className="space-y-2.5">
                        {CITIES.map((city) => (
                          <label
                            key={city}
                            className="flex items-center gap-3 cursor-pointer group select-none"
                          >
                            <input
                              type="checkbox"
                              checked={selectedCities.includes(city)}
                              onChange={() => toggleCity(city)}
                              className="h-4 w-4 rounded border-line bg-surface-2 accent-[var(--accent)] text-accent focus:ring-accent cursor-pointer"
                            />
                            <span className="text-xs sm:text-sm text-muted group-hover:text-white transition-colors font-sans">
                              {city}
                            </span>
                          </label>
                        ))}
                      </div>
                      {cityError && (
                        <p className="mt-2 text-xs text-accent font-sans">
                          Please select at least one city.
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-accent text-black py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-lg hover:bg-accent-soft hover:shadow-[0_0_20px_var(--accent-glow)] active:scale-[0.99] transition-all cursor-pointer font-display mt-3"
                    >
                      SIGN UP
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
