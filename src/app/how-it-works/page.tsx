import type { Metadata } from "next";
import HowItWorks from "../../views/HowItWorks";

export const metadata: Metadata = {
  title: "How Autopilot Works | AI Workforce for NYC",
  description:
    "From discovery call to installed AI workforce in 4 steps. See exactly how Batistack installs, trains, and runs your AI agents on Apple Silicon hardware at your NYC business location."
    .slice(0, 155),
  openGraph: {
    title: "How Batistack Autopilot Works | AI Workforce for NYC",
    description:
      "Discovery → Custom build → Hardware installation → You're live. Four steps to a 24/7 AI workforce at your NYC business.",
    url: "https://batistack.com/how-it-works",
    siteName: "Batistack",
    images: [{ url: "https://batistack.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Batistack Works | 4 Steps to AI Workforce",
    description: "Discovery → Build → Install → Live. AI in your NYC business in weeks, not months.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need technical knowledge to use my AI workforce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You control everything through Telegram messages on your phone — like texting an employee. We handle all the technical setup, monitoring, and updates.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my internet goes out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your agents queue their work and catch up the moment the connection returns. Critical alerts reach you via cellular Telegram, and nothing is lost.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add more agents later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your station is built with headroom. Most clients start with three or four agents and add more once they see the first month's results.",
      },
    },
    {
      "@type": "Question",
      name: "Is my business data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your data is processed locally on hardware that lives in your office — not on shared cloud servers. Communications are encrypted, and you own the machine.",
      },
    },
    {
      "@type": "Question",
      name: "Who is this for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NYC service businesses that run on calls, appointments, and invoices: HVAC, plumbing, electrical, real estate, gyms, legal, cleaning, and insurance.",
      },
    },
    {
      "@type": "Question",
      name: "What if I want to cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The hardware is yours. There are no long-term contracts holding you hostage — ongoing support is month to month, and you can step away anytime.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HowItWorks />
    </>
  );
}
