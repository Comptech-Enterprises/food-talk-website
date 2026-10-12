"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const HERO_SLIDES = [
  {
    id: 1,
    src: "/hero-1.mp4",
    poster: "/hero-1-poster.jpg",
  },
  {
    id: 2,
    src: "/hero-2.mp4",
    poster: "/hero-2-poster.jpg",
  },
  {
    id: 3,
    src: "/hero-3.mp4",
    poster: "/hero-3-poster.jpg",
  },
];

export default function HeroVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Advance to next video
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // Go to previous video
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Manage playback on slide change
  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === currentIndex) {
        vid.currentTime = 0;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        const timer = setTimeout(() => {
          vid.pause();
        }, 800);
        return () => clearTimeout(timer);
      }
    });
  }, [currentIndex]);

  // Auto-advance when video finishes
  const handleTimeUpdate = (idx: number) => {
    if (idx !== currentIndex) return;
    const vid = videoRefs.current[idx];
    if (vid && vid.duration) {
      if (vid.currentTime >= vid.duration - 0.25) {
        goToNext();
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex items-center justify-center">
        {/* Previous button (outside the video frame on desktop so nothing is hidden) */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous video"
          className="hidden md:flex absolute -left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-accent text-white hover:text-accent items-center justify-center transition-all opacity-75 hover:opacity-100 cursor-pointer shadow-lg active:scale-95"
        >
          <svg className="w-5 h-5 -translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Video Card Container: Framed proportionally (9:16), never forced full screen, nothing cropped */}
        <div
          onClick={goToNext}
          title="Click to next video"
          className="relative w-auto h-[68vh] sm:h-[74vh] md:h-[78vh] max-h-[720px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/15 cursor-pointer select-none group"
        >
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-800 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={slide.src}
                  poster={slide.poster}
                  autoPlay={idx === 0}
                  muted
                  playsInline
                  preload={idx === 0 ? "auto" : "metadata"}
                  onEnded={goToNext}
                  onTimeUpdate={() => handleTimeUpdate(idx)}
                  className="w-full h-full object-contain bg-black"
                  aria-hidden
                />
              </div>
            );
          })}
        </div>

        {/* Next button (outside the video frame on desktop so nothing is hidden) */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next video"
          className="hidden md:flex absolute -right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-accent text-white hover:text-accent items-center justify-center transition-all opacity-75 hover:opacity-100 cursor-pointer shadow-lg active:scale-95"
        >
          <svg className="w-5 h-5 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile-only subtle navigation buttons below video (so nothing covers the video) */}
      <div className="flex md:hidden items-center justify-center gap-6 mt-4">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous video"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
        >
          <svg className="w-4 h-4 -translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next video"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
        >
          <svg className="w-4 h-4 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
