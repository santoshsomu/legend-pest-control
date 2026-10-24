import React from 'react';
import { Phone, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { LegendLogo } from './LegendLogo';
import { COMPANY_DETAILS, SERVICES, SUBURBS } from '../data/pestData';

interface FooterProps {
  onOpenCallback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCallback }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 border-b border-blue-900/50 py-8 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
              ⚡ Geelong & Melbourne West Pest Helpline
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Seeing Pests Around The House?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Call now for a free rapid estimate on 1800 623 252 or lock in your $50 new customer voucher.
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
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm border border-white/20 transition cursor-pointer"
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
                <HeartHandshake className="w-4 h-4 text-blue-400 shrink-0" />
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
                  <a href="#services" className="hover:text-white transition">
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
                  <a href="#areas" className="hover:text-white transition">
                    Pest Control {sub.name} ({sub.postcode})
                  </a>
                </li>
              ))}
              <li>
                <a href="#areas" className="text-blue-400 hover:underline">
                  + View all 25+ suburbs →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Direct Contact</h4>
            <div className="space-y-2 text-xs">
              <p>
                <strong className="text-white block">Toll-Free Phone:</strong>
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="text-amber-400 font-bold hover:underline">
                  {COMPANY_DETAILS.phone}
                </a>
              </p>
              <p>
                <strong className="text-white block">Email:</strong>
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-blue-400 hover:underline">
                  {COMPANY_DETAILS.email}
                </a>
              </p>
              <p>
                <strong className="text-white block">Hours:</strong>
                <span>{COMPANY_DETAILS.hours}</span>
              </p>
              <p>
                <strong className="text-white block">Insurance:</strong>
                <span>{COMPANY_DETAILS.insurance}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Legal & Standards Compliance */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Victorian Department of Health Registered. Compliant with Australian Standards AS 3660 & AS 4349.3.
            </p>
            <div className="flex items-center gap-4">
              <a href="#faq" className="hover:text-slate-300">Warranty Terms</a>
              <span>•</span>
              <a href="#contact" className="hover:text-slate-300">Privacy Policy</a>
              <span>•</span>
              <a href="#services" className="hover:text-slate-300">Price Guide</a>
            </div>
          </div>
          <p className="text-[10px] text-slate-600 leading-normal">
            Disclaimer: Special $50 discount voucher applies to new residential customers booking a full general pest treatment or specialist package. Chemical treatments require standard drying safety clearance of approximately 1.5–2 hours.
          </p>
        </div>

      </div>
    </footer>
  );
};
