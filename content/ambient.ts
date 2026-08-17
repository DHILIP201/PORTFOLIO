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
    | 'node';
};

export const ambientSections = {
  hero: [
    { label: 'GitHub', x: '10%', y: '30%', size: 50, opacity: 0.82, kind: 'logo', tone: 'brand', float: 'github' },
    { label: 'LeetCode', x: '88%', y: '18%', size: 46, opacity: 0.76, kind: 'logo', tone: 'accent', float: 'leetcode' },
    { label: 'Vercel', x: '84%', y: '38%', size: 48, opacity: 0.74, kind: 'logo', tone: 'neutral', float: 'vercel' },
    { label: 'Render', x: '14%', y: '66%', size: 44, opacity: 0.72, kind: 'logo', tone: 'accent', float: 'render' },
    { label: 'Netlify', x: '18%', y: '18%', size: 42, opacity: 0.7, kind: 'logo', tone: 'neutral', float: 'netlify' },
    { label: 'ChatGPT', x: '77%', y: '68%', size: 46, opacity: 0.72, kind: 'logo', tone: 'brand', float: 'chatgpt' },
    { label: 'Gemini', x: '60%', y: '78%', size: 40, opacity: 0.68, kind: 'logo', tone: 'accent', float: 'gemini' },
    { label: 'Claude', x: '28%', y: '80%', size: 40, opacity: 0.68, kind: 'logo', tone: 'neutral', float: 'claude' },
    { label: 'React', x: '8%', y: '78%', size: 48, opacity: 0.72, kind: 'logo', tone: 'accent', float: 'react' },
    { label: 'Flutter', x: '86%', y: '80%', size: 46, opacity: 0.7, kind: 'logo', tone: 'brand', float: 'flutter' },
    { label: 'Node.js', x: '64%', y: '18%', size: 44, opacity: 0.7, kind: 'logo', tone: 'neutral', float: 'node' },
    { label: 'terminal', x: '22%', y: '68%', width: 150, height: 92, opacity: 0.9, kind: 'panel', lines: ['TERMINAL', '$ npm run dev', '✓ compiled', '✓ server ready'], tone: 'light', float: 'terminal' },
    { label: 'API', x: '78%', y: '30%', width: 150, height: 90, opacity: 0.9, kind: 'panel', lines: ['API', 'GET /api/system', '200 OK', 'status: active'], tone: 'light', float: 'api' },
    { label: 'database', x: '82%', y: '78%', width: 150, height: 90, opacity: 0.88, kind: 'panel', lines: ['DATABASE // SQL', 'PostgreSQL', 'connected'], tone: 'light', float: 'database' },
    { label: 'commit', x: '58%', y: '80%', width: 140, height: 82, opacity: 0.84, kind: 'panel', lines: ['COMMIT 8F31C2', 'feat: realtime', 'event pipeline'], tone: 'light', float: 'git' },
    { label: 'AI', x: '52%', y: '22%', width: 150, height: 82, opacity: 0.82, kind: 'panel', lines: ['AI INFERENCE', 'model: system', 'pipeline: retrieval'], tone: 'light', float: 'ai' },
    { label: 'code', x: '34%', y: '18%', width: 150, height: 82, opacity: 0.82, kind: 'panel', lines: ['REACT / TS', '<App state="active" />'], tone: 'light', float: 'code' },
  ],
  work: [
    { label: 'GitHub', x: '10%', y: '18%', size: 62, opacity: 0.84, kind: 'logo', tone: 'brand' },
    { label: 'Vercel', x: '84%', y: '18%', size: 60, opacity: 0.8, kind: 'logo', tone: 'neutral' },
    { label: 'Render', x: '80%', y: '72%', size: 58, opacity: 0.78, kind: 'logo', tone: 'accent' },
    { label: 'React', x: '18%', y: '72%', size: 62, opacity: 0.8, kind: 'logo', tone: 'neutral' },
    { label: 'database', x: '24%', y: '58%', size: 170, opacity: 0.72, kind: 'panel', lines: ['DATABASE // SQL', 'PostgreSQL', 'connected'], tone: 'neutral' },
    { label: 'deploy', x: '76%', y: '54%', size: 170, opacity: 0.74, kind: 'panel', lines: ['DEPLOY // EDGE', 'build: verified', 'status: live'], tone: 'brand' },
    { label: 'API', x: '63%', y: '30%', size: 155, opacity: 0.68, kind: 'panel', lines: ['POST /events', '202 accepted', 'queue: live'], tone: 'accent' },
  ],
  engineering: [
    { label: 'terminal', x: '12%', y: '18%', size: 170, opacity: 0.76, kind: 'panel', lines: ['┌─ build', '│ npm run build', '│ ✓ success', '└─ output'], tone: 'neutral' },
    { label: 'Git', x: '84%', y: '18%', size: 58, opacity: 0.8, kind: 'logo', tone: 'brand' },
    { label: 'code', x: '80%', y: '72%', size: 64, opacity: 0.8, kind: 'glyph', tone: 'accent' },
    { label: 'Node.js', x: '20%', y: '74%', size: 58, opacity: 0.78, kind: 'logo', tone: 'accent' },
    { label: 'commit', x: '56%', y: '72%', size: 155, opacity: 0.72, kind: 'panel', lines: ['commit 8f31c2', 'feat: realtime event', 'pipeline'], tone: 'neutral' },
    { label: 'API', x: '38%', y: '42%', size: 150, opacity: 0.7, kind: 'panel', lines: ['POST /v1/ingest', 'accepted', 'latency: 42ms'], tone: 'accent' },
  ],
  experience: [
    { label: 'GitHub', x: '12%', y: '18%', size: 64, opacity: 0.82, kind: 'logo', tone: 'brand' },
    { label: 'Flutter', x: '82%', y: '18%', size: 62, opacity: 0.8, kind: 'logo', tone: 'accent' },
    { label: 'Node.js', x: '20%', y: '74%', size: 58, opacity: 0.78, kind: 'logo', tone: 'neutral' },
    { label: 'deploy', x: '80%', y: '74%', size: 165, opacity: 0.72, kind: 'panel', lines: ['release pipeline', 'build: ok', 'prod: synced'], tone: 'brand' },
    { label: 'Git', x: '52%', y: '38%', size: 52, opacity: 0.7, kind: 'logo', tone: 'neutral' },
    { label: 'commit', x: '58%', y: '78%', size: 150, opacity: 0.68, kind: 'panel', lines: ['branch: main', 'commit: 94adf1', 'merged: review'], tone: 'neutral' },
  ],
  stack: [
    { label: 'React', x: '12%', y: '18%', size: 68, opacity: 0.86, kind: 'logo', tone: 'accent' },
    { label: 'Flutter', x: '84%', y: '18%', size: 64, opacity: 0.84, kind: 'logo', tone: 'brand' },
    { label: 'TypeScript', x: '20%', y: '74%', size: 58, opacity: 0.78, kind: 'logo', tone: 'neutral' },
    { label: 'MongoDB', x: '82%', y: '74%', size: 56, opacity: 0.8, kind: 'logo', tone: 'neutral' },
    { label: 'code', x: '48%', y: '42%', size: 62, opacity: 0.78, kind: 'glyph', tone: 'accent' },
    { label: 'JavaScript', x: '56%', y: '78%', size: 52, opacity: 0.7, kind: 'logo', tone: 'neutral' },
  ],
  education: [
    { label: 'code', x: '18%', y: '18%', size: 62, opacity: 0.76, kind: 'glyph', tone: 'accent' },
    { label: 'Python', x: '82%', y: '18%', size: 54, opacity: 0.74, kind: 'logo', tone: 'neutral' },
    { label: 'database', x: '20%', y: '72%', size: 152, opacity: 0.7, kind: 'panel', lines: ['DATA MODEL', 'schema: v2', 'indexed'], tone: 'neutral' },
    { label: 'terminal', x: '74%', y: '72%', size: 160, opacity: 0.7, kind: 'panel', lines: ['$ python app.py', '✓ model ready', '✓ dataset loaded'], tone: 'brand' },
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
    { label: 'GitHub', x: '18%', y: '34%', size: 42, opacity: 0.64, kind: 'logo', tone: 'brand' },
    { label: 'code', x: '80%', y: '34%', size: 52, opacity: 0.7, kind: 'glyph', tone: 'accent' },
    { label: 'terminal', x: '52%', y: '66%', size: 150, opacity: 0.7, kind: 'panel', lines: ['cursor: ready', 'status: open', 'hello@domain'], tone: 'neutral' },
  ],
} as const;
