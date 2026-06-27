import type { Metadata } from "next";
import { Suspense } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ScrollToTop from "../hook/scrollToTop";
import GoogleAnalyticsTracker from "../components/GoogleAnalyticsTracker";
import "../global.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: {
    default: "Batista AI Infrastructure and Agent Services | NYC",
    template: "%s | Batistack",
  },
  description:
    "AI agents physically installed in your NYC business. 24/7 automation for HVAC, plumbing, electrical and service trades.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker />
        </Suspense>
        <CustomCursor />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
