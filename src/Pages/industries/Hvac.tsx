import BusinessPage from "../../components/BusinessPages";

function Hvac() {
  return (
    <BusinessPage
      title="Custom HVAC Contractor Websites | Batistack Development"
      description="Professional HVAC websites designed to convert. Book more jobs, build trust, and dominate your local market with Batistack Development."
      keywords="HVAC website, HVAC contractor website, heating and cooling website, HVAC web design, local HVAC SEO, HVAC lead generation, custom HVAC website, HVAC digital marketing, air conditioning site, HVAC appointment booking, responsive HVAC site"
      canonical="https://www.batistack.com/industries/hvac"
      ogTitle="Custom HVAC Contractor Websites | Batistack Development"
      ogDescription="Get more HVAC leads and look professional with a custom-built site by Batistack. Optimized for SEO, speed, and trust."
      ogImage="https://www.batistack.com/images/hvac-preview.jpg"
      twitterTitle="Custom HVAC Websites That Convert | Batistack"
      twitterDescription="Modern HVAC websites built for contractors ready to grow. Get a free demo today."
      twitterImage="https://www.batistack.com/images/hvac-preview.jpg"
      headerTitle="Everything an HVAC Business Needs"
      headerText="Designed for contractors who care about quality. From lead generation to showcasing your work, we build websites that work hard like you do."
      headerButtonLabel="Get a Free Demo"
      headerButtonLink="/contact"
      headerVariant="primary"
      sections={[
        {
          title: "Cooling Section: Built to Keep You Cool",
          text: "Many HVAC sites are outdated and lack clear messaging. We create clean, modern designs that load fast, communicate trust, and convert new clients.",
          image: "/hvacHero.jpg",
          imageAlt: "Cooling System",
          list: [
            "Mobile-friendly and fast loading",
            "Book appointments directly from your site",
            "Highlight seasonal specials and services"
          ],
          color: "info",
          badge: "Cooling Features"
        },
        {
          title: "Heating Section: Fire Up Your Business",
          text: "Turn up the heat on your competition with a site that showcases your past work, builds instant trust, and drives real calls.",
          image: "/heat.jpg",
          imageAlt: "Heating System",
          list: [
            "Testimonials and before-after photos",
            "Google Reviews embedded",
            "Instant call buttons and online scheduling"
          ],
          color: "danger",
          badge: "Heating Power"
        },
        {
          title: "Daily Contractor Struggles? We Solve Them.",
          text: "HVAC owners deal with outdated contact forms, low visibility, and generic design. At Batistack, we understand this and go beyond the basics:",
          image: "/hvacStruggle.jpg",
          imageAlt: "HVAC Challenges",
          list: [
            "Online quoting tools & automated responses",
            "Localized SEO to dominate your service area",
            "Project portfolios to build instant trust",
            "Professional emails that match your domain"
          ],
          color: "primary",
          badge: "Business Solutions"
        }
      ]}
      finalCTA={{
        title: "What Makes Our HVAC Sites Better?",
        text: "• We design for conversions, not just looks.\n• Our websites speak directly to homeowners & commercial clients.\n• Integrated tools help you grow without more work.",
        buttonLabel: "Build My HVAC Website",
        buttonLink: "/contact",
        variant: "danger"
      }}
    />
  );
}

export default Hvac;
