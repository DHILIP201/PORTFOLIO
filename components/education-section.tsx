import { education } from '@/content/education';
import { DeveloperAmbientLayer } from '@/components/developer-ambient';
import { ambientSections } from '@/content/ambient';

export function EducationSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <DeveloperAmbientLayer items={ambientSections.education} className="h-full" />
      <div className="container-shell relative z-10">
        <div className="mb-10">
          <p className="eyebrow mb-3">EDUCATION</p>
          <h2 className="section-heading">Academic foundation</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {education.map((item) => (
            <article key={item.title} className="card-surface p-5">
              <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm font-medium text-slate-700">{item.school}</p>
              <p className="mt-1 text-sm text-slate-500">{item.location}</p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                {item.details.map((detail) => (
                  <div key={detail.label} className="flex items-center justify-between gap-3 border-t border-slate-200 pt-2">
                    <span>{detail.label}</span>
                    <span className="font-medium text-slate-800">{detail.value}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
