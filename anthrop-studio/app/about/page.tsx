import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About anthrop Architecture Studio | Philosophy & Tectonic Design",
  description:
    "Learn about anthrop architecture studio in Bhubaneswar, Odisha. Discover our architectural philosophy, climate-responsive envelope design, material honesty, and spatial vision.",
  keywords: [
    "about anthrop studio",
    "architecture firm Bhubaneswar",
    "sustainable architects Odisha",
    "climate-responsive architecture",
    "tectonic design philosophy",
    "luxury residential architects",
  ],
  openGraph: {
    title: "About anthrop Architecture Studio | Philosophy & Design",
    description:
      "Designing from the outside in. Discover anthrop's philosophy of context, climate-responsive tectonics, and material authenticity in Bhubaneswar, Odisha.",
    url: "https://anthropstudio.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
