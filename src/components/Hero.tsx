import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden flex items-end">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
        alt="Candlelit dinner table with friends sharing food and drinks"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      <div className="relative mx-auto max-w-7xl w-full px-6 pb-16 md:pb-20">
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-[0.95] text-white">
          FOOD
          <br />
          <span className="italic text-[var(--red)]">TALK</span>
          <br />
          INDIA
        </h1>
        <p className="mt-4 text-white/80 text-lg md:text-xl max-w-md">
          A curated food experiences
          <br />
          platform by Food Talk India.
        </p>
      </div>
    </section>
  );
}
