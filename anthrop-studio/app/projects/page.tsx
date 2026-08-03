import type { Metadata } from "next";
import Link from "next/link";
import ProjectGrid from "../components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore anthrop's official residential interior and architectural portfolio in Bhubaneswar.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-hero projects-hero section-pad">
        <div>
          <p className="eyebrow">Official portfolio · Bhubaneswar</p>
          <h1>Real spaces.<br /><em>One design language.</em></h1>
        </div>
        <div className="page-intro">
          <p>
            A selection of anthrop&apos;s residential interiors and architectural
            elevations, with bespoke storage, layered lighting and contemporary
            material detailing.
          </p>
          <div className="portfolio-proof">
            <span><strong>4.9</strong> rating</span>
            <span><strong>57</strong> reviews</span>
            <span><strong>09</strong> featured works</span>
          </div>
        </div>
      </section>

      <ProjectGrid />

      <section className="project-inquiry section-pad">
        <div>
          <p className="eyebrow">Your project could be next</p>
          <h2>Bring us the ambition.<br />We&apos;ll give it form.</h2>
        </div>
        <Link className="button button-dark" href="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
