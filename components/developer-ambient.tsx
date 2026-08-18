'use client';

import type { CSSProperties } from 'react';
import type { AmbientItem } from '@/content/ambient';

type DeveloperAmbientProps = {
  items: readonly AmbientItem[];
  className?: string;
  floating?: boolean;
};

type MotionProfile = {
  duration: number;
  x: [number, number];
  y: [number, number];
  rotate: [number, number];
  delay: number;
};

const FLOAT_PROFILES: Record<NonNullable<AmbientItem['float']>, MotionProfile> = {
  terminal: { duration: 7.2, x: [-28, 24], y: [-18, 26], rotate: [-2.8, 2.8], delay: 0.4 },
  api: { duration: 6.3, x: [-24, 26], y: [-22, 18], rotate: [-2.6, 2.6], delay: 0.8 },
  database: { duration: 6.9, x: [-30, 20], y: [-24, 22], rotate: [-2.4, 2.9], delay: 1.2 },
  git: { duration: 6.8, x: [-24, 22], y: [-20, 28], rotate: [-2.8, 2.8], delay: 0.7 },
  ai: { duration: 5.8, x: [-22, 26], y: [-26, 22], rotate: [-3.2, 3.2], delay: 0.3 },
  code: { duration: 6.1, x: [-20, 28], y: [-18, 20], rotate: [-2.9, 3.1], delay: 1.1 },
  github: { duration: 5.6, x: [-22, 20], y: [-26, 20], rotate: [-2.5, 2.5], delay: 0.2 },
  leetcode: { duration: 5.9, x: [-18, 22], y: [-20, 24], rotate: [-2.4, 2.7], delay: 0.5 },
  vercel: { duration: 6.7, x: [-24, 24], y: [-26, 22], rotate: [-2.9, 2.9], delay: 0.9 },
  render: { duration: 6.4, x: [-22, 22], y: [-18, 26], rotate: [-2.7, 2.8], delay: 0.6 },
  netlify: { duration: 6.1, x: [-20, 24], y: [-22, 18], rotate: [-2.4, 2.4], delay: 0.4 },
  chatgpt: { duration: 5.4, x: [-26, 24], y: [-24, 24], rotate: [-2.9, 3.2], delay: 0.8 },
  gemini: { duration: 5.7, x: [-20, 18], y: [-20, 28], rotate: [-2.6, 2.8], delay: 1.1 },
  claude: { duration: 6.2, x: [-18, 22], y: [-22, 20], rotate: [-2.5, 2.9], delay: 0.9 },
  react: { duration: 6.5, x: [-24, 28], y: [-20, 24], rotate: [-2.8, 3.1], delay: 0.5 },
  flutter: { duration: 6.2, x: [-20, 26], y: [-18, 22], rotate: [-3.1, 3.1], delay: 0.7 },
  node: { duration: 6.4, x: [-18, 20], y: [-24, 24], rotate: [-2.2, 2.8], delay: 1.3 },
  linkedin: { duration: 5.5, x: [-18, 20], y: [-22, 18], rotate: [-2.2, 2.4], delay: 0.6 },
};

function getToneStyles(tone: AmbientItem['tone'] = 'neutral') {
  switch (tone) {
    case 'accent':
      return 'border-white/10 bg-[#0b1120]/95 text-slate-100';
    case 'brand':
      return 'border-white/10 bg-[#0f172a]/95 text-white';
    case 'light':
      return 'border-slate-200 bg-white/90 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.08)]';
    default:
      return 'border-white/10 bg-[#111827]/90 text-slate-100';
  }
}

function getDisplayText(label: string) {
  const cleaned = label.trim();

  if (cleaned === 'Node.js') return 'Node';
  if (cleaned === 'LeetCode') return 'LC';
  if (cleaned === 'ChatGPT') return 'ChatGPT';
  if (cleaned === 'Gemini') return 'Gemini';
  if (cleaned === 'Claude') return 'Claude';
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
  if (cleaned === 'Firebase') return 'Firebase';
  if (cleaned === 'Git') return 'Git';
  if (cleaned === 'database') return 'DATABASE';
  if (cleaned === 'terminal') return 'terminal';
  if (cleaned === 'API') return 'API';
  if (cleaned === 'deploy') return 'deploy';
  if (cleaned === 'code') return '{}';
  if (cleaned === 'commit') return 'commit';

  return cleaned.length > 10 ? cleaned.slice(0, 9).toUpperCase() : cleaned.toUpperCase();
}

function renderBrandLogo(label: string) {
  switch (label) {
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current text-white sm:h-[20px] sm:w-[20px]">
          <path d="M12 .5C5.65.5.5 5.65.5 12.08c0 5.14 3.34 9.48 7.97 11.02.58.11.79-.25.79-.56v-2.05c-3.25.71-3.93-1.56-3.93-1.56-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.59-.29-5.31-1.3-5.31-5.77 0-1.27.45-2.31 1.2-3.12-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.84 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.81 1.2 1.85 1.2 3.12 0 4.48-2.73 5.47-5.33 5.76.42.37.8 1.09.8 2.2v3.26c0 .31.2.68.8.56A12.08 12.08 0 0 0 23.5 12.08C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      );
    case 'LeetCode':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-[18px] w-[18px] fill-current text-white sm:h-[20px] sm:w-[20px]">
          <path d="M14.3 3.8a2.4 2.4 0 0 1 3.4 0l8.5 8.5a2.4 2.4 0 0 1 0 3.4l-8.5 8.5a2.4 2.4 0 0 1-3.4 0l-1.8-1.8a2.4 2.4 0 0 1 0-3.4l2.1-2.1-1.5-1.5-3.7 3.7c-.94.94-2.46.94-3.4 0l-1.5-1.5a2.4 2.4 0 0 1 0-3.4L8.5 11l1.5-1.5 3.7 3.7 1.5-1.5-3.7-3.7a2.4 2.4 0 0 1 0-3.4l1.5-1.5a2.4 2.4 0 0 1 3.4 0l4.2 4.2 1.8-1.8Z" />
        </svg>
      );
    case 'Vercel':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current text-white sm:h-[20px] sm:w-[20px]">
          <path d="M12 2 2.5 19h19L12 2Z" />
        </svg>
      );
    case 'React':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-none text-white sm:h-[20px] sm:w-[20px]">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="8.2" ry="3.8" stroke="currentColor" strokeWidth="1.7" />
          <ellipse cx="12" cy="12" rx="8.2" ry="3.8" stroke="currentColor" strokeWidth="1.7" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="8.2" ry="3.8" stroke="currentColor" strokeWidth="1.7" transform="rotate(-60 12 12)" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current text-white sm:h-[20px] sm:w-[20px]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.439-.103.25-.129.599-.129.948v5.418h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.66 1.191-1.599 2.905-1.599 2.121 0 3.71 1.386 3.71 4.365v5.516zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.704 1.959-1.704 1.188 0 1.914.753 1.939 1.704 0 .946-.751 1.704-1.983 1.704zm1.581 10.019H3.656V9.807h3.262v9.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      );
    default:
      return null;
  }
}

function renderLogoOrFallback(label: string) {
  const logo = renderBrandLogo(label);
  if (logo) return logo;

  return (
    <span className="select-none text-[9px] font-medium uppercase tracking-[0.12em] text-white sm:text-[10px]">
      {getDisplayText(label)}
    </span>
  );
}

function getMotionProfile(item: AmbientItem): MotionProfile | undefined {
  if (!item.float) return undefined;
  const base = FLOAT_PROFILES[item.float];
  if (!base) return undefined;

  const sizeBoost = item.size ? (item.size >= 140 ? 0.82 : item.size >= 60 ? 0.9 : 1) : 1;
  const subtleDepth = item.kind === 'panel' ? 1.1 : 1;

  return {
    duration: Number((base.duration * sizeBoost * subtleDepth).toFixed(1)),
    x: [Number((base.x[0] * sizeBoost).toFixed(1)), Number((base.x[1] * sizeBoost).toFixed(1))],
    y: [Number((base.y[0] * sizeBoost).toFixed(1)), Number((base.y[1] * sizeBoost).toFixed(1))],
    rotate: [Number((base.rotate[0] * subtleDepth).toFixed(1)), Number((base.rotate[1] * subtleDepth).toFixed(1))],
    delay: base.delay,
  };
}

export function DeveloperAmbientLayer({ items, className = '', floating = true }: DeveloperAmbientProps) {
  return (
    <>
      <style jsx>{`
        @keyframes ambientDrift {
          0% { transform: translate(-50%, -50%) translate3d(var(--ambient-x-1), var(--ambient-y-1), 0) rotate(var(--ambient-r-1)); }
          28% { transform: translate(-50%, -50%) translate3d(var(--ambient-x-2), var(--ambient-y-2), 0) rotate(var(--ambient-r-2)); }
          56% { transform: translate(-50%, -50%) translate3d(var(--ambient-x-3), var(--ambient-y-3), 0) rotate(var(--ambient-r-3)); }
          100% { transform: translate(-50%, -50%) translate3d(var(--ambient-x-1), var(--ambient-y-1), 0) rotate(var(--ambient-r-1)); }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-ambient-float='true'] {
            animation: none !important;
          }
        }
      `}</style>

      <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
        {items.map((item) => {
          const isPanel = item.kind === 'panel';
          const circleSize = item.size ?? 52;
          const panelWidth = item.width ?? (item.size ? item.size * 1.5 : 150);
          const panelHeight = item.height ?? (item.size ? item.size * 0.8 : 100);
          const motion = floating ? getMotionProfile(item) : undefined;

          const motionStyle = motion
            ? ({
                ['--ambient-x-1' as string]: `${motion.x[0]}px`,
                ['--ambient-y-1' as string]: `${motion.y[0]}px`,
                ['--ambient-r-1' as string]: `${motion.rotate[0]}deg`,
                ['--ambient-x-2' as string]: `${motion.x[1]}px`,
                ['--ambient-y-2' as string]: `${motion.y[1]}px`,
                ['--ambient-r-2' as string]: `${motion.rotate[1]}deg`,
                ['--ambient-x-3' as string]: `${((motion.x[0] + motion.x[1]) * 0.45).toFixed(1)}px`,
                ['--ambient-y-3' as string]: `${((motion.y[0] + motion.y[1]) * 0.48).toFixed(1)}px`,
                ['--ambient-r-3' as string]: `${((motion.rotate[0] + motion.rotate[1]) * 0.55).toFixed(1)}deg`,
              } as CSSProperties)
            : undefined;

          return (
            <div
              key={`${item.label}-${item.x}-${item.y}`}
              className="absolute flex items-center justify-center"
              data-ambient-float={Boolean(motion)}
              style={{
                left: item.x,
                top: item.y,
                width: isPanel ? panelWidth : circleSize,
                height: isPanel ? panelHeight : circleSize,
                opacity: item.opacity ?? 0.72,
                animation: motion ? `ambientDrift ${motion.duration}s ease-in-out ${motion.delay}s infinite` : undefined,
                transform: 'translate(-50%, -50%)',
                willChange: 'transform',
                ...motionStyle,
              }}
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
    </>
  );
}
