import type { Metadata } from "next";
import Blog from "../../views/Blog";

export const metadata: Metadata = {
  title: "AI & Automation Blog for NYC Service Businesses",
  description:
    "Practical insights on AI agents, automation, and growing your NYC HVAC, plumbing, electrical, roofing, or trade business with technology that works 24/7.",
  openGraph: {
    title: "AI & Automation Blog for NYC Service Businesses | Batistack",
    description:
      "Practical AI and automation insights for NYC service business owners. No jargon — just what works.",
    url: "https://batistack.com/blog",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Blog | Batistack NYC",
    description: "Practical AI insights for NYC service business owners.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Batistack AI Automation Blog",
  url: "https://batistack.com/blog",
  description:
    "AI automation insights for NYC service businesses — HVAC, plumbing, electrical, roofing, and more.",
  publisher: {
    "@type": "Organization",
    name: "Batista AI Infrastructure and Agent Services",
    url: "https://batistack.com",
    logo: "https://batistack.com/brand/batistack-mark.png",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Blog />
    </>
  );
}
