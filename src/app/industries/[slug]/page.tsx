import type { Metadata } from "next";
import { INDUSTRIES, getIndustry } from "../../../data/industries";
import IndustryPage from "../../../views/IndustryPage";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = getIndustry(params.slug);
  if (!industry) return { title: "Industry Not Found | Batistack" };
  const description = `AI automation for ${industry.name} businesses in NYC. ${industry.tagline} Batistack installs a 24/7 AI workforce on Apple Silicon hardware at your location.`;
  return {
    title: `AI Automation for ${industry.name} in NYC | Batistack`,
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

export default function Page() {
  return <IndustryPage />;
}
