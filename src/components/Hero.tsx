import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      aria-label="Food Talk India"
      className="relative h-screen h-[100dvh] min-h-[600px] w-full overflow-hidden bg-bg-dark select-none"
    >
      {/* 3-Section Cinematic Video Hero */}
      <HeroVideo />

      {/* Top subtle vignette for transparent navbar clarity */}
      <div className="absolute top-0 left-0 right-0 h-28 sm:h-32 bg-gradient-to-b from-black/70 via-black/25 to-transparent pointer-events-none z-20" />
    </section>
  );
}
