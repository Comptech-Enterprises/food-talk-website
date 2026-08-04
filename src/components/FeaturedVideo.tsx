import Reveal from "./Reveal";

export default function FeaturedVideo() {
  return (
    <section
      aria-label="Watch us"
      className="border-t border-line bg-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            Watch Us
          </p>
        </Reveal>
        <Reveal delay={50}>
          <h2 className="display max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)]">
            Our latest{" "}
            <span className="italic text-accent">video.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-bg-card shadow-2xl shadow-black/40">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/1zQBDLuVVLo?si=gJaLyfUY0UJFezsi"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
