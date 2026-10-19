"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, Trees, Layers, CheckCircle2 } from "lucide-react";

type Discipline = "planning" | "interiors" | "landscape";

interface DisciplineSpec {
  id: Discipline;
  number: string;
  title: string;
  lead: string;
  subtitle: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

const disciplines: Record<Discipline, DisciplineSpec> = {
  planning: {
    id: "planning",
    number: "01",
    title: "Architectural Planning & Zoning",
    lead: "Site Envelopes, FAR Optimization & Solar Orientation",
    subtitle: "NBC-2016 & Bhubaneswar BDA Bylaw Compliance",
    metrics: [
      { label: "Site Coverage", value: "42% Optimal" },
      { label: "FAR Balance", value: "2.10 Permitted" },
      { label: "Solar Exposure", value: "94% Natural Lux" },
    ],
    deliverables: [
      "Site topography & setback envelope modeling",
      "Courtyard cross-ventilation flow calculations",
      "Zoning, egress & circulation schematic diagrams",
      "BDA statutory municipal approval packages",
    ],
  },
  interiors: {
    id: "interiors",
    number: "02",
    title: "Interior Architecture & Joinery",
    lead: "Atmospheric Millwork, Layered Lighting & Tactile Finishes",
    subtitle: "Custom Joinery Fabricated to ±1.5mm Precision",
    metrics: [
      { label: "Teak Grade", value: "Grade-1 Burma Teak" },
      { label: "Acoustic RT60", value: "0.48s Balanced" },
      { label: "Lux Stratum", value: "3-Tier Ambient Scene" },
    ],
    deliverables: [
      "Bespoke joinery & millwork 1:5 fabrication sheets",
      "Curated material board with stone, brass & timber",
      "Integrated architectural lighting & recessed coves",
      "Acoustic balance & interior climate buffer zones",
    ],
  },
  landscape: {
    id: "landscape",
    number: "03",
    title: "Biophilic Landscape Architecture",
    lead: "Microclimate Cooling, Native Flora & Rainwater Swales",
    subtitle: "Natural Ecology as Living Architectural Infrastructure",
    metrics: [
      { label: "Rain Retention", value: "85% Ground Infiltration" },
      { label: "Thermal Drop", value: "-4.2°C Courtyard" },
      { label: "Native Flora", value: "92% Indigenous Species" },
    ],
    deliverables: [
      "Microclimate landscape master planning",
      "Percolation swales & bioswale aquifer recharge",
      "Local stone flag paving & permeable surfaces",
      "Champa, Kadamba & indigenous canopy planting",
    ],
  },
};

export default function ArchitecturalServicesMotion() {
  const [activeDiscipline, setActiveDiscipline] = useState<Discipline>("planning");
  const current = disciplines[activeDiscipline];

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

      {/* Top HUD Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div>
          <div className="text-xs uppercase tracking-widest font-mono text-orange-400 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Interactive Discipline Workbench
          </div>
          <div className="text-sm font-medium text-white/90 mt-0.5">
            Integrated Studio Capabilities · Discipline 0{current.number} / 03
          </div>
        </div>

        {/* Discipline Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            type="button"
            onClick={() => setActiveDiscipline("planning")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeDiscipline === "planning"
                ? "bg-orange-600 text-white font-bold"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Building2 size={14} />
            <span>01. Planning</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveDiscipline("interiors")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeDiscipline === "interiors"
                ? "bg-amber-600 text-white font-bold"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Home size={14} />
            <span>02. Interiors</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveDiscipline("landscape")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeDiscipline === "landscape"
                ? "bg-emerald-600 text-white font-bold"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Trees size={14} />
            <span>03. Landscape</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Dynamic SVG CAD Schematic */}
        <div className="lg:col-span-7 bg-black/40 rounded-2xl p-6 border border-white/10 relative overflow-hidden flex flex-col items-center justify-center min-h-[360px] sm:min-h-[400px]">
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/60 border-b border-white/5 pb-2">
            <span>DISCIPLINE: {current.title.toUpperCase()}</span>
            <span>STANDARD: IS-962 / NBC-2016</span>
            <span className="text-orange-400">STATUS: ACTIVE CAD ENGINE</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDiscipline}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center justify-center my-6"
            >
              <svg viewBox="0 0 500 300" className="w-full max-h-[280px] select-none">
                {/* Crosshairs & Grid */}
                <line x1="250" y1="10" x2="250" y2="290" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="10" y1="150" x2="490" y2="150" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                {/* 01. PLANNING: Setbacks, FAR Volume & Orientation */}
                {activeDiscipline === "planning" && (
                  <g>
                    {/* Site Boundary */}
                    <rect x="50" y="30" width="400" height="240" fill="none" stroke="#666" strokeWidth="1.5" strokeDasharray="6 3" />
                    <text x="60" y="48" fill="#888" fontSize="9" fontFamily="monospace">
                      PROPERTY BOUNDARY (30m x 20m)
                    </text>

                    {/* Setback Lines */}
                    <rect x="90" y="60" width="320" height="180" fill="rgba(200,95,47,0.06)" stroke="#c85f2f" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="250" y="75" textAnchor="middle" fill="#c85f2f" fontSize="8" fontFamily="monospace">
                      MANDATORY FRONT SETBACK: 6.00m
                    </text>

                    {/* Massing Envelopes */}
                    <rect x="110" y="90" width="130" height="130" fill="rgba(200,95,47,0.3)" stroke="#f97316" strokeWidth="2" />
                    <text x="175" y="150" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="600">
                      WING A: RESIDENTIAL
                    </text>
                    <text x="175" y="166" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace">
                      G+2 · 3,400 SQ FT
                    </text>

                    <rect x="270" y="110" width="120" height="110" fill="rgba(200,95,47,0.2)" stroke="#f97316" strokeWidth="2" />
                    <text x="330" y="160" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="600">
                      WING B: LIVING
                    </text>
                    <text x="330" y="176" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace">
                      G+1 · 2,100 SQ FT
                    </text>

                    {/* Central Courtyard Void */}
                    <circle cx="250" cy="155" r="22" fill="#101210" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="250" y="159" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="monospace">
                      COURTYARD
                    </text>

                    {/* Sun Angle Indicator */}
                    <line x1="50" y1="30" x2="110" y2="90" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="45" cy="25" r="8" fill="#f59e0b" />
                    <text x="65" y="25" fill="#f59e0b" fontSize="9" fontFamily="monospace">
                      SUN AZIMUTH +68°
                    </text>
                  </g>
                )}

                {/* 02. INTERIORS: Custom Teak Joinery & Lighting Stratum */}
                {activeDiscipline === "interiors" && (
                  <g>
                    {/* Isometric Interior Bay */}
                    <polygon
                      points="120,60 380,60 440,120 180,120"
                      fill="rgba(245,158,11,0.12)"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points="180,120 440,120 440,240 180,240"
                      fill="rgba(245,158,11,0.06)"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                    />

                    {/* Custom Teak Millwork Console */}
                    <rect x="210" y="150" width="180" height="70" fill="rgba(200,95,47,0.4)" stroke="#c85f2f" strokeWidth="2" />
                    {/* Fluted panel details */}
                    {[220, 235, 250, 265, 280, 295, 310, 325, 340, 355, 370].map((x, i) => (
                      <line key={i} x1={x} y1="150" x2={x} y2="220" stroke="#c85f2f" strokeWidth="1" strokeOpacity="0.7" />
                    ))}
                    <text x="300" y="190" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      BURMA TEAK FLUTED JOINERY
                    </text>

                    {/* Lighting Cone Streamlines */}
                    <polygon points="260,80 230,150 290,150" fill="rgba(255,255,200,0.12)" />
                    <polygon points="340,80 310,150 370,150" fill="rgba(255,255,200,0.12)" />
                    <circle cx="260" cy="80" r="4" fill="#fbbf24" />
                    <circle cx="340" cy="80" r="4" fill="#fbbf24" />
                    <text x="300" y="75" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace">
                      2700K WARM AMBIENT DOWNLIGHTS
                    </text>
                  </g>
                )}

                {/* 03. LANDSCAPE: Rainwater Bioswale & Biophilic Canopy */}
                {activeDiscipline === "landscape" && (
                  <g>
                    {/* Permeable Ground Paving */}
                    <rect x="80" y="180" width="340" height="80" fill="rgba(34,197,94,0.08)" stroke="#22c55e" strokeWidth="1.5" />
                    <text x="250" y="245" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">
                      PERMEABLE KHANDOLITE STONE PAVERS
                    </text>

                    {/* Bioswale Infiltration Trench */}
                    <path
                      d="M 100 200 Q 250 230 400 200"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="4"
                      strokeDasharray="6 3"
                    />
                    <text x="250" y="215" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                      AQUIFER RECHARGE BIOSWALE (85% RETENTION)
                    </text>

                    {/* Native Tree Canopy Canopy Shading */}
                    <circle cx="160" cy="110" r="45" fill="rgba(34,197,94,0.3)" stroke="#22c55e" strokeWidth="2" />
                    <line x1="160" y1="155" x2="160" y2="180" stroke="#a16207" strokeWidth="4" />
                    <text x="160" y="112" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace">
                      NATIVE CHAMPA
                    </text>
                    <text x="160" y="125" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">
                      CANOPY SHADE
                    </text>

                    <circle cx="340" cy="95" r="55" fill="rgba(34,197,94,0.3)" stroke="#22c55e" strokeWidth="2" />
                    <line x1="340" y1="150" x2="340" y2="180" stroke="#a16207" strokeWidth="5" />
                    <text x="340" y="97" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace">
                      KADAMBA TREE
                    </text>
                    <text x="340" y="110" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">
                      MICROCLIMATE -4.2°C
                    </text>
                  </g>
                )}
              </svg>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/50 border-t border-white/5 pt-2">
            <span>ENGINE: BIM / CAD COORDINATED</span>
            <span className="text-orange-400 font-bold">CLICK DISCIPLINE TO SWITCH</span>
          </div>
        </div>

        {/* Right: Technical Metrics & Scope */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-orange-600/30 text-orange-400 font-bold">
                Discipline 0{current.number}
              </span>
              <span className="text-xs font-mono text-white/60">{current.subtitle}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-white mb-2" style={{ fontFamily: "var(--serif)" }}>
              {current.title}
            </h3>
            <p className="text-sm text-orange-200/90 mb-6">{current.lead}</p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {current.metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono text-white/50 uppercase">{m.label}</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-1 font-mono">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Scope Deliverables */}
            <div>
              <div className="text-[11px] uppercase tracking-wider font-mono text-white/50 mb-3">
                Execution Deliverables:
              </div>
              <ul className="space-y-2">
                {current.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                    <CheckCircle2 size={14} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
