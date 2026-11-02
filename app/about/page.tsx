import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function AboutPage() {
  return (
    <SiteShell
      title="Technology partner for growing businesses who want a clearer, smarter workflow."
      summary="Nexovant Solutions helps local and growing businesses digitise operations with practical software that people actually enjoy using."
    >
      <section className="page-content">
        <div className="wrap about-page-grid">
          <div>
            <p className="about-text">Nexovant Solutions is a software company based in Kochi, Kerala. We help shops, clinics, manufacturers, agencies and service businesses move online and run more efficiently.</p>
            <p className="about-text">Whether you need a mobile app for customers, a website that brings in enquiries, or Zoho tools to organise sales and accounts, we manage design, development and implementation from start to finish.</p>
            <Link href="/contact" className="btn">
              Talk to our team
            </Link>
          </div>

          <div className="page-card">
            <h2>We work with teams in</h2>
            <ul>
              <li>Retail and e-commerce</li>
              <li>Healthcare and services</li>
              <li>Manufacturing and trade</li>
              <li>Agencies and digital businesses</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
