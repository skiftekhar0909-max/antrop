"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is your typical design process?",
    answer: "Our process begins with a deep dive into your requirements, followed by spatial planning, material selection, and finally, execution. We ensure you are involved at every critical stage.",
  },
  {
    question: "Do you handle both architecture and interior design?",
    answer: "Yes, we are a multidisciplinary studio. We believe that architecture and interior design should speak the same cohesive language.",
  },
  {
    question: "How long does a residential project usually take?",
    answer: "Depending on the scale and complexity, residential projects can take anywhere from 6 to 18 months from concept to completion.",
  },
  {
    question: "Where are you based, and do you take international projects?",
    answer: "We are based in Bhubaneswar, Odisha. While most of our work is local, we do take on select national and international projects.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main id="main-content" className="page-pad">
      <section className="section-pad max-w-3xl mx-auto">
        <div className="section-heading text-center">
          <p className="eyebrow">Common Queries</p>
          <h1>Frequently Asked Questions</h1>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="faq-item"
              initial={false}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3>{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="faq-answer-wrapper"
                  >
                    <p className="faq-answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
