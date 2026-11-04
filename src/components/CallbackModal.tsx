import React from 'react';
import { X } from 'lucide-react';
import { QuoteRequestForm } from './QuoteRequestForm';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#2B303C] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header matching Brand Charcoal & Terracotta aesthetic */}
        <div className="bg-[#14161B] px-6 py-4.5 text-white flex items-center justify-between border-b border-[#242833]">
          <div>
            <h3 className="text-lg font-black tracking-tight text-white">Get A Quote Now (15-Min Callback)</h3>
            <p className="text-xs text-[#DE744C] font-semibold mt-0.5">
              Quotes provided include your $50 new customer coupon applied
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content using unified form */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          <QuoteRequestForm
            defaultService={defaultService}
            source="Callback 15-Min Modal"
          />
        </div>
      </div>
    </div>
  );
};
