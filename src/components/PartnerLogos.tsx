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
    <section aria-label="Trusted by" className="bg-[#c8e600] text-black py-3 sm:py-3.5 overflow-hidden">
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="flex w-max marquee-track items-center">
          {/* First loop */}
          <div className="flex items-center shrink-0 gap-6 sm:gap-8 pr-6 sm:pr-8">
            {PARTNERS.map((name, idx) => (
              <span key={`p1-${name}-${idx}`} className="flex items-center gap-6 sm:gap-8">
                <span className="font-display text-xs sm:text-sm font-black tracking-[0.18em] uppercase text-black whitespace-nowrap">
                  {name}
                </span>
                <span className="text-black/60 text-xs">•</span>
              </span>
            ))}
          </div>

          {/* Duplicate loop for seamless continuous scrolling */}
          <div aria-hidden="true" className="flex items-center shrink-0 gap-6 sm:gap-8 pr-6 sm:pr-8">
            {PARTNERS.map((name, idx) => (
              <span key={`p2-${name}-${idx}`} className="flex items-center gap-6 sm:gap-8">
                <span className="font-display text-xs sm:text-sm font-black tracking-[0.18em] uppercase text-black whitespace-nowrap">
                  {name}
                </span>
                <span className="text-black/60 text-xs">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
