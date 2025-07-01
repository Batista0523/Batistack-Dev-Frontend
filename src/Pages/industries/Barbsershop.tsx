import BusinessPage from "../../components/BusinessPages";

function Barbershop() {
  return (
    <BusinessPage
      title="Barbershop Website Design | Batistack Development"
      description="Modern, stylish websites for barbershops that attract more clients, showcase your work, and let customers book online. Built by Batistack Development."
      keywords="barbershop website, barber booking site, online appointments for barbers, barber portfolio, barber SEO, hair stylist website, barber web design, local barber site"
      canonical="https://www.batistack.com/industries/barbershop"
      ogTitle="Barbershop Websites with Style | Batistack Development"
      ogDescription="Custom websites for barbers ready to grow. Let clients book online, showcase your skills, and stand out in your local area."
      ogImage="/images/barbershop-preview.jpg"
      twitterTitle="Modern Barbershop Websites | Batistack"
      twitterDescription="Websites made for barbers to show off their skills, get more bookings, and boost their online presence."
      twitterImage="/images/barbershop-preview.jpg"
      headerTitle="Websites That Make You Look Sharp"
      headerText="From fades to full bookings — we help barbers stand out online with premium web design."
      headerButtonLabel="Book a Free Demo"
      headerButtonLink="/contact"
      headerVariant="dark"
      sections={[
        {
          title: "Craft Meets Conversion",
          text: "Your haircut speaks volumes — so should your website. We bring clean visuals, effective structure, and modern tools to give you an online edge.",
          image: "/barberFeat.jpg",
          imageAlt: "Barbershop digital experience",
          list: [
            "Easy navigation tailored to mobile users",
            "Designs that reflect your shop’s personality",
            "Trust-building testimonials and integrations",
            "Pages optimized for high conversion"
          ],
          badge: "Design",
          color: "dark"
        },
        {
          title: "Seamless Scheduling, Less Stress",
          text: "From last-minute cancellations to missed appointments — we streamline it all with smart automation.",
          image: "/barberFix.jpg",
          imageAlt: "Digital scheduling for barbers",
          list: [
            "Real-time availability with auto-sync",
            "Automated text/email reminders",
            "Deposit & rescheduling system built-in",
            "One-click booking interface"
          ],
          badge: "Automation",
          color: "primary"
        },
        {
          title: "Features That Keep Clients Coming Back",
          text: "It’s not just about booking once — it’s about building a loyal base. We help you nurture that bond.",
          image: "/barbershoptHero.jpg",
          imageAlt: "Barbershop loyalty features",
          list: [
            "Personalized client dashboards",
            "Service history tracking and rebooking",
            "Exclusive style previews and product promos",
            "Smart forms for custom requests"
          ],
          badge: "Loyalty",
          color: "info"
        }
      ]}
      finalCTA={{
        title: "Put Your Business in the Spotlight",
        text: "Whether you're a solo barber or managing a full team, we’ll help you own your online presence.",
        buttonLabel: "Let’s Talk Today",
        buttonLink: "/contact",
        variant: "primary"
      }}
    />
  );
}

export default Barbershop;
