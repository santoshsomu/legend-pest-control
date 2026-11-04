import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Star } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const credentials = [
    {
      icon: ShieldCheck,
      title: '6-Month Warranty',
    },
    {
      icon: Award,
      title: 'Fully Licensed & Certified',
    },
    {
      icon: CheckCircle2,
      title: 'Low-Odour Products',
    },
    {
      icon: CheckCircle2,
      title: 'Satisfaction Guarantee',
    },
  ];

  return (
    <div className="bg-white border-y border-[#F0DCD3] py-6 sm:py-8 shadow-xs">
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
              <span className="font-black text-slate-900 text-sm sm:text-base">4.9 / 5.0 Star Rating</span>
              <span className="text-xs text-slate-500 ml-2">from over 1,450+ Melbourne home owners</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Columns in 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-2.5 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#FDF3EE]/40 sm:bg-transparent hover:bg-[#FDF3EE]/80 transition-colors"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#FDF3EE] border border-[#F5D5C6] text-[#DE744C] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm lg:text-base leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Options Banner */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
            <span className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide shrink-0">
              Payment Options:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-900 text-xs font-black shadow-2xs">CASH</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-900 text-xs font-black shadow-2xs">CARD</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-900 text-xs font-black shadow-2xs">EFTPOS</span>
              <span className="px-2.5 py-1 rounded-md bg-[#FDF3EE] border border-[#F5D5C6] text-[#DE744C] text-xs font-black shadow-2xs">AFTERPAY</span>
              <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-300 text-amber-950 text-xs font-black shadow-2xs">ZIP PAY</span>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs font-bold text-slate-600 italic text-center md:text-right">
            (Note: We take same day payments after the job is completed)
          </p>
        </div>

      </div>
    </div>
  );
};
