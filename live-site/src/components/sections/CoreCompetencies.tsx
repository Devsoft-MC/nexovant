import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { competencies } from '@/data/siteContent';

export default function CoreCompetencies() {
  return (
    <section id="competencies" className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-primary-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Core Competencies"
            title="The Capabilities Behind Every Engagement"
            description="Five areas where our teams consistently turn complexity into measurable advantage."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {competencies.map((item, index) => {
            const Icon = item.icon;
            const spanClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            return (
              <Reveal key={item.title} delay={index * 100} className={spanClass}>
                <div className="glass group h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.5] text-navy-200">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
