"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, Calendar, Clock, CheckCircle2 } from "lucide-react";

export default function ArchitecturalContactMotion() {
  const [selectedTypology, setSelectedTypology] = useState<string>("villa");

  const typologies = [
    {
      id: "villa",
      name: "Residential Villa",
      scale: "3,500 — 12,000 sq ft",
      timeline: "10 — 14 Weeks Concept & CAD",
      deliverable: "Complete Architecture + Courtyard Planning",
    },
    {
      id: "interior",
      name: "Luxury Interior",
      scale: "1,800 — 6,000 sq ft",
      timeline: "6 — 8 Weeks Detailing & Joinery",
      deliverable: "Custom Burma Teak Millwork + 3D Renders",
    },
    {
      id: "landscape",
      name: "Biophilic Landscape",
      scale: "2,000 — 25,000 sq ft",
      timeline: "4 — 6 Weeks Ecology Plan",
      deliverable: "Bioswales + Native Flora + Water Pavilions",
    },
    {
      id: "commercial",
      name: "Commercial & Office",
      scale: "4,000 — 20,000 sq ft",
      timeline: "8 — 12 Weeks Zoning & CAD",
      deliverable: "Climate Elevation + Acoustic Workspace",
    },
  ];

  const currentTypology = typologies.find((t) => t.id === selectedTypology) || typologies[0];

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 my-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #181b18 0%, #101210 100%)",
        color: "#f5f4ef",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.35)",
      }}
    >
      {/* Background CAD Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top HUD Line */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
            <Compass size={16} className="animate-spin" style={{ animationDuration: "25s" }} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest font-mono text-orange-400 font-semibold">
              Studio Geolocation & Commission Feasibility
            </div>
            <div className="text-xs text-white/70">
              DN Oxypark, Dumduma · 20.2961° N, 85.8245° E
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Consultations Open Today (10 AM — 7 PM)</span>
        </div>
      </div>

      {/* Typology Estimator Row */}
      <div className="relative z-10">
        <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
          Select Your Project Typology for Planning Benchmark:
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
          {typologies.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setSelectedTypology(t.id)}
              className="p-3 rounded-xl text-left transition-all border text-xs font-mono"
              style={{
                background: selectedTypology === t.id ? "rgba(200, 95, 47, 0.25)" : "rgba(255, 255, 255, 0.04)",
                borderColor: selectedTypology === t.id ? "#f97316" : "rgba(255, 255, 255, 0.08)",
                color: selectedTypology === t.id ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
              }}
            >
              <div className="font-bold text-white mb-0.5">{t.name}</div>
              <div className="text-[10px] text-white/50">{t.scale}</div>
            </button>
          ))}
        </div>

        {/* Dynamic Typology Feasibility Output */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-orange-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">
                {currentTypology.name}: {currentTypology.deliverable}
              </div>
              <div className="text-[11px] font-mono text-white/60 mt-0.5">
                Expected Design Phase: <strong className="text-orange-300">{currentTypology.timeline}</strong>
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-white/40">
            Site Visits: Bhubaneswar · Cuttack · Puri
          </div>
        </div>
      </div>
    </div>
  );
}
