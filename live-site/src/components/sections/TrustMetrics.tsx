import { useCountUp } from '@/hooks/useCountUp';
import Reveal from '@/components/common/Reveal';
import { trustMetrics } from '@/data/siteContent';

function MetricItem({ value, suffix, label, delay }: { value: number | null; suffix: string; label: string; delay: number }) {
  const { ref, value: displayValue } = useCountUp(value ?? 0);

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="glass-light rounded-3xl px-8 py-10 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-600/10">
        <p className="font-display text-5xl font-extrabold tracking-tight text-navy-900 sm:text-6xl">
          {value === null ? '—' : displayValue}
          {value !== null && <span className="text-primary-600">{suffix}</span>}
        </p>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-navy-500">{label}</p>
      </div>
    </Reveal>
  );
}

export default function TrustMetrics() {
  return (
    <section id="metrics" className="relative -mt-12 pb-8 sm:pb-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-3">
        {trustMetrics.map((metric, index) => (
          <MetricItem key={metric.label} {...metric} delay={index * 120} />
        ))}
      </div>
    </section>
  );
}
