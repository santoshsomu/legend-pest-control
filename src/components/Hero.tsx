import React, { useState, useEffect } from 'react';
import { 
  Clock,
  ShieldCheck,
  AlertTriangle,
  BadgePercent
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';
import { QuoteRequestForm } from './QuoteRequestForm';

interface HeroProps {
  onOpenCallback?: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCallback }) => {
  const [selectedPest, setSelectedPest] = useState<string>('General Pest Treatment');

  // Check URL query parameters for dynamic Google Ads search term matching (?pest=wasp or ?search=wasp or ?utm_term=wasp)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const query = params.get('pest') || params.get('search') || params.get('utm_term') || '';
      if (query) {
        const lower = query.toLowerCase();
        if (lower.includes('wasp') || lower.includes('bee')) {
          setSelectedPest('Bee & Wasp Nest Removal');
        } else if (lower.includes('dead') || lower.includes('possum') || lower.includes('smell') || lower.includes('carcass')) {
          setSelectedPest('Dead Animal & Carcass Removal');
        } else if (lower.includes('spider') || lower.includes('ant')) {
          setSelectedPest('General Pest Treatment');
        } else if (lower.includes('roach') || lower.includes('cockroach')) {
          setSelectedPest('Cockroach Eradication');
        }
      }
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  return (
    <section 
      id="hero-section" 
      className="relative overflow-hidden bg-gradient-to-b from-[#13151A] via-[#161820] to-[#121418] text-[#F8F9FA] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#232733]"
    >
      {/* Background pest animations removed per user request — Preserved in backups/flying-animals-snapshot/ */}
      {/* Subtle warm ambient glow behind hero elements */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-[#DE744C]/10 blur-[140px] rounded-full pointer-events-none -z-0" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content & Direct Response Conversion Messaging */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Main Headline & Mobile Badges to its right */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2.5 sm:block">
                <div>
                  <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-[#F8F9FA] leading-[1.08] select-none uppercase">
                    PESTS OUT. <br />
                    PEACE OF <br />
                    <span className="text-[#DE744C]">MIND IN.</span>
                  </h1>
                </div>

                {/* Mobile-Only: Positioned to the right of "PESTS OUT. PEACE OF MIND IN." */}
                <div className="flex flex-col gap-1.5 sm:hidden shrink-0">
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/40 border border-amber-400/30 text-[10.5px] font-bold text-amber-300 shadow-xs whitespace-nowrap">
                    <span>⭐</span>
                    <span>4.9/5 (120+ Reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-[10.5px] font-bold text-slate-100 shadow-xs whitespace-nowrap">
                    <span>⏱️</span>
                    <span>15-Min Response</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/40 border border-emerald-500/30 text-[10.5px] font-bold text-emerald-400 shadow-xs whitespace-nowrap">
                    <span>🛡️</span>
                    <span>6-Month Warranty</span>
                  </div>
                </div>
              </div>

              {/* High-Converting $50 Voucher Badge (Clean, punchy, no visual noise) */}
              <div className="pt-1.5 flex items-center">
                <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#DE744C]/25 via-amber-500/20 to-[#DE744C]/15 border border-[#DE744C]/50 shadow-md">
                  <span className="anim-legendary-word font-black text-xs sm:text-sm uppercase tracking-wide">
                    $50 Off New Customer Voucher Auto-Applied
                  </span>
                </div>
              </div>
            </div>

            {/* Subtitle text - hidden on small mobile to reduce clutter, visible on tablet & desktop */}
            <div className="hidden sm:block space-y-2">
              <p className="text-xs sm:text-base text-[#C5CAD4] max-w-xl leading-relaxed font-normal">
                Spiders, ants, cockroaches, rats, bees, wasps, dead animal removal or termites across Melbourne? Fast, transparent upfront estimate with clear safety precautions.
              </p>
            </div>

            {/* CTAs: Direct conversion actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={() => onOpenCallback && onOpenCallback(selectedPest)}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#DE744C] hover:bg-[#C85E36] active:bg-[#B8522B] text-white font-black text-sm sm:text-base rounded-xl shadow-lg shadow-[#DE744C]/30 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get a free quote now</span>
                <span className="text-base font-black">↗</span>
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1E222A] hover:bg-[#282E39] text-[#F8F9FA] font-bold text-sm sm:text-base rounded-xl border border-[#303746] flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Clock className="w-4 h-4 text-[#DE744C]" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

            {/* 4 Iconic Trust Cards in 2x2 Grid (Desktop only to prevent mobile clutter) */}
            <div className="hidden lg:grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-2">
              
              {/* Card 1: $50 Off For New Customers */}
              <div className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-[#DE744C] text-white font-black shadow-md border border-[#F4C7B4]/30 min-h-[58px]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black/20 text-white flex items-center justify-center shrink-0">
                  <BadgePercent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-xs sm:text-sm font-black leading-tight">$50 Off For New Customers</div>
              </div>

              {/* Card 2: Same Day Availability */}
              <div className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-white shadow-sm hover:border-[#DE744C]/60 transition-all min-h-[58px]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#DE744C]/15 text-[#DE744C] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-xs sm:text-sm font-black leading-tight">Same Day Availability</div>
              </div>

              {/* Card 3: 6-Month Treatment Warranty */}
              <div className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-white shadow-sm hover:border-[#DE744C]/60 transition-all min-h-[58px]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#DE744C]/15 text-[#DE744C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-xs sm:text-sm font-black leading-tight">6-Month Warranty</div>
              </div>

              {/* Card 4: Emergency 24/7 Response */}
              <div className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-white shadow-sm hover:border-[#DE744C]/60 transition-all min-h-[58px]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#DE744C]/15 text-[#DE744C] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-xs sm:text-sm font-black leading-tight">Emergency 24/7</div>
              </div>

            </div>

            {/* Floating Same-Day Callout (Desktop only) */}
            <div className="hidden lg:flex rounded-xl bg-[#1A1D24] border-l-4 border-[#DE744C] border border-[#2B303C] p-3 sm:p-4 text-white shadow-xl items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#DE744C] shrink-0" />
                <div>
                  <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white">
                    PESTS DON'T WAIT. NEITHER DO WE.
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#9EA4B0]">
                    Same-day availability* • Emergency response 24 hours, 7 days
                  </div>
                </div>
              </div>
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black text-[#DE744C] hover:underline shrink-0"
              >
                Call {COMPANY_DETAILS.phone} ↗
              </a>
            </div>

          </div>

          {/* Right Column: Unified Quick Quote Form in Ultra-Transparent Liquid Glass Card */}
          <div className="lg:col-span-5 space-y-2.5">
            {/* Desktop & Tablet: High-Trust Badges directly ABOVE the quote form */}
            <div className="hidden sm:flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-black/40 backdrop-blur-xs border border-white/20 text-xs font-bold text-slate-200 shadow-lg">
              <span className="flex items-center gap-1.5 text-amber-300">
                <span>⭐</span>
                <span>4.9/5 (120+ Reviews)</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span className="flex items-center gap-1.5 text-slate-100">
                <span>⏱️</span>
                <span>15-Min Response</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span>🛡️</span>
                <span>6-Month Warranty</span>
              </span>
            </div>

            <div className="relative rounded-3xl bg-black/20 backdrop-blur-[2px] border border-white/20 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(222,116,76,0.12)] overflow-hidden transition-all duration-300 hover:border-white/30">
              
              {/* Subtle Refraction Border Highlight */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent rounded-3xl" />

              {/* Header: Get A Quote Now */}
              <div className="relative z-10 border-b border-white/15 pb-3.5 mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                    Get A Quote Now
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Technicians
                  </span>
                </div>
                <p className="text-xs text-white/80 font-medium mt-0.5">Fast 15-minute response across Melbourne • Quotes include $50 coupon</p>
              </div>

              {/* Form with variant="liquid-glass" and dynamic defaultService */}
              <div className="relative z-10">
                <QuoteRequestForm
                  key={`hero-form-${selectedPest}`}
                  defaultService={selectedPest}
                  source="Hero Section Quick Quote"
                  variant="liquid-glass"
                />
              </div>

              {/* Payment Options at bottom of Hero Form */}
              <div className="relative z-10 mt-3.5 pt-3 border-t border-white/15 flex flex-col items-center gap-1 text-center">
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Payment Options:</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 text-[10px] font-extrabold">CASH</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 text-[10px] font-extrabold">CARD</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 text-[10px] font-extrabold">EFTPOS</span>
                  <span className="px-2 py-0.5 rounded bg-[#DE744C]/30 text-[#FF9570] border border-[#DE744C]/50 text-[10px] font-extrabold">AFTERPAY</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/25 text-amber-200 border border-amber-500/50 text-[10px] font-extrabold">ZIP PAY</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
