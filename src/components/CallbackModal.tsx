import React, { useState } from 'react';
import { X, Phone, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS, SUBURBS } from '../data/pestData';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General Pest Control',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [suburb, setSuburb] = useState('');
  const [pestType, setPestType] = useState(defaultService);
  const [urgency, setUrgency] = useState<'today' | 'this-week' | 'quote-only'>('today');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Fire confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setSuburb('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header accent strip */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-5 sm:px-6 py-4 text-white shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
                15-Minute Guaranteed Callback
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-blue-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold mt-1">Get Fast Pest Estimate & Advice</h3>
          <p className="text-xs text-blue-100 mt-0.5">
            Claim your <strong className="text-amber-300 font-bold">$50 OFF</strong> new customer discount on the call.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4 overflow-y-auto">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-1">
              <h4 className="text-2xl font-bold text-slate-900">Request Received!</h4>
              <p className="text-sm text-slate-600">
                Thanks <strong className="text-slate-900">{name || 'there'}</strong>! Our lead duty technician is reviewing your suburb ({suburb || 'Melbourne/Geelong'}) and will call you on <strong className="text-blue-600">{phone}</strong> shortly.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-left text-xs text-amber-900 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>$50 Discount Voucher Locked In:</strong> Mention code <span className="font-mono font-bold bg-amber-200/80 px-1 py-0.5 rounded">LEGEND50</span> when answering our call to deduct $50 from your invoice!
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-md shadow-blue-600/20 text-sm"
              >
                <Phone className="w-4 h-4" />
                Or Call Now: {COMPANY_DETAILS.phone}
              </a>
              <button
                onClick={handleReset}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
            {/* Urgency selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                When do you need service?
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setUrgency('today')}
                  className={`py-2 px-2 rounded-lg border text-center transition-all ${
                    urgency === 'today'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  ⚡ Today / ASAP
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('this-week')}
                  className={`py-2 px-2 rounded-lg border text-center transition-all ${
                    urgency === 'this-week'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  📅 This Week
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('quote-only')}
                  className={`py-2 px-2 rounded-lg border text-center transition-all ${
                    urgency === 'quote-only'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  💬 Just a Quote
                </button>
              </div>
            </div>

            {/* Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-base sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number (Mobile) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0400 123 456"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-base sm:text-sm"
                />
              </div>
            </div>

            {/* Suburb and Pest Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Suburb / Location *
                </label>
                <input
                  type="text"
                  required
                  list="suburb-suggestions"
                  placeholder="e.g. Werribee, Geelong, Point Cook"
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-base sm:text-sm"
                />
                <datalist id="suburb-suggestions">
                  {SUBURBS.map((s) => (
                    <option key={s.name} value={`${s.name} (${s.postcode})`} />
                  ))}
                </datalist>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pest Problem *
                </label>
                <select
                  value={pestType}
                  onChange={(e) => setPestType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-base sm:text-sm bg-white"
                >
                  <option value="General Pest Control">General (Spiders, Ants, Roaches)</option>
                  <option value="German Cockroaches">German Cockroaches (Kitchen/Appliances)</option>
                  <option value="Rats & Mice">Rats & Mice (Roof / Cavities)</option>
                  <option value="Termites">Termite Inspection or Barrier</option>
                  <option value="Wasps & Bees">Wasps / Bee Nest Removal</option>
                  <option value="End of Lease">End of Lease Flea Treatment (Bond Return)</option>
                  <option value="Commercial">Commercial / Restaurant Compliance</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Brief details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Where are you seeing them? Any pets or children?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-base sm:text-sm resize-none"
              />
            </div>

            {/* Trust highlights */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> 6-Month Warranty
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" /> Fast Call Back
              </span>
              <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                $50 Off Applied
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {isLoading ? (
                <span>Connecting to Technician...</span>
              ) : (
                <>
                  <Phone className="w-4 h-4" />
                  <span>Request Instant Callback & Lock In $50 Off</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
