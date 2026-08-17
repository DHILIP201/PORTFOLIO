import { experience } from '@/content/experience';
import { DeveloperAmbientLayer } from '@/components/developer-ambient';
import { ambientSections } from '@/content/ambient';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <DeveloperAmbientLayer items={ambientSections.experience} className="h-full" />
      <div className="container-shell relative z-10">
        <div className="mb-10">
          <p className="eyebrow mb-3">EXPERIENCE</p>
          <h2 className="section-heading">Engineering timeline</h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-0 hidden h-full w-px bg-slate-200 md:block" />
          <div className="space-y-6">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="relative md:pl-12">
                <div className="absolute left-0 top-6 hidden h-6 w-6 rounded-full border-4 border-white bg-indigo-500 md:block" />
                <div className="card-surface p-6">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{item.company}</p>
                    </div>
                    <span className="text-sm font-medium text-slate-500">{item.period}</span>
                  </div>

                  <ul className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                    {item.description.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
