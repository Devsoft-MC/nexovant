import Link from "next/link";
import { SiteShell } from "../site-shell";

const projects = [
  {
    title: "FitTrack fitness app",
    summary: "Workout plans, progress charts and reminders for gym members.",
    tags: ["Flutter", "Firebase", "Android and iOS"],
  },
  {
    title: "Spice Route online store",
    summary: "A fast e-commerce site with online payments and order tracking.",
    tags: ["React", "Node.js", "Payments"],
  },
  {
    title: "BuildRight Zoho setup",
    summary: "CRM and invoicing connected, with automatic follow-ups and reports.",
    tags: ["Zoho CRM", "Zoho Books", "Automation"],
  },
];

export default function ProjectsPage() {
  return (
    <SiteShell
      title="Recent work that helped businesses grow online and operate more smoothly."
      summary="Each project is designed around a real business problem, with a clear user journey and practical results."
    >
      <section className="page-content">
        <div className="wrap project-list">
          {projects.map((project) => (
            <article key={project.title} className="page-card project-card">
              <div className="project-badge">Case study</div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-content dark-block">
        <div className="wrap">
          <div className="cta-row">
            <div>
              <span className="label">Would you like something similar?</span>
              <h2>We can shape the next version around your goals, audience and workflow.</h2>
            </div>
            <Link href="/contact" className="btn">
              Start your project
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
