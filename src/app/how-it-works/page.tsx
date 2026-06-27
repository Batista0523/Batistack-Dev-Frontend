import type { Metadata } from "next";
import HowItWorks from "../../views/HowItWorks";

export const metadata: Metadata = {
  title: "How Batistack Autopilot Works | AI Workforce for NYC",
  description:
    "From discovery call to installed AI workforce in 4 steps. See exactly how Batistack installs, trains, and runs your AI agents on Apple Silicon hardware at your NYC business location.",
  openGraph: {
    title: "How Batistack Autopilot Works | AI Workforce for NYC",
    description:
      "Discovery → Custom build → Hardware installation → You're live. Four steps to a 24/7 AI workforce at your NYC business.",
    url: "https://batistack.com/how-it-works",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Batistack Works | 4 Steps to AI Workforce",
    description: "Discovery → Build → Install → Live. AI in your NYC business in weeks, not months.",
  },
};

export default function Page() {
  return <HowItWorks />;
}
