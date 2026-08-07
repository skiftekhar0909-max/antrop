"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import TextReveal from "../components/animations/TextReveal";

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

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main id="main-content" className="page-pad min-h-screen">
      <section className="section-pad max-w-4xl mx-auto">
        <motion.div 
          className="section-heading text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="eyebrow">Common Queries</motion.p>
          <TextReveal elementType="h1" text="Frequently Asked Questions" delay={0.2} />
        </motion.div>
        
        <motion.div 
          className="faq-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="faq-item border-b border-gray-300 py-6"
              variants={fadeUp}
            >
              <button
                className="faq-question w-full flex justify-between items-center text-left cursor-pointer group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-2xl font-medium group-hover:text-gray-600 transition-colors">{faq.question}</h3>
                <motion.div
                  className="bg-gray-100 p-3 rounded-full group-hover:bg-black group-hover:text-white transition-colors"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="faq-answer-wrapper overflow-hidden"
                  >
                    <p className="faq-answer mt-6 text-lg text-gray-600 pr-12 pb-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
