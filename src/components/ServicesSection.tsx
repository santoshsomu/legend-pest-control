import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Bug, 
  Rat, 
  Building2, 
  Flame, 
  KeyRound, 
  Building, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Phone,
  Info
} from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data/pestData';
import type { PestService } from '../types';

interface ServicesSectionProps {
  onOpenCallback: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCallback }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'specialist' | 'commercial'>('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<PestService | null>(null);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert': return ShieldAlert;
      case 'Bug': return Bug;
      case 'Rat': return Rat;
      case 'Building2': return Building2;
      case 'Flame': return Flame;
      case 'KeyRound': return KeyRound;
      case 'Building': return Building;
      default: return Bug;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Targeted Eradication Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Pest Control Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every home and pest invasion requires a specific chemical science. We don't just spray surface water—we inspect roof voids, subfloors, and nesting sites with APVMA-certified low-toxicity products.
          </p>
        </div>

        {/* Category Filter Tabs - touch friendly horizontal scroll on mobile */}
        <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center items-center gap-2 mt-6 sm:mt-8 mb-8 sm:mb-12 no-scrollbar px-1">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            All Services ({SERVICES.length})
          </button>
          <button
            onClick={() => setActiveCategory('residential')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
              activeCategory === 'residential'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            🏡 Residential Homes
          </button>
          <button
            onClick={() => setActiveCategory('specialist')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
              activeCategory === 'specialist'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            🔬 German Roaches & Termites
          </button>
          <button
            onClick={() => setActiveCategory('commercial')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
              activeCategory === 'commercial'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            🏢 Commercial & Hospitality
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-3xl bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.popular
                    ? 'border-blue-500 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20'
                    : 'border-slate-200 shadow-xs'
                }`}
              >
                {/* Popular Ribbon */}
                {service.popular && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider rounded-full shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Signs You Have This */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Common signs in Melbourne homes:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.signsOfInfestation.slice(0, 3).map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">•</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Included with every service:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700 font-medium">
                      {service.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer with Pricing and CTA */}
                <div className="p-6 bg-slate-50/80 rounded-b-3xl border-t border-slate-100 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Total from</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900">
                          ${service.promoPrice}
                        </span>
                        <span className="text-xs line-through text-slate-400 font-semibold">
                          ${service.priceFrom}
                        </span>
                        <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                          $50 OFF
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">Warranty</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {service.id === 'termite-inspection-barriers' ? 'Up to 8 Yrs' : '6-Month Free'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenCallback(service.name)}
                      className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <button
                      onClick={() => setSelectedServiceForModal(service)}
                      className="w-full py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl text-xs border border-slate-200 transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-blue-600" />
                      <span>Process Info</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Emergency Callout Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-400/30 px-3 py-1 rounded-full">
                ⚡ Urgent Infestation?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Have Wasps, Rats or Aggressive Pests Right Now?
              </h3>
              <p className="text-sm text-blue-100 max-w-2xl">
                We retain emergency priority dispatch slots every morning and afternoon across Geelong, Lara, Werribee, Point Cook, and Melbourne's West. Call now for priority booking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm transition shadow-lg shadow-amber-400/20"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => onOpenCallback('Emergency Urgent Pest Dispatch')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition cursor-pointer"
              >
                <span>Request Urgent Dispatch</span>
              </button>
            </div>
          </div>
        </div>

        {/* Detail Modal when user clicks "Process Info" */}
        {selectedServiceForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">
              
              <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Treatment Protocol & Methodology
                  </span>
                  <h3 className="text-2xl font-black mt-1">{selectedServiceForModal.name}</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Compliant with Victorian Health and Australian Standards.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedServiceForModal(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    About This Treatment
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedServiceForModal.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Our 4-Step Technical Protocol
                  </h4>
                  <div className="space-y-3">
                    {selectedServiceForModal.treatmentProcess.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-bold text-emerald-900 block">Warranty Commitment:</strong>
                    <span className="text-xs text-emerald-800">{selectedServiceForModal.warranty}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Special Promo Price:</span>
                  <div className="text-xl font-black text-slate-900">
                    ${selectedServiceForModal.promoPrice}{' '}
                    <span className="text-xs line-through text-slate-400">
                      ${selectedServiceForModal.priceFrom}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedServiceForModal(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const name = selectedServiceForModal.name;
                      setSelectedServiceForModal(null);
                      onOpenCallback(name);
                    }}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
                  >
                    Book This Service
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
