import type { Metadata } from "next";
import { blogPosts, getPostBySlug } from "../../../data/blogPosts";
import BlogPost from "../../../views/BlogPost";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description.slice(0, 155),
    openGraph: {
      title: `${post.title} | Batistack`,
      description: post.description.slice(0, 155),
      url: `https://batistack.com/blog/${post.slug}`,
      siteName: "Batistack",
      images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description.slice(0, 155),
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const schema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description.slice(0, 155),
        url: `https://batistack.com/blog/${post.slug}`,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: "Elisaul Batista",
          url: "https://batistack.com/about",
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
      <BlogPost />
    </>
  );
}
