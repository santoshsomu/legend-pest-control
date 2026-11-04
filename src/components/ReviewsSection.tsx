import React, { useState, useRef } from 'react';
import { Star, CheckCircle, Quote, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/pestData';
import type { Testimonial } from '../types';

// Authentic Google 4-Color Icon
const GoogleGIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

const REVIEW_HEADLINES: Record<string, string> = {
  't-0': '“Dead animal smell was 100% gone that evening!”',
  't-1': '“Haven\'t seen a single spider since the treatment”',
  't-2': '“Within 10 days, zero roaches in the kitchen!”',
  't-3': '“Quiet nights restored. 6-month warranty peace of mind”',
  't-4': '“Full bond returned without a single hitch!”',
  't-5': '“Bee & wasp nest removed safely within 2 hours of calling”',
};

interface DribbbleReviewCardProps {
  review: Testimonial;
  index?: number;
}

const DribbbleReviewCard: React.FC<DribbbleReviewCardProps> = ({ review }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, spotlightX: 50, spotlightY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D perspective tilt
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({
      x: rotateX,
      y: rotateY,
      spotlightX: (x / rect.width) * 100,
      spotlightY: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, spotlightX: 50, spotlightY: 50 });
  };

  const headline = REVIEW_HEADLINES[review.id] || `“${review.service} completed seamlessly”`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(-8px) scale(1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
        transition: isHovered
          ? 'transform 0.12s ease-out, box-shadow 0.25s ease'
          : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
      }}
      className={`group relative rounded-3xl p-6 sm:p-7 border flex flex-col justify-between overflow-hidden cursor-pointer select-none transition-all duration-300 ${
        isHovered
          ? 'bg-gradient-to-b from-[#212630] to-[#16181F] border-[#DE744C]/80 ring-2 ring-[#DE744C]/30 shadow-2xl shadow-[#DE744C]/25 z-20'
          : 'bg-gradient-to-b from-[#1B1E26] to-[#13151B] border-white/10 shadow-xl hover:border-white/20 z-10'
      }`}
    >
      {/* Top subtle glow accent line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #DE744C, transparent)',
          opacity: isHovered ? 1 : 0.25,
        }}
      />

      {/* Interactive Laser Spotlight Aura that follows mouse inside card */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-3xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${tilt.spotlightX}% ${tilt.spotlightY}%, rgba(222, 116, 76, 0.22), transparent 75%)`,
        }}
      />

      {/* Decorative Giant Watermark Quote Glyphs in background */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 text-white/[0.02] group-hover:text-[#DE744C]/[0.08] transition-all duration-500 scale-100 group-hover:scale-125 group-hover:-rotate-12">
        <Quote className="w-36 h-36" />
      </div>

      <div className="relative z-10 space-y-4">
        {/* Top Badges Row: Google Review Pill + Star Rating */}
        <div className="flex items-center justify-between gap-2">
          {/* Google Verified Reviewer Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-[#DE744C]/40 group-hover:bg-[#DE744C]/10 transition-colors">
            <GoogleGIcon />
            <span className="text-[11px] font-bold text-white tracking-wide">Google Review</span>
          </div>

          {/* Stars */}
          <div className="flex text-amber-400 gap-0.5">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 fill-amber-400 transition-all duration-300 ${
                  isHovered ? 'drop-shadow-[0_0_6px_rgba(251,191,36,0.9)] scale-110' : ''
                }`}
                style={{ transitionDelay: `${i * 35}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Dribbble Style Editorial Quote Headline */}
        <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#DE744C] transition-colors leading-snug tracking-tight">
          {headline}
        </h3>

        {/* Testimonial Quote Text */}
        <p className="text-xs sm:text-sm text-[#C5CAD4] group-hover:text-[#E2E8F0] leading-relaxed transition-colors duration-200">
          "{review.text}"
        </p>
      </div>

      {/* Author and Verification Footer */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 group-hover:border-[#DE744C]/30 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-3">
          {/* Avatar initial circle with glowing border on hover */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#DE744C] to-amber-500 text-white font-black text-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform ring-2 ring-white/10 group-hover:ring-[#DE744C]/50">
            {review.author.charAt(0)}
          </div>
          <div>
            <h4 className="font-extrabold text-white text-sm group-hover:text-[#DE744C] transition-colors">
              {review.author}
            </h4>
            <span className="text-xs text-[#9EA4B0] block mt-0.5 font-medium">
              Verified Customer
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[11px] font-bold text-[#DE744C] flex items-center gap-1.5 justify-end">
            {/* Live radar beacon ping */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DE744C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DE744C]" />
            </span>
            <span>Verified Job</span>
          </span>
          <span className="text-[10px] text-[#8E97A6] block mt-0.5 line-clamp-1 max-w-[130px]">
            {review.service}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#121418] text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient terracotta & golden glows */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-96 h-96 bg-[#DE744C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DE744C]/15 text-[#DE744C] text-xs font-black uppercase tracking-wider border border-[#DE744C]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#DE744C]" />
            <span>Real Melbourne Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Loved By Melbourne Homeowners
          </h2>
          <p className="text-sm sm:text-base text-[#9EA4B0] leading-relaxed max-w-2xl mx-auto font-normal">
            Read real feedback from homeowners, tenants, and business owners who rely on Legend Pest Control for permanent pest eradication.
          </p>
        </div>

        {/* High-End Dribbble Social Proof & Rating Strip */}
        <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#1B1E26] via-[#16181F] to-[#1B1E26] border border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#DE744C]/10 via-transparent to-transparent pointer-events-none" />
          
          {/* Left: Google Rating */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <GoogleGIcon />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white">4.9</span>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#9EA4B0] block font-medium">Over 1,450+ verified local ratings</span>
            </div>
          </div>

          {/* Right: Key Performance Trust Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 relative z-10">
            <span className="text-xs font-bold text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/10 inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DE744C]" />
              100% Bond Pass Rate
            </span>
            <span className="text-xs font-bold text-[#DE744C] bg-[#DE744C]/15 px-3 py-1.5 rounded-full border border-[#DE744C]/30 inline-flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#DE744C]" />
              Same-Day Service
            </span>
          </div>
        </div>

        {/* High-End Bento 3D Perspective Reviews Grid: Exactly 4 Curated Reviews (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mt-12 max-w-5xl mx-auto">
          {[TESTIMONIALS[0], TESTIMONIALS[1], TESTIMONIALS[2], TESTIMONIALS[5] || TESTIMONIALS[3]].map((review, idx) => (
            <DribbbleReviewCard
              key={review.id}
              review={review}
              index={idx}
            />
          ))}
        </div>

        {/* Review Footnote */}
        <div className="mt-12 text-center text-xs text-[#9EA4B0] flex items-center justify-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#DE744C]" />
          <span>Every review is from a verified resident or business in Victoria.</span>
        </div>

      </div>
    </section>
  );
};