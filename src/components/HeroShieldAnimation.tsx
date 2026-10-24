import React, { useEffect, useRef, useCallback } from 'react';

/**
 * HeroShieldAnimation — Canvas-based "Protection Shield" background
 *
 * Visual story: Tiny pest-like particles drift in from the edges.
 * A glowing emerald hexagonal shield grid expands from the center as the
 * user scrolls, repelling and dissolving the pests on contact.
 * Connection lines between shield nodes form a mesh barrier.
 *
 * Scroll-driven:
 *   scrollProgress 0 → shield is small, pests visible, warm-amber tint
 *   scrollProgress 1 → shield fully expanded, pests scattered, cool-emerald glow
 */
export const HeroShieldAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const animFrameRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const shieldNodesRef = useRef<ShieldNode[]>([]);
  const initializedRef = useRef(false);

  // ── Types ───────────────────────────────────────────────────────────
  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    baseAlpha: number;
    alpha: number;
    type: 'pest' | 'ambient';
    angle: number;       // direction from center (radians)
    dist: number;        // distance from center
    wiggleOffset: number;
    speed: number;
  }

  interface ShieldNode {
    x: number;
    y: number;
    baseRadius: number;  // distance from center at which this node sits
    angle: number;
    ring: number;
    alpha: number;
    pulseOffset: number;
  }

  // ── Initialise particles & shield grid ──────────────────────────────
  const initScene = useCallback((w: number, h: number) => {
    const cx = w / 2;
    const cy = h / 2;
    const isMobile = w < 640;
    const pestCount = isMobile ? 35 : 70;
    const ambientCount = isMobile ? 25 : 55;

    // Create pest particles — start scattered around edges
    const pests: Particle[] = [];
    for (let i = 0; i < pestCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = (Math.max(w, h) * 0.3) + Math.random() * Math.max(w, h) * 0.35;
      pests.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 1.5 + Math.random() * 2.5,
        baseAlpha: 0.25 + Math.random() * 0.35,
        alpha: 0.3,
        type: 'pest',
        angle,
        dist,
        wiggleOffset: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.35,
      });
    }

    // Ambient soft glow particles — fill the space gently
    const ambients: Particle[] = [];
    for (let i = 0; i < ambientCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * Math.max(w, h) * 0.5;
      ambients.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: 0.8 + Math.random() * 1.5,
        baseAlpha: 0.08 + Math.random() * 0.15,
        alpha: 0.1,
        type: 'ambient',
        angle,
        dist,
        wiggleOffset: Math.random() * Math.PI * 2,
        speed: 0.05 + Math.random() * 0.1,
      });
    }

    particlesRef.current = [...pests, ...ambients];

    // Build concentric hexagonal shield grid nodes
    const nodes: ShieldNode[] = [];
    const rings = isMobile ? 4 : 6;
    const maxShieldRadius = Math.min(w, h) * (isMobile ? 0.38 : 0.42);

    for (let ring = 1; ring <= rings; ring++) {
      const r = (ring / rings) * maxShieldRadius;
      const nodesInRing = 6 * ring; // hex symmetry
      for (let j = 0; j < nodesInRing; j++) {
        const a = (j / nodesInRing) * Math.PI * 2 + (ring % 2 === 0 ? Math.PI / nodesInRing : 0);
        nodes.push({
          x: cx + Math.cos(a) * r,
          y: cy + Math.sin(a) * r,
          baseRadius: r,
          angle: a,
          ring,
          alpha: 0,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    }
    shieldNodesRef.current = nodes;
    initializedRef.current = true;
  }, []);

  // ── Main animation loop ────────────────────────────────────────────
  const draw = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const p = scrollRef.current; // 0 → 1
    const isMobile = w < 640;

    // Clear
    ctx.clearRect(0, 0, w, h);

    const maxShieldRadius = Math.min(w, h) * (isMobile ? 0.38 : 0.42);
    // Shield radius grows with scroll
    const shieldRadius = maxShieldRadius * (0.15 + p * 0.85);

    // ── 1. Draw radial gradient glow at center (the "shield core") ───
    const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, shieldRadius * 1.3);
    const emeraldIntensity = 0.06 + p * 0.14;
    coreGlow.addColorStop(0, `rgba(16, 185, 129, ${emeraldIntensity})`);
    coreGlow.addColorStop(0.5, `rgba(6, 78, 59, ${emeraldIntensity * 0.5})`);
    coreGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = coreGlow;
    ctx.fillRect(0, 0, w, h);

    // ── 2. Draw & update shield nodes + connection mesh ──────────────
    const nodes = shieldNodesRef.current;
    const timeSec = time * 0.001;

    for (const node of nodes) {
      // Nodes activate progressively — inner rings first
      const activationThreshold = (node.ring / (isMobile ? 4 : 6)) * 0.85;
      const nodeActive = p > activationThreshold ? 1 : p / Math.max(activationThreshold, 0.01);
      node.alpha = Math.min(1, nodeActive * (0.3 + 0.4 * Math.sin(timeSec * 1.5 + node.pulseOffset) * 0.5 + 0.5));

      if (node.alpha < 0.02) continue;

      // Draw node dot
      const dotSize = 1.5 + node.alpha * 1.5;
      ctx.beginPath();
      ctx.arc(node.x, node.y, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(52, 211, 153, ${node.alpha * 0.7})`;
      ctx.fill();

      // Outer glow ring
      ctx.beginPath();
      ctx.arc(node.x, node.y, dotSize + 3, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(16, 185, 129, ${node.alpha * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw connection lines between nearby nodes in same/adjacent rings
    ctx.lineWidth = 0.5;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].alpha < 0.05) continue;
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[j].alpha < 0.05) continue;
        if (Math.abs(nodes[i].ring - nodes[j].ring) > 1) continue;

        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = maxShieldRadius / (isMobile ? 2.5 : 3);

        if (dist < maxDist) {
          const lineAlpha = Math.min(nodes[i].alpha, nodes[j].alpha) * (1 - dist / maxDist) * 0.35;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(52, 211, 153, ${lineAlpha})`;
          ctx.stroke();
        }
      }
    }

    // ── 3. Rotating scanner sweep ────────────────────────────────────
    const sweepAngle = timeSec * 0.8; // slow rotation
    const sweepWidth = 0.5; // radians
    const sweepGrad = ctx.createConicGradient(sweepAngle, cx, cy);
    sweepGrad.addColorStop(0, `rgba(16, 185, 129, ${0.03 + p * 0.06})`);
    sweepGrad.addColorStop(sweepWidth / (Math.PI * 2), 'transparent');
    sweepGrad.addColorStop(1, 'transparent');

    ctx.beginPath();
    ctx.arc(cx, cy, shieldRadius * 1.1, 0, Math.PI * 2);
    ctx.fillStyle = sweepGrad;
    ctx.fill();

    // ── 4. Draw & update particles ───────────────────────────────────
    const particles = particlesRef.current;
    for (const pt of particles) {
      // Gentle drift movement
      pt.x += pt.vx + Math.sin(timeSec * 0.7 + pt.wiggleOffset) * pt.speed * 0.3;
      pt.y += pt.vy + Math.cos(timeSec * 0.5 + pt.wiggleOffset) * pt.speed * 0.3;

      // Wrap around edges
      if (pt.x < -20) pt.x = w + 20;
      if (pt.x > w + 20) pt.x = -20;
      if (pt.y < -20) pt.y = h + 20;
      if (pt.y > h + 20) pt.y = -20;

      // Calculate distance from center
      const dx = pt.x - cx;
      const dy = pt.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (pt.type === 'pest') {
        // Pests get repelled by the shield as it expands
        if (dist < shieldRadius * 1.15) {
          // Push outward
          const pushAngle = Math.atan2(dy, dx);
          const pushForce = (1 - dist / (shieldRadius * 1.15)) * (0.4 + p * 1.2);
          pt.vx += Math.cos(pushAngle) * pushForce;
          pt.vy += Math.sin(pushAngle) * pushForce;

          // Dissolve near shield edge
          pt.alpha = pt.baseAlpha * Math.max(0, (dist / (shieldRadius * 1.15) - 0.3) / 0.7) * (1 - p * 0.6);
        } else {
          pt.alpha = pt.baseAlpha * (1 - p * 0.45);
        }

        // Dampen velocity
        pt.vx *= 0.985;
        pt.vy *= 0.985;

        if (pt.alpha < 0.01) continue;

        // Draw pest particle — amber/reddish tint
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        const r = 180 + Math.floor(Math.random() * 40);
        const g = 80 + Math.floor(Math.random() * 40);
        ctx.fillStyle = `rgba(${r}, ${g}, 50, ${pt.alpha})`;
        ctx.fill();

        // Tiny legs/antenna effect — two small lines
        if (pt.size > 2 && pt.alpha > 0.1) {
          const legLen = pt.size * 0.9;
          ctx.strokeStyle = `rgba(${r}, ${g}, 50, ${pt.alpha * 0.5})`;
          ctx.lineWidth = 0.4;
          for (let l = 0; l < 3; l++) {
            const la = pt.wiggleOffset + l * 1.05 + timeSec * 2;
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(pt.x + Math.cos(la) * legLen, pt.y + Math.sin(la) * legLen);
            ctx.stroke();
          }
        }
      } else {
        // Ambient particles — emerald glow dots
        pt.alpha = pt.baseAlpha * (0.5 + Math.sin(timeSec + pt.wiggleOffset) * 0.3);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${pt.alpha})`;
        ctx.fill();
      }
    }

    // ── 5. Shield ring border glow ───────────────────────────────────
    ctx.beginPath();
    ctx.arc(cx, cy, shieldRadius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(52, 211, 153, ${0.08 + p * 0.18})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Outer faint ring
    ctx.beginPath();
    ctx.arc(cx, cy, shieldRadius * 1.12, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(16, 185, 129, ${0.03 + p * 0.08})`;
    ctx.lineWidth = 0.8;
    ctx.stroke();

    // ── 6. Small hex markers on the shield perimeter ─────────────────
    const hexCount = isMobile ? 6 : 12;
    for (let i = 0; i < hexCount; i++) {
      const a = (i / hexCount) * Math.PI * 2 + timeSec * 0.15;
      const hx = cx + Math.cos(a) * shieldRadius;
      const hy = cy + Math.sin(a) * shieldRadius;
      const hexAlpha = 0.15 + p * 0.35 + Math.sin(timeSec * 2 + i) * 0.1;

      // Tiny hexagon
      ctx.beginPath();
      for (let v = 0; v < 6; v++) {
        const va = (v / 6) * Math.PI * 2;
        const hr = 3 + p * 2;
        const px = hx + Math.cos(va) * hr;
        const py = hy + Math.sin(va) * hr;
        v === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(52, 211, 153, ${hexAlpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.fillStyle = `rgba(16, 185, 129, ${hexAlpha * 0.3})`;
      ctx.fill();
    }

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  // ── Setup: resize, scroll, start loop ──────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);

      // Re-init the scene at new dimensions
      initScene(rect.width, rect.height);
    };

    const handleScroll = () => {
      const heroEl = canvas.parentElement;
      if (!heroEl) return;
      const heroHeight = heroEl.clientHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / (heroHeight * 0.9)));
      scrollRef.current = progress;
    };

    resize();
    handleScroll();

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initScene, draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};
