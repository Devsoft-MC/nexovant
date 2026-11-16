import Link from "next/link";
import type { Metadata } from "next";

const pageTitle = "Zoho Consulting & Custom Software Development | Nexovant Solutions";
const pageDescription = "Nexovant Solutions delivers Zoho CRM implementation, Zoho Creator development, custom web and mobile apps, and business automation for growing companies worldwide. Book a free consultation.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: "https://nexovantsolutions.com/",
    siteName: "Nexovant Solutions",
    images: [{ url: "/nexovant-social-preview-v2.png", width: 1200, height: 630, alt: "Nexovant Solutions software development and Zoho consulting" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/nexovant-social-preview-v2.png"] },
};

const faqs = [
  {
    question: "How much does a mobile app or website cost?",
    answer:
      "Cost depends on features and scope. After a free consultation we send a fixed-price quote so there are no surprises.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A business website usually takes 2 to 4 weeks, a Zoho setup 1 to 3 weeks, and a mobile app 8 to 16 weeks depending on complexity.",
  },
  {
    question: "Can you set up Zoho CRM for my existing business?",
    answer:
      "Yes. We configure Zoho CRM, Books and other apps, migrate your existing data, automate workflows and train your team.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer maintenance and support plans for apps, websites and Zoho systems after launch.",
  },
  {
    question: "Will my website be optimised for search engines?",
    answer:
      "Every website we build is fast, mobile friendly and follows on-page SEO best practices from day one.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Nexovant Solutions",
      description: "Zoho consulting, custom web and mobile application development, and business process automation for growing companies.",
      url: "https://nexovantsolutions.com/",
      image: "https://nexovantsolutions.com/nexovant-social-preview-v2.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg aria-hidden="true" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg aria-hidden="true" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header>
        <div className="wrap">
          <nav aria-label="Main navigation">
            <Link className="logo" href="/">
              <i aria-hidden="true" />
              Nexovant Solutions
            </Link>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Portfolio</Link></li>
              <li><Link href="/process">Capabilities</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <Link className="btn sm" href="/contact">Book Consultation</Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="hero">
          <div className="wrap">
            <span className="badge"><b>●</b> Zoho Consulting &amp; Custom Software</span>
            <h1>Software That Makes Your Business <em>Work Smarter</em></h1>
            <p className="lead">
              We help growing businesses streamline operations with Zoho solutions, custom applications, and modern web and mobile platforms, built to fit the way your team actually works.
            </p>
            <div className="cta">
              <Link className="btn" href="/contact">Book Consultation</Link>
              <Link className="btn ghost" href="#services">Explore Services</Link>
            </div>
            <div className="perks">
              <span>Free consultation</span>
              <span>Zoho and custom software</span>
              <span>Remote-first delivery</span>
            </div>
          </div>
          <div className="marquee" aria-hidden="true">
            <div>
              <span>Mobile apps</span><b>✦</b><span>Websites</span><b>✦</b><span>Zoho CRM</span><b>✦</b><span>E-commerce</span><b>✦</b><span>Automation</span><b>✦</b>
              <span>Mobile apps</span><b>✦</b><span>Websites</span><b>✦</b><span>Zoho CRM</span><b>✦</b><span>E-commerce</span><b>✦</b><span>Automation</span><b>✦</b>
            </div>
          </div>
        </div>

        <section id="services">
          <div className="wrap">
            <span className="label">What We Do</span>
            <h2>Six Capabilities. One Accountable Partner.</h2>
            <p className="sub">From Zoho strategy and implementation to custom web and mobile applications, we design, build, and run the systems your business depends on.</p>
            <div className="bento">
              <div className="tile big">
                <div>
                  <div className="ic"><PhoneIcon /></div>
                  <h3>Zoho Consulting</h3>
                  <p>Strategy, process design, and a practical roadmap for getting the most from the Zoho ecosystem across every department.</p>
                </div>
                <ul><li>Zoho Readiness Assessments</li><li>Process Mapping &amp; Design</li><li>Team Adoption &amp; Training</li></ul>
              </div>
              <div className="tile">
                <div className="ic"><WebIcon /></div>
                <h3>Zoho Creator Development</h3>
                <p>Custom business applications built on Zoho Creator, from approval workflows to full operational systems.</p>
                <ul><li>Custom Creator Applications</li><li>Deluge Scripting</li><li>Forms, Approvals &amp; Reports</li></ul>
              </div>
              <div className="tile">
                <div className="ic"><WorkflowIcon /></div>
                <h3>Zoho CRM Implementation</h3>
                <p>End-to-end Zoho CRM setup, data migration, and integrations that give sales and service teams one source of truth.</p>
                <ul><li>Pipeline &amp; Stage Configuration</li><li>Data Migration &amp; Cleanup</li><li>Integrations &amp; Dashboards</li></ul>
              </div>
              <div className="tile wide service-cta">
                <h3>Custom Web Applications</h3>
                <p>Secure, scalable web platforms built around your workflows, from internal portals to customer-facing products.</p>
                <ul><li>Customer &amp; Partner Portals</li><li>Dashboards &amp; Analytics</li><li>API &amp; System Integrations</li></ul>
              </div>
              <div className="tile">
                <div className="ic"><PhoneIcon /></div>
                <h3>Mobile Application Development</h3>
                <p>iOS and Android apps for teams and customers, designed for speed in the field and polished on every screen.</p>
                <ul><li>iOS &amp; Android Apps</li><li>Offline-Ready Field Tools</li><li>App Store Launch Support</li></ul>
              </div>
              <div className="tile">
                <div className="ic"><WorkflowIcon /></div>
                <h3>Business Automation</h3>
                <p>Workflow automation that removes manual handoffs, keeps data in sync, and frees people for higher-value work.</p>
                <ul><li>Approval &amp; Routing Workflows</li><li>Document Automation</li><li>Cross-System Data Sync</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="dark">
          <div className="wrap">
            <span className="label">Projects</span>
            <h2>Recent projects</h2>
            <p className="sub">A look at what we have built.</p>
            <div>
              <div className="prow">
                <div className="pi"><PhoneIcon /></div>
                <h3>Sales pipeline and quoting unified in Zoho CRM</h3>
                {/* TODO: Replace with a verified result before launch. */}
                <p>Verified result to be added before launch.</p>
                <div className="ptags"><span>Mid-Sized Manufacturer</span><span>Zoho CRM</span></div>
              </div>
              <div className="prow">
                <div className="pi"><WebIcon /></div>
                <h3>Patient intake and approvals built on Zoho Creator</h3>
                {/* TODO: Replace with a verified result before launch. */}
                <p>Verified result to be added before launch.</p>
                <div className="ptags"><span>Regional Clinic Network</span><span>Zoho Creator</span></div>
              </div>
              <div className="prow">
                <div className="pi">
                  <svg aria-hidden="true" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" />
                  </svg>
                </div>
                <h3>Driver app for dispatch and proof of delivery</h3>
                <p>Proof of delivery captured in a single tap.</p>
                <div className="ptags"><span>Logistics Operator</span><span>Mobile app</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <span className="label">Process</span>
            <h2>The Capabilities Behind Every Engagement</h2>
            <p className="sub">Five areas where our teams consistently turn complexity into measurable advantage.</p>
            <div className="tl">
              <div className="ti"><b>1</b><h3>Digital Transformation</h3><p>We re-architect legacy processes into connected, data-driven operating models.</p></div>
              <div className="ti"><b>2</b><h3>Business Process Automation</h3><p>We eliminate manual handoffs with workflows that run around the clock.</p></div>
              <div className="ti"><b>3</b><h3>AI Integration</h3><p>We embed practical machine learning and generative AI into everyday business tools.</p></div>
              <div className="ti"><b>4</b><h3>Cloud Solutions</h3><p>Secure, elastic cloud foundations designed for resilience and predictable cost.</p></div>
              <div className="ti"><b>5</b><h3>Enterprise Integration</h3><p>We unify ERP, CRM, finance, and field systems into one trusted source of truth.</p></div>
            </div>
          </div>
        </section>

        <section id="why" className="dark">
          <div className="wrap">
            <span className="label">Why us</span>
            <h2>Partners Who Stay Accountable After Go-Live</h2>
            <p className="sub">We measure success by the adoption, performance, and returns that show up months after launch, not by the handover date.</p>
            <div className="why">
              <div><h3>Proven Depth</h3><p>Consultants and engineers with hands-on experience across Zoho, custom web, and mobile projects.</p></div>
              <div><h3>Outcome-Led Delivery</h3><p>Every phase is tied to KPIs you define up front, with transparent reporting through to go-live.</p></div>
              <div><h3>Built to Last</h3><p>Stable, named teams that learn your business, so you never repeat onboarding.</p></div>
              <div><h3>Future-Ready Architecture</h3><p>Solutions that grow from a single department to multi-country operations without a rebuild.</p></div>
            </div>
          </div>
        </section>

        <section id="tech">
          <div className="wrap">
            <span className="label">Technology Stack</span>
            <h2>Proven Platforms, Engineered with Discipline</h2>
            <p className="sub">We choose the tools that fit your problem and budget, then build on them with production-grade rigour.</p>
            <div className="tech">
              <span>Zoho CRM</span><span>Zoho Creator</span><span>Zoho Books</span><span>Deluge</span><span>React</span>
              <span>Node.js</span><span>Python</span><span>PostgreSQL</span><span>AWS</span><span>Flutter</span>
              <span>React Native</span><span>Power BI</span>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="wrap about">
            <div>
              <span className="label">About Nexovant Solutions</span>
              <h2>A Technology Partner Built for Serious Operators</h2>
              <p className="about-intro">Nexovant Solutions helps growing and mid-market companies modernise how they work. We combine Zoho consulting, Zoho Creator and CRM implementation, custom web and mobile applications, and business automation so your systems, data, and customer experience move in the same direction.</p>
              <p>Senior architects bring hands-on delivery across Zoho and custom stacks. One accountable team takes each engagement from discovery and design through launch and support, with security, data governance, and documentation built in.</p>
              <Link className="btn" href="/about">Meet the Team</Link>
            </div>
            <div className="sector">
              <div><b>Manufacturing</b><span>Production, inventory, and quality workflows on one platform.</span></div>
              <div><b>Construction</b><span>Project, field team, and document workflows in sync.</span></div>
              <div><b>Retail</b><span>Sales, stock, and customer data connected across channels.</span></div>
              <div><b>Healthcare</b><span>Patient intake, approvals, and service workflows.</span></div>
              <div><b>Logistics</b><span>Dispatch, delivery, and proof of delivery in one flow.</span></div>
            </div>
          </div>
        </section>

        <section id="faq" className="dark">
          <div className="wrap faqwrap">
            <div>
              <span className="label">FAQ</span>
              <h2>Frequently asked questions</h2>
              <p className="sub faq-sub">Quick answers to what clients ask us most.</p>
            </div>
            <div className="faq">
              {faqs.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final" id="contact">
          <div className="wrap">
            <span className="label">Contact</span>
            <h2>Tell Us Where Your Business Needs to Go Next</h2>
            <p className="sub">Share a few details and a senior consultant will respond within one business day with next steps and a free discovery call.</p>
            <div className="cta">
              <Link className="btn" href="/contact">Book Consultation</Link>
              <Link className="btn ghost" href="#services">Explore Services</Link>
            </div>
            <p className="sub">Response time: within one business day · Remote-first teams across five countries</p>
          </div>
        </section>
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
