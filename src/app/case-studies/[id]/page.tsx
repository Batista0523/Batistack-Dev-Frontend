import type { Metadata } from "next";
import { caseStudies } from "../../../data/caseStudies";
import CaseStudyPage from "../../../views/CaseStudyPage";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const study = caseStudies.find((c) => c.id === params.id);
  if (!study) return { title: "Case Study Not Found | Batistack" };
  const description = `${study.title} — a Batistack ${study.category} case study. See how an NYC business automated with AI agents.`;
  return {
    title: `${study.title} | Batistack Case Study`,
    description,
    openGraph: {
      title: `${study.title} | Batistack Case Study`,
      description,
      url: `https://batistack.com/case-studies/${study.id}`,
      siteName: "Batistack",
      images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description,
    },
  };
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ id: c.id }));
}

export default function Page() {
  return <CaseStudyPage />;
}
