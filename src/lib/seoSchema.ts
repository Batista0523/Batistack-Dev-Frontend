const SITE_URL = "https://batistack.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Batista AI Infrastructure and Agent Services",
  description:
    "AI infrastructure and agent services for NYC businesses. We install AI workforces on Apple hardware — lead gen, calls, invoicing, scheduling, running 24/7.",
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
  serviceType: "AI Infrastructure & Agent Services",
  provider: {
    "@type": "LocalBusiness",
    name: "Batista AI Infrastructure and Agent Services",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "City",
    name: "New York City",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Batista AI Infrastructure and Agent Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Batistack Autopilot Installation",
          description: "AI agent workforce physically installed in your business on Apple Silicon hardware. Runs 24/7 handling calls, leads, invoicing, and scheduling.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Agent Lead Generation",
          description:
            "AI agents that answer calls, qualify leads, follow up automatically, and book appointments — around the clock without additional staff.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operations Automation",
          description:
            "AI agents that handle invoicing, scheduling, dispatch, and customer communication so your team focuses on the work, not the admin.",
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

export function generateArticleSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Elisaul Batista",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Batista AI Infrastructure and Agent Services",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/batistackLogo.png`,
      },
    },
    image: OG_IMAGE,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function generateBlogIndexSchema(posts: Array<{ title: string; slug: string; date: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Batista AI Blog",
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };
}
