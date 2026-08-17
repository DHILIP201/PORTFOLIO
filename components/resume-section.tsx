import { siteConfig } from '@/content/site';
import { DeveloperAmbientLayer } from '@/components/developer-ambient';
import { ambientSections } from '@/content/ambient';

export function ResumeSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <DeveloperAmbientLayer items={ambientSections.resume} className="h-full" />
      <div className="container-shell relative z-10">
        <div className="mb-10">
          <p className="eyebrow mb-3">RÉSUMÉ</p>
          <h2 className="section-heading">Want the complete version?</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="card-surface overflow-hidden">
            <div className="border-b border-slate-200 bg-slate-50 p-3">
              <iframe
                src={siteConfig.resumeUrl}
                title="Dhilip T resume preview"
                className="h-[320px] w-full rounded-xl border border-slate-200 bg-white"
              />
            </div>
            <div className="flex flex-col gap-3 p-5 sm:flex-row">
              <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
                View Résumé
              </a>
              <a href={siteConfig.resumeUrl} download className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-300 hover:bg-slate-50">
                Download PDF
              </a>
            </div>
          </div>

          <div className="card-surface flex flex-col justify-center p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Note</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              The résumé is provided as the real PDF in this repository. This section previews the document inline and supports a direct download.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              {/* /resume.pdf is an external real file expected to exist in the repository. */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
