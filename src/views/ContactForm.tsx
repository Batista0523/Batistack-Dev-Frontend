import Seo, { ORGANIZATION_SCHEMA, PROFESSIONAL_SERVICE_SCHEMA } from "../components/Seo";
import ContactFormClient from "../components/ContactFormClient";

export default function ContactForm() {
  return (
    <>
      <Seo
        title="Schedule a Free AI Assessment | Batistack NYC"
        description="Book a free 30-minute AI assessment for your NYC business. We'll map exactly what an installed AI workforce can automate — calls, invoices, scheduling. Response within 24 hours."
        path="/contact"
        jsonLd={[ORGANIZATION_SCHEMA, PROFESSIONAL_SERVICE_SCHEMA]}
      />
      <ContactFormClient />
    </>
  );
}
