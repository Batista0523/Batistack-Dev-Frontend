import BusinessPage from "../../components/BusinessPages";

function Ecommerce() {
  return (
    <BusinessPage
      title="E-commerce Website Design | Batistack Development"
      description="Custom-built e-commerce websites that drive sales and enhance your online shopping experience. Built for growth by Batistack Development."
      keywords="e-commerce website, online store design, ecommerce SEO, shopping cart website, responsive ecommerce, product catalog site, Shopify alternative, online checkout, ecommerce UI/UX"
      canonical="https://www.batistack.com/industries/ecommerce"
      ogTitle="E-commerce Websites That Sell | Batistack Development"
      ogDescription="Create a stunning online store with Batistack. Designed to convert visitors into customers and grow your brand."
      ogImage="https://www.batistack.com/images/ecommerce-preview.jpg"
      twitterTitle="High-Performance E-commerce Sites | Batistack"
      twitterDescription="Launch your online store with Batistack. Beautiful, fast, and built for results."
      twitterImage="https://www.batistack.com/images/ecommerce-preview.jpg"
      headerTitle="E-commerce Sites Built to Sell"
      headerText="From beautiful product displays to seamless checkout flows — we help businesses convert visitors into loyal buyers."
      headerButtonLabel="Start Your Store"
      headerButtonLink="/contact"
      headerVariant="success"
      sections={[
        {
          title: "Showcase Your Products Beautifully",
          text: "Our e-commerce designs focus on clean visuals and intuitive navigation. Help shoppers find what they want fast and fall in love with your brand.",
          image: "/ecommerceProduct.jpg",
          imageAlt: "E-commerce product showcase",
          list: [
            "Category filters and smart search",
            "Zoom-in and gallery views",
            "Mobile-optimized product layout"
          ],
          color: "success",
          badge: "Product Pages"
        },
        {
          title: "Frictionless Checkout Experience",
          text: "A complicated checkout kills sales. We build fast, secure checkout flows that reduce drop-off and improve conversion.",
          image: "/ecommerceCheckout.jpg",
          imageAlt: "Checkout process",
          list: [
            "Guest checkout & express options",
            "Cart reminders & upsells",
            "Easy integration with Stripe, PayPal & more"
          ],
          color: "info",
          badge: "Checkout Features"
        },
        {
          title: "Grow With Powerful Integrations",
          text: "Whether you're just starting out or scaling to thousands of sales, our sites grow with you using the best e-commerce tools.",
          image: "/ecommerceGrowth.jpg",
          imageAlt: "Growth tools",
          list: [
            "Email automation & CRM",
            "SEO-optimized product pages",
            "Analytics and conversion tracking"
          ],
          color: "primary",
          badge: "Business Growth"
        }
      ]}
      finalCTA={{
        title: "Launch Your Store With Batistack",
        text: "• Fast, mobile-first design.\n• Tools that increase your average order value.\n• 100% tailored to your brand’s identity.",
        buttonLabel: "Request a Free Demo",
        buttonLink: "/contact",
        variant: "success"
      }}
    />
  );
}

export default Ecommerce;
