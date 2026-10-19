import type { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Meet Our Team — Architectural Planners, Interior & Landscape Designers",
  description:
    "Meet anthrop studio's leadership and design team in Bhubaneswar, Odisha. Experienced principal architects, lead interior designers, and biophilic landscape specialists.",
  keywords: [
    "Meet our team anthrop",
    "architects in Bhubaneswar",
    "principal architect Odisha",
    "interior designers Bhubaneswar",
    "landscape architect Odisha",
    "residential architects team",
    "spatial planners Bhubaneswar",
    "contemporary design team Odisha",
    "anthrop studio architects",
    "Ar Rahul Sharma architect",
  ],
  openGraph: {
    title: "Meet Our Architectural & Design Team — anthrop Studio",
    description:
      "A collaborative multidisciplinary team of licensed architects, interior spatial designers, and landscape planners in Bhubaneswar, Odisha.",
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
