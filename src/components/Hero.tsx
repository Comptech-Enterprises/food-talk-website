import HeroVideo from "./HeroVideo";
import Parallax from "./Parallax";

export default function Hero() {
  return (
    <section
      aria-label="Food Talk India"
      className="relative h-screen h-[100dvh] min-h-[600px] w-full overflow-hidden bg-bg-dark select-none"
    >
      {/* Video with parallax scroll effect */}
      <Parallax className="absolute inset-0" speed={0.35} scale={1.15}>
        <HeroVideo />
      </Parallax>

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />

      {/* Top subtle vignette for transparent navbar clarity */}
      <div className="absolute top-0 left-0 right-0 h-28 sm:h-32 bg-gradient-to-b from-black/70 via-black/25 to-transparent pointer-events-none z-20" />

      {/* Text overlay with parallax fade-out on scroll */}
      <Parallax className="absolute inset-0 z-30 pointer-events-none hidden md:block" speed={-0.18} fadeOut>
        <div className="flex items-end h-full px-6 sm:px-10 md:px-14 lg:px-16 pb-16 sm:pb-20">
          <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-black uppercase tracking-[-0.03em] text-white leading-[1] w-full">
            FOOD
            <br />
            TALK
            <br />
            <span className="text-gradient">INDIA</span>
          </h1>
        </div>
      </Parallax>
    </section>
  );
}
