"use client";

import { useRef, useState } from "react";

const HERO_VIDEOS = [
  {
    id: 1,
    src: "/hero-1.mp4",
    poster: "/hero-1-poster.jpg",
    title: "Serious Eater Club",
  },
  {
    id: 2,
    src: "/hero-2.mp4",
    poster: "/hero-2-poster.jpg",
    title: "Culinary Experiences",
  },
  {
    id: 3,
    src: "/hero-3.mp4",
    poster: "/hero-3-poster.jpg",
    title: "Food Talk Originals",
  },
];

export default function HeroVideo() {
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggleSound = (idx: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveAudioIndex((current) => {
      const next = current === idx ? null : idx;
      // Ensure only selected video plays audio, others remain muted
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        if (next === i) {
          v.muted = false;
        } else {
          v.muted = true;
        }
      });
      return next;
    });
  };

  return (
    <div className="w-full max-w-[1360px] mx-auto">
      {/* 3 videos in a row side-by-side, all playing simultaneously */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3.5 md:gap-5 lg:gap-6 items-center justify-center">
        {HERO_VIDEOS.map((video, idx) => {
          const isUnmuted = activeAudioIndex === idx;
          return (
            <div
              key={video.id}
              onClick={() => toggleSound(idx)}
              title={isUnmuted ? "Click to mute" : "Click for sound"}
              className="group relative aspect-[9/16] w-full max-h-[64vh] sm:max-h-[68vh] md:max-h-[72vh] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85)] border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer select-none"
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
                className="w-full h-full object-cover"
                aria-hidden
              />

              {/* Sound indicator / toggle button */}
              <button
                type="button"
                onClick={(e) => toggleSound(idx, e)}
                aria-label={isUnmuted ? "Mute audio" : "Unmute audio"}
                className={`absolute bottom-2 right-2 sm:bottom-3.5 sm:right-3.5 z-20 p-1.5 sm:p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
                  isUnmuted
                    ? "bg-accent text-bg-dark shadow-[0_0_16px_rgba(229,217,250,0.7)] scale-105"
                    : "bg-black/60 text-white/80 hover:text-white hover:bg-black/85 border border-white/15 opacity-70 group-hover:opacity-100"
                }`}
              >
                {isUnmuted ? (
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
