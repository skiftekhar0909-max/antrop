"use client";

import { motion } from "framer-motion";

const items = [
  "ARCHITECTURAL PLANNING",
  "CONTEMPORARY ELEVATIONS",
  "LUXURY VILLA ARCHITECTURE",
  "BESPOKE INTERIORS",
  "CUSTOM WOODEN JOINERY",
  "BIOPHILIC LANDSCAPES",
  "CLIMATE-RESPONSIVE ZONING",
  "MATERIAL HONESTY",
  "DAYLIGHT OPTIMIZATION",
  "BHUBANESWAR · ODISHA",
  "SPATIAL RESTRAINT",
  "SUSTAINABLE TOPOGRAPHY",
];

export default function ArchitecturalTicker() {
  return (
    <div
      className="relative w-full overflow-hidden border-y border-white/10"
      style={{
        background: "#151814",
        padding: "1.1rem 0",
        color: "var(--paper)",
      }}
      role="region"
      aria-label="Studio Disciplines and Keywords Marquee"
    >
      <div className="flex select-none">
        <motion.div
          className="flex flex-shrink-0 items-center gap-8 whitespace-nowrap"
          animate={{ x: [0, -1400] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
        >
          {items.concat(items).map((keyword, index) => (
            <div key={index} className="flex items-center gap-8">
              <span
                className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
                style={{
                  color: index % 2 === 0 ? "#f2efe7" : "var(--orange)",
                  fontFamily: "var(--sans)",
                }}
              >
                {keyword}
              </span>
              <span className="text-white/30 text-xs font-mono" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
