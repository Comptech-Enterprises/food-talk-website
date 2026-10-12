"use client";

import { useRef, useState } from "react";

const HERO_VIDEOS = [
  {
    id: 1,
    src: "/hero-1.mp4",
    poster: "/hero-1-poster.jpg",
    title: "SERIOUS EATERS CLUB",
  },
  {
    id: 2,
    src: "/hero-2.mp4",
    poster: "/hero-2-poster.jpg",
    title: "CURATED EXPERIENCES",
  },
  {
    id: 3,
    src: "/hero-3.mp4",
    poster: "/hero-3-poster.jpg",
    title: "FOOD TALK ORIGINALS",
  },
];

export default function HeroVideo() {
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggleSound = (idx: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveAudioIndex((current) => {
      const next = current === idx ? null : idx;
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        v.muted = next !== i;
      });
      return next;
    });
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* 3 Full-Height Vertical Columns Divided Across the Hero */}
      <div className="grid grid-cols-3 h-full w-full divide-x divide-white/10 bg-black">
        {HERO_VIDEOS.map((video, idx) => {
          const isUnmuted = activeAudioIndex === idx;
          return (
            <div
              key={video.id}
              onClick={() => toggleSound(idx)}
              title={isUnmuted ? "Click to mute" : "Click for sound"}
              className="group relative h-full w-full overflow-hidden bg-black cursor-pointer select-none"
            >
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                src={video.src}
                poster={video.poster}
                autoPlay
                muted={!isUnmuted}
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                aria-hidden
              />

              {/* Subtle hover wash */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300 pointer-events-none" />

              {/* Bottom Editorial Tag & Sound Control */}
              <div className="absolute bottom-5 sm:bottom-7 left-3 sm:left-6 right-3 sm:right-6 z-30 flex items-center justify-between gap-2 pointer-events-auto">
                <span className="font-display text-[9px] sm:text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] truncate">
                  {video.title}
                </span>

                <button
                  type="button"
                  onClick={(e) => toggleSound(idx, e)}
                  aria-label={isUnmuted ? "Mute audio" : "Unmute audio"}
                  className={`p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg shrink-0 ${
                    isUnmuted
                      ? "bg-accent text-bg-dark shadow-[0_0_14px_rgba(229,217,250,0.8)] scale-110"
                      : "bg-black/60 text-white/80 hover:text-white hover:bg-black/90 border border-white/15 opacity-70 group-hover:opacity-100"
                  }`}
                >
                  {isUnmuted ? (
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
