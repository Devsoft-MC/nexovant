import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function ServicesPage() {
  return (
    <SiteShell
      title="App development, websites and Zoho systems built for real business needs."
      summary="We design, build and support digital tools that help teams sell better, serve faster and work with less friction."
    >
      <section className="page-content">
        <div className="wrap page-grid">
          <article className="page-card accent">
            <h2>App development</h2>
            <p>Launch mobile apps for customers, teams and operations with smooth UX, reliable APIs and clean long-term maintenance.</p>
            <ul>
              <li>Android and iOS apps</li>
              <li>Flutter and React Native</li>
              <li>API integrations and dashboards</li>
            </ul>
          </article>

          <article className="page-card">
            <h2>Web development</h2>
            <p>Fast marketing sites, client portals and internal tools that look polished and convert visitors into leads.</p>
            <ul>
              <li>Business websites</li>
              <li>E-commerce stores</li>
              <li>Custom web apps</li>
            </ul>
          </article>

          <article className="page-card">
            <h2>Zoho solutions</h2>
            <p>Set up CRM, billing, workflow automation and support systems so your daily operations run in one connected place.</p>
            <ul>
              <li>Zoho CRM and Books</li>
              <li>Workflow automation</li>
              <li>Data migration and team training</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="page-content dark-block">
        <div className="wrap">
          <div className="cta-row">
            <div>
              <span className="label">Need a tailored solution?</span>
              <h2>Tell us what your team needs and we will suggest the right stack.</h2>
            </div>
            <Link href="/contact" className="btn">
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
