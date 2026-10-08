import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      aria-label="Food Talk India"
      className="relative h-[56vh] min-h-[380px] sm:h-[80vh] md:h-[85vh] sm:min-h-[480px] w-full overflow-hidden bg-bg-dark"
    >
      <HeroVideo
        src="/6222582-hd_1920_1080_24fps.mp4"
        poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1280&q=60"
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10 bg-gradient-to-b from-black/25 via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}
