import React, { useState } from 'react';
import { MapPin, Search, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import { SUBURBS, COMPANY_DETAILS } from '../data/pestData';

interface ServiceAreasProps {
  onOpenCallback: (suburb?: string) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenCallback }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Geelong & Surf Coast' | 'Melbourne West' | 'Inner West & Metro'>('All');

  const filteredSuburbs = SUBURBS.filter((sub) => {
    const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase()) || sub.postcode.includes(searchTerm);
    const matchesRegion = selectedRegion === 'All' || sub.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section id="areas" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Local Victorian Dispatch Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Servicing Melbourne & Surrounding Suburbs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            With fully stocked mobile units dispatched daily, our licensed technicians provide rapid response and same-day emergency callouts throughout Melbourne and surrounding communities.
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search your suburb or postcode (e.g. Werribee, Belmont, 3030)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 shadow-xs transition"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {(['All', 'Geelong & Surf Coast', 'Melbourne West', 'Inner West & Metro'] as const).map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Suburbs Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredSuburbs.map((sub) => (
            <div
              key={sub.name}
              onClick={() => onOpenCallback(sub.name)}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-1">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition">
                    {sub.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    {sub.postcode}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  {sub.region}
                </span>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Same-Day Dispatch
                </span>
                <span className="text-slate-400 group-hover:text-emerald-700 transition font-bold">
                  Quote →
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSuburbs.length === 0 && (
          <div className="text-center py-12 text-slate-500 space-y-2">
            <p className="font-medium">Can't find your specific suburb?</p>
            <p className="text-xs">
              We service all surrounding areas across Melbourne. Call us directly on{' '}
              <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="text-emerald-700 font-bold underline">
                {COMPANY_DETAILS.phone}
              </a>
              .
            </p>
          </div>
        )}

        {/* Local Fast Dispatch Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Same-Day Emergency Service Guarantee
              </h4>
              <p className="text-xs text-slate-600">
                Call before 12:00 PM for guaranteed same-day dispatch across Melbourne.
              </p>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm rounded-full transition shadow-md flex items-center justify-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call {COMPANY_DETAILS.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
