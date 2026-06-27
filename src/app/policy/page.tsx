import type { Metadata } from "next";
import PrivacyPolicy from "../../views/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Infrastructure NYC",
  description: "Batistack's privacy policy. How we collect, use, and protect your data.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PrivacyPolicy />;
}
