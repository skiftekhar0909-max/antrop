"use client";

import { motion, Variants } from "framer-motion";
import TextReveal from "../components/animations/TextReveal";
import TiltCard from "../components/animations/TiltCard";

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
        <div className="section-heading">
          <motion.p variants={fadeUp} className="eyebrow">Our Studio</motion.p>
          <TextReveal elementType="h1" text="Philosophy & Vision" delay={0.2} />
        </div>
        <div className="content-grid mt-12">
          <motion.div className="copy-block" variants={fadeUp}>
            <TextReveal elementType="h2" text="Designing from the outside in." />
            <p className="mt-6 text-lg">
              At Anthrop Studio, we believe that the best spaces are those that
              respond intuitively to their environment. Our philosophy is rooted
              in a deep appreciation for context, climate, and the human
              experience. We craft spaces that are not just visually stunning
              but functionally resonant.
            </p>
            <p className="mt-4 text-lg">
              Since our inception, we have strived to bridge the gap between
              traditional craftsmanship and modern architectural innovation. Every
              project is a dialogue between the site&apos;s natural characteristics
              and our client&apos;s unique aspirations.
            </p>
          </motion.div>
          <motion.figure className="image-block" variants={fadeUp}>
            <TiltCard intensity={10}>
              <div className="overflow-hidden block w-full h-full relative" style={{ borderRadius: "12px", height: "600px" }}>
                <img 
                  src="/assets/minimalist-bedroom-ceiling.webp" 
                  alt="Minimalist interior space showcasing our design aesthetic" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </TiltCard>
          </motion.figure>
        </div>
      </motion.section>

      <motion.section 
        className="section-pad bg-light mt-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="section-heading">
          <TextReveal elementType="h2" text="Our Aesthetic Approach" />
        </div>
        <div className="grid-3 mt-12">
          {[
            {
              title: "Material Honesty",
              text: "We celebrate the raw beauty of natural materials, allowing wood, stone, and metal to age gracefully."
            },
            {
              title: "Spatial Flow",
              text: "Our layouts are designed for intuitive movement, blurring the boundaries between interior and exterior spaces."
            },
            {
              title: "Timeless Elegance",
              text: "We avoid fleeting trends, focusing instead on enduring design principles that stand the test of time."
            }
          ].map((feature, i) => (
            <motion.div key={i} className="feature-card p-8 rounded-xl bg-white shadow-lg" variants={fadeUp}>
              <TiltCard intensity={8}>
                <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
