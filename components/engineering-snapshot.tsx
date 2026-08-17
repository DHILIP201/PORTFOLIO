import { DeveloperAmbientLayer } from '@/components/developer-ambient';
import { ambientSections } from '@/content/ambient';

export function EngineeringSnapshot() {
  const steps = [
    {
      number: '01',
      title: 'UNDERSTAND',
      text: 'Break down the problem before touching the implementation.',
    },
    {
      number: '02',
      title: 'DESIGN',
      text: 'Think about architecture, UX, and the actual user.',
    },
    {
      number: '03',
      title: 'BUILD',
      text: 'Create the smallest working system.',
    },
    {
      number: '04',
      title: 'ITERATE',
      text: 'Test, debug, improve, and ship.',
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24">
      <DeveloperAmbientLayer items={ambientSections.engineering} className="h-full" />
      <div className="container-shell relative z-10">
        <div className="mb-10">
          <p className="eyebrow mb-3">ENGINEERING SNAPSHOT</p>
          <h2 className="section-heading">How I build</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="card-surface p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">{step.number}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-[-0.04em] text-slate-900">{step.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-700">
            I like turning technically complex ideas into interfaces and systems that people can actually use.
          </p>
        </div>
      </div>
    </section>
  );
}
