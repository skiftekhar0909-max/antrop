import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Architectural Process & Methodology | anthrop Studio Bhubaneswar",
  description:
    "Discover anthrop's 5-phase architectural methodology: Discovery & Topography, Concept Massing, Design Development, CAD Documentation, and Site Stewardship in Odisha.",
  keywords: [
    "architectural design process",
    "architecture workflow Bhubaneswar",
    "concept massing and daylighting",
    "CAD construction drawings Odisha",
    "site supervision architecture",
    "residential architecture phases",
  ],
  openGraph: {
    title: "Architectural Process & Methodology | anthrop Studio",
    description:
      "A structured, climate-responsive architectural methodology from site topography analysis to precision handover.",
    url: "https://anthropstudio.com/process",
    type: "website",
  },
};

export default function ProcessPage() {
  return <ProcessClient />;
}
