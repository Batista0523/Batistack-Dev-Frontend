import type { Metadata } from "next";
import { blogPosts, getPostBySlug } from "../../../data/blogPosts";
import BlogPost from "../../../views/BlogPost";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found | Batistack" };
  return {
    title: `${post.title} | Batistack`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Batistack`,
      description: post.description,
      url: `https://batistack.com/blog/${post.slug}`,
      siteName: "Batistack",
      images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function Page() {
  return <BlogPost />;
}
