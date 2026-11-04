import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ChevronRight, MapPin, Home } from 'lucide-react';
import { LegendLogo } from './LegendLogo';
import { COMPANY_DETAILS } from '../data/pestData';

interface HeaderProps {
  onOpenCallback: (service?: string) => void;
  currentRoute?: 'home' | 'bee-wasp-removal' | 'general-pest-control';
  onNavigateHome?: () => void;
  onNavigateService?: (serviceId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenCallback,
  currentRoute = 'home',
  onNavigateHome,
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

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Legend', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Sleek Top Contact Bar for Tablets */}
      <div className="hidden sm:block lg:hidden bg-[#0D0F13] border-b border-[#222632] py-2 px-3 sm:px-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <a
            href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-white hover:text-[#DE744C] transition-colors shrink-0"
          >
            <div className="w-5 h-5 rounded-full bg-[#DE744C]/20 flex items-center justify-center text-[#DE744C]">
              <Phone className="w-3 h-3" />
            </div>
            <span>{COMPANY_DETAILS.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY_DETAILS.email}`}
            className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-300 hover:text-white transition-colors truncate min-w-0"
            title={COMPANY_DETAILS.email}
          >
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#DE744C] shrink-0">
              <Mail className="w-3 h-3" />
            </div>
            <span className="truncate">{COMPANY_DETAILS.email}</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header in Dark Charcoal (#14161B) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#14161B]/95 backdrop-blur-md shadow-xl py-2 sm:py-2.5 border-b border-[#242833]'
            : 'bg-[#14161B] py-2.5 sm:py-3 border-b border-[#232733]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with official shield design */}
          <button 
            onClick={handleHomeClick} 
            className="flex items-center gap-2 group shrink-0 cursor-pointer text-left" 
            aria-label="Legend Pest Control Home"
          >
            <LegendLogo />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold text-[#E5E7EB]">
            {currentRoute !== 'home' ? (
              <button
                onClick={handleHomeClick}
                className="flex items-center gap-1.5 hover:text-[#DE744C] transition-colors py-1 cursor-pointer"
              >
                <Home className="w-4 h-4 text-[#DE744C]" />
                <span>Home</span>
              </button>
            ) : null}

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={currentRoute === 'home' ? link.href : `/${link.href}`}
                className="hover:text-[#DE744C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DE744C] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenCallback()}
              className="px-4 py-2 text-xs font-black text-[#14161B] bg-[#FAF9F6] hover:bg-white rounded-xl transition shadow-xs cursor-pointer flex items-center gap-1 group"
            >
              <span>Get a quote now</span>
              <span className="text-sm font-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#DE744C] hover:bg-[#C85E36] active:bg-[#B8522B] text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-[#DE744C]/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="p-2.5 bg-[#DE744C] text-white rounded-xl shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E5E7EB] hover:text-[#DE744C] hover:bg-[#1E222A] rounded-xl transition cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#14161B] border-b border-[#242833] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-[#242833] text-xs text-[#9EA4B0]">
              <span className="flex items-center gap-1.5 text-[#DE744C] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#DE744C] inline-block animate-pulse"></span>
                Local Technicians On Road Today
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#DE744C]" />
                Across Greater Melbourne
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {currentRoute !== 'home' ? (
                <button
                  onClick={handleHomeClick}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-[#F8F9FA] font-bold hover:bg-[#1E222A] hover:text-[#DE744C] transition text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#DE744C]" />
                    <span>Return to Home Page</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#64748B]" />
                </button>
              ) : (
                navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-[#F8F9FA] font-bold hover:bg-[#1E222A] hover:text-[#DE744C] transition"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#64748B]" />
                  </a>
                ))
              )}
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#DE744C] active:bg-[#C85E36] text-white font-black rounded-xl shadow-md text-sm"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY_DETAILS.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback();
                }}
                className="w-full py-3 bg-[#FAF9F6] hover:bg-white text-[#14161B] font-black rounded-xl text-sm transition shadow-sm cursor-pointer"
              >
                Get a quote now • {COMPANY_DETAILS.phone} ↗
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
