import React, { useEffect, useRef, useState } from 'react';

/**
 * HeroPestsSimulation
 * 
 * High-performance, organic biomimetic insect and marsupial locomotion across the Hero section.
 * Species:
 * 1. Australian Redback Spider
 * 2. German Cockroach
 * 3. European Wasp
 * 4. Bottle Fly
 * 5. Black Ants
 * 6. Australian Brushtail Possum (authentic marsupial with bushy bottle-brush tail and scampering paws)
 * 7. Australian Sugar Glider (authentic marsupial with big sweet eyes, cute pink snout, soft fur folds, and fluffy squirrel tail)
 * 
 * Clean, realistic squash & stamp effect:
 * - Zero blood
 * - Realistic stamp shockwave ring
 * - Crisp flattening compression
 * - Automatic fade-out after ~4.5 seconds and respawn at 5.5 seconds (never clutters screen)
 * - Safe pointer events: zero interference with underlying buttons, inputs, or dropdowns
 */

// 1. Australian Redback Spider (Luminous high-contrast chitin visible against dark background)
const SpiderSvg: React.FC = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full filter drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Spider Legs with Silver & Terracotta Chitin Highlights */}
    <path d="M46 44 C34 32 20 28 10 34 C6 37 4 45 6 49" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 47 C28 42 14 46 8 58 C6 63 8 70 12 73" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
    <path d="M46 51 C32 54 18 64 16 78 C15 84 18 89 22 91" stroke="#CBD5E1" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M47 55 C38 66 30 80 32 94 C33 97 36 99 39 98" stroke="#DE744C" strokeWidth="2.6" strokeLinecap="round" />

    <path d="M54 44 C66 32 80 28 90 34 C94 37 96 45 94 49" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M55 47 C72 42 86 46 92 58 C94 63 92 70 88 73" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
    <path d="M54 51 C68 54 82 64 84 78 C85 84 82 89 78 91" stroke="#CBD5E1" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M53 55 C62 66 70 80 68 94 C67 97 64 99 61 98" stroke="#DE744C" strokeWidth="2.6" strokeLinecap="round" />

    {/* Cephalothorax with metallic grey rim */}
    <ellipse cx="50" cy="46" rx="7" ry="8" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.2" />
    {/* Abdomen with vivid red hourglass stripe */}
    <ellipse cx="50" cy="63" rx="11" ry="15" fill="#0F172A" stroke="#EF4444" strokeWidth="1.8" />
    <path d="M49 57 L51 57 L52 61 L50 63 L48 61 Z" fill="#EF4444" />
    <path d="M50 63 L52 65 L51 70 L49 70 L48 65 Z" fill="#F87171" />
    <circle cx="50" cy="63" r="2" fill="#FCA5A5" />
  </svg>
);

// 2. German Cockroach (Warm glowing amber & golden highlights)
const CockroachSvg: React.FC = () => (
  <svg
    viewBox="0 0 100 120"
    className="w-full h-full filter drop-shadow-[0_0_8px_rgba(245,158,11,0.7)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Long Golden-Cream Antennae */}
    <path d="M46 28 C42 14 28 6 8 4" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
    <path d="M54 28 C60 14 74 6 94 4" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />

    {/* High-contrast amber legs */}
    <path d="M42 38 C28 32 20 28 12 32 C8 34 6 40 4 46" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M58 38 C72 32 80 28 88 32 C92 34 94 40 96 46" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M40 50 C24 48 14 54 8 66 C6 72 6 78 8 82" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    <path d="M60 50 C76 48 86 54 92 66 C94 72 94 78 92 82" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    <path d="M40 64 C22 68 12 82 10 98 C9 106 12 114 16 118" stroke="#D97706" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M60 64 C78 68 88 82 90 98 C91 106 88 114 84 118" stroke="#D97706" strokeWidth="3.2" strokeLinecap="round" />

    {/* Pronotum & Wings */}
    <ellipse cx="50" cy="36" rx="10" ry="8" fill="#D97706" stroke="#FEF08A" strokeWidth="1.6" />
    <path
      d="M40 43 C40 43 35 60 37 84 C39 98 46 106 50 108 C54 106 61 98 63 84 C65 60 60 43 60 43 Z"
      fill="#B45309"
      stroke="#FDE68A"
      strokeWidth="1.8"
    />
    <line x1="50" y1="44" x2="50" y2="107" stroke="#FEF08A" strokeWidth="1.6" />
    <path d="M44 50 C43 62 43 78 45 92" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
  </svg>
);

// 3. European Wasp (Electric yellow & glowing wings)
const WaspSvg: React.FC = () => (
  <svg
    viewBox="0 0 100 110"
    className="w-full h-full filter drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M46 22 C42 12 34 8 24 6" stroke="#FDE047" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M54 22 C58 12 66 10 76 12" stroke="#FDE047" strokeWidth="2.2" strokeLinecap="round" />

    {/* Translucent Luminous Wings */}
    <path
      d="M46 36 C34 26 12 24 2 34 C-2 38 6 48 24 46 C34 45 42 42 46 38 Z"
      fill="#BAE6FD"
      fillOpacity="0.85"
      stroke="#60A5FA"
      strokeWidth="1.5"
    />
    <path
      d="M54 36 C66 26 88 24 98 34 C102 38 94 48 76 46 C66 45 58 42 54 38 Z"
      fill="#BAE6FD"
      fillOpacity="0.85"
      stroke="#60A5FA"
      strokeWidth="1.5"
    />

    <ellipse cx="50" cy="25" rx="7" ry="6" fill="#1E293B" stroke="#FDE047" strokeWidth="1.2" />
    <ellipse cx="50" cy="38" rx="8.5" ry="9.5" fill="#0F172A" stroke="#FACC15" strokeWidth="1.5" />
    <path d="M44 32 Q50 30 56 32" stroke="#FACC15" strokeWidth="2.8" strokeLinecap="round" />

    {/* Vivid Yellow Wasp Abdomen */}
    <g>
      <path d="M43 53 C43 53 39 68 44 88 C46 96 50 102 50 102 C50 102 54 96 56 88 C61 68 57 53 57 53 Z" fill="#1E293B" stroke="#FDE047" strokeWidth="1.4" />
      <path d="M43 58 C46 59 54 59 57 58 C57 63 56 65 56 65 C53 66 47 66 44 65 Z" fill="#FACC15" />
      <path d="M42 68 C46 69 54 69 58 68 C57 73 56 76 56 76 C53 77 47 77 44 76 Z" fill="#FACC15" />
      <path d="M43 79 C46 80 54 80 57 79 C56 84 55 86 55 86 C53 87 47 87 45 86 Z" fill="#FACC15" />
      <line x1="50" y1="102" x2="50" y2="108" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 4. Bottle Fly (Metallic Emerald-Cyan Sheen)
const FlySvg: React.FC = () => (
  <svg
    viewBox="0 0 80 80"
    className="w-full h-full filter drop-shadow-[0_0_8px_rgba(16,185,129,0.75)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36 34 C24 20 8 18 2 28 C-2 36 8 46 26 44 C32 43 36 38 36 34 Z"
      fill="#BAE6FD"
      fillOpacity="0.85"
      stroke="#38BDF8"
      strokeWidth="1.5"
    />
    <path
      d="M44 34 C56 20 72 18 78 28 C82 36 72 46 54 44 C48 43 44 38 44 34 Z"
      fill="#BAE6FD"
      fillOpacity="0.85"
      stroke="#38BDF8"
      strokeWidth="1.5"
    />
    <ellipse cx="34" cy="24" rx="5" ry="6" fill="#EF4444" />
    <ellipse cx="46" cy="24" rx="5" ry="6" fill="#EF4444" />
    <ellipse cx="40" cy="34" rx="8" ry="8.5" fill="#047857" stroke="#34D399" strokeWidth="1.5" />
    <ellipse cx="40" cy="49" rx="8.5" ry="11" fill="#059669" stroke="#6EE7B7" strokeWidth="1.6" />
  </svg>
);

// 5. Worker Ant (Bright glowing amber sugar ant visible on dark hero)
const AntSvg: React.FC = () => (
  <svg
    viewBox="0 0 60 70"
    className="w-full h-full filter drop-shadow-[0_0_8px_rgba(245,158,11,0.85)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Amber Antennae */}
    <path d="M28 14 C24 7 18 7 12 5" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M32 14 C36 7 42 7 48 5" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />

    {/* Glowing Amber Legs */}
    <path d="M27 22 C18 15 10 17 4 21" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M33 22 C42 15 50 17 56 21" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 28 C15 28 8 34 4 42" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M34 28 C45 28 52 34 56 42" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Head, Thorax & Abdomen in bright amber/gold chitin */}
    <ellipse cx="30" cy="17" rx="5" ry="6" fill="#F59E0B" stroke="#FEF08A" strokeWidth="1.2" />
    <ellipse cx="30" cy="27" rx="3.8" ry="5.5" fill="#D97706" stroke="#FEF08A" strokeWidth="1.2" />
    <ellipse cx="30" cy="43" rx="6.5" ry="9" fill="#B45309" stroke="#FDE68A" strokeWidth="1.5" />
  </svg>
);

// 6. Australian Brushtail Possum (Unmistakable marsupial: bushy bottle-brush tail, cute pink nose, scampering paws)
const PossumSvg: React.FC = () => (
  <svg
    viewBox="0 0 170 120"
    className="w-full h-full filter drop-shadow-[0_0_10px_rgba(203,213,225,0.45)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bushy bottle-brush prehensile tail with fur texture */}
    <path
      d="M 125 60 C 145 52 165 62 168 82 C 170 102 150 114 132 110 C 118 106 112 92 118 82 C 122 75 132 76 136 84"
      stroke="#475569"
      strokeWidth="15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 125 60 C 145 52 165 62 168 82 C 170 102 150 114 132 110 C 118 106 112 92 118 82"
      stroke="#94A3B8"
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path d="M 148 64 Q 158 60 164 68" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
    <path d="M 154 90 Q 166 94 158 104" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />

    {/* Back Paws */}
    <ellipse cx="112" cy="85" rx="7" ry="5" fill="#FDA4AF" stroke="#64748B" strokeWidth="1" />
    <circle cx="117" cy="86" r="1.2" fill="#0F172A" />
    <circle cx="114" cy="88" r="1.2" fill="#0F172A" />

    {/* Plump Possum Torso */}
    <ellipse cx="90" cy="62" rx="36" ry="26" fill="#64748B" stroke="#94A3B8" strokeWidth="2" />
    <ellipse cx="88" cy="58" rx="30" ry="18" fill="#94A3B8" opacity="0.75" />
    <ellipse cx="84" cy="68" rx="26" ry="12" fill="#F8FAFC" opacity="0.6" />

    {/* Front Paws */}
    <ellipse cx="58" cy="82" rx="6" ry="5" fill="#FDA4AF" stroke="#64748B" strokeWidth="1" />
    <circle cx="62" cy="83" r="1.2" fill="#0F172A" />
    <circle cx="59" cy="85" r="1.2" fill="#0F172A" />

    {/* Possum Head */}
    <path
      d="M 64 48 C 64 48 48 40 32 48 C 24 52 16 58 12 62 C 18 66 32 70 48 68 C 60 66 66 56 64 48 Z"
      fill="#64748B"
      stroke="#CBD5E1"
      strokeWidth="1.8"
    />
    <path d="M 44 56 C 36 58 26 62 20 64 C 28 66 38 67 46 66 Z" fill="#E2E8F0" opacity="0.85" />

    {/* Cute Pink Possum Snout */}
    <ellipse cx="14" cy="62" rx="3.5" ry="2.6" fill="#FB7185" />
    <circle cx="13" cy="61.5" r="1" fill="#BE123C" />

    {/* Whiskers */}
    <line x1="22" y1="60" x2="4" y2="54" stroke="#FFFFFF" strokeWidth="1.2" />
    <line x1="22" y1="62" x2="2" y2="62" stroke="#FFFFFF" strokeWidth="1.2" />
    <line x1="22" y1="64" x2="5" y2="69" stroke="#FFFFFF" strokeWidth="1.2" />

    {/* Big nocturnal dark eye with reflective catchlight */}
    <circle cx="36" cy="52" r="4.5" fill="#090D16" stroke="#94A3B8" strokeWidth="1.2" />
    <circle cx="34.5" cy="50.5" r="1.6" fill="#FFFFFF" />

    {/* Rounded Possum Ears with soft pink inner lining */}
    <ellipse cx="54" cy="40" rx="8" ry="11" fill="#475569" stroke="#94A3B8" strokeWidth="1.6" transform="rotate(-20 54 40)" />
    <ellipse cx="54" cy="41" rx="5" ry="7.5" fill="#FDA4AF" opacity="0.95" transform="rotate(-20 54 40)" />
  </svg>
);

// 7. Australian Sugar Glider (Biologically accurate marsupial: sweet round face, big glossy eyes, soft wavy fur folds, fluffy squirrel tail)
const SugarGliderSvg: React.FC = () => (
  <svg
    viewBox="0 0 150 130"
    className="w-full h-full filter drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] pointer-events-none select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Long Fluffy Squirrel Tail with soft curves */}
    <path
      d="M 75 88 C 75 104 68 118 76 128"
      stroke="#475569"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M 75 88 C 75 104 68 118 76 128"
      stroke="#94A3B8"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path d="M 70 108 Q 60 114 66 122" stroke="#E2E8F0" strokeWidth="1.8" strokeLinecap="round" />

    {/* Left Gliding Fur Membrane (Natural soft curved mammalian skin flap) */}
    <path
      d="M 50 48 C 30 46 16 56 18 72 C 20 84 38 90 56 86 C 54 78 52 64 50 48 Z"
      fill="#64748B"
      stroke="#CBD5E1"
      strokeWidth="1.5"
      opacity="0.95"
    />
    <circle cx="20" cy="54" r="3.2" fill="#FDA4AF" stroke="#64748B" strokeWidth="1" />
    <circle cx="24" cy="86" r="3.2" fill="#FDA4AF" stroke="#64748B" strokeWidth="1" />

    {/* Right Gliding Fur Membrane (Natural soft curved mammalian skin flap) */}
    <path
      d="M 100 48 C 120 46 134 56 132 72 C 130 84 112 90 94 86 C 96 78 98 64 100 48 Z"
      fill="#64748B"
      stroke="#CBD5E1"
      strokeWidth="1.5"
      opacity="0.95"
    />
    <circle cx="130" cy="54" r="3.2" fill="#FDA4AF" stroke="#64748B" strokeWidth="1" />
    <circle cx="126" cy="86" r="3.2" fill="#FDA4AF" stroke="#64748B" strokeWidth="1" />

    {/* Furry Torso */}
    <ellipse cx="75" cy="68" rx="18" ry="24" fill="#64748B" stroke="#94A3B8" strokeWidth="1.8" />
    <ellipse cx="75" cy="70" rx="12" ry="18" fill="#FFFFFF" opacity="0.95" />

    {/* Distinctive Sugar Glider dark dorsal spine stripe */}
    <path d="M 75 32 L 75 88" stroke="#1E293B" strokeWidth="3.2" strokeLinecap="round" />

    {/* Adorable Sweet Marsupial Head */}
    <ellipse cx="75" cy="42" rx="15" ry="13" fill="#64748B" stroke="#CBD5E1" strokeWidth="1.6" />
    <ellipse cx="66" cy="46" rx="5" ry="4" fill="#FFFFFF" opacity="0.9" />
    <ellipse cx="84" cy="46" rx="5" ry="4" fill="#FFFFFF" opacity="0.9" />

    {/* Pink Button Snout */}
    <ellipse cx="75" cy="49" rx="2.8" ry="2" fill="#FB7185" />

    {/* Big Sweet Nocturnal Eyes with Twinkle */}
    <circle cx="66" cy="40" r="4.2" fill="#020617" stroke="#94A3B8" strokeWidth="1.2" />
    <circle cx="64.8" cy="38.8" r="1.6" fill="#FFFFFF" />
    <circle cx="84" cy="40" r="4.2" fill="#020617" stroke="#94A3B8" strokeWidth="1.2" />
    <circle cx="82.8" cy="38.8" r="1.6" fill="#FFFFFF" />

    {/* Rounded Mouse-like Ears with pink interior */}
    <ellipse cx="61" cy="30" rx="4.5" ry="7" fill="#475569" stroke="#CBD5E1" strokeWidth="1.2" transform="rotate(-25 61 30)" />
    <ellipse cx="61" cy="31" rx="2.8" ry="4.8" fill="#FDA4AF" opacity="0.95" transform="rotate(-25 61 30)" />

    <ellipse cx="89" cy="30" rx="4.5" ry="7" fill="#475569" stroke="#CBD5E1" strokeWidth="1.2" transform="rotate(25 89 30)" />
    <ellipse cx="89" cy="31" rx="2.8" ry="4.8" fill="#FDA4AF" opacity="0.95" transform="rotate(25 89 30)" />

    {/* Fine Whiskers */}
    <line x1="71" y1="48" x2="57" y2="47" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
    <line x1="71" y1="50" x2="55" y2="52" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
    <line x1="79" y1="48" x2="93" y2="47" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
    <line x1="79" y1="50" x2="95" y2="52" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
  </svg>
);

// High-precision Stamp & Shockwave Ring (Realistic Eradication Stamp, No Blood)
const RealisticSquishStamp: React.FC = () => (
  <div className="absolute -inset-4 sm:-inset-6 pointer-events-none select-none flex items-center justify-center">
    <div className="absolute inset-0 rounded-full border-2 border-emerald-500/70 animate-ping opacity-60" />
    
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full animate-in zoom-in-75 duration-200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="38" stroke="#059669" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.8" />
      <circle cx="50" cy="50" r="28" stroke="#10B981" strokeWidth="1.2" opacity="0.6" />
      <line x1="50" y1="8" x2="50" y2="20" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="80" x2="50" y2="92" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="50" x2="20" y2="50" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="50" x2="92" y2="50" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

interface BiologicalPest {
  id: string;
  name: string;
  component: React.ComponentType;
  x: number;          // % (0 to 100)
  y: number;          // % (0 to 100)
  targetX: number;    // %
  targetY: number;    // %
  angle: number;      // degrees
  speed: number;      // base % per second
  burstMultiplier: number;
  headingOffset: number;
  species: 'spider' | 'cockroach' | 'wasp' | 'fly' | 'ant' | 'possum' | 'glider';
  state: 'crawling' | 'paused' | 'squished' | 'vanished';
  pauseUntil: number;
  squishTime?: number;
  seed: number;
  sizeClass: string;
}

/**
 * Configuration Toggle for Flying Animals:
 * Set to true anytime you want to re-enable flying animals (Sugar Glider, European Wasp, Bottle Fly).
 * Set to false (default) to remove all flying animals from behind and keep only subtle crawling pests.
 * A full snapshot is preserved in: backups/flying-animals-snapshot/
 */
export const ENABLE_FLYING_ANIMALS = false;

// Ground-crawling pests (Cockroach, Spiders, Ants, Possum)
const GROUND_PESTS: Array<Omit<BiologicalPest, 'x' | 'y' | 'targetX' | 'targetY' | 'angle' | 'state' | 'pauseUntil' | 'seed' | 'burstMultiplier'> & { initX: number; initY: number }> = [
  {
    id: 'hero-spider',
    name: 'Redback Spider',
    component: SpiderSvg,
    initX: 12,
    initY: 18,
    speed: 6.5,
    sizeClass: 'w-8 h-8 sm:w-10 sm:h-10',
    headingOffset: 90,
    species: 'spider',
  },
  {
    id: 'hero-roach',
    name: 'German Cockroach',
    component: CockroachSvg,
    initX: 28,
    initY: 26,
    speed: 18,
    sizeClass: 'w-8 h-10 sm:w-10 sm:h-12',
    headingOffset: 90,
    species: 'cockroach',
  },
  {
    id: 'hero-ant-1',
    name: 'Black Ant',
    component: AntSvg,
    initX: 18,
    initY: 40,
    speed: 13,
    sizeClass: 'w-4 h-5 sm:w-5 sm:h-6',
    headingOffset: 90,
    species: 'ant',
  },
  {
    id: 'hero-possum',
    name: 'Brushtail Possum',
    component: PossumSvg,
    initX: 8,
    initY: 76,
    speed: 7.5,
    sizeClass: 'w-14 h-10 sm:w-18 sm:h-13',
    headingOffset: 180,
    species: 'possum',
  },
  {
    id: 'hero-spider-under-form',
    name: 'Redback Spider',
    component: SpiderSvg,
    initX: 82,
    initY: 68,
    speed: 9,
    sizeClass: 'w-8 h-8 sm:w-10 sm:h-10',
    headingOffset: 90,
    species: 'spider',
  },
];

// Flying animals and insects preserved for future re-enablement
const FLYING_ANIMALS: Array<Omit<BiologicalPest, 'x' | 'y' | 'targetX' | 'targetY' | 'angle' | 'state' | 'pauseUntil' | 'seed' | 'burstMultiplier'> & { initX: number; initY: number }> = [
  {
    id: 'hero-wasp',
    name: 'European Wasp',
    component: WaspSvg,
    initX: 46,
    initY: 15,
    speed: 11,
    sizeClass: 'w-8 h-9 sm:w-10 sm:h-11',
    headingOffset: 90,
    species: 'wasp',
  },
  {
    id: 'hero-fly',
    name: 'Bottle Fly',
    component: FlySvg,
    initX: 68,
    initY: 20,
    speed: 15,
    sizeClass: 'w-7 h-7 sm:w-8 sm:h-8',
    headingOffset: 90,
    species: 'fly',
  },
  {
    id: 'hero-glider',
    name: 'Sugar Glider',
    component: SugarGliderSvg,
    initX: 86,
    initY: 12,
    speed: 15,
    sizeClass: 'w-14 h-12 sm:w-18 sm:h-15',
    headingOffset: 90,
    species: 'glider',
  },
];

const HERO_PESTS = ENABLE_FLYING_ANIMALS ? [...GROUND_PESTS, ...FLYING_ANIMALS] : GROUND_PESTS;

export const HeroPestsSimulation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pestRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const pestsStateRef = useRef<BiologicalPest[]>([]);
  const [squishCount, setSquishCount] = useState(0);
  const [, setForceRender] = useState(0);

  // Initialize biological pests once
  if (pestsStateRef.current.length === 0) {
    pestsStateRef.current = HERO_PESTS.map((cfg, idx) => ({
      ...cfg,
      x: cfg.initX,
      y: cfg.initY,
      targetX: cfg.initX,
      targetY: cfg.initY,
      angle: Math.random() * 360,
      burstMultiplier: 1,
      state: 'paused',
      pauseUntil: performance.now() + Math.random() * 1500,
      seed: idx * 2.37,
    }));
  }

  // Handle squishing a bug or capturing a marsupial
  const handleSquishPest = (id: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    const p = pestsStateRef.current.find((item) => item.id === id);
    if (!p || p.state === 'squished' || p.state === 'vanished') return;

    p.state = 'squished';
    p.squishTime = performance.now();

    // Haptic feedback for mobile phones
    try {
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([40, 20, 40]);
      }
    } catch {}

    setSquishCount((prev) => prev + 1);
    setForceRender((n) => n + 1);

    // EXACT USER RULE: Carcass removed in 2 seconds
    setTimeout(() => {
      if (p.state === 'squished') {
        p.state = 'vanished';
        const domEl = pestRefs.current[p.id];
        if (domEl) {
          domEl.style.opacity = '0';
          domEl.style.pointerEvents = 'none';
        }
        setForceRender((n) => n + 1);
      }
    }, 2000);

    // EXACT USER RULE: Regenerated in 10 seconds
    setTimeout(() => {
      p.state = 'crawling';
      const side = Math.floor(Math.random() * 4);
      if (side === 0) { p.x = Math.random() * 90 + 5; p.y = 8; }
      else if (side === 1) { p.x = Math.random() * 90 + 5; p.y = 92; }
      else if (side === 2) { p.x = 4; p.y = Math.random() * 80 + 10; }
      else { p.x = 94; p.y = Math.random() * 80 + 10; }

      const domEl = pestRefs.current[p.id];
      if (domEl) {
        domEl.style.opacity = '0.95';
        domEl.style.pointerEvents = 'auto';
      }
      setForceRender((n) => n + 1);
    }, 10000);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pests = pestsStateRef.current;
    let lastTime = performance.now();
    let animFrameId: number;

    const pickNewTarget = (p: BiologicalPest, wPx: number, hPx: number) => {
      // Glider sweeps diagonally across upper hero
      if (p.species === 'glider') {
        const targetSideRight = p.x < 50;
        p.targetX = targetSideRight ? 75 + Math.random() * 18 : 6 + Math.random() * 20;
        p.targetY = 6 + Math.random() * 22;
        p.burstMultiplier = 1.35;
        return;
      }

      // Possum explores lower edges / perimeter
      if (p.species === 'possum') {
        p.targetX = Math.max(5, Math.min(92, p.x + (Math.random() - 0.5) * 35));
        p.targetY = 68 + Math.random() * 24;
        p.burstMultiplier = 0.9;
        return;
      }

      let targetDistPct = 20 + Math.random() * 45;
      if (p.species === 'cockroach') {
        targetDistPct = 14 + Math.random() * 28;
      } else if (p.species === 'ant') {
        targetDistPct = 8 + Math.random() * 20;
      }

      const wanderAngleRad = Math.random() * 2 * Math.PI;
      const aspect = wPx / Math.max(hPx, 1);
      const targetDeltaX = Math.cos(wanderAngleRad) * targetDistPct;
      const targetDeltaY = (Math.sin(wanderAngleRad) * targetDistPct) * aspect;

      let nX = p.x + targetDeltaX;
      let nY = p.y + targetDeltaY;

      // On mobile, keep pests wandering along margins so headline text is completely clear
      if (wPx < 640 && nX > 25 && nX < 75 && nY > 24 && nY < 52) {
        nY = nY < 38 ? 12 + Math.random() * 10 : 58 + Math.random() * 26;
      }

      // Keep within bounds
      nX = Math.max(4, Math.min(94, nX));
      nY = Math.max(8, Math.min(92, nY));

      p.targetX = nX;
      p.targetY = nY;

      if (p.species === 'cockroach') {
        p.burstMultiplier = 1.5 + Math.random() * 1.6;
      } else if (p.species === 'fly') {
        p.burstMultiplier = 1.2 + Math.random() * 1.4;
      } else {
        p.burstMultiplier = 0.85 + Math.random() * 0.4;
      }
    };

    const updateLoop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;

      const containerWidth = container.clientWidth || 1000;
      const containerHeight = container.clientHeight || 700;

      pests.forEach((p) => {
        const domEl = pestRefs.current[p.id];
        if (!domEl) return;

        // Vanished: completely hidden until 10-second respawn
        if (p.state === 'vanished') {
          domEl.style.opacity = '0';
          domEl.style.pointerEvents = 'none';
          return;
        }

        // Squished: visible for 2 seconds then vanished
        if (p.state === 'squished') {
          const elapsed = now - (p.squishTime || now);
          if (elapsed > 1600) {
            const fade = Math.max(0, 1 - (elapsed - 1600) / 400);
            domEl.style.opacity = (fade * 0.95).toString();
          } else {
            domEl.style.opacity = '0.95';
          }
          const pxX = (p.x / 100) * containerWidth;
          const pxY = (p.y / 100) * containerHeight;
          domEl.style.transform = `translate3d(${pxX}px, ${pxY}px, 0) translate(-50%, -50%) rotate(${p.angle}deg)`;
          return;
        }

        const timeSec = now / 1000;
        let gaitWobble = 0;

        if (p.state === 'paused') {
          if (now >= p.pauseUntil) {
            p.state = 'crawling';
            pickNewTarget(p, containerWidth, containerHeight);
          } else {
            // Idle jitter / antenna twitch
            const twitch = Math.sin(timeSec * 16 + p.seed) * 1.5;
            gaitWobble = twitch;
          }
        } else {
          // Crawling or gliding
          const curPxX = (p.x / 100) * containerWidth;
          const curPxY = (p.y / 100) * containerHeight;
          const tgtPxX = (p.targetX / 100) * containerWidth;
          const tgtPxY = (p.targetY / 100) * containerHeight;

          const dxPx = tgtPxX - curPxX;
          const dyPx = tgtPxY - curPxY;
          const distPx = Math.sqrt(dxPx * dxPx + dyPx * dyPx);

          if (distPx < 14) {
            p.state = 'paused';
            const pauseDuration = p.species === 'cockroach'
              ? 500 + Math.random() * 1400
              : p.species === 'glider'
              ? 400 + Math.random() * 800
              : 800 + Math.random() * 2600;
            p.pauseUntil = now + pauseDuration;
          } else {
            const stepSpeedPx = (p.speed * (containerWidth / 100)) * p.burstMultiplier;
            const stepDistPx = Math.min(stepSpeedPx * dt, distPx);

            const dirX = dxPx / distPx;
            const dirY = dyPx / distPx;

            const nextPxX = curPxX + dirX * stepDistPx;
            const nextPxY = curPxY + dirY * stepDistPx;

            p.x = Math.max(3, Math.min(96, (nextPxX / containerWidth) * 100));
            p.y = Math.max(6, Math.min(94, (nextPxY / containerHeight) * 100));

            const targetAngle = Math.atan2(dyPx, dxPx) * (180 / Math.PI) + p.headingOffset;
            let angleDiff = (targetAngle - p.angle) % 360;
            if (angleDiff > 180) angleDiff -= 360;
            if (angleDiff < -180) angleDiff += 360;
            p.angle += angleDiff * 0.22;

            const wobbleFreq = p.species === 'ant' ? 26 : p.species === 'cockroach' ? 22 : p.species === 'glider' ? 4 : 14;
            const wobbleAmp = p.species === 'glider' ? 5 : p.species === 'cockroach' ? 3.5 : 4.0;
            gaitWobble = Math.sin(timeSec * wobbleFreq + p.seed) * wobbleAmp;
          }
        }

        const pxX = (p.x / 100) * containerWidth;
        const pxY = (p.y / 100) * containerHeight;
        const finalAngle = p.angle + gaitWobble;

        domEl.style.transform = `translate3d(${pxX}px, ${pxY}px, 0) translate(-50%, -50%) rotate(${finalAngle}deg)`;
      });

      animFrameId = requestAnimationFrame(updateLoop);
    };

    animFrameId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden sm:block absolute inset-0 pointer-events-none z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Playful eradication counter badge */}
      {squishCount > 0 && (
        <div className="absolute top-3 right-4 sm:top-5 sm:right-8 z-30 pointer-events-none animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-3.5 py-1.5 rounded-full bg-[#1A1D24]/95 backdrop-blur-md border border-[#DE744C]/50 text-white text-xs font-black flex items-center gap-1.5 shadow-lg shadow-[#DE744C]/20">
            <span>🎯</span>
            <span className="text-[#DE744C]">{squishCount}</span>
            <span>Pest{squishCount > 1 ? 's' : ''} Eradicated!</span>
          </div>
        </div>
      )}

      {pestsStateRef.current.map((cfg) => {
        if (cfg.state === 'vanished') {
          return (
            <div
              key={cfg.id}
              ref={(el) => { pestRefs.current[cfg.id] = el; }}
              style={{ display: 'none' }}
              aria-hidden="true"
            />
          );
        }

        const Comp = cfg.component;
        const isSquished = cfg.state === 'squished';

        return (
          <div
            key={cfg.id}
            data-pest-species={cfg.species}
            ref={(el) => { pestRefs.current[cfg.id] = el; }}
            onClick={(e) => handleSquishPest(cfg.id, e)}
            onTouchStart={(e) => handleSquishPest(cfg.id, e)}
            className={`absolute top-0 left-0 ${cfg.sizeClass} pointer-events-auto cursor-crosshair will-change-transform opacity-95 transition-opacity duration-300 select-none filter drop-shadow-[0_0_10px_rgba(222,116,76,0.55)]`}
            style={{
              transform: `translate3d(${cfg.x}%, ${cfg.y}%, 0) translate(-50%, -50%)`,
              touchAction: 'manipulation',
            }}
            title={`Tap to eradicate ${cfg.name}!`}
          >
            {/* Realistic stamp & target shockwave when squished */}
            {isSquished && <RealisticSquishStamp />}

            {/* Realistic Flattened / Stamped Sprite Physics */}
            <div
              className={`w-full h-full relative z-10 transition-transform duration-150 ${
                isSquished
                  ? 'opacity-85 filter contrast-125 brightness-90'
                  : ''
              }`}
              style={
                isSquished
                  ? {
                      transform: 'scale(1.45, 0.22)',
                      transformOrigin: 'center center',
                    }
                  : undefined
              }
            >
              <Comp />
            </div>
          </div>
        );
      })}
    </div>
  );
};
