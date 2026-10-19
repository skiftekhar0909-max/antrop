"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Maximize2, Compass, Award, Building, Sparkles } from "lucide-react";

export default function ArchitecturalProjectsMotion() {
  const [selectedMetric, setSelectedMetric] = useState<number>(0);

  const highlights = [
    {
      label: "Portfolio Scale",
      value: "148,000+",
      unit: "Sq Ft Designed",
      caption: "Spanning luxury residential villas, contemporary duplexes, and corporate headquarters.",
    },
    {
      label: "Execution Precision",
      value: "±2 mm",
      unit: "Tolerance Standard",
      caption: "Custom Burma teak joinery, shadow reveals, and stone transitions executed without ambiguity.",
    },
    {
      label: "Thermal Comfort",
      value: "-4.5°C",
      unit: "Passive Delta",
      caption: "Climate-responsive double cavity walls, deep roof overhangs, and shaded courtyards.",
    },
    {
      label: "Client Rating",
      value: "4.9 ★",
      unit: "57 Reviews",
      caption: "Unanimous client satisfaction across Bhubaneswar, Cuttack, Puri, and coastal Odisha.",
    },
  ];

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 my-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #181b18 0%, #101210 100%)",
        color: "#f5f4ef",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.35)",
      }}
    >
      {/* Background CAD Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Header Line */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
            <Layers size={16} />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold block">
              Architectural Commission Index
            </span>
            <span className="text-xs text-white/70">
              Built Work & Performance Metrics · Odisha Portfolio
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Verified Site Handover Status</span>
        </div>
      </div>

      {/* Interactive Metric Cards */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
        {highlights.map((item, idx) => {
          const isSelected = selectedMetric === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedMetric(idx)}
              className="p-4 rounded-2xl text-left transition-all relative overflow-hidden"
              style={{
                background: isSelected ? "rgba(200, 95, 47, 0.2)" : "rgba(255, 255, 255, 0.03)",
                border: isSelected ? "1px solid rgba(249, 115, 22, 0.6)" : "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1">
                {item.label}
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-0.5">
                {item.value}
              </div>
              <div className="text-xs text-orange-300 font-mono font-medium">{item.unit}</div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Caption for Selected Metric */}
      <div className="relative z-10 p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70 flex items-center justify-between">
        <span>{highlights[selectedMetric].caption}</span>
        <span className="text-[10px] font-mono text-orange-400 hidden sm:inline">
          TAP CARD TO INSPECT DETAIL
        </span>
      </div>
    </div>
  );
}
