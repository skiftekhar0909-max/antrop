"use client";

import { motion } from "framer-motion";

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
  return (
    <main id="main-content" className="page-pad">
      <section className="section-pad">
        <div className="section-heading">
          <p className="eyebrow">Our People</p>
          <h1>The Team</h1>
          <p>Meet the designers and architects shaping Anthrop Studio.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover="hover"
            >
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} />
                <motion.div 
                  className="team-hover-overlay"
                  variants={{
                    hover: { opacity: 1 }
                  }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{member.bio}</p>
                </motion.div>
              </div>
              <div className="team-meta">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
