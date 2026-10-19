"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, CloudRain, Wind, ShieldCheck, Thermometer } from "lucide-react";

type ClimateMode = "summer" | "monsoon" | "evening";

interface TectonicLayer {
  id: string;
  name: string;
  material: string;
  rValue: string;
  function: string;
  color: string;
}

const tectonicLayers: TectonicLayer[] = [
  {
    id: "louvers",
    name: "01. Kinetic Teak Louvers",
    material: "Sustainably sourced Burma Teak",
    rValue: "Solar Shading Coefficient: 0.28",
    function: "Deflects 72% direct infrared radiation while maintaining exterior vistas",
    color: "#c85f2f",
  },
  {
    id: "cavity",
    name: "02. Ventilated Air Cavity",
    material: "50mm Continuous Convection Gap",
    rValue: "Thermal Break R-12",
    function: "Induced chimney stack effect expels convective heat before it reaches interiors",
    color: "#38bdf8",
  },
  {
    id: "masonry",
    name: "03. Thermal Mass Masonry",
    material: "Stabilized Earth & Local Fly-Ash",
    rValue: "Thermal Lag: 9.4 Hours",
    function: "Absorbs daytime heat and radiates warmth only after outdoor night cooldown",
    color: "#a16207",
  },
  {
    id: "interior",
    name: "04. Lime Plaster & Teak Joinery",
    material: "Breathable Slaked Lime & Millwork",
    rValue: "Humidity Buffer: 45-55% RH",
    function: "Naturally regulates indoor humidity during Odisha's humid monsoons",
    color: "#eab308",
  },
];

export default function ArchitecturalTectonicsMotion() {
  const [climateMode, setClimateMode] = useState<ClimateMode>("summer");
  const [selectedLayerId, setSelectedLayerId] = useState<string>("louvers");

  const selectedLayer = tectonicLayers.find((l) => l.id === selectedLayerId) || tectonicLayers[0];

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
            Tectonic Envelope & Climate Simulation
          </div>
          <div className="text-sm font-medium text-white/90 mt-0.5">
            Cross-Section Physics · Odisha Microclimate Engine
          </div>
        </div>

        {/* Climate Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            type="button"
            onClick={() => setClimateMode("summer")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              climateMode === "summer" ? "bg-orange-600 text-white font-bold" : "text-white/60 hover:text-white"
            }`}
          >
            <Sun size={14} />
            <span>Summer 39°C</span>
          </button>
          <button
            type="button"
            onClick={() => setClimateMode("monsoon")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              climateMode === "monsoon" ? "bg-sky-600 text-white font-bold" : "text-white/60 hover:text-white"
            }`}
          >
            <CloudRain size={14} />
            <span>Monsoon 88% RH</span>
          </button>
          <button
            type="button"
            onClick={() => setClimateMode("evening")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              climateMode === "evening" ? "bg-emerald-600 text-white font-bold" : "text-white/60 hover:text-white"
            }`}
          >
            <Wind size={14} />
            <span>Evening Breeze</span>
          </button>
        </div>
      </div>

      {/* Main Simulation Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Dynamic Animated Architectural Cross-Section SVG */}
        <div className="lg:col-span-7 bg-black/40 rounded-2xl p-6 border border-white/10 relative overflow-hidden flex flex-col items-center justify-center min-h-[360px] sm:min-h-[400px]">
          {/* Real-time Environmental Readout */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/60 border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <Thermometer size={13} className="text-orange-400" />
              <span>OUTDOOR: {climateMode === "summer" ? "39.4°C" : climateMode === "monsoon" ? "31.2°C" : "26.8°C"}</span>
            </span>
            <span className="text-emerald-400 font-bold">
              INDOOR: {climateMode === "summer" ? "24.1°C (Passive)" : climateMode === "monsoon" ? "23.8°C (Balanced)" : "22.5°C"}
            </span>
            <span className="hidden sm:inline">DELTA-T: -15.3°C</span>
          </div>

          <svg viewBox="0 0 520 320" className="w-full max-h-[300px] select-none my-6">
            <defs>
              <linearGradient id="sunRayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="rainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Raft Concrete Foundation Floor */}
            <rect x="40" y="250" width="440" height="35" fill="rgba(255,255,255,0.05)" stroke="#666" strokeWidth="1.5" />
            <text x="260" y="272" textAnchor="middle" fill="#888" fontSize="10" fontFamily="monospace">
              CONTINUOUS R.C.C. PLINTH & MOISTURE BARRIER
            </text>

            {/* Ceiling Slab */}
            <rect x="40" y="35" width="440" height="25" fill="rgba(255,255,255,0.05)" stroke="#666" strokeWidth="1.5" />
            <text x="260" y="52" textAnchor="middle" fill="#888" fontSize="10" fontFamily="monospace">
              ROOF OVERHANG DECK (1200mm SHADING CANOPY)
            </text>

            {/* Layer 1: Teak Kinetic Louver Screen */}
            <g
              onClick={() => setSelectedLayerId("louvers")}
              className="cursor-pointer"
            >
              {[70, 95, 120, 145, 170, 195, 220].map((y, i) => (
                <rect
                  key={i}
                  x="80"
                  y={y}
                  width="20"
                  height="16"
                  rx="2"
                  fill="#c85f2f"
                  opacity={selectedLayerId === "louvers" ? 1 : 0.75}
                  transform={`rotate(-25 90 ${y + 8})`}
                />
              ))}
              <text x="90" y="244" textAnchor="middle" fill="#c85f2f" fontSize="8" fontFamily="monospace">
                LOUVER
              </text>
            </g>

            {/* Layer 2: 50mm Air Convection Cavity */}
            <g
              onClick={() => setSelectedLayerId("cavity")}
              className="cursor-pointer"
            >
              <rect
                x="120"
                y="60"
                width="28"
                height="190"
                fill="rgba(56, 189, 248, 0.12)"
                stroke="#38bdf8"
                strokeWidth={selectedLayerId === "cavity" ? 2 : 1}
                strokeDasharray="4 3"
              />
              {/* Upward Airflow Convection Arrows */}
              <path
                d="M 134 230 L 134 80"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <polygon points="134,70 130,80 138,80" fill="#38bdf8" />
              <text x="134" y="160" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace" transform="rotate(-90 134 160)">
                CONVECTIVE EXHAUST
              </text>
            </g>

            {/* Layer 3: Thermal Mass Masonry Leaf */}
            <g
              onClick={() => setSelectedLayerId("masonry")}
              className="cursor-pointer"
            >
              <rect
                x="160"
                y="60"
                width="45"
                height="190"
                fill="rgba(161, 98, 7, 0.35)"
                stroke="#a16207"
                strokeWidth={selectedLayerId === "masonry" ? 2 : 1.5}
              />
              {/* Brick hatching lines */}
              {[80, 110, 140, 170, 200, 230].map((y, i) => (
                <line key={i} x1="160" y1={y} x2="205" y2={y} stroke="#a16207" strokeWidth="1" strokeOpacity="0.6" />
              ))}
              <text x="182" y="160" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace" transform="rotate(-90 182 160)">
                THERMAL MASS (230mm)
              </text>
            </g>

            {/* Layer 4: Interior Breathable Lime & Joinery */}
            <g
              onClick={() => setSelectedLayerId("interior")}
              className="cursor-pointer"
            >
              <rect
                x="215"
                y="60"
                width="20"
                height="190"
                fill="rgba(234, 179, 8, 0.25)"
                stroke="#eab308"
                strokeWidth={selectedLayerId === "interior" ? 2 : 1}
              />
              <text x="225" y="160" textAnchor="middle" fill="#eab308" fontSize="8" fontFamily="monospace" transform="rotate(-90 225 160)">
                LIME PLASTER
              </text>
            </g>

            {/* Interior Living Volume */}
            <rect x="245" y="60" width="225" height="190" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" />
            <text x="355" y="130" textAnchor="middle" fill="#ffffff" fontSize="13" fontFamily="sans-serif" fontWeight="600">
              PROTECTED INTERIOR SANCTUARY
            </text>
            <text x="355" y="150" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="monospace">
              24.1°C · Natural Daylight & Acoustically Isolated
            </text>

            {/* CLIMATE SIMULATION PARTICLES / VECTORS */}
            {climateMode === "summer" && (
              <g>
                {/* Solar incident vectors bouncing off louvers */}
                <line x1="20" y1="50" x2="80" y2="100" stroke="#f59e0b" strokeWidth="2.5" />
                <line x1="80" y1="100" x2="30" y2="140" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />

                <line x1="20" y1="100" x2="80" y2="150" stroke="#f59e0b" strokeWidth="2.5" />
                <line x1="80" y1="150" x2="30" y2="190" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />

                <circle cx="20" cy="50" r="14" fill="#f59e0b" fillOpacity="0.4" />
                <circle cx="20" cy="50" r="8" fill="#f59e0b" />
                <text x="25" y="30" fill="#f59e0b" fontSize="9" fontFamily="monospace">
                  DIRECT SOLAR RADIATION (850 W/m²)
                </text>
              </g>
            )}

            {climateMode === "monsoon" && (
              <g stroke="#38bdf8" strokeWidth="1.5">
                {/* Rain streaks deflected by roof overhang and teak louvers */}
                <line x1="30" y1="20" x2="60" y2="70" strokeDasharray="8 4" />
                <line x1="45" y1="60" x2="75" y2="110" strokeDasharray="8 4" />
                <line x1="20" y1="120" x2="50" y2="170" strokeDasharray="8 4" />
                <line x1="35" y1="180" x2="65" y2="230" strokeDasharray="8 4" />
                <text x="15" y="25" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                  MONSOON DEFLECTION RAIN-SCREEN
                </text>
              </g>
            )}

            {climateMode === "evening" && (
              <g stroke="#34d399" strokeWidth="2" strokeDasharray="6 3">
                {/* Gentle cooling breeze flowing through louvers across room */}
                <path d="M 30 140 Q 80 135 130 145 T 260 140 T 450 140" fill="none" />
                <path d="M 30 170 Q 80 165 130 175 T 260 170 T 450 170" fill="none" />
                <text x="30" y="125" fill="#34d399" fontSize="9" fontFamily="monospace">
                  PASSIVE NIGHT FLUSHING BREEZE
                </text>
              </g>
            )}
          </svg>

          {/* Bottom Interactive Prompt */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/50 border-t border-white/5 pt-2">
            <span>CLICK ANY LAYER TO INSPECT SPECIFICATIONS</span>
            <span className="text-orange-400 font-bold">ACTIVE: {selectedLayer.name.toUpperCase()}</span>
          </div>
        </div>

        {/* Right: Selected Layer Specifications & Physics */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-orange-600/30 text-orange-400 font-bold">
                Tectonic Specification
              </span>
              <span className="text-xs font-mono text-white/60">Passive Envelope</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-white mb-2" style={{ fontFamily: "var(--serif)" }}>
              {selectedLayer.name}
            </h3>
            <p className="text-sm text-orange-200/90 mb-4">{selectedLayer.material}</p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <div className="text-xs font-mono text-orange-400 font-semibold mb-1">Thermodynamic Performance:</div>
              <div className="text-sm font-mono text-white font-bold">{selectedLayer.rValue}</div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed mb-6">{selectedLayer.function}</p>

            {/* Layer Selection Chips */}
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-wider font-mono text-white/40 mb-2">
                Inspect Assembly Elements:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {tectonicLayers.map((layer) => (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setSelectedLayerId(layer.id)}
                    className="p-2.5 rounded-xl text-left transition-all border text-xs font-medium"
                    style={{
                      background: selectedLayerId === layer.id ? "rgba(200, 95, 47, 0.25)" : "rgba(255, 255, 255, 0.04)",
                      borderColor: selectedLayerId === layer.id ? "#f97316" : "rgba(255, 255, 255, 0.08)",
                      color: selectedLayerId === layer.id ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {layer.name.split(". ")[1]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
