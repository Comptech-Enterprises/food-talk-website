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
    <section aria-label="Trusted by" className="border-t border-line py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-muted">
            Trusted by
          </p>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {PARTNERS.map((partner) => (
              <li key={partner.name} className="text-fg/45">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto opacity-60 grayscale"
                  />
                ) : (
                  <span className="font-display text-base md:text-lg font-black tracking-wider uppercase">
                    {partner.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
