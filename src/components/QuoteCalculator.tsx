import React, { useState } from 'react';
import { Calculator, Check, Sparkles, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';

interface QuoteCalculatorProps {
  onOpenCallback: (serviceSummary?: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onOpenCallback }) => {
  const [propertyType, setPropertyType] = useState<'unit' | 'house-medium' | 'house-large' | 'commercial'>('house-medium');
  const [selectedPests, setSelectedPests] = useState<string[]>(['general']);
  const [hasSubfloorOrRoof, setHasSubfloorOrRoof] = useState(true);

  const pestOptions = [
    { id: 'general', name: 'General Crawling (Spiders, Ants, Roaches)', base: 249, promo: 199 },
    { id: 'rodents', name: 'Rodents (Rats & Mice in Roof / Cavities)', base: 140, promo: 110 },
    { id: 'german-roach', name: 'German Cockroaches (Kitchen Eradication)', base: 180, promo: 140 },
    { id: 'wasps', name: 'Wasp or Bee Nest Removal', base: 160, promo: 120 },
    { id: 'termites', name: 'Timber Pest Termite Inspection (AS 4349.3)', base: 260, promo: 210 },
    { id: 'end-of-lease', name: 'End-of-Lease Flea Spray + Bond Cert', base: 190, promo: 150 },
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

  // Property multiplier calculation
  const getPropertyMultiplier = () => {
    switch (propertyType) {
      case 'unit': return 0.9;
      case 'house-medium': return 1.0;
      case 'house-large': return 1.25;
      case 'commercial': return 1.4;
      default: return 1.0;
    }
  };

  // Compute estimate
  const baseTotalRaw = selectedPests.reduce((sum, pId) => {
    const found = pestOptions.find((o) => o.id === pId);
    return sum + (found ? found.base : 0);
  }, 0);

  const multiplier = getPropertyMultiplier();
  const adjustedBase = Math.round(baseTotalRaw * multiplier);
  // Auto $50 new customer discount
  const discount = COMPANY_DETAILS.promoDiscount;
  // Multi-pest package bundle discount if 2 or more selected
  const bundleDiscount = selectedPests.length > 1 ? (selectedPests.length - 1) * 30 : 0;
  const totalSavings = discount + bundleDiscount;
  const estimatedPrice = Math.max(149, adjustedBase - totalSavings);

  const getSummaryString = () => {
    const pestNames = selectedPests
      .map((p) => pestOptions.find((o) => o.id === p)?.name.split(' (')[0])
      .filter(Boolean)
      .join(' + ');
    const propName = propertyType === 'unit' ? 'Unit / Flat' : propertyType === 'house-medium' ? '3-4 Bed House' : propertyType === 'house-large' ? '5+ Bed Large House' : 'Commercial Facility';
    return `Calculator Quote: ${propName} for ${pestNames} - Estimated $${estimatedPrice}`;
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Instant Pest Control Cost Estimator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No guessing games or inflated quotes. Configure your property and pest concerns below to see an immediate transparent estimate with your $50 new customer discount automatically applied.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-3xl p-4 sm:p-8 border border-slate-700 shadow-xl backdrop-blur-sm space-y-6">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 sm:mb-3">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {[
                  { id: 'unit', label: 'Unit / Apt', sub: '1-2 Beds' },
                  { id: 'house-medium', label: 'Standard Home', sub: '3-4 Beds' },
                  { id: 'house-large', label: 'Large Home', sub: '5+ Beds / 2-Storey' },
                  { id: 'commercial', label: 'Commercial', sub: 'Shop / Cafe' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id as any)}
                    className={`p-2.5 sm:p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      propertyType === item.id
                        ? 'bg-blue-600 border-blue-400 text-white font-bold shadow-md shadow-blue-600/30'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-bold">{item.label}</span>
                    <span className="block text-[10px] opacity-75 mt-0.5">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pest Selection */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5 sm:mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Select What Needs Treatment
                </label>
                <span className="text-[10.5px] sm:text-[11px] text-amber-400 font-semibold">
                  Multi-pest bundle savings apply!
                </span>
              </div>

              <div className="space-y-2">
                {pestOptions.map((pest) => {
                  const isChecked = selectedPests.includes(pest.id);
                  return (
                    <div
                      key={pest.id}
                      onClick={() => handleTogglePest(pest.id)}
                      className={`flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none gap-2 ${
                        isChecked
                          ? 'bg-blue-950/60 border-blue-500 text-white shadow-xs'
                          : 'bg-slate-900/40 border-slate-700/80 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                            isChecked
                              ? 'bg-blue-500 border-blue-500 text-white'
                              : 'border-slate-600 bg-slate-800'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className={`text-xs sm:text-sm font-semibold truncate sm:whitespace-normal ${isChecked ? 'text-white' : 'text-slate-300'}`}>
                          {pest.name}
                        </span>
                      </div>

                      <span className="text-[11px] sm:text-xs font-bold text-slate-400 shrink-0">
                        {isChecked ? 'Selected' : '+ Add'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Roof Void & Weep Holes Check */}
            <div className="pt-2 border-t border-slate-700 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-200 block">Include Roof Cavity & Weep Hole Dusting?</span>
                <span className="text-[11px] text-slate-400">Essential barrier against spider & ant colonies</span>
              </div>
              <button
                type="button"
                onClick={() => setHasSubfloorOrRoof(!hasSubfloorOrRoof)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  hasSubfloorOrRoof
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-slate-700 text-slate-400'
                }`}
              >
                {hasSubfloorOrRoof ? '✓ Included (Free)' : 'Excluded'}
              </button>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-blue-500/40 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                Your Estimated Quote Summary
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                GUARANTEED HONEST
              </span>
            </div>

            {/* Pricing Output */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-slate-400">Standard Price:</span>
                <span className="text-sm line-through text-slate-400 font-semibold">${adjustedBase}</span>
              </div>

              <div className="flex items-baseline justify-between text-amber-400 text-xs">
                <span className="flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> New Customer Discount:
                </span>
                <span className="font-bold">-${discount}</span>
              </div>

              {bundleDiscount > 0 && (
                <div className="flex items-baseline justify-between text-emerald-400 text-xs">
                  <span className="font-semibold">Multi-Pest Bundle Saving:</span>
                  <span className="font-bold">-${bundleDiscount}</span>
                </div>
              )}

              <div className="pt-3 border-t border-slate-700 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-300 block">Total Estimated Cost</span>
                  <span className="text-[10px] text-slate-400">Includes all materials & labour</span>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-amber-400">
                    ${estimatedPrice}
                  </span>
                  <span className="text-xs text-slate-400 block font-medium">AUD (incl GST)</span>
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/60 space-y-2 text-xs text-slate-300">
              <div className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>What's Included at This Price:</span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-300 pl-1">
                <li>• 6-Month Ironclad Re-treatment Warranty</li>
                <li>• 100% Pet & Child Safe APVMA low-toxicity spray</li>
                <li>• Internal skirting boards & external perimeter barrier</li>
                <li>• Roof void blower dusting injection</li>
                <li>• Victorian Licensed Technician with digital tax invoice</li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenCallback(getSummaryString())}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Estimated Rate (${estimatedPrice})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                Or Confirm Over Phone: {COMPANY_DETAILS.phone}
              </a>
            </div>

            <div className="text-center text-[10px] text-slate-400">
              *Estimates are for standard residential infestations. Final confirmation provided on arrival prior to starting work.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
