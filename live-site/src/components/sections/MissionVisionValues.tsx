import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { mvv } from '@/data/siteContent';

export default function MissionVisionValues() {
  return (
    <section id="mission" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why We Exist"
            title="Mission, Vision, Values"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {mvv.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 120}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/10 transition-transform duration-500 hover:-translate-y-2 sm:p-10">
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-600/30 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent-300">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="relative mt-8 text-2xl font-bold tracking-tight">{item.title}</h3>
                  <p className="relative mt-4 text-base leading-[1.5] text-navy-200">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
