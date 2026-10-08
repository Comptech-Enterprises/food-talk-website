import Image from "next/image";
import Reveal from "./Reveal";

type Partner = { name: string; logo?: string };

// Add a `logo` path (webp/svg in /public) to a partner to show its logo
// instead of the text wordmark.
const PARTNERS: Partner[] = [
  { name: "Diageo" },
  { name: "Bacardi" },
  { name: "Campari" },
  { name: "ITC Hotels" },
  { name: "Taj" },
  { name: "BMW" },
  { name: "Singapore Tourism Board" },
  { name: "Jägermeister" },
  { name: "Don Julio" },
  { name: "Ray-Ban" },
  { name: "Uniqlo" },
];

export default function PartnerLogos() {
  return (
    <section aria-label="Trusted by" className="border-t border-line py-10 md:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-6 md:mb-8">
        <Reveal>
          <p className="text-center text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-muted">
            Trusted by
          </p>
        </Reveal>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-bg to-transparent z-10" />

        <div className="flex w-max marquee-track items-center">
          {/* First loop */}
          <ul className="flex items-center shrink-0 gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16">
            {PARTNERS.map((partner, idx) => (
              <li key={`p1-${partner.name}-${idx}`} className="shrink-0 text-fg/45">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-7 sm:h-8 w-auto opacity-60 grayscale"
                  />
                ) : (
                  <span className="font-display text-sm sm:text-base md:text-lg font-black tracking-wider uppercase whitespace-nowrap">
                    {partner.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Duplicate loop for seamless infinite marquee */}
          <ul aria-hidden="true" className="flex items-center shrink-0 gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16">
            {PARTNERS.map((partner, idx) => (
              <li key={`p2-${partner.name}-${idx}`} className="shrink-0 text-fg/45">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-7 sm:h-8 w-auto opacity-60 grayscale"
                  />
                ) : (
                  <span className="font-display text-sm sm:text-base md:text-lg font-black tracking-wider uppercase whitespace-nowrap">
                    {partner.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
