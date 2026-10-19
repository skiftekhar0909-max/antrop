"use client";

import { motion } from "framer-motion";
import { Users, Award, ShieldCheck, CheckCircle2, Compass, Layers } from "lucide-react";

export default function ArchitecturalTeamMotion() {
  const practicePillars = [
    {
      icon: Award,
      title: "Council of Architecture (COA)",
      stat: "Licensed Practice",
      desc: "All commissions are stamped and executed under licensed COA certification and NBC-2016 safety codes.",
    },
    {
      icon: Layers,
      title: "Multidisciplinary Integration",
      stat: "Zero Handover Clashes",
      desc: "Architecture, interior joinery, and biophilic landscape designed simultaneously in single BIM/CAD models.",
    },
    {
      icon: Compass,
      title: "Site Topography & Climate",
      stat: "Odisha-Specific Design",
      desc: "Tailored microclimate passive cooling for Bhubaneswar and coastal Odisha's extreme tropical temperature swings.",
    },
    {
      icon: ShieldCheck,
      title: "Master Artisan Network",
      stat: "±2mm Execution",
      desc: "Direct partnerships with Odisha master stone-masons, brass-smiths, and Burma teak joiners.",
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
      {/* Background CAD Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
            <Users size={16} />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold block">
              Studio Practice Standards
            </span>
            <span className="text-xs text-white/70">
              The Engineering & Artisanal Discipline Behind Every Project
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Multidisciplinary Integration Active</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {practicePillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon size={18} className="text-orange-400" />
                <span className="text-[10px] font-mono text-emerald-400 font-semibold">{pillar.stat}</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1.5">{pillar.title}</h4>
              <p className="text-xs text-white/60 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
