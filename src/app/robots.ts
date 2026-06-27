import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/policy"],
    },
    sitemap: "https://batistack.com/sitemap.xml",
  };
}
