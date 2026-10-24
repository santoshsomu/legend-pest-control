import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
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
    propertyType: 'Residential (3-4 Bed House)',
    preferredDate: '',
    timeSlot: 'Morning (8:00 AM - 12:00 PM)',
    promoCode: 'LEGEND50',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = 'LPC-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Bookings & Direct Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Schedule Your Inspection or Treatment
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Fill out the form below to lock in your preferred date and your <strong className="text-amber-400 font-bold">$50 OFF</strong> voucher, or call us directly on 1800 623 252 for immediate telephone assistance.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Card */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-6 sm:p-8 shadow-xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block">
                Direct Line • 7 Days
              </span>
              <div>
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="text-3xl sm:text-4xl font-black text-white hover:text-amber-300 transition-colors block"
                >
                  {COMPANY_DETAILS.phone}
                </a>
                <p className="text-xs text-blue-100 mt-1">
                  Fastest way to get an immediate estimate & same-day dispatch.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-white/90">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Duty Technician Available Right Now</span>
              </div>
            </div>

            {/* Business Credential Details */}
            <div className="rounded-3xl bg-slate-800/80 border border-slate-700 p-6 sm:p-8 space-y-4">
              <h3 className="font-bold text-white text-base">Company & Licensing Information</h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Operating Hours:</strong>
                    <span>{COMPANY_DETAILS.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Dispatch Depots:</strong>
                    <span>Geelong, Lara, Werribee, Point Cook & Melbourne's West</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Email:</strong>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-blue-300 hover:underline">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">State Licensing & Insurance:</strong>
                    <span>{COMPANY_DETAILS.licence} • ABN {COMPANY_DETAILS.abn} • {COMPANY_DETAILS.insurance}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Sahithi & the Legend team guarantee 100% customer satisfaction.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-5 animate-in fade-in">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Booking Request Confirmed
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Thank You, {formData.name || 'Valued Customer'}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your reference number is <strong className="text-amber-400 font-mono text-base">{bookingRef}</strong>. Our dispatch team is reviewing your address in {formData.suburb} and will confirm your technician's arrival window by phone on <strong className="text-white">{formData.phone}</strong>.
                  </p>
                </div>

                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-700 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Service:</span>
                    <span className="font-bold text-white">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Preferred Date:</span>
                    <span className="font-bold text-white">{formData.preferredDate || 'Earliest Available'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Promo Applied:</span>
                    <span className="font-bold text-amber-400">$50 OFF Voucher</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Warranty:</span>
                    <span className="font-bold text-emerald-400">6-Month Free Re-spray</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call To Speak With Duty Tech Now
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold rounded-xl text-sm transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <h3 className="font-bold text-lg text-white">Book Your Treatment</h3>
                  <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> $50 Off Voucher Active
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Email & Suburb */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Email Address (For Invoice & Warranty) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Suburb / Town *
                    </label>
                    <input
                      type="text"
                      required
                      list="suburbs-contact"
                      placeholder="e.g. Geelong, Werribee, Lara"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500"
                    />
                    <datalist id="suburbs-contact">
                      {SUBURBS.map((s) => (
                        <option key={s.name} value={`${s.name} (${s.postcode})`} />
                      ))}
                    </datalist>
                  </div>
                </div>

                {/* Service Type & Property */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Primary Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="Residential (1-2 Bed Unit)">Unit / Apartment (1-2 Bed)</option>
                      <option value="Residential (3-4 Bed House)">Standard House (3-4 Bed)</option>
                      <option value="Residential (5+ Bed Large House)">Large House (5+ Bed / 2-Storey)</option>
                      <option value="Commercial / Hospitality">Commercial Facility / Restaurant</option>
                      <option value="End of Lease Tenancy">End-of-Lease Vacate</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Time Window */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Preferred Window
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="Urgent ASAP (Same-Day Priority)">Urgent ASAP (Same-Day Priority)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Details & Pets */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Pest Sighting Details & Pets (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Spiders in alfresco area, we have a small dog that will be indoors."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                {/* Promo Code Strip */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-700 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400">Promo Code:</span>
                    <span className="font-mono bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-bold">
                      {formData.promoCode}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-semibold">✓ $50 Discount Applied</span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Registering Booking Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Booking & Lock In $50 Off</span>
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-400">
                  🔒 We never share your details. No pre-payment required; pay upon job completion.
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
