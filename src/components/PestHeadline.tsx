import React, { useEffect, useRef } from 'react';

/**
 * PestHeadline Component
 * Renders the headline "Every pest problem, one legendary solution"
 * with animated, realistic vector pests crawling organically and randomly
 * STRICTLY within the confined space of these two lines of text.
 * 
 * Each pest:
 * - Crawls to random coordinates within [minX, maxX] and [minY, maxY]
 * - Rotates to dynamically face its direction of movement
 * - Pauses organically between crawls (simulating real insect behavior)
 * - Scurries away when hovered or tapped
 * - GPU-accelerated via transform: translate3d + rotate (zero layout thrashing)
 */

// 1. Australian Redback Spider
const SpiderSvg: React.FC = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full filter drop-shadow-[0_3px_5px_rgba(0,0,0,0.85)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Silk thread */}
    <line x1="50" y1="0" x2="50" y2="42" stroke="#E2E8F0" strokeWidth="1.2" strokeDasharray="2 1" opacity="0.6" />

    {/* Spider Legs - Left */}
    <path d="M46 44 C34 32 20 28 10 34 C6 37 4 45 6 49" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 47 C28 42 14 46 8 58 C6 63 8 70 12 73" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
    <path d="M46 51 C32 54 18 64 16 78 C15 84 18 89 22 91" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M47 55 C38 66 30 80 32 94 C33 97 36 99 39 98" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />

    {/* Spider Legs - Right */}
    <path d="M54 44 C66 32 80 28 90 34 C94 37 96 45 94 49" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M55 47 C72 42 86 46 92 58 C94 63 92 70 88 73" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
    <path d="M54 51 C68 54 82 64 84 78 C85 84 82 89 78 91" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M53 55 C62 66 70 80 68 94 C67 97 64 99 61 98" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />

    {/* Fangs */}
    <path d="M47 40 C44 35 45 32 46 30" stroke="#020617" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M53 40 C56 35 55 32 54 30" stroke="#020617" strokeWidth="2.4" strokeLinecap="round" />

    {/* Cephalothorax */}
    <ellipse cx="50" cy="46" rx="7" ry="8" fill="#090D16" stroke="#1E293B" strokeWidth="1" />
    <ellipse cx="48.5" cy="44.5" rx="2.5" ry="3" fill="#334155" opacity="0.7" />

    {/* Abdomen */}
    <ellipse cx="50" cy="63" rx="11" ry="15" fill="#020617" stroke="#1E293B" strokeWidth="1.5" />
    <path d="M44 56 C44 53 47 51 51 51 C53 51 55 52 56 54" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

    {/* Redback Hourglass */}
    <path d="M49 57 L51 57 L52 61 L50 63 L48 61 Z" fill="#DC2626" />
    <path d="M50 63 L52 65 L51 70 L49 70 L48 65 Z" fill="#EF4444" />
    <circle cx="50" cy="63" r="1.6" fill="#F87171" />
  </svg>
);

// 2. German Cockroach
const CockroachSvg: React.FC = () => (
  <svg
    viewBox="0 0 100 120"
    className="w-full h-full filter drop-shadow-[0_3px_5px_rgba(0,0,0,0.85)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Antennae */}
    <path d="M46 28 C42 14 28 6 8 4" stroke="#78350F" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M54 28 C60 14 74 6 94 4" stroke="#78350F" strokeWidth="1.6" strokeLinecap="round" />

    {/* Legs */}
    <path d="M42 38 C28 32 20 28 12 32 C8 34 6 40 4 46" stroke="#451A03" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M58 38 C72 32 80 28 88 32 C92 34 94 40 96 46" stroke="#451A03" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M40 50 C24 48 14 54 8 66 C6 72 6 78 8 82" stroke="#451A03" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M60 50 C76 48 86 54 92 66 C94 72 94 78 92 82" stroke="#451A03" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M40 64 C22 68 12 82 10 98 C9 106 12 114 16 118" stroke="#291204" strokeWidth="3" strokeLinecap="round" />
    <path d="M60 64 C78 68 88 82 90 98 C91 106 88 114 84 118" stroke="#291204" strokeWidth="3" strokeLinecap="round" />

    {/* Cerci */}
    <path d="M45 106 L41 118" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
    <path d="M55 106 L59 118" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />

    {/* Pronotum */}
    <ellipse cx="50" cy="36" rx="10" ry="8" fill="#92400E" stroke="#291204" strokeWidth="1.4" />
    <path d="M46 30 L46 42" stroke="#1A0A02" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M54 30 L54 42" stroke="#1A0A02" strokeWidth="2.4" strokeLinecap="round" />

    {/* Wing Covers */}
    <path
      d="M40 43 C40 43 35 60 37 84 C39 98 46 106 50 108 C54 106 61 98 63 84 C65 60 60 43 60 43 Z"
      fill="#78350F"
      stroke="#291204"
      strokeWidth="1.6"
    />
    <line x1="50" y1="44" x2="50" y2="107" stroke="#291204" strokeWidth="1.4" />

    {/* Chitin Highlights */}
    <path d="M44 50 C43 62 43 78 45 92" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
    <path d="M56 50 C57 62 57 78 55 92" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

// 3. Yellowjacket Wasp
const WaspSvg: React.FC = () => (
  <svg
    viewBox="0 0 100 110"
    className="w-full h-full filter drop-shadow-[0_3px_5px_rgba(0,0,0,0.85)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M46 22 C42 12 34 8 24 6" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M54 22 C58 12 66 10 76 12" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />

    <path
      d="M46 36 C34 26 12 24 2 34 C-2 38 6 48 24 46 C34 45 42 42 46 38 Z"
      fill="#93C5FD"
      fillOpacity="0.65"
      stroke="#3B82F6"
      strokeWidth="1.2"
    />
    <path d="M10 32 C22 34 36 38 45 37" stroke="#1D4ED8" strokeWidth="1" opacity="0.8" />
    <path
      d="M54 36 C66 26 88 24 98 34 C102 38 94 48 76 46 C66 45 58 42 54 38 Z"
      fill="#93C5FD"
      fillOpacity="0.65"
      stroke="#3B82F6"
      strokeWidth="1.2"
    />
    <path d="M90 32 C78 34 64 38 55 37" stroke="#1D4ED8" strokeWidth="1" opacity="0.8" />

    <path d="M44 34 C36 28 28 26 22 30 C18 34 18 42 16 46" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M56 34 C64 28 72 26 78 30 C82 34 82 42 84 46" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M42 42 C30 44 20 54 18 64 C16 70 14 76 16 80" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M58 42 C70 44 80 54 82 64 C84 70 86 76 84 80" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M46 48 C38 60 34 76 36 90 C37 94 36 98 34 102" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M54 48 C62 60 66 76 64 90 C63 94 64 98 66 102" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />

    <ellipse cx="50" cy="25" rx="7" ry="6" fill="#020617" />
    <ellipse cx="45" cy="24" rx="2.4" ry="3.5" fill="#000" stroke="#EAB308" strokeWidth="0.8" />
    <ellipse cx="55" cy="24" rx="2.4" ry="3.5" fill="#000" stroke="#EAB308" strokeWidth="0.8" />

    <ellipse cx="50" cy="38" rx="8.5" ry="9.5" fill="#0F172A" stroke="#000" strokeWidth="1" />
    <path d="M44 32 Q50 30 56 32" stroke="#EAB308" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="43.5" cy="40" r="1.8" fill="#FACC15" />
    <circle cx="56.5" cy="40" r="1.8" fill="#FACC15" />

    <path d="M48 47 L48 53 L52 53 L52 47 Z" fill="#000" />

    <g>
      <path d="M43 53 C43 53 39 68 44 88 C46 96 50 102 50 102 C50 102 54 96 56 88 C61 68 57 53 57 53 Z" fill="#090D16" stroke="#000" strokeWidth="1" />
      <path d="M43 58 C46 59 54 59 57 58 C57 63 56 65 56 65 C53 66 47 66 44 65 Z" fill="#FACC15" />
      <path d="M42 68 C46 69 54 69 58 68 C57 73 56 76 56 76 C53 77 47 77 44 76 Z" fill="#FACC15" />
      <path d="M43 79 C46 80 54 80 57 79 C56 84 55 86 55 86 C53 87 47 87 45 86 Z" fill="#FACC15" />
      <line x1="50" y1="102" x2="50" y2="108" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  </svg>
);

// 4. Bottle Blowfly
const FlySvg: React.FC = () => (
  <svg
    viewBox="0 0 80 80"
    className="w-full h-full filter drop-shadow-[0_3px_5px_rgba(0,0,0,0.85)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36 34 C24 20 8 18 2 28 C-2 36 8 46 26 44 C32 43 36 38 36 34 Z"
      fill="#BAE6FD"
      fillOpacity="0.75"
      stroke="#0284C7"
      strokeWidth="1.3"
    />
    <path d="M12 28 C20 32 30 36 35 36" stroke="#0369A1" strokeWidth="1" opacity="0.7" />
    <path
      d="M44 34 C56 20 72 18 78 28 C82 36 72 46 54 44 C48 43 44 38 44 34 Z"
      fill="#BAE6FD"
      fillOpacity="0.75"
      stroke="#0284C7"
      strokeWidth="1.3"
    />
    <path d="M68 28 C60 32 50 36 45 36" stroke="#0369A1" strokeWidth="1" opacity="0.7" />

    <path d="M34 30 C24 24 18 22 12 26" stroke="#020617" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M46 30 C56 24 62 22 68 26" stroke="#020617" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M32 38 C20 40 14 48 10 56" stroke="#020617" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M48 38 C60 40 66 48 70 56" stroke="#020617" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M34 44 C26 52 22 62 20 72" stroke="#020617" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M46 44 C54 52 58 62 60 72" stroke="#020617" strokeWidth="2.2" strokeLinecap="round" />

    <ellipse cx="34" cy="24" rx="5" ry="6" fill="#DC2626" stroke="#7F1D1D" strokeWidth="1.2" />
    <ellipse cx="46" cy="24" rx="5" ry="6" fill="#DC2626" stroke="#7F1D1D" strokeWidth="1.2" />

    <ellipse cx="40" cy="34" rx="8" ry="8.5" fill="#042F2E" stroke="#0D9488" strokeWidth="1.2" />
    <path d="M36 30 Q40 27 44 30" stroke="#2DD4BF" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />

    <ellipse cx="40" cy="49" rx="8.5" ry="11" fill="#064E3B" stroke="#059669" strokeWidth="1.3" />
    <path d="M35 45 C38 44 42 44 45 45" stroke="#34D399" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    <path d="M34 51 C38 50 42 50 46 51" stroke="#34D399" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// 5. Worker Ant
const AntSvg: React.FC = () => (
  <svg
    viewBox="0 0 60 70"
    className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M28 14 C24 7 18 7 12 5" stroke="#020617" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M32 14 C36 7 42 7 48 5" stroke="#020617" strokeWidth="1.6" strokeLinecap="round" />

    <path d="M27 22 C18 15 10 17 4 21" stroke="#020617" strokeWidth="2" strokeLinecap="round" />
    <path d="M33 22 C42 15 50 17 56 21" stroke="#020617" strokeWidth="2" strokeLinecap="round" />
    <path d="M26 28 C15 28 8 34 4 42" stroke="#020617" strokeWidth="2" strokeLinecap="round" />
    <path d="M34 28 C45 28 52 34 56 42" stroke="#020617" strokeWidth="2" strokeLinecap="round" />
    <path d="M27 34 C17 42 12 52 8 62" stroke="#020617" strokeWidth="2" strokeLinecap="round" />
    <path d="M33 34 C43 42 48 52 52 62" stroke="#020617" strokeWidth="2" strokeLinecap="round" />

    <ellipse cx="30" cy="17" rx="5" ry="6" fill="#020617" />
    <ellipse cx="30" cy="27" rx="3.8" ry="5.5" fill="#0F172A" />
    <circle cx="30" cy="33" r="1.6" fill="#020617" />
    <ellipse cx="30" cy="43" rx="6.5" ry="9" fill="#020617" stroke="#1E293B" strokeWidth="1" />
    <ellipse cx="28" cy="41" rx="1.6" ry="3.5" fill="#475569" opacity="0.7" />
  </svg>
);

// 6. Roof Rat / Mouse
const RodentSvg: React.FC = () => (
  <svg
    viewBox="0 0 140 100"
    className="w-full h-full filter drop-shadow-[0_4px_7px_rgba(0,0,0,0.85)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 48 C115 50 130 58 134 72 C137 84 128 94 116 95 C104 96 94 88 92 78 C90 70 94 62 102 60"
      stroke="#FDA4AF"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M100 48 C115 50 130 58 134 72 C137 84 128 94 116 95 C104 96 94 88 92 78 C90 70 94 62 102 60"
      stroke="#BE123C"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.5"
    />

    <ellipse cx="94" cy="46" rx="11" ry="9" fill="#0F172A" transform="rotate(-15 94 46)" />
    <path
      d="M55 42 C65 28 85 28 98 42 C104 47 102 54 96 56 C88 58 64 58 55 52 Z"
      fill="#090D16"
      stroke="#1E293B"
      strokeWidth="1.2"
    />
    <path
      d="M58 40 C52 34 42 33 32 36 C26 38 20 44 18 47 C24 50 36 53 48 51 C54 50 56 46 58 40 Z"
      fill="#090D16"
      stroke="#1E293B"
      strokeWidth="1.2"
    />

    <line x1="20" y1="46" x2="4" y2="41" stroke="#E2E8F0" strokeWidth="1.1" />
    <line x1="20" y1="47" x2="2" y2="48" stroke="#E2E8F0" strokeWidth="1.1" />
    <line x1="20" y1="49" x2="6" y2="55" stroke="#E2E8F0" strokeWidth="1.1" />

    <circle cx="18" cy="46.5" r="2.2" fill="#FB7185" />
    <circle cx="34" cy="41" r="2.4" fill="#000" />
    <circle cx="33.2" cy="40.2" r="0.8" fill="#FFF" />

    <ellipse cx="46" cy="33" rx="6" ry="7.5" fill="#0F172A" stroke="#334155" strokeWidth="1" transform="rotate(-10 46 33)" />
    <ellipse cx="46" cy="33" rx="3.8" ry="4.8" fill="#FDA4AF" opacity="0.8" transform="rotate(-10 46 33)" />

    <ellipse cx="35" cy="52" rx="2.8" ry="3.8" fill="#FB7185" />
    <ellipse cx="43" cy="53" rx="2.8" ry="3.8" fill="#FB7185" />
  </svg>
);

// Pest item definition for the randomized crawl engine
interface PestState {
  id: string;
  name: string;
  component: React.ComponentType;
  x: number;          // % of headline container
  y: number;          // % of headline container
  targetX: number;    // %
  targetY: number;    // %
  angle: number;      // degrees
  speed: number;      // % movement rate per second
  state: 'crawling' | 'paused';
  pauseUntil: number; // ms
  sizeClass: string;  // responsive sizing
}

const INITIAL_PESTS_CONFIG: Array<Omit<PestState, 'x' | 'y' | 'targetX' | 'targetY' | 'angle' | 'state' | 'pauseUntil'> & { initX: number; initY: number }> = [
  {
    id: 'spider',
    name: 'Redback Spider',
    component: SpiderSvg,
    initX: 6,
    initY: 20,
    speed: 12,
    sizeClass: 'w-7 h-7 sm:w-11 sm:h-11',
  },
  {
    id: 'roach',
    name: 'German Cockroach',
    component: CockroachSvg,
    initX: 28,
    initY: 22,
    speed: 22,
    sizeClass: 'w-7 h-9 sm:w-11 sm:h-13',
  },
  {
    id: 'wasp',
    name: 'European Wasp',
    component: WaspSvg,
    initX: 42,
    initY: 18,
    speed: 14,
    sizeClass: 'w-7 h-8 sm:w-11 sm:h-12',
  },
  {
    id: 'fly',
    name: 'Bottle Fly',
    component: FlySvg,
    initX: 58,
    initY: 24,
    speed: 24,
    sizeClass: 'w-6 h-6 sm:w-9 sm:h-9',
  },
  {
    id: 'ant-1',
    name: 'Black Ant 1',
    component: AntSvg,
    initX: 18,
    initY: 34,
    speed: 18,
    sizeClass: 'w-4 h-5 sm:w-6 sm:h-7',
  },
  {
    id: 'ant-2',
    name: 'Black Ant 2',
    component: AntSvg,
    initX: 70,
    initY: 22,
    speed: 16,
    sizeClass: 'w-3.5 h-4.5 sm:w-5 sm:h-6',
  },
  {
    id: 'rodent',
    name: 'Roof Rat',
    component: RodentSvg,
    initX: 76,
    initY: 18,
    speed: 15,
    sizeClass: 'w-14 h-10 sm:w-20 sm:h-14',
  },
];

export const PestHeadline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pestRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Strictly confined boundaries covering only the two text lines
  // X: 4% to 88%
  // Y: 8% (top of Line 1) to 74% (bottom of Line 2)
  const BOUNDS = {
    minX: 4,
    maxX: 88,
    minY: 8,
    maxY: 74,
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const now = performance.now();
    const pests: PestState[] = INITIAL_PESTS_CONFIG.map((cfg) => ({
      ...cfg,
      x: cfg.initX,
      y: cfg.initY,
      targetX: cfg.initX,
      targetY: cfg.initY,
      angle: 0,
      state: 'paused',
      pauseUntil: now + Math.random() * 1500,
    }));

    let lastTime = performance.now();
    let animFrameId: number;

    const pickNewTarget = (p: PestState, isScurry = false) => {
      // Pick random destination strictly inside the confined space
      const newX = BOUNDS.minX + Math.random() * (BOUNDS.maxX - BOUNDS.minX);
      const newY = BOUNDS.minY + Math.random() * (BOUNDS.maxY - BOUNDS.minY);
      
      const dx = newX - p.x;
      const dy = newY - p.y;
      
      p.targetX = newX;
      p.targetY = newY;
      // Facing angle (0deg is facing north/up in SVGs)
      p.angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      p.state = 'crawling';
      if (isScurry) {
        p.speed = p.speed * 2.2;
      }
    };

    const updateLoop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const containerWidth = container.clientWidth || 600;
      const containerHeight = container.clientHeight || 150;

      pests.forEach((p) => {
        const domEl = pestRefs.current[p.id];
        if (!domEl) return;

        if (p.state === 'paused') {
          if (currentTime >= p.pauseUntil) {
            pickNewTarget(p);
          }
        } else if (p.state === 'crawling') {
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 1.0) {
            // Arrived at destination
            p.x = p.targetX;
            p.y = p.targetY;
            p.state = 'paused';
            const baseConfig = INITIAL_PESTS_CONFIG.find((c) => c.id === p.id);
            if (baseConfig) p.speed = baseConfig.speed;
            // Realistic insect pause
            p.pauseUntil = currentTime + 800 + Math.random() * 2400;
          } else {
            // Move toward waypoint
            const step = p.speed * dt;
            const moveX = (dx / dist) * Math.min(dist, step);
            const moveY = (dy / dist) * Math.min(dist, step);

            p.x = Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, p.x + moveX));
            p.y = Math.max(BOUNDS.minY, Math.min(BOUNDS.maxY, p.y + moveY));

            // Face travel direction
            const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
            let angleDiff = (targetAngle - p.angle) % 360;
            if (angleDiff > 180) angleDiff -= 360;
            if (angleDiff < -180) angleDiff += 360;
            p.angle += angleDiff * 0.18;
          }
        }

        // Convert % coordinates to container pixels for true GPU translate3d compositing
        const pxX = (p.x / 100) * containerWidth;
        const pxY = (p.y / 100) * containerHeight;

        domEl.style.transform = `translate3d(${pxX}px, ${pxY}px, 0) translate(-50%, -50%) rotate(${p.angle}deg)`;
      });

      animFrameId = requestAnimationFrame(updateLoop);
    };

    animFrameId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  // Interaction: Scurry on tap/click/hover
  const handlePestInteraction = (id: string) => {
    const domEl = pestRefs.current[id];
    if (domEl) {
      domEl.style.filter = 'drop-shadow(0 0 12px rgba(245, 158, 11, 0.9))';
      setTimeout(() => {
        if (domEl) domEl.style.filter = 'drop-shadow(0 3px 5px rgba(0,0,0,0.85))';
      }, 500);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none inline-block w-full max-w-2xl py-1 sm:py-2"
    >
      {/* 
        ── THE CRAWLING PESTS LAYER ──
        Confined strictly within the headline bounds.
        Coordinates are percentage-based (0%..100%) so they traverse both lines.
      */}
      <div className="absolute inset-0 pointer-events-auto z-20 overflow-hidden">
        {INITIAL_PESTS_CONFIG.map((cfg) => {
          const Comp = cfg.component;
          return (
            <div
              key={cfg.id}
              ref={(el) => { pestRefs.current[cfg.id] = el; }}
              onPointerEnter={() => handlePestInteraction(cfg.id)}
              onClick={() => handlePestInteraction(cfg.id)}
              className={`absolute top-0 left-0 ${cfg.sizeClass} cursor-pointer will-change-transform transition-filter duration-200`}
              style={{
                transform: `translate3d(${cfg.initX}%, ${cfg.initY}%, 0) translate(-50%, -50%)`,
              }}
              title={`${cfg.name} (Tap to startle!)`}
            >
              <Comp />
            </div>
          );
        })}
      </div>

      {/* 
        ── THE TWO HEADLINE LINES ──
      */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] sm:leading-[1.12]">
        {/* LINE 1: "Every pest problem," (Solid White Typography) */}
        <span className="text-white block sm:inline">
          Every pest problem,
        </span>

        {/* LINE BREAK ON DESKTOP */}
        <br className="hidden sm:inline" />

        {/* LINE 2: "one legendary solution" (Vibrant Emerald-to-Gold Gradient) */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 block sm:inline">
          {' '}one legendary solution
        </span>
      </h1>
    </div>
  );
};
