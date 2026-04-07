const SITE_URL = "https://batistack.com";
const OG_IMAGE = `${SITE_URL}/og-image.svg`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Batistack",
  description:
    "Custom web design and AI chatbot integration for NYC businesses. We build websites that convert and automate lead generation.",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7128,
    longitude: -74.006,
  },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "$$",
  serviceArea: "New York City, NYC",
  sameAs: [] as string[],
};

export const servicePageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design & AI Integration",
  provider: {
    "@type": "LocalBusiness",
    name: "Batistack",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "City",
    name: "New York City",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Batistack Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Design",
          description: "Fully custom websites built in 2–3 weeks. No templates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbot Integration",
          description:
            "AI-powered chatbots that qualify leads and answer questions 24/7.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lead Generation Automation",
          description:
            "Automated lead capture and follow-up systems built into your website.",
        },
      },
    ],
  },
};

export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Batistack websites start at $1,200 for a custom 5-page site. The Growth package at $2,800 includes AI chatbot integration and lead automation. Custom projects are scoped individually.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects are delivered in 2–3 weeks. The Starter package has a 14-day delivery and the Growth package a 21-day delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build websites for restaurants in NYC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Batistack specializes in building websites for NYC restaurants, cafes, and service businesses — with AI chatbots that handle reservations, FAQs, and lead capture 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "What is an AI chatbot for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI chatbot is a smart assistant built into your website. It answers customer questions, qualifies leads, collects contact info, and books appointments — even while you sleep.",
      },
    },
  ],
};

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
}

export function generatePageMeta(
  title: string,
  description: string,
  path: string
): PageMeta {
  return {
    title,
    description,
    canonical: `${SITE_URL}${path}`,
    ogImage: OG_IMAGE,
    ogTitle: title,
    ogDescription: description,
  };
}
