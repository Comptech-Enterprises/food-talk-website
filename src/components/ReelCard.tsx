"use client";

import { useEffect, useRef, useState } from "react";

type ReelCardProps = {
  src: string;
  permalink: string;
  caption: string;
  /** Seconds into the clip to start from. Defaults to the opening frame. */
  posterTime?: number;
};

/**
 * Reel tile: loops silently while on screen and opens the original reel on
 * Instagram when clicked.
 */
export default function ReelCard({
  src,
  permalink,
  caption,
  posterTime = 0.1,
}: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={permalink}
      target="_blank"
      rel="noreferrer"
      aria-label={`${caption} — watch on Instagram`}
      className="group relative block aspect-[9/16] w-full overflow-hidden rounded-3xl border border-line bg-bg-card transition-colors duration-500 hover:border-line-strong"
    >
      <video
        ref={videoRef}
        // the media fragment picks the frame shown before playback starts
        src={`${src}#t=${posterTime}`}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="pointer-events-none h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* keeps the toggle legible over bright frames */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"
      />

      <button
        type="button"
        onClick={(e) => {
          // the tile itself is a link out to Instagram
          e.preventDefault();
          e.stopPropagation();
          setMuted((m) => !m);
        }}
        aria-label={muted ? `Unmute ${caption}` : `Mute ${caption}`}
        className="absolute bottom-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-black/80"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="4 9 8 9 12.5 5 12.5 19 8 15 4 15" fill="currentColor" stroke="none" />
          {muted ? (
            <path d="M16.5 9.5 21 14M21 9.5 16.5 14" />
          ) : (
            <>
              <path d="M16.5 9.5a3.5 3.5 0 0 1 0 5" />
              <path d="M19 7a7 7 0 0 1 0 10" />
            </>
          )}
        </svg>
      </button>
    </a>
  );
}
