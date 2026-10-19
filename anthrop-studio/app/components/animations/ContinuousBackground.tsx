"use client";

import { motion } from "framer-motion";

export default function ContinuousBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          top: "-50%",
          left: "-25%",
          width: "150%",
          height: "200%",
          background: "radial-gradient(circle at 50% 50%, rgba(22,22,22,0.03) 0%, transparent 60%)",
          opacity: 0.8,
        }}
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 25, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          top: "10%",
          right: "-30%",
          width: "100%",
          height: "150%",
          background: "radial-gradient(circle at 50% 50%, rgba(200,80,30,0.015) 0%, transparent 50%)",
          opacity: 0.6,
        }}
      />
      {/* Subtle architectural grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
