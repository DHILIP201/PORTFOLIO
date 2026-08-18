'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { AmbientItem } from '@/content/ambient';

type DeveloperAmbientProps = {
  items: readonly AmbientItem[];
  className?: string;
  floating?: boolean;
};

type AnimatedState = {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function parsePercent(value: string | number, total: number) {
  const raw = typeof value === 'number' ? value : Number.parseFloat(value);
  if (Number.isNaN(raw)) return total * 0.5;
  return (raw / 100) * total;
}

function getDisplayText(label: string) {
  const cleaned = label.trim();

  if (cleaned === 'Node.js') return 'Node';
  if (cleaned === 'LeetCode') return 'LC';
  if (cleaned === 'ChatGPT') return 'GPT';
  if (cleaned === 'Gemini') return 'G';
  if (cleaned === 'Claude') return 'C';
  if (cleaned === 'GitHub') return 'GitHub';
  if (cleaned === 'LinkedIn') return 'in';
  if (cleaned === 'Vercel') return 'Vercel';
  if (cleaned === 'Render') return 'Render';
  if (cleaned === 'Netlify') return 'Netlify';
  if (cleaned === 'React') return 'React';
  if (cleaned === 'Flutter') return 'Flutter';
  if (cleaned === 'TypeScript') return 'TS';
  if (cleaned === 'JavaScript') return 'JS';
  if (cleaned === 'Python') return 'Py';
  if (cleaned === 'MongoDB') return 'Mongo';
  if (cleaned === 'Git') return 'Git';
  if (cleaned === 'database') return 'DATABASE';
  if (cleaned === 'terminal') return 'terminal';
  if (cleaned === 'API') return 'API';
  if (cleaned === 'deploy') return 'deploy';
  if (cleaned === 'code') return '{}';
  if (cleaned === 'commit') return 'commit';

  return cleaned.length > 10 ? cleaned.slice(0, 8).toUpperCase() : cleaned.toUpperCase();
}

function renderBrandLogo(label: string) {
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
    case 'Flutter':
      return <span className="text-[9px] font-bold tracking-[-0.08em] text-white sm:text-[10px]">F</span>;
    case 'ChatGPT':
      return <span className="text-[8px] font-black tracking-[-0.06em] text-white sm:text-[9px]">GPT</span>;
    case 'Gemini':
      return <span className="text-[9px] font-black tracking-[-0.06em] text-white sm:text-[10px]">G</span>;
    case 'Claude':
      return <span className="text-[9px] font-black tracking-[-0.06em] text-white sm:text-[10px]">C</span>;
    case 'Render':
      return <span className="text-[8px] font-black tracking-[-0.06em] text-white sm:text-[9px]">R</span>;
    case 'Netlify':
      return <span className="text-[8px] font-black tracking-[-0.06em] text-white sm:text-[9px]">N</span>;
    default:
      return null;
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

function getRadius(item: AmbientItem) {
  if (item.kind === 'panel') {
    const width = item.width ?? item.size ?? 160;
    const height = item.height ?? item.size ?? 88;
    return Math.max(width, height) * 0.42;
  }

  return (item.size ?? 52) / 2 + 12;
}

export function DeveloperAmbientLayer({ items, className = '', floating = true }: DeveloperAmbientProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<AnimatedState[]>([]);

  useEffect(() => {
    if (!floating) {
      setPositions(items.map((item, index) => ({
        id: `${item.label}-${index}`,
        x: parsePercent(item.x, 0),
        y: parsePercent(item.y, 0),
        vx: 0,
        vy: 0,
        radius: getRadius(item),
      })));
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setPositions(items.map((item, index) => ({
        id: `${item.label}-${index}`,
        x: parsePercent(item.x, container.clientWidth),
        y: parsePercent(item.y, container.clientHeight),
        vx: 0,
        vy: 0,
        radius: getRadius(item),
      })));
      return;
    }

    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    const state: AnimatedState[] = items.map((item, index) => {
      const radius = getRadius(item);
      const offsetX = parsePercent(item.x, width);
      const offsetY = parsePercent(item.y, height);
      const baseSpeed = 32 + (index % 4) * 8 + (radius > 90 ? 10 : 0);
      const direction = index % 2 === 0 ? 1 : -1;

      return {
        id: `${item.label}-${index}`,
        x: clamp(offsetX, radius + 10, width - radius - 10),
        y: clamp(offsetY, radius + 10, height - radius - 10),
        vx: ((Math.random() * 1.2 + 0.8) * baseSpeed * direction) / 60,
        vy: ((Math.random() * 1.1 + 0.8) * baseSpeed * (index % 3 === 0 ? -1 : 1)) / 60,
        radius,
      };
    });

    let frameId = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.032);
      lastTime = time;
      const next = state.map((item) => ({ ...item }));

      for (let i = 0; i < next.length; i += 1) {
        const current = next[i];
        current.x += current.vx * 60 * dt;
        current.y += current.vy * 60 * dt;

        const minX = current.radius + 12;
        const maxX = width - current.radius - 12;
        const minY = current.radius + 12;
        const maxY = height - current.radius - 12;

        if (current.x < minX) {
          current.x = minX;
          current.vx = Math.abs(current.vx) * 0.96;
        } else if (current.x > maxX) {
          current.x = maxX;
          current.vx = -Math.abs(current.vx) * 0.96;
        }

        if (current.y < minY) {
          current.y = minY;
          current.vy = Math.abs(current.vy) * 0.96;
        } else if (current.y > maxY) {
          current.y = maxY;
          current.vy = -Math.abs(current.vy) * 0.96;
        }
      }

      for (let i = 0; i < next.length; i += 1) {
        for (let j = i + 1; j < next.length; j += 1) {
          const a = next[i];
          const b = next[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy) || 0.0001;
          const minDistance = a.radius + b.radius + 4;

          if (distance < minDistance) {
            const normalX = dx / distance;
            const normalY = dy / distance;
            const overlap = (minDistance - distance) / 2;

            a.x -= normalX * overlap;
            a.y -= normalY * overlap;
            b.x += normalX * overlap;
            b.y += normalY * overlap;

            const relativeVelocityX = b.vx - a.vx;
            const relativeVelocityY = b.vy - a.vy;
            const velocityAlongNormal = relativeVelocityX * normalX + relativeVelocityY * normalY;

            if (velocityAlongNormal < 0) {
              const restitution = 0.9;
              const impulse = (-(1 + restitution) * velocityAlongNormal) / 2;
              a.vx -= impulse * normalX;
              a.vy -= impulse * normalY;
              b.vx += impulse * normalX;
              b.vy += impulse * normalY;
            }
          }
        }
      }

      setPositions(next);
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [floating, items]);

  return (
    <div ref={containerRef} className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      {items.map((item, index) => {
        const isPanel = item.kind === 'panel';
        const circleSize = item.size ?? 52;
        const panelWidth = item.width ?? (item.size ? item.size * 1.5 : 150);
        const panelHeight = item.height ?? (item.size ? item.size * 0.8 : 100);
        const pos = positions[index] ?? { x: parsePercent(item.x, 0), y: parsePercent(item.y, 0) };
        const style: CSSProperties = {
          left: '50%',
          top: '50%',
          width: isPanel ? panelWidth : circleSize,
          height: isPanel ? panelHeight : circleSize,
          opacity: item.opacity ?? 0.72,
          transform: `translate(-50%, -50%) translate3d(${pos.x}px, ${pos.y}px, 0)`,
          willChange: 'transform',
        };

        return (
          <div
            key={`${item.label}-${index}`}
            className="absolute flex items-center justify-center"
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
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#020817] text-white shadow-[0_12px_26px_rgba(2,6,23,0.22)] backdrop-blur-[1px]" aria-hidden="true">
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
