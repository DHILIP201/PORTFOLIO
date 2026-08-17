import { ArrowRight, Download, GitBranch, Link2 } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { DeveloperAmbientLayer } from '@/components/developer-ambient';
import { ambientSections } from '@/content/ambient';

export function Hero() {
  return (
    <section className="container-shell relative pb-6 pt-10 md:pt-14 lg:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.12),transparent_58%)]" aria-hidden="true" />
      <DeveloperAmbientLayer items={ambientSections.hero} className="h-[420px]" floating />

      <div className="relative z-10 grid gap-8 md:grid-cols-[1.35fr_0.85fr] md:items-end md:gap-10">
        <div className="space-y-7">
          <p className="eyebrow">DHILIP T / ENGINEERING</p>

          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full border border-indigo-200/70 bg-indigo-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-700">
              Full-Stack & Flutter Developer
            </span>

            <h1 className="max-w-[15ch] text-4xl font-semibold leading-[0.94] tracking-[-0.07em] text-[color:var(--primary-text)] sm:text-5xl lg:max-w-[15ch] lg:text-[4rem]">
              I build product systems that bridge engineering depth with real-world usability.
            </h1>

            <p className="max-w-xl text-base text-[color:var(--secondary-text)] sm:text-lg">
              Full-Stack Development · Flutter · Product Engineering
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
              View Selected Work <ArrowRight size={16} />
            </a>
            <a href={siteConfig.resumeUrl} download className="inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--primary-text)] transition hover:border-slate-300 hover:bg-[color:var(--surface-alt)]">
              <Download size={16} /> Download Résumé
            </a>
          </div>

          <div className="flex items-center gap-5 pt-1 text-sm text-[color:var(--secondary-text)]">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[color:var(--primary-text)]">
              <GitBranch size={16} /> GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[color:var(--primary-text)]">
              <Link2 size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <aside className="card-surface relative z-10 overflow-hidden border border-[color:var(--border)] bg-[color:var(--surface)]/90 p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-indigo-50/80 to-transparent" aria-hidden="true" />

          <div className="relative space-y-5">
            <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--secondary-text)]">DHILIP.T / ENGINEERING</p>
              </div>
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(79,70,229,0.12)]" aria-label="active status indicator" />
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[color:var(--secondary-text)]">FOCUS</span>
                <span className="font-medium text-[color:var(--primary-text)]">FULL STACK + FLUTTER</span>
              </div>

              <div className="space-y-2 border-t border-[color:var(--border)] pt-4">
                <div className="text-[color:var(--secondary-text)]">SELECTED WORK</div>
                <div className="font-medium text-[color:var(--primary-text)]">ENGINEERING SYSTEMS</div>
              </div>

              <div className="flex items-center justify-between border-t border-[color:var(--border)] pt-4">
                <span className="text-[color:var(--secondary-text)]">PATENT</span>
                <span className="font-mono font-medium text-[color:var(--primary-text)]">01</span>
              </div>

              <div className="flex items-center justify-between border-t border-[color:var(--border)] pt-4">
                <span className="text-[color:var(--secondary-text)]">LOCATION</span>
                <span className="font-medium text-[color:var(--primary-text)]">Coimbatore, India</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
