import Link from "next/link";
import { SiteShell } from "../site-shell";

const steps = [
  { number: "1", title: "Discuss", text: "We listen to your goals, current pain points and expected outcomes." },
  { number: "2", title: "Plan", text: "You receive a clear scope, timeline and fixed-price quote before work begins." },
  { number: "3", title: "Build", text: "We create and refine the product through regular updates and short feedback loops." },
  { number: "4", title: "Launch and support", text: "We go live together, then stay available for maintenance, improvements and support." },
];

export default function ProcessPage() {
  return (
    <SiteShell
      title="A simple way to build digital systems without the confusion."
      summary="We keep communication clear, priorities focused and timelines realistic from day one to launch."
    >
      <section className="page-content">
        <div className="wrap timeline">
          {steps.map((step) => (
            <div key={step.number} className="timeline-item">
              <div className="timeline-number">{step.number}</div>
              <div>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-content dark-block">
        <div className="wrap">
          <div className="cta-row">
            <div>
              <span className="label">Ready to begin?</span>
              <h2>Start with a brief conversation and we will map out the next steps.</h2>
            </div>
            <Link href="/contact" className="btn">
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
