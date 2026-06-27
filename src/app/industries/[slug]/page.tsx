import type { Metadata } from "next";
import { INDUSTRIES, getIndustry } from "../../../data/industries";
import IndustryPage from "../../../views/IndustryPage";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = getIndustry(params.slug);
  if (!industry) return { title: "Industry Not Found" };
  const description = `AI automation for ${industry.name} businesses in NYC. ${industry.tagline} Batistack installs a 24/7 AI workforce on Apple Silicon hardware at your location.`;
  return {
    title: `AI Automation for ${industry.name} in NYC`,
    description: description.slice(0, 155),
    openGraph: {
      title: `AI Automation for ${industry.name} in NYC | Batistack`,
      description: description.slice(0, 155),
      url: `https://batistack.com/industries/${industry.slug}`,
      siteName: "Batistack",
      images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `AI for ${industry.shortName} NYC | Batistack`,
      description: industry.tagline,
    },
  };
}

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  const path = `/industries/${params.slug}`;
  const description = industry
    ? `AI agents for ${industry.name} businesses in NYC. ${industry.tagline}`.slice(0, 155)
    : "";

  const schema = industry
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `AI Automation for ${industry.name}`,
          description,
          url: `https://batistack.com${path}`,
          provider: {
            "@type": "Organization",
            name: "Batista AI Infrastructure and Agent Services",
            url: "https://batistack.com",
          },
          areaServed: "New York City",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://batistack.com" },
            { "@type": "ListItem", position: 2, name: "Industries", item: "https://batistack.com/industries" },
            { "@type": "ListItem", position: 3, name: industry.name, item: `https://batistack.com${path}` },
          ],
        },
      ]
    : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <IndustryPage />
    </>
  );
}
