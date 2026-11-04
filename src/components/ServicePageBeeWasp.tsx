import React, { useState } from 'react';
import { 
  Flame, 
  Clock, 
  Phone, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowLeft, 
  Shield, 
  Zap, 
  Check, 
  X,
  HeartHandshake,
  ArrowRight,
  HelpCircle,
  Sparkles
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
  const [activeNestTab, setActiveNestTab] = useState<'cavity' | 'eaves' | 'ground' | 'swarm'>('cavity');

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const scrollToQuote = () => {
    const el = document.getElementById('wasp-booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCallback('Bee & Wasp Nest Removal');
    }
  };

  const beeWaspFaqs = [
    {
      q: 'How fast can a technician arrive for an emergency bee or wasp nest?',
      a: 'We reserve emergency priority slots each morning and afternoon across Greater Melbourne. For active nests near doorways, inside bedrooms, or threatening children and pets, our licensed technician typically arrives within 1 to 2 hours of your call.'
    },
    {
      q: 'Why should I never spray an active wasp nest with supermarket aerosol or garden hose?',
      a: 'Hardware store sprays lack the instant knockdown pressure of commercial equipment. Spraying an active nest enrages European wasps, triggering the release of chemical alarm pheromones (isopentyl acetate) that summon hundreds of defensive wasps to swarm and sting repeatedly. Additionally, water sprays scatter wasps into wall cavities and through downlights directly into living areas.'
    },
    {
      q: 'Can wasps chew through my plasterboard or ceiling into my living room?',
      a: 'Yes. European wasps nesting in ceiling cavities or wall voids frequently chew through Gyprock plasterboard or expand into downlight sockets. If you hear loud scratching or rhythmic buzzing behind your drywall, do not poke or seal it. Keep the room closed and call us immediately for targeted cavity injection.'
    },
    {
      q: 'Are your bee and wasp treatments safe for children, dogs, and cats?',
      a: 'Yes. We require family members and pets to remain safely inside with windows shut during the active knockdown (typically 20–30 minutes). Once our high-pressure formulations settle and dry (approx. 1.5–2 hours), the treated area is completely non-hazardous to mammals and pets.'
    },
    {
      q: 'Do you remove the physical nest or just spray it?',
      a: 'Whenever the nest is physically accessible (under eaves, porch roofs, sheds, or exposed branches), we physically extract and hygienically dispose of the entire paper comb and dead larvae. Leaving old nests behind can attract secondary pests such as carpet beetles, blowflies, and maggots. For nests deep inside brick weep holes or wall cavities, we inject residual formulations that completely neutralize the colony internally.'
    },
    {
      q: 'What is your Colony Elimination Guarantee?',
      a: 'If any active bee or wasp activity persists from the treated nest site, our licensed technician returns and re-treats the area completely free of charge. We do not leave until your property is 100% safe and secure.'
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
            <span className="text-[#DE744C] font-bold">Bee &amp; Wasp Eradication</span>
          </div>

          <a 
            href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-[#DE744C] hover:text-white font-bold transition"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Priority Dispatch:</span>
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. BESPOKE SERVICE HERO: Editorial, Authoritative & Urgent                */}
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
                <Flame className="w-4 h-4 text-[#DE744C]" />
                <span>Emergency Same-Day Eradication • Greater Melbourne</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  European Wasp &amp; Bee Hive Removal
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                  Fast, safe knockdown and physical extraction of dangerous nests from eaves, brick weep holes, wall cavities, and gardens. We eliminate the queen and entire colony at the core with positive-pressure containment gear.
                </p>
              </div>

              {/* 4 Sleek Key Highlights Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-[#DE744C] font-black text-xs sm:text-sm">⚡ 1–2 Hr</div>
                  <div className="text-[10.5px] text-slate-400 font-medium">Urgent Dispatch</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-emerald-400 font-black text-xs sm:text-sm">🛡️ 100%</div>
                  <div className="text-[10.5px] text-slate-400 font-medium">Colony Guarantee</div>
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
                  <span>Call Emergency Crew: {COMPANY_DETAILS.phone}</span>
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

            {/* Right Column: Interactive Emergency Threat Triage Card (NOT a duplicate form) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#1A1D24] border border-[#2E3342] p-6 shadow-2xl space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    <span className="text-xs font-black uppercase tracking-wider text-red-400">
                      Urgent Safety Protocol
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">Active Nest Advisory</span>
                </div>

                <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-300 block">Do NOT spray with supermarket cans:</strong>
                      Aerosol repellent triggers mass alarm pheromones, summoning hundreds of defensive wasps to swarm and sting repeatedly.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5">
                    <X className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-200 block">Do NOT seal brick weep holes:</strong>
                      Trapping wasps inside wall cavities forces them to chew through Gyprock plasterboard or light sockets directly into your bedrooms.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-300 block">What to do right now:</strong>
                      Keep children and pets indoors with windows shut. Note the flight entry path from a safe distance and call our certified team.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={scrollToQuote}
                    className="w-full py-2.5 px-3 bg-[#DE744C] hover:bg-[#C85E36] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <span>Request Technician Assessment &amp; Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE REAL SUFFERING: Homeowner Distress & Threat Analysis                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#161820] border-b border-[#232733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#DE744C] bg-[#DE744C]/15 border border-[#DE744C]/30 px-3 py-1 rounded-full">
              Why Active Nests Demand Immediate Eradication
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              The Physical Danger &amp; Household Stress of Wasps
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              An active wasp or bee colony isn't just an eyesore — it holds your family hostage inside your own home, endangers pets, and risks severe allergic hospitalisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <div className="rounded-2xl bg-[#1C1F27] border border-[#2B303C] p-6 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-white">
                Backyards Turned Into No-Go Zones
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Children cannot safely play on grass or trampolines. Outdoor barbecues, gardening, and entertaining on patios turn into terrifying ordeals filled with ducking and hyper-vigilance.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-red-300 border-t border-white/5">
                European wasps attack unprovoked within 10 metres of their nest entrance.
              </div>
            </div>

            {/* Box 2 */}
            <div className="rounded-2xl bg-[#1C1F27] border border-[#2B303C] p-6 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-white">
                Life-Threatening Stings &amp; Pet Hazards
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Unlike honeybees that sting once and perish, European wasps sting repeatedly without dying, injecting venom containing melittin. Curious dogs and cats sniffing near nest openings frequently get stung in the throat or tongue, leading to rapid airway obstruction.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-amber-300 border-t border-white/5">
                Anaphylactic reactions require immediate emergency hospital intervention.
              </div>
            </div>

            {/* Box 3 */}
            <div className="rounded-2xl bg-[#1C1F27] border border-[#2B303C] p-6 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-white">
                Buzzing &amp; Plasterboard Dread
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Wasps nesting inside ceiling voids or wall cavities chew away at Gyprock paper liners. Homeowners endure the chilling sound of rhythmic scratching behind bedroom walls at 2 AM, fearing the colony will break through into living areas.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#FF9570] border-t border-white/5">
                Mature Victorian nests can contain over 5,000 wasps by late summer.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE NEST LOCATION MATRIX                                       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#121418] border-b border-[#232733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Where Is Your Nest Located?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select your nest location to see how our certified technicians treat and eliminate it.
            </p>
          </div>

          {/* Interactive Selector Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            <button
              onClick={() => setActiveNestTab('cavity')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                activeNestTab === 'cavity'
                  ? 'bg-[#DE744C] text-white shadow-md'
                  : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
              }`}
            >
              🧱 Brick Weep Holes &amp; Walls
            </button>
            <button
              onClick={() => setActiveNestTab('eaves')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                activeNestTab === 'eaves'
                  ? 'bg-[#DE744C] text-white shadow-md'
                  : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
              }`}
            >
              🏡 Roof Eaves &amp; Fascias
            </button>
            <button
              onClick={() => setActiveNestTab('ground')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                activeNestTab === 'ground'
                  ? 'bg-[#DE744C] text-white shadow-md'
                  : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
              }`}
            >
              🪴 Ground Burrows &amp; Gardens
            </button>
            <button
              onClick={() => setActiveNestTab('swarm')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                activeNestTab === 'swarm'
                  ? 'bg-[#DE744C] text-white shadow-md'
                  : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
              }`}
            >
              🐝 Honeybee Swarms
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="max-w-4xl mx-auto mt-6 p-6 sm:p-8 rounded-2xl bg-[#1A1D24] border border-[#2D3342] shadow-xl">
            {activeNestTab === 'cavity' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#DE744C] font-black text-sm">
                  <span>🧱 Brick Weep Hole &amp; Wall Cavity Protocol</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Wasps entering weep holes build sprawling nests inside the insulated void between your exterior brickwork and interior timber framing. Our technicians inject high-pressure micro-fine dust formulations directly through the weep holes, coating the entire internal cavity and eliminating the hidden queen. We then apply residual deterrents so surrounding wasps cannot re-colonize the same scent-marked void.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>No structural wall damage required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pheromone scent blocking applied</span>
                  </div>
                </div>
              </div>
            )}

            {activeNestTab === 'eaves' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#DE744C] font-black text-sm">
                  <span>🏡 Eaves, Fascias &amp; Porch Roof Protocol</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Paper wasps and European wasps frequently construct visible football-sized nests suspended under eaves and porch ceilings. We deploy professional positive-containment suits, knock down the active colony with instantaneous pressure formulations, and physically cut down and bag the nest for biohazard disposal.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Complete physical comb removal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Prevents secondary fly and maggot infestation</span>
                  </div>
                </div>
              </div>
            )}

            {activeNestTab === 'ground' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#DE744C] font-black text-sm">
                  <span>🪴 Subterranean Garden Burrow Protocol</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  European wasps often excavate underground nests in garden beds, compost bins, or retaining walls. Unsuspecting homeowners stepping on or mowing over these openings trigger massive retaliatory swarms. We deploy high-depth subterranean injection systems to reach the bottom chamber where the queen resides.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Deep underground chamber neutralization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Safe lawn and garden enjoyment restored</span>
                  </div>
                </div>
              </div>
            )}

            {activeNestTab === 'swarm' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#DE744C] font-black text-sm">
                  <span>🐝 Honeybee Swarm &amp; Colony Protocol</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  In spring, honeybee colonies split and form large swirling swarms that cluster on fences, chimneys, or trees before invading wall voids. We assess the cluster, prioritize ethical bee relocation where feasible with local Victorian apiarists, or safely remove established feral colonies from structural cavities.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Victorian bee species assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Extraction of honey comb to prevent ceiling rot</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE 4-STAGE TECHNICAL ERADICATION BLUEPRINT                            */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#161820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-[#DE744C]">
              Comprehensive Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              The Legend 4-Stage Eradication Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Why our treatments work where superficial spraying fails: we eliminate the biological core of the nest and prevent future colonization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3 relative">
              <span className="text-xs font-black text-[#DE744C] bg-[#DE744C]/15 px-2.5 py-1 rounded-md inline-block">
                Stage 01
              </span>
              <h3 className="text-base font-black text-white">Acoustic &amp; Core Detection</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We locate the flight trajectories, entry voids, and concealed nest core inside walls, eaves, or ground cavities without destructive trial-and-error holes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3 relative">
              <span className="text-xs font-black text-[#DE744C] bg-[#DE744C]/15 px-2.5 py-1 rounded-md inline-block">
                Stage 02
              </span>
              <h3 className="text-base font-black text-white">PPE Suit Containment &amp; Injection</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Technicians don full positive-pressure containment gear and inject micro-fine residual knockdown formulations directly into the heart of the nest, neutralizing the queen.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3 relative">
              <span className="text-xs font-black text-[#DE744C] bg-[#DE744C]/15 px-2.5 py-1 rounded-md inline-block">
                Stage 03
              </span>
              <h3 className="text-base font-black text-white">Physical Extraction of Comb</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Where accessible, we physically remove the paper nest and comb. Leaving dead larvae behind causes foul rotting odours and attracts flesh flies and maggots.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3 relative">
              <span className="text-xs font-black text-[#DE744C] bg-[#DE744C]/15 px-2.5 py-1 rounded-md inline-block">
                Stage 04
              </span>
              <h3 className="text-base font-black text-white">Pheromone Blocking Barrier</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Wasps track pheromones back to former nest sites. We treat the perimeter with micro-encapsulated deterrents and proof weep holes to permanently prevent re-nesting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DEDICATED BOOKING & QUOTE SECTION (Cleanly Placed at Point of Trust)    */}
      {/* ========================================================================= */}
      <section id="wasp-booking-section" className="py-16 sm:py-24 bg-[#121418] border-y border-[#232733] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-b from-[#1C1F27] to-[#14161B] border border-[#2D3342] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#DE744C]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>$50 New Customer Voucher Auto-Credited</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Book Bee &amp; Wasp Removal
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Receive an immediate fixed estimate. No obligation, no hidden fees, pay upon completion.
              </p>
            </div>

            {/* Quote Request Form with White Inputs & Blank Placeholders */}
            <div className="max-w-2xl mx-auto">
              <QuoteRequestForm
                defaultService="Bee & Wasp Nest Removal"
                source="Bee & Wasp Dedicated Page Booking"
                variant="dark"
              />
            </div>

            {/* Trust Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#DE744C]" />
                <span>Licensed Victorian Pest Technicians • 100% Colony Elimination Guarantee</span>
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
              Verified Melbourne Wasp Eradication Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "A dangerous European wasp nest was growing under our front porch roof right beside our front door. Legend answered immediately on 0416 388 777, quoted upfront, arrived within 90 minutes, and safely cut down the nest. Peace of mind restored for our kids."
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-bold text-white flex justify-between">
                <span>Anthony Rossi</span>
                <span className="text-[#DE744C]">Hoppers Crossing, VIC</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1C1F27] border border-[#2B303C] space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "Wasps were entering the weep holes of our brick wall and buzzing inside our bedroom plasterboard. The Legend technician knew exactly how to treat the cavity without damaging our drywall. Problem solved in one visit."
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-bold text-white flex justify-between">
                <span>Sarah Jenkins</span>
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
              Bee &amp; Wasp Removal FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {beeWaspFaqs.map((faq, idx) => {
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
              <Zap className="w-3.5 h-3.5 text-[#DE744C]" />
              <span>Priority Melbourne Response</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Don't Risk Stings. Eradicate The Nest Today.
            </h3>
            <p className="text-xs text-slate-300">
              Emergency slots open daily. Call now on {COMPANY_DETAILS.phone} for immediate dispatch.
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
