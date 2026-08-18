import { Mail } from 'lucide-react';
import { siteConfig } from '@/content/site';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12.08c0 5.14 3.34 9.48 7.97 11.02.58.11.79-.25.79-.56v-2.05c-3.25.71-3.93-1.56-3.93-1.56-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.59-.29-5.31-1.3-5.31-5.77 0-1.27.45-2.31 1.2-3.12-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.84 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.81 1.2 1.85 1.2 3.12 0 4.48-2.73 5.47-5.33 5.76.42.37.8 1.09.8 2.2v3.26c0 .31.2.68.8.56A12.08 12.08 0 0 0 23.5 12.08C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.439-.103.25-.129.599-.129.948v5.418h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.66 1.191-1.599 2.905-1.599 2.121 0 3.71 1.386 3.71 4.365v5.516zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.704 1.959-1.704 1.188 0 1.914.753 1.939 1.704 0 .946-.751 1.704-1.983 1.704zm1.581 10.019H3.656V9.807h3.262v9.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]/70">
      <div className="container-shell flex flex-col gap-4 py-8 text-sm text-[color:var(--secondary-text)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-semibold tracking-[-0.04em] text-[color:var(--primary-text)]">Dhilip T</div>
          <div className="mt-1">Full-Stack · Flutter · Product Engineering</div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[color:var(--primary-text)]">
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[color:var(--primary-text)]">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 transition hover:text-[color:var(--primary-text)]">
            <Mail size={14} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
