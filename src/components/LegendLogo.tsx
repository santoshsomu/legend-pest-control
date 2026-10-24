import React from 'react';

interface LegendLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export const LegendLogo: React.FC<LegendLogoProps> = ({
  className = 'h-11',
  variant = 'light',
  showTagline = true,
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#ffffff' : '#1e3a8a';
  const subTextColor = isDark ? '#93c5fd' : '#2563eb';
  const accentColor = '#3b82f6';
  const yellowBadge = '#f59e0b';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Friendly Pest Technician Mascot Vector */}
      <svg
        viewBox="0 0 80 80"
        className="h-8 w-8 sm:h-11 sm:w-11 shrink-0 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="38" fill={isDark ? '#1e293b' : '#eff6ff'} stroke="#2563eb" strokeWidth="2.5" />
        
        {/* Technician Body - Blue Polo Shirt */}
        <path
          d="M22 68 C22 55, 30 50, 40 50 C50 50, 58 55, 58 68 Z"
          fill="#1d4ed8"
        />
        {/* Collar & Tie/Placket */}
        <path d="M36 50 L40 57 L44 50 Z" fill="#ffffff" />
        <path d="M39 57 L41 57 L41 68 L39 68 Z" fill="#93c5fd" />

        {/* Neck */}
        <rect x="36" y="44" width="8" height="7" rx="3" fill="#fed7aa" />

        {/* Face */}
        <circle cx="40" cy="34" r="13" fill="#fed7aa" />
        {/* Ears */}
        <circle cx="27" cy="35" r="3.5" fill="#fcd34d" />
        <circle cx="53" cy="35" r="3.5" fill="#fcd34d" />
        
        {/* Smile & Eyes */}
        <circle cx="35" cy="33" r="1.5" fill="#1e293b" />
        <circle cx="45" cy="33" r="1.5" fill="#1e293b" />
        <path d="M35 39 Q40 44 45 39" stroke="#9a3412" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Cap (Blue with bill) */}
        <path d="M26 31 C26 21, 54 21, 54 31 Z" fill="#1e40af" />
        <path d="M23 31 C28 28, 52 28, 57 31 C57 33, 23 33, 23 31 Z" fill="#2563eb" />
        <ellipse cx="40" cy="22" rx="4" ry="2" fill={yellowBadge} />

        {/* Clipboard held in hand */}
        <rect x="47" y="46" width="16" height="22" rx="2" fill="#f8fafc" stroke="#475569" strokeWidth="1.5" transform="rotate(-6 55 57)" />
        <rect x="52" y="43" width="7" height="4" rx="1" fill="#475569" transform="rotate(-6 55 57)" />
        <line x1="51" y1="52" x2="60" y2="51" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="51" y1="56" x2="59" y2="55" stroke="#94a3b8" strokeWidth="1" />
        <line x1="51" y1="60" x2="58" y2="59" stroke="#94a3b8" strokeWidth="1" />
        {/* Checkmark on clipboard */}
        <path d="M49 53 L51 55 L55 51" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Hand */}
        <circle cx="48" cy="56" r="3.5" fill="#fed7aa" />
      </svg>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span
            className="font-black italic tracking-tighter text-xl sm:text-2xl lg:text-3xl"
            style={{
              color: textColor,
              fontFamily: "'Montserrat', 'Arial Black', -apple-system, sans-serif",
              letterSpacing: '-0.03em'
            }}
          >
            LEGEND
          </span>
          <span className="text-[9px] sm:text-xs font-bold px-1 py-0.2 rounded bg-amber-400 text-slate-900 tracking-wider uppercase ml-0.5">
            VIC
          </span>
        </div>
        
        {/* Underline swoosh matching the original brand mark */}
        <svg viewBox="0 0 160 12" className="w-24 sm:w-32 -mt-1 mb-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 3 C40 10, 110 10, 158 2"
            stroke={accentColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 7 C80 12, 130 11, 155 4"
            stroke={yellowBadge}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {showTagline && (
          <span
            className="text-[8px] sm:text-[10px] font-extrabold tracking-wider sm:tracking-widest uppercase truncate max-w-[190px] sm:max-w-none"
            style={{ color: subTextColor }}
          >
            PEST CONTROL MELBOURNE & GEELONG
          </span>
        )}
      </div>
    </div>
  );
};
