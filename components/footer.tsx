import { siteConfig } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]/70">
      <div className="container-shell flex flex-col gap-4 py-8 text-sm text-[color:var(--secondary-text)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-semibold tracking-[-0.04em] text-[color:var(--primary-text)]">Dhilip T</div>
          <div className="mt-1">Full-Stack · Flutter · Product Engineering</div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--primary-text)]">GitHub</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--primary-text)]">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[color:var(--primary-text)]">Email</a>
        </div>
      </div>
    </footer>
  );
}
