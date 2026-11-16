import { CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { brand } from '@/data/siteContent';

const highlights = [
  'Senior architects with hands-on delivery experience across Zoho and custom stacks',
  'A single accountable team from discovery and design through launch and support',
  'Security, data governance, and documentation built into every engagement',
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-100 to-accent-100 blur-sm" />
            <img
              src="https://images.pexels.com/photos/8134103/pexels-photo-8134103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Nexovant Solutions consultant reviewing a Zoho implementation project with a client"
              loading="lazy"
              width={940}
              height={650}
              className="h-[28rem] w-full rounded-3xl object-cover shadow-2xl shadow-navy-900/20 sm:h-[34rem]"
            />
            <div className="glass-light absolute -bottom-6 right-4 rounded-2xl px-6 py-5 shadow-xl sm:right-8">
              <p className="font-display text-3xl font-extrabold text-navy-900">6</p>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy-500">Core service lines</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading
            align="left"
            eyebrow={`About ${brand.name}`}
            title="A Technology Partner Built for Serious Operators"
            description={`${brand.name} helps growing and mid-market companies modernise how they work. We combine Zoho consulting, Zoho Creator and CRM implementation, custom web and mobile applications, and business automation so your systems, data, and customer experience move in the same direction.`}
          />
          <ul className="mt-10 space-y-5">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100">
                  <CheckCircle2 className="h-4 w-4 text-accent-700" />
                </span>
                <span className="text-base leading-[1.5] text-navy-600">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-700"
          >
            Meet the team
          </a>
        </Reveal>
      </div>
    </section>
  );
}
