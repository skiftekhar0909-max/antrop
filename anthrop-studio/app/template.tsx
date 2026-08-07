"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // 5 staggered columns
  const columns = 5;

  const expand: Variants = {
    initial: { top: 0 },
    enter: (i: number) => ({
      top: "100%",
      transition: {
        duration: 1.2,
        delay: 0.05 * i,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    exit: (i: number) => ({
      top: 0,
      transition: {
        duration: 1.2,
        delay: 0.05 * i,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const overlayOpacity: Variants = {
    initial: { opacity: 1 },
    enter: {
      opacity: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div key={pathname} className="relative">
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          pointerEvents: "none",
          zIndex: 100,
          display: "flex"
        }}
      >
        {[...Array(columns)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={expand}
            initial="initial"
            animate="enter"
            exit="exit"
            style={{
              position: "relative",
              height: "100%",
              width: "20%",
              background: "#1c1b1a" // Brand dark color
            }}
          />
        ))}
      </div>
      
      {/* Background Dimmer */}
      <motion.div
        variants={overlayOpacity}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: 99,
          pointerEvents: "none"
        }}
      />

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
