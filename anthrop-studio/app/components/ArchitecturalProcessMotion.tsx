"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Layers, Ruler, FileCheck, HardHat, Sparkles } from "lucide-react";

interface PhaseData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  description: string;
}

const phases: PhaseData[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery & Site Topography",
    subtitle: "Climatic context, zoning bylaws & client aspirations",
    duration: "2 — 3 Weeks",
    deliverables: ["Topographical survey map", "Solar azimuth & wind analysis", "Bhubaneswar BDA regulatory check", "Spatial requirement matrix"],
    metrics: [
      { label: "Site Coordinates", value: "20.2961° N, 85.8245° E" },
      { label: "Monsoon Corridor", value: "SW → NE Vector" },
      { label: "Solar Noon Peak", value: "68° Summer Azimuth" },
    ],
    description: "Before drawing a single line, we map the land's microclimate, sun paths, soil strata, and prevailing sea breezes across Bhubaneswar and Cuttack.",
  },
  {
    id: "concept",
    number: "02",
    title: "Concept Massing & Spatial Flow",
    subtitle: "Volumetric studies, courtyard circulation & daylight axes",
    duration: "3 — 4 Weeks",
    deliverables: ["Volumetric massing iterations", "Courtyard airflow models", "Initial material moodboards", "Client design presentation"],
    metrics: [
      { label: "Daylight Index", value: "92% Usable Lux" },
      { label: "Thermal Buffer", value: "Cavity Wall Envelope" },
      { label: "Courtyard Ratio", value: "1:4 Volume Balance" },
    ],
    description: "Translating the brief into sculptured spatial forms. We carve shaded courtyards, orient living pavilions toward prevailing breezes, and establish proportion.",
  },
  {
    id: "development",
    number: "03",
    title: "Design Development & 3D Reality",
    subtitle: "High-fidelity visualization, tactile finishes & custom joinery",
    duration: "4 — 6 Weeks",
    deliverables: ["Photorealistic 3D renders", "Custom joinery & millwork details", "Lighting simulation lux maps", "Integrated MEP rough-ins"],
    metrics: [
      { label: "Joinery Spec", value: "Grade-1 Burma Teak" },
      { label: "Glazing Spec", value: "DGU Low-E Acoustic" },
      { label: "Color Harmony", value: "Warm Earth / Basalt" },
    ],
    description: "Refining every junction, shadow reveal, and lighting scene. Every fixture, stone slab, and timber batten is selected and coordinated in 3D.",
  },
  {
    id: "documentation",
    number: "04",
    title: "Precision CAD Documentation",
    subtitle: "Exhaustive construction blueprints & artisan specifications",
    duration: "3 — 5 Weeks",
    deliverables: ["1:20 & 1:5 detail sheets", "Structural engineering coordination", "Joinery fabrication cutting sheets", "Bill of Quantities (BOQ)"],
    metrics: [
      { label: "Tolerance Spec", value: "± 2mm Precision" },
      { label: "Sheet Standard", value: "IS:962 Architecture" },
      { label: "Drawing Count", value: "48+ Coordinated Sheets" },
    ],
    description: "Zero ambiguity on site. We produce millimeter-accurate CAD construction packages, structural details, and electrical layouts that contractors follow seamlessly.",
  },
  {
    id: "construction",
    number: "05",
    title: "Site Stewardship & Commissioning",
    subtitle: "Rigorous quality supervision, mockups & final handover",
    duration: "Ongoing Site Phases",
    deliverables: ["Bi-weekly site inspection logs", "Full-scale mockup sign-offs", "Artisan joinery inspection", "Defect-free commissioning"],
    metrics: [
      { label: "Site Audits", value: "Bi-Weekly Inspections" },
      { label: "Material Tests", value: "Cube & Moisture Tests" },
      { label: "Handover Trust", value: "100% Quality Sign-Off" },
    ],
    description: "Architecture lives in the execution. Our architects conduct on-site inspections, verify joinery tolerances, and ensure the built reality honors the concept.",
  },
];

export default function ArchitecturalProcessMotion() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const current = phases[activePhaseIndex];

  return (
    <div
      className="rounded-3xl p-6 sm:p-10 my-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #181b18 0%, #101210 100%)",
        color: "#f5f4ef",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Background CAD Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Header Bar with Coordinates & Live Status */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
            <Compass size={18} className="animate-spin" style={{ animationDuration: "20s" }} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest font-mono text-orange-400 font-semibold">
              Interactive CAD Drafting Lifecycle
            </div>
            <div className="text-sm font-medium text-white/90">
              anthrop Process Engine · Phase {current.number} / 05
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-white/60">
          <span className="hidden sm:inline">CAD Datum: NBC-2016 Compliant</span>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80">Interactive Blueprint Mode</span>
          </div>
        </div>
      </div>

      {/* Phase Navigation Tabs */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-10">
        {phases.map((phase, idx) => {
          const isActive = idx === activePhaseIndex;
          const icons = [Compass, Layers, Sparkles, Ruler, HardHat];
          const Icon = icons[idx];

          return (
            <button
              key={phase.id}
              type="button"
              onClick={() => setActivePhaseIndex(idx)}
              className="group text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 relative overflow-hidden"
              style={{
                background: isActive ? "rgba(200, 95, 47, 0.18)" : "rgba(255, 255, 255, 0.03)",
                border: isActive ? "1px solid rgba(200, 95, 47, 0.6)" : "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activePhaseIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: isActive ? "#f97316" : "rgba(255, 255, 255, 0.4)" }}
                >
                  {phase.number}
                </span>
                <Icon
                  size={16}
                  style={{ color: isActive ? "#f97316" : "rgba(255, 255, 255, 0.4)" }}
                />
              </div>
              <div className="text-xs sm:text-sm font-medium line-clamp-1 text-white">
                {phase.title.split(" ")[0]} {phase.title.split(" ")[1]}
              </div>
              <div className="text-[11px] font-mono text-white/50 mt-1">{phase.duration}</div>
            </button>
          );
        })}
      </div>

      {/* Main Dynamic Interactive Simulation Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Dynamic Blueprint Motion Graphic SVG */}
        <div className="lg:col-span-7 bg-black/40 rounded-2xl p-6 border border-white/10 relative overflow-hidden flex flex-col items-center justify-center min-h-[360px] sm:min-h-[420px]">
          {/* Top HUD metrics on canvas */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/50 border-b border-white/5 pb-2">
            <span>GRID-REF: ARCH-{current.number}.0</span>
            <span>SCALE 1:50 @ A1</span>
            <span className="text-orange-400">STATUS: VERIFIED</span>
          </div>

          {/* Dynamic SVG Schematic with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center justify-center my-6"
            >
              <svg
                viewBox="0 0 500 320"
                className="w-full max-h-[300px] select-none"
                style={{ filter: "drop-shadow(0 0 16px rgba(200,95,47,0.15))" }}
              >
                {/* Cross-hair guides */}
                <line x1="250" y1="10" x2="250" y2="310" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                <line x1="10" y1="160" x2="490" y2="160" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />

                {/* PHASE 1: Discovery - Topography & Wind Vectors */}
                {activePhaseIndex === 0 && (
                  <g>
                    {/* Contour Topography Lines */}
                    <path
                      d="M 40 240 Q 150 200, 260 230 T 460 210"
                      fill="none"
                      stroke="#c85f2f"
                      strokeWidth="2"
                    />
                    <path
                      d="M 40 210 Q 160 170, 270 190 T 460 170"
                      fill="none"
                      stroke="rgba(200, 95, 47, 0.7)"
                      strokeWidth="1.5"
                      strokeDasharray="6 3"
                    />
                    <path
                      d="M 40 180 Q 170 130, 280 150 T 460 130"
                      fill="none"
                      stroke="rgba(200, 95, 47, 0.4)"
                      strokeWidth="1"
                    />
                    <path
                      d="M 40 150 Q 180 100, 290 120 T 460 90"
                      fill="none"
                      stroke="rgba(200, 95, 47, 0.25)"
                      strokeWidth="1"
                    />

                    {/* Solar Path Arc */}
                    <path
                      d="M 90 260 A 180 140 0 0 1 410 260"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                    />
                    {/* Animated Sun Marker */}
                    <circle cx="250" cy="120" r="12" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="250" cy="120" r="6" fill="#f59e0b" />
                    <text x="250" y="100" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="monospace">
                      SUMMER NOON: 68° AZIMUTH
                    </text>

                    {/* Wind Vector Arrows */}
                    <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3">
                      <line x1="70" y1="280" x2="160" y2="200" markerEnd="url(#arrow)" />
                      <line x1="120" y1="295" x2="210" y2="215" />
                    </g>
                    <text x="120" y="270" fill="#38bdf8" fontSize="10" fontFamily="monospace">
                      SW MONSOON BREEZE
                    </text>
                  </g>
                )}

                {/* PHASE 2: Concept Design - Volumetric Massing & Flow */}
                {activePhaseIndex === 1 && (
                  <g>
                    {/* Massing Blocks in Axonometric Projection */}
                    <polygon
                      points="160,110 280,60 380,110 260,160"
                      fill="rgba(200,95,47,0.25)"
                      stroke="#c85f2f"
                      strokeWidth="2"
                    />
                    <polygon
                      points="160,110 160,200 260,250 260,160"
                      fill="rgba(200,95,47,0.15)"
                      stroke="#c85f2f"
                      strokeWidth="2"
                    />
                    <polygon
                      points="260,160 260,250 380,200 380,110"
                      fill="rgba(200,95,47,0.35)"
                      stroke="#c85f2f"
                      strokeWidth="2"
                    />

                    {/* Carved Courtyard Void */}
                    <polygon
                      points="220,135 280,110 320,135 260,160"
                      fill="#101210"
                      stroke="#f97316"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <text x="270" y="142" textAnchor="middle" fill="#f97316" fontSize="9" fontFamily="monospace">
                      COURTYARD VOID
                    </text>

                    {/* Cross-Ventilation Airflow Streamlines */}
                    <path
                      d="M 120 180 Q 200 170 260 145 T 390 100"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                    />
                    <text x="130" y="170" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                      CROSS-AIRFLOW
                    </text>
                  </g>
                )}

                {/* PHASE 3: Design Development - Section Detail & Material Layers */}
                {activePhaseIndex === 2 && (
                  <g>
                    {/* Architectural Wall & Floor Slab Cross Section */}
                    {/* Slab Foundation */}
                    <rect x="70" y="240" width="360" height="30" fill="rgba(255,255,255,0.06)" stroke="#888" strokeWidth="1.5" />
                    <text x="250" y="260" textAnchor="middle" fill="#888" fontSize="10" fontFamily="monospace">
                      R.C.C. RAFT SLAB (300mm THK)
                    </text>

                    {/* Cavity Wall Outer Leaf */}
                    <rect x="100" y="80" width="24" height="160" fill="rgba(200,95,47,0.3)" stroke="#c85f2f" strokeWidth="2" />
                    <text x="112" y="160" textAnchor="middle" fill="#c85f2f" fontSize="9" fontFamily="monospace" transform="rotate(-90 112 160)">
                      RAMMED EARTH / BRICK
                    </text>

                    {/* Air Cavity Insulation */}
                    <rect x="124" y="80" width="16" height="160" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Inner Teak Finish Leaf */}
                    <rect x="140" y="80" width="18" height="160" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="1.5" />

                    {/* Window Glass Reveal */}
                    <line x1="200" y1="80" x2="380" y2="80" stroke="#38bdf8" strokeWidth="4" />
                    <text x="290" y="72" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">
                      DGU ACOUSTIC LOW-E GLAZING
                    </text>

                    {/* Dimension Line */}
                    <line x1="100" y1="55" x2="158" y2="55" stroke="#f97316" strokeWidth="1" />
                    <line x1="100" y1="50" x2="100" y2="60" stroke="#f97316" strokeWidth="1" />
                    <line x1="158" y1="50" x2="158" y2="60" stroke="#f97316" strokeWidth="1" />
                    <text x="129" y="50" textAnchor="middle" fill="#f97316" fontSize="9" fontFamily="monospace">
                      320mm CAVITY WALL
                    </text>
                  </g>
                )}

                {/* PHASE 4: Documentation - Precision CAD Dimensioning */}
                {activePhaseIndex === 3 && (
                  <g>
                    {/* CAD Floor Grid & Dimension Matrix */}
                    <rect x="90" y="60" width="320" height="190" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <line x1="210" y1="60" x2="210" y2="250" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="8 4" />
                    <line x1="90" y1="160" x2="410" y2="160" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="8 4" />

                    {/* Room Labels */}
                    <text x="150" y="115" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="sans-serif" fontWeight="600">
                      MASTER SUITE
                    </text>
                    <text x="150" y="132" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">
                      5400 x 4200 mm
                    </text>

                    <text x="310" y="115" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="sans-serif" fontWeight="600">
                      COURTYARD
                    </text>
                    <text x="310" y="132" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">
                      4800 x 3600 mm
                    </text>

                    <text x="250" y="210" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="sans-serif" fontWeight="600">
                      PAVILION LIVING & DINING
                    </text>
                    <text x="250" y="226" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">
                      7200 x 4800 mm
                    </text>

                    {/* CAD Grid Bubbles */}
                    <g fontFamily="monospace" fontSize="9" fill="#f97316" textAnchor="middle">
                      <circle cx="90" cy="40" r="10" stroke="#f97316" strokeWidth="1" fill="#101210" />
                      <text x="90" y="43">A</text>
                      <circle cx="210" cy="40" r="10" stroke="#f97316" strokeWidth="1" fill="#101210" />
                      <text x="210" y="43">B</text>
                      <circle cx="410" cy="40" r="10" stroke="#f97316" strokeWidth="1" fill="#101210" />
                      <text x="410" y="43">C</text>

                      <circle cx="70" cy="60" r="10" stroke="#f97316" strokeWidth="1" fill="#101210" />
                      <text x="70" y="63">1</text>
                      <circle cx="70" cy="160" r="10" stroke="#f97316" strokeWidth="1" fill="#101210" />
                      <text x="70" y="163">2</text>
                      <circle cx="70" cy="250" r="10" stroke="#f97316" strokeWidth="1" fill="#101210" />
                      <text x="70" y="253">3</text>
                    </g>
                  </g>
                )}

                {/* PHASE 5: Construction Observation - Site Execution & Sign-off */}
                {activePhaseIndex === 4 && (
                  <g>
                    {/* Architectural Frame with Inspection Checkmarks */}
                    <rect x="110" y="70" width="280" height="180" fill="none" stroke="#22c55e" strokeWidth="2" />
                    <line x1="110" y1="130" x2="390" y2="130" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="250" y1="70" x2="250" y2="250" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Structural Column Markers */}
                    {[
                      [110, 70],
                      [250, 70],
                      [390, 70],
                      [110, 250],
                      [250, 250],
                      [390, 250],
                    ].map(([cx, cy], i) => (
                      <g key={i}>
                        <rect x={cx - 8} y={cy - 8} width="16" height="16" fill="#22c55e" />
                        <circle cx={cx} cy={cy} r="12" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                      </g>
                    ))}

                    {/* Stamped Handover Badge */}
                    <g transform="translate(250, 160)">
                      <circle cx="0" cy="0" r="45" fill="#101210" stroke="#22c55e" strokeWidth="2.5" />
                      <circle cx="0" cy="0" r="38" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" />
                      <text x="0" y="-8" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold">
                        anthrop
                      </text>
                      <text x="0" y="8" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="monospace">
                        SITE VERIFIED
                      </text>
                      <text x="0" y="20" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="monospace">
                        COMMISSION 100%
                      </text>
                    </g>
                  </g>
                )}
              </svg>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Coordinate Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/50 border-t border-white/5 pt-2">
            <span>AZIMUTH: +14.2° N</span>
            <span>TOLERANCE: ±2.0 MM</span>
            <span className="text-emerald-400">STATUS: ON TRACK</span>
          </div>
        </div>

        {/* Right: Phase Details & Scope Breakdown */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-orange-600/30 text-orange-400 font-bold">
                Phase {current.number}
              </span>
              <span className="text-xs font-mono text-white/60">Estimated Duration: {current.duration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-white mb-2" style={{ fontFamily: "var(--serif)" }}>
              {current.title}
            </h3>
            <p className="text-sm text-orange-200/80 mb-6">{current.subtitle}</p>

            <p className="text-sm text-white/70 leading-relaxed mb-6">{current.description}</p>

            {/* Key Deliverables */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider font-mono text-white/50 mb-3">
                Key Studio Deliverables:
              </div>
              <ul className="space-y-2">
                {current.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Engineering Benchmarks */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
              {current.metrics.map((m, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] font-mono text-white/40 uppercase">{m.label}</div>
                  <div className="text-xs font-bold text-white mt-1 font-mono">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
