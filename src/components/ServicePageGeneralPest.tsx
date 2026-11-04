import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Clock, 
  Phone, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowLeft, 
  Bug, 
  HeartHandshake,
  Layers,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Sparkle
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
  const [activeZoneTab, setActiveZoneTab] = useState<'zone1' | 'zone2' | 'zone3' | 'zone4'>('zone1');

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

  const generalPestFaqs = [
    {
      q: 'Do we need to vacate our home during the general pest treatment?',
      a: 'We recommend vacating your home for approximately 1.5 to 2 hours while the internal skirting spray is applied and dries. Once completely dry, our certified low-odour, APVMA-registered formulations are non-volatile and 100% safe for adults, children, and pets to return to.'
    },
    {
      q: 'Is the treatment safe for curious dogs, cats, and indoor pets?',
      a: 'Yes, once completely dry. Our formulations are micro-encapsulated synthetic pyrethroids designed specifically to target insect nervous systems with minimal mammalian toxicity. We advise covering pet water/food bowls and keeping pets outside or off wet baseboards during application until completely dry.'
    },
    {
      q: 'Why do supermarket surface sprays and bug bombs make pest problems worse?',
      a: 'Store-bought aerosols and bug bombs contain strong chemical repellents. While they kill a few visible scout ants or cockroaches on contact, the surviving colony detects the airborne chemical and panics. This triggers "colony budding", causing the queen to split her colony and scatter into multiple deeper nests inside your wall cavities and ceiling insulation. Within 2 to 3 weeks, the infestation returns with greater severity.'
    },
    {
      q: 'Why might I see more dead or sluggish pests in the first 48 hours?',
      a: 'This is known as the "active flush-out effect". Our micro-encapsulated formulations penetrate deep into skirting board cracks, roof cavities, and weep holes, agitating resting insects out of their dark hiding spots before neutralizing them. Seeing dead or dying pests within the first 1 to 5 days is proof that the treatment is actively purging the nest.'
    },
    {
      q: 'What is covered under the 6-Month Treatment Warranty?',
      a: 'Our general pest treatment covers all major household invaders: spiders (including Redbacks and White-tails), cockroaches, black house ants, and silverfish. If any covered pests persist or return within 6 months, a Legend technician returns to your home and re-treats the area completely free of charge.'
    },
    {
      q: 'Will rain wash away the exterior perimeter spray?',
      a: 'No. Once our exterior perimeter barrier has dried (which takes about 30–45 minutes in Melbourne weather), the micro-capsules bond electrostatically to brick, concrete pavers, and timber. Normal Victorian rain showers will not degrade or wash away the barrier.'
    }
  ];

  return (
    <div className="bg-[#121418] text-slate-100 min-h-screen selection:bg-[#DE744C] selection:text-white">
      
      {/* Sleek Breadcrumb Bar */}
      <nav className="bg-[#0D0F13] border-b border-[#222632] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-2 text-slate-400">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#DE744C] transition flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Services</span>
            <span className="text-slate-600">/</span>
            <span className="text-[#DE744C] font-bold">General Pest Control</span>
          </div>

          <a 
            href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-[#DE744C] hover:text-white font-bold transition"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Direct Booking:</span>
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. BESPOKE SERVICE HERO: Editorial, Whole-Home Defense                    */}
      {/* (NOT a duplicate of the landing page hero form layout)                    */}
      {/* ========================================================================= */}
      <section 
        id="hero-section"
        className="relative overflow-hidden bg-gradient-to-b from-[#14161B] via-[#161820] to-[#121418] pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#232733]"
      >
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-[#DE744C]/15 blur-[140px] rounded-full pointer-events-none -z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Focused Service Headline, Narrative & Trust Bar */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DE744C]/15 border border-[#DE744C]/35 text-[#DE744C] text-xs font-black uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-[#DE744C]" />
                <span>Flagship 4-Zone Internal &amp; External Eradication</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  Complete Home Defense: Spiders, Roaches &amp; Ants
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                  One thorough internal skirting, roof cavity, subfloor, and external perimeter treatment that eliminates hidden colonies at the root — backed by our 6-month free re-treatment warranty.
                </p>
              </div>

              {/* 4 Sleek Key Highlights Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-emerald-400 font-black text-xs sm:text-sm">🛡️ 6-Month</div>
                  <div className="text-[10.5px] text-slate-400 font-medium">Warranty Included</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-[#DE744C] font-black text-xs sm:text-sm">🏠 4-Zone</div>
                  <div className="text-[10.5px] text-slate-400 font-medium">Whole Home Shield</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-amber-300 font-black text-xs sm:text-sm">🐾 Pet-Safe</div>
                  <div className="text-[10.5px] text-slate-400 font-medium">Once Dry (1.5h)</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-white font-black text-xs sm:text-sm">🏷️ $50 Off</div>
                  <div className="text-[10.5px] text-slate-400 font-medium">Auto-Applied</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="px-7 py-3.5 bg-[#DE744C] hover:bg-[#C85E36] active:bg-[#B8522B] text-white font-black text-sm rounded-xl shadow-lg shadow-[#DE744C]/30 flex items-center justify-center gap-2 cursor-pointer transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DETAILS.phone} For Instant Fixed Price</span>
                </a>

                <button
                  onClick={scrollToQuote}
                  className="px-6 py-3.5 bg-[#1E222A] hover:bg-[#282E39] text-[#F8F9FA] font-bold text-sm rounded-xl border border-[#303746] flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-[#DE744C]" />
                  <span>Book Treatment / Get Quote</span>
                </button>
              </div>

            </div>

            {/* Right Column: Interactive Whole-Home Defense Snapshot (NOT a duplicate form) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#1A1D24] border border-[#2E3342] p-6 shadow-2xl space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                      Whole-Home Barrier
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">APVMA Certified</span>
                </div>

                <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                  <div className="p-3 rounded-xl bg-[#14161C] border border-white/10 flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-[#DE744C] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Roof Void Permethrin Dusting:</strong>
                      Neutralizes spiders, silverfish, and roaches nesting above bedroom ceiling insulation.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#14161C] border border-white/10 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Internal Skirting Micro-Barrier:</strong>
                      Low-odour, child- and pet-safe micro-encapsulated spray along baseboards and appliances.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#14161C] border border-white/10 flex items-start gap-2.5">
                    <Sparkle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Exterior Perimeter &amp; Weep Holes:</strong>
                      1m wall barrier + insecticidal dust inside brick weep holes stops incoming migration.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={scrollToQuote}
                    className="w-full py-2.5 px-3 bg-[#DE744C] hover:bg-[#C85E36] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <span>Request Fixed Upfront Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE REAL SUFFERING: Homeowner Distress & Hygiene Anxiety                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#161820] border-b border-[#232733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#DE744C] bg-[#DE744C]/15 border border-[#DE744C]/30 px-3 py-1 rounded-full">
              The Psychological Toll of Pests
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Why Pests Inflict Chronic Disgust, Anxiety &amp; Sleeplessness
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Sharing your living spaces with unseen crawlers isn't just unpleasant — it violates your home's hygiene, creates embarrassment in front of guests, and puts family health at risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <div className="rounded-2xl bg-[#1C1F27] border border-[#2B303C] p-6 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                <Bug className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-white">
                The Midnight Kitchen Scurry
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Flipping on the kitchen light for a glass of water and watching cockroaches dash across prep benchtops, cutlery drawers, and kettle bases. The persistent feeling of disgust that where you cook is secretly contaminated every night.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-amber-300 border-t border-white/5">
                Cockroaches track Salmonella &amp; E. coli, while cast skins trigger childhood asthma.
              </div>
            </div>

            {/* Box 2 */}
            <div className="rounded-2xl bg-[#1C1F27] border border-[#2B303C] p-6 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-white">
                Venomous Spiders Near Kids &amp; Beds
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Finding venomous Redbacks under outdoor patio chairs, children's scooters, and barbecue covers. Worse still, White-tailed spiders wandering into laundry baskets, folded towels, and bedsheets, causing constant paranoia at bedtime.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-red-300 border-t border-white/5">
                Spider bites cause intense localized necrotic pain, blistering, and emergency medical visits.
              </div>
            </div>

            {/* Box 3 */}
            <div className="rounded-2xl bg-[#1C1F27] border border-[#2B303C] p-6 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-white">
                Relentless Ant Invasions in Food
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Thousands of tiny black house ants marching in endless lines across kitchen windows, infiltrating sugar containers, pet food bowls, and nesting inside dishwasher seals and power outlets.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#FF9570] border-t border-white/5">
                Crushing ants releases formic acid odours, while supermarket sprays scatter the nest.
              </div>
            </div>

          </div>

          {/* Colony Budding Warning */}
          <div className="mt-10 p-5 rounded-2xl bg-[#1C1A20] border border-amber-500/30 text-slate-300 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center justify-center md:justify-start gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>The Supermarket Aerosol Trap: "Colony Budding"</span>
              </span>
              <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                Over-the-counter surface sprays act as fast chemical repellents. While they kill 10 visible scout pests, the surviving nest panics and the queen splits the colony into multiple smaller satellite nests deep within your ceiling and walls, doubling the infestation within weeks.
              </p>
            </div>
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="shrink-0 px-5 py-2.5 bg-[#DE744C] hover:bg-[#C85E36] text-white font-bold text-xs rounded-xl shadow-md transition"
            >
              Get Root-Cause Eradication • {COMPANY_DETAILS.phone}
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE 4-ZONE SHIELD BLUEPRINT                                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#121418] border-b border-[#232733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              The Legend 4-Zone Defense System
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select a zone to explore how our certified technicians treat every tier of your property.
            </p>
          </div>

          {/* Interactive Zone Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            <button
              onClick={() => setActiveZoneTab('zone1')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                activeZoneTab === 'zone1'
                  ? 'bg-[#DE744C] text-white shadow-md'
                  : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
              }`}
            >
              Zone 1: Roof Cavity
            </button>
            <button
              onClick={() => setActiveZoneTab('zone2')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                activeZoneTab === 'zone2'
                  ? 'bg-[#DE744C] text-white shadow-md'
                  : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
              }`}
            >
              Zone 2: Internal Skirting
            </button>
            <button
              onClick={() => setActiveZoneTab('zone3')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                activeZoneTab === 'zone3'
                  ? 'bg-[#DE744C] text-white shadow-md'
                  : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
              }`}
            >
              Zone 3: Subfloor &amp; Foundation
            </button>
            <button
              onClick={() => setActiveZoneTab('zone4')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                activeZoneTab === 'zone4'
                  ? 'bg-[#DE744C] text-white shadow-md'
                  : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
              }`}
            >
              Zone 4: Exterior &amp; Weep Holes
            </button>
          </div>

          {/* Zone Detail Box */}
          <div className="max-w-4xl mx-auto mt-6 p-6 sm:p-8 rounded-2xl bg-[#1A1D24] border border-[#2D3342] shadow-xl">
            {activeZoneTab === 'zone1' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#DE744C] font-black text-sm">
                  <span>Zone 1: Roof Cavity &amp; Attic Permethrin Dusting</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Spiders, cockroaches, and silverfish breed undisturbed in warm roof insulation right above your ceiling plaster. We blow electrostatically charged micro-fine permethrin dust across the entire roof void. The charged particles cling to insulation fibers and rafters, neutralizing nesting populations before they can drop down into your living areas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Reaches deep hidden roof breeding harborages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Electrostatically adheres to insulation</span>
                  </div>
                </div>
              </div>
            )}

            {activeZoneTab === 'zone2' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#DE744C] font-black text-sm">
                  <span>Zone 2: Precision Internal Skirting &amp; Wet Areas</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We apply low-odour, child- and pet-safe (once dry) micro-encapsulated liquid formulations along interior baseboards, behind heavy appliances (refrigerators, dishwashers, ovens), and around plumbing penetrations. Unlike generic sprays, our micro-capsules do not stain walls or leave harsh chemical smells.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% safe for kids and pets once dry (1.5–2 hours)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Non-staining, zero lingering chemical odour</span>
                  </div>
                </div>
              </div>
            )}

            {activeZoneTab === 'zone3' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#DE744C] font-black text-sm">
                  <span>Zone 3: Subfloor &amp; Foundation Defense</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  For Melbourne properties with subfloors, damp soil lines and foundation stumps provide the perfect haven for spiders and cockroaches sheltering from Victoria's weather fluctuations. We inspect and treat these dark subfloor migration vectors beneath your floorboards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Eliminates damp moisture-loving pests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Stops pests ascending through floor joins</span>
                  </div>
                </div>
              </div>
            )}

            {activeZoneTab === 'zone4' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#DE744C] font-black text-sm">
                  <span>Zone 4: High-Volume External Perimeter &amp; Weep Holes</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We lay a continuous, weather-resistant residual barrier 1 metre up the external walls and 1 metre out across paths and garden edges. We then inject protective insecticidal dust into every single brick weep hole, window frame, and eave line to establish an impenetrable exterior barrier.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Rain-resistant once dry (bonds to masonry)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Weep hole dusting blocks cavity infiltration</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Non-Repellent Transfer Chemistry Callout */}
          <div className="max-w-4xl mx-auto mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#1C1F27] to-[#161820] border border-[#DE744C]/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#DE744C] flex items-center justify-center md:justify-start gap-1.5">
                <Sparkle className="w-4 h-4" />
                <span>The Non-Repellent Transfer Advantage</span>
              </span>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Our micro-encapsulated products are undetectable to pests. Instead of scattering away, pests walk across the microscopic capsules, pick up the particles on their bodies, and carry them deep into the colony, passing the lethal dose to the queen and breeding nymphs through natural grooming.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-block px-3.5 py-1.5 rounded-xl bg-[#DE744C]/15 border border-[#DE744C]/30 text-[#DE744C] font-black text-xs">
                Colony Destruction At The Source
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COVERED PESTS DIAGNOSTIC GRID                                          */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#161820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Pests Covered Under Your 6-Month Warranty
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              One comprehensive treatment protecting your property against Melbourne's primary invaders.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            
            <div className="p-4 rounded-xl bg-[#1C1F27] border border-[#2B303C] space-y-2">
              <span className="text-2xl">🕷️</span>
              <h4 className="text-xs sm:text-sm font-black text-white">Spiders</h4>
              <p className="text-[11px] text-slate-400">Redbacks, White-tails &amp; Black House.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C1F27] border border-[#2B303C] space-y-2">
              <span className="text-2xl">🪳</span>
              <h4 className="text-xs sm:text-sm font-black text-white">Cockroaches</h4>
              <p className="text-[11px] text-slate-400">American, Australian &amp; German roaches.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C1F27] border border-[#2B303C] space-y-2">
              <span className="text-2xl">🐜</span>
              <h4 className="text-xs sm:text-sm font-black text-white">Ants</h4>
              <p className="text-[11px] text-slate-400">Black house ants &amp; coastal browns.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C1F27] border border-[#2B303C] space-y-2">
              <span className="text-2xl">🐟</span>
              <h4 className="text-xs sm:text-sm font-black text-white">Silverfish</h4>
              <p className="text-[11px] text-slate-400">Wardrobes, bookcases &amp; ceilings.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C1F27] border border-[#2B303C] space-y-2">
              <span className="text-2xl">🐛</span>
              <h4 className="text-xs sm:text-sm font-black text-white">Carpet Beetles</h4>
              <p className="text-[11px] text-slate-400">Protects wool rugs and carpets.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C1F27] border border-[#2B303C] space-y-2">
              <span className="text-2xl">🐛</span>
              <h4 className="text-xs sm:text-sm font-black text-white">Millipedes</h4>
              <p className="text-[11px] text-slate-400">Perimeter foundation invaders.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DEDICATED BOOKING & QUOTE SECTION (Point of Trust)                     */}
      {/* ========================================================================= */}
      <section id="general-pest-booking-section" className="py-16 sm:py-24 bg-[#121418] border-y border-[#232733] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-b from-[#1C1F27] to-[#14161B] border border-[#2D3342] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#DE744C]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>$50 New Customer Voucher Auto-Credited</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Book General Pest Treatment
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Receive an immediate fixed estimate. 6-Month Warranty, no hidden fees, pay upon completion.
              </p>
            </div>

            {/* Quote Request Form with White Inputs & Blank Placeholders */}
            <div className="max-w-2xl mx-auto">
              <QuoteRequestForm
                defaultService="General Pest Treatment"
                source="General Pest Dedicated Page Booking"
                variant="dark"
              />
            </div>

            {/* Trust Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#DE744C]" />
                <span>Licensed Victorian Pest Technicians • 6-Month Free Re-treatment Warranty</span>
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

      {/* ========================================================================= */}
      {/* 6. REAL HOMEOWNER REVIEWS                                                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#161820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#DE744C]">
              Customer Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Verified Melbourne General Pest Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "Called Legend Pest Control after Redbacks and White-tails started appearing in our outdoor play area and laundry. The technician arrived right on time, explained the treatment process, and did an incredibly thorough job inside, outside and in the roof. Haven't seen a single spider since!"
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-bold text-white flex justify-between">
                <span>Mark Henderson</span>
                <span className="text-[#DE744C]">Werribee, VIC</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "We had persistent black ants invading our kitchen pantry and cockroaches in the garage. Other companies just did a quick 10-minute floor spray that did nothing. Legend treated the roof cavity, subfloor, and external weep holes. Problem completely solved within 48 hours."
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-bold text-white flex justify-between">
                <span>Jessica Chen</span>
                <span className="text-[#DE744C]">Point Cook, VIC</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS ACCORDION                                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#121418]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DE744C]/15 text-[#DE744C] text-xs font-bold border border-[#DE744C]/30">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              General Pest Control FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {generalPestFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen 
                      ? 'border-[#DE744C] bg-[#1A1D24] shadow-md' 
                      : 'border-[#242833] bg-[#161820] hover:border-[#2D3340]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-white text-xs sm:text-sm leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#DE744C] text-white' : 'bg-[#242833] text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BOTTOM URGENT CALL TO ACTION BANNER                                    */}
      {/* ========================================================================= */}
      <section className="py-12 bg-gradient-to-r from-[#1E222A] via-[#14161C] to-[#1E222A] border-t border-[#DE744C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-xs font-bold text-[#FF9570] uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#DE744C]" />
              <span>Restore Total Peace of Mind</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Take Back Your Home From Creepy Crawlies Today.
            </h3>
            <p className="text-xs text-slate-300">
              Complete 4-zone defense backed by our 6-month free re-treatment warranty and $50 voucher.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#DE744C] hover:bg-[#C85E36] text-white font-black text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={scrollToQuote}
              className="px-6 py-3.5 rounded-xl bg-[#1A1D24] hover:bg-[#252A36] text-white font-bold text-sm border border-[#343B4C] transition cursor-pointer"
            >
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
