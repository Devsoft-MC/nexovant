import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { techStack } from '@/data/siteContent';

export default function TechStack() {
  return (
    <section id="technology" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Technology Stack"
            title="Proven Platforms, Engineered with Discipline"
            description="We choose the tools that fit your problem and budget, then build on them with production-grade rigour."
          />
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-navy-100 bg-white px-5 py-3 text-sm font-semibold text-navy-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700 hover:shadow-lg hover:shadow-primary-600/10 sm:px-6 sm:text-base"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
