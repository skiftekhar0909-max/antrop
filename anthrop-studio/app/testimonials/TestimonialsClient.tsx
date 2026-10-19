"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight, CheckCircle2, Building2, Home, Sparkles } from "lucide-react";
import TextReveal from "../components/animations/TextReveal";
import TiltCard from "../components/animations/TiltCard";
import ArchitecturalTicker from "../components/ArchitecturalTicker";

interface Testimonial {
  id: number;
  client: string;
  role: string;
  project: string;
  location: string;
  category: "Residential" | "Interior" | "Commercial" | "Landscape";
  rating: number;
  quote: string;
  highlight: string;
  year: string;
}

const featuredTestimonials: Testimonial[] = [
  {
    id: 1,
    client: "Anita & Dr. Alok Desai",
    role: "Homeowner",
    project: "Executive Master Suite & Joinery",
    location: "DN Oxypark, Bhubaneswar",
    category: "Interior",
    rating: 5,
    quote:
      "anthrop Studio completely transformed our space. The attention to detail in the custom teak joinery and ambient lighting is simply unmatched. It feels like a calm, tactile sanctuary from the busy city outside.",
    highlight: "Custom Teak Joinery & Lighting",
    year: "2025",
  },
  {
    id: 2,
    client: "Rohan & Priya Gupta",
    role: "Villa Owners",
    project: "Contemporary Luxury Villa Facade & Planning",
    location: "Patia, Bhubaneswar",
    category: "Residential",
    rating: 5,
    quote:
      "They understood our vision from day one. The architectural planning brought so much natural daylight and cross-ventilation into the villa. The seamless connection between the courtyard and living pavilion is an everyday joy.",
    highlight: "Daylight Optimization & Courtyard Living",
    year: "2025",
  },
  {
    id: 3,
    client: "Vikram Mehta",
    role: "Managing Director, Kalinga Tech",
    project: "Corporate Workspace & Experience Center",
    location: "Infocity, Bhubaneswar",
    category: "Commercial",
    rating: 5,
    quote:
      "Professional, precise, and disciplined with CAD documentation. They balanced climate-responsive elevation design with exceptional material warmth for our headquarters. Our team loves coming to work here.",
    highlight: "Climate-Responsive Elevation & Acoustics",
    year: "2024",
  },
  {
    id: 4,
    client: "Siddharth & Meera Mohanty",
    role: "Estate Owners",
    project: "Biophilic Landscape & Courtyard Architecture",
    location: "Cuttack, Odisha",
    category: "Landscape",
    rating: 5,
    quote:
      "Their integration of landscape with architecture is rare in Odisha. The shaded courtyards and native planting reduced our summer heat noticeably while creating an organic haven that changes beautifully with seasons.",
    highlight: "Biophilic Shading & Native Planting",
    year: "2024",
  },
];

const reviewCards: Testimonial[] = [
  {
    id: 5,
    client: "Sunita Pattnaik",
    role: "Residence Owner",
    project: "Duplex Villa Interior & Millwork",
    location: "Khandagiri, Bhubaneswar",
    category: "Interior",
    rating: 5,
    quote:
      "The spatial flow and built-in wardrobes created storage we didn't think was possible, without making rooms feel heavy. Truly thoughtful design.",
    highlight: "Spatial Flow & Hidden Storage",
    year: "2025",
  },
  {
    id: 6,
    client: "Rajesh Tripathy",
    role: "Architectural Client",
    project: "Minimalist Penthouse Elevation",
    location: "Jaydev Vihar, Bhubaneswar",
    category: "Residential",
    rating: 5,
    quote:
      "Every detail was documented and executed on site with zero ambiguity. The team was responsive, collaborative, and deeply passionate about aesthetics.",
    highlight: "Rigorous Site Execution",
    year: "2024",
  },
  {
    id: 7,
    client: "Ananya & Debashish Ray",
    role: "Villa Owners",
    project: "Garden Pavilion & Water Body",
    location: "Dumduma, Bhubaneswar",
    category: "Landscape",
    rating: 5,
    quote:
      "The water feature and native stone paving bring our family together every evening. anthrop delivered exactly what they promised in 3D renders.",
    highlight: "Paving, Stone & Water Architecture",
    year: "2025",
  },
];

export default function TestimonialsClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const current = featuredTestimonials[currentIndex];

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
  };

  return (
    <main id="main-content" className="page-pad">
      {/* Hero Intro Header with Spacious Padding */}
      <section
        className="section-pad"
        style={{
          paddingTop: "clamp(3rem, 5vw, 5rem)",
          paddingBottom: "clamp(3.5rem, 6vw, 6rem)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-600 inline-block animate-pulse" />
            <p className="eyebrow" style={{ color: "var(--orange)" }}>
              Client Trust · Verified Commissions
            </p>
          </div>
          <TextReveal elementType="h1" text="Voices from Completed Spaces" delay={0.1} />
          <p
            className="mt-6 text-lg md:text-xl leading-relaxed mx-auto max-w-2xl"
            style={{ color: "var(--muted)" }}
          >
            Real feedback from homeowners, founders, and estate clients across Bhubaneswar and Odisha who live and
            work in spaces shaped by anthrop.
          </p>

          {/* Social Proof Stats Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 pt-8 border-t border-gray-200/60 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-gray-900 text-sm">4.9 / 5.0 Rating</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700 font-medium">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>57+ Verified Commissions</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700 font-medium">
              <Building2 size={16} className="text-orange-600" />
              <span>Bhubaneswar · Cuttack · Puri</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Showcase with Generous Spacious Padding */}
      <section
        className="section-pad"
        style={{
          paddingBottom: "clamp(5rem, 8vw, 8rem)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <TiltCard intensity={5}>
            <div
              className="bg-white rounded-3xl relative overflow-hidden"
              style={{
                border: "1px solid rgba(32, 35, 31, 0.08)",
                boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.09)",
                padding: "clamp(2.5rem, 5vw, 4.5rem)",
                minHeight: "440px",
              }}
            >
              {/* Background Architectural Watermark */}
              <div
                className="absolute top-8 right-8 text-orange-500/10 pointer-events-none select-none"
                aria-hidden="true"
              >
                <Quote size={120} strokeWidth={1} />
              </div>

              {/* Top Meta Line: Category, Rating & Year */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--orange)",
                      background: "rgba(200, 95, 47, 0.1)",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {current.category} Project
                  </span>
                  <span className="text-xs font-mono text-gray-400">· {current.location}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                  <span className="ml-2 font-mono text-xs text-gray-400 font-semibold">{current.year}</span>
                </div>
              </div>

              {/* Dynamic Animated Quote with Smooth Transition & Ample Line Height */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote
                    className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-light leading-relaxed mb-8"
                    style={{
                      fontFamily: "var(--serif)",
                      color: "var(--ink)",
                      lineHeight: 1.5,
                    }}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Client Author Block */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                    <div>
                      <strong className="block text-lg md:text-xl font-medium" style={{ color: "var(--ink)" }}>
                        {current.client}
                      </strong>
                      <span className="text-sm text-gray-500 block mt-1">
                        {current.role} — <span className="text-orange-700 font-medium">{current.project}</span>
                      </span>
                    </div>

                    <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200/80 text-gray-600 inline-block w-fit">
                      Focus: {current.highlight}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </TiltCard>

          {/* Carousel Controls with Generous Spacing */}
          <div className="flex items-center justify-between mt-10 px-2">
            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              {featuredTestimonials.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setAutoPlay(false);
                    setCurrentIndex(idx);
                  }}
                  className="group py-2"
                  aria-label={`Go to testimonial ${idx + 1}`}
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-8 bg-orange-600" : "w-2 bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-gray-300 hover:border-black flex items-center justify-center transition-colors hover:bg-black hover:text-white"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-gray-300 hover:border-black flex items-center justify-center transition-colors hover:bg-black hover:text-white"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Architectural Keywords Ticker */}
      <ArchitecturalTicker />

      {/* Secondary Review Grid with Spacious Cards */}
      <section
        className="section-pad"
        style={{
          paddingTop: "clamp(5rem, 8vw, 8rem)",
          paddingBottom: "clamp(6rem, 10vw, 10rem)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="section-heading mb-14">
            <p className="eyebrow" style={{ color: "var(--orange)" }}>
              More Client Experiences
            </p>
            <h2 className="text-3xl md:text-4xl font-normal mt-2" style={{ fontFamily: "var(--serif)" }}>
              Stories from Completed Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-8 flex flex-col justify-between"
                style={{
                  border: "1px solid rgba(32, 35, 31, 0.08)",
                  boxShadow: "0 10px 30px -8px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--olive)",
                      }}
                    >
                      {card.category}
                    </span>
                    <div className="flex text-amber-500">
                      {Array.from({ length: card.rating }).map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <blockquote
                    className="text-base text-gray-700 leading-relaxed mb-6 font-light"
                    style={{ fontFamily: "var(--serif)" }}
                  >
                    &ldquo;{card.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <strong className="block text-sm font-semibold text-gray-900">{card.client}</strong>
                  <span className="text-xs text-gray-500 block mt-0.5">{card.project}</span>
                  <span className="text-[11px] font-mono text-orange-600 block mt-1">{card.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Action Banner */}
      <section
        className="section-pad py-20 text-center"
        style={{
          background: "var(--paper-deep)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow mb-3" style={{ color: "var(--orange)" }}>
            Start Your Project
          </p>
          <h2 className="text-3xl md:text-4xl font-normal mb-4" style={{ fontFamily: "var(--serif)" }}>
            Let&apos;s shape your space together.
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Schedule an introductory consultation at our DN Oxypark studio to discuss your architectural, interior, or
            landscape ambitions.
          </p>
          <Link className="button button-dark" href="/contact">
            Book a Studio Consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
