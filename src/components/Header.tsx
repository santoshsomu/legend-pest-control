import React, { useState, useEffect } from 'react';
import { Phone, Clock, Shield, Menu, X, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { LegendLogo } from './LegendLogo';
import { COMPANY_DETAILS } from '../data/pestData';

interface HeaderProps {
  onOpenCallback: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenCallback,
}) => {
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
    { label: 'Free Quote Assessment', href: '#assessment' },
    { label: 'Service Areas', href: '#areas' },
    { label: 'Why Legend', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Offer: Free 10-Point Termite &amp; Pest Inspection</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-300 font-medium">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Every pest problem, one legendary solution</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Available 7 Days</span>
            </span>
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 font-extrabold text-white hover:text-amber-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free Rapid Quote: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-emerald-100'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with official brand design */}
          <a href="#" className="flex items-center gap-2 group" aria-label="Legend Pest Control Home">
            <LegendLogo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenCallback()}
              className="px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-full border border-emerald-200 transition shadow-xs cursor-pointer"
            >
              Request Free Quote
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold text-sm rounded-full shadow-md shadow-emerald-700/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="p-2.5 bg-emerald-700 text-white rounded-full shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-emerald-100 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Local Technicians On Road Today
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Across Greater Melbourne
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 font-semibold hover:bg-emerald-50 hover:text-emerald-700 transition"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-700 active:bg-emerald-800 text-white font-black rounded-xl shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY_DETAILS.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback();
                }}
                className="w-full py-3 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-slate-950 font-black rounded-xl text-sm transition shadow-sm cursor-pointer"
              >
                ⚡ Get Free Rapid Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
