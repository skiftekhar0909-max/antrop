import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | anthrop Architecture Studio Bhubaneswar",
  description:
    "Find answers to common questions about anthrop architecture studio: our 5-phase design process, BDA statutory approvals, residential project timelines, and custom teak millwork in Odisha.",
  keywords: [
    "architecture FAQ Bhubaneswar",
    "architect consultation questions",
    "BDA approval timeline architecture",
    "villa construction stages Odisha",
    "custom furniture joinery cost",
    "sustainable architecture questions",
  ],
  openGraph: {
    title: "Frequently Asked Questions | anthrop Architecture Studio",
    description:
      "Clear answers regarding anthrop's architectural process, BDA approvals, residential timelines, and custom joinery in Bhubaneswar, Odisha.",
    url: "https://anthropstudio.com/faq",
    type: "website",
  },
};

export default function FAQPage() {
  return <FaqClient />;
}
