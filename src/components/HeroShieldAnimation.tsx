import React, { useEffect, useState, useRef } from 'react';

/**
 * HeroShieldAnimation — Expanded Interactive Bio-Defense Radar System
 *
 * Features:
 * 1. Fills the entire Hero section with a massive tactical radar (1200px+).
 * 2. High-tech tactical rings: Outer Compass ring (360° ticks), Range rings (25m, 50m, 100m),
 *    crosshair axes, and distance markers.
 * 3. 360° dynamic rotating sonar radar beam with phosphorescent sweep glow.
 * 4. Interactive cursor tracking: Radar subtly shifts with cursor (parallax) and displays
 *    an interactive targeting reticle with live coordinates (Melbourne Grid).
 * 5. Interactive click/tap sonar pings: Ripples an emerald energy shockwave outward.
 * 6. Perimeter scan 6 pest threats box is COMPLETELY REMOVED per user request.
 */
export const HeroShieldAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 }); // percentage
  const [pings, setPings] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let animId: number;
    const handleScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const height = rect.height || 600;
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

  // Track mouse/touch for interactive radar parallax and reticle
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  // Click/tap to emit an energetic sonar radar pulse
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const newPing = { id: Date.now(), x, y };
    setPings((prev) => [...prev.slice(-3), newPing]);
  };

  const p = scrollProgress; // 0 (top) -> 1 (scrolled)

  // Interactive parallax offsets based on mouse position
  const parallaxX = (mousePos.x - 50) * 0.35; // -17.5px to +17.5px
  const parallaxY = (mousePos.y - 50) * 0.35; // -17.5px to +17.5px

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onClick={handleClick}
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden select-none cursor-crosshair"
      aria-hidden="true"
    >
      {/* ── Scoped CSS Keyframes for High-Performance Animations ── */}
      <style>{`
        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes radarPulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          50% { opacity: 0.3; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes clickPingWave {
          0% { transform: scale(0.1); opacity: 0.9; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        .anim-radar-sweep {
          animation: radarSweep 6.5s linear infinite;
        }
        .anim-pulse-ring {
          animation: radarPulse 3.5s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
        }
      `}</style>

      {/* ── 1. Atmospheric Ambient Gradients (Light, clean & luminous) ── */}
      <div
        className="absolute -top-32 -right-32 w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] rounded-full bg-emerald-200/35 blur-3xl pointer-events-none transition-opacity duration-500"
        style={{ opacity: 0.35 + p * 0.2 }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[450px] lg:w-[650px] h-[450px] lg:h-[650px] rounded-full bg-amber-100/40 blur-3xl pointer-events-none transition-opacity duration-500"
        style={{ opacity: 0.35 - p * 0.15 }}
      />

      {/* ── 2. Subtle Precision Hexagonal Grid Floor (Soft emerald on light floor) ── */}
      <div
        className="absolute inset-0 opacity-25 sm:opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.14) 0%, transparent 75%),
            linear-gradient(to right, rgba(16, 185, 129, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      />

      {/* ── 3. MASSIVE EXPANDED BIO-DEFENSE RADAR SYSTEM (Centered & Fills Hero) ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
        }}
      >
        {/* Radar Dimensions Container: 800px mobile, up to 1350px on desktop */}
        <div className="relative w-[750px] h-[750px] sm:w-[1100px] sm:h-[1100px] lg:w-[1350px] lg:h-[1350px] flex items-center justify-center">
          
          {/* ── OUTMOST COMPASS & RANGE RING 1 (100m Outer Perimeter) ── */}
          <div className="absolute inset-0 rounded-full border border-emerald-600/20 shadow-[0_0_60px_rgba(16,185,129,0.06)]">
            {/* Cardinal Markers */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-emerald-800/70 font-bold">N 000°</span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-emerald-800/70 font-bold">S 180°</span>
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-mono tracking-widest text-emerald-800/70 font-bold">W 270°</span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono tracking-widest text-emerald-800/70 font-bold">E 090°</span>

            {/* Perimeter Degree Tick Ring */}
            <svg className="w-full h-full text-emerald-600/20 pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 3" />
            </svg>
          </div>

          {/* ── INTERMEDIATE RING 2 (75m Foundation Barrier) ── */}
          <div className="absolute w-[75%] h-[75%] rounded-full border border-dashed border-emerald-600/20">
            <span className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-emerald-800/60 font-semibold">
              PERIMETER DEFENSE 75M
            </span>
          </div>

          {/* ── MID TACTICAL RING 3 (50m Structural Perimeter) ── */}
          <div className="absolute w-[50%] h-[50%] rounded-full border border-emerald-600/25 shadow-[inset_0_0_30px_rgba(16,185,129,0.04)]">
            <span className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-emerald-800/70 font-bold">
              CAVITY &amp; SUBFLOOR 50M
            </span>
          </div>

          {/* ── INNER RANGE RING 4 (25m Core Zone) ── */}
          <div className="absolute w-[28%] h-[28%] rounded-full border border-emerald-600/30">
            <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] font-mono text-emerald-800/80 font-bold">
              LIVING ZONE 25M
            </span>
          </div>

          {/* ── CROSSHAIR AXES WITH DISTANCE METRICS ── */}
          {/* Horizontal Axis */}
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-600/15 to-transparent" />
          {/* Vertical Axis */}
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-600/15 to-transparent" />
          
          {/* Diagonal Guides */}
          <div className="absolute w-[90%] h-[1px] bg-gradient-to-r from-transparent via-emerald-600/10 to-transparent transform rotate-45" />
          <div className="absolute w-[90%] h-[1px] bg-gradient-to-r from-transparent via-emerald-600/10 to-transparent transform -rotate-45" />

          {/* ── EXPANDING CONTINUOUS RADAR PULSE WAVES ── */}
          <div className="absolute w-[40%] h-[40%] rounded-full border border-emerald-500/35 anim-pulse-ring pointer-events-none" />
          <div className="absolute w-[65%] h-[65%] rounded-full border border-teal-500/25 anim-pulse-ring pointer-events-none" style={{ animationDelay: '1.75s' }} />

          {/* ── MASSIVE 360° ROTATING SONAR RADAR BEAM (Fills Hero Section) ── */}
          <div
            className="absolute inset-0 rounded-full anim-radar-sweep pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(16, 185, 129, 0.02) 20deg, rgba(16, 185, 129, 0.12) 42deg, rgba(16, 185, 129, 0.28) 48deg, transparent 49deg)',
              filter: 'blur(1px)',
            }}
          />

          {/* ── CENTRAL TARGET CORE NODE (Flashing Beacon) ── */}
          <div className="relative w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.25)]">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 animate-ping" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-emerald-700 shadow-xs" />
          </div>

          {/* ── TACTICAL RADAR BLIPS (Simulating Detected & Eradicated Targets) ── */}
          <div className="absolute top-[28%] left-[24%] flex items-center gap-1 opacity-80">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <span className="text-[8px] font-mono text-slate-800 bg-white/95 border border-amber-300 px-1 py-0.5 rounded shadow-xs font-bold">TRG-01</span>
          </div>
          <div className="absolute bottom-[32%] right-[22%] flex items-center gap-1 opacity-80">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" style={{ animationDelay: '1.2s' }} />
            <span className="text-[8px] font-mono text-slate-800 bg-white/95 border border-emerald-300 px-1 py-0.5 rounded shadow-xs font-bold">SEC-02</span>
          </div>
          <div className="absolute top-[35%] right-[28%] flex items-center gap-1 opacity-80">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-ping" style={{ animationDelay: '2.4s' }} />
            <span className="text-[8px] font-mono text-slate-800 bg-white/95 border border-teal-300 px-1 py-0.5 rounded shadow-xs font-bold">DEF-03</span>
          </div>

        </div>
      </div>



      {/* ── 5. USER CLICK / TAP SONAR SHOCKWAVES ── */}
      {pings.map((ping) => (
        <div
          key={ping.id}
          className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-emerald-400"
          style={{
            left: `${ping.x}%`,
            top: `${ping.y}%`,
            animation: 'clickPingWave 1.4s cubic-bezier(0.1, 0.8, 0.3, 1) forwards',
          }}
        />
      ))}
    </div>
  );
};
