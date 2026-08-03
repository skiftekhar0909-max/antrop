"use client";

import { useState } from "react";

type Category = "All" | "Interiors" | "Architecture";

const categories: Category[] = ["All", "Interiors", "Architecture"];

const projects = [
  {
    title: "Executive Bedroom & TV Console Unit",
    category: "Interiors" as Category,
    type: "Residential interior",
    location: "Bhubaneswar",
    image: "/assets/executive-bedroom-tv-console.webp",
    shape: "wide",
    description:
      "Spacious master bedroom featuring a bespoke wooden console, mini bar and leather armchairs.",
  },
  {
    title: "Luxury Villa Facade & Architecture",
    category: "Architecture" as Category,
    type: "Residential architecture",
    location: "Bhubaneswar",
    image: "/assets/luxury-villa-facade.webp",
    shape: "tall",
    description:
      "Contemporary villa facade with glass stair tower, layered volumes, wood accents and integrated greenery.",
  },
  {
    title: "Modern Suite & Wardrobe Layout",
    category: "Interiors" as Category,
    type: "Bedroom interior",
    location: "Bhubaneswar",
    image: "/assets/modern-suite-wardrobe.webp",
    shape: "standard",
    description:
      "Clean interior detailing with a textured accent wall and seamless custom wooden wardrobe.",
  },
  {
    title: "Master Bed Space with Ambient Lighting",
    category: "Interiors" as Category,
    type: "Bedroom interior",
    location: "Bhubaneswar",
    image: "/assets/master-bed-ambient-lighting.webp",
    shape: "standard",
    description:
      "Warm strip lighting, wooden panelling and botanical art compose a calm master bedroom.",
  },
  {
    title: "Cozy Lounge & Seating Nook",
    category: "Interiors" as Category,
    type: "Interior styling",
    location: "Bhubaneswar",
    image: "/assets/cozy-lounge-seating.webp",
    shape: "wide",
    description:
      "Comfortable leather seating paired with warm joinery, pendant light and minimal bedside cabinetry.",
  },
  {
    title: "Contemporary Multi-Storey Elevation",
    category: "Architecture" as Category,
    type: "Residential elevation",
    location: "Bhubaneswar",
    image: "/assets/contemporary-multistorey-elevation.webp",
    shape: "tall",
    description:
      "A modern residential exterior articulated with wooden louvers, balconies and lush greenery.",
  },
  {
    title: "Minimalist Bedroom & Ceiling Setup",
    category: "Interiors" as Category,
    type: "Bedroom interior",
    location: "Bhubaneswar",
    image: "/assets/minimalist-bedroom-ceiling.webp",
    shape: "standard",
    description:
      "A restrained bedroom composition with false ceiling, wooden fan and warm pendant lighting.",
  },
  {
    title: "Walk-in Wardrobe & Vanity Area",
    category: "Interiors" as Category,
    type: "Custom storage",
    location: "Bhubaneswar",
    image: "/assets/walk-in-wardrobe-vanity.webp",
    shape: "standard",
    description:
      "Functional storage planning with sliding wooden wardrobes and a dedicated dressing area.",
  },
  {
    title: "Warm Accent Lighting Design",
    category: "Interiors" as Category,
    type: "Lighting & joinery",
    location: "Bhubaneswar",
    image: "/assets/warm-accent-lighting.webp",
    shape: "wide",
    description:
      "Profile lighting within wardrobe units brings depth and warmth to cohesive wooden textures.",
  },
];

export default function ProjectGrid() {
  const [active, setActive] = useState<Category>("All");
  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section className="project-browser section-pad" aria-labelledby="project-list-title">
      <h2 className="sr-only" id="project-list-title">Official project portfolio</h2>
      <div className="filter-row" role="group" aria-label="Filter project portfolio">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
            <span>
              {category === "All"
                ? projects.length
                : projects.filter((project) => project.category === category).length}
            </span>
          </button>
        ))}
      </div>

      <div className="projects-grid" aria-live="polite">
        {visible.map((project, index) => (
          <article className={`project-card ${project.shape}`} key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} by anthrop`} />
              <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="project-view" aria-hidden="true">Official work</span>
            </div>
            <div className="project-card-copy">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category} · Official portfolio</p>
              </div>
              <div>
                <p>{project.type}</p>
                <p>{project.location}</p>
              </div>
            </div>
            <p className="project-summary">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
