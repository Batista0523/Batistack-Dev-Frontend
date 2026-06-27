import type { Metadata } from "next";
import About from "../../views/About";

export const metadata: Metadata = {
  title: "About | Batista AI Infrastructure and Agent Services",
  description:
    "Elisaul Batista founded Batistack to put AI agent workforces inside NYC service businesses. Learn who we are, what we believe, and why on-premise AI beats software subscriptions.",
  openGraph: {
    title: "About | Batista AI Infrastructure and Agent Services",
    description:
      "Elisaul Batista founded Batistack to put AI agent workforces inside NYC service businesses. Learn who we are, what we believe, and why on-premise AI beats software subscriptions.",
    url: "https://batistack.com/about",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Batistack — AI Infrastructure NYC",
    description:
      "Batistack physically installs AI agent workforces in NYC service businesses on Apple Silicon hardware.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Batista AI Infrastructure and Agent Services",
  alternateName: "Batistack",
  url: "https://batistack.com",
  logo: "https://batistack.com/brand/batistack-mark.png",
  foundingLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" } },
  description: "AI agent workforce installation on Apple Silicon hardware for NYC service businesses.",
  contactPoint: { "@type": "ContactPoint", contactType: "sales", url: "https://batistack.com/contact" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <About />
    </>
  );
}
