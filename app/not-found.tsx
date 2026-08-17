import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-shell flex min-h-screen items-center justify-center py-24">
      <div className="card-surface max-w-lg space-y-5 p-8 text-center">
        <p className="eyebrow">404</p>
        <h1 className="text-3xl font-semibold tracking-[-0.05em]">Page not found</h1>
        <p className="text-slate-600">The page you requested could not be found.</p>
        <Link href="/" className="inline-flex rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
          Return home
        </Link>
      </div>
    </main>
  );
}
