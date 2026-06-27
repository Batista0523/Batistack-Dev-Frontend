import type { Metadata } from "next";
import Industries from "../../views/Industries";

export const metadata: Metadata = {
  title: "AI Automation by Industry | NYC Service Businesses | Batistack",
  description:
    "Batistack serves HVAC, plumbing, electrical, roofing, landscaping, pool service, pest control, auto repair, general contracting, real estate, legal, commercial cleaning, gyms, and insurance across New York City.",
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

export default function Page() {
  return <Industries />;
}
