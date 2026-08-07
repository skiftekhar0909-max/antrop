"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

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
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main id="main-content">
      <section className="hero" id="top">
        <motion.div className="hero-image" aria-hidden="true" style={{ y: yHero }}>
          <img
            src="/assets/luxury-villa-facade.webp"
            alt=""
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
            Planning · Interiors · Landscape
          </motion.p>
          <motion.h1 variants={fadeUp}>
            Form, space,
            <br />
            and nature.
            <br />
            <em>Crafted elegantly.</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-intro">
            anthrop shapes contemporary spaces in Bhubaneswar where architecture,
            interiors and landscape speak one coherent language.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions">
            <Link className="button button-light" href="/projects">
              Explore selected work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link text-link-light" href="/contact">
              Begin a project <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>
        <div className="hero-index">
          <span>20.29° N</span>
          <span>85.82° E</span>
          <span>Bhubaneswar, Odisha</span>
        </div>
        <p className="image-caption">Luxury Villa Facade · Residential Architecture</p>
      </section>

      <section className="statement section-pad">
        <div className="statement-kicker">
          <span className="orange-dot" />
          <p>One studio. Three disciplines.</p>
        </div>
        <motion.p 
          className="statement-copy reveal"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          We design from the outside in—and the inside out. Every project begins
          with context, follows human movement, and ends in a space that feels
          inevitable.
        </motion.p>
      </section>

      <section className="pillars section-pad">
        <div className="section-heading">
          <p className="eyebrow">What we shape</p>
          <h2>An integrated design practice.</h2>
        </div>
        <motion.div 
          className="pillar-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar) => (
            <motion.div variants={fadeUp} key={pillar.number}>
              <Link className="pillar-card reveal" href={pillar.href}>
                <div className="pillar-top">
                  <span>{pillar.number}</span>
                  <span className="round-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="selected-work">
        <div className="work-copy section-pad">
          <p className="eyebrow">Selected completed work</p>
          <h2>Spaces with a point of view.</h2>
          <p>
            From bespoke bedroom interiors to contemporary residential facades,
            our official portfolio balances material warmth with rigorous planning.
          </p>
          <Link className="text-link" href="/projects">
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <Link className="feature-project reveal" href="/projects">
          <motion.img
            style={{ y: yBg }}
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
        <div className="actual-work-heading">
          <div>
            <p className="eyebrow">From the official portfolio</p>
            <h2>Detail you can see.<br />Comfort you can feel.</h2>
          </div>
          <p>
            Warm wood, layered lighting and carefully resolved storage turn
            everyday rooms into calm, cohesive living environments.
          </p>
        </div>
        <div className="actual-work-grid">
          <motion.figure 
            className="actual-work-wide reveal"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <img
              src="/assets/master-bed-ambient-lighting.webp"
              alt="Master bedroom with ambient strip lighting, warm wooden panelling and botanical artwork"
            />
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
            <img
              src="/assets/contemporary-multistorey-elevation.webp"
              alt="Contemporary multi-storey residential facade with balconies and greenery"
            />
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
        <div className="section-heading process-heading">
          <p className="eyebrow">How we work</p>
          <h2>Curious first. Precise always.</h2>
        </div>
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

      <section className="home-cta">
        <div>
          <p className="eyebrow">Have a space in mind?</p>
          <h2>Let&apos;s make it feel unmistakably yours.</h2>
        </div>
        <Link className="circle-cta" href="/contact" aria-label="Book a consultation">
          <span>Book a consultation</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
