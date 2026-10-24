import React from 'react';
import { PhoneCall, SearchCheck, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';

interface ProcessSectionProps {
  onOpenCallback: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenCallback }) => {
  const steps = [
    {
      step: '01',
      icon: PhoneCall,
      title: 'Fast Phone Estimate',
      desc: 'Call 1800 623 252 or request a callback. Tell us your suburb and what you are seeing. We give you an honest price on the call with your $50 discount locked in.',
      badge: 'Under 2 Minutes',
    },
    {
      step: '02',
      icon: SearchCheck,
      title: 'On-Site Diagnostic',
      desc: 'Our uniformed Victorian-licensed technician inspects roof voids, weep holes, subfloors, and nesting sites to identify the exact insect or rodent species.',
      badge: 'Thorough Check',
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Precision Safe Treatment',
      desc: 'We apply APVMA-certified low-toxicity formulations. Skirting boards, external brick perimeters, eaves, and roof blowers. 100% safe for kids & pets once dry.',
      badge: 'Child & Pet Safe',
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: '6-Month Warranty & Report',
      desc: 'You receive a digital invoice and formal 6-Month Re-treatment Warranty. If covered pests return within 6 months, we come back and spray for free.',
      badge: 'Zero Risk',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <span>Seamless 4-Step Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Protect Your Home
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From your first phone call to complete pest eradication, we keep the process clean, punctual, and transparent with zero mess or harsh chemical odours.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-sm font-bold text-slate-900 block">
              Ready to restore your home's peace of mind?
            </span>
            <span className="text-xs text-slate-500">
              Lock in your $50 new customer voucher today.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCallback}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition cursor-pointer"
            >
              Request Rapid Callback
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition"
            >
              Call {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
