import React, { useState } from 'react';
import { X, Phone, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS, SUBURBS, SERVICES } from '../data/pestData';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General Pest Treatment',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [suburb, setSuburb] = useState('');
  const [pestType, setPestType] = useState(defaultService);
  const [urgency, setUrgency] = useState<'today' | 'this-week' | 'quote-only'>('today');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setSuburb('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header accent strip */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-slate-900 px-5 sm:px-6 py-4 text-white shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                15-Minute Guaranteed Callback
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold mt-1">Get Fast Free Quote & Pest Advice</h3>
          <p className="text-xs text-emerald-100 mt-0.5">
            Your <strong className="text-amber-300 font-bold">$50 OFF</strong> new customer voucher will be locked in for your call.
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
                Thanks <strong className="text-slate-900">{name || 'there'}</strong>! Sahithi or our senior duty technician is reviewing your address in {suburb || 'Melbourne/Geelong'} and will call you on <strong className="text-emerald-700">{phone}</strong> shortly.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-left text-xs text-amber-900 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>$50 Discount Voucher Locked In:</strong> Mention code <span className="font-mono font-bold bg-amber-200/80 px-1 py-0.5 rounded">LEGEND50</span> when answering our call to deduct $50 from your invoice!
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now Instead: {COMPANY_DETAILS.phone}
              </a>
              <button
                onClick={handleReset}
                className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-base sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Phone Number (For Fast Callback) *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 0412 345 678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-base sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Suburb */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Your Suburb in Geelong or Melbourne West *
              </label>
              <input
                type="text"
                required
                list="suburbs-list-modal"
                placeholder="e.g. Geelong, Werribee, Belmont, Lara..."
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-base sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              <datalist id="suburbs-list-modal">
                {SUBURBS.map((s) => (
                  <option key={s.name} value={s.name} />
                ))}
              </datalist>
            </div>

            {/* Pest Issue */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Pest Concern
              </label>
              <select
                value={pestType}
                onChange={(e) => setPestType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-base sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Multiple Pests / Not Sure">Multiple Pests / Not Sure</option>
              </select>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                How Urgent Is It?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'today', label: '🚨 Today', sub: 'Urgent Dispatch' },
                  { id: 'this-week', label: 'This Week', sub: 'Flexible' },
                  { id: 'quote-only', label: 'Quote Only', sub: 'Price check' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id as any)}
                    className={`py-2 px-1.5 rounded-xl border text-center transition cursor-pointer ${
                      urgency === item.id
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs">{item.label}</div>
                    <div className="text-[10px] text-slate-400">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Connecting with tech...</span>
                ) : (
                  <>
                    <Phone className="w-4 h-4" />
                    <span>Request Callback ($50 Off Voucher Active)</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>We never share your information. No spam, ever.</span>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
