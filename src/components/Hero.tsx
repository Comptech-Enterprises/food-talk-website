import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[78vh] overflow-hidden flex flex-col justify-end pt-24 sm:pt-28 pb-10 sm:pb-12 md:pb-14">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
        alt="Candlelit dinner table with friends sharing food and drinks"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="relative mx-auto max-w-7xl w-full px-6">
        <h1 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] font-black uppercase leading-[0.88] tracking-tighter text-white drop-shadow-2xl">
          FOOD
          <br />
          <span className="italic text-[var(--red)]">TALK</span>
          <br />
          INDIA
        </h1>
        <p className="mt-4 sm:mt-5 text-white/90 text-base sm:text-lg md:text-xl max-w-lg font-light leading-snug drop-shadow-md">
          A curated food experiences
          <br />
          platform by Food Talk India.
        </p>
      </div>
    </section>
  );
}
