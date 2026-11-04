import React, { useState, useEffect } from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';

interface StickyMobileBarProps {
  onOpenCallback: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenCallback }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero-section');
      if (hero) {
        // Appears strictly only after the customer scrolls past the entire hero section
        const heroBottom = hero.getBoundingClientRect().bottom;
        setIsVisible(heroBottom <= 80);
      } else {
        setIsVisible(window.scrollY > 750);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14161B]/95 backdrop-blur-md border-t border-[#252933] px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-2 py-3 px-2 bg-[#DE744C] active:bg-[#C85E36] text-white font-black text-xs rounded-xl shadow-md min-h-[46px]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <Phone className="w-4 h-4" />
          <span>Call {COMPANY_DETAILS.phone}</span>
        </a>

        <button
          onClick={onOpenCallback}
          className="flex items-center justify-center gap-1.5 py-3 px-2 bg-[#FAF9F6] active:bg-white text-[#14161B] font-black text-xs rounded-xl shadow-md min-h-[46px] cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#DE744C]" />
          <span>Get a quote now</span>
        </button>
      </div>
    </div>
  );
};
