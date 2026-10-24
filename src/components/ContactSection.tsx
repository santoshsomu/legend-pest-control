import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Send,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS, SERVICES, SUBURBS } from '../data/pestData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    service: 'General Pest Treatment',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = 'LPC-' + Math.floor(100000 + Math.random() * 900000);
      setQuoteRef(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Fast Free Quote & Immediate Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get Your Transparent Pest Quote
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Fill out the rapid 60-second form below to lock in your <strong className="text-amber-400 font-bold">$50 OFF</strong> voucher, or call us directly on 0416 388 777 for immediate phone assistance.
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
                  Fastest way to get an immediate estimate & same-day emergency dispatch.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-white/90">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping" />
                <span>Duty Technician Available Right Now Across Melbourne</span>
              </div>
            </div>

            {/* Business Credential Details */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-4">
              <h3 className="font-bold text-white text-base">Company &amp; Licensing Credentials</h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Operating Hours:</strong>
                    <span>{COMPANY_DETAILS.hours}</span>
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
                    <strong className="text-white block">State Accreditation &amp; Insurance:</strong>
                    <span>Fully Licensed &amp; Certified • {COMPANY_DETAILS.insurance}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Legend team guarantee 100% customer satisfaction.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quote Request Form (No self booking date picker) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-emerald-900/60 shadow-2xl">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-5 animate-in fade-in">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Quote Request Received
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Thank You, {formData.name || 'Valued Customer'}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your reference number is <strong className="text-amber-400 font-mono text-base">{quoteRef}</strong>. Our senior dispatch technician is reviewing your address in {formData.suburb || 'Melbourne'} and will call you on <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                </div>

                <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-left max-w-md mx-auto text-xs space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Service:</span>
                    <span className="font-bold text-white">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Special Offer:</span>
                    <span className="font-bold text-amber-400">Free 10-Point Inspection Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Warranty:</span>
                    <span className="font-bold text-emerald-400">6-Month Free Re-spray</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Speak With Duty Tech Right Now
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-sm transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="font-bold text-lg text-white">Request Your Fast Free Quote</h3>
                    <p className="text-xs text-slate-400">Prompt callback within 15 minutes</p>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Free Inspection Active
                  </span>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-base sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0412 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-base sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Email & Suburb */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-base sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Suburb / Town
                    </label>
                    <input
                      type="text"
                      list="suburbs-contact"
                      placeholder="e.g. Werribee, Richmond, Point Cook..."
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-base sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                    <datalist id="suburbs-contact">
                      {SUBURBS.map((s) => (
                        <option key={s.name} value={`${s.name} (${s.postcode})`} />
                      ))}
                    </datalist>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Primary Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-base sm:text-sm focus:outline-none focus:border-emerald-500"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Pest Sighting Details & Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you're seeing, smell location, or any specific access notes..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-base sm:text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-xl text-base shadow-xl shadow-amber-400/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-slate-950" />
                        <span>Get Free Quote With $50 Voucher</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-1 flex items-center justify-center gap-3 text-xs text-slate-400">
                  <span>✓ 100% Free & No Obligation</span>
                  <span>•</span>
                  <span>✓ No Credit Card Required</span>
                  <span>•</span>
                  <span>✓ $50 Voucher Valid Today</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
