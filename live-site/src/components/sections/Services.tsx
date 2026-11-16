import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { services } from '@/data/siteContent';

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Six Capabilities. One Accountable Partner."
            description="From Zoho strategy and implementation to custom web and mobile applications, we design, build, and run the systems your business depends on."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 120}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-600/10">
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary-600 to-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors duration-500 group-hover:bg-primary-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-7 text-2xl font-bold tracking-tight text-navy-900">{service.title}</h3>
                  <p className="mt-4 text-base leading-[1.5] text-navy-500">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-medium text-navy-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    aria-label={`Explore ${service.title.toLowerCase()} services`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-800"
                  >
                    Explore service
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
