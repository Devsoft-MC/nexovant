import { SiteShell } from "../site-shell";

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

export default function FaqPage() {
  return (
    <SiteShell
      title="Answers to the questions businesses ask before they start."
      summary="We keep technology approachable, transparent and designed around your process, not around jargon."
    >
      <section className="page-content">
        <div className="wrap faq-page">
          <div className="faq-panel">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
