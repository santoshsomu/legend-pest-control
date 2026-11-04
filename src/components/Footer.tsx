import React from 'react';
import { Phone, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { LegendLogo } from './LegendLogo';
import { COMPANY_DETAILS, SERVICES } from '../data/pestData';

interface FooterProps {
  onOpenCallback: (service?: string) => void;
  onNavigateHome?: () => void;
  onNavigateService?: (serviceId: string) => void;
  hideCta?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenCallback,
  onNavigateHome,
  hideCta = false,
}) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <footer className="bg-[#121418] text-[#9EA4B0] text-xs border-t border-[#232733]">
      
      {/* Top CTA Strip (Shown only when not hidden) */}
      {!hideCta && (
        <div className="bg-gradient-to-r from-[#161820] via-[#121418] to-[#161820] border-b border-[#242833] py-8 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1">
              <span className="text-[#DE744C] font-black text-xs uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Every pest problem, one legendary solution</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Seeing Pests or Smelling Something in the Roof?
              </h3>
              <p className="text-xs sm:text-sm text-[#C5CAD4]">
                Call now for a free rapid estimate on {COMPANY_DETAILS.phone}.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DE744C] hover:bg-[#C85E36] active:bg-[#B8522B] text-white font-black rounded-xl text-sm transition shadow-lg shadow-[#DE744C]/25"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => onOpenCallback()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E222A] hover:bg-[#282E39] text-[#F8F9FA] font-bold rounded-xl text-sm border border-[#303746] transition cursor-pointer"
              >
                <span>Request A Callback</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={handleHomeClick} className="cursor-pointer text-left">
              <LegendLogo />
            </button>
            
            <p className="text-[#9EA4B0] leading-relaxed text-xs sm:text-sm pr-4">
              Legend Pest Control provides residential, commercial, and specialist pest eradication across Greater Melbourne. Dedicated to honest upfront pricing and guaranteed results.
            </p>

            <div className="space-y-1.5 text-xs text-[#C5CAD4]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#DE744C] shrink-0" />
                <span>6-Month Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#DE744C] shrink-0" />
                <span>Fully Licensed and Certified</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Pest Services</h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#DE744C] transition">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Contact & Hours</h4>
            <div className="space-y-2 text-xs text-[#9EA4B0]">
              <div>
                <strong className="text-white block">Direct Hotline:</strong>
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="text-[#DE744C] text-sm font-bold hover:underline">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div>
                <strong className="text-white block">Email Inquiries:</strong>
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#DE744C] text-xs hover:underline block break-all">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div>
                <strong className="text-white block mt-2">Service Hours:</strong>
                <span>7 Days • 7:00 AM – 7:00 PM</span>
              </div>
              <div>
                <strong className="text-white block">Service Coverage:</strong>
                <span>Greater Melbourne &amp; Surrounds</span>
              </div>
            </div>
          </div>

        </div>

        {/* Payment Options Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#1A1D24] border border-[#2B303C] flex flex-col md:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider shrink-0">
              Payment Options:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#242833] border border-[#343A48] text-slate-200 text-xs font-black">CASH</span>
              <span className="px-2.5 py-0.5 rounded bg-[#242833] border border-[#343A48] text-slate-200 text-xs font-black">CARD</span>
              <span className="px-2.5 py-0.5 rounded bg-[#242833] border border-[#343A48] text-slate-200 text-xs font-black">EFTPOS</span>
              <span className="px-2.5 py-0.5 rounded bg-[#DE744C]/20 border border-[#DE744C]/40 text-[#DE744C] text-xs font-black">AFTERPAY</span>
              <span className="px-2.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black">ZIP PAY</span>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs text-[#9EA4B0] italic">
            (Note: We take same day payments after the job is completed)
          </p>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Legend Pest Control. All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={handleHomeClick} className="hover:text-slate-400 transition cursor-pointer">Home</button>
            <a href="#services" className="hover:text-slate-400 transition">Services</a>
            <a href="#gallery" className="hover:text-slate-400 transition">Gallery</a>
            <a href="#why-us" className="hover:text-slate-400 transition">Why Legend</a>
            <a href="#faq" className="hover:text-slate-400 transition">FAQ</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
