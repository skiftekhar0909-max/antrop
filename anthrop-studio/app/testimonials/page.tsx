"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import TextReveal from "../components/animations/TextReveal";
import TiltCard from "../components/animations/TiltCard";

const testimonials = [
  {
    id: 1,
    client: "Anita Desai",
    project: "Executive Bedroom",
    quote: "Anthrop Studio completely transformed our space. The attention to detail in the custom joinery and lighting is simply unmatched. It feels like a sanctuary.",
  },
  {
    id: 2,
    client: "Rohan & Priya Gupta",
    project: "Luxury Villa",
    quote: "They understood our vision from day one. The architectural planning brought so much natural light and flow into the house. It's a joy to live here.",
  },
  {
    id: 3,
    client: "Vikram Mehta",
    project: "Corporate Office",
    quote: "Professional, precise, and incredibly creative. They balanced aesthetics with functionality perfectly for our new headquarters.",
  },
];

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main id="main-content" className="page-pad min-h-screen flex flex-col justify-center">
      <section className="section-pad">
        <motion.div 
          className="section-heading text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Client Voices
          </motion.p>
          <TextReveal elementType="h1" text="Testimonials" delay={0.2} />
        </motion.div>
        
        <div className="carousel-container max-w-4xl mx-auto">
          <TiltCard intensity={5}>
            <div className="bg-white p-12 rounded-2xl shadow-2xl relative overflow-hidden h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="testimonial-slide text-center"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="text-3xl md:text-5xl font-light leading-tight mb-8">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </blockquote>
                  <cite className="block not-italic">
                    <strong className="block text-xl font-medium">{testimonials[currentIndex].client}</strong>
                    <span className="text-gray-500 uppercase tracking-widest text-sm mt-2 block">{testimonials[currentIndex].project}</span>
                  </cite>
                </motion.div>
              </AnimatePresence>
            </div>
          </TiltCard>
          
          <div className="carousel-indicators flex justify-center gap-4 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${idx === currentIndex ? "bg-black scale-150" : "bg-gray-300 hover:bg-gray-400"}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
