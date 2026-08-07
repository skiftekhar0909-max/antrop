"use client";

import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  elementType?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function TextReveal({ 
  text, 
  className = "", 
  delay = 0,
  elementType: Element = "div" 
}: TextRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: "150%", rotate: 5 },
    show: {
      opacity: 1,
      y: "0%",
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Very dramatic easeOutExpo style
      },
    },
  };

  return (
    <Element className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.25em" }}
      >
        {words.map((word, index) => (
          <span key={index} style={{ overflow: "hidden", display: "inline-flex", paddingBottom: "0.1em", marginTop: "-0.1em" }}>
            <motion.span variants={child} style={{ display: "inline-block", transformOrigin: "left bottom" }}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Element>
  );
}
