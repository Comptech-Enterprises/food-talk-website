import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      aria-label="Food Talk India"
      className="relative h-[78vh] sm:h-[84vh] md:h-[88vh] min-h-[500px] w-full overflow-hidden bg-bg-dark select-none"
    >
      {/* 3-Section Cinematic Video Hero */}
      <HeroVideo />

      {/* Top subtle vignette for transparent navbar clarity */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-36 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none z-20" />

      {/* Bottom subtle blend into following page sections */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent pointer-events-none z-20" />
    </section>
  );
}
