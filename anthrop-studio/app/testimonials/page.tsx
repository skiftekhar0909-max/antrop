import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | anthrop Architecture Studio Bhubaneswar",
  description:
    "Read genuine reviews and client testimonials for anthrop architecture studio in Bhubaneswar, Odisha. Discover experiences from residential villa owners, commercial leaders, and interior clients.",
  keywords: [
    "anthrop studio testimonials",
    "architect reviews bhubaneswar",
    "architecture client feedback odisha",
    "interior design reviews bhubaneswar",
    "luxury villa architect reviews",
    "sustainable architecture feedback",
  ],
  openGraph: {
    title: "Client Testimonials & Reviews | anthrop Architecture Studio",
    description:
      "Hear directly from homeowners and commercial clients who partnered with anthrop architecture studio for residential, interior, and landscape commissions.",
    url: "https://anthropstudio.com/testimonials",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
