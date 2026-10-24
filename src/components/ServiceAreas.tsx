import React, { useState } from 'react';
import { MapPin, Search, Shield } from 'lucide-react';
import { SUBURBS, COMPANY_DETAILS } from '../data/pestData';

interface ServiceAreasProps {
  onOpenCallback: (suburb?: string) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenCallback }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const filteredSuburbs = SUBURBS.filter((sub) => {
    const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          sub.postcode.includes(searchTerm);
    const matchesRegion = selectedRegion === 'all' || sub.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = [
    { id: 'all', label: 'All Areas' },
    { id: 'Geelong & Surf Coast', label: 'Geelong & Bellarine' },
    { id: 'Melbourne West', label: 'Melbourne West (Wyndham)' },
    { id: 'Inner West & Metro', label: 'Inner West & Melton' },
  ];

  return (
    <section id="areas" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Local Geelong & Melbourne West Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Suburbs We Protect Daily
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            With fully stocked mobile units dispatched across Geelong, Lara, Werribee, Point Cook, and Melbourne's West, we provide fast response times with <strong>zero travel surcharges</strong>.
          </p>
        </div>

        {/* Search & Region Selector */}
        <div className="max-w-2xl mx-auto mt-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search your suburb or postcode (e.g. Geelong, 3030, Lara, Point Cook)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3 text-xs font-semibold text-slate-400 hover:text-slate-600 p-1"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedRegion === reg.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>
        </div>

        {/* Suburbs Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredSuburbs.map((sub) => (
            <div
              key={sub.name}
              onClick={() => onOpenCallback(`Service in ${sub.name} (${sub.postcode})`)}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>{sub.postcode}</span>
                  {sub.sameDayAvailable && (
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      ⚡ Same-day
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                  {sub.name}
                </h4>
              </div>

              <span className="text-[11px] text-blue-600 font-semibold mt-2 group-hover:underline flex items-center gap-1">
                Book for {sub.name} →
              </span>
            </div>
          ))}
        </div>

        {filteredSuburbs.length === 0 && (
          <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-2 mt-6">
            <p className="text-slate-600 font-semibold text-sm">
              Don't see your suburb listed? We cover most of Greater Melbourne and regional Geelong!
            </p>
            <p className="text-xs text-slate-500">
              Call our team on <strong className="text-slate-900">{COMPANY_DETAILS.phone}</strong> and we'll confirm dispatch availability in under 30 seconds.
            </p>
          </div>
        )}

        {/* Regional Highlight Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Geelong & Bellarine Hub</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Daily routes through Belmont, Newtown, Highton, Lara, Corio, and coastal fringe.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Wyndham & Melbourne West</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Fast dispatch to Werribee, Point Cook, Hoppers Crossing, Tarneit, and Truganina.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Zero Travel Surcharges</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Fixed, transparent rates whether you're in central Geelong or Melbourne's outer west.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
