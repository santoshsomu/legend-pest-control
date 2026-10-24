import React, { useState } from 'react';
import { Sparkles, Phone, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';

interface QuoteCalculatorProps {
  onOpenCallback: (serviceSummary?: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onOpenCallback }) => {
  const [selectedPests, setSelectedPests] = useState<string[]>(['general']);

  const pestOptions = [
    { id: 'general', name: 'General Crawling (Spiders, Ants, Cockroaches, Silverfish)' },
    { id: 'dead-animal', name: 'Dead Animal / Possum Carcass Removal (Roof or Subfloor)' },
    { id: 'rodents', name: 'Rodents (Rats & Mice in Roof / Cavities)' },
    { id: 'german-roach', name: 'German Cockroaches (Kitchen Eradication)' },
    { id: 'wasps', name: 'Wasp or Bee Nest Removal' },
    { id: 'termites', name: 'Termite Inspection (AS 4349.3 Timber Pest)' },
    { id: 'end-of-lease', name: 'End-of-Lease Flea Spray + Bond Cert' },
  ];

  const handleTogglePest = (id: string) => {
    if (selectedPests.includes(id)) {
      if (selectedPests.length > 1) {
        setSelectedPests(selectedPests.filter((p) => p !== id));
      }
    } else {
      setSelectedPests([...selectedPests, id]);
    }
  };

  const getSummaryString = () => {
    const pestNames = selectedPests
      .map((p) => pestOptions.find((o) => o.id === p)?.name.split(' (')[0])
      .filter(Boolean)
      .join(' + ');
    return `Assessment for: ${pestNames}`;
  };

  return (
    <section id="assessment" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Fast Interactive Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Custom Pest Treatment &amp; Defense Plan
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Select your pest concerns below to generate a tailored eradication plan. Every service includes our <strong className="text-amber-400 font-bold">Complimentary 10-Point Termite &amp; Pest Inspection</strong>.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-3xl p-5 sm:p-8 border border-emerald-900/60 shadow-xl backdrop-blur-sm space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 sm:mb-3">
                Select Pest Sightings &amp; Concerns (Tap to select)
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {pestOptions.map((p) => {
                  const active = selectedPests.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleTogglePest(p.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                        active
                          ? 'bg-emerald-900/50 border-emerald-400 text-white ring-1 ring-emerald-400/50'
                          : 'bg-slate-900/70 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold pr-2">{p.name}</span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                        active ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600'
                      }`}>
                        {active && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Output Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950/90 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-7 border border-emerald-700/60 shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-emerald-800/60">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Custom Treatment Plan
              </span>
              <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
                Free Inspection Included
              </span>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-emerald-900/60 space-y-2 text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">
                  Included Treatment Protocol:
                </span>
                <ul className="space-y-1.5 text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Full interior baseboard low-odour micro-spray</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>External liquid perimeter barrier to eaves &amp; weep holes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Roof cavity and subfloor insecticidal dust injection</span>
                  </li>
                  {selectedPests.includes('dead-animal') && (
                    <li className="flex items-center gap-2 text-amber-300 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Carcass extraction + enzymatic odour neutraliser</span>
                    </li>
                  )}
                  {selectedPests.includes('termites') && (
                    <li className="flex items-center gap-2 text-emerald-300 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Thermal imaging &amp; moisture scan (AS 4349.3 Report)</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Guarantees Box */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase">Warranty</span>
                  <span className="font-extrabold text-emerald-400">6 Months Free</span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase">Formulations</span>
                  <span className="font-extrabold text-emerald-300">APVMA Approved</span>
                </div>
              </div>

              <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-xl text-xs text-amber-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong>Free 10-Point Termite &amp; Pest Inspection</strong> included with any confirmed treatment.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => onOpenCallback(getSummaryString())}
                className="w-full py-4 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-xl text-sm transition shadow-lg shadow-amber-400/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Get Free Upfront Quote With Free Inspection</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Or Call For Instant Quote: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

            <div className="text-center text-[11px] text-slate-400">
              ⚡ Over-the-phone quotes are 100% free with no obligation to book.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
