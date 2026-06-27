import type { Metadata } from "next";
import { AGENTS } from "../../../data/agents";
import AgentPage from "../../../views/AgentPage";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const agent = AGENTS.find((a) => a.slug === params.slug);
  if (!agent) return { title: "Agent Not Found" };
  const description = `${agent.name}: AI agent installed on Apple Silicon in your NYC business. ${agent.description.slice(0, 80)}`;
  return {
    title: `${agent.name} | AI Workforce`,
    description: description.slice(0, 155),
    openGraph: {
      title: `${agent.name} | Batistack AI Workforce`,
      description: description.slice(0, 155),
      url: `https://batistack.com/agents/${agent.slug}`,
      siteName: "Batistack",
      images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${agent.name} | Batistack`,
      description: description.slice(0, 155),
    },
  };
}

export function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const agent = AGENTS.find((a) => a.slug === params.slug);
  const schema = agent
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: agent.name,
        description: agent.description,
        url: `https://batistack.com/agents/${agent.slug}`,
        provider: {
          "@type": "Organization",
          name: "Batista AI Infrastructure and Agent Services",
          url: "https://batistack.com",
        },
        areaServed: "New York City",
        serviceType: "AI Agent",
      }
    : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <AgentPage />
    </>
  );
}
