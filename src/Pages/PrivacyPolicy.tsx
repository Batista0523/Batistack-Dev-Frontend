import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Batistack Development</title>
        <meta
          name="description"
          content="Read the privacy policy of Batistack Development to understand how we collect, use, and protect your information."
        />
      </Helmet>

      <div style={{ background: "#f8f9fa" }}>
        <Container className="py-5" style={{ maxWidth: "900px" }}>
          <div className="text-center mb-5">
            <h1 className="fw-bold display-4 text-primary">Privacy Policy</h1>
            <p className="text-muted fs-5">
              Effective Date: {new Date().toLocaleDateString("en-US")}
            </p>
          </div>

          <section className="mb-5">
            <p className="text-secondary fs-5">
              At Batistack Development, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect the information you share with us when using our website and services.
            </p>
          </section>

          {[ 
            {
              title: "1. Information We Collect",
              content: "We may collect your name, email, phone number, and business details when you fill out forms or interact with our services."
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <ul className="text-secondary">
                  <li>To respond to your inquiries</li>
                  <li>To provide customized digital solutions</li>
                  <li>To send updates and promotional content (with your consent)</li>
                </ul>
              )
            },
            {
              title: "3. Data Protection",
              content: "We use industry-standard encryption and secure servers to keep your data safe."
            },
            {
              title: "4. Sharing Your Information",
              content: "Your data is never sold. We only share it with trusted third parties when necessary to deliver our services or comply with legal requirements."
            },
            {
              title: "5. Cookies",
              content: "Cookies help us improve user experience. You can disable cookies through your browser settings."
            },
            {
              title: "6. Your Rights",
              content: "You can request access to or deletion of your personal data by emailing us at support@batistack.com."
            },
            {
              title: "7. Changes to This Policy",
              content: "We may update this policy as needed. Please check back periodically."
            },
            {
              title: "8. Contact Us",
              content: (
                <>
                  <p className="text-secondary">
                    For any questions or concerns regarding your data or this policy, contact us at:
                  </p>
                  <p className="mb-0">
                    <strong>Email:</strong> support@batistack.com<br />
                    <strong>Phone:</strong> +1 (929) 733-1600
                  </p>
                </>
              )
            }
          ].map((section, index) => (
            <section className="mb-5" key={index}>
              <h4 className="fw-bold text-dark mb-3">{section.title}</h4>
              <div className="text-muted fs-6">{section.content}</div>
            </section>
          ))}
        </Container>
      </div>
    </>
  );
}

export default PrivacyPolicy;
