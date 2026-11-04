import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, SUBURBS, COMPANY_DETAILS } from '../data/pestData';
import { submitQuoteToEmail } from '../utils/quoteMailer';
import { trackGoogleLeadConversion } from '../utils/googleAds';

interface QuoteRequestFormProps {
  defaultService?: string;
  source?: string;
  onSuccess?: () => void;
  variant?: 'default' | 'liquid-glass' | 'dark';
}

export const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({
  defaultService = '',
  source = 'Website Form',
  onSuccess,
  variant = 'default',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [suburb, setSuburb] = useState('');
  const [description, setDescription] = useState('');
  const [pestType, setPestType] = useState(defaultService || 'General Pest Treatment');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isGlass = variant === 'liquid-glass';
  const isDark = variant === 'dark' || variant === 'liquid-glass';

  const inputClass = isGlass
    ? "w-full px-3 py-2 rounded-xl border border-white/40 bg-white text-slate-950 placeholder:text-slate-400 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#DE744C] focus:ring-2 focus:ring-[#DE744C]/40 shadow-sm font-semibold transition-all"
    : "w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-950 placeholder:text-slate-400 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#DE744C] focus:ring-2 focus:ring-[#DE744C]/40 shadow-xs font-semibold";

  const selectClass = isGlass
    ? "w-full px-3 py-2 rounded-xl border border-white/40 bg-white text-slate-950 text-xs sm:text-sm focus:outline-none focus:border-[#DE744C] focus:ring-2 focus:ring-[#DE744C]/40 shadow-sm font-semibold transition-all cursor-pointer"
    : "w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-950 text-xs sm:text-sm focus:outline-none focus:border-[#DE744C] focus:ring-2 focus:ring-[#DE744C]/40 shadow-xs font-semibold cursor-pointer";

  const labelClass = isDark
    ? "block text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-200 mb-1"
    : "block text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1";

  useEffect(() => {
    if (defaultService && defaultService.trim().length > 0) {
      setPestType(defaultService);
    }
  }, [defaultService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    submitQuoteToEmail({
      name,
      phone,
      email: email ? email.trim() : 'Not provided',
      suburb: suburb ? suburb.trim() : 'Melbourne',
      service: pestType,
      notes: description.trim() ? description.trim() : 'No notes provided',
      source,
    });

    // Fire Google Ads Lead Received Conversion Event
    trackGoogleLeadConversion('quote_form', {
      service: pestType,
      suburb: suburb || 'Melbourne',
      source: source,
      label: `Quote Form: ${pestType} (${suburb || 'Melbourne'})`,
    });

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

      if (onSuccess) {
        onSuccess();
      }
    }, 450);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setSuburb('');
    setDescription('');
  };

  // High-Contrast, Crystal-Clear Confirmation Screen
  if (isSubmitted) {
    return (
      <div className={`p-5 sm:p-6 text-center space-y-3.5 ${isGlass ? 'text-white' : 'text-slate-900'}`}>
        <div className="w-12 h-12 bg-[#DE744C]/25 text-[#FF9570] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#DE744C]/15">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <div className="space-y-1">
          <h4 className={`text-xl sm:text-2xl font-black ${isGlass ? 'text-white drop-shadow-md' : 'text-slate-900'}`}>
            Quote Request Received!
          </h4>
          <p className={`text-xs sm:text-sm leading-relaxed ${isGlass ? 'text-slate-200' : 'text-slate-600'}`}>
            Thanks <strong className={isGlass ? 'text-white font-bold' : 'text-slate-900 font-bold'}>{name || 'there'}</strong>! Our duty technician is reviewing your request for <span className={isGlass ? 'text-amber-300 font-bold' : 'text-slate-900 font-bold'}>{suburb || 'Melbourne'}</span> and will call you on <strong className={isGlass ? 'text-[#FF9570] font-black' : 'text-[#DE744C] font-black'}>{phone}</strong> shortly.
          </p>
        </div>

        <div className={isGlass ? "bg-[#DE744C]/20 border border-[#DE744C]/50 rounded-xl p-3 text-left text-xs text-white flex items-start gap-2.5 shadow-xs" : "bg-amber-50 border border-amber-200 rounded-xl p-3 text-left text-xs text-amber-900 flex items-start gap-2.5"}>
          <Sparkles className={`w-4 h-4 shrink-0 mt-0.5 ${isGlass ? 'text-amber-300' : 'text-amber-600'}`} />
          <div>
            <strong className={isGlass ? "text-amber-200" : "text-amber-950"}>$50 New Customer Discount Applied:</strong> We have credited $50 off your treatment quote for {suburb || 'Melbourne'}!
          </div>
        </div>

        <div className="pt-1 flex flex-col sm:flex-row gap-2">
          <a
            href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
            className="flex-1 py-2.5 px-3 bg-[#DE744C] hover:bg-[#C85E36] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#DE744C]/25"
          >
            <Phone className="w-4 h-4" />
            <span>Call Directly: {COMPANY_DETAILS.phone}</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className={isGlass ? "py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs sm:text-sm cursor-pointer border border-white/20" : "py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs sm:text-sm cursor-pointer"}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  // Streamlined, Fast 2-Column Responsive Form (Significantly Shorter & Easier to Complete)
  return (
    <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
      {/* Row 1: Name and Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
        <div>
          <label className={labelClass}>
            Your Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2: Suburb and Pest Concern */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
        <div>
          <label className={labelClass}>
            Melbourne Suburb *
          </label>
          <input
            type="text"
            required
            list="suburbs-list-unified"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            className={inputClass}
          />
          <datalist id="suburbs-list-unified">
            {SUBURBS.map((s) => (
              <option key={s.name} value={`${s.name} (${s.postcode})`} />
            ))}
          </datalist>
        </div>

        <div>
          <label className={labelClass}>
            Pest Problem *
          </label>
          <select
            value={pestType}
            onChange={(e) => setPestType(e.target.value)}
            className={selectClass}
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.name} className="bg-white text-slate-950 py-1 font-semibold">
                {s.name}
              </option>
            ))}
            <option value="Multiple Pests / Custom Assessment" className="bg-white text-slate-950 py-1 font-semibold">
              Multiple Pests / Custom Assessment
            </option>
          </select>
        </div>
      </div>

      {/* Row 3: Optional Email & Notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
        <div>
          <label className={labelClass}>
            Email Address <span className="opacity-70 lowercase font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Notes / Urgency <span className="opacity-70 lowercase font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Submit Button with $50 Off Mention & Phone Number */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={isLoading}
          className={
            isGlass
              ? "w-full py-3 px-4 bg-gradient-to-r from-[#DE744C] via-[#E26538] to-[#DE744C] hover:brightness-110 active:brightness-95 text-white font-black text-sm rounded-xl shadow-lg shadow-[#DE744C]/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-white/20"
              : "w-full py-3 px-4 bg-[#DE744C] hover:bg-[#C85E36] active:bg-[#B8522B] text-white font-black text-sm rounded-xl shadow-md shadow-[#DE744C]/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          }
        >
          {isLoading ? (
            <span>Connecting with technician...</span>
          ) : (
            <>
              <Phone className="w-4 h-4 text-white" />
              <span>Get a quote now • {COMPANY_DETAILS.phone}</span>
            </>
          )}
        </button>
        <p className={`text-[11px] font-bold text-center pt-1.5 ${isGlass ? 'text-[#FFB199] drop-shadow-xs' : 'text-[#DE744C]'}`}>
          Quotes provided include $50 coupon applied • Pay upon service completion
        </p>
      </div>

      <div className={`flex items-center justify-center gap-3 text-[10px] sm:text-[11px] pt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#DE744C]" /> Prompt callback
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#DE744C]" /> Zero spam guarantee
        </span>
      </div>
    </form>
  );
};
