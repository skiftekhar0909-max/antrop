"use client";

import { motion } from "framer-motion";

const steps = [
  {
    phase: "Phase 01",
    title: "Discovery & Briefing",
    description: "We start by understanding your lifestyle, needs, and vision. We visit the site to analyze the context, climate, and topography.",
  },
  {
    phase: "Phase 02",
    title: "Concept Design",
    description: "Translating the brief into spatial concepts. We explore layouts, massing, and initial material palettes to establish the design language.",
  },
  {
    phase: "Phase 03",
    title: "Design Development",
    description: "Refining the design with precise detailing. We create 3D visualizations and finalize all finishes, fixtures, and custom elements.",
  },
  {
    phase: "Phase 04",
    title: "Documentation",
    description: "Producing comprehensive construction drawings and specifications to ensure the design is executed accurately on site.",
  },
  {
    phase: "Phase 05",
    title: "Construction Observation",
    description: "We coordinate with contractors and artisans, conducting site visits to oversee quality and ensure the vision is realized flawlessly.",
  },
];

export default function ProcessPage() {
  return (
    <main id="main-content" className="page-pad">
      <section className="section-pad">
        <div className="section-heading text-center">
          <p className="eyebrow">How We Work</p>
          <h1>The Process</h1>
          <p>A structured approach to transforming ideas into tangible spaces.</p>
        </div>
        
        <div className="timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={step.phase}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="timeline-content">
                <span className="timeline-phase">{step.phase}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
