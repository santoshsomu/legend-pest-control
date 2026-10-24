import React from 'react';
import { PhoneCall, Search, Sparkles, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';

interface ProcessSectionProps {
  onOpenCallback: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenCallback }) => {
  const steps = [
    {
      step: '01',
      icon: PhoneCall,
      title: 'Fast Contact & Upfront Quote',
      desc: 'Call 0416 388 777 or request a fast callback. Sahithi or our lead technician will discuss your pest sightings and give you a transparent upfront quote with your $50 new customer voucher applied.',
    },
    {
      step: '02',
      icon: Search,
      title: 'On-Site Diagnostic Inspection',
      desc: 'Our licensed technician inspects internal skirting boards, roof voids, wall cavities, subfloors, and external perimeters using high-intensity torches, thermal imaging, and moisture meters.',
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Targeted Low-Toxicity Eradication',
      desc: 'We deploy precision APVMA-certified formulations, micro-encapsulated sprays, gel matrices, or roof void dusters. 100% child and pet safe once dry (within 1.5 to 2 hours).',
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: '6-Month Warranty & Report',
      desc: 'Receive your official Victorian pest compliance certificate and invoice. Enjoy ironclad peace of mind with our 6-month free re-treatment guarantee on crawling pests.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>How We Solve Your Pest Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 4-Step Legendary Treatment Process
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From your first phone call to complete eradication, here is exactly what to expect from Sahithi and the Legend Pest Control team.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-emerald-700/25">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-emerald-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 bg-white rounded-2xl sm:rounded-full border border-slate-200 shadow-md">
            <span className="text-xs sm:text-sm font-bold text-slate-800 px-4">
              Need immediate help in Geelong or Melbourne West?
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm rounded-full transition shadow-sm"
              >
                Call {COMPANY_DETAILS.phone}
              </a>
              <button
                onClick={onOpenCallback}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm rounded-full transition shadow-sm cursor-pointer"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
