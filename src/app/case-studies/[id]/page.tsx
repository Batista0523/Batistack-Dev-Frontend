import type { Metadata } from "next";
import { caseStudies } from "../../../data/caseStudies";
import CaseStudyPage from "../../../views/CaseStudyPage";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const study = caseStudies.find((c) => c.id === params.id);
  if (!study) return { title: "Case Study Not Found" };
  const description = `${study.title} — a Batistack ${study.category} case study. See how an NYC business automated with AI agents.`;
  return {
    title: `${study.title} | Case Study`,
    description: description.slice(0, 155),
    openGraph: {
      title: `${study.title} | Batistack Case Study`,
      description: description.slice(0, 155),
      url: `https://batistack.com/case-studies/${study.id}`,
      siteName: "Batistack",
      images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: description.slice(0, 155),
    },
  };
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ id: c.id }));
}

export default function Page({ params }: { params: { id: string } }) {
  const study = caseStudies.find((c) => c.id === params.id);
  const schema = study
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: study.title,
        description: `${study.title} — a Batistack ${study.category} case study.`,
        url: `https://batistack.com/case-studies/${study.id}`,
        author: {
          "@type": "Organization",
          name: "Batista AI Infrastructure and Agent Services",
          url: "https://batistack.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Batista AI Infrastructure and Agent Services",
          url: "https://batistack.com",
          logo: "https://batistack.com/brand/batistack-mark.png",
        },
      }
    : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <CaseStudyPage />
    </>
  );
}
