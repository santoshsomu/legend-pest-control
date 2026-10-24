import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQS, COMPANY_DETAILS } from '../data/pestData';

interface FaqSectionProps {
  onOpenCallback: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenCallback }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about safety, chemical drying times, our 6-month warranty, and how we handle your home.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-500 bg-blue-50/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-blue-100/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions box */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Have a specific pest or property question?</h4>
            <p className="text-xs text-slate-300">
              Speak directly with Sahithi or our senior Victorian licensed technician.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={onOpenCallback}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Ask Via Callback</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
