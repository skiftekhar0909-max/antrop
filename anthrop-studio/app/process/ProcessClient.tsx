"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import TextReveal from "../components/animations/TextReveal";
import TiltCard from "../components/animations/TiltCard";
import ArchitecturalTicker from "../components/ArchitecturalTicker";
import ArchitecturalProcessMotion from "../components/ArchitecturalProcessMotion";

const steps = [
  {
    phase: "Phase 01",
    title: "Discovery & Site Topography",
    description:
      "We begin by understanding your lifestyle, functional rituals, and aesthetic dreams. We conduct on-site topographical analysis in Bhubaneswar or across Odisha, evaluating solar azimuths, soil strata, prevailing breeze corridors, and municipal BDA bylaws.",
    deliverables: ["Site Microclimate Study", "BDA Regulatory Assessment", "Spatial Brief & Program Matrix"],
  },
  {
    phase: "Phase 02",
    title: "Concept Design & Massing",
    description:
      "Translating the brief into sculptured spatial forms. We explore courtyard daylighting, volumetric massing, cross-ventilation axes, and initial material palettes to establish a cohesive, enduring architectural language.",
    deliverables: ["Volumetric Massing Models", "Courtyard Spatial Layouts", "Initial Moodboards & Textures"],
  },
  {
    phase: "Phase 03",
    title: "Design Development & 3D Reality",
    description:
      "Refining the architecture with millimeter-accurate detailing. We generate photorealistic 3D visualizations, finalize custom teak joinery, design ambient lighting scenes, and coordinate structural MEP rough-ins.",
    deliverables: ["High-Fidelity 3D Renders", "Custom Joinery Details", "Lighting & Lux Calculations"],
  },
  {
    phase: "Phase 04",
    title: "Precision CAD Documentation",
    description:
      "Producing comprehensive, exhaustive construction packages and detail specifications. Every junction, shadow reveal, and stone coping is documented to eliminate ambiguity and prevent on-site discrepancies.",
    deliverables: ["1:20 Construction Details", "Structural Coordination", "Comprehensive BOQ & Specs"],
  },
  {
    phase: "Phase 05",
    title: "Construction Observation & Handover",
    description:
      "Architecture lives in its physical execution. We coordinate with master masons, carpenters, and contractors through structured bi-weekly site reviews to ensure flawless fidelity to the envisioned design.",
    deliverables: ["Bi-Weekly Quality Audits", "Mockup Sign-Offs", "Defect-Free Final Commissioning"],
  },
];

export default function ProcessClient() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  return (
    <main id="main-content" className="page-pad min-h-screen">
      {/* Intro Header */}
      <section
        className="section-pad"
        style={{
          paddingTop: "clamp(3rem, 5vw, 5rem)",
          paddingBottom: "clamp(2rem, 4vw, 3.5rem)",
        }}
      >
        <motion.div
          className="section-heading text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="eyebrow" style={{ color: "var(--orange)" }}>
            Methodology · From Site to Built Reality
          </motion.p>
          <TextReveal elementType="h1" text="The Architectural Process" delay={0.1} />
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            A disciplined, five-stage framework that transforms abstract human aspirations into enduring, climate-responsive
            spaces in Bhubaneswar and beyond.
          </motion.p>
        </motion.div>

        {/* Purposeful Interactive CAD Lifecycle Simulator Motion Graphic */}
        <ArchitecturalProcessMotion />
      </section>

      {/* Kinetic Architectural Ticker */}
      <ArchitecturalTicker />

      {/* Detailed Chronological Phase Cards with Spacious Breathing Room */}
      <section
        className="section-pad"
        style={{
          paddingTop: "clamp(4rem, 7vw, 7rem)",
          paddingBottom: "clamp(6rem, 10vw, 10rem)",
        }}
      >
        <div className="section-heading text-center mb-16">
          <p className="eyebrow" style={{ color: "var(--orange)" }}>
            Chronological Workflow
          </p>
          <h2 className="text-3xl sm:text-4xl font-normal" style={{ fontFamily: "var(--serif)" }}>
            Every Milestone, Mapped & Measured
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Central Progress Line */}
          <div
            className="absolute left-1/2 top-4 bottom-4 w-px transform -translate-x-1/2 hidden md:block"
            style={{
              background: "linear-gradient(to bottom, var(--orange), rgba(200, 95, 47, 0.2) 90%, transparent)",
            }}
          />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.phase}
                className={`flex flex-col md:flex-row items-center justify-between mb-20 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: { opacity: 0, x: isEven ? -60 : 60, y: 40 },
                  show: { opacity: 1, x: 0, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <div className="w-full md:w-[46%]">
                  <TiltCard intensity={6}>
                    <div
                      className="bg-white rounded-2xl p-8 sm:p-10 relative overflow-hidden"
                      style={{
                        border: "1px solid rgba(32, 35, 31, 0.08)",
                        boxShadow: "0 12px 35px -10px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                        <span
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: "0.75rem",
                            color: "var(--orange)",
                            fontWeight: 700,
                          }}
                        >
                          {step.phase}
                        </span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">
                          Phase 0{index + 1}
                        </span>
                      </div>

                      <h3
                        className="text-2xl font-normal mb-3"
                        style={{ fontFamily: "var(--serif)", color: "var(--ink)" }}
                      >
                        {step.title}
                      </h3>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="pt-4 border-t border-gray-100">
                        <span className="text-[11px] uppercase tracking-wider font-mono text-gray-400 block mb-2 font-semibold">
                          Stage Output:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((d) => (
                            <span
                              key={d}
                              className="text-xs px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200/80 text-gray-700 font-medium"
                            >
                              ✓ {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>

                {/* Central Step Marker Node */}
                <div
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md items-center justify-center"
                  style={{ background: "var(--orange)" }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Action CTA Banner */}
      <section
        className="section-pad py-20 text-center rounded-3xl"
        style={{
          background: "var(--paper-deep)",
          marginBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow mb-3" style={{ color: "var(--orange)" }}>
            Ready to Begin?
          </p>
          <h2 className="text-3xl sm:text-4xl font-normal mb-4" style={{ fontFamily: "var(--serif)" }}>
            Let&apos;s start with Phase 01: Discovery.
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Schedule an exploratory consultation at our DN Oxypark studio to map your site, discuss your budget, and plan
            your project roadmap.
          </p>
          <Link className="button button-dark" href="/contact">
            Schedule a Studio Discovery Session <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
