import type { Metadata } from "next";
import Industries from "../../views/Industries";
import { INDUSTRIES } from "../../data/industries";

export const metadata: Metadata = {
  title: "AI Automation by Industry | NYC Service Businesses",
  description:
    "Batistack serves HVAC, plumbing, electrical, roofing, landscaping, pool service, pest control, auto repair, general contracting, real estate, legal, cleaning, gyms, and insurance."
    .slice(0, 155),
  openGraph: {
    title: "AI Automation by Industry | NYC Service Businesses | Batistack",
    description:
      "14 industries served across NYC. AI agents for HVAC, plumbing, electrical, roofing, landscaping, pest control, auto repair, and more.",
    url: "https://batistack.com/industries",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI by Industry | 14 NYC Service Trades | Batistack",
    description: "HVAC, plumbing, electrical, roofing, landscaping, pest control, auto repair and more.",
  },
};

const industryListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NYC Service Industries — AI Automation by Batistack",
  description:
    "14 NYC service industries served by Batistack AI agent installations.",
  numberOfItems: INDUSTRIES.length,
  itemListElement: INDUSTRIES.map((ind, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: ind.name,
    url: `https://batistack.com/industries/${ind.slug}`,
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industryListSchema) }}
      />
      <Industries />
    </>
  );
}
