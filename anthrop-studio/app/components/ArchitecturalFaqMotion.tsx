"use client";

import { motion } from "framer-motion";
import { HelpCircle, Clock, ShieldCheck, Scale, Award, Sparkles } from "lucide-react";

export default function ArchitecturalFaqMotion() {
  const metrics = [
    {
      icon: Clock,
      label: "Discovery Response",
      value: "< 24 Hours",
      detail: "Direct consultation booking at DN Oxypark",
    },
    {
      icon: Scale,
      label: "Regulatory Precision",
      value: "100% BDA",
      detail: "Full compliance with NBC-2016 & Odisha bylaws",
    },
    {
      icon: ShieldCheck,
      label: "Detail Fidelity",
      value: "±2mm Tol.",
      detail: "Zero ambiguity in CAD construction packages",
    },
    {
      icon: Award,
      label: "Client Trust Score",
      value: "4.9 / 5.0",
      detail: "57+ verified commissions across Odisha",
    },
  ];

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 my-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #181b18 0%, #101210 100%)",
        color: "#f5f4ef",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.35)",
      }}
    >
      {/* Background CAD Matrix */}
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
            <HelpCircle size={17} />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold block">
              Engagement Integrity Matrix
            </span>
            <span className="text-xs text-white/70">
              anthrop Studio Operational & Regulatory Standards
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active Practice Standards · 2025/2026</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon size={16} className="text-orange-400" />
                <span className="text-[10px] font-mono text-white/40">METRIC 0{index + 1}</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mb-1">
                {item.value}
              </div>
              <div className="text-xs font-medium text-white/90 mb-1">{item.label}</div>
              <div className="text-[11px] text-white/50 leading-relaxed">{item.detail}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
