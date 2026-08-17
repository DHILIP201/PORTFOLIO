export type AmbientItem = {
  label: string;
  x: string;
  y: string;
  size?: number;
  width?: number;
  height?: number;
  opacity?: number;
  kind?: 'logo' | 'panel' | 'glyph';
  lines?: readonly string[];
  tone?: 'neutral' | 'accent' | 'brand' | 'light';
  float?:
    | 'terminal'
    | 'api'
    | 'database'
    | 'git'
    | 'ai'
    | 'code'
    | 'github'
    | 'leetcode'
    | 'vercel'
    | 'render'
    | 'netlify'
    | 'chatgpt'
    | 'gemini'
    | 'claude'
    | 'react'
    | 'flutter'
    | 'node'
    | 'linkedin';
};

export const ambientSections = {
  hero: [
    { label: 'GitHub', x: '74%', y: '18%', size: 42, opacity: 0.9, kind: 'logo', tone: 'brand', float: 'github' },
    { label: 'LeetCode', x: '18%', y: '18%', size: 40, opacity: 0.85, kind: 'logo', tone: 'brand', float: 'leetcode' },
    { label: 'Vercel', x: '82%', y: '74%', size: 40, opacity: 0.82, kind: 'logo', tone: 'brand', float: 'vercel' },
    { label: 'React', x: '12%', y: '74%', size: 40, opacity: 0.8, kind: 'logo', tone: 'brand', float: 'react' },
    { label: 'terminal', x: '22%', y: '62%', width: 120, height: 72, opacity: 0.96, kind: 'panel', lines: ['TERMINAL', '$ dev', '✓ ready'], tone: 'light', float: 'terminal' },
    { label: 'API', x: '72%', y: '58%', width: 120, height: 72, opacity: 0.96, kind: 'panel', lines: ['API', 'GET /v1', '200 OK'], tone: 'light', float: 'api' },
  ],
  work: [
    { label: 'GitHub', x: '12%', y: '16%', size: 54, opacity: 0.8, kind: 'logo', tone: 'brand' },
    { label: 'Vercel', x: '84%', y: '16%', size: 52, opacity: 0.75, kind: 'logo', tone: 'brand' },
    { label: 'Render', x: '84%', y: '74%', size: 50, opacity: 0.7, kind: 'logo', tone: 'brand' },
    { label: 'React', x: '12%', y: '74%', size: 54, opacity: 0.72, kind: 'logo', tone: 'brand' },
    { label: 'database', x: '24%', y: '58%', size: 170, opacity: 0.72, kind: 'panel', lines: ['DATABASE // SQL', 'PostgreSQL', 'connected'], tone: 'light' },
    { label: 'deploy', x: '76%', y: '56%', size: 170, opacity: 0.74, kind: 'panel', lines: ['DEPLOY // EDGE', 'build: verified', 'status: live'], tone: 'light' },
    { label: 'API', x: '62%', y: '32%', size: 155, opacity: 0.68, kind: 'panel', lines: ['POST /events', '202 accepted', 'queue: live'], tone: 'light' },
  ],
  engineering: [
    { label: 'terminal', x: '10%', y: '16%', size: 170, opacity: 0.74, kind: 'panel', lines: ['┌─ build', '│ npm run build', '│ ✓ success', '└─ output'], tone: 'light' },
    { label: 'Git', x: '85%', y: '16%', size: 52, opacity: 0.8, kind: 'logo', tone: 'brand' },
    { label: 'code', x: '82%', y: '76%', size: 58, opacity: 0.8, kind: 'glyph', tone: 'accent' },
    { label: 'Node.js', x: '18%', y: '76%', size: 52, opacity: 0.72, kind: 'logo', tone: 'brand' },
    { label: 'commit', x: '56%', y: '74%', size: 155, opacity: 0.72, kind: 'panel', lines: ['commit 8f31c2', 'feat: realtime event', 'pipeline'], tone: 'light' },
    { label: 'API', x: '38%', y: '40%', size: 150, opacity: 0.7, kind: 'panel', lines: ['POST /v1/ingest', 'accepted', 'latency: 42ms'], tone: 'light' },
  ],
  experience: [
    { label: 'GitHub', x: '12%', y: '16%', size: 56, opacity: 0.8, kind: 'logo', tone: 'brand' },
    { label: 'Flutter', x: '84%', y: '16%', size: 54, opacity: 0.8, kind: 'logo', tone: 'brand' },
    { label: 'Node.js', x: '18%', y: '76%', size: 52, opacity: 0.75, kind: 'logo', tone: 'brand' },
    { label: 'deploy', x: '82%', y: '76%', size: 160, opacity: 0.72, kind: 'panel', lines: ['release pipeline', 'build: ok', 'prod: synced'], tone: 'light' },
    { label: 'Git', x: '52%', y: '36%', size: 48, opacity: 0.7, kind: 'logo', tone: 'brand' },
    { label: 'commit', x: '58%', y: '78%', size: 150, opacity: 0.68, kind: 'panel', lines: ['branch: main', 'commit: 94adf1', 'merged: review'], tone: 'light' },
  ],
  stack: [
    { label: 'React', x: '12%', y: '18%', size: 58, opacity: 0.82, kind: 'logo', tone: 'brand' },
    { label: 'Flutter', x: '84%', y: '18%', size: 56, opacity: 0.8, kind: 'logo', tone: 'brand' },
    { label: 'TypeScript', x: '18%', y: '76%', size: 52, opacity: 0.72, kind: 'logo', tone: 'brand' },
    { label: 'MongoDB', x: '82%', y: '76%', size: 52, opacity: 0.7, kind: 'logo', tone: 'brand' },
    { label: 'code', x: '48%', y: '42%', size: 58, opacity: 0.78, kind: 'glyph', tone: 'accent' },
    { label: 'JavaScript', x: '56%', y: '78%', size: 48, opacity: 0.7, kind: 'logo', tone: 'brand' },
  ],
  education: [
    { label: 'code', x: '16%', y: '18%', size: 58, opacity: 0.76, kind: 'glyph', tone: 'accent' },
    { label: 'Python', x: '84%', y: '18%', size: 50, opacity: 0.74, kind: 'logo', tone: 'brand' },
    { label: 'database', x: '18%', y: '74%', size: 152, opacity: 0.7, kind: 'panel', lines: ['DATA MODEL', 'schema: v2', 'indexed'], tone: 'light' },
    { label: 'terminal', x: '74%', y: '74%', size: 160, opacity: 0.7, kind: 'panel', lines: ['$ python app.py', '✓ model ready', '✓ dataset loaded'], tone: 'light' },
  ],
  achievements: [
    { label: 'GitHub', x: '12%', y: '18%', size: 64, opacity: 0.82, kind: 'logo', tone: 'brand' },
    { label: 'LeetCode', x: '84%', y: '18%', size: 58, opacity: 0.8, kind: 'logo', tone: 'accent' },
    { label: 'commit', x: '18%', y: '72%', size: 150, opacity: 0.7, kind: 'panel', lines: ['commit 8f31c2', 'feat: quality', 'ship'], tone: 'neutral' },
    { label: 'deploy', x: '80%', y: '74%', size: 165, opacity: 0.72, kind: 'panel', lines: ['project node', 'status: shipped', 'verified'], tone: 'brand' },
    { label: 'Git', x: '50%', y: '46%', size: 52, opacity: 0.76, kind: 'logo', tone: 'neutral' },
  ],
  resume: [
    { label: 'code', x: '16%', y: '18%', size: 56, opacity: 0.72, kind: 'glyph', tone: 'neutral' },
    { label: 'GitHub', x: '82%', y: '18%', size: 58, opacity: 0.78, kind: 'logo', tone: 'brand' },
    { label: 'terminal', x: '18%', y: '72%', size: 150, opacity: 0.7, kind: 'panel', lines: ['resume export', 'pdf: ready', 'version 3.0'], tone: 'neutral' },
    { label: 'API', x: '78%', y: '74%', size: 150, opacity: 0.7, kind: 'panel', lines: ['doc // review', 'status: clear', 'updated'], tone: 'accent' },
  ],
  contact: [
    { label: 'GitHub', x: '18%', y: '34%', size: 42, opacity: 0.64, kind: 'logo', tone: 'brand', float: 'github' },
    { label: 'LinkedIn', x: '80%', y: '34%', size: 42, opacity: 0.64, kind: 'logo', tone: 'brand', float: 'linkedin' },
    { label: 'terminal', x: '52%', y: '66%', size: 150, opacity: 0.7, kind: 'panel', lines: ['cursor: ready', 'status: open', 'hello@domain'], tone: 'neutral' },
  ],
} as const;
