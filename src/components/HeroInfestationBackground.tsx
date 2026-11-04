import React, { useEffect, useState } from 'react';

/**
 * HeroInfestationBackground
 * 
 * An authentic, biological pest infestation atmosphere:
 * 1. Top-Left: Delicate corner spider web tucked into ceiling void.
 * 2. Top-Right: Paper wasp nest with hexagonal brood comb under eave.
 * 3. Mid-Left: Mud dauber wasp clay organ-pipe tubes plastered on exterior wall.
 * 4. Bottom-Center: Termite mud tubes (pencil-thin soil tunnels climbing foundation).
 * 5. Bottom-Left: Frass (powdery wood dust and fecal pellets beneath boring insects).
 * 6. Bottom-Right: Shed skins (hollow, translucent insect casings / exuviae).
 * 
 * Dynamic Scroll-Vanish ("Problems Fixed"):
 * As the homeowner scrolls down into Legend Pest Control's solutions, 
 * all infestation traces dissolve cleanly and vanish away — visually 
 * symbolising that the property has been inspected, eradicated, and permanently protected.
 */

export const HeroInfestationBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animFrame: number;

    const handleScroll = () => {
      animFrame = requestAnimationFrame(() => {
        // Scroll distance where elements vanish completely (320px)
        const currentScroll = window.scrollY || window.pageYOffset;
        const progress = Math.min(1, Math.max(0, currentScroll / 320));
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Opacity drops from ~0.65 down to 0 as user scrolls
  const opacity = (1 - scrollProgress) * 0.65;
  const scale = 1 + scrollProgress * 0.06;
  const blurPx = scrollProgress * 8;

  if (opacity <= 0.01) {
    return null; // completely unmounted from render tree when scrolled past hero
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 transition-opacity duration-150"
      style={{
        opacity,
        transform: `scale(${scale})`,
        filter: blurPx > 0 ? `blur(${blurPx.toFixed(1)}px)` : 'none',
      }}
      aria-hidden="true"
    >
      {/* 1. Top-Left: Intricate Corner Spider Web */}
      <div className="absolute -top-6 -left-6 sm:-top-4 sm:-left-4 w-36 h-36 sm:w-80 sm:h-80 text-white/20 sm:text-white/35">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Radial Anchor Threads */}
          <line x1="0" y1="0" x2="300" y2="40" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
          <line x1="0" y1="0" x2="280" y2="120" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.65" />
          <line x1="0" y1="0" x2="230" y2="200" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="0" y1="0" x2="160" y2="260" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.75" />
          <line x1="0" y1="0" x2="80" y2="290" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="0" y1="0" x2="20" y2="300" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />

          {/* Spiral Concentric Capture Coils */}
          <path d="M 50 7 Q 48 18 46 20 Q 38 34 26 43 Q 14 48 3 50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M 85 11 Q 80 32 78 35 Q 65 58 46 72 Q 25 81 6 85" stroke="currentColor" strokeWidth="1" strokeOpacity="0.55" />
          <path d="M 125 17 Q 118 48 114 52 Q 95 86 68 107 Q 37 121 9 125" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <path d="M 170 23 Q 160 66 155 72 Q 130 119 92 147 Q 50 166 12 170" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.65" />
          <path d="M 215 29 Q 202 85 196 92 Q 164 152 116 188 Q 63 212 15 218" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.7" />
          <path d="M 260 35 Q 244 103 237 112 Q 198 185 140 229 Q 76 258 18 265" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.75" />

          {/* Silk Dewdrops */}
          <circle cx="114" cy="52" r="2.2" fill="#94a3b8" opacity="0.8" />
          <circle cx="95" cy="86" r="1.8" fill="#cbd5e1" opacity="0.9" />
          <circle cx="155" cy="72" r="2.5" fill="#94a3b8" opacity="0.8" />
          <circle cx="196" cy="92" r="2" fill="#cbd5e1" opacity="0.9" />
        </svg>
      </div>

      {/* 2. Top-Right: Natural Eave Paper Wasp Nest */}
      <div className="absolute -top-6 -right-6 w-32 h-32 sm:w-72 sm:h-72 text-amber-900/30">
        <svg
          viewBox="0 0 260 260"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Eave Mounting Pedicel */}
          <path d="M 220 0 L 214 36 C 214 42 210 46 205 48" stroke="#78350f" strokeWidth="5" strokeLinecap="round" opacity="0.7" />

          {/* Paper Wasp Nest Envelope */}
          <path
            d="M 130 50 C 170 42 225 50 250 80 C 265 98 255 140 230 165 C 205 190 160 195 135 180 C 110 165 95 130 102 98 C 108 72 118 56 130 50 Z"
            fill="#d97706"
            fillOpacity="0.09"
            stroke="#b45309"
            strokeWidth="1.4"
            strokeDasharray="4 2"
          />

          {/* Hexagonal Brood Cells */}
          <g stroke="#b45309" strokeWidth="1.1" strokeOpacity="0.5" fill="#fef3c7" fillOpacity="0.15">
            <polygon points="170,110 180,104 190,110 190,122 180,128 170,122" />
            <polygon points="190,110 200,104 210,110 210,122 200,128 190,122" />
            <polygon points="160,128 170,122 180,128 180,140 170,146 160,140" />
            <polygon points="180,128 190,122 200,128 200,140 190,146 180,140" />
            <polygon points="170,146 180,140 190,146 190,158 180,164 170,158" />
          </g>
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. Mud Dauber Tubes (Clay-like organ-pipe tubes built on exterior walls) */}
      {/* ========================================================================= */}
      <div 
        className="absolute top-[40%] -left-3 sm:-left-1 w-20 sm:w-28 h-52 sm:h-64 pointer-events-none select-none opacity-60"
        title="Mud dauber wasp tubes on exterior wall"
      >
        <svg viewBox="0 0 160 300" className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]" fill="none">
          {/* Subtle mortar joint boundary */}
          <line x1="16" y1="0" x2="16" y2="300" stroke="#475569" strokeWidth="1" strokeDasharray="6 6" opacity="0.35" />

          {/* Tube 1: Main central clay cylinder */}
          <path
            d="M 32 30 Q 28 80 30 140 Q 32 200 28 260 L 52 260 Q 56 200 54 140 Q 52 80 55 30 Z"
            fill="#9A3412"
            fillOpacity="0.85"
            stroke="#7C2D12"
            strokeWidth="2"
          />
          {/* Individual clay mud pellet ridges */}
          <path d="M 32 45 Q 42 50 54 45" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 30 70 Q 42 76 53 70" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
          <path d="M 29 95 Q 42 101 53 95" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 30 120 Q 42 126 53 120" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
          <path d="M 31 150 Q 42 156 53 150" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 30 180 Q 42 186 52 180" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
          <path d="M 29 210 Q 42 216 52 210" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 28 240 Q 42 245 52 240" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
          {/* Hollow entrance hole at top */}
          <ellipse cx="44" cy="35" rx="7" ry="5" fill="#451A03" stroke="#7C2D12" strokeWidth="1.5" />

          {/* Tube 2: Parallel adjoining clay cylinder */}
          <path
            d="M 52 65 Q 50 115 51 165 Q 52 215 50 255 L 72 255 Q 74 215 73 165 Q 72 115 74 65 Z"
            fill="#78350F"
            fillOpacity="0.8"
            stroke="#451A03"
            strokeWidth="1.8"
          />
          <path d="M 52 80 Q 62 85 73 80" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 51 105 Q 62 110 73 105" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          <path d="M 51 135 Q 62 140 73 135" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 51 170 Q 62 175 73 170" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          <path d="M 51 205 Q 62 210 72 205" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="63" cy="70" rx="6" ry="4" fill="#291305" stroke="#451A03" strokeWidth="1.2" />

          {/* Tube 3: Smaller side tube */}
          <path
            d="M 18 110 Q 16 150 17 190 Q 18 225 16 245 L 30 245 Q 31 225 30 190 Q 29 150 31 110 Z"
            fill="#9A3412"
            fillOpacity="0.7"
            stroke="#7C2D12"
            strokeWidth="1.5"
          />
          <ellipse cx="24" cy="115" rx="4" ry="3" fill="#451A03" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. Termite Mud Tubes (Pencil-thin soil tunnels running up foundations)     */}
      {/* ========================================================================= */}
      <div 
        className="absolute bottom-0 right-1/4 sm:right-1/3 w-28 sm:w-40 h-64 sm:h-80 pointer-events-none select-none opacity-85"
        title="Subterranean termite exploratory mud tubes climbing foundation"
      >
        <svg viewBox="0 0 160 320" className="w-full h-full filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]" fill="none">
          {/* Foundation concrete slab guideline */}
          <line x1="0" y1="318" x2="160" y2="318" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />

          {/* Main meandering termite highway running up */}
          <path
            d="M 80 320 Q 76 280 84 250 Q 92 220 82 185 Q 74 150 86 110 Q 94 70 88 35 Q 85 15 90 0"
            stroke="#713F12"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 80 320 Q 76 280 84 250 Q 92 220 82 185 Q 74 150 86 110 Q 94 70 88 35 Q 85 15 90 0"
            stroke="#A16207"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="6 3 2 4"
            opacity="0.95"
          />

          {/* Branching exploratory fork 1 */}
          <path
            d="M 82 185 Q 102 160 118 140 Q 128 125 134 100"
            stroke="#713F12"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 82 185 Q 102 160 118 140 Q 128 125 134 100"
            stroke="#A16207"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeDasharray="4 3"
            opacity="0.9"
          />

          {/* Branching exploratory fork 2 */}
          <path
            d="M 86 110 Q 64 90 52 70 Q 45 55 50 35"
            stroke="#713F12"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 86 110 Q 64 90 52 70 Q 45 55 50 35"
            stroke="#CA8A04"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray="4 3"
            opacity="0.9"
          />

          {/* Soil & carton mud granule texture particles clinging to tube */}
          <circle cx="83" cy="245" r="2.2" fill="#D97706" opacity="0.9" />
          <circle cx="78" cy="210" r="1.9" fill="#B45309" opacity="0.9" />
          <circle cx="85" cy="170" r="2.4" fill="#CA8A04" opacity="0.85" />
          <circle cx="87" cy="135" r="1.8" fill="#92400E" opacity="0.9" />
          <circle cx="108" cy="150" r="2" fill="#D97706" opacity="0.9" />
          <circle cx="125" cy="120" r="2.1" fill="#B45309" opacity="0.85" />
          <circle cx="58" cy="80" r="1.8" fill="#D97706" opacity="0.85" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 5. Frass (Powdery wood dust left beneath wood by boring insects)          */}
      {/* ========================================================================= */}
      <div 
        className="absolute bottom-2 left-1/4 sm:left-1/3 w-40 sm:w-56 h-28 pointer-events-none select-none opacity-85"
        title="Frass (powdery wood dust & pellets left by timber-boring insects)"
      >
        <svg viewBox="0 0 220 110" className="w-full h-full filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]" fill="none">
          {/* Micro wood dust conical mound */}
          <path
            d="M 30 100 Q 70 78 110 70 Q 150 78 190 100 Z"
            fill="#D97706"
            fillOpacity="0.45"
          />
          <path
            d="M 55 100 Q 85 82 110 76 Q 135 82 165 100 Z"
            fill="#F59E0B"
            fillOpacity="0.6"
          />
          <path
            d="M 80 100 Q 100 88 110 85 Q 120 88 140 100 Z"
            fill="#FDE68A"
            fillOpacity="0.8"
          />

          {/* Hexagonal wood boring pellets & distinct sawdust flecks */}
          <circle cx="108" cy="80" r="2" fill="#FEF08A" />
          <circle cx="116" cy="82" r="1.6" fill="#FDE68A" />
          <circle cx="102" cy="84" r="2.2" fill="#D97706" />
          <circle cx="125" cy="86" r="1.8" fill="#F59E0B" />
          <circle cx="94" cy="88" r="2.1" fill="#B45309" />
          <circle cx="138" cy="90" r="1.9" fill="#FDE68A" />
          <circle cx="78" cy="92" r="2.3" fill="#D97706" />
          <circle cx="150" cy="93" r="1.7" fill="#F59E0B" />
          <circle cx="62" cy="95" r="2" fill="#B45309" />
          <circle cx="168" cy="95" r="1.8" fill="#D97706" />

          {/* Micro airborne drifting dust flecks */}
          <circle cx="105" cy="62" r="1.3" fill="#FDE68A" opacity="0.8" />
          <circle cx="114" cy="54" r="1.1" fill="#FEF08A" opacity="0.7" />
          <circle cx="122" cy="60" r="1.4" fill="#F59E0B" opacity="0.75" />
          <circle cx="98" cy="48" r="1" fill="#FEF08A" opacity="0.6" />
          <circle cx="110" cy="42" r="1.2" fill="#FDE68A" opacity="0.65" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 6. Shed Skins (Hollow, translucent insect casings left by pests)          */}
      {/* ========================================================================= */}
      <div 
        className="absolute bottom-8 right-6 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none select-none opacity-85"
        title="Shed insect skin / translucent exuviae casing"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]" fill="none">
          {/* Translucent hollow splayed legs */}
          <path d="M 40 38 Q 25 25 12 32" stroke="#FDE68A" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
          <path d="M 60 38 Q 75 25 88 32" stroke="#FDE68A" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
          <path d="M 38 48 Q 20 45 8 58" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <path d="M 62 48 Q 80 45 92 58" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <path d="M 40 60 Q 24 68 15 82" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <path d="M 60 60 Q 76 68 85 82" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.75" />

          {/* Hollow papery head casing */}
          <path
            d="M 44 26 C 44 20 56 20 56 26 C 56 32 44 32 44 26 Z"
            fill="#FEF08A"
            fillOpacity="0.25"
            stroke="#F59E0B"
            strokeWidth="1.4"
            opacity="0.85"
          />
          {/* Fine antennae remnants */}
          <path d="M 46 22 Q 38 12 28 10" stroke="#FDE68A" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M 54 22 Q 62 12 72 10" stroke="#FDE68A" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

          {/* Segmented hollow thorax with dorsal emergence split */}
          <path
            d="M 36 34 C 36 34 32 50 35 62 C 38 72 46 76 50 78 C 54 76 62 72 65 62 C 68 50 64 34 64 34 Z"
            fill="#F59E0B"
            fillOpacity="0.2"
            stroke="#D97706"
            strokeWidth="1.5"
            opacity="0.85"
          />

          {/* The dorsal emergence rupture slit */}
          <line x1="50" y1="36" x2="50" y2="65" stroke="#FDE68A" strokeWidth="2" strokeDasharray="3 2" opacity="0.9" />

          {/* Segmented abdomen rings (translucent papery ridges) */}
          <ellipse cx="50" cy="45" rx="11" ry="4" stroke="#FDE68A" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" fill="none" />
          <ellipse cx="50" cy="54" rx="12" ry="4.5" stroke="#FDE68A" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" fill="none" />
          <ellipse cx="50" cy="64" rx="10" ry="4" stroke="#FDE68A" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" fill="none" />
          <ellipse cx="50" cy="73" rx="7" ry="3.5" stroke="#FDE68A" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.7" fill="none" />
        </svg>
      </div>

      {/* Subtle floating silk thread in upper air */}
      <div className="absolute top-12 left-1/3 w-72 h-32 opacity-40">
        <svg viewBox="0 0 300 100" className="w-full h-full" fill="none">
          <path d="M 0 20 Q 90 70 180 30 T 300 50" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>
      </div>
    </div>
  );
};