import type { Metadata } from "next";
import AIAgents from "../../views/AIAgents";
import { AGENTS } from "../../data/agents";

export const metadata: Metadata = {
  title: "Meet Your AI Workforce | Agent Services NYC",
  description:
    "7 specialized AI agents — CEO, Scout, Voice, Email, Billing, Scheduler, Commander — installed on Apple Silicon hardware in your NYC business. Each agent runs 24/7."
    .slice(0, 155),
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

const agentListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Batistack AI Agent Workforce",
  description:
    "7 specialized AI agents installed on Apple Silicon hardware in NYC businesses.",
  numberOfItems: AGENTS.length,
  itemListElement: AGENTS.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: a.name,
    url: `https://batistack.com/agents/${a.slug}`,
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentListSchema) }}
      />
      <AIAgents />
    </>
  );
}
