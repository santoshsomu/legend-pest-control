import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';

interface StickyMobileBarProps {
  onOpenCallback: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenCallback }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-emerald-900/60 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-2 py-3 px-2 bg-emerald-700 active:bg-emerald-800 text-white font-black text-xs rounded-xl shadow-md min-h-[46px]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <Phone className="w-4 h-4" />
          <span>Call 0416 388 777</span>
        </a>

        <button
          onClick={onOpenCallback}
          className="flex items-center justify-center gap-1.5 py-3 px-2 bg-amber-400 active:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md min-h-[46px] cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>Free Quote &amp; Check</span>
        </button>
      </div>
    </div>
  );
};
