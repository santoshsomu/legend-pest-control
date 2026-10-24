import React from 'react';
import { Check, X, Shield, Award, HeartHandshake, Zap, Sparkles } from 'lucide-react';

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
      legend: 'Transparent upfront quote with $50 new customer voucher',
      franchise: 'High corporate franchise royalty markups',
      budget: 'Bait-and-switch: starts cheap, hidden fees added',
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
      desc: 'Our vans are stationed in Geelong and Melbourne West daily, so you never have to wait weeks for an urgent spider, rodent, dead animal or wasp callout.',
    },
    {
      icon: Award,
      title: 'Standards Compliant',
      desc: 'All termite timber inspections strictly adhere to Australian Standard AS 4349.3 with high-resolution digital photographic reporting.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
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
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500 font-bold">
                  <th className="py-4 px-6">Service Standards</th>
                  <th className="py-4 px-6 bg-emerald-700 text-white font-black text-sm">
                    Legend Pest Control
                  </th>
                  <th className="py-4 px-6">Franchise Chains</th>
                  <th className="py-4 px-6">Budget Solo Operators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-6 bg-emerald-50/50 font-bold text-emerald-900 border-x border-emerald-100">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.legend}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{row.franchise}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{row.budget}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
