import React from 'react';
import { MapPin } from 'lucide-react';

interface SuburbRegion {
  title: string;
  suburbs: string[];
}

const REGIONS: SuburbRegion[] = [
  {
    title: 'Northern Suburbs',
    suburbs: ['Preston', 'Craigieburn', 'Epping', 'Reservoir', 'Coburg'],
  },
  {
    title: 'Eastern Suburbs',
    suburbs: ['Doncaster', 'Ringwood', 'Box Hill', 'Balwyn', 'Glen Waverley'],
  },
  {
    title: 'Western Suburbs',
    suburbs: ['Werribee', 'Sunshine', 'Melton', 'Point Cook', 'Footscray'],
  },
  {
    title: 'Southern Suburbs',
    suburbs: ['Frankston', 'Dandenong', 'Mornington', 'Brighton', 'Cheltenham'],
  },
];

export const ServiceAreasSection: React.FC = () => {
  return (
    <section id="service-areas" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Service Areas
          </h2>
          
          {/* Black Banner pill matching reference image */}
          <div className="inline-block px-5 py-2 rounded-md bg-slate-950 text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm">
            We service all Melbourne suburbs, including:
          </div>
        </div>

        {/* 4 Region Cards Grid matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONS.map((region) => (
            <div
              key={region.title}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Region Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#FDF3EE] text-[#DE744C] flex items-center justify-center mb-4 border border-[#F5D5C6]">
                <MapPin className="w-6 h-6 text-[#DE744C]" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-slate-900 tracking-tight mb-3">
                {region.title}
              </h3>

              {/* Bullet Suburb List */}
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-medium">
                {region.suburbs.map((suburb) => (
                  <li key={suburb} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0" />
                    <span>{suburb}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
