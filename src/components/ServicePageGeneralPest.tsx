import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Phone, 
  CheckCircle2, 
  ChevronDown, 
  ArrowLeft, 
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Check,
  Info,
  Camera,
  Layers
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';
import { QuoteRequestForm } from './QuoteRequestForm';

interface ServicePageGeneralPestProps {
  onOpenCallback: (service?: string) => void;
  onNavigateHome: () => void;
  onNavigateService?: (serviceId: string) => void;
}

type ZoneId = 'roof-void' | 'internal-skirting' | 'subfloor' | 'exterior-perimeter';
type SeasonId = 'spring' | 'summer' | 'autumn' | 'winter';

export const ServicePageGeneralPest: React.FC<ServicePageGeneralPestProps> = ({
  onOpenCallback,
  onNavigateHome,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeZone, setActiveZone] = useState<ZoneId>('roof-void');
  const [activeSeason, setActiveSeason] = useState<SeasonId>('spring');

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const scrollToQuote = () => {
    const el = document.getElementById('general-pest-booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCallback('General Pest Treatment');
    }
  };

  const zones: Record<ZoneId, {
    title: string;
    subtitle: string;
    image: string;
    imageCaption: string;
    pests: string;
    description: string;
    benefit: string;
  }> = {
    'roof-void': {
      title: 'Zone 1: Roof Void & Ceiling',
      subtitle: 'Attic space & insulation batts',
      image: '/gallery/15.jpeg',
      imageCaption: 'Real Melbourne ceiling cavity inspection showing insulation batts & wiring joists',
      pests: 'Spiders, Silverfish, American Cockroaches',
      description: 'We treat the ceiling cavity with an electrostatically charged micro-fine dust that settles over timber trusses and insulation batts.',
      benefit: 'Stops spiders and cockroaches nesting overhead before they drop into living rooms or bedrooms.'
    },
    'internal-skirting': {
      title: 'Zone 2: Internal Baseboards',
      subtitle: 'Living areas, kitchens & wet spaces',
      image: '/gallery/8.jpeg',
      imageCaption: 'Clean internal perimeter treatment along baseboards and kitchen cabinetry',
      pests: 'Black House Ants, Cockroaches, Silverfish',
      description: 'A precision, low-odour micro-encapsulated spray applied along internal skirting boards, under sinks, and behind laundry and kitchen appliances.',
      benefit: 'Non-staining, odourless, and 100% safe for toddlers and pets once dry (about 90 minutes).'
    },
    'subfloor': {
      title: 'Zone 3: Subfloor & Foundation',
      subtitle: 'Under-house crawl space & brick piers',
      image: '/gallery/14.jpeg',
      imageCaption: 'Under-house subfloor foundation masonry & crawl space barrier treatment',
      pests: 'Crawling Spiders, Moisture Insects, Ground Pests',
      description: 'For homes with suspended timber floors, we treat foundation piers and subfloor soil where insects shelter from heat and rain.',
      benefit: 'Creates a ground-level barrier that cuts off entry pathways under your floorboards.'
    },
    'exterior-perimeter': {
      title: 'Zone 4: Brick Perimeter & Weep Holes',
      subtitle: 'Exterior walls, windows & brick vents',
      image: '/gallery/11.jpeg',
      imageCaption: 'Exterior brick foundation and entry threshold perimeter treatment',
      pests: 'Wasps, Spiders on Eaves, Ant Trails',
      description: 'A 1-metre barrier up external brickwork and around window frames, plus specialized dust injected into every brick weep hole.',
      benefit: 'Bonds to brickwork and withstands Melbourne weather. Stops incoming pests at the property boundary.'
    }
  };

  const seasons: Record<SeasonId, {
    name: string;
    period: string;
    commonActivity: string;
    howWeProtect: string;
  }> = {
    'spring': {
      name: 'Spring',
      period: 'Sept – Nov',
      commonActivity: 'Ants forming kitchen trails, garden spider egg sacs hatching, and queen wasps searching for nesting sites.',
      howWeProtect: 'Early-season perimeter barriers intercept pests before they establish large colonies inside your home.'
    },
    'summer': {
      name: 'Summer',
      period: 'Dec – Feb',
      commonActivity: 'Cockroaches seeking kitchen moisture, Redback spiders under outdoor furniture, and flying insects around eaves.',
      howWeProtect: 'Full 4-zone treatment targeting appliance voids, weep holes, and roof cavities to flush out hidden summer pests.'
    },
    'autumn': {
      name: 'Autumn',
      period: 'Mar – May',
      commonActivity: 'Dropping outdoor temperatures drive spiders and rodents indoors seeking warmth in roof insulation.',
      howWeProtect: 'Attic dusting and weep hole treatments stop pests moving inside for the winter months.'
    },
    'winter': {
      name: 'Winter',
      period: 'Jun – Aug',
      commonActivity: 'Silverfish sheltering in wardrobes and books, moisture pests in subfloors and laundry areas.',
      howWeProtect: 'Targeted baseboard and subfloor applications keep indoor storage areas clean and protected.'
    }
  };

  const faqs = [
    {
      q: 'Do we need to vacate our home during treatment?',
      a: 'We recommend popping out for about 1.5 to 2 hours while the internal skirting spray is applied and dries. Once dry, our certified low-odour, APVMA-registered products are completely safe for your family and pets to return to.'
    },
    {
      q: 'Is the treatment safe for dogs, cats, and pets?',
      a: 'Yes, once completely dry. Our formulations are micro-encapsulated synthetic pyrethroids designed to target insect nervous systems with minimal mammalian toxicity. We recommend keeping pets off treated surfaces until dry (approx. 90 minutes).'
    },
    {
      q: 'Why avoid supermarket bug bombs and aerosols?',
      a: 'Store-bought cans contain repellents that scatter insects deeper into wall cavities and ceiling insulation. Within a couple of weeks, pests return spread over a wider area. Professional treatments eliminate the colony at the source without dispersing them.'
    },
    {
      q: 'Why might I see sluggish pests in the first 48 hours?',
      a: 'This is the normal "flush-out effect". The treatment penetrates dark hiding spots, agitating resting insects out into the open where they quickly succumb. Seeing pests in the first few days confirms the product is actively working.'
    },
    {
      q: 'What is covered under your 6-Month Warranty?',
      a: 'Our warranty covers spiders, cockroaches, black house ants, and silverfish. If any covered pests return within 6 months, simply give us a call and a technician will re-treat the area completely free of charge.'
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
            <span className="text-emerald-400 font-semibold">General Pest Control</span>
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

      {/* 2. Reassuring Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#161820] via-[#14161B] to-[#121418] pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-[#232733]">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline & Action */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>6-Month Warranty • Spiders, Ants &amp; Roaches</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Complete Home Defense: Spiders, Ants &amp; Cockroaches
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  One thorough visit protecting your roof void, internal skirting boards, and external perimeter. Eliminates pests at the source with an invisible barrier backed by our 6-month free re-treatment warranty.
                </p>
              </div>

              {/* 4 Clean Benefit Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm">🛡️ 6-Month</div>
                  <div className="text-[11px] text-slate-400">Warranty Included</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-[#DE744C] font-bold text-xs sm:text-sm">🏠 4-Zone</div>
                  <div className="text-[11px] text-slate-400">Whole Home Shield</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-amber-300 font-bold text-xs sm:text-sm">🐾 Pet-Safe</div>
                  <div className="text-[11px] text-slate-400">Once Dry (1.5h)</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-white font-bold text-xs sm:text-sm">🏷️ $50 Off</div>
                  <div className="text-[11px] text-slate-400">Auto-Applied</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="px-6 py-3.5 bg-[#DE744C] hover:bg-[#C85E36] active:bg-[#B8522B] text-white font-bold text-sm rounded-xl shadow-md shadow-[#DE744C]/25 flex items-center justify-center gap-2 cursor-pointer transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DETAILS.phone} For A Quote</span>
                </a>

                <button
                  onClick={scrollToQuote}
                  className="px-6 py-3.5 bg-[#1E222A] hover:bg-[#282E39] text-[#F8F9FA] font-bold text-sm rounded-xl border border-[#303746] flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-[#DE744C]" />
                  <span>Get Upfront Quote</span>
                </button>
              </div>

            </div>

            {/* Right Card: Whole-Home Snapshot */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#1A1D24] border border-[#2B303C] p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    What's Included
                  </span>
                  <span className="text-xs text-slate-400">APVMA Approved</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Roof Void Permethrin Dusting</strong>
                      <span className="text-slate-400 text-[11px]">Stops spiders &amp; pests living above ceilings.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Internal Skirting Board Micro-Spray</strong>
                      <span className="text-slate-400 text-[11px]">Low-odour, child- and pet-safe once dry.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Exterior Perimeter &amp; Weep Holes</strong>
                      <span className="text-slate-400 text-[11px]">Stops incoming pests before they cross inside.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">6-Month Free Re-Treatment Guarantee</strong>
                      <span className="text-slate-400 text-[11px]">If pests return, so do we — completely free.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={scrollToQuote}
                    className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer shadow-sm"
                  >
                    <span>Request Fixed Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Interactive 4-Zone Defense Architecture (Visual Schematic with Real Photos) */}
      <section className="py-14 sm:py-16 bg-[#161820] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Whole-Home Defense</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              The Legend 4-Zone Defense System
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Insects don't just walk on floors — they breed in roof voids, weep holes, and subfloors. Click each zone to see real field treatment areas:
            </p>
          </div>

          {/* 4 Zone Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {(Object.keys(zones) as ZoneId[]).map((id) => {
              const z = zones[id];
              const isSelected = activeZone === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveZone(id)}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                    isSelected 
                      ? 'bg-[#1F232D] border-emerald-500 text-white shadow-md' 
                      : 'bg-[#181B22] border-[#2A2F3D] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <div className="text-xs font-bold">{z.title.split(':')[0]}</div>
                  <div className="text-[10px] text-slate-400 truncate">{z.title.split(':')[1]}</div>
                </button>
              );
            })}
          </div>

          {/* Active Zone Detail Card With Real Photo */}
          {(() => {
            const z = zones[activeZone];
            return (
              <div className="p-6 sm:p-7 rounded-2xl bg-[#1A1D24] border border-[#2D3342] shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Real Photo Thumbnail */}
                  <div className="md:col-span-5 relative group overflow-hidden rounded-xl border border-white/10 aspect-[4/3] bg-black">
                    <img 
                      src={z.image} 
                      alt={z.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-[10px] font-bold text-white px-2.5 py-1 rounded-md flex items-center gap-1 border border-white/10">
                      <Camera className="w-3 h-3 text-emerald-400" />
                      <span>{z.title.split(':')[0]}</span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2.5 text-[10px] text-slate-200">
                      {z.imageCaption}
                    </div>
                  </div>

                  {/* Text Details & Treatment */}
                  <div className="md:col-span-7 space-y-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/10">
                      <div>
                        <h3 className="text-lg font-black text-white">{z.title}</h3>
                        <span className="text-xs text-emerald-400 font-semibold">{z.subtitle}</span>
                      </div>
                      <span className="text-[11px] text-slate-300 bg-[#14161B] px-2.5 py-0.5 rounded-full border border-white/5">
                        Targets: {z.pests}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-xs">
                      <div className="space-y-1 bg-[#14161B] p-3.5 rounded-xl border border-white/5">
                        <strong className="text-white block">How We Treat It:</strong>
                        <p className="text-slate-300 leading-relaxed">{z.description}</p>
                      </div>
                      <div className="space-y-1 bg-[#14161B] p-3.5 rounded-xl border border-white/5">
                        <strong className="text-emerald-400 block">Your Peace Of Mind:</strong>
                        <p className="text-slate-300 leading-relaxed">{z.benefit}</p>
                      </div>
                    </div>

                    <div className="pt-1">
                      <button
                        onClick={scrollToQuote}
                        className="py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition shadow-xs cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <span>Book 4-Zone Treatment</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 4. Simple Scope: Covered vs Specialist */}
      <section className="py-14 sm:py-16 bg-[#121418] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              What's Covered Under Our 6-Month Warranty
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear, honest service inclusions with zero guesswork:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            
            {/* Covered */}
            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-emerald-500/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs pb-2 border-b border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% Covered Under 6-Month Warranty</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Spiders:</strong> Redbacks, White-tails, Black House, Huntsman</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Cockroaches:</strong> Common Australian &amp; American roaches</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Ants:</strong> Black house ants invading pantries and pavers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Silverfish:</strong> Fabric &amp; paper pests in wardrobes</span>
                </li>
              </ul>
            </div>

            {/* Specialist add-ons */}
            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3">
              <div className="flex items-center gap-2 text-slate-400 font-bold text-xs pb-2 border-b border-white/10">
                <Info className="w-4 h-4 text-amber-400" />
                <span>Specialist Add-Ons Available Upon Request</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>German Cockroaches:</strong> Dedicated 2-stage kitchen baiting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Rodents (Rats &amp; Mice):</strong> Locked exterior &amp; attic bait stations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Termite Inspections:</strong> AS 3660.2 timber pest inspections</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Dead Animal Removal:</strong> Sanitary attic extraction &amp; deodorisation</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Melbourne Seasons Guide (Light & Helpful) */}
      <section className="py-14 sm:py-16 bg-[#161820] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Melbourne Seasonal Pest Activity
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Victoria’s weather shapes pest behavior throughout the year:
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 no-scrollbar">
            {(Object.keys(seasons) as SeasonId[]).map((id) => {
              const s = seasons[id];
              const isSelected = activeSeason === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveSeason(id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
                  }`}
                >
                  <span>{s.name}</span>
                  <span className="text-[10px] block opacity-80">{s.period}</span>
                </button>
              );
            })}
          </div>

          {(() => {
            const current = seasons[activeSeason];
            return (
              <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-[#1A1D24] border border-[#2D3342] shadow-lg max-w-4xl mx-auto space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-xs font-bold text-emerald-400">{current.name} in Melbourne ({current.period})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div>
                    <strong className="text-white block mb-1">Common Pest Activity:</strong>
                    <p className="leading-relaxed">{current.commonActivity}</p>
                  </div>
                  <div>
                    <strong className="text-emerald-400 block mb-1">How Legend Protects You:</strong>
                    <p className="leading-relaxed">{current.howWeProtect}</p>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 6. Treatment Day: Simple 3 Steps */}
      <section className="py-14 sm:py-16 bg-[#121418] border-b border-[#232733]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              What To Expect On Treatment Day
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Simple, smooth, and hassle-free from start to finish:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-2">
              <span className="text-xs font-bold text-emerald-400">Step 01</span>
              <h3 className="font-bold text-sm text-white">Quick Prep</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pick up toys from floors, cover pet water/food bowls, and ensure easy access to skirting boards.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-2">
              <span className="text-xs font-bold text-emerald-400">Step 02</span>
              <h3 className="font-bold text-sm text-white">45-Min Treatment</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our licensed technician applies the 4-zone barrier across roof void, baseboards, and exterior weep holes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-2">
              <span className="text-xs font-bold text-emerald-400">Step 03</span>
              <h3 className="font-bold text-sm text-white">Safe Re-Entry (~90 mins)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Once dry, the products are non-staining, odour-free, and 100% safe for children and pets.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Transparent Home Size Pricing */}
      <section className="py-14 sm:py-16 bg-[#161820] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Transparent Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              General Pest Treatment Packages &amp; Scope
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Quotes include our $50 new customer voucher applied upfront. Upfront price tailored to your home layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            
            {/* Tier 1 */}
            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#DE744C]">Units &amp; Townhouses</span>
                <h3 className="text-base font-black text-white">1–2 Bedroom Home</h3>
                <p className="text-xs text-slate-400">
                  Ideal for apartments, units, or compact single-level properties.
                </p>
                <div className="pt-2">
                  <div className="text-sm font-black text-white flex items-center gap-1.5">
                    <span>Upfront Phone Quote</span>
                    <span className="text-[11px] font-bold text-emerald-400">($50 Voucher Included)</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Tailored to apartment &amp; unit layouts</div>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Internal skirting micro-spray</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Entry perimeter barrier</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>6-Month Warranty</span>
                </li>
              </ul>
              <button
                onClick={scrollToQuote}
                className="w-full py-2 bg-[#1F232D] hover:bg-[#DE744C] text-white font-bold text-xs rounded-xl border border-[#343B4C] hover:border-[#DE744C] transition cursor-pointer"
              >
                Book Unit Treatment
              </button>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#222733] to-[#181B22] border-2 border-emerald-500 space-y-3 relative flex flex-col justify-between shadow-xl">
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-400">Most Popular in Melbourne</span>
                <h3 className="text-base font-black text-white">3–4 Bedroom Family Home</h3>
                <p className="text-xs text-slate-300">
                  Complete 4-Zone treatment covering roof void, internal skirting, and perimeter.
                </p>
                <div className="pt-2">
                  <div className="text-sm font-black text-white flex items-center gap-1.5">
                    <span>Upfront Phone Quote</span>
                    <span className="text-[11px] font-bold text-emerald-400">($50 Voucher Included)</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Full 4-zone protection tailored to your floorplan</div>
                </div>
              </div>
              <ul className="text-xs text-slate-200 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full 4-Zone Defense Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Roof void dusting + weep holes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>6-Month Free Re-Treatment Warranty</span>
                </li>
              </ul>
              <button
                onClick={scrollToQuote}
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
              >
                Book 3–4 Bed Treatment
              </button>
            </div>

            {/* Tier 3 */}
            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#DE744C]">Large / Double Storey</span>
                <h3 className="text-base font-black text-white">5+ Bed / Double Storey</h3>
                <p className="text-xs text-slate-400">
                  Substantial double-storey properties, acreage, or large homes.
                </p>
                <div className="pt-2">
                  <div className="text-sm font-black text-white flex items-center gap-1.5">
                    <span>Upfront Phone Quote</span>
                    <span className="text-[11px] font-bold text-emerald-400">($50 Voucher Included)</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Multi-level &amp; large property coverage</div>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Multi-level roof voids &amp; balconies</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Extended perimeter barrier</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>6-Month Warranty</span>
                </li>
              </ul>
              <button
                onClick={scrollToQuote}
                className="w-full py-2 bg-[#1F232D] hover:bg-[#DE744C] text-white font-bold text-xs rounded-xl border border-[#343B4C] hover:border-[#DE744C] transition cursor-pointer"
              >
                Book Large Home Treatment
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Clean Booking Section */}
      <section id="general-pest-booking-section" className="py-14 sm:py-20 bg-[#121418] border-b border-[#232733] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-b from-[#1C1F27] to-[#14161B] border border-[#2D3342] p-6 sm:p-9 shadow-2xl relative overflow-hidden">
            <div className="max-w-xl mx-auto text-center space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>$50 New Customer Voucher Auto-Credited</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Book General Pest Treatment
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Receive an immediate upfront quote. Pay upon completion.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <QuoteRequestForm
                defaultService="General Pest Treatment"
                source="General Pest Dedicated Page Booking"
                variant="dark"
              />
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#DE744C]" />
                <span>Licensed Victorian Pest Technicians</span>
              </div>
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="font-bold text-[#DE744C] hover:underline"
              >
                Or Call {COMPANY_DETAILS.phone} Directly
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 9. Real Customer Reviews */}
      <section className="py-14 sm:py-16 bg-[#161820]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-1 mb-8">
            <h2 className="text-2xl font-black text-white">
              Melbourne General Pest Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-2.5">
              <div className="flex text-amber-400 text-xs">★★★★★</div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Had an ongoing ant issue in our kitchen and spiders on the back patio. Legend treated the roof cavity, skirting boards, and weep holes. Haven't seen a single insect in months."
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-bold text-white flex justify-between">
                <span>Marcus V.</span>
                <span className="text-emerald-400">Tarneit</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-2.5">
              <div className="flex text-amber-400 text-xs">★★★★★</div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Very punctual, polite, and explained the pet safety precautions clearly. Low-odour products that dried quickly. The 6-month warranty gave us great confidence."
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-bold text-white flex justify-between">
                <span>Belinda C.</span>
                <span className="text-emerald-400">Werribee</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. Concise FAQs */}
      <section className="py-14 sm:py-16 bg-[#121418] border-t border-[#232733]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl font-black text-white">
              Frequently Asked Questions
            </h2>
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

      {/* 11. Clean Bottom Call Bar */}
      <section className="py-10 bg-gradient-to-r from-[#1A2222] via-[#14161C] to-[#1A2222] border-t border-emerald-500/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready For 6 Months Of Pest-Free Peace Of Mind?
            </h3>
            <p className="text-xs text-slate-300">
              Same-day and next-day slots open across Melbourne. Call {COMPANY_DETAILS.phone}.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={scrollToQuote}
              className="px-5 py-3 rounded-xl bg-[#1A1D24] hover:bg-[#252A36] text-white font-bold text-xs border border-[#343B4C] transition cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
