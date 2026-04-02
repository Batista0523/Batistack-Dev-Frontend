export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Batistack",
  description:
    "Custom web design and AI integration for NYC businesses. We build websites that convert and automate.",
  url: "https://batistack.com",
  telephone: "",
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

export function generatePageMeta(
  title: string,
  description: string
): {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
} {
  return {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
  };
}
