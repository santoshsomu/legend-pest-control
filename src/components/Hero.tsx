import React, { useState } from 'react';
import { Phone, CheckCircle2, ShieldCheck, MapPin, Sparkles, MessageSquare, ArrowRight, Shield } from 'lucide-react';
import { COMPANY_DETAILS, SUBURBS, SERVICES } from '../data/pestData';
import { HeroShieldAnimation } from './HeroShieldAnimation';

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
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-emerald-950/90 to-slate-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Interactive Bio-Defense Shield — live radar scanner, pest threats & expanding protection barrier */}
      <HeroShieldAnimation />

      {/* Vignette overlay ensuring 100% contrast for foreground text & mobile readability */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content & Value Props */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Promo Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-700/60 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-emerald-100">
                <strong className="text-amber-300 font-bold">$50 OFF</strong> FOR NEW CUSTOMERS
              </span>
            </div>

            {/* Main Headline - Sahithi's exact tagline */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 block">
                Melbourne & Geelong's Trusted Pest Specialists
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] sm:leading-[1.08]">
                Every pest problem, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
                  one legendary solution
                </span>
              </h1>
            </div>

            {/* Subtitle addressing real pain points */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Spiders, ants, cockroaches, rats, wasps, dead animal removal or termites in Geelong, Lara, Werribee, Point Cook or nearby? Tell us what you're seeing for an immediate, transparent estimate.
            </p>

            {/* The 4 Iconic Trust Cards in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
              
              {/* Card 1: 6-month warranty */}
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-emerald-900/60 backdrop-blur-xs text-white">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <span className="text-[11.5px] sm:text-sm font-bold tracking-tight leading-tight">6-month treatment warranty</span>
              </div>

              {/* Card 2: Covering Geelong & Melbourne's west */}
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-emerald-900/60 backdrop-blur-xs text-white">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <span className="text-[11.5px] sm:text-sm font-bold tracking-tight leading-tight">Covering Geelong & Melbourne's west</span>
              </div>

              {/* Card 3: $50 off for new customers (Highlighted Gold Card) */}
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-amber-400 text-slate-950 font-extrabold shadow-lg shadow-amber-400/20">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-slate-950/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
                </div>
                <span className="text-[11.5px] sm:text-sm font-black tracking-tight leading-tight">$50 off for new customers</span>
              </div>

              {/* Card 4: Upfront estimate given on the call */}
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-emerald-900/60 backdrop-blur-xs text-white">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <span className="text-[11.5px] sm:text-sm font-bold tracking-tight leading-tight">Upfront quote on the call</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Primary Call Button */}
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-base shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>

                {/* Secondary Callback Button */}
                <button
                  onClick={() => onOpenCallback()}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-emerald-700/60 transition-all cursor-pointer group"
                >
                  <MessageSquare className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Request Free Quote</span>
                </button>
              </div>

              {/* Value proposition note (pricing numbers removed) */}
              <div className="text-center sm:text-left text-xs sm:text-sm text-slate-300 font-medium flex items-center justify-center sm:justify-start gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent fixed quotes with $50 new customer voucher applied. Zero hidden callout fees.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Pest Assessment Tool */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/95 border border-emerald-800/60 p-6 sm:p-7 shadow-2xl backdrop-blur-md">
              
              {/* Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Priority Dispatch
                  </span>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  ⚡ $50 Off Voucher Active
                </span>
              </div>

              <form onSubmit={handleQuickEstimate} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    1. Select Pest Concern
                  </label>
                  <select
                    value={selectedPest}
                    onChange={(e) => setSelectedPest(e.target.value)}
                    aria-label="Select pest type"
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
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
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium"
                    >
                      {SUBURBS.map((sub) => (
                        <option key={sub.name} value={sub.name}>
                          {sub.name} ({sub.postcode}) - {sub.sameDayAvailable ? '⚡ Same-Day Service' : 'Standard'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Treatment Overview Result Box (No hardcoded prices) */}
                <div className="rounded-2xl bg-gradient-to-br from-emerald-950/70 to-slate-800/90 p-4 border border-emerald-600/30 space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                        Recommended Treatment Plan:
                      </span>
                      <h4 className="text-base font-bold text-white mt-0.5">
                        {currentService.name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-extrabold text-amber-950 bg-amber-400 px-2 py-0.5 rounded-full shrink-0">
                      $50 VOUCHER
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentService.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-slate-700/60 grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Warranty</span>
                      <span className="font-bold text-emerald-300">{currentService.warranty}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Turnaround</span>
                      <span className="font-bold text-amber-300">Same-Day Available</span>
                    </div>
                  </div>
                </div>

                {/* Quick Action Button */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onOpenCallback(currentService.name)}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-xl text-sm transition shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Get Fast Free Quote & Apply $50 Voucher</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>

                  <a
                    href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Or Speak Directly With Sahithi & Tech Team: {COMPANY_DETAILS.phone}
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Zero hidden fees
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
