import React from 'react';

interface LegendLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const LegendLogo: React.FC<LegendLogoProps> = ({
  className = 'h-10 sm:h-12 w-auto',
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div className="flex items-center gap-2 group">
      <div
        className={`inline-flex items-center justify-center transition-all ${
          isDark
            ? 'bg-white px-3 py-1.5 rounded-xl shadow-md border border-slate-200/20'
            : ''
        }`}
      >
        <img
          src="/logo-transparent.png"
          alt="Legend Pest Control Melbourne & Geelong"
          className={`${className} object-contain max-w-[210px] sm:max-w-[260px] transition-transform duration-200 group-hover:scale-[1.02]`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/logo.png';
          }}
        />
        <span className="sr-only">Legend Pest Control Melbourne &amp; Geelong</span>
      </div>
    </div>
  );
};
