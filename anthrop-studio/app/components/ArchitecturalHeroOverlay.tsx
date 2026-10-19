"use client";

import { motion } from "framer-motion";

export default function ArchitecturalHeroOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-10 hidden md:block"
      aria-hidden="true"
    >
      {/* Top Left Dimension Marker */}
      <div className="absolute top-28 left-8 text-[11px] font-mono text-white/40 flex items-center gap-2">
        <span className="w-2 h-2 border-l border-t border-white/60 inline-block" />
        <span>AXIS 01 · 20.29°N 85.82°E</span>
      </div>

      {/* Top Right Scale & North Compass Vector */}
      <div className="absolute top-28 right-8 text-[11px] font-mono text-white/40 flex items-center gap-3">
        <span>SCALE 1:100 · METRIC</span>
        <motion.span
          className="inline-block text-orange-400 font-bold"
          animate={{ rotate: [0, 8, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          ▲ N
        </motion.span>
        <span className="w-2 h-2 border-r border-t border-white/60 inline-block" />
      </div>

      {/* Bottom Left Architectural Keyword Badge */}
      <div className="absolute bottom-10 left-8 text-[11px] font-mono text-white/50 flex items-center gap-3">
        <span className="w-2 h-2 border-l border-b border-white/60 inline-block" />
        <span className="px-2 py-0.5 rounded bg-white/10 text-orange-300 font-medium">
          CLIMATE-RESPONSIVE ARCHITECTURE
        </span>
      </div>

      {/* Bottom Right Module Marker */}
      <div className="absolute bottom-10 right-8 text-[11px] font-mono text-white/40 flex items-center gap-2">
        <span>STRUCTURAL MODULE: 6.0m</span>
        <span className="w-2 h-2 border-r border-b border-white/60 inline-block" />
      </div>
    </div>
  );
}
