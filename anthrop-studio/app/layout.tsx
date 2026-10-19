import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import FloatingConsultationButton from "./components/FloatingConsultationButton";
import LenisProvider from "./components/animations/LenisProvider";
import ContinuousBackground from "./components/animations/ContinuousBackground";

export const metadata: Metadata = {
  title: {
    default: "anthrop — Architectural Planning, Luxury Interiors & Landscape Architecture",
    template: "%s — anthrop Studio",
  },
  description:
    "anthrop is a premier architecture studio based in Bhubaneswar, Odisha, specializing in climate-responsive architectural planning, bespoke residential interiors, luxury villa elevations, and sustainable biophilic landscape architecture.",
  keywords: [
    "architecture studio Bhubaneswar",
    "architects in Bhubaneswar",
    "interior design Bhubaneswar",
    "landscape architecture Odisha",
    "luxury villa elevation",
    "contemporary residential architecture",
    "bespoke interior architecture",
    "custom wooden joinery",
    "spatial planning Odisha",
    "biophilic design",
    "climate-responsive architecture",
    "anthrop studio DN Oxypark",
  ],
  authors: [{ name: "anthrop studio" }],
  creator: "anthrop architecture studio",
  icons: {
    icon: "/assets/anthrop-symbol-dark.png",
    shortcut: "/assets/anthrop-symbol-dark.png",
  },
  openGraph: {
    title: "anthrop — Planning, Interiors & Landscape",
    description:
      "Contemporary architectural planning, bespoke interior design, and sustainable landscape architecture in Bhubaneswar, Odisha.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <ContinuousBackground />
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
          <FloatingConsultationButton />
        </LenisProvider>
      </body>
    </html>
  );
}
