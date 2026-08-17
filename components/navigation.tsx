'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content/site';

const navItems = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#about', label: 'About' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[color:var(--background)]/80 backdrop-blur-md">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[-0.04em] text-[color:var(--primary-text)]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] text-[10px] font-semibold text-[color:var(--primary-text)]">DT</span>
          Dhilip T
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[color:var(--secondary-text)] transition hover:text-[color:var(--primary-text)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-sm text-[color:var(--secondary-text)] transition hover:text-[color:var(--primary-text)]">
            GitHub
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-sm text-[color:var(--secondary-text)] transition hover:text-[color:var(--primary-text)]">
            LinkedIn
          </a>
          <a href={siteConfig.resumeUrl} className="inline-flex items-center rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm font-medium text-[color:var(--primary-text)] transition hover:border-slate-300 hover:bg-[color:var(--surface-alt)]">
            Résumé
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--primary-text)] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--surface)] md:hidden">
          <div className="container-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[color:var(--secondary-text)] transition hover:text-[color:var(--primary-text)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-[color:var(--border)] pt-3">
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-sm text-[color:var(--secondary-text)]">
                GitHub
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-sm text-[color:var(--secondary-text)]">
                LinkedIn
              </a>
              <a href={siteConfig.resumeUrl} className="inline-flex max-w-fit items-center rounded-lg border border-[color:var(--border)] bg-[color:var(--primary-text)] px-3 py-2 text-sm font-medium text-[color:var(--background)]">
                Résumé
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
