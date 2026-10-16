"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { r2 } from "@/lib/media";

const HERO_VIDEOS = [
  { id: 1, src: r2("/hero-1.mp4"), poster: r2("/hero-1-poster.webp") },
  { id: 2, src: r2("/hero-2.mp4"), poster: r2("/hero-2-poster.webp") },
  { id: 3, src: r2("/hero-3.mp4"), poster: r2("/hero-3-poster.webp") },
];

export default function HeroVideo() {
  // Mobile: one video at a time, auto-advances or swipes
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const nextMobileSlide = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  }, []);

  const prevMobileSlide = useCallback(() => {
    setMobileIndex((prev) => (prev - 1 + HERO_VIDEOS.length) % HERO_VIDEOS.length);
  }, []);

  // When mobileIndex changes, play the active video from the start and pause the rest
  useEffect(() => {
    mobileRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === mobileIndex) {
        vid.currentTime = 0;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        const timer = setTimeout(() => {
          vid.pause();
        }, 700);
        return () => clearTimeout(timer);
      }
    });
  }, [mobileIndex]);

  // Auto-advance when the active mobile video is about to end
  const handleMobileTimeUpdate = (idx: number) => {
    if (idx !== mobileIndex) return;
    const vid = mobileRefs.current[idx];
    if (vid && vid.duration) {
      if (vid.currentTime >= vid.duration - 0.25) {
        nextMobileSlide();
      }
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextMobileSlide();
    } else if (diff < -45) {
      prevMobileSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* MOBILE VIEW: single video slider that auto-advances or swipes */}
      <div
        className="block md:hidden relative w-full h-full overflow-hidden bg-black select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {HERO_VIDEOS.map((video, idx) => {
          const isActive = idx === mobileIndex;
          return (
            <div
              key={video.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <video
                ref={(el) => {
                  mobileRefs.current[idx] = el;
                }}
                src={video.src}
                poster={video.poster}
                autoPlay={idx === 0}
                muted
                playsInline
                preload={idx === 0 ? "auto" : "metadata"}
                onEnded={nextMobileSlide}
                onTimeUpdate={() => handleMobileTimeUpdate(idx)}
                className="w-full h-full object-cover object-center"
                aria-hidden
              />

              {/* Text overlay on first slide */}
              {idx === 0 && (
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-6">
                  <h1 className="font-display text-7xl font-black uppercase tracking-[-0.03em] text-white leading-[1] text-center">
                    FOOD
                    <br />
                    TALK
                    <br />
                    <span className="text-gradient">INDIA</span>
                  </h1>
                </div>
              )}
            </div>
          );
        })}

      </div>

      {/* DESKTOP VIEW: 3 full-height vertical columns in a row */}
      <div className="hidden md:grid grid-cols-3 h-full w-full divide-x divide-white/10 bg-black">
        {HERO_VIDEOS.map((video) => (
          <div
            key={video.id}
            className="group relative h-full w-full overflow-hidden bg-black select-none"
          >
            <video
              src={video.src}
              poster={video.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              aria-hidden
            />

            {/* Subtle hover wash */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300 pointer-events-none" />

          </div>
        ))}

      </div>
    </div>
  );
}
