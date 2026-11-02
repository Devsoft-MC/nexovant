import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function ContactPage() {
  return (
    <SiteShell
      title="Thinking about a project?"
      summary="We are updating our contact information. Please check back soon to find the best way to reach us."
    >
      <section className="page-content">
        <div className="wrap contact-grid">
          <div className="page-card">
            <h2>Contact information coming soon</h2>
            <p>We are preparing the right contact details for the site. In the meantime, explore our services and recent projects.</p>
            <p><Link href="/services">View our services</Link> · <Link href="/projects">See our projects</Link></p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
