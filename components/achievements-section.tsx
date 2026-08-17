import { achievements } from '@/content/achievements';
import { DeveloperAmbientLayer } from '@/components/developer-ambient';
import { ambientSections } from '@/content/ambient';

export function AchievementsSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <DeveloperAmbientLayer items={ambientSections.achievements} className="h-full" />
      <div className="container-shell relative z-10">
        <div className="mb-10">
          <p className="eyebrow mb-3">ACHIEVEMENTS</p>
          <h2 className="section-heading">Signals of technical momentum.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {achievements.map((achievement) => (
            <article
              key={achievement.number}
              className={`rounded-[1.4rem] border p-5 ${
                achievement.title === 'PATENT'
                  ? 'border-indigo-200 bg-indigo-50 shadow-soft'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="mb-4 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                <span>{achievement.number}</span>
                <span>{achievement.title}</span>
              </div>
              {achievement.href ? (
                <a href={achievement.href} target="_blank" rel="noreferrer" className="block text-lg font-semibold tracking-[-0.04em] text-slate-900 transition hover:text-indigo-700">
                  {achievement.label}
                </a>
              ) : (
                <p className="text-lg font-semibold tracking-[-0.04em] text-slate-900">{achievement.label}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
