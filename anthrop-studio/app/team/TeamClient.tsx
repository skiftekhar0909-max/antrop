"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import TextReveal from "../components/animations/TextReveal";
import TiltCard from "../components/animations/TiltCard";
import ArchitecturalTicker from "../components/ArchitecturalTicker";
import ArchitecturalTeamMotion from "../components/ArchitecturalTeamMotion";

interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  credentials: string;
  image: string;
  bio: string;
  keywords: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Ar. Rahul Sharma",
    role: "Principal Architect",
    discipline: "Planning & Architecture",
    credentials: "COA Reg. · B.Arch (SPA) · 15+ Yrs Exp.",
    image: "/assets/contemporary-multistorey-elevation.webp",
    bio: "Pioneering climate-responsive masterplans and contemporary residential elevations in Bhubaneswar with rigorous structural geometry and human-scale proportions.",
    keywords: ["Master Planning", "Villa Elevations", "Zoning Strategy", "Sustainable Facades"],
  },
  {
    name: "Priya Desai",
    role: "Lead Interior Designer",
    discipline: "Interior Architecture",
    credentials: "M.Des Interior Architecture · 12+ Yrs Exp.",
    image: "/assets/modern-suite-wardrobe.webp",
    bio: "Specializes in tactile, atmospheric interiors shaped through natural teak woodwork, integrated ambient lighting, custom joinery, and tailored spatial flow.",
    keywords: ["Luxury Residential", "Custom Joinery", "Ambient Lighting", "Material Curation"],
  },
  {
    name: "Vikram Singh",
    role: "Landscape Architect",
    discipline: "Landscape Architecture",
    credentials: "M.Arch Landscape · 10+ Yrs Exp.",
    image: "/assets/luxury-villa-facade.webp",
    bio: "Integrates living ecosystems, native Odisha flora, rainwater permeability, and microclimate shading that seamlessly bridge architectural envelopes with natural terrain.",
    keywords: ["Biophilic Design", "Topographical Shading", "Native Planting", "Courtyard Ecology"],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function TeamClient() {
  return (
    <main id="main-content" className="page-pad">
      <motion.section
        className="section-pad"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{
          paddingTop: "clamp(2rem, 4vw, 4rem)",
          paddingBottom: "clamp(5rem, 8vw, 8rem)",
        }}
      >
        {/* Header Section with Generous Spacing */}
        <div className="section-heading max-w-4xl" style={{ marginBottom: "clamp(2.5rem, 4.5vw, 4rem)" }}>
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-600 inline-block" />
            <p className="eyebrow" style={{ color: "var(--orange)" }}>
              Leadership & Studio Expertise · Bhubaneswar
            </p>
          </motion.div>
          <TextReveal elementType="h1" text="Meet Our Architectural & Design Team" delay={0.1} />
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--muted)", maxWidth: "720px" }}
          >
            A multidisciplinary collective of licensed architects, interior spatial designers, and landscape planners
            shaping enduring residential and commercial spaces across Odisha.
          </motion.p>
        </div>

        {/* Studio Practice Standards Motion Graphic */}
        <ArchitecturalTeamMotion />

        {/* Team Members Grid with Generous Spacing */}
        <div
          className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12"
          style={{ gap: "clamp(2.5rem, 4.5vw, 4rem)" }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="team-card flex flex-col justify-between bg-white rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(32, 35, 31, 0.09)",
                boxShadow: "0 14px 40px -10px rgba(0, 0, 0, 0.07)",
                padding: "clamp(1.5rem, 2.5vw, 2.2rem)",
              }}
              variants={fadeUp}
            >
              <TiltCard intensity={10}>
                {/* Portrait Container */}
                <div
                  className="team-image-wrapper relative overflow-hidden rounded-xl w-full"
                  style={{
                    aspectRatio: "4 / 4.8",
                    background: "var(--paper-deep)",
                  }}
                >
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role} at anthrop architecture studio Bhubaneswar`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-white/90">
                    {member.discipline}
                  </div>
                </div>
              </TiltCard>

              {/* Team Member Meta with Generous Breathing Room */}
              <div className="team-meta" style={{ marginTop: "1.75rem", textAlign: "left" }}>
                {/* Role Pill */}
                <div className="mb-3">
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--orange)",
                      background: "rgba(200, 95, 47, 0.1)",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                      border: "1px solid rgba(200, 95, 47, 0.25)",
                    }}
                  >
                    {member.role}
                  </span>
                </div>

                {/* Member Name */}
                <h3
                  className="text-2xl md:text-3xl font-medium tracking-tight"
                  style={{
                    fontFamily: "var(--serif)",
                    color: "var(--ink)",
                    lineHeight: 1.25,
                    marginBottom: "0.5rem",
                  }}
                >
                  {member.name}
                </h3>

                {/* Credentials */}
                <p
                  className="font-mono text-xs font-semibold"
                  style={{ color: "var(--olive)", marginBottom: "1rem" }}
                >
                  {member.credentials}
                </p>

                {/* Bio Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--muted)", lineHeight: 1.75 }}
                >
                  {member.bio}
                </p>

                {/* SEO Keyword Chips */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                  {member.keywords.map((kw) => (
                    <span
                      key={kw}
                      style={{
                        fontSize: "0.66rem",
                        padding: "0.22rem 0.55rem",
                        borderRadius: "6px",
                        background: "var(--paper)",
                        color: "var(--ink)",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Kinetic Architectural Ticker */}
      <ArchitecturalTicker />

      {/* Team Consultation CTA Section */}
      <section
        className="section-pad py-20 text-center"
        style={{
          background: "var(--paper-deep)",
          marginTop: "clamp(4rem, 6vw, 6rem)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow mb-3" style={{ color: "var(--orange)" }}>
            Collaborate With Us
          </p>
          <h2
            className="text-3xl md:text-4xl font-normal mb-4"
            style={{ fontFamily: "var(--serif)", color: "var(--ink)" }}
          >
            Ready to discuss your space with our team?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every project begins with a 1-on-1 studio consultation with our principal architects and lead interior
            designers at our Bhubaneswar studio.
          </p>
          <Link className="button button-dark" href="/contact">
            Schedule a Studio Consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
