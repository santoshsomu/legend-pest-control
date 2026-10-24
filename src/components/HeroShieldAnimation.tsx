import React, { useEffect, useState, useRef } from 'react';

/**
 * HeroShieldAnimation — Dynamic Pest Defense & Expanding Bio-Shield System
 *
 * Visual Story:
 * 1. At the top of the page, pests (spiders, cockroaches, rats, wasps, termites, ants)
 *    are detected lurking around the perimeter of the Melbourne & Geelong home.
 * 2. An active radar sonar sweeps 360°, illuminating them with targeting reticles.
 * 3. As the user scrolls down, the "Legend Bio-Defense Shield" expands with emerald shockwaves,
 *    zapping the pests, repelling them outward, and flipping the defense matrix to 100% SECURED.
 * 4. Interactive UV cursor beam follows mouse/touch to inspect the area.
 */
export const HeroShieldAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 }); // percentage

  useEffect(() => {
    let animId: number;
    const handleScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const height = rect.height || 600;
        // As hero scrolls out of view (from 0 to -height), progress goes 0 -> 1
        const progress = Math.min(1, Math.max(0, -rect.top / (height * 0.75)));
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Track mouse/touch for interactive UV bio-beam
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  const p = scrollProgress; // 0 (top) -> 1 (scrolled down)

  // Status computation based on scroll
  const getDefenseStatus = () => {
    if (p < 0.25) {
      return {
        text: 'PERIMETER SCAN: 6 PEST THREATS DETECTED',
        badge: 'SCANNING',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10 border-amber-500/30',
        barWidth: '28%',
      };
    } else if (p < 0.7) {
      return {
        text: 'LEGEND BIO-BARRIER DEPLOYED • ERADICATING',
        badge: 'ACTIVE REPULSION',
        color: 'text-teal-300',
        bgColor: 'bg-teal-500/10 border-teal-500/30',
        barWidth: `${Math.round(28 + (p - 0.25) * 160)}%`,
      };
    } else {
      return {
        text: 'HOME SECURED: 100% PEST-FREE BARRIER ENGAGED',
        badge: '6-MO WARRANTY ACTIVE',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/20 border-emerald-400/50',
        barWidth: '100%',
      };
    }
  };

  const status = getDefenseStatus();

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ── Scoped CSS Keyframes for High-Performance Animation ── */}
      <style>{`
        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseShockwave {
          0% { transform: scale(0.6); opacity: 0.8; }
          50% { opacity: 0.4; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes crawlJitter {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-3px, 2px) rotate(-4deg); }
          50% { transform: translate(2px, -3px) rotate(3deg); }
          75% { transform: translate(-2px, -1px) rotate(-2deg); }
        }
        @keyframes wingFlutter {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.4); }
        }
        @keyframes floatDrift {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes reticleSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes hexPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.03); }
        }
        .anim-radar {
          animation: radarSweep 6s linear infinite;
        }
        .anim-shockwave-1 {
          animation: pulseShockwave 3.5s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
        }
        .anim-shockwave-2 {
          animation: pulseShockwave 3.5s cubic-bezier(0.2, 0.8, 0.4, 1) infinite 1.75s;
        }
        .anim-crawl {
          animation: crawlJitter 1.8s ease-in-out infinite;
        }
        .anim-float {
          animation: floatDrift 4s ease-in-out infinite;
        }
        .anim-wing {
          animation: wingFlutter 0.12s linear infinite;
        }
        .anim-reticle {
          animation: reticleSpin 10s linear infinite;
        }
        .anim-hex {
          animation: hexPulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* ── 1. Interactive UV Bio-Spotlight (Follows cursor/touch) ── */}
      <div
        className="absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full pointer-events-none transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2 opacity-30 sm:opacity-40"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(6, 78, 59, 0.15) 45%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* ── 2. Atmospheric Ambient Light Fields ── */}
      <div
        className="absolute -top-32 -right-32 w-96 sm:w-[550px] h-96 sm:h-[550px] rounded-full bg-emerald-500/20 blur-3xl transition-opacity duration-500"
        style={{ opacity: 0.2 + p * 0.3 }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-amber-500/15 blur-3xl transition-opacity duration-500"
        style={{ opacity: 0.3 - p * 0.25 }}
      />

      {/* ── 3. High-Tech Hexagonal Shield Floor Grid ── */}
      <div
        className="absolute inset-0 anim-hex opacity-20 sm:opacity-25"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.2) 0%, transparent 70%),
            linear-gradient(to right, rgba(52, 211, 153, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(52, 211, 153, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />

      {/* ── 4. Central Bio-Defense Radar & Expanding Shield Rings ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Expanding Shockwave 1 */}
        <div
          className="absolute rounded-full border border-emerald-400/40 anim-shockwave-1"
          style={{ width: `${260 + p * 320}px`, height: `${260 + p * 320}px` }}
        />
        {/* Expanding Shockwave 2 */}
        <div
          className="absolute rounded-full border border-teal-300/30 anim-shockwave-2"
          style={{ width: `${220 + p * 280}px`, height: `${220 + p * 280}px` }}
        />

        {/* Outer Hex Shield Perimeter that grows with scroll */}
        <div
          className="absolute rounded-full border-2 transition-all duration-300 ease-out"
          style={{
            width: `${240 + p * 500}px`,
            height: `${240 + p * 500}px`,
            borderColor: p > 0.6 ? 'rgba(52, 211, 153, 0.5)' : 'rgba(245, 158, 11, 0.3)',
            boxShadow: p > 0.6
              ? '0 0 60px rgba(16, 185, 129, 0.35), inset 0 0 40px rgba(16, 185, 129, 0.2)'
              : '0 0 40px rgba(245, 158, 11, 0.2), inset 0 0 30px rgba(245, 158, 11, 0.1)',
          }}
        />

        {/* Concentric Radar Distance Rings */}
        <div className="absolute w-[180px] h-[180px] rounded-full border border-emerald-500/25" />
        <div className="absolute w-[110px] h-[110px] rounded-full border border-emerald-500/35" />
        <div className="absolute w-[50px] h-[50px] rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Rotating Sonar Radar Beam */}
        <div
          className="absolute w-[360px] h-[360px] rounded-full anim-radar pointer-events-none"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(16, 185, 129, 0.35) 45deg, transparent 55deg)',
          }}
        />
      </div>

      {/* ── 5. Live Defense Matrix Status Meter (Visible at top center) ── */}
      <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
        <div className={`p-2.5 sm:p-3 rounded-2xl border backdrop-blur-md transition-all duration-300 ${status.bgColor}`}>
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1.5">
            <span className={`flex items-center gap-1.5 ${status.color}`}>
              <span className="w-2 h-2 rounded-full bg-current animate-pulse inline-block" />
              {status.text}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-900/80 text-[9px] font-bold text-white border border-slate-700">
              {status.badge}
            </span>
          </div>
          {/* Real-time Defense Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-slate-900/80 overflow-hidden border border-emerald-900/40">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-teal-400 to-emerald-400 transition-all duration-300 rounded-full"
              style={{ width: status.barWidth }}
            />
          </div>
        </div>
      </div>

      {/* ── 6. PEST THREATS WITH ACTIVE TARGETING RETICLES ── */}

      {/* PEST 1: Redback / Huntsman Spider (Top-Left) */}
      <div
        className="absolute transition-all duration-500 ease-out"
        style={{
          left: '6%',
          top: '20%',
          transform: `translate(${-p * 180}px, ${-p * 120}px) scale(${1 - p * 0.4})`,
          opacity: Math.max(0.05, 0.85 - p * 0.9),
        }}
      >
        <div className="relative anim-crawl">
          {/* Target Reticle */}
          <div className="absolute -inset-3 rounded-full border border-dashed border-amber-400/60 anim-reticle" />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-wider text-amber-400 whitespace-nowrap bg-slate-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
            {p > 0.4 ? '⚡ REPELLED' : '⚠️ SPIDER'}
          </span>
          {/* Spider SVG */}
          <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16 text-amber-300 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" fill="currentColor">
            <circle cx="32" cy="24" r="8" />
            <ellipse cx="32" cy="38" rx="12" ry="10" />
            <path d="M32 34 L32 44" stroke="#ef4444" strokeWidth="2.5" />
            {/* 8 articulated spider legs */}
            <path d="M24 24 Q10 16 4 10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M22 28 Q8 26 2 22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M22 34 Q8 38 2 46" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M24 38 Q12 48 6 56" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M40 24 Q54 16 60 10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M42 28 Q56 26 62 22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M42 34 Q56 38 62 46" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M40 38 Q52 48 58 56" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* PEST 2: German Cockroach (Top-Right) */}
      <div
        className="absolute transition-all duration-500 ease-out"
        style={{
          right: '8%',
          top: '18%',
          transform: `translate(${p * 200}px, ${-p * 140}px) scale(${1 - p * 0.4})`,
          opacity: Math.max(0.05, 0.85 - p * 0.9),
        }}
      >
        <div className="relative anim-crawl">
          <div className="absolute -inset-3 rounded-full border border-dashed border-amber-400/60 anim-reticle" />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-wider text-amber-400 whitespace-nowrap bg-slate-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
            {p > 0.4 ? '⚡ ZAPPED' : '⚠️ ROACH'}
          </span>
          <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" fill="currentColor">
            <ellipse cx="32" cy="18" rx="7" ry="5" />
            <ellipse cx="32" cy="36" rx="11" ry="15" />
            {/* Long twitching antennae */}
            <path d="M28 14 Q20 4 12 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M36 14 Q44 4 52 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Scuttling legs */}
            <path d="M22 24 Q10 18 4 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M42 24 Q54 18 60 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M21 32 Q9 32 3 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M43 32 Q55 32 61 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M22 42 Q10 48 4 56" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M42 42 Q54 48 60 56" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* PEST 3: Roof Rat / Rodent (Bottom-Left) */}
      <div
        className="absolute transition-all duration-500 ease-out hidden sm:block"
        style={{
          left: '10%',
          bottom: '16%',
          transform: `translate(${-p * 220}px, ${p * 150}px) scale(${1 - p * 0.4})`,
          opacity: Math.max(0.05, 0.8 - p * 0.9),
        }}
      >
        <div className="relative anim-float">
          <div className="absolute -inset-3 rounded-full border border-dashed border-amber-400/60 anim-reticle" />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-wider text-amber-400 whitespace-nowrap bg-slate-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
            {p > 0.4 ? '⚡ BLOCKED' : '⚠️ RODENT'}
          </span>
          <svg viewBox="0 0 80 50" className="w-16 h-10 sm:w-20 sm:h-12 text-slate-300 drop-shadow-[0_0_10px_rgba(203,213,225,0.4)]" fill="currentColor">
            <ellipse cx="44" cy="26" rx="20" ry="14" />
            <ellipse cx="22" cy="22" rx="11" ry="8" />
            <ellipse cx="16" cy="14" rx="5" ry="6" />
            <ellipse cx="26" cy="14" rx="5" ry="6" />
            <circle cx="18" cy="20" r="1.5" fill="#020617" />
            <path d="M64 26 Q74 20 76 12 Q78 6 74 2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M10 22 L2 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <path d="M10 24 L2 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <path d="M10 26 L2 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* PEST 4: European Wasp (Mid-Right) */}
      <div
        className="absolute transition-all duration-500 ease-out hidden sm:block"
        style={{
          right: '12%',
          top: '52%',
          transform: `translate(${p * 240}px, ${p * 120}px) scale(${1 - p * 0.4})`,
          opacity: Math.max(0.05, 0.8 - p * 0.9),
        }}
      >
        <div className="relative anim-float">
          <div className="absolute -inset-3 rounded-full border border-dashed border-amber-400/60 anim-reticle" />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-wider text-amber-400 whitespace-nowrap bg-slate-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
            {p > 0.4 ? '⚡ EXCLUDED' : '⚠️ WASP'}
          </span>
          <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" fill="currentColor">
            <ellipse cx="32" cy="20" rx="8" ry="6" />
            <ellipse cx="32" cy="38" rx="8" ry="12" />
            <rect x="25" y="32" width="14" height="2.5" rx="1" fill="#0f172a" />
            <rect x="25" y="38" width="14" height="2.5" rx="1" fill="#0f172a" />
            <path d="M32 50 L32 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            {/* Fluttering wings */}
            <g className="anim-wing">
              <ellipse cx="18" cy="18" rx="10" ry="4" opacity="0.6" transform="rotate(-30 18 18)" fill="#6ee7b7" />
              <ellipse cx="46" cy="18" rx="10" ry="4" opacity="0.6" transform="rotate(30 46 18)" fill="#6ee7b7" />
            </g>
          </svg>
        </div>
      </div>

      {/* PEST 5: Subterranean Termites (Bottom-Right) */}
      <div
        className="absolute transition-all duration-500 ease-out"
        style={{
          right: '20%',
          bottom: '12%',
          transform: `translate(${p * 160}px, ${p * 180}px) scale(${1 - p * 0.4})`,
          opacity: Math.max(0.05, 0.75 - p * 0.9),
        }}
      >
        <div className="relative anim-crawl">
          <div className="absolute -inset-3 rounded-full border border-dashed border-amber-400/60 anim-reticle" />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-wider text-amber-400 whitespace-nowrap bg-slate-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
            {p > 0.4 ? '⚡ DETECTED' : '⚠️ TERMITE'}
          </span>
          <svg viewBox="0 0 64 64" className="w-10 h-10 sm:w-12 sm:h-12 text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" fill="currentColor">
            <circle cx="32" cy="16" r="7" />
            <ellipse cx="32" cy="32" rx="6" ry="8" />
            <ellipse cx="32" cy="46" rx="8" ry="7" />
            <path d="M26 18 Q22 22 18 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M38 18 Q42 22 46 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M26 30 Q16 26 10 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M38 30 Q48 26 54 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* PEST 6: Black House Ant (Mid-Left) */}
      <div
        className="absolute transition-all duration-500 ease-out hidden sm:block"
        style={{
          left: '18%',
          top: '55%',
          transform: `translate(${-p * 160}px, ${p * 140}px) scale(${1 - p * 0.4})`,
          opacity: Math.max(0.05, 0.75 - p * 0.9),
        }}
      >
        <div className="relative anim-crawl">
          <div className="absolute -inset-3 rounded-full border border-dashed border-amber-400/60 anim-reticle" />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-wider text-amber-400 whitespace-nowrap bg-slate-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
            {p > 0.4 ? '⚡ CLEARED' : '⚠️ ANTS'}
          </span>
          <svg viewBox="0 0 64 64" className="w-10 h-10 sm:w-12 sm:h-12 text-slate-200 drop-shadow-[0_0_8px_rgba(226,232,240,0.5)]" fill="currentColor">
            <circle cx="32" cy="14" r="6" />
            <ellipse cx="32" cy="28" rx="5" ry="7" />
            <ellipse cx="32" cy="44" rx="7" ry="9" />
            <path d="M28 10 Q22 2 16 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M36 10 Q42 2 48 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M27 26 Q16 20 8 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M37 26 Q48 20 56 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* ── 7. Triumphant Emerald Energy Pulse when scrolled ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: p > 0.5 ? (p - 0.5) * 1.5 : 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.18) 0%, rgba(6, 78, 59, 0.08) 50%, transparent 80%)',
        }}
      />
    </div>
  );
};
