import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Star } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const credentials = [
    {
      icon: ShieldCheck,
      title: '6-Month Warranty',
      subtitle: 'Free re-spray if pests return',
      badge: 'Guaranteed',
    },
    {
      icon: Award,
      title: 'Vic Health Licensed',
      subtitle: 'Lic #L012894 certified techs',
      badge: 'State Certified',
    },
    {
      icon: HeartHandshake,
      title: 'Child & Pet Safe',
      subtitle: 'APVMA approved low-toxicity',
      badge: 'Family Friendly',
    },
    {
      icon: CheckCircle2,
      title: 'Australian Standards',
      subtitle: 'AS 3660 & AS 4349.3 compliant',
      badge: 'Strict Quality',
    },
  ];

  return (
    <div className="bg-white border-y border-slate-200 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating summary bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-sm">4.9 / 5.0 Star Rating</span>
              <span className="text-xs text-slate-500 ml-2">from over 1,450+ Melbourne & Geelong home owners</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Local Geelong & Melbourne Mobile Units Dispatched Daily</span>
          </div>
        </div>

        {/* 4 Feature Columns in 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl bg-slate-50/50 sm:bg-transparent hover:bg-slate-50 transition-colors"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-base leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[10.5px] sm:text-xs text-slate-500 mt-0.5 leading-tight sm:leading-normal">
                    {item.subtitle}
                  </p>
                  <span className="inline-block mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
