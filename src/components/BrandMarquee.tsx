const BRANDS = [
  "DIAGEO",
  "BACARDI",
  "CAMPARI",
  "ITC HOTELS",
  "TAJ",
  "BMW",
  "SINGAPORE TOURISM BOARD",
  "JAGERMEISTER",
  "DON JULIO",
  "RAY-BAN",
  "UNIQLO",
];

export default function BrandMarquee() {
  const items = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-accent py-3 overflow-hidden">
      <div className="marquee-track flex items-center gap-6 whitespace-nowrap">
        {items.map((brand, i) => (
          <span key={`${brand}-${i}`} className="flex items-center gap-6">
            <span className="font-display text-xs font-bold tracking-wider text-accent-ink uppercase">
              {brand}
            </span>
            <span className="text-accent-ink/40" aria-hidden>
              &bull;
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
