"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, ArrowDown } from "lucide-react";
import { useLenis } from "lenis/react";

export default function FloatingConsultationButton() {
  const pathname = usePathname();
  const lenis = useLenis();
  const isContactPage = pathname === "/contact";

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isContactPage) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo("#booking-form", { offset: -90, duration: 1.2 });
      } else {
        const bookingSection = document.getElementById("booking-form") || document.getElementById("main-content");
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <motion.div
      className="floating-consultation-wrap"
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      role="region"
      aria-label="Studio Consultation Quick Access"
    >
      <Link
        href="/contact"
        onClick={handleContactClick}
        className="floating-consultation-btn group"
        aria-label="Book a consultation with anthrop studio"
      >
        <span className="floating-consultation-icon" aria-hidden="true">
          <Calendar size={17} strokeWidth={2.2} />
          <span className="floating-consultation-pulse-ring" />
          <span className="floating-consultation-pulse" />
        </span>

        <span className="floating-consultation-label">
          <span>{isContactPage ? "Request Appointment" : "Book a Consultation"}</span>
          <span className="floating-consultation-arrow" aria-hidden="true">
            {isContactPage ? <ArrowDown size={14} strokeWidth={2.4} /> : <ArrowUpRight size={14} strokeWidth={2.4} />}
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
