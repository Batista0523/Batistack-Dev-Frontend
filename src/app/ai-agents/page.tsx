import type { Metadata } from "next";
import AIAgents from "../../views/AIAgents";

export const metadata: Metadata = {
  title: "Meet Your AI Workforce | Batistack Agent Services NYC",
  description:
    "7 specialized AI agents — CEO, Scout, Voice, Email, Billing, Scheduler, Commander — installed on Apple Silicon hardware in your NYC business. Each agent runs 24/7 and handles one domain perfectly.",
  openGraph: {
    title: "Meet Your AI Workforce | Batistack Agent Services NYC",
    description:
      "7 AI agents installed on Mac mini or Mac Studio hardware in your NYC business. CEO, Scout, Voice, Email, Billing, Scheduler, Commander — all running 24/7.",
    url: "https://batistack.com/ai-agents",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 AI Agents for NYC Businesses | Batistack",
    description: "CEO, Scout, Voice, Email, Billing, Scheduler, Commander — on Apple Silicon in your business.",
  },
};

export default function Page() {
  return <AIAgents />;
}
