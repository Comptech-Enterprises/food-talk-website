"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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
  // Desktop state: which video is unmuted (null = all muted)
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null);
  const desktopRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Mobile state: slider active index & sound toggle
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileMuted, setMobileMuted] = useState(true);
  const mobileRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  // Desktop audio toggle
  const toggleDesktopSound = (idx: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveAudioIndex((current) => {
      const next = current === idx ? null : idx;
      desktopRefs.current.forEach((v, i) => {
        if (!v) return;
        v.muted = next !== i;
      });
      return next;
    });
  };

  // Mobile slider navigation
  const nextMobileSlide = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  }, []);

  const prevMobileSlide = useCallback(() => {
    setMobileIndex((prev) => (prev - 1 + HERO_VIDEOS.length) % HERO_VIDEOS.length);
  }, []);

  // When mobileIndex changes, play active video and reset
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

  // Mobile video time progress to auto-advance on complete
  const handleMobileTimeUpdate = (idx: number) => {
    if (idx !== mobileIndex) return;
    const vid = mobileRefs.current[idx];
    if (vid && vid.duration) {
      if (vid.currentTime >= vid.duration - 0.25) {
        nextMobileSlide();
      }
    }
  };

  // Mobile touch swipe gestures
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

  // Toggle mobile audio
  const toggleMobileSound = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setMobileMuted((prev) => {
      const next = !prev;
      const vid = mobileRefs.current[mobileIndex];
      if (vid) vid.muted = next;
      return next;
    });
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* ============================================================== */}
      {/* MOBILE VIEW: Single video slider that auto-advances or swipes */}
      {/* ============================================================== */}
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
                muted={mobileMuted}
                playsInline
                preload={idx === 0 ? "auto" : "metadata"}
                onEnded={nextMobileSlide}
                onTimeUpdate={() => handleMobileTimeUpdate(idx)}
                className="w-full h-full object-cover object-center"
                aria-hidden
              />
            </div>
          );
        })}

        {/* Mobile bottom bar: slide indicators and sound button */}
        <div className="absolute bottom-6 left-4 right-4 z-30 flex items-center justify-between gap-3 pointer-events-auto">
          {/* Segmented slide indicators */}
          <div className="flex items-center gap-1.5">
            {HERO_VIDEOS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMobileIndex(i)}
                aria-label={`Go to video ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === mobileIndex ? "w-6 bg-accent" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Sound toggle button */}
          <button
            type="button"
            onClick={toggleMobileSound}
            aria-label={mobileMuted ? "Unmute audio" : "Mute audio"}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg shrink-0 ${
              !mobileMuted
                ? "bg-accent text-bg-dark shadow-[0_0_14px_rgba(229,217,250,0.8)] scale-105"
                : "bg-black/60 text-white/85 hover:text-white border border-white/20"
            }`}
          >
            {!mobileMuted ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP VIEW: 3 Full-Height Vertical Columns Divided in a Row  */}
      {/* ============================================================== */}
      <div className="hidden md:grid grid-cols-3 h-full w-full divide-x divide-white/10 bg-black">
        {HERO_VIDEOS.map((video, idx) => {
          const isUnmuted = activeAudioIndex === idx;
          return (
            <div
              key={video.id}
              onClick={() => toggleDesktopSound(idx)}
              title={isUnmuted ? "Click to mute" : "Click for sound"}
              className="group relative h-full w-full overflow-hidden bg-black cursor-pointer select-none"
            >
              <video
                ref={(el) => {
                  desktopRefs.current[idx] = el;
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

              {/* Bottom Sound Control */}
              <div className="absolute bottom-0 left-0 right-0 z-30 pt-10 pb-5 sm:pb-7 px-4 sm:px-6 bg-gradient-to-t from-black/60 via-black/15 to-transparent flex items-center justify-end pointer-events-auto">
                <button
                  type="button"
                  onClick={(e) => toggleDesktopSound(idx, e)}
                  aria-label={isUnmuted ? "Mute audio" : "Unmute audio"}
                  className={`p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg shrink-0 ${
                    isUnmuted
                      ? "bg-accent text-bg-dark shadow-[0_0_14px_rgba(229,217,250,0.8)] scale-110"
                      : "bg-black/60 text-white/80 hover:text-white hover:bg-black/90 border border-white/15 opacity-70 group-hover:opacity-100"
                  }`}
                >
                  {isUnmuted ? (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
