import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/pestData';

export const ReviewsSection: React.FC = () => {

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved By Families Across Geelong & Melbourne West
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See why homeowners, renters, and commercial property managers rate Sahithi and the Legend Pest Control team 4.9 out of 5 stars.
          </p>
        </div>

        {/* Rating Breakdown Bar */}
        <div className="mt-10 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-5xl font-black text-slate-900">4.9</span>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">Based on 1,450+ Local Victorian Reviews</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 pt-1">
              100% genuine reviews from residential and commercial clients.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="text-center px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-xs text-slate-500 block">Warranty Adherence</span>
              <span className="text-lg font-bold text-slate-900">99.8%</span>
            </div>
            <div className="text-center px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-xs text-slate-500 block">Punctuality Score</span>
              <span className="text-lg font-bold text-slate-900">4.9 / 5</span>
            </div>
            <div className="text-center px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-xs text-slate-500 block">Recommend Rate</span>
              <span className="text-lg font-bold text-emerald-600">98.5%</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{t.date}</span>
                </div>

                <div className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                  {t.service}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                  <span className="text-xs text-slate-500">{t.suburb}</span>
                </div>

                {t.verified && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Job
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Real Estate Agent Partnership Note */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-200 text-center max-w-3xl mx-auto space-y-2">
          <h4 className="text-sm font-bold text-blue-950">
            Real Estate Agents & Property Managers in Geelong & Melbourne West
          </h4>
          <p className="text-xs text-blue-800 leading-relaxed">
            Need urgent end-of-lease flea sprays, tenancy bond handovers, or pre-purchase timber inspections? We issue instant digital certificates directly to your office within 2 hours of treatment completion.
          </p>
        </div>

      </div>
    </section>
  );
};
