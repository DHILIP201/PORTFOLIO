import { Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { DeveloperAmbientLayer } from '@/components/developer-ambient';
import { ambientSections } from '@/content/ambient';

export function ContactSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <DeveloperAmbientLayer items={ambientSections.contact} className="h-full" />
      <div className="container-shell relative z-10">
        <div className="card-surface p-8 sm:p-10">
          <div className="mb-6">
            <p className="eyebrow mb-3">CONTACT</p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-4xl">Let’s build something useful.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700 transition hover:border-slate-300 hover:bg-white">
              <Mail size={18} />
              <span>{siteConfig.email}</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
              <MapPin size={18} />
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">GitHub</a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">LinkedIn</a>
              <a href={siteConfig.resumeUrl} className="transition hover:text-slate-900">Résumé</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
