import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { whyChooseUs } from '@/data/siteContent';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary-600/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="Why Choose Us"
              title="Partners Who Stay Accountable After Go-Live"
              description="We measure success by the adoption, performance, and returns that show up months after launch, not by the handover date."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="glass group h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20 text-primary-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-lg font-bold tracking-tight text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-[1.5] text-navy-200">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
