import { Helmet } from "react-helmet-async";

const SITE_URL = "https://batistack.com";
const OG_IMAGE = `${SITE_URL}/brand/batistack-logo.png`;

type SeoProps = {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
  noindex?: boolean;
};

export default function Seo({ title, description, path, jsonLd, noindex }: SeoProps) {
  const url = `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url || SITE_URL} />
      {noindex && <meta name="robots" content="noindex" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || SITE_URL} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content="Batistack Development Corp" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

/* ── JSON-LD builders ── */

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Batistack Development Corp",
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
  name: "Batistack Development Corp",
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
    provider: { "@type": "Organization", name: "Batistack Development Corp", url: SITE_URL },
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
