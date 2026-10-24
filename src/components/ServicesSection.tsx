import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Bug, 
  Rat, 
  Building2, 
  Flame, 
  KeyRound, 
  Building, 
  ArrowRight, 
  Sparkles, 
  Phone,
  Info,
  ShieldCheck,
  Clock,
  X
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
      case 'Sparkles': return Sparkles;
      default: return Bug;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
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
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            All Services ({SERVICES.length})
          </button>
          <button
            onClick={() => setActiveCategory('residential')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
              activeCategory === 'residential'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            🏡 Residential Homes
          </button>
          <button
            onClick={() => setActiveCategory('specialist')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
              activeCategory === 'specialist'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            🔬 Specialist & Emergency (Dead Animals & Termites)
          </button>
          <button
            onClick={() => setActiveCategory('commercial')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
              activeCategory === 'commercial'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            🏢 Commercial & Hospitality
          </button>
        </div>

        {/* Services Grid (All pricing & included with every service sections removed as instructed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-3xl bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.popular
                    ? 'border-emerald-500 shadow-md shadow-emerald-500/10 ring-2 ring-emerald-500/20'
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
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Signs You Have This Infestation */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Common signs in Melbourne & Geelong homes:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.signsOfInfestation.slice(0, 3).map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold mt-0.5">•</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trust & Safety Highlights */}
                  <div className="pt-1 space-y-1.5 text-xs text-slate-600">
                    {service.safetyNote && (
                      <div className="flex items-center gap-1.5 text-emerald-800 font-medium bg-emerald-50/60 p-2 rounded-lg border border-emerald-100">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{service.safetyNote}</span>
                      </div>
                    )}
                    {service.turnaroundTime && (
                      <div className="flex items-center gap-1.5 text-slate-600 font-medium px-2 py-1">
                        <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{service.turnaroundTime}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer with Upfront Quote Trigger (No hardcoded prices) */}
                <div className="p-6 bg-slate-50/80 rounded-b-3xl border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Pricing</span>
                      <span className="text-sm font-black text-slate-900 flex items-center gap-1">
                        Free Upfront Quote
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Warranty</span>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-200">
                        {service.warranty}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenCallback(service.name)}
                      className="w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <button
                      onClick={() => setSelectedServiceForModal(service)}
                      className="w-full py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl text-xs border border-slate-200 transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Process Info</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Emergency Callout Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden border border-emerald-800/40">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-400/30 px-3 py-1 rounded-full">
                ⚡ Urgent Infestation or Dead Animal?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Have Wasps, Rats, Termites or a Foul Ceiling Odour Right Now?
              </h3>
              <p className="text-sm text-emerald-100 max-w-2xl">
                We retain emergency priority dispatch slots every morning and afternoon across Geelong, Lara, Werribee, Point Cook, and Melbourne's West. Call now for priority response.
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
                onClick={() => onOpenCallback('Emergency Same-Day Service')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-emerald-600/40 transition cursor-pointer"
              >
                <span>Request Urgent Callback</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Process Info Modal */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-emerald-800 px-6 py-4 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                  Detailed Treatment Protocol
                </span>
                <h3 className="text-lg font-bold">{selectedServiceForModal.name}</h3>
              </div>
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-600">
              <p className="leading-relaxed">{selectedServiceForModal.fullDesc}</p>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2 uppercase tracking-wider">
                  Our Step-By-Step Treatment Method:
                </h4>
                <ol className="space-y-2 list-decimal pl-4 text-xs sm:text-sm">
                  {selectedServiceForModal.treatmentProcess.map((step, idx) => (
                    <li key={idx} className="leading-relaxed pl-1">{step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-xs text-emerald-900 space-y-1.5">
                <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Warranty & Safety Standards</span>
                </div>
                <div>{selectedServiceForModal.warranty}</div>
                <div>{selectedServiceForModal.safetyNote}</div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    const name = selectedServiceForModal.name;
                    setSelectedServiceForModal(null);
                    onOpenCallback(name);
                  }}
                  className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-center text-sm shadow-md cursor-pointer"
                >
                  Request Quote for this Service
                </button>
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl flex items-center justify-center text-sm"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
