import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Batistack Development</title>
        <meta
          name="description"
          content="Read our professional Privacy Policy to understand how Batistack Development collects, uses, and protects your data."
        />
      </Helmet>

      <div
        style={{
          background: "#f8f9fa",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <Container className="px-3 px-md-5" style={{ maxWidth: "900px" }}>
          <div className="text-center mb-5">
            <h1 className="fw-bold display-4 text-primary">Privacy Policy</h1>
            <p className="text-muted fs-5 mb-0">
              Effective Date: {new Date().toLocaleDateString("en-US")}
            </p>
            <hr className="my-4 w-25 mx-auto border-primary" />
            <p className="text-secondary fs-5">
              This Privacy Policy outlines how Batistack Development collects,
              uses, discloses, and protects your information when you visit our
              website or use our services.
            </p>
          </div>

          {[
            {
              title: "1. Information We Collect",
              content: (
                <ul className="text-secondary">
                  <li>
                    Full name and contact information (email, phone number)
                  </li>
                  <li>Business name and website</li>
                  <li>Service inquiries and submitted messages</li>
                  <li>
                    Analytics and usage data via cookies and third-party tools
                  </li>
                </ul>
              ),
            },
            {
              title: "2. Purpose of Collection",
              content: (
                <ul className="text-secondary">
                  <li>To communicate effectively and respond to requests</li>
                  <li>To deliver and maintain our services</li>
                  <li>To personalize user experience</li>
                  <li>To analyze usage and improve our platform</li>
                </ul>
              ),
            },
            {
              title: "3. Legal Basis for Processing",
              content:
                "We process your data based on your consent, the necessity to fulfill contractual obligations, or legitimate business interests.",
            },
            {
              title: "4. Data Security",
              content:
                "We implement encryption, access controls, and secure server infrastructure to protect your personal information from unauthorized access or disclosure.",
            },
            {
              title: "5. Sharing of Information",
              content:
                "We do not sell your personal data. Information is only shared with trusted service providers necessary to fulfill our services or comply with legal requirements.",
            },
            {
              title: "6. Cookies and Tracking Technologies",
              content:
                "Cookies help us analyze site traffic and usage patterns. You may opt out of cookie tracking via browser settings.",
            },
            {
              title: "7. Data Retention",
              content:
                "We retain personal data only as long as necessary to fulfill the purposes for which it was collected, including legal or business obligations.",
            },
            {
              title: "8. Your Rights",
              content: (
                <ul className="text-secondary">
                  <li>Right to access and obtain a copy of your data</li>
                  <li>Right to rectify or erase your data</li>
                  <li>Right to object to or restrict processing</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
              ),
            },
            {
              title: "9. Policy Updates",
              content:
                "We may update this Privacy Policy to reflect changes to our practices. The effective date at the top of the page will always reflect the most recent version.",
            },
            {
              title: "10. Contact Information",
              content: (
                <>
                  <p className="text-secondary">
                    For any questions or concerns about our privacy practices,
                    contact us at:
                  </p>
                  <div className="border rounded p-3 bg-light shadow-sm">
                    <p className="mb-1">
                      <strong>Email:</strong> info@batistack.com /
                      support@batistack.com
                    </p>
                    <p className="mb-0">
                      <strong>Phone:</strong> +1 (929) 733-1600
                    </p>
                  </div>
                </>
              ),
            },
          ].map((section, index) => (
            <section className="mb-5" key={index}>
              <h4 className="fw-bold text-dark mb-3 border-bottom pb-2">
                {section.title}
              </h4>
              <div className="text-muted fs-6">{section.content}</div>
            </section>
          ))}

          <div className="text-center mt-5">
            <p className="small text-muted">
              &copy; {new Date().getFullYear()} Batistack Development. All
              rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default PrivacyPolicy;
