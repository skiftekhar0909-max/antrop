"use client";

import { motion, Variants } from "framer-motion";
import TextReveal from "../components/animations/TextReveal";
import TiltCard from "../components/animations/TiltCard";

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
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main id="main-content" className="page-pad min-h-screen">
      <section className="section-pad">
        <motion.div 
          className="section-heading text-center mb-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="eyebrow">How We Work</motion.p>
          <TextReveal elementType="h1" text="The Process" delay={0.1} />
          <motion.p variants={fadeUp} className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach to transforming ideas into tangible spaces.
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>
          {steps.map((step, index) => (
            <motion.div 
              key={step.phase}
              className={`flex flex-col md:flex-row items-center justify-between mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 },
                show: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <div className="w-full md:w-[45%]">
                <TiltCard intensity={8}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
                    <span className="text-gray-400 text-sm tracking-widest uppercase font-bold">{step.phase}</span>
                    <h2 className="text-3xl mt-4 mb-4 font-medium">{step.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </TiltCard>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
