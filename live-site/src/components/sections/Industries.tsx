import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { industries } from '@/data/siteContent';

export default function Industries() {
  return (
    <section id="industries" className="bg-navy-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Industries Served"
            title="Deep experience in the sectors that build the economy"
            description="We understand the workflows, compliance demands, and margin pressures that shape each industry we serve."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.name} delay={index * 80}>
                <div className="group flex h-full flex-col items-start gap-5 rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-600/10 sm:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-accent-400 transition-colors duration-500 group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-navy-900 sm:text-xl">{industry.name}</h3>
                  <p className="text-sm leading-[1.5] text-navy-500">{industry.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
