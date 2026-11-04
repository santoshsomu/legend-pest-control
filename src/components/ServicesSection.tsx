import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ShieldAlert, 
  Bug, 
  Rat, 
  Flame, 
  Search, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';

interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  popular?: boolean;
  pillName?: string;
}

const MINIMAL_SERVICES: ServiceItem[] = [
  {
    id: 'bee-wasp-removal',
    name: 'Bees & Wasp Removal',
    pillName: 'Bees & Wasps',
    shortDesc: 'Safe treatment & removal of active bee swarms, hives and wasp nests, inside or out.',
    icon: Flame,
    popular: true,
  },
  {
    id: 'general-pest-control',
    name: 'General Pest Control',
    pillName: 'General Pest',
    shortDesc: 'One treatment covering the pests most Melbourne homes deal with, inside and out.',
    icon: ShieldAlert,
    popular: true,
  },
  {
    id: 'cockroach-control',
    name: 'Cockroach Control',
    pillName: 'Cockroach',
    shortDesc: 'Targeted treatment that deals with the nest, not just the ones you can see.',
    icon: Bug,
  },
  {
    id: 'ant-control',
    name: 'Ant Control',
    pillName: 'Ant',
    shortDesc: 'We treat the colony, so the trail does not return the following week.',
    icon: Sparkles,
  },
  {
    id: 'rat-mouse-control',
    name: 'Rat and Mouse Control',
    pillName: 'Rats & Mice',
    shortDesc: 'Secure baiting and trapping, plus the entry points that let them in.',
    icon: Rat,
    popular: true,
  },
  {
    id: 'dead-animal-removal',
    name: 'Dead Animal Removal',
    pillName: 'Dead Animal',
    shortDesc: 'Emergency sanitary extraction of deceased possums & rodents from roof cavities with hospital-grade deodorisation.',
    icon: Sparkles,
    popular: true,
  },
  {
    id: 'termite-inspections',
    name: 'Termite Inspections',
    pillName: 'Termite Inspection',
    shortDesc: 'A full inspection with a written report on what we found and what to do next.',
    icon: Search,
  },
  {
    id: 'termite-protection',
    name: 'Termite Protection',
    pillName: 'Termite Protection',
    shortDesc: 'Colony elimination first, then a management system that protects the building.',
    icon: ShieldCheck,
  },
  {
    id: 'spider-control',
    name: 'Spider Control',
    pillName: 'Spiders',
    shortDesc: 'Treatment of the surfaces spiders cross and the corners they nest in.',
    icon: Bug,
  },
];

// Tripled list for seamless infinite auto-scroll across desktop, laptop, tablet, and mobile
const INFINITE_SERVICES = [
  ...MINIMAL_SERVICES.map((s, idx) => ({ ...s, uniqueKey: `set1-${s.id}-${idx}` })),
  ...MINIMAL_SERVICES.map((s, idx) => ({ ...s, uniqueKey: `set2-${s.id}-${idx}` })),
  ...MINIMAL_SERVICES.map((s, idx) => ({ ...s, uniqueKey: `set3-${s.id}-${idx}` })),
];

interface ServicesSectionProps {
  onOpenCallback: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCallback }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  // Auto-scroll controls for reverse continuous scroll (moving right, revealing from left)
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTimeRef = useRef(performance.now());
  const exactScrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isTouchDraggingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchStartScrollLeftRef = useRef(0);

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

  // Continuous auto-scroll loop across Desktop, Laptop, Tablet, and Mobile
  // DIRECTION: Moving to the right, revealing cards from the left (scrollLeft decreases)
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    // Ensure starting scroll position is centered in set 2 so reverse scroll has room
    const setWidth = el.scrollWidth / 3;
    if (setWidth > 0 && el.scrollLeft < setWidth * 0.5) {
      el.scrollLeft = setWidth;
      exactScrollLeftRef.current = setWidth;
    } else {
      exactScrollLeftRef.current = el.scrollLeft;
    }

    let animationFrameId: number;
    lastTimeRef.current = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = Math.min(timestamp - lastTimeRef.current, 64);
      lastTimeRef.current = timestamp;

      if (!isPausedRef.current && el) {
        const setWidth = el.scrollWidth / 3;
        if (setWidth > 0) {
          // Wrap check BEFORE subtracting to guarantee exactScrollLeftRef stays well above 0
          if (exactScrollLeftRef.current <= 15) {
            exactScrollLeftRef.current += setWidth;
          } else if (exactScrollLeftRef.current >= setWidth * 2) {
            exactScrollLeftRef.current -= setWidth;
          }

          // REVERSE DIRECTION: Subtracting movePixels moves view left => cards move RIGHT, revealing from LEFT
          const movePixels = (50 * elapsed) / 1000;
          exactScrollLeftRef.current -= movePixels;
          el.scrollLeft = exactScrollLeftRef.current;
        }
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

  // Track active index based on scroll position
  const handleCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    if (Math.abs(el.scrollLeft - exactScrollLeftRef.current) > 3) {
      exactScrollLeftRef.current = el.scrollLeft;
    }
    const card = el.querySelector<HTMLElement>('[data-service-card]');
    const cardWidth = card ? card.offsetWidth + 24 : 380;
    const relativeScroll = el.scrollLeft % (cardWidth * MINIMAL_SERVICES.length);
    const newIdx = Math.floor(relativeScroll / cardWidth) % MINIMAL_SERVICES.length;
    setActiveCardIndex(newIdx >= 0 ? newIdx : 0);
  };

  // Jump directly to a card using category pills
  const scrollToCard = (index: number) => {
    pauseAutoScroll();
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-service-card]');
    const cardWidth = card ? card.offsetWidth + 24 : 380;
    const setWidth = el.scrollWidth / 3;
    el.scrollTo({ left: setWidth + index * cardWidth, behavior: 'smooth' });
    setActiveCardIndex(index);
    resumeAutoScroll(1200);
  };

  const handlePrev = () => {
    pauseAutoScroll();
    const el = carouselRef.current;
    if (el) {
      const card = el.querySelector<HTMLElement>('[data-service-card]');
      const cardWidth = card ? card.offsetWidth + 24 : 380;
      el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
    resumeAutoScroll(1200);
  };

  const handleNext = () => {
    pauseAutoScroll();
    const el = carouselRef.current;
    if (el) {
      const card = el.querySelector<HTMLElement>('[data-service-card]');
      const cardWidth = card ? card.offsetWidth + 24 : 380;
      el.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
    resumeAutoScroll(1200);
  };

  // Touch handlers for mobile / tablet swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    pauseAutoScroll();
    const el = carouselRef.current;
    if (!el) return;
    isTouchDraggingRef.current = true;
    hasMovedRef.current = false;
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    touchStartScrollLeftRef.current = el.scrollLeft;
    exactScrollLeftRef.current = el.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isTouchDraggingRef.current) return;
    const el = carouselRef.current;
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
    const el = carouselRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = carouselRef.current;
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
    <section 
      id="services" 
      className="py-16 sm:py-24 bg-[#121418] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Warm Ambient Glow behind services */}
      <div 
        className="absolute top-1/4 -left-40 w-96 h-96 bg-[#DE744C]/15 rounded-full blur-[140px] pointer-events-none"
      />
      <div 
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prominent Header with Desktop & Mobile Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6 sm:mb-8">
          <div className="text-center md:text-left space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DE744C]/15 text-[#DE744C] border border-[#DE744C]/30 text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#DE744C]" />
              <span>Targeted Eradication Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Comprehensive Pest Control Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Revealing from left, moving to right. Hover or tap to zoom and inspect any service. All quotes include your $50 coupon.
            </p>
          </div>

          {/* Navigation Controls: Direction Arrows */}
          <div className="flex items-center justify-center md:justify-end gap-2.5">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#1A1D24] border border-white/15 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#DE744C] hover:border-[#DE744C] transition active:scale-95"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#1A1D24] border border-white/15 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#DE744C] hover:border-[#DE744C] transition active:scale-95"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Category Jump Pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar px-1">
          {MINIMAL_SERVICES.map((service, idx) => (
            <button
              key={`pill-${service.id}`}
              onClick={() => scrollToCard(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                activeCardIndex === idx
                  ? 'bg-[#DE744C] text-white shadow-md shadow-[#DE744C]/30'
                  : 'bg-[#1C2028] text-slate-300 border border-white/10 hover:border-[#DE744C]/40 hover:text-white'
              }`}
            >
              {service.pillName || service.name}
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* UNIFIED CAROUSEL TRACK: Moving to right, revealing from left              */}
        {/* Same zoom on hover, scroll drag, touch swipe across Desktop, Laptop & Mobile */}
        {/* ========================================================================= */}
        <div 
          className="relative"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={() => resumeAutoScroll(400)}
        >
          <div
            ref={carouselRef}
            data-services-track
            onScroll={handleCarouselScroll}
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
            className="flex gap-5 sm:gap-6 overflow-x-auto py-10 sm:py-14 px-4 no-scrollbar overscroll-x-contain cursor-grab active:cursor-grabbing select-none items-center"
          >
            {INFINITE_SERVICES.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredKey === service.uniqueKey;
              const hasAnyHover = hoveredKey !== null;

              return (
                <div
                  key={service.uniqueKey}
                  data-service-card
                  onMouseEnter={() => {
                    setHoveredKey(service.uniqueKey);
                    pauseAutoScroll();
                  }}
                  onMouseLeave={() => {
                    setHoveredKey(null);
                    resumeAutoScroll(800);
                  }}
                  onClick={() => {
                    if (!hasMovedRef.current) {
                      onOpenCallback(service.name);
                    }
                  }}
                  className={`group relative shrink-0 w-[84vw] sm:w-[340px] md:w-[360px] lg:w-[380px] rounded-3xl bg-white text-slate-900 border transition-all duration-300 ease-out cursor-pointer select-none origin-center p-6 sm:p-7 flex flex-col justify-between min-h-[380px] sm:min-h-[400px] ${
                    isHovered
                      ? 'scale-[1.06] sm:scale-[1.09] -translate-y-3 z-30 border-2 border-[#DE744C] ring-4 ring-[#DE744C]/35 shadow-[0_25px_60px_-12px_rgba(222,116,76,0.45)] opacity-100'
                      : hasAnyHover
                        ? 'scale-[0.94] opacity-50 blur-[0.4px] brightness-90 z-10 border-slate-200/60 shadow-sm'
                        : 'scale-100 opacity-100 z-10 border-slate-200/90 shadow-md hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Top Header Row: Icon Squircle + Popular Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                        isHovered 
                          ? 'bg-[#DE744C] text-white border-[#DE744C] scale-105' 
                          : 'bg-[#DE744C]/10 text-[#DE744C] border-[#DE744C]/20 group-hover:scale-105 group-hover:bg-[#DE744C] group-hover:text-white'
                      }`}>
                        <Icon className="w-6 h-6 transition-colors" />
                      </div>

                      {service.popular ? (
                        <span className="px-3 py-1 rounded-full bg-[#DE744C]/10 text-[#DE744C] text-[10px] font-black uppercase tracking-wider border border-[#DE744C]/25 shadow-xs">
                          Popular
                        </span>
                      ) : (
                        <div className="h-6" aria-hidden="true" />
                      )}
                    </div>

                    {/* Service Name */}
                    <div className="min-h-[3.25rem] flex items-center mb-2">
                      <h3 className={`text-xl sm:text-2xl font-black tracking-tight leading-snug transition-colors line-clamp-2 ${
                        isHovered ? 'text-[#DE744C]' : 'text-slate-900 group-hover:text-[#DE744C]'
                      }`}>
                        {service.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="min-h-[4rem] mb-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Voucher Callout */}
                    <div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-md inline-block shadow-xs">
                        Quotes include $50 coupon
                      </span>
                    </div>
                  </div>

                  {/* Footer CTA & Phone */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-[#DE744C] inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                      <span>Get a quote now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-600">
                      {COMPANY_DETAILS.phone}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Dot Indicators */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {MINIMAL_SERVICES.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => scrollToCard(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeCardIndex === i
                    ? 'w-7 bg-[#DE744C]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to service card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Emergency Priority Callout Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#1A1D24] via-[#14161C] to-[#1A1D24] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-[#DE744C]/40">
          <div className="absolute inset-0 bg-radial from-[#DE744C]/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-block text-xs font-black uppercase tracking-wider text-[#DE744C] bg-[#DE744C]/15 border border-[#DE744C]/30 px-3 py-1 rounded-full">
                ⚡ Urgent Infestation or Dead Animal?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Have Bees, Wasps, Rats, Termites or a Foul Ceiling Odour Right Now?
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                We provide prompt same-day service across Greater Melbourne where available. Call us to book your inspection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#DE744C] hover:bg-[#C85E36] text-white font-black text-sm transition shadow-lg shadow-[#DE744C]/30"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => onOpenCallback('Emergency Same-Day Service')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1E222A] hover:bg-[#282E39] text-white font-bold text-sm border border-[#303746] transition cursor-pointer"
              >
                <span>Get a quote now • {COMPANY_DETAILS.phone}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
