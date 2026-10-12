import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      aria-label="Food Talk India"
      className="relative w-full bg-bg-dark pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-accent/5 blur-[150px]"
      />

      <div className="relative z-10 w-full flex items-center justify-center px-4">
        <HeroVideo />
      </div>
    </section>
  );
}
