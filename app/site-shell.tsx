import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Portfolio" },
  { href: "/process", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
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
              Book Consultation
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
              <p>Zoho consulting, custom web and mobile applications, and business automation for companies built to grow.</p>
            </div>
            <div>
              <h3>Services</h3>
              <Link href="/#services">Zoho Consulting</Link>
              <Link href="/#services">Zoho CRM Implementation</Link>
              <Link href="/#services">Zoho Creator Development</Link>
              <Link href="/#services">Custom Web Applications</Link>
              <Link href="/#services">Mobile App Development</Link>
              <Link href="/#services">Business Automation</Link>
            </div>
            <div>
              <h3>Contact</h3>
              <p>Free consultation for every new project</p>
              <p>Remote-first, global delivery</p>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 Nexovant Solutions. All rights reserved.</span>
            <span>Software that moves your business forward.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
