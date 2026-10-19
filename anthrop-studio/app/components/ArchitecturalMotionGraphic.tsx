"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Layers, Trees, Maximize2, Sun, Ruler } from "lucide-react";

type Discipline = "planning" | "interiors" | "landscape";

interface DisciplineData {
  id: Discipline;
  number: string;
  title: string;
  subtitle: string;
  purpose: string;
  metrics: { label: string; value: string }[];
  keywords: string[];
}

const disciplines: Record<Discipline, DisciplineData> = {
  planning: {
    id: "planning",
    number: "01",
    title: "Spatial Planning",
    subtitle: "Climatic Orientation & Zoning Logic",
    purpose:
      "Motion graphics simulate solar path tracking, wind corridors, and modular structural grids (6.0m module) to ensure zero wasted square footage and maximum natural cross-ventilation.",
    metrics: [
      { label: "Solar Azimuth", value: "142° SE" },
      { label: "Ventilation Efficiency", value: "+38%" },
      { label: "Structural Grid", value: "6.0m × 6.0m" },
      { label: "Spatial Efficacy", value: "94.2%" },
    ],
    keywords: [
      "Spatial Planning",
      "Site Orientation",
      "Zoning Strategy",
      "Circulation Flow",
      "Bhubaneswar Climate",
      "Modular Grid",
    ],
  },
  interiors: {
    id: "interiors",
    number: "02",
    title: "Interior Architecture",
    subtitle: "Daylight Ingress & Material Elevations",
    purpose:
      "Motion graphics trace ambient daylight bounce, acoustic reverberation, and millimetre-accurate joinery sections so every interior feels calm, grounded, and inherently cohesive.",
    metrics: [
      { label: "Daylight Factor", value: "4.8 DF" },
      { label: "Lux Level (Living)", value: "350 Lux" },
      { label: "Joinery Tolerance", value: "±1.5mm" },
      { label: "Material Warmth", value: "Teak & Stone" },
    ],
    keywords: [
      "Interior Architecture",
      "Daylight Ingress",
      "Bespoke Joinery",
      "Acoustic Buffers",
      "Ambient Lighting",
      "Custom Cabinetry",
    ],
  },
  landscape: {
    id: "landscape",
    number: "03",
    title: "Landscape Architecture",
    subtitle: "Topography, Microclimate & Shading",
    purpose:
      "Motion graphics map contour hydrology, tree canopy shade envelopes, and permeable surfaces to reduce ambient heat by up to 4°C and create living ecosystems around the home.",
    metrics: [
      { label: "Ambient Cooling", value: "-3.8°C" },
      { label: "Rainwater Infiltration", value: "85%" },
      { label: "Canopy Shading", value: "62% Ground" },
      { label: "Native Biodiversity", value: "100% Flora" },
    ],
    keywords: [
      "Landscape Architecture",
      "Topographical Contours",
      "Biophilic Shading",
      "Microclimate Design",
      "Permeable Ground",
      "Native Planting",
    ],
  },
};

export default function ArchitecturalMotionGraphic() {
  const [active, setActive] = useState<Discipline>("planning");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const current = disciplines[active];

  // Optional auto-cycle through disciplines
  useEffect(() => {
    if (!autoRotate) return;
    const order: Discipline[] = ["planning", "interiors", "landscape"];
    const timer = setInterval(() => {
      setActive((prev) => {
        const nextIdx = (order.indexOf(prev) + 1) % order.length;
        return order[nextIdx];
      });
    }, 7000);
    return () => clearInterval(timer);
  }, [autoRotate]);

  return (
    <section className="section-pad py-24 lg:py-32" style={{ background: "#181b17", color: "#f2efe7" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Intentional Architecture Story */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="eyebrow" style={{ color: "#c85f2f" }}>
                Interactive Blueprint · Disciplines In Motion
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight" style={{ fontFamily: "var(--serif)" }}>
              The Science Behind <br />
              <span className="italic" style={{ color: "rgba(255,255,255,0.85)" }}>
                Every Line We Draw.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-gray-400 leading-relaxed">
            Architecture should never be arbitrary. We use motion simulation to test daylight ingress, spatial
            circulation, and microclimate performance before building on site.
          </p>
        </div>

        {/* Discipline Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {(["planning", "interiors", "landscape"] as Discipline[]).map((key) => {
            const item = disciplines[key];
            const isSelected = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setAutoRotate(false);
                  setActive(key);
                }}
                className="flex items-center gap-3 px-5 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300"
                style={{
                  background: isSelected ? "var(--orange)" : "rgba(255,255,255,0.06)",
                  color: isSelected ? "#fff" : "rgba(255,255,255,0.7)",
                  border: isSelected ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ fontFamily: "var(--mono)", opacity: isSelected ? 1 : 0.6 }}>{item.number}</span>
                <span>{item.title}</span>
                {key === "planning" && <Compass size={14} />}
                {key === "interiors" && <Layers size={14} />}
                {key === "landscape" && <Trees size={14} />}
              </button>
            );
          })}
        </div>

        {/* Main Motion Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Dynamic Animated SVG Blueprint Graphic */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 p-6 md:p-8 backdrop-blur-md">
            {/* Top HUD bar with coordinates & live scale */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>BHUBANESWAR LAT 20.29°N LON 85.82°E</span>
              </div>
              <div className="flex items-center gap-4">
                <span>SCALE 1:50</span>
                <span className="hidden sm:inline">CAD REV 04.2</span>
              </div>
            </div>

            {/* SVG Motion Canvas */}
            <div className="relative w-full aspect-[16/10] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {active === "planning" && (
                  <motion.svg
                    key="planning"
                    viewBox="0 0 600 380"
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <defs>
                      <pattern id="cadGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                      </pattern>
                      <linearGradient id="planningGlow" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#c85f2f" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#c85f2f" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Architectural Background Grid */}
                    <rect width="100%" height="100%" fill="url(#cadGrid)" />

                    {/* Structural Axis Lines */}
                    <line x1="40" y1="190" x2="560" y2="190" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
                    <line x1="300" y1="30" x2="300" y2="350" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />

                    {/* Masterplan Structural Boundary (Animated Path) */}
                    <motion.rect
                      x="100"
                      y="70"
                      width="400"
                      height="240"
                      rx="8"
                      fill="url(#planningGlow)"
                      stroke="#c85f2f"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.6, ease: "easeInOut" }}
                    />

                    {/* Room Partition Zones */}
                    <motion.path
                      d="M 230 70 L 230 310 M 100 200 L 380 200 M 380 70 L 380 310"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1.5"
                      strokeDasharray="6 3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
                    />

                    {/* Solar Path Arc & Sun Position */}
                    <motion.path
                      d="M 80 320 Q 300 10 520 320"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="1.8"
                      strokeDasharray="5 5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.circle
                      cx="380"
                      cy="120"
                      r="9"
                      fill="#f59e0b"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <text x="400" y="125" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      SOLAR AZIMUTH 142°
                    </text>

                    {/* Cross-ventilation flow vectors (Animated arrows) */}
                    <motion.path
                      d="M 60 250 C 150 250, 200 230, 300 230 C 400 230, 480 260, 540 260"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      animate={{ strokeDashoffset: [0, -40] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                    <text x="70" y="270" fill="#38bdf8" fontSize="10" fontFamily="monospace">
                      WIND CORRIDOR 12 km/h
                    </text>

                    {/* Dimension Calipers */}
                    <line x1="100" y1="50" x2="500" y2="50" stroke="#fff" strokeWidth="1" />
                    <line x1="100" y1="44" x2="100" y2="56" stroke="#fff" strokeWidth="1.5" />
                    <line x1="500" y1="44" x2="500" y2="56" stroke="#fff" strokeWidth="1.5" />
                    <text x="270" y="44" fill="#fff" fontSize="11" fontFamily="monospace" textAnchor="middle">
                      DIM: 24.00 m
                    </text>

                    <line x1="520" y1="70" x2="520" y2="310" stroke="#fff" strokeWidth="1" />
                    <line x1="514" y1="70" x2="526" y2="70" stroke="#fff" strokeWidth="1.5" />
                    <line x1="514" y1="310" x2="526" y2="310" stroke="#fff" strokeWidth="1.5" />
                    <text x="545" y="195" fill="#fff" fontSize="11" fontFamily="monospace">
                      14.40 m
                    </text>

                    {/* Zone Labels */}
                    <text x="140" y="140" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="monospace">
                      LIVING / PATIO
                    </text>
                    <text x="270" y="140" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="monospace">
                      COURTYARD
                    </text>
                    <text x="420" y="230" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="monospace">
                      SUITE 01
                    </text>
                  </motion.svg>
                )}

                {active === "interiors" && (
                  <motion.svg
                    key="interiors"
                    viewBox="0 0 600 380"
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <defs>
                      <linearGradient id="lightRay" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.02" />
                      </linearGradient>
                      <pattern id="woodGrain" width="40" height="8" patternUnits="userSpaceOnUse">
                        <path d="M 0 4 Q 20 2, 40 4" fill="none" stroke="rgba(200,95,47,0.25)" strokeWidth="1" />
                      </pattern>
                    </defs>

                    {/* Room Volume Outline */}
                    <rect x="60" y="60" width="480" height="260" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

                    {/* Window Opening (Daylight Source) */}
                    <rect x="60" y="90" width="8" height="140" fill="#38bdf8" />
                    <text x="20" y="165" fill="#38bdf8" fontSize="10" fontFamily="monospace" transform="rotate(-90 20 165)">
                      WINDOW 2.4m HT
                    </text>

                    {/* Ingress Sunlight Cone (Motion Beam) */}
                    <polygon points="68,90 420,320 180,320 68,230" fill="url(#lightRay)" />
                    <motion.line
                      x1="68"
                      y1="90"
                      x2="420"
                      y2="320"
                      stroke="#fbbf24"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      animate={{ strokeDashoffset: [0, -20] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Custom Wooden Joinery & Media Unit Section */}
                    <rect x="220" y="160" width="280" height="160" fill="#24211e" stroke="#c85f2f" strokeWidth="2" />
                    <rect x="220" y="160" width="280" height="160" fill="url(#woodGrain)" />

                    {/* Floating Shelves & LED Profile Detail */}
                    <line x1="240" y1="210" x2="480" y2="210" stroke="#fff" strokeWidth="2" />
                    <line x1="240" y1="214" x2="480" y2="214" stroke="#fbbf24" strokeWidth="1.5" />
                    <line x1="240" y1="260" x2="480" y2="260" stroke="#fff" strokeWidth="2" />

                    {/* Fluted Accent Wall Panelling */}
                    {Array.from({ length: 14 }).map((_, i) => (
                      <line
                        key={i}
                        x1={240 + i * 16}
                        y1="160"
                        x2={240 + i * 16}
                        y2="210"
                        stroke="rgba(200,95,47,0.5)"
                        strokeWidth="1.5"
                      />
                    ))}

                    {/* Dimension Callouts for Custom Millwork */}
                    <text x="320" y="145" fill="#c85f2f" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      FLUTED TEAK WALL PANELLING
                    </text>
                    <text x="250" y="240" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="monospace">
                      3000K WARM STRIP LIGHTING (350 LUX)
                    </text>
                    <text x="250" y="295" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="monospace">
                      CONCEALED SOFT-CLOSE DRAWER SYSTEM
                    </text>
                  </motion.svg>
                )}

                {active === "landscape" && (
                  <motion.svg
                    key="landscape"
                    viewBox="0 0 600 380"
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <defs>
                      <radialGradient id="canopyShade" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#15803d" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#15803d" stopOpacity="0.05" />
                      </radialGradient>
                    </defs>

                    {/* Topographic Contour Elevation Rings (Kinetic Wave) */}
                    {[160, 130, 100, 70, 40].map((radius, i) => (
                      <motion.ellipse
                        key={i}
                        cx="320"
                        cy="190"
                        rx={radius * 1.5}
                        ry={radius}
                        fill="none"
                        stroke="rgba(74, 222, 128, 0.25)"
                        strokeWidth="1.2"
                        strokeDasharray="6 4"
                        animate={{
                          rx: [radius * 1.48, radius * 1.54, radius * 1.48],
                          ry: [radius * 0.98, radius * 1.02, radius * 0.98],
                        }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                      />
                    ))}

                    {/* Tree Canopy Circles & Shading Radius */}
                    <circle cx="180" cy="140" r="55" fill="url(#canopyShade)" stroke="#4ade80" strokeWidth="1.5" />
                    <circle cx="430" cy="240" r="45" fill="url(#canopyShade)" stroke="#4ade80" strokeWidth="1.5" />
                    <circle cx="180" cy="140" r="5" fill="#4ade80" />
                    <circle cx="430" cy="240" r="5" fill="#4ade80" />

                    {/* Rainwater Permeable Flow Pathway */}
                    <motion.path
                      d="M 120 310 Q 250 220 380 270 T 520 160"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      strokeDasharray="8 6"
                      animate={{ strokeDashoffset: [0, -42] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Architectural Structure Footprint in Nature */}
                    <rect x="240" y="130" width="160" height="120" rx="4" fill="#20231f" stroke="#fff" strokeWidth="1.8" />
                    <text x="320" y="195" fill="#fff" fontSize="11" fontFamily="monospace" textAnchor="middle">
                      RESIDENCE FOOTPRINT
                    </text>

                    {/* Topography Altitude Markers */}
                    <text x="490" y="110" fill="#4ade80" fontSize="10" fontFamily="monospace">
                      +12.50m CONTOUR
                    </text>
                    <text x="140" y="210" fill="#4ade80" fontSize="10" fontFamily="monospace">
                      CANOPY SHADE (-3.8°C)
                    </text>
                    <text x="250" y="330" fill="#38bdf8" fontSize="10" fontFamily="monospace">
                      PERMEABLE GRAVEL RUNOFF
                    </text>
                  </motion.svg>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Graphic Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-2 border-t border-white/10 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Ruler size={13} className="text-orange-400" />
                <span>Simulated live to Odisha climate parameters</span>
              </span>
              <span className="font-mono text-orange-400 text-[11px]">STATUS: VERIFIED CAD LOGIC</span>
            </div>
          </div>

          {/* Right: Technical Explanation, Purpose & Keyword Badges */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold">
                Discipline {current.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-medium mt-1 mb-2" style={{ fontFamily: "var(--serif)" }}>
                {current.title}
              </h3>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4 pb-3 border-b border-white/10">
                {current.subtitle}
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">{current.purpose}</p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {current.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="block text-[11px] text-gray-400 font-mono uppercase">{m.label}</span>
                    <span className="block text-base font-semibold text-white mt-1 font-mono">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic Architectural Keywords */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                Core Architectural Keywords
              </span>
              <div className="flex flex-wrap gap-2">
                {current.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(200, 95, 47, 0.15)",
                      color: "#f5a47b",
                      border: "1px solid rgba(200, 95, 47, 0.3)",
                    }}
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
