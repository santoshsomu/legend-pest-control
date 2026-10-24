import React, { useState, useEffect } from 'react';
import { Phone, Clock, Shield, Menu, X, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { LegendLogo } from './LegendLogo';
import { COMPANY_DETAILS } from '../data/pestData';

interface HeaderProps {
  onOpenCallback: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCallback }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing Calculator', href: '#calculator' },
    { label: 'Service Areas', href: '#areas' },
    { label: 'Why Legend', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Offer: $50 OFF For New Customers</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>6-Month Treatment Re-spray Warranty</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Available 7 Days • Same-Day Dispatch</span>
            </span>
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 font-bold text-white hover:text-amber-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Free Rapid Quote: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <LegendLogo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenCallback()}
              className="px-4 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full border border-blue-200 transition shadow-xs cursor-pointer"
            >
              Get a Callback
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm rounded-full shadow-md shadow-blue-600/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="p-2 bg-blue-600 text-white rounded-full shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-500">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Technicians on duty today
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Geelong & Melbourne West
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 font-semibold hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY_DETAILS.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback();
                }}
                className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-xl text-sm transition"
              >
                ⚡ Get a Callback ($50 Off Voucher)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
