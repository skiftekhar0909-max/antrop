"use client";

import { motion, Variants } from "framer-motion";
import TextReveal from "../components/animations/TextReveal";
import TiltCard from "../components/animations/TiltCard";

const teamMembers = [
  {
    name: "Ar. Rahul Sharma",
    role: "Principal Architect",
    image: "/assets/cozy-lounge-seating.webp", // Placeholder
    bio: "With over 15 years of experience in contextual architecture.",
  },
  {
    name: "Priya Desai",
    role: "Lead Interior Designer",
    image: "/assets/modern-suite-wardrobe.webp", // Placeholder
    bio: "Specializes in tactile, atmospheric interiors and bespoke furniture.",
  },
  {
    name: "Vikram Singh",
    role: "Landscape Architect",
    image: "/assets/warm-accent-lighting.webp", // Placeholder
    bio: "Integrates living systems and native planting into built environments.",
  },
];

export default function TeamPage() {
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
    <main id="main-content" className="page-pad">
      <motion.section 
        className="section-pad"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="section-heading mb-16">
          <motion.p variants={fadeUp} className="eyebrow">Our People</motion.p>
          <TextReveal elementType="h1" text="The Team" delay={0.1} />
          <motion.p variants={fadeUp} className="mt-4 text-xl text-gray-600">
            Meet the designers and architects shaping Anthrop Studio.
          </motion.p>
        </div>
        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="team-card relative group"
              variants={fadeUp}
            >
              <TiltCard intensity={15}>
                <div className="team-image-wrapper relative overflow-hidden rounded-xl h-[500px]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="team-hover-overlay absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                    <p className="text-white text-lg">{member.bio}</p>
                  </div>
                </div>
              </TiltCard>
              <div className="team-meta mt-6 text-center">
                <h3 className="text-2xl font-medium">{member.name}</h3>
                <p className="text-gray-500 mt-2">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
