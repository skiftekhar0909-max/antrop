import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import LenisProvider from "./components/animations/LenisProvider";
import ContinuousBackground from "./components/animations/ContinuousBackground";

export const metadata: Metadata = {
  title: {
    default: "anthrop — Planning, Interiors & Landscape",
    template: "%s — anthrop",
  },
  description:
    "anthrop is a Bhubaneswar design studio shaping contemporary spaces through architectural planning, interior design and landscape architecture.",
  icons: {
    icon: "/assets/anthrop-symbol-dark.png",
    shortcut: "/assets/anthrop-symbol-dark.png",
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
        </LenisProvider>
      </body>
    </html>
  );
}
