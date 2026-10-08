import HeroVideo from "./HeroVideo";
import Parallax from "./Parallax";

export default function Hero() {
  return (
    <section
      aria-label="Food Talk India"
      className="relative aspect-[16/10] sm:aspect-auto sm:h-[80vh] md:h-[85vh] sm:min-h-[480px] w-full overflow-hidden bg-bg-dark"
    >
      <Parallax className="absolute inset-0" speed={0.2} scale={1.05}>
        <HeroVideo
          src="/6222582-hd_1920_1080_24fps.mp4"
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1280&q=60"
        />
      </Parallax>
      <div className="absolute inset-0 bg-black/15 bg-gradient-to-b from-black/70 via-black/15 to-transparent" />
    </section>
  );
}
