import React, { useState } from 'react';
import { Phone, CheckCircle2, ShieldCheck, MapPin, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, SUBURBS, SERVICES } from '../data/pestData';

interface HeroProps {
  onOpenCallback: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCallback }) => {
  const [selectedPest, setSelectedPest] = useState('general-pest-control');
  const [selectedSuburb, setSelectedSuburb] = useState('Werribee');

  const currentService = SERVICES.find((s) => s.id === selectedPest) || SERVICES[0];

  const handleQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenCallback(currentService.name);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 opacity-25">
        {/* Subtle Australian home vector blueprint / glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        
        {/* Overlay grid */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content & Value Props matching screenshot exactly */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Promo Pill - exactly matching screenshot */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-200">
                <strong className="text-amber-300 font-bold">$50 OFF</strong> FOR NEW CUSTOMERS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] sm:leading-[1.08]">
              Pest Control in <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
                Geelong & Melbourne's West
              </span>
            </h1>

            {/* Subtitle addressing real pain points */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Ants, cockroaches, spiders, rats, mice or wasps in Geelong, Lara, Werribee or nearby?
              Tell us what you're seeing and your suburb. We give you a transparent estimate on the call.
            </p>

            {/* The 4 Iconic Trust Cards in 2x2 Grid (matching mobile screenshot exactly) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
              
              {/* Card 1: 6-month warranty */}
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs text-white">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <span className="text-[11.5px] sm:text-sm font-bold tracking-tight leading-tight">6-month treatment warranty</span>
              </div>

              {/* Card 2: Covering Geelong & Melbourne's west */}
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs text-white">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <span className="text-[11.5px] sm:text-sm font-bold tracking-tight leading-tight">Covering Geelong & Melbourne's west</span>
              </div>

              {/* Card 3: $50 off for new customers (Highlighted Gold/Yellow Card) */}
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-amber-400 text-slate-950 font-extrabold shadow-lg shadow-amber-400/20">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-slate-950/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
                </div>
                <span className="text-[11.5px] sm:text-sm font-black tracking-tight leading-tight">$50 off for new customers</span>
              </div>

              {/* Card 4: Estimate given on the call */}
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-xs text-white">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <span className="text-[11.5px] sm:text-sm font-bold tracking-tight leading-tight">Estimate given on the call</span>
              </div>
            </div>

            {/* CTAs matching screenshot */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Primary Blue Button */}
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>

                {/* Secondary Pill Outline Button */}
                <button
                  onClick={() => onOpenCallback()}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800/90 text-white font-bold text-base border border-slate-600 transition-all cursor-pointer group"
                >
                  <MessageSquare className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Get a call back</span>
                </button>
              </div>

              {/* Price Anchor */}
              <div className="text-center sm:text-left text-sm text-slate-300 font-medium">
                From <span className="font-extrabold text-white text-base">${COMPANY_DETAILS.baseStartingPrice}</span> for new customers <span className="text-slate-400">(price includes the $50 off)</span>.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Price Estimator & Technician Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-7 shadow-2xl backdrop-blur-md">
              
              {/* Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Live Booking System
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Instant Estimate
                </span>
              </div>

              <form onSubmit={handleQuickEstimate} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    1. Select What You're Seeing
                  </label>
                  <select
                    value={selectedPest}
                    onChange={(e) => setSelectedPest(e.target.value)}
                    aria-label="Select pest type"
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-medium"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (Normally ${s.priceFrom})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    2. Your Suburb (Geelong & Melbourne West)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={selectedSuburb}
                      onChange={(e) => setSelectedSuburb(e.target.value)}
                      aria-label="Select suburb"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-medium"
                    >
                      {SUBURBS.map((sub) => (
                        <option key={sub.name} value={sub.name}>
                          {sub.name} ({sub.postcode}) - {sub.sameDayAvailable ? '⚡ Same-Day Service' : 'Standard'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Estimate Result Box */}
                <div className="rounded-2xl bg-gradient-to-br from-blue-950/70 to-slate-800/80 p-4 border border-blue-500/30 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Estimated Price for {selectedSuburb}:</span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-3xl font-black text-amber-400">
                          ${currentService.promoPrice}
                        </span>
                        <span className="text-sm line-through text-slate-500 font-semibold">
                          ${currentService.priceFrom}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          SAVE $50
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-slate-400 block">Warranty</span>
                      <span className="text-xs font-bold text-blue-300">6 Months Free</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 pt-1 border-t border-slate-700/60 leading-relaxed">
                    Includes full internal and exterior barrier, roof void injection & child/pet safe formulation.
                  </p>
                </div>

                {/* Quick Action Button */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onOpenCallback(currentService.name)}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-xl text-sm transition shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Lock In This ${currentService.promoPrice} Rate Now</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>

                  <a
                    href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    Or Speak With Sahithi & Tech Team: {COMPANY_DETAILS.phone}
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> No hidden fees
                  </span>
                  <span>•</span>
                  <span>Pay after completion</span>
                  <span>•</span>
                  <span>Card / EFTPOS accepted</span>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
