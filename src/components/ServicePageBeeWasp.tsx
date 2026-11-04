import React, { useState } from 'react';
import { 
  Flame, 
  Clock, 
  Phone, 
  CheckCircle2, 
  ChevronDown, 
  ArrowLeft, 
  Check, 
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Camera,
  MapPin
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';
import { QuoteRequestForm } from './QuoteRequestForm';

interface ServicePageBeeWaspProps {
  onOpenCallback: (service?: string) => void;
  onNavigateHome: () => void;
  onNavigateService?: (serviceId: string) => void;
}

type SpeciesId = 'european-wasp' | 'paper-wasp' | 'honeybee' | 'mud-dauber';
type NestLocation = 'cavity' | 'eaves' | 'attic' | 'subfloor';

export const ServicePageBeeWasp: React.FC<ServicePageBeeWaspProps> = ({
  onOpenCallback,
  onNavigateHome,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesId>('european-wasp');
  const [activeNestTab, setActiveNestTab] = useState<NestLocation>('eaves');

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

  const speciesData: Record<SpeciesId, {
    name: string;
    commonSpot: string;
    description: string;
    treatment: string;
    tag: string;
  }> = {
    'european-wasp': {
      name: 'European Wasp',
      tag: 'Common in Cavities & Weep Holes',
      commonSpot: 'Brick weep holes, wall voids, roof tiles & ground holes',
      description: 'Yellow and black striped wasps with black antennae. Can be aggressive if their nest entrance is disturbed. We locate the hidden nest and treat the core colony.',
      treatment: 'Targeted micro-fine dust injected directly through weep holes into the cavity heart. Eliminates the queen and stops re-entry without cutting into your walls.'
    },
    'paper-wasp': {
      name: 'Paper Wasp',
      tag: 'Under Eaves & Fences',
      commonSpot: 'Roof eaves, window heads, pergolas & fence lines',
      description: 'Slender bodies with visible dangling legs in flight. Build small to medium inverted paper combs underneath sheltered outdoor surfaces.',
      treatment: 'Fast direct knockdown and physical comb removal so secondary pests aren’t attracted. We also apply a surface deterrent to stop them rebuilding.'
    },
    'honeybee': {
      name: 'Honeybee Swarms',
      tag: 'Ethical Relocation Priority',
      commonSpot: 'Tree branches, fence posts, chimneys & wall voids',
      description: 'Fuzzy golden-brown bees clustered tightly in a ball during spring and early summer. Usually resting temporarily while scout bees search for a home.',
      treatment: 'Whenever accessible, we prioritize safe, live swarm rescue and re-homing with local Victorian beekeepers before they move into structural cavities.'
    },
    'mud-dauber': {
      name: 'Mud Dauber Wasp',
      tag: 'Mud Tubes on Brickwork',
      commonSpot: 'Exterior brick walls, carports & sheltered sheds',
      description: 'Long, thin waists with metallic black or yellow markings. Non-aggressive solitary wasps that build hard mud cells on sheltered walls.',
      treatment: 'Clean removal of mud tubes followed by brick cleaning and a surface deterrent to keep walls clean and unmarked.'
    }
  };

  const nestLocations: Record<NestLocation, {
    title: string;
    subtitle: string;
    image: string;
    imageCaption: string;
    locationBadge: string;
    howWeHandle: string;
    keyPoints: string[];
  }> = {
    'eaves': {
      title: 'Roof Eaves & Fascias',
      subtitle: 'Visible paper combs hanging under roofs and pergolas',
      image: '/gallery/7.jpeg',
      imageCaption: 'Real paper wasp comb removed from an outdoor eave fixture in Point Cook',
      locationBadge: 'Point Cook, Melbourne',
      howWeHandle: 'Using protective equipment and professional extension lances, our technician treats the colony instantly, safely detaches the nest, and takes it away for clean disposal.',
      keyPoints: ['Complete physical nest removal', 'Prevents old combs attracting secondary insects', 'Leaves eaves and gutters clean']
    },
    'cavity': {
      title: 'Brick Weep Holes & Wall Voids',
      subtitle: 'Nests hidden between brick and internal plaster',
      image: '/gallery/8.jpeg',
      imageCaption: 'Wasp nest breaking through interior drywall behind kitchen cabinets in Tarneit',
      locationBadge: 'Tarneit, Melbourne',
      howWeHandle: 'Wasps entering brick weep holes build nests in the void behind your walls. We inject a specialized micro-fine powder directly through the weep hole vents, reaching the queen without damaging your drywall.',
      keyPoints: ['No wall cutting or plaster damage', 'Residual treatment stops re-nesting in the same cavity', 'Safe for interior rooms']
    },
    'attic': {
      title: 'Attic & Roof Rafters',
      subtitle: 'Nests built on structural beams above ceilings',
      image: '/gallery/6.jpeg',
      imageCaption: 'Active European wasp nest discovered attached to ceiling rafters in Werribee',
      locationBadge: 'Werribee, Melbourne',
      howWeHandle: 'If wasps are entering roof tiles and buzzing above ceilings, we safely access the roof void or entry points from the outside, pinpoint the nest location, and treat the core colony thoroughly.',
      keyPoints: ['Protects ceiling plasterboard', 'Stops wasps finding their way into downlights', 'Clean, low-odour treatment']
    },
    'subfloor': {
      title: 'Subfloor & Foundation Voids',
      subtitle: 'Under-house nests on foundation stone & soil',
      image: '/gallery/14.jpeg',
      imageCaption: 'Large subfloor foundation wasp nest removed from a home in Hoppers Crossing',
      locationBadge: 'Hoppers Crossing, Melbourne',
      howWeHandle: 'Subfloor cavities provide dark, warm shelter for wasps. We deploy specialized sub-surface lances to eliminate the entire nest safely without disturbing flooring above.',
      keyPoints: ['Eliminates hidden ground-level nests', 'Safe for subfloor timber and foundations', 'Fast same-day resolution']
    }
  };

  const recentCases = [
    {
      img: '/gallery/7.jpeg',
      title: 'Eaves Paper Wasp Comb',
      suburb: 'Point Cook, VIC',
      tag: 'Eaves Removal',
      desc: 'Comb attached directly under porch roof. Safely removed in 20 minutes with surface deterrent applied.'
    },
    {
      img: '/gallery/6.jpeg',
      title: 'Attic Rafter European Nest',
      suburb: 'Werribee, VIC',
      tag: 'Attic Cavity',
      desc: 'Active European wasp colony between roof rafters. Treated via positive-pressure injection without plaster damage.'
    },
    {
      img: '/gallery/8.jpeg',
      title: 'Wall Cavity Nest Extraction',
      suburb: 'Tarneit, VIC',
      tag: 'Drywall Protection',
      desc: 'Wasps entering via brick weep holes and expanding near kitchen cabinetry. Cavity neutralized at the source.'
    },
    {
      img: '/gallery/14.jpeg',
      title: 'Subfloor Foundation Nest',
      suburb: 'Hoppers Crossing, VIC',
      tag: 'Subfloor Void',
      desc: 'Large nest attached to foundation masonry. Deep injection eliminated queen and entire worker colony.'
    }
  ];

  const faqs = [
    {
      q: 'How fast can a technician arrive for a bee or wasp nest?',
      a: 'We have licensed technicians servicing Greater Melbourne daily. We offer prompt same-day service where available. Call us to confirm current technician availability in your suburb.'
    },
    {
      q: 'Why avoid spraying nests with supermarket cans?',
      a: 'Supermarket fly sprays lack commercial knockdown power and can agitate wasps before killing them, increasing sting risk. For wall cavities, spraying the entrance often drives wasps deeper towards light fixtures and bedroom drywall.'
    },
    {
      q: 'Are your treatments safe for children and pets?',
      a: 'Yes. We ask family members and pets to stay comfortably indoors while we treat the nest. Once the product has settled and dried (about 1 to 2 hours), the area is completely safe for normal everyday use.'
    },
    {
      q: 'Do you remove the nest or just spray it?',
      a: 'Where the nest is physically accessible (such as under eaves, porches, or sheds), we remove and bag it so nothing is left behind. For nests inside brick weep holes or wall voids, we treat the cavity internally so the colony is completely eradicated without needing to cut your walls.'
    },
    {
      q: 'What is your Colony Elimination Guarantee?',
      a: 'If any active wasp or bee activity persists at the treated nest location, our licensed technician will return and re-treat the area free of charge. Your peace of mind is 100% guaranteed.'
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

      {/* 2. Clean, Confident Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#161820] via-[#14161B] to-[#121418] pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-[#232733]">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline & Action */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DE744C]/15 border border-[#DE744C]/30 text-[#DE744C] text-xs font-bold">
                <Flame className="w-3.5 h-3.5" />
                <span>Same-Day Melbourne Service • 7 Days</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Fast, Safe Bee &amp; Wasp Nest Removal
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  Notice wasps entering your brick weep holes, eaves, or garden? We provide safe, same-day removal across Melbourne so your family and pets can enjoy your home with complete peace of mind.
                </p>
              </div>

              {/* 4 Clean Benefit Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-[#DE744C] font-bold text-xs sm:text-sm">⚡ Prompt</div>
                  <div className="text-[11px] text-slate-400">Same-Day Service</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1D24] border border-[#2B303C] text-center">
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm">🛡️ 100%</div>
                  <div className="text-[11px] text-slate-400">Guaranteed</div>
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
                  <span>Call Now: {COMPANY_DETAILS.phone}</span>
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

            {/* Right Card: Quick Practical Advice */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#1A1D24] border border-[#2B303C] p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DE744C]">
                    Helpful Tip
                  </span>
                  <span className="text-xs text-slate-400">Before Technician Arrives</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Active nests don't need to be stressful. Keep doors and windows closed, avoid spraying the entrance, and let our licensed technician handle it safely in protective gear.
                </p>

                <div className="space-y-2 text-xs text-slate-300 pt-1">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>No need to leave home for outdoor nest treatments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Full colony elimination backed by our guarantee</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>$50 new customer voucher included in your quote</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={scrollToQuote}
                    className="w-full py-2.5 px-3 bg-[#DE744C] hover:bg-[#C85E36] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <span>Request Fast Callback</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Real Field Evidence & Structural Treatment (With Real Melbourne Photos) */}
      <section className="py-14 sm:py-16 bg-[#161820] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-[#DE744C] uppercase tracking-wider flex items-center justify-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Field Case Studies</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Where Is The Nest Located?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Click a location below to see real photos of nests our team has resolved across Melbourne homes:
            </p>
          </div>

          {/* Location Selector Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {(Object.keys(nestLocations) as NestLocation[]).map((loc) => {
              const data = nestLocations[loc];
              const isSelected = activeNestTab === loc;
              return (
                <button
                  key={loc}
                  onClick={() => setActiveNestTab(loc)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                    isSelected 
                      ? 'bg-[#DE744C] text-white shadow-md' 
                      : 'bg-[#1A1D24] text-slate-300 hover:text-white border border-[#2B303C]'
                  }`}
                >
                  {data.title}
                </button>
              );
            })}
          </div>

          {/* Visual Showcase Card with Real Photo */}
          {(() => {
            const current = nestLocations[activeNestTab];
            return (
              <div className="mt-4 p-6 sm:p-7 rounded-2xl bg-[#1A1D24] border border-[#2D3342] shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Real Photo Thumbnail */}
                  <div className="md:col-span-5 relative group overflow-hidden rounded-xl border border-white/10 aspect-[4/3] bg-black">
                    <img 
                      src={current.image} 
                      alt={current.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-[10px] font-bold text-white px-2.5 py-1 rounded-md flex items-center gap-1 border border-white/10">
                      <MapPin className="w-3 h-3 text-[#DE744C]" />
                      <span>{current.locationBadge}</span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2.5 text-[10px] text-slate-200">
                      {current.imageCaption}
                    </div>
                  </div>

                  {/* Text Details & Treatment */}
                  <div className="md:col-span-7 space-y-3.5">
                    <div>
                      <span className="text-xs font-bold text-[#DE744C]">{current.subtitle}</span>
                      <h3 className="text-xl font-black text-white">{current.title}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {current.howWeHandle}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {current.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={scrollToQuote}
                        className="py-2 px-4 bg-[#DE744C] hover:bg-[#C85E36] text-white font-bold text-xs rounded-xl transition shadow-xs cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <span>Book Treatment for {current.title}</span>
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

      {/* 4. Recent Melbourne Field Cases Showcase (4 Real Photos) */}
      <section className="py-14 sm:py-16 bg-[#121418] border-b border-[#232733]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-bold text-[#DE744C] uppercase tracking-wider">
                Authentic Field Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Recent Nest Removals Across Melbourne
              </h2>
            </div>
            <p className="text-xs text-slate-400 sm:max-w-xs">
              Every home is treated with precision equipment, protective gear, and guaranteed colony elimination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentCases.map((c, i) => (
              <div 
                key={i} 
                className="rounded-2xl bg-[#1A1D24] border border-[#2B303C] overflow-hidden group hover:border-[#DE744C]/50 transition shadow-md"
              >
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <img 
                    src={c.img} 
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold text-white bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
                    {c.tag}
                  </span>
                </div>
                <div className="p-4 space-y-1.5">
                  <div className="text-[11px] font-semibold text-[#DE744C] flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{c.suburb}</span>
                  </div>
                  <h4 className="text-sm font-black text-white leading-snug">{c.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Simple, Helpful Species Guide */}
      <section className="py-14 sm:py-16 bg-[#161820] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Common Wasps &amp; Bees in Melbourne
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Different pests require different approaches. Click below to see how we handle each:
            </p>
          </div>

          {/* Clean 4 Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {(Object.keys(speciesData) as SpeciesId[]).map((id) => {
              const sp = speciesData[id];
              const isSelected = selectedSpecies === id;
              return (
                <button
                  key={id}
                  onClick={() => setSelectedSpecies(id)}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    isSelected 
                      ? 'bg-[#1F232D] border-[#DE744C] text-white shadow-md' 
                      : 'bg-[#181B22] border-[#2A2F3D] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <div className="text-xs font-bold">{sp.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{sp.tag}</div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Box */}
          {(() => {
            const current = speciesData[selectedSpecies];
            return (
              <div className="p-6 rounded-2xl bg-[#1C1F27] border border-[#2D3342] shadow-lg space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div>
                    <h3 className="text-lg font-black text-white">{current.name}</h3>
                    <span className="text-xs text-[#DE744C] font-semibold">{current.commonSpot}</span>
                  </div>
                  <span className="text-xs text-slate-400 bg-[#14161B] px-3 py-1 rounded-full border border-white/5">
                    {current.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1 bg-[#14161B] p-4 rounded-xl border border-white/5">
                    <strong className="text-white block">What You'll Notice:</strong>
                    <p className="text-slate-300 leading-relaxed">{current.description}</p>
                  </div>
                  <div className="space-y-1 bg-[#14161B] p-4 rounded-xl border border-white/5">
                    <strong className="text-emerald-400 block">How Legend Solves It:</strong>
                    <p className="text-slate-300 leading-relaxed">{current.treatment}</p>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 6. Clear, Transparent Treatment Options */}
      <section className="py-14 sm:py-16 bg-[#121418] border-b border-[#232733]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold text-[#DE744C] uppercase tracking-wider">
              Transparent Estimates
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Bee &amp; Wasp Treatment Options &amp; Scope
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              All upfront quotes include our $50 new customer voucher applied. Transparent phone quote before technician visits.
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
                onClick={scrollToQuote}
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
                onClick={scrollToQuote}
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
                onClick={scrollToQuote}
                className="w-full py-2 bg-[#1F232D] hover:bg-[#DE744C] text-white font-bold text-xs rounded-xl border border-[#343B4C] hover:border-[#DE744C] transition cursor-pointer"
              >
                Request Ground / Swarm Quote
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Clean Booking Section */}
      <section id="wasp-booking-section" className="py-14 sm:py-20 bg-[#161820] border-b border-[#232733] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-b from-[#1C1F27] to-[#14161B] border border-[#2D3342] p-6 sm:p-9 shadow-2xl relative overflow-hidden">
            <div className="max-w-xl mx-auto text-center space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>$50 New Customer Voucher Auto-Credited</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Book Bee &amp; Wasp Removal
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Receive an immediate upfront quote. Pay upon completion.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <QuoteRequestForm
                defaultService="Bee & Wasp Nest Removal"
                source="Bee & Wasp Dedicated Page Booking"
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

      {/* 8. Concise FAQs */}
      <section className="py-14 sm:py-16 bg-[#121418]">
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

      {/* 9. Clean Bottom Call Bar */}
      <section className="py-10 bg-gradient-to-r from-[#1E222A] via-[#14161C] to-[#1E222A] border-t border-[#DE744C]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need A Wasp Or Bee Nest Removed Today?
            </h3>
            <p className="text-xs text-slate-300">
              Prompt same-day service across Greater Melbourne where available. Call {COMPANY_DETAILS.phone} for immediate assistance.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3 rounded-xl bg-[#DE744C] hover:bg-[#C85E36] text-white font-bold text-xs shadow-md transition flex items-center gap-2"
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
