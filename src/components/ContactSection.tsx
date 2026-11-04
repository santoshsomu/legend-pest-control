import React from 'react';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award,
  Sparkles
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pestData';
import { QuoteRequestForm } from './QuoteRequestForm';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService = '' }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Get A Quote Now • Quotes Include $50 Coupon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get Your Transparent Pest Quote
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Fill out the rapid form below to claim your <strong className="text-amber-400 font-bold">$50 New Customer Discount</strong>, or call us directly on {COMPANY_DETAILS.phone} for immediate phone assistance.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-800 to-slate-900 p-6 sm:p-8 shadow-xl border border-emerald-700/60 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 block">
                Direct Line • 7 Days
              </span>
              <div>
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="text-3xl sm:text-4xl font-black text-white hover:text-amber-300 transition-colors block"
                >
                  {COMPANY_DETAILS.phone}
                </a>
                <p className="text-xs text-emerald-100 mt-1">
                  Fastest way to get an immediate estimate &amp; priority same-day service.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-white/90">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping" />
                <span>Duty Technician Available Right Now Across Melbourne</span>
              </div>
            </div>

            {/* Business Credential Details */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Direct Support &amp; Enquiries
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Immediate Phone Support:</strong>
                    <span>{COMPANY_DETAILS.phone} (7:00 AM – 8:00 PM Daily)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Email:</strong>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-emerald-300 hover:underline">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">State Accreditation:</strong>
                    <span>Fully Licensed and Certified • Comprehensive Public Liability</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Legend team guarantee 100% customer satisfaction.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Unified Quote Request Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl">
            <div className="border-b border-slate-100 pb-4 mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-900">Get A Quote Now</h3>
                <p className="text-xs text-slate-500 font-medium">Quotes provided include your $50 new customer coupon applied</p>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400 text-slate-950">
                $50 Off Active
              </span>
            </div>

            <QuoteRequestForm
              defaultService={selectedService}
              source="Bottom Contact Section"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
