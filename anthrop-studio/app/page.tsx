"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import TextReveal from "./components/animations/TextReveal";
import MagneticButton from "./components/animations/MagneticButton";
import TiltCard from "./components/animations/TiltCard";

import ArchitecturalMotionGraphic from "./components/ArchitecturalMotionGraphic";
import ArchitecturalTicker from "./components/ArchitecturalTicker";
import ArchitecturalHeroOverlay from "./components/ArchitecturalHeroOverlay";

const pillars = [
  {
    number: "01",
    title: "Planning",
    text: "Clear spatial logic, climate-aware layouts and intelligent zoning that make every square foot work harder.",
    href: "/services#planning",
  },
  {
    number: "02",
    title: "Interior Design",
    text: "Tactile, atmospheric interiors shaped through material, light, furniture and the way people move.",
    href: "/services#interiors",
  },
  {
    number: "03",
    title: "Landscape",
    text: "Living systems that connect architecture to shade, water, native planting and the rhythm of seasons.",
    href: "/services#landscape",
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const yBgProject = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main id="main-content">
      <section className="hero" id="top" style={{ overflow: "hidden" }}>
        <ArchitecturalHeroOverlay />
        <motion.div className="hero-image" aria-hidden="true" style={{ y: yHero, scale: scaleHero }}>
          <img
            src="/assets/luxury-villa-facade.webp"
            alt="Luxury contemporary villa facade designed by anthrop studio in Bhubaneswar"
            fetchPriority="high"
          />
        </motion.div>
        <div className="hero-shade" />
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="eyebrow hero-eyebrow">
            Planning · Interiors · Landscape · Bhubaneswar
          </motion.p>
          <TextReveal elementType="h1" text="Form, space, and nature. Crafted elegantly." delay={0.4} />
          
          <motion.p variants={fadeUp} className="hero-intro mt-4">
            anthrop shapes contemporary spaces in Bhubaneswar where architecture,
            interiors and landscape speak one coherent language.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions">
            <MagneticButton>
              <Link className="button button-light" href="/projects">
                Explore selected work <span aria-hidden="true">↗</span>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link className="text-link text-link-light" href="/contact">
                Begin a project <span aria-hidden="true">→</span>
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-index"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <span>20.29° N</span>
          <span>85.82° E</span>
          <span>Bhubaneswar, Odisha</span>
        </motion.div>
        <motion.p 
          className="image-caption"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
        >
          Luxury Villa Facade · Residential Architecture
        </motion.p>
      </section>

      {/* Kinetic Architectural Keywords Motion Ribbon */}
      <ArchitecturalTicker />

      <motion.section 
        className="statement section-pad"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="statement-kicker">
          <span className="orange-dot" />
          <p>One studio. Three disciplines.</p>
        </motion.div>
        <TextReveal 
          className="statement-copy reveal" 
          elementType="p" 
          text="We design from the outside in—and the inside out. Every project begins with context, follows human movement, and ends in a space that feels inevitable." 
        />
      </motion.section>

      <section className="pillars section-pad">
        <motion.div 
          className="section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="eyebrow">What we shape</motion.p>
          <TextReveal elementType="h2" text="An integrated design practice." delay={0.2} />
        </motion.div>
        <motion.div 
          className="pillar-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar) => (
            <motion.div variants={fadeUp} key={pillar.number}>
              <TiltCard intensity={10}>
                <Link className="pillar-card reveal block" href={pillar.href}>
                  <div className="pillar-top">
                    <span>{pillar.number}</span>
                    <span className="round-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Purposeful Interactive Blueprint Motion Graphic */}
      <ArchitecturalMotionGraphic />

      <section className="selected-work">
        <motion.div 
          className="work-copy section-pad"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="eyebrow">Selected completed work</motion.p>
          <TextReveal elementType="h2" text="Spaces with a point of view." />
          <motion.p variants={fadeUp} className="mt-4">
            From bespoke bedroom interiors to contemporary residential facades,
            our official portfolio balances material warmth with rigorous planning.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6">
            <MagneticButton>
              <Link className="text-link" href="/projects">
                View all projects <span aria-hidden="true">→</span>
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
        <Link className="feature-project reveal overflow-hidden block" href="/projects">
          <motion.img
            style={{ y: yBgProject, scale: 1.1 }}
            src="/assets/executive-bedroom-tv-console.webp"
            alt="Executive bedroom with bespoke wooden TV console, mini bar and leather armchairs"
          />
          <div className="project-meta-on-image">
            <div>
              <span>Residential Interiors · Completed Work</span>
              <h3>Executive Bedroom</h3>
            </div>
            <span className="large-arrow" aria-hidden="true">↗</span>
          </div>
        </Link>
      </section>

      <section className="actual-work-showcase section-pad">
        <motion.div 
          className="actual-work-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div>
            <motion.p variants={fadeUp} className="eyebrow">From the official portfolio</motion.p>
            <TextReveal elementType="h2" text="Detail you can see. Comfort you can feel." delay={0.2} />
          </div>
          <motion.p variants={fadeUp}>
            Warm wood, layered lighting and carefully resolved storage turn
            everyday rooms into calm, cohesive living environments.
          </motion.p>
        </motion.div>
        <div className="actual-work-grid">
          <motion.figure 
            className="actual-work-wide reveal"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <TiltCard>
              <div className="overflow-hidden block w-full h-full relative" style={{ borderRadius: "12px" }}>
                <img
                  src="/assets/master-bed-ambient-lighting.webp"
                  alt="Master bedroom with ambient strip lighting, warm wooden panelling and botanical artwork"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </TiltCard>
            <figcaption>
              <span>01</span>
              <div>
                <strong>Master Bed Space with Ambient Lighting</strong>
                <small>Interior design · Bhubaneswar</small>
              </div>
            </figcaption>
          </motion.figure>
          <motion.figure 
            className="actual-work-tall reveal"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <TiltCard>
              <div className="overflow-hidden block w-full h-full relative" style={{ borderRadius: "12px" }}>
                <img
                  src="/assets/contemporary-multistorey-elevation.webp"
                  alt="Contemporary multi-storey residential facade with balconies and greenery"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </TiltCard>
            <figcaption>
              <span>02</span>
              <div>
                <strong>Contemporary Multi-Storey Elevation</strong>
                <small>Residential architecture · Bhubaneswar</small>
              </div>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="process section-pad">
        <motion.div 
          className="section-heading process-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="eyebrow">How we work</motion.p>
          <TextReveal elementType="h2" text="Curious first. Precise always." delay={0.2} />
        </motion.div>
        <motion.ol 
          className="process-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.li variants={fadeUp} className="reveal">
            <span>01</span>
            <h3>Listen</h3>
            <p>We uncover the brief beneath the brief—needs, rituals, constraints and ambition.</p>
          </motion.li>
          <motion.li variants={fadeUp} className="reveal">
            <span>02</span>
            <h3>Frame</h3>
            <p>Site, climate and movement become a clear spatial strategy before style enters.</p>
          </motion.li>
          <motion.li variants={fadeUp} className="reveal">
            <span>03</span>
            <h3>Shape</h3>
            <p>Plans, materials, light and planting evolve together through disciplined iteration.</p>
          </motion.li>
          <motion.li variants={fadeUp} className="reveal">
            <span>04</span>
            <h3>Realise</h3>
            <p>Detailed documentation and design coordination protect the original intent on site.</p>
          </motion.li>
        </motion.ol>
      </section>

      <motion.section 
        className="home-cta"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div>
          <motion.p variants={fadeUp} className="eyebrow">Have a space in mind?</motion.p>
          <TextReveal elementType="h2" text="Let's make it feel unmistakably yours." delay={0.2} />
        </div>
        <motion.div variants={fadeUp}>
          <MagneticButton strength={30}>
            <Link className="circle-cta" href="/contact" aria-label="Book a consultation">
              <span>Book a consultation</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.section>
    </main>
  );
}
