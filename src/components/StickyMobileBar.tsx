import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';

interface StickyMobileBarProps {
  onOpenCallback: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenCallback }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-2 py-3 px-2 bg-blue-600 active:bg-blue-700 text-white font-black text-xs rounded-xl shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Call 1800 623 252</span>
        </a>

        <button
          onClick={onOpenCallback}
          className="flex items-center justify-center gap-1.5 py-3 px-2 bg-amber-400 active:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>$50 Off Voucher</span>
        </button>
      </div>
    </div>
  );
};
