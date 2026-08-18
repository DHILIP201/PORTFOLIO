'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import type { AmbientItem } from '@/content/ambient';

type DeveloperAmbientProps = {
  items: readonly AmbientItem[];
  className?: string;
  floating?: boolean;
};

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

function parsePercent(value: string | number, total: number) {
  const raw = typeof value === 'number' ? value : Number.parseFloat(value);
  if (Number.isNaN(raw)) return total * 0.5;
  return (raw / 100) * total;
}

function getDisplayText(label: string) {
  const cleaned = label.trim();
  const m: Record<string, string> = {
    'Node.js': 'Node', 'LeetCode': 'LC', 'ChatGPT': 'GPT', 'Gemini': 'G', 'Claude': 'C',
    'GitHub': 'GitHub', 'LinkedIn': 'in', 'Vercel': 'Vercel', 'Render': 'Render',
    'Netlify': 'Netlify', 'React': 'React', 'Flutter': 'Flutter', 'TypeScript': 'TS',
    'JavaScript': 'JS', 'Python': 'Py', 'MongoDB': 'Mongo', 'Git': 'Git',
    'database': 'DATABASE', 'terminal': 'terminal', 'API': 'API', 'deploy': 'deploy',
    'code': '{}', 'commit': 'commit',
  };
  return m[cleaned] ?? (cleaned.length > 10 ? cleaned.slice(0, 8).toUpperCase() : cleaned.toUpperCase());
}

function renderBrandLogo(label: string): React.ReactNode | null {
  switch (label) {
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-current text-white sm:h-[19px] sm:w-[19px]">
          <path d="M12 .5C5.65.5.5 5.65.5 12.08c0 5.14 3.34 9.48 7.97 11.02.58.11.79-.25.79-.56v-2.05c-3.25.71-3.93-1.56-3.93-1.56-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.59-.29-5.31-1.3-5.31-5.77 0-1.27.45-2.31 1.2-3.12-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.84 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.81 1.2 1.85 1.2 3.12 0 4.48-2.73 5.47-5.33 5.76.42.37.8 1.09.8 2.2v3.26c0 .31.2.68.8.56A12.08 12.08 0 0 0 23.5 12.08C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-current text-white sm:h-[19px] sm:w-[19px]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.439-.103.25-.129.599-.129.948v5.418h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.66 1.191-1.599 2.905-1.599 2.121 0 3.71 1.386 3.71 4.365v5.516zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.704 1.959-1.704 1.188 0 1.914.753 1.939 1.704 0 .946-.751 1.704-1.983 1.704zm1.581 10.019H3.656V9.807h3.262v9.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      );
    case 'LeetCode':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-[16px] w-[16px] fill-current text-white sm:h-[18px] sm:w-[18px]">
          <path d="M14.3 3.8a2.4 2.4 0 0 1 3.4 0l8.5 8.5a2.4 2.4 0 0 1 0 3.4l-8.5 8.5a2.4 2.4 0 0 1-3.4 0l-1.8-1.8a2.4 2.4 0 0 1 0-3.4l2.1-2.1-1.5-1.5-3.7 3.7c-.94.94-2.46.94-3.4 0l-1.5-1.5a2.4 2.4 0 0 1 0-3.4L8.5 11l1.5-1.5 3.7 3.7 1.5-1.5-3.7-3.7a2.4 2.4 0 0 1 0-3.4l1.5-1.5a2.4 2.4 0 0 1 3.4 0l4.2 4.2 1.8-1.8Z" />
        </svg>
      );
    case 'Vercel':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[16px] w-[16px] fill-current text-white sm:h-[18px] sm:w-[18px]">
          <path d="M12 2 2.5 19h19L12 2Z" />
        </svg>
      );
    case 'React':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[16px] w-[16px] fill-none text-white sm:h-[18px] sm:w-[18px]">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="8.2" ry="3.8" stroke="currentColor" strokeWidth="1.7" />
          <ellipse cx="12" cy="12" rx="8.2" ry="3.8" stroke="currentColor" strokeWidth="1.7" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="8.2" ry="3.8" stroke="currentColor" strokeWidth="1.7" transform="rotate(-60 12 12)" />
        </svg>
      );
    case 'Flutter': return <span className="text-[9px] font-bold tracking-[-0.08em] text-white sm:text-[10px]">F</span>;
    case 'ChatGPT': return <span className="text-[8px] font-black tracking-[-0.06em] text-white sm:text-[9px]">GPT</span>;
    case 'Gemini':  return <span className="text-[9px] font-black tracking-[-0.06em] text-white sm:text-[10px]">G</span>;
    case 'Claude':  return <span className="text-[9px] font-black tracking-[-0.06em] text-white sm:text-[10px]">C</span>;
    case 'Render':  return <span className="text-[8px] font-black tracking-[-0.06em] text-white sm:text-[9px]">R</span>;
    case 'Netlify': return <span className="text-[8px] font-black tracking-[-0.06em] text-white sm:text-[9px]">N</span>;
    default: return null;
  }
}

function renderLogoOrFallback(label: string) {
  const logo = renderBrandLogo(label);
  if (logo) return logo;
  return (
    <span className="select-none text-[8px] font-medium uppercase tracking-[0.12em] text-white sm:text-[9px]">
      {getDisplayText(label)}
    </span>
  );
}

function getHalfDims(item: AmbientItem) {
  if (item.kind === 'panel') {
    const w = item.width  ?? (item.size ? item.size * 1.5 : 150);
    const h = item.height ?? (item.size ? item.size * 0.8 : 100);
    return { hw: w / 2, hh: h / 2 };
  }
  const r = (item.size ?? 52) / 2;
  return { hw: r, hh: r };
}

// px/s — target ranges: circles 60–90, panels 45–75
const SPEED_CIRCLE_MIN = 60;
const SPEED_CIRCLE_MAX = 90;
const SPEED_PANEL_MIN  = 45;
const SPEED_PANEL_MAX  = 75;

export function DeveloperAmbientLayer({ items, className = '', floating = true }: DeveloperAmbientProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mutable physics state — lives in a ref, never triggers React re-renders
  const bodiesRef = useRef<Array<{
    x: number; y: number; vx: number; vy: number;
    hw: number; hh: number; el: HTMLDivElement | null;
  }>>([]);

  const elRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !floating) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const W = container.clientWidth  || 800;
    const H = container.clientHeight || 600;

    // Build physics bodies — done once on mount
    bodiesRef.current = items.map((item, i) => {
      const { hw, hh } = getHalfDims(item);

      // Spread starting positions across the full container so objects
      // begin in different regions and immediately travel through open space
      const spreadX = hw + 8 + ((i * 0.618) % 1) * (W - hw * 2 - 16);
      const spreadY = hh + 8 + ((i * 0.381) % 1) * (H - hh * 2 - 16);
      // Prefer the content-declared position but fall back to spread if it
      // collapses near a wall (parsed percent often returns ~0 on first render)
      const declaredX = parsePercent(item.x, W);
      const declaredY = parsePercent(item.y, H);
      const x = clamp(declaredX > 0 ? declaredX : spreadX, hw + 8, W - hw - 8);
      const y = clamp(declaredY > 0 ? declaredY : spreadY, hh + 8, H - hh - 8);

      // Golden-angle direction spread — each object starts heading a different way
      const angle = i * 2.399 + (i % 3) * 0.8;
      // Interpolate speed within the target range using the object index
      const t = items.length > 1 ? i / (items.length - 1) : 0.5;
      const isPanel = item.kind === 'panel';
      const speed = isPanel
        ? SPEED_PANEL_MIN  + t * (SPEED_PANEL_MAX  - SPEED_PANEL_MIN)  + (i % 3) * 5
        : SPEED_CIRCLE_MIN + t * (SPEED_CIRCLE_MAX - SPEED_CIRCLE_MIN) + (i % 3) * 7;

      return {
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        hw, hh,
        el: elRefs.current[i] ?? null,
      };
    });

    let frameId = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      const bodies = bodiesRef.current;
      const W2 = container.clientWidth  || W;
      const H2 = container.clientHeight || H;

      // Integrate positions + wall bounce — mutates bodiesRef in-place every frame
      for (const b of bodies) {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        if (b.x < b.hw + 8)           { b.x = b.hw + 8;        b.vx =  Math.abs(b.vx); }
        else if (b.x > W2 - b.hw - 8) { b.x = W2 - b.hw - 8;  b.vx = -Math.abs(b.vx); }
        if (b.y < b.hh + 8)           { b.y = b.hh + 8;        b.vy =  Math.abs(b.vy); }
        else if (b.y > H2 - b.hh - 8) { b.y = H2 - b.hh - 8;  b.vy = -Math.abs(b.vy); }
      }

      // Pairwise AABB collision resolution
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i];
          const b = bodies[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const ox = a.hw + b.hw - Math.abs(dx);
          const oy = a.hh + b.hh - Math.abs(dy);
          if (ox > 0 && oy > 0) {
            if (ox < oy) {
              // Resolve overlap on X axis
              const d = dx > 0 ? 1 : -1;
              a.x -= d * ox / 2;
              b.x += d * ox / 2;
              // Full elastic swap on the collision axis — makes direction change obvious
              const t = a.vx;
              a.vx = b.vx;   // no damping: preserve full speed after bounce
              b.vx = t;
              // Small perpendicular nudge so objects don't lock on the same axis
              a.vy += d * 2;
              b.vy -= d * 2;
            } else {
              // Resolve overlap on Y axis
              const d = dy > 0 ? 1 : -1;
              a.y -= d * oy / 2;
              b.y += d * oy / 2;
              const t = a.vy;
              a.vy = b.vy;
              b.vy = t;
              a.vx += d * 2;
              b.vx -= d * 2;
            }
          }
        }
      }

      // Write transforms directly to DOM — zero React re-render overhead
      for (const b of bodies) {
        if (b.el) {
          b.el.style.transform = `translate3d(${Math.round(b.x - b.hw)}px,${Math.round(b.y - b.hh)}px,0)`;
        }
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  // items is a stable imported const — floating is the real dep
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [floating]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {items.map((item, index) => {
        const isPanel = item.kind === 'panel';
        const circleSize = item.size ?? 52;
        const panelW = item.width  ?? (item.size ? item.size * 1.5 : 150);
        const panelH = item.height ?? (item.size ? item.size * 0.8 : 100);

        const style: CSSProperties = {
          position: 'absolute',
          top: 0,
          left: 0,
          width:   isPanel ? panelW : circleSize,
          height:  isPanel ? panelH : circleSize,
          opacity: item.opacity ?? 0.72,
          // Starting position — physics loop overwrites this on first frame
          transform: `translate3d(${parsePercent(item.x, 0)}px,${parsePercent(item.y, 0)}px,0)`,
          willChange: 'transform',
        };

        return (
          <div
            key={`${item.label}-${index}`}
            ref={(el) => {
              elRefs.current[index] = el;
              // Link DOM node into live physics body if already initialised
              if (bodiesRef.current[index]) bodiesRef.current[index].el = el;
            }}
            className="flex items-center justify-center"
            style={style}
          >
            {isPanel ? (
              <div className="flex h-full w-full flex-col justify-center rounded-[1.15rem] border border-slate-200 bg-white px-2 py-2 text-slate-900 shadow-[0_16px_32px_rgba(15,23,42,0.08)]">
                <div className="mb-1 flex items-center justify-between text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <span>{item.label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                </div>
                <div className="space-y-0.5 font-mono text-[8px] leading-relaxed text-slate-700">
                  {(item.lines ?? ['status: ready']).map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#020817] text-white shadow-[0_12px_26px_rgba(2,6,23,0.22)] backdrop-blur-[1px]"
                aria-hidden="true"
              >
                <div className="flex h-full w-full items-center justify-center text-white">
                  {renderLogoOrFallback(item.label)}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
