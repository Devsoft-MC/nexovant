import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "How we work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <>
      <header>
        <div className="wrap">
          <nav aria-label="Main navigation">
            <Link className="logo" href="/">
              <i aria-hidden="true" />
              Nexovant Solutions
            </Link>
            <ul>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
            <Link className="btn sm" href="/contact">
              Get a free quote
            </Link>
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <section className="page-hero">
          <div className="wrap">
            <span className="label">Nexovant Solutions</span>
            <h1>{title}</h1>
            <p className="lead">{summary}</p>
          </div>
        </section>

        {children}
      </main>

      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div>
              <h3>Nexovant Solutions</h3>
              <p>App development, web development and Zoho solutions for businesses in Kochi, Kerala and across India.</p>
            </div>
            <div>
              <h3>Services</h3>
              <Link href="/services">App development</Link>
              <Link href="/services">Web development</Link>
              <Link href="/services">Zoho solutions</Link>
            </div>
            <div>
              <h3>Contact</h3>
              <p>Contact information will be available soon.</p>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 Nexovant Solutions. All rights reserved.</span>
            <span>Privacy · Terms</span>
          </div>
        </div>
      </footer>
    </>
  );
}
