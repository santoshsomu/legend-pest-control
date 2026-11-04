import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 4, src: '/gallery/4.jpeg' },
  { id: 5, src: '/gallery/5.jpeg' },
  { id: 6, src: '/gallery/6.jpeg' },
  { id: 7, src: '/gallery/7.jpeg' },
  { id: 8, src: '/gallery/8.jpeg' },
  { id: 9, src: '/gallery/9.jpeg' },
  { id: 10, src: '/gallery/10.jpeg' },
  { id: 11, src: '/gallery/11.jpeg' },
  { id: 12, src: '/gallery/12.jpeg' },
  { id: 13, src: '/gallery/13.jpeg' },
  { id: 14, src: '/gallery/14.jpeg' },
  { id: 15, src: '/gallery/15.jpeg' },
  { id: 16, src: '/gallery/16.jpeg' },
];

// Tripled to guarantee seamless infinite loop in both directions
const INFINITE_ITEMS = [
  ...GALLERY_ITEMS.map((item, idx) => ({ ...item, uniqueKey: `set1-${item.id}-${idx}` })),
  ...GALLERY_ITEMS.map((item, idx) => ({ ...item, uniqueKey: `set2-${item.id}-${idx}` })),
  ...GALLERY_ITEMS.map((item, idx) => ({ ...item, uniqueKey: `set3-${item.id}-${idx}` })),
];

export const GalleryCarousel: React.FC = () => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTimeRef = useRef(performance.now());
  const exactScrollLeftRef = useRef(0);

  // Mouse drag support
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Touch drag support
  const isTouchDraggingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartScrollLeftRef = useRef(0);

  // Pause and resume helpers
  const pauseAutoScroll = useCallback(() => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);

  const resumeAutoScroll = useCallback((delay = 600) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      lastTimeRef.current = performance.now();
      isPausedRef.current = false;
    }, delay);
  }, []);

  // Continuous auto-scroll loop for mobile, tablet, and desktop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Center scroll at middle set on mount
    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft === 0 && singleSetWidth > 0) {
      el.scrollLeft = singleSetWidth;
    }
    exactScrollLeftRef.current = el.scrollLeft;

    let animationFrameId: number;
    lastTimeRef.current = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = Math.min(timestamp - lastTimeRef.current, 64);
      lastTimeRef.current = timestamp;

      if (!isPausedRef.current && el) {
        // Engaging, noticeable continuous scroll: ~60 pixels per second
        const movePixels = (60 * elapsed) / 1000;
        exactScrollLeftRef.current += movePixels;

        // Infinite wrap bounds check
        const setWidth = el.scrollWidth / 3;
        if (setWidth > 0) {
          if (exactScrollLeftRef.current >= setWidth * 2) {
            exactScrollLeftRef.current -= setWidth;
          } else if (exactScrollLeftRef.current <= 5) {
            exactScrollLeftRef.current += setWidth;
          }
        }

        el.scrollLeft = exactScrollLeftRef.current;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Update active dot index on scroll
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(el.scrollLeft - exactScrollLeftRef.current) > 3) {
      exactScrollLeftRef.current = el.scrollLeft;
    }
    const card = el.querySelector<HTMLElement>('[data-gallery-card]');
    const cardWidth = card ? card.offsetWidth + 20 : 340;
    const relativeScroll = el.scrollLeft % (cardWidth * GALLERY_ITEMS.length);
    const newIdx = Math.floor(relativeScroll / cardWidth) % GALLERY_ITEMS.length;
    setActiveIndex(newIdx);
  };

  const handlePrev = () => {
    pauseAutoScroll();
    const el = scrollRef.current;
    if (el) {
      const card = el.querySelector<HTMLElement>('[data-gallery-card]');
      const cardWidth = card ? card.offsetWidth + 20 : 340;
      el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
    resumeAutoScroll(1200);
  };

  const handleNext = () => {
    pauseAutoScroll();
    const el = scrollRef.current;
    if (el) {
      const card = el.querySelector<HTMLElement>('[data-gallery-card]');
      const cardWidth = card ? card.offsetWidth + 20 : 340;
      el.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
    resumeAutoScroll(1200);
  };

  // Touch handlers for mobile / tablet swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    pauseAutoScroll();
    const el = scrollRef.current;
    if (!el) return;
    isTouchDraggingRef.current = true;
    hasMovedRef.current = false;
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartScrollLeftRef.current = el.scrollLeft;
    exactScrollLeftRef.current = el.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isTouchDraggingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartXRef.current;

    if (Math.abs(deltaX) > 6) {
      hasMovedRef.current = true;
    }

    let newScrollLeft = touchStartScrollLeftRef.current - deltaX;
    const setWidth = el.scrollWidth / 3;
    if (setWidth > 0) {
      if (newScrollLeft >= setWidth * 2) {
        newScrollLeft -= setWidth;
        touchStartScrollLeftRef.current -= setWidth;
      } else if (newScrollLeft <= 5) {
        newScrollLeft += setWidth;
        touchStartScrollLeftRef.current += setWidth;
      }
    }

    el.scrollLeft = newScrollLeft;
    exactScrollLeftRef.current = newScrollLeft;
  };

  const handleTouchEnd = () => {
    isTouchDraggingRef.current = false;
    resumeAutoScroll(600);
  };

  // Mouse drag support for desktop/laptops
  const handleMouseDown = (e: React.MouseEvent) => {
    pauseAutoScroll();
    const el = scrollRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 6) {
      hasMovedRef.current = true;
    }
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    resumeAutoScroll(600);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Header with Mobile/Desktop Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
          <div className="text-center md:text-left space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FDF3EE] text-[#DE744C] border border-[#F5D5C6] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#DE744C]" />
              <span>Proven Melbourne Field Treatments</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Need to address these concerns without stressing?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Continuously auto-scrolling field proofs. Touch swipe, drag or use arrows to inspect authentic results.
            </p>
          </div>

          {/* Navigation Controls: Arrows */}
          <div className="flex items-center justify-center md:justify-end gap-2.5">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#FAF9F6] border border-slate-200 text-slate-800 flex items-center justify-center shadow-xs cursor-pointer hover:bg-[#FDF3EE] hover:text-[#DE744C] hover:border-[#DE744C]/40 transition active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#FAF9F6] border border-slate-200 text-slate-800 flex items-center justify-center shadow-xs cursor-pointer hover:bg-[#FDF3EE] hover:text-[#DE744C] hover:border-[#DE744C]/40 transition active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Fluid Touch & Drag Auto-Scroll Track */}
        <div 
          className="relative"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={() => resumeAutoScroll(400)}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y',
            }}
            className="flex gap-4 sm:gap-6 overflow-x-auto py-10 sm:py-14 px-4 no-scrollbar overscroll-x-contain cursor-grab active:cursor-grabbing select-none items-center"
          >
            {INFINITE_ITEMS.map((item) => {
              const isHovered = hoveredKey === item.uniqueKey;
              const hasAnyHover = hoveredKey !== null;

              return (
                <div
                  key={item.uniqueKey}
                  data-gallery-card
                  onMouseEnter={() => {
                    setHoveredKey(item.uniqueKey);
                    pauseAutoScroll();
                  }}
                  onMouseLeave={() => {
                    setHoveredKey(null);
                    resumeAutoScroll(1000);
                  }}
                  onClick={() => {
                    if (!hasMovedRef.current) {
                      setLightboxImg(item);
                    }
                  }}
                  className={`group relative shrink-0 w-[74vw] sm:w-[320px] md:w-[350px] aspect-[3/4] rounded-3xl overflow-hidden bg-slate-900 border transition-all duration-300 ease-out cursor-pointer select-none origin-center ${
                    isHovered
                      ? 'scale-[1.12] sm:scale-[1.15] -translate-y-3 z-30 border-2 border-[#DE744C] ring-4 ring-[#DE744C]/35 shadow-[0_25px_60px_-12px_rgba(222,116,76,0.5)] opacity-100'
                      : hasAnyHover
                        ? 'scale-[0.93] opacity-40 blur-[0.6px] brightness-75 z-10 border-slate-200/60 shadow-sm'
                        : 'scale-100 opacity-100 z-10 border-slate-200/90 shadow-md hover:border-slate-300'
                  }`}
                >
                  <img
                    src={item.src}
                    alt="Melbourne pest treatment field photo"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out pointer-events-none select-none ${
                      isHovered ? 'scale-110 brightness-105' : 'group-hover:scale-105'
                    }`}
                    loading="lazy"
                    draggable={false}
                  />

                  {/* Active Highlight Banner on Hovered Card */}
                  <div
                    className={`absolute top-4 left-4 z-20 transition-all duration-300 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider border border-white/20 shadow-lg">
                      <Sparkles className="w-3 h-3 text-[#DE744C]" />
                      <span>Verified Result</span>
                    </span>
                  </div>

                  {/* Zoom Action Icon Pill */}
                  <div
                    className={`absolute bottom-4 right-4 z-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                      isHovered
                        ? 'w-12 h-12 bg-[#DE744C] text-white scale-110 shadow-[#DE744C]/50'
                        : 'w-10 h-10 bg-white/95 backdrop-blur-md text-slate-900 group-hover:scale-105'
                    }`}
                  >
                    <ZoomIn className={`w-5 h-5 ${isHovered ? 'text-white' : 'text-[#DE744C]'}`} />
                  </div>

                  {/* Subtle Gradient Rim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Dots Indicator on Mobile */}
          <div className="flex md:hidden items-center justify-center gap-1.5 mt-4">
            {GALLERY_ITEMS.map((_, i) => (
              <button
                key={`gallery-dot-${i}`}
                onClick={() => {
                  pauseAutoScroll();
                  const el = scrollRef.current;
                  if (el) {
                    const card = el.querySelector<HTMLElement>('[data-gallery-card]');
                    const cardWidth = card ? card.offsetWidth + 20 : 340;
                    const setWidth = el.scrollWidth / 3;
                    el.scrollTo({ left: setWidth + i * cardWidth, behavior: 'smooth' });
                  }
                  resumeAutoScroll(3000);
                }}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i
                    ? 'w-6 bg-[#DE744C]'
                    : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal on Card Click */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition cursor-pointer"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImg.src}
              alt="Melbourne pest treatment full photo"
              className="w-auto h-auto max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
