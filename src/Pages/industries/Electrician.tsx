import BusinessPage from "../../components/BusinessPages";

function Electrician() {
  return (
    <BusinessPage
      title="Electrician Contractor Websites | Batistack Development"
      description="Professional electrician websites that convert visitors into clients. Get found locally and showcase your services with Batistack Development."
      keywords="electrician website, electrical contractor site, local electrician SEO, electrician portfolio website, web design for electricians, electrician business online, responsive electrician website, commercial electrical site"
      canonical="https://www.batistack.com/industries/electrician"
      ogTitle="Electrician Websites Built to Convert | Batistack Development"
      ogDescription="Get more electrical clients with a custom website built to showcase your work and boost local search visibility."
      ogImage="https://www.batistack.com/images/electrician-preview.jpg"
      twitterTitle="Custom Electrician Websites | Batistack Development"
      twitterDescription="Batistack creates custom, high-performance websites for electricians. Build trust, attract clients, and grow online."
      twitterImage="https://www.batistack.com/images/electrician-preview.jpg"
      headerTitle="Websites for Electricians That Work Hard"
      headerText="Show off your electrical work, gain trust fast, and get more calls — without lifting a wire."
      headerButtonLabel="Schedule a Free Demo"
      headerButtonLink="/contact"
      headerVariant="warning"
      sections={[
        {
          title: "Shockingly Effective Web Presence",
          text: "Most electrician sites are outdated or DIY. We give you a pro solution with:",
          image: "/electrician.jpg",
          imageAlt: "Electrician at work",
          list: [
            "Click-to-call and online estimate forms",
            "Photo galleries of past jobs",
            "Google Reviews integration",
            "Fast, mobile-friendly design"
          ],
          color: "warning",
          badge: "Professional Design"
        },
        {
          title: "Built to Solve Contractor Challenges",
          text: "No time for marketing? That’s where we come in:",
          image: "/electricianProblem.jpg",
          imageAlt: "Electrical issues graphic",
          list: [
            "Local SEO to dominate your zip code",
            "24/7 forms that deliver leads while you’re on the job",
            "Professional layout that builds trust",
            "Custom integrations for scheduling & quoting"
          ],
          color: "dark",
          badge: "Real Business Solutions"
        },
        {
          title: "Features That Power Your Business",
          text: "Our sites go beyond looks — they’re built to help you work smarter, grow faster, and close more jobs.",
          image: "/electricianFeat.jpg",
          imageAlt: "Electrician website features",
          list: [
            "Automated response emails for quotes",
            "Custom service pages for each offering",
            "Clear call-to-actions that increase inquiries",
            "Project showcase to win trust instantly"
          ],
          color: "warning",
          badge: "Growth Focused"
        }
      ]}
      finalCTA={{
        title: "Let’s Wire Up Your Online Presence",
        text: "Batistack is the toolbelt your electrician business needs online.",
        buttonLabel: "Start My Website Today",
        buttonLink: "/contact",
        variant: "dark"
      }}
    />
  );
}

export default Electrician;
