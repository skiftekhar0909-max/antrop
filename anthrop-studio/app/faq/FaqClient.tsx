"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";
import TextReveal from "../components/animations/TextReveal";
import ArchitecturalTicker from "../components/ArchitecturalTicker";
import ArchitecturalFaqMotion from "../components/ArchitecturalFaqMotion";

interface FAQItem {
  category: "process" | "timeline" | "regulations" | "materials";
  question: string;
  answer: string;
  keywords: string[];
}

const faqs: FAQItem[] = [
  {
    category: "process",
    question: "What is your typical architectural design process?",
    answer:
      "Our engagement follows a rigorous 5-stage framework: Discovery & Site Topography, Concept Massing, Design Development (3D renders & millwork detailing), Precision CAD Documentation (1:20 & 1:5 scale packages), and Construction Observation. You are actively consulted at every milestone before work moves forward.",
    keywords: ["5-Stage Framework", "Client Milestones", "CAD Blueprints"],
  },
  {
    category: "process",
    question: "Do you handle both architectural planning and interior architecture?",
    answer:
      "Yes, anthrop is a multidisciplinary architecture and interior studio. We believe architecture and interiors should never be separated—designing the facade, courtyards, natural daylight axes, and custom interior joinery simultaneously ensures unmatched spatial coherence and eliminates costly on-site clashes.",
    keywords: ["Integrated Disciplines", "Courtyard Daylighting", "Custom Joinery"],
  },
  {
    category: "timeline",
    question: "How long does a bespoke residential or villa project take from concept to handover?",
    answer:
      "A typical luxury residential commission ranges from 9 to 18 months. Design development, 3D modeling, and municipal BDA documentation usually take 10 to 14 weeks, followed by structured on-site construction and precision interior fit-out phases overseen by our architects.",
    keywords: ["9-18 Months", "10-14 Weeks Planning", "Site Handover"],
  },
  {
    category: "regulations",
    question: "Do you handle Bhubaneswar Development Authority (BDA) and municipal approvals?",
    answer:
      "Yes. All our architectural planning packages adhere strictly to the National Building Code (NBC-2016) and Odisha BDA statutory bylaws. We calculate exact FAR allowances, mandatory setbacks, parking norms, and fire egress routes, preparing clean technical submission drawings for seamless municipal sanction.",
    keywords: ["BDA Approval", "NBC-2016", "Setbacks & FAR"],
  },
  {
    category: "materials",
    question: "How do you select materials for Odisha's coastal and tropical climate?",
    answer:
      "We design climate-responsive envelopes specifically engineered for Odisha's high summer temperatures and monsoon humidity. We prioritize natural Khandolite and laterite stone, sustainably harvested Grade-1 Burma teak, ventilated wall cavities, and low-E double-glazed acoustic glazing to maintain comfortable indoor temperatures passively.",
    keywords: ["Burma Teak", "Khandolite Stone", "Cavity Insulation"],
  },
  {
    category: "timeline",
    question: "Where are you based, and do you take commissions outside Bhubaneswar?",
    answer:
      "Our studio is located at DN Oxypark, Dumduma, Bhubaneswar. While the majority of our portfolio spans Bhubaneswar, Cuttack, Puri, and coastal Odisha, we also take on select bespoke architectural residences and hospitality projects across eastern and central India.",
    keywords: ["DN Oxypark Studio", "Bhubaneswar & Cuttack", "National Commissions"],
  },
  {
    category: "materials",
    question: "Can we request custom furniture and millwork designed specifically for our home?",
    answer:
      "Absolutely. Bespoke millwork and custom furniture integration are central to our interior architecture discipline. We produce 1:5 fabrication drawings for master beds, fluted TV credenzas, floating vanities, and dining suites, executed with trusted master carpenters using authentic timber and brass hardware.",
    keywords: ["Custom Millwork", "1:5 Fabrication Sheets", "Master Carpenters"],
  },
];

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredFaqs =
    activeCategory === "all" ? faqs : faqs.filter((f) => f.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main id="main-content" className="page-pad min-h-screen">
      {/* Intro Header */}
      <section
        className="section-pad max-w-4xl mx-auto text-center"
        style={{
          paddingTop: "clamp(3rem, 5vw, 5rem)",
          paddingBottom: "clamp(1rem, 2vw, 2rem)",
        }}
      >
        <p className="eyebrow" style={{ color: "var(--orange)" }}>
          Clarity & Guidelines · Common Inquiries
        </p>
        <TextReveal elementType="h1" text="Frequently Asked Questions" delay={0.1} />
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about partnering with anthrop studio—from our 5-phase workflow and BDA statutory
          approvals to material selection and timeline expectations.
        </p>
      </section>

      {/* Purposeful Engagement Integrity Matrix Motion Graphic */}
      <section className="max-w-5xl mx-auto px-4">
        <ArchitecturalFaqMotion />
      </section>

      {/* Category Filter Chips */}
      <section className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "all", label: "All Questions" },
            { id: "process", label: "01. Process & Workflow" },
            { id: "timeline", label: "02. Timelines & Scope" },
            { id: "regulations", label: "03. Regulations & BDA" },
            { id: "materials", label: "04. Materials & Millwork" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className="px-4 py-2 rounded-full text-xs font-mono font-medium transition-all"
              style={{
                background: activeCategory === cat.id ? "var(--ink)" : "var(--paper-deep)",
                color: activeCategory === cat.id ? "#ffffff" : "var(--ink)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion List with Spacious Cards */}
      <section
        className="section-pad max-w-4xl mx-auto"
        style={{
          paddingBottom: "clamp(4rem, 7vw, 7rem)",
        }}
      >
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen ? "1px solid rgba(200, 95, 47, 0.4)" : "1px solid rgba(32, 35, 31, 0.08)",
                  boxShadow: isOpen
                    ? "0 14px 35px -8px rgba(0, 0, 0, 0.08)"
                    : "0 4px 15px -4px rgba(0, 0, 0, 0.03)",
                }}
                variants={fadeUp}
              >
                <button
                  type="button"
                  className="w-full flex justify-between items-center text-left p-6 sm:p-8 cursor-pointer group"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <div className="pr-6">
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontFamily: "var(--mono)",
                        textTransform: "uppercase",
                        color: "var(--orange)",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        display: "block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {faq.category.toUpperCase()}
                    </span>
                    <h2
                      className="text-lg sm:text-xl font-normal group-hover:text-orange-800 transition-colors"
                      style={{ fontFamily: "var(--serif)", color: "var(--ink)" }}
                    >
                      {faq.question}
                    </h2>
                  </div>

                  <div
                    className="p-2.5 rounded-full transition-colors shrink-0"
                    style={{
                      background: isOpen ? "var(--orange)" : "var(--paper)",
                      color: isOpen ? "#ffffff" : "var(--ink)",
                    }}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 sm:px-8 text-gray-700 leading-relaxed text-base border-t border-gray-100 pt-5">
                        <p>{faq.answer}</p>
                        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-100">
                          {faq.keywords.map((kw) => (
                            <span
                              key={kw}
                              className="text-[11px] font-mono px-2.5 py-1 rounded bg-gray-50 border border-gray-200 text-gray-600"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Kinetic Ticker */}
      <ArchitecturalTicker />

      {/* Still have questions CTA */}
      <section
        className="section-pad py-20 text-center rounded-3xl max-w-4xl mx-auto my-16"
        style={{
          background: "var(--paper-deep)",
        }}
      >
        <p className="eyebrow mb-3" style={{ color: "var(--orange)" }}>
          Direct Studio Dialogue
        </p>
        <h2 className="text-3xl sm:text-4xl font-normal mb-4" style={{ fontFamily: "var(--serif)" }}>
          Have a specific project query?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
          Book an introductory consultation at DN Oxypark or send our team your site drawings for initial assessment.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link className="button button-dark" href="/contact">
            Schedule a Consultation <span aria-hidden="true">↗</span>
          </Link>
          <a
            className="button button-light"
            href="https://wa.me/919937783912?text=Hello%20anthrop%2C%20I%20have%20a%20question%20regarding%20my%20project."
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
