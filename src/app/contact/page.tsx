import type { Metadata } from "next";
import ContactForm from "../../views/ContactForm";

export const metadata: Metadata = {
  title: "Schedule a Free AI Assessment | Batistack NYC",
  description:
    "Book a free 30-minute AI assessment for your NYC business. We'll map exactly what an AI workforce can automate — calls, invoices, scheduling, lead gen. Response within 24 hours.",
  openGraph: {
    title: "Schedule a Free AI Assessment | Batistack NYC",
    description:
      "Free 30-minute AI assessment for your NYC business. We'll show you exactly which tasks your AI workforce will handle from day one.",
    url: "https://batistack.com/contact",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Assessment for NYC Businesses | Batistack",
    description: "30 minutes. We map your automation wins. No commitment required.",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Batistack",
  url: "https://batistack.com/contact",
  description: "Schedule a free AI assessment for your NYC service business.",
  mainEntity: {
    "@type": "Organization",
    name: "Batista AI Infrastructure and Agent Services",
    url: "https://batistack.com",
    contactPoint: { "@type": "ContactPoint", contactType: "sales", url: "https://batistack.com/contact" },
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactForm />
    </>
  );
}
