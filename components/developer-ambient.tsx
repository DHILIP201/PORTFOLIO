'use client';

import type { AmbientItem } from '@/content/ambient';

type DeveloperAmbientProps = {
  items: readonly AmbientItem[];
  className?: string;
  floating?: boolean;
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
  if (cleaned === 'LinkedIn') return 'in';
  if (cleaned === 'LeetCode') return 'LC';
  if (cleaned === 'ChatGPT') return 'ChatGPT';
  if (cleaned === 'Gemini') return 'Gemini';
  if (cleaned === 'Claude') return 'Claude';
  if (cleaned === 'GitHub') return 'GitHub';
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

function getFloatAnimation(type?: AmbientItem['float']) {
  switch (type) {
    case 'terminal':
      return 'ambientFloatTerminal';
    case 'api':
      return 'ambientFloatApi';
    case 'database':
      return 'ambientFloatDatabase';
    case 'git':
      return 'ambientFloatGit';
    case 'ai':
      return 'ambientFloatAi';
    case 'code':
      return 'ambientFloatCode';
    case 'github':
      return 'ambientFloatGithub';
    case 'leetcode':
      return 'ambientFloatLeetCode';
    case 'vercel':
      return 'ambientFloatVercel';
    case 'render':
      return 'ambientFloatRender';
    case 'netlify':
      return 'ambientFloatNetlify';
    case 'chatgpt':
      return 'ambientFloatChatgpt';
    case 'gemini':
      return 'ambientFloatGemini';
    case 'claude':
      return 'ambientFloatClaude';
    case 'react':
      return 'ambientFloatReact';
    case 'flutter':
      return 'ambientFloatFlutter';
    case 'node':
      return 'ambientFloatNode';
    default:
      return undefined;
  }
}

function getFloatDuration(type?: AmbientItem['float']) {
  switch (type) {
    case 'github':
      return 16;
    case 'leetcode':
      return 15;
    case 'vercel':
      return 18;
    case 'render':
      return 13;
    case 'netlify':
      return 17;
    case 'chatgpt':
      return 14;
    case 'gemini':
      return 15;
    case 'claude':
      return 13;
    case 'react':
      return 16;
    case 'flutter':
      return 14;
    case 'node':
      return 15;
    case 'terminal':
      return 15;
    case 'api':
      return 17;
    case 'database':
      return 16;
    case 'git':
      return 14;
    case 'ai':
      return 18;
    case 'code':
      return 16;
    default:
      return 14;
  }
}

export function DeveloperAmbientLayer({ items, className = '', floating = false }: DeveloperAmbientProps) {
  return (
    <>
      <style jsx>{`
        @keyframes ambientFloatTerminal {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(12px, -10px, 0) rotate(1deg); }
          100% { transform: translate(-50%, -50%) translate3d(-10px, 10px, 0) rotate(-1deg); }
        }
        @keyframes ambientFloatApi {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(0, -8px, 0) rotate(0.5deg); }
          100% { transform: translate(-50%, -50%) translate3d(0, 10px, 0) rotate(-0.5deg); }
        }
        @keyframes ambientFloatDatabase {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(-12px, 0, 0) rotate(-1deg); }
          100% { transform: translate(-50%, -50%) translate3d(10px, 0, 0) rotate(1deg); }
        }
        @keyframes ambientFloatGit {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(8px, -8px, 0) rotate(1deg); }
          100% { transform: translate(-50%, -50%) translate3d(-8px, 8px, 0) rotate(-1deg); }
        }
        @keyframes ambientFloatAi {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(10px, -8px, 0) rotate(1.5deg); }
          100% { transform: translate(-50%, -50%) translate3d(-8px, 10px, 0) rotate(-1.5deg); }
        }
        @keyframes ambientFloatCode {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(0, -6px, 0) rotate(0.75deg); }
          100% { transform: translate(-50%, -50%) translate3d(0, 8px, 0) rotate(-0.75deg); }
        }
        @keyframes ambientFloatGithub {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(12px, -10px, 0) rotate(1.5deg); }
          100% { transform: translate(-50%, -50%) translate3d(-10px, 8px, 0) rotate(-1deg); }
        }
        @keyframes ambientFloatLeetCode {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(0, -12px, 0) rotate(0.75deg); }
          100% { transform: translate(-50%, -50%) translate3d(0, 10px, 0) rotate(-0.75deg); }
        }
        @keyframes ambientFloatVercel {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(-10px, -8px, 0) rotate(-1deg); }
          100% { transform: translate(-50%, -50%) translate3d(12px, 8px, 0) rotate(1deg); }
        }
        @keyframes ambientFloatRender {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(8px, -8px, 0) rotate(1.2deg); }
          100% { transform: translate(-50%, -50%) translate3d(-8px, 8px, 0) rotate(-1deg); }
        }
        @keyframes ambientFloatNetlify {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(-12px, 0, 0) rotate(-0.75deg); }
          100% { transform: translate(-50%, -50%) translate3d(8px, 0, 0) rotate(0.75deg); }
        }
        @keyframes ambientFloatChatgpt {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(10px, -10px, 0) rotate(1.5deg); }
          100% { transform: translate(-50%, -50%) translate3d(-8px, 8px, 0) rotate(-1.25deg); }
        }
        @keyframes ambientFloatGemini {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(0, -10px, 0) rotate(0.75deg); }
          100% { transform: translate(-50%, -50%) translate3d(0, 12px, 0) rotate(-0.75deg); }
        }
        @keyframes ambientFloatClaude {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(8px, -8px, 0) rotate(1.1deg); }
          100% { transform: translate(-50%, -50%) translate3d(-10px, 10px, 0) rotate(-1deg); }
        }
        @keyframes ambientFloatReact {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(-8px, 0, 0) rotate(-0.75deg); }
          100% { transform: translate(-50%, -50%) translate3d(10px, 0, 0) rotate(0.75deg); }
        }
        @keyframes ambientFloatFlutter {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(10px, -8px, 0) rotate(1.25deg); }
          100% { transform: translate(-50%, -50%) translate3d(-8px, 8px, 0) rotate(-1.25deg); }
        }
        @keyframes ambientFloatNode {
          0% { transform: translate(-50%, -50%) translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate3d(0, -10px, 0) rotate(0.8deg); }
          100% { transform: translate(-50%, -50%) translate3d(0, 12px, 0) rotate(-0.8deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-ambient-float='true'] {
            animation: none !important;
          }
        }
      `}</style>
      <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
        {items.map((item) => {
          const isLogo = item.kind === 'logo';
          const isPanel = item.kind === 'panel';
          const isGlyph = item.kind === 'glyph';
          const circleSize = item.size ?? 52;
          const panelWidth = item.width ?? (item.size ? item.size * 1.5 : 150);
          const panelHeight = item.height ?? (item.size ? item.size * 0.8 : 100);
          const animationName = floating ? getFloatAnimation(item.float) : undefined;
          const animationDuration = floating ? getFloatDuration(item.float) : 14;

          return (
            <div
              key={`${item.label}-${item.x}-${item.y}`}
              className="absolute flex items-center justify-center"
              data-ambient-float={Boolean(animationName)}
              style={{
                left: item.x,
                top: item.y,
                width: isPanel ? panelWidth : circleSize,
                height: isPanel ? panelHeight : circleSize,
                opacity: item.opacity ?? 0.72,
                animation: animationName ? `${animationName} ${animationDuration}s ease-in-out infinite alternate` : undefined,
                willChange: 'transform',
              }}
            >
              {isPanel ? (
                <div
                  className={`flex h-full w-full flex-col justify-center rounded-[1.25rem] border px-2.5 py-2 shadow-[0_18px_38px_rgba(15,23,42,0.08)] ${getToneStyles(item.tone)}`}
                >
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
                  className={[
                    'flex h-full w-full items-center justify-center overflow-hidden rounded-full border shadow-[0_18px_38px_rgba(15,23,42,0.14)] backdrop-blur-[1px]',
                    isGlyph ? 'bg-[#0f172a]/90 text-slate-100' : getToneStyles(item.tone),
                    'border-white/10',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'select-none text-center font-semibold tracking-[0.08em]',
                      isGlyph ? 'text-[8px] uppercase' : 'text-[9px] sm:text-[10px]',
                    ].join(' ')}
                    style={{
                      letterSpacing: isLogo ? '0.06em' : '0.12em',
                    }}
                  >
                    {getDisplayText(item.label)}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
