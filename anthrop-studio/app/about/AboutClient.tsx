"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import TextReveal from "../components/animations/TextReveal";
import TiltCard from "../components/animations/TiltCard";
import ArchitecturalTicker from "../components/ArchitecturalTicker";
import ArchitecturalTectonicsMotion from "../components/ArchitecturalTectonicsMotion";

export default function AboutClient() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.16 },
    },
  };

  return (
    <main id="main-content" className="page-pad">
      {/* Studio Philosophy Intro */}
      <motion.section
        className="section-pad"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{
          paddingTop: "clamp(3rem, 5vw, 5rem)",
          paddingBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <div className="section-heading">
          <motion.p variants={fadeUp} className="eyebrow" style={{ color: "var(--orange)" }}>
            Our Studio · Bhubaneswar, Odisha
          </motion.p>
          <TextReveal elementType="h1" text="Philosophy & Vision" delay={0.15} />
        </div>
        <div className="content-grid mt-12 items-center">
          <motion.div className="copy-block" variants={fadeUp}>
            <TextReveal elementType="h2" text="Designing from the outside in." />
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              At anthrop Studio, we believe that the best spaces are those that respond intuitively to their environment.
              Our philosophy is rooted in a deep appreciation for context, climate, and the human experience. We craft
              spaces that are not just visually stunning but functionally resonant and thermally intelligent.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Since our inception, we have bridged the gap between traditional Odisha craftsmanship—dressing local stone,
              curating teak millwork, embracing courtyards—and modern architectural innovation. Every project is a
              measured dialogue between the site&apos;s natural characteristics and our client&apos;s personal aspirations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-gray-200">
              <div>
                <span className="block font-mono text-2xl font-bold text-gray-900">57+</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-mono">Commissions Completed</span>
              </div>
              <div className="w-px h-12 bg-gray-200 mx-2" />
              <div>
                <span className="block font-mono text-2xl font-bold text-gray-900">4.9 ★</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-mono">Client Rating</span>
              </div>
              <div className="w-px h-12 bg-gray-200 mx-2" />
              <div>
                <span className="block font-mono text-2xl font-bold text-gray-900">IS:962</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-mono">NBC Standard</span>
              </div>
            </div>
          </motion.div>

          <motion.figure className="image-block" variants={fadeUp}>
            <TiltCard intensity={8}>
              <div
                className="overflow-hidden block w-full relative"
                style={{
                  borderRadius: "20px",
                  height: "560px",
                  boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  src="/assets/minimalist-bedroom-ceiling.webp"
                  alt="Minimalist interior space showcasing anthrop design aesthetic"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </TiltCard>
          </motion.figure>
        </div>
      </motion.section>

      {/* Purposeful Architectural Tectonics & Microclimate Motion Graphic */}
      <section className="section-pad">
        <ArchitecturalTectonicsMotion />
      </section>

      {/* Kinetic Architectural Ticker */}
      <ArchitecturalTicker />

      {/* Aesthetic Approach Section with Generous Spacious Padding */}
      <motion.section
        className="section-pad aesthetic-section bg-light"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{
          marginTop: "clamp(5rem, 8vw, 8rem)",
          paddingTop: "clamp(6rem, 10vw, 10rem)",
          paddingBottom: "clamp(6rem, 10vw, 10rem)",
        }}
      >
        <div className="section-heading mb-16 max-w-3xl">
          <motion.p variants={fadeUp} className="eyebrow mb-4" style={{ color: "var(--orange)" }}>
            Design Philosophy · Form & Proportion
          </motion.p>
          <TextReveal elementType="h2" text="Our Aesthetic Approach" />
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg"
            style={{ color: "var(--muted)", lineHeight: 1.8 }}
          >
            A disciplined synthesis of material authenticity, climate-responsive orientation, and enduring spatial proportion.
            Every line drawn serves human well-being and natural harmony.
          </motion.p>
        </div>

        <div className="grid-3" style={{ marginTop: "clamp(3rem, 5vw, 4.5rem)", gap: "clamp(2rem, 3.5vw, 3rem)" }}>
          {[
            {
              number: "01",
              tag: "Material Honesty",
              title: "Raw & Authentic Textures",
              text: "We celebrate the honest beauty of natural materials—teak wood, dressed stone, warm lime plaster, and brushed metal that weather gracefully with time.",
              keywords: ["Natural Teak", "Stone Masonry", "Patina Finishes", "Tactile Surfaces"],
            },
            {
              number: "02",
              tag: "Spatial Flow",
              title: "Intuitive Movement & Light",
              text: "Our architectural layouts prioritize daylight optimization, natural cross-ventilation, and seamless transitions between indoor living and garden landscapes.",
              keywords: ["Daylight Optimization", "Courtyard Circulation", "Biophilic Buffers", "Zoned Privacy"],
            },
            {
              number: "03",
              tag: "Timeless Restraint",
              title: "Enduring Architectural Form",
              text: "We avoid fleeting aesthetic gimmicks, grounding every volume in classical proportion, purposeful geometry, and climate resilience engineered for Odisha.",
              keywords: ["Proportional Harmony", "Climate Resilience", "Bespoke Joinery", "Sustainable Longevity"],
            },
          ].map((feature) => (
            <motion.div
              key={feature.number}
              className="feature-card rounded-2xl bg-white"
              style={{
                padding: "clamp(2rem, 3.5vw, 3rem)",
                border: "1px solid rgba(32, 35, 31, 0.08)",
                boxShadow: "0 12px 36px -8px rgba(0, 0, 0, 0.06)",
              }}
              variants={fadeUp}
            >
              <TiltCard intensity={8}>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.75rem",
                      color: "var(--orange)",
                      fontWeight: 700,
                    }}
                  >
                    {feature.number}
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      fontWeight: 600,
                    }}
                  >
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-normal mb-4" style={{ fontFamily: "var(--serif)", color: "var(--ink)" }}>
                  {feature.title}
                </h3>
                <p className="mb-6 leading-relaxed" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
                  {feature.text}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {feature.keywords.map((kw) => (
                    <span
                      key={kw}
                      style={{
                        fontSize: "0.65rem",
                        padding: "0.25rem 0.6rem",
                        borderRadius: "9999px",
                        background: "var(--paper)",
                        color: "var(--olive-dark)",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Studio Consultation CTA Banner */}
      <section
        className="section-pad py-20 text-center rounded-3xl"
        style={{
          background: "var(--paper-deep)",
          marginTop: "clamp(4rem, 6vw, 6rem)",
          marginBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow mb-3" style={{ color: "var(--orange)" }}>
            Partner With anthrop
          </p>
          <h2 className="text-3xl sm:text-4xl font-normal mb-4" style={{ fontFamily: "var(--serif)" }}>
            Experience our architecture first-hand.
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Visit our studio at DN Oxypark, Bhubaneswar to inspect material mockups, view physical models, and discuss
            your project.
          </p>
          <Link className="button button-dark" href="/contact">
            Schedule a Studio Consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
