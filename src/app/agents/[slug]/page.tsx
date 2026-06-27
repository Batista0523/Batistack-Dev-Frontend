import type { Metadata } from "next";
import { AGENTS } from "../../../data/agents";
import AgentPage from "../../../views/AgentPage";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const agent = AGENTS.find((a) => a.slug === params.slug);
  if (!agent) return { title: "Agent Not Found | Batistack" };
  const description = `Meet the ${agent.name}: a specialized AI agent installed on Apple Silicon hardware in your NYC business. ${agent.description.slice(0, 120)}`;
  return {
    title: `${agent.name} | Batistack AI Workforce`,
    description,
    openGraph: {
      title: `${agent.name} | Batistack AI Workforce`,
      description,
      url: `https://batistack.com/agents/${agent.slug}`,
      siteName: "Batistack",
      images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${agent.name} | Batistack`,
      description,
    },
  };
}

export function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export default function Page() {
  return <AgentPage />;
}
