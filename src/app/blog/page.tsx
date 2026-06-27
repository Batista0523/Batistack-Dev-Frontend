import type { Metadata } from "next";
import Blog from "../../views/Blog";

export const metadata: Metadata = {
  title: "AI & Automation Blog for NYC Service Businesses | Batistack",
  description:
    "Practical insights on AI agents, automation, and growing your NYC HVAC, plumbing, electrical, roofing, or trade business with technology that works 24/7.",
  openGraph: {
    title: "AI & Automation Blog for NYC Service Businesses | Batistack",
    description:
      "Practical AI and automation insights for NYC service business owners. No jargon — just what works.",
    url: "https://batistack.com/blog",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Blog | Batistack NYC",
    description: "Practical AI insights for NYC service business owners.",
  },
};

export default function Page() {
  return <Blog />;
}
