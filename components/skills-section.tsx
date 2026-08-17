'use client';

import { useState } from 'react';
import { skillGroups, skillUsage } from '@/content/skills';
import { DeveloperAmbientLayer } from '@/components/developer-ambient';
import { ambientSections } from '@/content/ambient';

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState('React');

  return (
    <section id="stack" className="relative py-20 sm:py-24">
      <DeveloperAmbientLayer items={ambientSections.stack} className="h-full" />
      <div className="container-shell relative z-10">
        <div className="mb-10">
          <p className="eyebrow mb-3">TECHNOLOGY STACK</p>
          <h2 className="section-heading">Core tools across product, AI, and mobile work.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="card-surface p-5">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => setActiveSkill(item)}
                        className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
                          activeSkill === item
                            ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card-surface p-6">
            <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">USED IN</div>
            <h3 className="mb-4 text-2xl font-semibold tracking-[-0.05em] text-slate-900">{activeSkill}</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {(skillUsage[activeSkill] ?? ['Verified project usage available in this portfolio']).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
