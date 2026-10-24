import React from 'react';
import { Check, X, Shield, Award, HeartHandshake, Zap, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';

export const WhyChooseUs: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Treatment Warranty',
      legend: '6-Month Free Re-spray Guarantee',
      franchise: '30-day or limited warranty',
      budget: 'No warranty (pay again if pests return)',
    },
    {
      feature: 'Family, Baby & Pet Safety',
      legend: '100% APVMA Low-Toxicity Formulations',
      franchise: 'Standard commercial chemicals',
      budget: 'Unverified harsh solvent chemicals',
    },
    {
      feature: 'Response Time & Dispatch',
      legend: 'Same-day or next-morning dispatch',
      franchise: '5 to 14 business days wait',
      budget: 'Unpredictable arrival windows',
    },
    {
      feature: 'Pricing Transparency',
      legend: 'From $199 upfront with $50 new customer discount',
      franchise: '$350+ with franchise royalty markups',
      budget: 'Bait-and-switch: starts at $99, ends at $400',
    },
    {
      feature: 'Roof Void & Weep Hole Dusting',
      legend: 'Included standard in full home treatments',
      franchise: 'Expensive extra add-on (+$90)',
      budget: 'Skipped completely (skirting only)',
    },
    {
      feature: 'Accreditation & Insurance',
      legend: 'Vic Dept Health Licensed & $20M Insured',
      franchise: 'Subcontractors with varying credentials',
      budget: 'Often unlicensed / zero liability coverage',
    },
    {
      feature: 'Personalised Local Care',
      legend: 'Owner-led team (Sahithi & licensed technicians)',
      franchise: 'Interstate call center operator',
      budget: 'Fly-by-night operator',
    },
  ];

  const pillarCards = [
    {
      icon: Shield,
      title: 'Ironclad 6-Month Guarantee',
      desc: 'If crawling pests return to your property inside 6 months, we re-treat the area completely free of charge. No debates.',
    },
    {
      icon: HeartHandshake,
      title: 'Family & Pet First Safety',
      desc: 'We use low-odour water-based formulations that bind to surfaces once dry. Safe for toddlers, dogs, and indoor cats.',
    },
    {
      icon: Zap,
      title: 'Rapid Local Response',
      desc: 'Our vans are based in Geelong and Melbourne West daily, so you do not have to wait weeks for an urgent spider or wasp callout.',
    },
    {
      icon: Award,
      title: 'Standards Compliant',
      desc: 'All termite inspections and barriers follow Australian Standards AS 3660 & AS 4349.3 with high-resolution digital reports.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Why Geelong & Melbourne Trust Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Legend Pest Control Compares
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Not all pest control is created equal. See how our owner-operated service beats large corporate franchise chains and cut-rate operators in quality, speed, and real protection.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
          {pillarCards.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-lg bg-white">
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Side-by-side Transparency
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-0.5">
                The Legend Standard vs Competitors
              </h3>
            </div>
            <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full font-semibold self-start sm:self-auto">
              Updated 2026 Melbourne Market Comparison
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                  <th className="py-4 px-4 sm:px-6 font-bold w-1/3">Feature / Standard</th>
                  <th className="py-4 px-4 sm:px-6 font-black text-blue-700 bg-blue-50/60 w-1/3 border-x border-blue-100">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      Legend Pest Control
                    </span>
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-semibold text-slate-500 hidden md:table-cell">
                    Franchise Giants
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-semibold text-slate-500 hidden lg:table-cell">
                    Budget Fly-by-Night
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-slate-800">
                      {row.feature}
                    </td>

                    {/* Legend Column */}
                    <td className="py-4 px-4 sm:px-6 bg-blue-50/40 border-x border-blue-100 font-bold text-blue-900">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div>
                          <span>{row.legend}</span>
                          <div className="text-[10px] text-slate-500 mt-0.5 md:hidden font-normal">
                            <span className="text-amber-600 font-semibold">Others:</span> {row.franchise}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Franchise Giants */}
                    <td className="py-4 px-4 sm:px-6 text-slate-600 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <span className="text-amber-500 font-bold text-xs">⚠️</span>
                        <span>{row.franchise}</span>
                      </div>
                    </td>

                    {/* Budget Sprayers */}
                    <td className="py-4 px-4 sm:px-6 text-slate-500 hidden lg:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{row.budget}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-600">
              Need immediate advice or an inspection today? Speak with Sahithi & duty technician directly.
            </span>
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-sm shrink-0"
            >
              Call {COMPANY_DETAILS.phone} For Honest Advice
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
