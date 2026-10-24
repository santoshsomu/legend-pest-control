import React from 'react';
import { Star, CheckCircle, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/pestData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Local Google Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Loved By Melbourne Homeowners
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Read real feedback from homeowners, tenants, and business owners who rely on Legend Pest Control for permanent pest eradication.
          </p>
        </div>

        {/* Rating KPI Card */}
        <div className="mt-10 p-6 rounded-3xl bg-slate-800/80 border border-emerald-900/60 max-w-xl mx-auto flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl font-black text-amber-400">4.9</span>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">Based on 1,450+ verified reviews</span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
              100% Recommended
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/60 rounded-3xl p-6 sm:p-7 border border-slate-700/80 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-slate-800 transition-all shadow-md group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-600 group-hover:text-emerald-400 transition" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{review.author}</h4>
                  <span className="text-xs text-slate-400 block">{review.suburb}</span>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1 justify-end">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Verified Client
                  </span>
                  <span className="text-[10px] text-slate-500 block">{review.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Footnote */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>Every review is from a verified resident or business in Victoria.</span>
        </div>

      </div>
    </section>
  );
};
