import type { Metadata } from "next";
import Link from "next/link";
import ProjectGrid from "../components/ProjectGrid";
import ArchitecturalProjectsMotion from "../components/ArchitecturalProjectsMotion";
import ArchitecturalTicker from "../components/ArchitecturalTicker";

export const metadata: Metadata = {
  title: "Projects Portfolio — Residential Architecture & Luxury Interiors | anthrop Studio",
  description:
    "Explore anthrop studio's official residential interior architecture and contemporary elevation portfolio in Bhubaneswar, Odisha.",
  keywords: [
    "architecture portfolio Bhubaneswar",
    "luxury interior projects",
    "villa elevation designs",
    "master bedroom interior design",
    "custom joinery portfolio",
    "contemporary homes Odisha",
  ],
  openGraph: {
    title: "Projects Portfolio — Residential Architecture & Interiors | anthrop Studio",
    description:
      "A selection of anthrop's residential interiors and architectural elevations in Bhubaneswar, featuring bespoke joinery, layered lighting, and contemporary detailing.",
    url: "https://anthropstudio.com/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-hero projects-hero section-pad">
        <div>
          <p className="eyebrow" style={{ color: "var(--orange)" }}>Official portfolio · Bhubaneswar</p>
          <h1>Real spaces.<br /><em>One design language.</em></h1>
        </div>
        <div className="page-intro">
          <p>
            A curated selection of anthrop&apos;s residential interiors and architectural
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

      {/* Interactive Project Commission Index Motion Graphic */}
      <section className="section-pad">
        <ArchitecturalProjectsMotion />
      </section>

      <ProjectGrid />

      {/* Kinetic Architectural Ticker */}
      <ArchitecturalTicker />

      <section className="project-inquiry section-pad">
        <div>
          <p className="eyebrow" style={{ color: "var(--orange)" }}>Your project could be next</p>
          <h2>Bring us the ambition.<br />We&apos;ll give it form.</h2>
        </div>
        <Link className="button button-dark" href="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
