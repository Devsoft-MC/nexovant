import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { caseStudies } from '@/data/siteContent';

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-navy-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Client Success Stories"
            title="Outcomes Our Clients Measure in Board-Level Numbers"
            description="A selection of recent engagements across Zoho, custom applications, and digital platforms."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-900/10">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={`${study.sector} business software project visual`}
                    loading="lazy"
                    width={940}
                    height={650}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    {study.sector}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm font-medium text-navy-500">{study.client}</p>
                  <h3 className="mt-2 text-xl font-bold leading-[1.2] tracking-tight text-navy-900">{study.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-8">
                    <span className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700">
                      {study.result}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-primary-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
