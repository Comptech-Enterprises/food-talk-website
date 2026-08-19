import Reveal from "./Reveal";

export default function FeaturedVideo() {
  return (
    <section
      aria-label="Watch us"
      className="border-t border-line bg-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
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
          </div>

          <Reveal delay={80}>
            <a
              href="https://www.youtube.com/@FoodTalkIndia?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-red-500/40 px-5 py-2.5 text-sm font-semibold text-red-500 transition-all hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-[0_0_24px_rgba(255,0,0,0.2)]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
              Subscribe
            </a>
          </Reveal>
        </div>

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
