"use client";

import { useEffect, useRef } from "react";

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
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="pointer-events-none h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </a>
  );
}
