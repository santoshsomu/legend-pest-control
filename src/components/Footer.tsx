import React from 'react';
import { Phone, ShieldCheck, HeartHandshake, Award, Sparkles } from 'lucide-react';
import { LegendLogo } from './LegendLogo';
import { COMPANY_DETAILS, SERVICES, SUBURBS } from '../data/pestData';

interface FooterProps {
  onOpenCallback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenCallback,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-emerald-950">
      
      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 border-b border-emerald-900/50 py-8 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Every pest problem, one legendary solution</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Seeing Pests or Smelling Something in the Roof?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              Call now for a free rapid estimate on 0416 388 777 or lock in your $50 new customer voucher.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-sm transition shadow-lg shadow-amber-400/20"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={onOpenCallback}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-800/80 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm border border-emerald-600/40 transition cursor-pointer"
            >
              <span>Request 15-Min Callback</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <LegendLogo variant="dark" />
            
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm pr-4">
              Legend Pest Control provides residential, commercial, and specialist pest eradication across Geelong, Lara, Werribee, Point Cook, and Melbourne's West. Owner-operated by Sahithi and team, dedicated to honest upfront pricing and guaranteed results.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>6-Month Free Re-treatment Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Pet & Child Safe APVMA Low-Toxicity Products</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_DETAILS.licence} • ABN {COMPANY_DETAILS.abn}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Pest Services</h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-emerald-400 transition">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Top Suburbs */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Service Areas</h4>
            <ul className="space-y-2 text-xs">
              {SUBURBS.slice(0, 8).map((sub) => (
                <li key={sub.name}>
                  <a href="#areas" className="hover:text-emerald-400 transition">
                    Pest Control {sub.name} ({sub.postcode})
                  </a>
                </li>
              ))}
              <li>
                <a href="#areas" className="text-emerald-400 font-semibold hover:underline">
                  View All Suburbs →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Contact & Hours</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <strong className="text-white block">Direct Hotline:</strong>
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="text-emerald-400 text-sm font-bold hover:underline">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div>
                <strong className="text-white block">Email Inquiries:</strong>
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-emerald-400 text-xs hover:underline block break-all">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div>
                <strong className="text-white block mt-2">Emergency Dispatch:</strong>
                <span>7 Days • 7:00 AM – 7:00 PM</span>
              </div>
              <div>
                <strong className="text-white block">Service Coverage:</strong>
                <span>Geelong, Bellarine & Melbourne West</span>
              </div>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-bold">
                  Owner-Operated by Sahithi
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Legend Pest Control Melbourne & Geelong. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-slate-400 transition">Services</a>
            <a href="#assessment" className="hover:text-slate-400 transition">Free Quote</a>
            <a href="#why-us" className="hover:text-slate-400 transition">Why Legend</a>
            <a href="#faq" className="hover:text-slate-400 transition">FAQ</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
