import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Phone, 
  CheckCircle2, 
  ChevronDown, 
  ArrowLeft, 
  Check, 
  MapPin,
  HeartHandshake
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';
import { QuoteRequestForm } from './QuoteRequestForm';

interface ServicePageGeneralPestProps {
  onOpenCallback: (service?: string) => void;
  onNavigateHome: () => void;
  onNavigateService?: (serviceId: string) => void;
}

export const ServicePageGeneralPest: React.FC<ServicePageGeneralPestProps> = ({
  onOpenCallback,
  onNavigateHome,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const defenseZones = [
    {
      num: '01',
      title: 'Roof Void & Ceiling Cavities',
      img: '/gallery/11.jpeg',
      suburb: 'Truganina, VIC',
      tag: 'Ceiling Defense',
      desc: 'High-volume permethrin dust blown evenly throughout your roof space. Neutralizes spiders, cockroaches, and silverfish breeding above ceilings before they drop into bedrooms.'
    },
    {
      num: '02',
      title: 'Brick Weep Holes & Cavity Voids',
      img: '/gallery/8.jpeg',
      suburb: 'Tarneit, VIC',
      tag: 'Cavity Barrier',
      desc: 'Suburban Melbourne homes breathe through weep holes. We inject targeted dust directly into external brick vents to kill harboured insects without drilling or cutting walls.'
    },
    {
      num: '03',
      title: 'Internal Skirting Boards & Wet Areas',
      img: '/gallery/6.jpeg',
      suburb: 'Werribee, VIC',
      tag: 'Internal Micro-Barrier',
      desc: 'Precision low-pressure micro-spray along perimeter skirting boards, under kitchen kickboards, and behind major appliances. Completely odourless and pet-safe once dry.'
    },
    {
      num: '04',
      title: 'External Perimeter, Eaves & Fences',
      img: '/gallery/15.jpeg',
      suburb: 'Point Cook, VIC',
      tag: 'External Shield',
      desc: 'A continuous liquid residual barrier applied around window frames, external door heads, fence lines, and outdoor entertaining areas to stop pests crossing into your home.'
    }
  ];

  const packages = [
    {
      tier: 'Units & Townhouses',
      name: '1–2 Bedroom Home',
      desc: 'Ideal for apartments, units, or compact single-level properties.',
      scope: 'Tailored to compact single-level layouts',
      features: [
        'Internal skirting micro-spray',
        'Entry perimeter barrier',
        '6-Month Treatment Warranty'
      ]
    },
    {
      tier: 'Most Popular in Melbourne',
      name: '3–4 Bedroom Family Home',
      desc: 'Complete 4-Zone treatment covering roof void, internal skirting, and external perimeter.',
      scope: 'Full 4-zone protection tailored to your floorplan',
      highlighted: true,
      features: [
        'Full 4-Zone Defense Architecture',
        'Roof void dusting + weep holes',
        '6-Month Free Re-Treatment Warranty'
      ]
    },
    {
      tier: 'Large / Double Storey',
      name: '5+ Bed / Double Storey',
      desc: 'Substantial double-storey properties, acreage, or large homes.',
      scope: 'Multi-level & large property coverage',
      features: [
        'Multi-level roof voids & balconies',
        'Extended perimeter barrier',
        '6-Month Treatment Warranty'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Do we have to leave the house during general pest treatment?',
      a: 'We recommend popping out for about 90 minutes to 2 hours while the internal skirting spray is applied and dries. Once dry, our certified low-odour, APVMA-registered products are completely safe for your family and pets to return to.'
    },
    {
      q: 'Are your pest products safe for cats, dogs, and toddlers?',
      a: 'Yes, once completely dry. Our formulations are micro-encapsulated synthetic pyrethroids designed to target insect nervous systems with minimal mammalian toxicity. We recommend keeping pets off treated surfaces until dry (approx. 90 minutes).'
    },
    {
      q: 'Why might I see sluggish pests in the first 48 hours?',
      a: 'This is completely normal and proof the treatment is working. Our products contain flushing agents that draw pests out of hidden cavities before they dehydrate and expire. Within 7 to 10 days, all activity ceases.'
    },
    {
      q: 'What is covered under the 6-Month Warranty?',
      a: 'If common covered crawling pests (spiders, ants, cockroaches, silverfish) return within 6 months of your full treatment, our licensed technician returns to inspect and re-treat the affected areas completely free of charge.'
    },
    {
      q: 'What preparation is required before the technician arrives?',
      a: 'Keep floor perimeters reasonably clear of loose clothing and toys, cover pet food and water bowls, and ensure our technician has clear access around external brickwork and roof manholes.'
    }
  ];

  return (
    <div className="bg-[#121418] text-slate-100 min-h-screen selection:bg-[#DE744C] selection:text-white">
      
      {/* 1. Crisp Breadcrumb Bar */}
      <nav className="bg-[#0D0F13] border-b border-[#222632] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#DE744C] transition flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span>Services</span>
            <span className="text-slate-600">/</span>
            <span className="text-emerald-400 font-semibold">General Pest Treatment</span>
          </div>

          <a 
            href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-emerald-400 hover:text-white font-bold transition"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
        </div>
      </nav>

      {/* 2. Hero Section: Direct Value & Quote Action */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#161820] via-[#14161B] to-[#121418] pt-10 pb-12 sm:pt-12 sm:pb-16 border-b border-[#232733]">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Headline & Action */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>6-Month Free Re-Treatment Warranty Included</span>
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Complete Melbourne Home Pest Protection
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                  Comprehensive 4-zone defense treating your roof void, internal skirting boards, brick weep holes, and exterior perimeter against spiders, ants, cockroaches, and silverfish across Greater Melbourne.
                </p>
              </div>

              {/* 4 Clean Benefit Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm">🛡️ 6-Month</div>
                  <div className="text-[11px] text-slate-400">Full Warranty</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-[#DE744C] font-bold text-xs sm:text-sm">🐾 Pet-Safe</div>
                  <div className="text-[11px] text-slate-400">Once Dry (~90m)</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-amber-300 font-bold text-xs sm:text-sm">🏛️ APVMA</div>
                  <div className="text-[11px] text-slate-400">Low-Odour</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-white font-bold text-xs sm:text-sm">🏷️ $50 Off</div>
                  <div className="text-[11px] text-slate-400">Auto-Applied</div>
                </div>
              </div>

              {/* Quick Call Action */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-600/25 flex items-center gap-2 cursor-pointer transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DETAILS.phone} For A Quote</span>
                </a>
                <span className="text-xs text-slate-400">Prompt same-day bookings</span>
              </div>

            </div>

            {/* Right Column: Quote Request Form */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-black/30 border border-white/15 p-5 sm:p-6 shadow-xl backdrop-blur-xs">
                <div className="border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-white">Get An Upfront Quote</h3>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      $50 Voucher Applied
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Pay upon service completion • Zero obligation</p>
                </div>

                <QuoteRequestForm
                  defaultService="General Pest Treatment"
                  source="General Pest Service Page Hero"
                  variant="liquid-glass"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The 4-Zone Defense Architecture (Visual Proof) */}
      <section className="py-12 sm:py-16 bg-[#14161B] border-b border-[#232733]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-1.5 mb-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Comprehensive Protection
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              The 4-Zone Melbourne Defense Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Unlike quick surface sprays, Legend protects your property from the roof void down to the subfloor and garden perimeter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {defenseZones.map((zone) => (
              <div 
                key={zone.num}
                className="rounded-2xl bg-[#1C1F27] border border-[#2B303C] overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-200"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-black/40">
                    <img 
                      src={zone.img} 
                      alt={zone.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{zone.suburb}</span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-emerald-500/90 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Zone {zone.num}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-white text-sm leading-snug">
                      {zone.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {zone.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-white/5 mt-2">
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{zone.tag}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Treatment Packages & Scope */}
      <section className="py-12 sm:py-16 bg-[#121418] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-1.5 mb-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Transparent Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Treatment Packages &amp; Scope
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Quotes include our $50 new customer voucher applied upfront. Upfront price tailored to your home layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-2xl flex flex-col justify-between space-y-3 transition-all ${
                  pkg.highlighted 
                    ? 'bg-gradient-to-b from-[#222733] to-[#181B22] border-2 border-emerald-500 shadow-xl' 
                    : 'bg-[#1C1F27] border border-[#2B303C]'
                }`}
              >
                <div className="space-y-2">
                  <span className={`text-xs font-bold ${pkg.highlighted ? 'text-emerald-400' : 'text-[#DE744C]'}`}>
                    {pkg.tier}
                  </span>
                  <h3 className="text-base font-black text-white">{pkg.name}</h3>
                  <p className="text-xs text-slate-400">{pkg.desc}</p>
                  
                  <div className="pt-2">
                    <div className="text-sm font-black text-white flex items-center gap-1.5">
                      <span>Upfront Phone Quote</span>
                      <span className="text-[11px] font-bold text-emerald-400">($50 Voucher Included)</span>
                    </div>
                    <div className="text-[11px] text-slate-400">{pkg.scope}</div>
                  </div>
                </div>

                <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-white/5">
                  {pkg.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOpenCallback(`General Pest - ${pkg.name}`)}
                  className={`w-full py-2 font-bold text-xs rounded-xl transition cursor-pointer ${
                    pkg.highlighted
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                      : 'bg-[#1F232D] hover:bg-[#DE744C] text-white border border-[#343B4C] hover:border-[#DE744C]'
                  }`}
                >
                  Book {pkg.name.split(' ')[0]} Treatment
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Concise Trust & Warranty Reassurance Bar */}
      <section className="py-8 bg-[#161820] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1D24] border border-[#2B303C]">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-white block font-bold">6-Month Re-Treatment Warranty</strong>
                <span className="text-slate-400">If pests return, so do we — 100% free</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1D24] border border-[#2B303C]">
              <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-white block font-bold">Licensed Victorian Technicians</strong>
                <span className="text-slate-400">Certified, insured &amp; APVMA registered</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1D24] border border-[#2B303C]">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <strong className="text-white block font-bold">Child &amp; Pet Safe Once Dry</strong>
                <span className="text-slate-400">Low-odour, non-staining surface micro-spray</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Concise FAQs */}
      <section className="py-12 sm:py-16 bg-[#121418]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-1.5 mb-8">
            <h2 className="text-2xl font-black text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-400">Common questions from Melbourne homeowners about general pest defense</p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-xl border transition-all ${
                    isOpen 
                      ? 'border-emerald-500 bg-[#1A1D24]' 
                      : 'border-[#242833] bg-[#14161B] hover:border-[#2D3340]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span className="font-bold text-white text-xs sm:text-sm">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
