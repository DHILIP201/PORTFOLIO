import { Sparkles } from 'lucide-react';
import { projects } from '@/content/projects';
import { DeveloperAmbientLayer } from '@/components/developer-ambient';
import { ambientSections } from '@/content/ambient';

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[15px] w-[15px] fill-current">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.71 5.4-5.29 5.68.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[15px] w-[15px] fill-current">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.88v8.7H5.5V9.8Zm5.2 0h2.76v1.19h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.92 3.45 4.41v4.58h-2.88v-4.28c0-1.02-.02-2.33-1.42-2.33-1.42 0-1.64 1.11-1.64 2.25v4.36h-2.88V9.8Z" />
    </svg>
  );
}

function getSocialActionTitle(projectTitle: string, platform: 'github' | 'linkedin') {
  return platform === 'github'
    ? `View ${projectTitle} on GitHub`
    : `View ${projectTitle} LinkedIn post`;
}

export function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" className="relative py-20 sm:py-24">
      <DeveloperAmbientLayer items={ambientSections.work} className="h-full" />
      <div className="container-shell relative z-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">SELECTED WORK</p>
            <h2 className="section-heading">Product systems with real engineering depth.</h2>
          </div>
          <div className="hidden items-center gap-2 text-sm text-slate-500 md:flex">
            <Sparkles size={14} />
            <span>Engineering projects</span>
          </div>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => {
            const flow = project.systemFlow ?? [];
            const githubHref = project.githubUrl ?? project.github;
            const linkedInHref = project.linkedInUrl;

            return (
              <article
                key={project.slug}
                className={`overflow-hidden rounded-[1.7rem] border ${
                  project.flagShip
                    ? 'border-indigo-200 bg-gradient-to-br from-white to-indigo-50/60 shadow-[0_18px_45px_rgba(79,70,229,0.08)]'
                    : 'border-slate-200 bg-white shadow-soft'
                }`}
              >
                <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="badge">{project.category}</span>
                      {project.context && !project.flagShip && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                          {project.context}
                        </span>
                      )}
                      {project.flagShip && (
                        <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                          {project.badge ?? 'Flagship'}
                        </span>
                      )}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-3xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-[2rem]">
                        {project.title}
                      </h3>
                      <p className="max-w-xl text-base leading-7 text-slate-600">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-700">
                          {technology}
                        </span>
                      ))}
                    </div>

                    {flow.length > 0 && (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                          <span>System</span>
                          <span>Flow</span>
                        </div>
                        <div className="mt-4 flex flex-col items-center gap-2 text-center text-sm font-medium text-slate-700">
                          {flow.map((step, stepIndex) => (
                            <div key={step} className="flex flex-col items-center gap-2">
                              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">{step}</div>
                              {stepIndex < flow.length - 1 ? <span className="text-slate-400">↓</span> : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`flex flex-col justify-between gap-5 rounded-2xl border p-5 ${project.flagShip ? 'border-indigo-200 bg-white/80' : 'border-slate-200 bg-slate-50'}`}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                        <span>Engineering</span>
                        <span>0{index + 1}</span>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {(project.engineeringHighlights ?? project.capabilities.slice(0, 5)).map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2">
                      {githubHref && (
                        <a
                          href={githubHref}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={getSocialActionTitle(project.title, 'github')}
                          title={getSocialActionTitle(project.title, 'github')}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white/80 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
                        >
                          <GitHubMark />
                        </a>
                      )}
                      {linkedInHref && (
                        <a
                          href={linkedInHref}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={getSocialActionTitle(project.title, 'linkedin')}
                          title={getSocialActionTitle(project.title, 'linkedin')}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white/80 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
                        >
                          <LinkedInMark />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.filter((project) => !project.featured).map((project) => (
            <article key={project.slug} className="card-surface flex h-full flex-col justify-between border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300">
              <div className="space-y-4">
                <span className="badge">{project.category}</span>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-900">{project.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600">
                      {technology}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {project.capabilities.slice(0, 4).map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={getSocialActionTitle(project.title, 'github')}
                    title={getSocialActionTitle(project.title, 'github')}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white/80 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
                  >
                    <GitHubMark />
                  </a>
                )}
                {project.linkedInUrl && (
                  <a
                    href={project.linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={getSocialActionTitle(project.title, 'linkedin')}
                    title={getSocialActionTitle(project.title, 'linkedin')}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white/80 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
                  >
                    <LinkedInMark />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
