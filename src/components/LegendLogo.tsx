import React from 'react';

interface LegendLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const LegendLogo: React.FC<LegendLogoProps> = ({
  className = 'h-11 sm:h-13 md:h-14 lg:h-16 w-auto',
  variant: _variant = 'dark',
}) => {
  return (
    <div className="flex items-center gap-2 group select-none">
      <img
        src="/legend-official-logo.png"
        alt="Legend Pest Control Melbourne"
        className={`${className} object-contain max-w-[210px] sm:max-w-[270px] md:max-w-[320px] transition-transform duration-200 group-hover:scale-[1.02]`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/logo-transparent.png';
        }}
      />
      <span className="sr-only">Legend Pest Control Melbourne</span>
    </div>
  );
};
