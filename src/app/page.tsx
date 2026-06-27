import type { Metadata } from "next";
import Home from "../views/Home";

export const metadata: Metadata = {
  title: "We Build Your AI Workforce",
  description:
    "NYC agency that physically installs AI agent systems in small businesses. Mac mini powered. 24/7 automated. Lead gen, scheduling, invoicing — done for you.",
  openGraph: {
    title: "We Build Your AI Workforce | Batistack",
    description:
      "NYC agency that physically installs AI agent systems in small businesses. Mac mini powered. 24/7 automated.",
    url: "https://batistack.com",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Build Your AI Workforce | Batistack",
    description:
      "NYC agency that physically installs AI agent systems in small businesses. Mac mini powered. 24/7 automated.",
  },
  alternates: { canonical: "https://batistack.com" },
};

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Batista AI Infrastructure and Agent Services",
    alternateName: "Batistack",
    url: "https://batistack.com",
    logo: "https://batistack.com/brand/batistack-mark.png",
    telephone: "+1-929-733-1600",
    email: "elisaul@batistack.com",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York City",
      addressRegion: "NY",
      addressCountry: "US",
    },
    areaServed: [
      "New York City",
      "Manhattan",
      "Brooklyn",
      "Queens",
      "The Bronx",
      "Staten Island",
    ],
    serviceType: "AI Agent Installation",
    description:
      "We physically install AI agent workforces on Apple Silicon hardware inside NYC small service businesses.",
    sameAs: [
      "https://www.linkedin.com/company/batistack",
      "https://www.instagram.com/batistack",
      "https://www.youtube.com/@batistack",
      "https://www.facebook.com/batistack",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Batistack Autopilot",
    url: "https://batistack.com",
    description:
      "AI agent workforce installed on Apple Silicon hardware for NYC service businesses.",
    areaServed: "New York City",
    serviceType: "AI Workforce Installation",
    provider: {
      "@type": "Organization",
      name: "Batista AI Infrastructure and Agent Services",
      url: "https://batistack.com",
    },
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Home />
    </>
  );
}
