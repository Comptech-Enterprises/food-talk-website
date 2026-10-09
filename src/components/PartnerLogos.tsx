const PARTNERS = [
  "DIAGEO",
  "BACARDI",
  "CAMPARI",
  "ITC HOTELS",
  "TAJ",
  "BMW",
  "SINGAPORE TOURISM BOARD",
  "JÄGERMEISTER",
  "DON JULIO",
  "RAY-BAN",
  "UNIQLO",
];

export default function PartnerLogos() {
  return (
    <section aria-label="Trusted by" className="bg-bg-dark text-white py-4 border-y border-line-dark overflow-hidden">
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="flex w-max marquee-track items-center">
          {/* First loop */}
          <div className="flex items-center shrink-0 gap-8 sm:gap-10 pr-8 sm:pr-10">
            {PARTNERS.map((name, idx) => (
              <span key={`p1-${name}-${idx}`} className="flex items-center gap-8 sm:gap-10">
                <span className="font-display text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white/80 hover:text-accent transition-colors whitespace-nowrap">
                  {name}
                </span>
                <span className="text-accent text-sm font-bold">•</span>
              </span>
            ))}
          </div>

          {/* Duplicate loop for seamless continuous scrolling */}
          <div aria-hidden="true" className="flex items-center shrink-0 gap-8 sm:gap-10 pr-8 sm:pr-10">
            {PARTNERS.map((name, idx) => (
              <span key={`p2-${name}-${idx}`} className="flex items-center gap-8 sm:gap-10">
                <span className="font-display text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white/80 hover:text-accent transition-colors whitespace-nowrap">
                  {name}
                </span>
                <span className="text-accent text-sm font-bold">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
