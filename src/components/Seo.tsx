type SeoProps = {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
  noindex?: boolean;
};

const SITE_URL = "https://batistack.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function Seo(_props: SeoProps) {
  return null;
}

/* ── JSON-LD builders ── */

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Batista AI Infrastructure and Agent Services",
  url: SITE_URL,
  logo: OG_IMAGE,
  foundingDate: "2023",
  email: "elisaul@batistack.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/batistack",
    "https://www.instagram.com/batistack",
    "https://www.youtube.com/@batistack",
    "https://www.facebook.com/batistack",
  ],
};

export const PROFESSIONAL_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Batista AI Infrastructure and Agent Services",
  description:
    "AI Infrastructure & Agent Services — physically installed AI agent systems on Mac mini and Mac Studio hardware for NYC businesses.",
  url: SITE_URL,
  image: OG_IMAGE,
  areaServed: [
    "New York City",
    "Manhattan",
    "Brooklyn",
    "Queens",
    "The Bronx",
    "Staten Island",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "Organization", name: "Batista AI Infrastructure and Agent Services", url: SITE_URL },
    areaServed: "New York City",
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
