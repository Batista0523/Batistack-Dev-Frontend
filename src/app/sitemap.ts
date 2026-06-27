import type { MetadataRoute } from "next";
import { AGENTS } from "../data/agents";
import { blogPosts } from "../data/blogPosts";
import { caseStudies } from "../data/caseStudies";
import { INDUSTRIES } from "../data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://batistack.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`,            lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/contact`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`,                lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/ai-agents`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/how-it-works`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries`,          lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
  ];

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const agentPages: MetadataRoute.Sitemap = AGENTS.map((a) => ({
    url: `${base}/agents/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.id}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...industryPages,
    ...agentPages,
    ...blogPostPages,
    ...caseStudyPages,
  ];
}
