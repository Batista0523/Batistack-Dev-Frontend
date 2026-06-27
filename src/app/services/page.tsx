import type { Metadata } from "next";
import Services from "../../views/Services";

export const metadata: Metadata = {
  title: "AI Agent Services for NYC Small Businesses | Batistack",
  description:
    "Batistack Autopilot — a 7-agent AI workforce (CEO, Scout, Voice, Email, Billing, Scheduler, Commander) installed on Mac mini or Mac Studio in your NYC business. 24/7 automation for service trades.",
  openGraph: {
    title: "AI Agent Services for NYC Small Businesses | Batistack",
    description:
      "Batistack Autopilot — a 7-agent AI workforce installed on Apple Silicon hardware in your NYC business. 24/7 call answering, invoicing, scheduling, and lead gen.",
    url: "https://batistack.com/services",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Services NYC | Batistack Autopilot",
    description: "7-agent AI workforce on Apple Silicon hardware. 24/7 automation for NYC service businesses.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Batistack Autopilot",
  provider: { "@type": "Organization", name: "Batista AI Infrastructure and Agent Services", url: "https://batistack.com" },
  description: "AI agent workforce installed on Apple Silicon hardware for NYC service businesses. Includes 7 specialized agents: CEO, Scout, Voice, Email, Billing, Scheduler, Commander.",
  areaServed: { "@type": "City", name: "New York City" },
  serviceType: "AI Workforce Installation",
  url: "https://batistack.com/services",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Services />
    </>
  );
}
