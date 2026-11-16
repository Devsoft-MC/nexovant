import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function ContactPage() {
  return (
    <SiteShell
      title="Tell us what you want to build — and we will help shape the plan."
      summary="Send a quick overview of your idea and we will get back to you with the next steps, timeline and next best action."
    >
      <section className="page-content">
        <div className="wrap contact-grid">
          <div className="page-card">
            <h2>Contact details</h2>
            <ul>
              <li>Response time: Within one business day</li>
              <li>Delivery: Remote-first teams across five countries</li>
              <li>Location: Kochi, Kerala, India</li>
            </ul>
          </div>

          <div className="page-card accent">
            <h2>Next steps</h2>
            <p>Share a short brief: what you need, your timeline, and any features or integrations you already know about.</p>
            <Link href="/#contact" className="btn">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
