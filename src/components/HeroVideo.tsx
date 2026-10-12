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
      {/* Video Card Container: Framed proportionally (9:16), never forced full screen, nothing cropped */}
      <div
        onClick={goToNext}
        title="Click to advance video"
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
    </div>
  );
}
