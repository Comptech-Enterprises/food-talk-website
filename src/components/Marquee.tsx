import Image from "next/image";
import { marqueeImages } from "@/lib/content";

/** Auto-scrolling ribbon of circular food photos with a centred CTA. */
export default function Marquee() {
  const loop = [...marqueeImages, ...marqueeImages];

  return (
    <section id="advertise" className="relative overflow-hidden bg-bg py-4">
      <div className="marquee relative flex select-none overflow-hidden py-6">
        <div className="marquee-track flex shrink-0 gap-6 pr-6">
          {loop.map((src, i) => (
            <div
              key={i}
              className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-line sm:h-40 sm:w-40"
            >
              <Image
                src={src}
                alt=""
                aria-hidden
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Centred CTA floating over the ribbon */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <a
            href="mailto:hello@foodtalk.in?subject=Advertise%20With%20Us"
            className="pointer-events-auto rounded-full border border-line-strong bg-bg/80 px-8 py-4 text-lg font-bold text-fg backdrop-blur transition-colors hover:border-accent hover:bg-accent hover:text-[color:var(--accent-ink)] sm:text-2xl"
            style={{ borderColor: "var(--line-strong)" }}
          >
            Advertise With Us
          </a>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
      </div>
    </section>
  );
}
