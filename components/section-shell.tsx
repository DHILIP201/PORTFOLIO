import type { ReactNode } from 'react';

export function SectionShell({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="py-20 sm:py-24">
      <div className="container-shell">
        <div className="mb-10">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="section-heading">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
