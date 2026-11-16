import { Quote } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { testimonials } from '@/data/siteContent';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by the leaders who run the numbers"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 120}>
              <figure className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5 sm:p-10">
                <Quote className="h-10 w-10 text-primary-200" />
                <blockquote className="mt-6 flex-1 text-base leading-[1.5] text-navy-700">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-navy-100 pt-6">
                  <p className="font-semibold text-navy-900">{item.name}</p>
                  <p className="text-sm text-navy-500">
                    {item.role}, {item.company}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
