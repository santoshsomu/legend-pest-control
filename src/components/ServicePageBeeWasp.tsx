import React, { useState } from 'react';
import { 
  Flame, 
  Clock, 
  Phone, 
  ChevronDown, 
  ArrowLeft, 
  Check, 
  MapPin,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';
import { QuoteRequestForm } from './QuoteRequestForm';

interface ServicePageBeeWaspProps {
  onOpenCallback: (service?: string) => void;
  onNavigateHome: () => void;
  onNavigateService?: (serviceId: string) => void;
}

export const ServicePageBeeWasp: React.FC<ServicePageBeeWaspProps> = ({
  onOpenCallback,
  onNavigateHome,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const fieldCases = [
    {
      img: '/gallery/7.jpeg',
      title: 'Roof Eave Paper Wasp Removal',
      suburb: 'Point Cook, VIC',
      type: 'Paper Wasps',
      desc: 'Active inverted comb under roof eave. Colony knocked down instantly and comb detached cleanly to prevent secondary pest attraction.',
      highlights: ['Full physical comb removal', 'Surface deterrent applied', 'Leaves eaves unmarked']
    },
    {
      img: '/gallery/8.jpeg',
      title: 'Brick Weep Hole Cavity Injection',
      suburb: 'Tarneit, VIC',
      type: 'European Wasps',
      desc: 'Wasps entering via exterior brick weep holes into the wall cavity. High-pressure micro-fine dust injected directly to eliminate the queen without cutting walls.',
      highlights: ['Zero drywall damage', 'Direct queen elimination', 'Non-invasive procedure']
    },
    {
      img: '/gallery/14.jpeg',
      title: 'Subfloor & Foundation Void Treatment',
      suburb: 'Hoppers Crossing, VIC',
      type: 'European Wasps / Burrows',
      desc: 'Large active nest located within subfloor foundation masonry. Deep internal treatment eradicated entire worker colony at the source.',
      highlights: ['Deep core treatment', 'Prevents indoor migration', 'Full colony guarantee']
    }
  ];

  const faqs = [
    {
      q: 'How fast can a technician assist with a bee or wasp nest?',
      a: 'We have licensed technicians on the road across Greater Melbourne daily and offer prompt same-day service where available. Call us to confirm current technician availability in your suburb.'
    },
    {
      q: 'Why avoid spraying nests with supermarket fly cans?',
      a: 'Over-the-counter sprays agitate wasps before killing them, dramatically increasing sting risks. For wall cavities, supermarket sprays often drive wasps deeper toward indoor downlights and bedroom vents.'
    },
    {
      q: 'Are your treatments safe for children and pets?',
      a: 'Yes. We ask family members and pets to stay comfortably indoors while we treat the nest. Once the product has settled and dried (about 90 minutes to 2 hours), the area is completely safe for normal everyday use.'
    },
    {
      q: 'Do you need to cut into my walls to treat weep hole wasps?',
      a: 'No. We use professional extension lances that inject micro-fine dust directly through existing brick weep holes and expansion gaps into the cavity core, eradicating the nest with zero damage to your plasterboard.'
    },
    {
      q: 'What is your Colony Elimination Guarantee?',
      a: 'If any active wasp or bee activity persists at the treated nest location, our licensed technician returns and re-treats the area completely free of charge. Your peace of mind is 100% guaranteed.'
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
            <span className="text-[#DE744C] font-semibold">Bee &amp; Wasp Removal</span>
          </div>

          <a 
            href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-[#DE744C] hover:text-white font-bold transition"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
        </div>
      </nav>

      {/* 2. Hero Section: Direct Value & Immediate Quote Action */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#161820] via-[#14161B] to-[#121418] pt-10 pb-12 sm:pt-12 sm:pb-16 border-b border-[#232733]">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Headline & Action */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DE744C]/15 border border-[#DE744C]/30 text-[#DE744C] text-xs font-bold">
                <Flame className="w-3.5 h-3.5" />
                <span>Same-Day Melbourne Service Where Available</span>
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Fast, Safe Bee &amp; Wasp Nest Removal Melbourne
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                  Active wasps in your brick weep holes, eaves, pergolas, or garden? We provide safe, targeted eradication across Melbourne so your family and pets can enjoy your outdoor spaces with complete peace of mind.
                </p>
              </div>

              {/* 4 Clean Benefit Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-[#DE744C] font-bold text-xs sm:text-sm">⚡ Prompt</div>
                  <div className="text-[11px] text-slate-400">Same-Day Service</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm">🛡️ 100%</div>
                  <div className="text-[11px] text-slate-400">Guaranteed</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-amber-300 font-bold text-xs sm:text-sm">🐾 Pet-Safe</div>
                  <div className="text-[11px] text-slate-400">Once Dry (~90m)</div>
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
                  className="px-6 py-3 bg-[#DE744C] hover:bg-[#C85E36] active:bg-[#B8522B] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-[#DE744C]/25 flex items-center gap-2 cursor-pointer transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DETAILS.phone} Directly</span>
                </a>
                <span className="text-xs text-slate-400">Free upfront phone estimate</span>
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
                  defaultService="Bee & Wasp Nest Removal"
                  source="Bee & Wasp Service Page Hero"
                  variant="liquid-glass"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Melbourne Field Extractions & Methods (Real Proof) */}
      <section className="py-12 sm:py-16 bg-[#14161B] border-b border-[#232733]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-1.5 mb-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#DE744C] uppercase tracking-wider">
              Proven Melbourne Results
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Field Extractions &amp; Treatment Methods
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Every nest is different. Here is how our licensed technicians neutralize common Melbourne infestations safely without damaging your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fieldCases.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#1C1F27] border border-[#2B303C] overflow-hidden flex flex-col justify-between hover:border-[#DE744C]/50 transition-all duration-200"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-black/40">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 border border-white/10">
                      <MapPin className="w-3 h-3 text-[#DE744C]" />
                      <span>{item.suburb}</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-[#DE744C]/90 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.type}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 space-y-2.5">
                    <h3 className="font-bold text-white text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0 border-t border-white/5 mt-2">
                  <ul className="text-[11px] text-slate-400 space-y-1">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Ethical Honeybee Relocation Note */}
          <div className="mt-8 p-4 rounded-xl bg-[#181B22] border border-[#2B303C] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <span className="text-lg">🐝</span>
              <span>
                <strong className="text-white">Have a resting honeybee swarm?</strong> Whenever accessible, we prioritize safe swarm capture and live relocation to local Victorian beekeepers.
              </span>
            </div>
            <button
              onClick={() => onOpenCallback('Honeybee Swarm Relocation')}
              className="text-[#DE744C] font-bold hover:underline shrink-0 cursor-pointer"
            >
              Ask About Swarm Rescue →
            </button>
          </div>

        </div>
      </section>

      {/* 4. Treatment Options & Scope */}
      <section className="py-12 sm:py-16 bg-[#121418] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-1.5 mb-10">
            <span className="text-xs font-bold text-[#DE744C] uppercase tracking-wider">
              Transparent Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Treatment Options &amp; Coverage
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Quotes include our $50 new customer voucher applied upfront. Upfront price given over the phone before any technician visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            
            {/* Card 1 */}
            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#DE744C]">Standard Accessible</span>
                <h3 className="text-base font-black text-white">Eaves, Sheds &amp; Fences</h3>
                <p className="text-xs text-slate-400">
                  Single visible nest located on eaves, pergolas, or garden sheds.
                </p>
                <div className="pt-2">
                  <div className="text-sm font-black text-white flex items-center gap-1.5">
                    <span>Upfront Phone Quote</span>
                    <span className="text-[11px] font-bold text-emerald-400">($50 Voucher Included)</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Based on nest size &amp; accessibility</div>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full colony knockdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Physical nest removal included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Colony Guarantee</span>
                </li>
              </ul>
              <button
                onClick={() => onOpenCallback('Bee & Wasp - Eaves & Sheds')}
                className="w-full py-2 bg-[#1F232D] hover:bg-[#DE744C] text-white font-bold text-xs rounded-xl border border-[#343B4C] hover:border-[#DE744C] transition cursor-pointer"
              >
                Request Upfront Quote
              </button>
            </div>

            {/* Card 2 (Highlighted) */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#222733] to-[#181B22] border-2 border-[#DE744C] space-y-3 relative flex flex-col justify-between shadow-xl">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#FF9570]">Most Common in Melbourne</span>
                <h3 className="text-base font-black text-white">Brick Weep Holes &amp; Walls</h3>
                <p className="text-xs text-slate-300">
                  Wasps entering weep holes or wall voids without cutting walls.
                </p>
                <div className="pt-2">
                  <div className="text-sm font-black text-white flex items-center gap-1.5">
                    <span>Upfront Phone Quote</span>
                    <span className="text-[11px] font-bold text-emerald-400">($50 Voucher Included)</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Targeted internal weep hole treatment</div>
                </div>
              </div>
              <ul className="text-xs text-slate-200 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Targeted cavity dust injection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero damage to plasterboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Colony Guarantee</span>
                </li>
              </ul>
              <button
                onClick={() => onOpenCallback('Bee & Wasp - Cavity Injection')}
                className="w-full py-2 bg-[#DE744C] hover:bg-[#C85E36] text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
              >
                Request Cavity Quote
              </button>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#DE744C]">Underground / Swarms</span>
                <h3 className="text-base font-black text-white">Garden Burrow or Swarm</h3>
                <p className="text-xs text-slate-400">
                  Subterranean ground nests or live honeybee swarm relocation.
                </p>
                <div className="pt-2">
                  <div className="text-sm font-black text-white flex items-center gap-1.5">
                    <span>Upfront Phone Quote</span>
                    <span className="text-[11px] font-bold text-emerald-400">($50 Voucher Included)</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Subterranean or swarm inspection</div>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Deep soil chamber treatment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Ethical bee relocation options</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Colony Guarantee</span>
                </li>
              </ul>
              <button
                onClick={() => onOpenCallback('Bee & Wasp - Ground/Swarm')}
                className="w-full py-2 bg-[#1F232D] hover:bg-[#DE744C] text-white font-bold text-xs rounded-xl border border-[#343B4C] hover:border-[#DE744C] transition cursor-pointer"
              >
                Request Swarm / Burrow Quote
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Concise Trust & Guarantee Reassurance Bar */}
      <section className="py-8 bg-[#161820] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1D24] border border-[#2B303C]">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-white block font-bold">Colony Elimination Guarantee</strong>
                <span className="text-slate-400">Free return re-treatment if activity persists</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1D24] border border-[#2B303C]">
              <HeartHandshake className="w-5 h-5 text-[#DE744C] shrink-0" />
              <div>
                <strong className="text-white block font-bold">Licensed Victorian Technicians</strong>
                <span className="text-slate-400">Certified protective containment gear</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1D24] border border-[#2B303C]">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <strong className="text-white block font-bold">Pet &amp; Child Safe Once Dry</strong>
                <span className="text-slate-400">Safe for normal yard use after ~90 minutes</span>
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
            <p className="text-xs text-slate-400">Everything you need to know about bee and wasp nest eradication</p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-xl border transition-all ${
                    isOpen 
                      ? 'border-[#DE744C] bg-[#1A1D24]' 
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
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#DE744C]' : ''}`} />
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
