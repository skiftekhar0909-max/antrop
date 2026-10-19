import type { Metadata } from "next";
import Link from "next/link";
import ArchitecturalTicker from "../components/ArchitecturalTicker";
import ArchitecturalServicesMotion from "../components/ArchitecturalServicesMotion";

export const metadata: Metadata = {
  title: "Services — Architectural Planning, Interior Architecture & Landscape | anthrop Studio",
  description:
    "Explore anthrop studio's core architectural planning, bespoke residential interior architecture, and biophilic landscape design services in Bhubaneswar, Odisha.",
  keywords: [
    "architectural planning services",
    "interior architecture Bhubaneswar",
    "landscape design Odisha",
    "residential floor plans",
    "luxury villa facade architecture",
    "bespoke joinery services",
  ],
  openGraph: {
    title: "Services — Architectural Planning, Interiors & Landscape | anthrop Studio",
    description:
      "One vision, resolved at every scale. Discover anthrop's three integrated disciplines: Architectural Planning, Interior Architecture, and Biophilic Landscape in Odisha.",
    url: "https://anthropstudio.com/services",
    type: "website",
  },
};

const serviceSections = [
  {
    id: "planning",
    number: "01",
    title: "Architectural Planning",
    lead: "Clarity before complexity.",
    copy: "We turn ambition, regulations and site realities into an intelligent spatial framework. The result is architecture that feels generous, performs efficiently and stays coherent as the project develops.",
    image: "/assets/contemporary-multistorey-elevation.webp",
    alt: "Contemporary multi-storey residential elevation by anthrop",
    capabilities: [
      "Site analysis & feasibility",
      "Space planning & optimization",
      "Zoning and circulation strategy",
      "Concept plans & massing",
      "Smart city design consulting",
      "Design development coordination",
    ],
  },
  {
    id: "interiors",
    number: "02",
    title: "Interior Architecture",
    lead: "Atmosphere, built from detail.",
    copy: "From the room’s first gesture to the warmth of a handrail, we compose interiors as complete experiences. Materials, furniture, colour and light are developed together—not added as decoration later.",
    image: "/assets/executive-bedroom-tv-console.webp",
    alt: "Executive bedroom interior with custom wooden TV console by anthrop",
    capabilities: [
      "Spatial concepts & mood direction",
      "Material and colour palettes",
      "Custom furniture integration",
      "Ambient & task lighting strategy",
      "Detailed interior layouts",
      "Vendor and design coordination",
    ],
  },
  {
    id: "landscape",
    number: "03",
    title: "Landscape Architecture",
    lead: "Nature as living infrastructure.",
    copy: "Landscape is where architecture meets climate. We create shaded, biodiverse and water-conscious outdoor environments that change beautifully through the day and across seasons.",
    image: "/assets/luxury-villa-facade.webp",
    alt: "Luxury villa facade with integrated planting by anthrop",
    capabilities: [
      "Landscape master planning",
      "Native planting strategies",
      "Courtyards & hospitality gardens",
      "Water bodies and rain gardens",
      "Hardscape and exterior detailing",
      "Climate-responsive outdoor design",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-hero services-hero section-pad">
        <div>
          <p className="eyebrow" style={{ color: "var(--orange)" }}>Capabilities · Integrated Disciplines</p>
          <h1>One vision,<br /><em>resolved at every scale.</em></h1>
        </div>
        <div className="page-intro">
          <p>
            Our three disciplines work as one. This keeps planning decisions,
            interior atmosphere and the landscape experience connected from the
            first sketch.
          </p>
        </div>
      </section>

      {/* Interactive CAD Discipline Simulation Motion Graphic */}
      <section className="section-pad">
        <ArchitecturalServicesMotion />
      </section>

      <nav className="services-index section-pad" aria-label="Service sections">
        {serviceSections.map((service) => (
          <a href={`#${service.id}`} key={service.id}>
            <span>{service.number}</span>
            {service.title}
            <span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>

      <div className="services-list">
        {serviceSections.map((service) => (
          <section className="service-detail section-pad" id={service.id} key={service.id}>
            <div className="service-image reveal">
              <img src={service.image} alt={service.alt} />
              <span>{service.number} / 03</span>
            </div>
            <div className="service-copy">
              <p className="eyebrow">{service.number} · {service.title}</p>
              <h2>{service.lead}</h2>
              <p className="service-description">{service.copy}</p>
              <div className="capability-list">
                <p>Typical scope</p>
                <ul>
                  {service.capabilities.map((capability) => (
                    <li key={capability}>
                      <span aria-hidden="true">—</span> {capability}
                    </li>
                  ))}
                </ul>
              </div>
              <Link className="text-link" href="/contact">
                Discuss this service <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        ))}
      </div>

      <ArchitecturalTicker />

      <section className="service-approach section-pad">
        <p className="eyebrow" style={{ color: "var(--orange)" }}>A collaborative process</p>
        <blockquote>
          “Good design is not a style applied to a space. It is the clearest
          response to people, place and possibility.”
        </blockquote>
        <Link className="button button-light" href="/contact">
          Book a studio consultation <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
