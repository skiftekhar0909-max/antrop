"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
    <main id="main-content" className="page-pad">
      <section className="section-pad">
        <div className="section-heading text-center">
          <p className="eyebrow">Client Voices</p>
          <h1>Testimonials</h1>
        </div>
        
        <div className="carousel-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-slide"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <blockquote>
                &quot;{testimonials[currentIndex].quote}&quot;
              </blockquote>
              <cite>
                <strong>{testimonials[currentIndex].client}</strong>
                <span>{testimonials[currentIndex].project}</span>
              </cite>
            </motion.div>
          </AnimatePresence>
          
          <div className="carousel-indicators">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${idx === currentIndex ? "active" : ""}`}
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
