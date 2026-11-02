import Link from "next/link";

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
      description: "App development, web development and Zoho solutions.",
      areaServed: "IN",
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
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/process">How we work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <Link className="btn sm" href="/contact">Get a free quote</Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="hero">
          <div className="wrap">
            <span className="badge"><b>●</b> App development · Web development · Zoho solutions</span>
            <h1>Software that makes your business <em>work smarter.</em></h1>
            <p className="lead">
              Nexovant Solutions builds mobile apps, fast websites and Zoho systems that fit the way
              your team works. Tell us the problem and we will build the answer.
            </p>
            <div className="cta">
              <Link className="btn" href="/contact">Start your project</Link>
              <Link className="btn ghost" href="/projects">See our work</Link>
            </div>
            <div className="perks">
              <span>Free consultation</span>
              <span>Fixed-price quotes</span>
              <span>Direct access to developers</span>
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
            <span className="label">Services</span>
            <h2>Three things we do really well</h2>
            <p className="sub">One team for your app, your website and your business systems.</p>
            <div className="bento">
              <div className="tile big">
                <div>
                  <div className="ic"><PhoneIcon /></div>
                  <h3>App development</h3>
                  <p>Android and iOS apps that are smooth to use and easy to maintain.</p>
                </div>
                <ul><li>Android and iOS</li><li>Flutter and React Native</li><li>API and backend</li></ul>
              </div>
              <div className="tile">
                <div className="ic"><WebIcon /></div>
                <h3>Web development</h3>
                <p>Modern, responsive websites and web apps that load fast and rank well.</p>
                <ul><li>Business websites</li><li>E-commerce stores</li><li>Custom web apps</li></ul>
              </div>
              <div className="tile">
                <div className="ic"><WorkflowIcon /></div>
                <h3>Zoho solutions</h3>
                <p>Set up and customise Zoho so sales, billing and support run in one place.</p>
                <ul><li>Zoho CRM and Books</li><li>Workflow automation</li><li>Data migration and training</li></ul>
              </div>
              <div className="tile wide service-cta">
                <h3>Not sure what you need?</h3>
                <p>Tell us the problem. We will suggest the simplest way to solve it and send a fixed-price quote.</p>
                <div className="service-cta-link"><Link className="btn sm" href="/contact">Talk to us</Link></div>
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
                <h3>FitTrack fitness app</h3>
                <p>Workout plans, progress charts and reminders for gym members.</p>
                <div className="ptags"><span>Flutter</span><span>Firebase</span><span>Android and iOS</span></div>
              </div>
              <div className="prow">
                <div className="pi"><WebIcon /></div>
                <h3>Spice Route online store</h3>
                <p>A fast e-commerce site with online payments and order tracking.</p>
                <div className="ptags"><span>React</span><span>Node.js</span><span>Payments</span></div>
              </div>
              <div className="prow">
                <div className="pi">
                  <svg aria-hidden="true" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" />
                  </svg>
                </div>
                <h3>BuildRight Zoho setup</h3>
                <p>CRM and invoicing connected, with automatic follow-ups and reports.</p>
                <div className="ptags"><span>Zoho CRM</span><span>Zoho Books</span><span>Automation</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <span className="label">Process</span>
            <h2>How we work with you</h2>
            <p className="sub">Simple, clear and no surprises.</p>
            <div className="tl">
              <div className="ti"><b>1</b><h3>Discuss</h3><p>We listen to your goals and ideas.</p></div>
              <div className="ti"><b>2</b><h3>Plan</h3><p>You get a clear scope, timeline and fixed price.</p></div>
              <div className="ti"><b>3</b><h3>Build</h3><p>Regular updates and demos while we develop.</p></div>
              <div className="ti"><b>4</b><h3>Launch and support</h3><p>We go live together and stay on hand after.</p></div>
            </div>
          </div>
        </section>

        <section id="why" className="dark">
          <div className="wrap">
            <span className="label">Why us</span>
            <h2>Why businesses choose Nexovant Solutions</h2>
            <p className="sub">A small, focused team means faster delivery and a developer who always picks up your call.</p>
            <div className="why">
              <div><h3>Fixed-price quotes</h3><p>You know the cost before we start. No hidden charges or surprise invoices.</p></div>
              <div><h3>Fast and mobile-first</h3><p>Every site and app is built to load quickly and work perfectly on any screen.</p></div>
              <div><h3>SEO built in</h3><p>Clean code, proper page structure and speed optimisation so customers can find you on Google.</p></div>
              <div><h3>Clear communication</h3><p>Regular demos and updates in plain language, with no technical jargon.</p></div>
              <div><h3>Secure by default</h3><p>HTTPS, safe data handling and regular backups on every project.</p></div>
              <div><h3>Support after launch</h3><p>Maintenance plans so your product keeps running smoothly as you grow.</p></div>
            </div>
          </div>
        </section>

        <section id="tech">
          <div className="wrap">
            <span className="label">Technology</span>
            <h2>Technologies we build with</h2>
            <p className="sub">Modern, proven tools that are easy to maintain and scale.</p>
            <div className="tech">
              <span>Flutter</span><span>React Native</span><span>Kotlin</span><span>Swift</span><span>React</span>
              <span>Next.js</span><span>Node.js</span><span>WordPress</span><span>Shopify</span><span>Firebase</span>
              <span>MySQL</span><span>Zoho CRM</span><span>Zoho Books</span><span>Zoho Creator</span><span>Zoho Desk</span>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="wrap about">
            <div>
              <span className="label">About</span>
              <h2>Technology partner for growing businesses</h2>
              <p className="about-intro">Nexovant Solutions is a software company based in Kochi, Kerala. We help shops, clinics, manufacturers, agencies and service businesses move online and run more efficiently.</p>
              <p>Whether you need a mobile app for your customers, a website that brings in enquiries, or Zoho to organise sales and accounts, we handle design, development and setup from start to finish.</p>
              <Link className="btn" href="/contact">Talk to our team</Link>
            </div>
            <div className="sector">
              <div><b>Retail and e-commerce</b><span>Online stores, order apps and inventory tracking.</span></div>
              <div><b>Healthcare and services</b><span>Booking systems, patient apps and customer portals.</span></div>
              <div><b>Manufacturing and trade</b><span>Zoho CRM, invoicing and sales automation.</span></div>
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
            <h2>Have an idea? Let us build it.</h2>
            <p className="sub">Our contact information is being updated. Please check back soon.</p>
            <div className="cta">
              <Link className="btn" href="/contact">Get a free quote</Link>
              <Link className="btn ghost" href="/projects">See our work</Link>
            </div>
          </div>
        </section>
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
