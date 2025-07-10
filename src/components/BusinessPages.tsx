import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";


interface Section {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  list?: string[];
  imageRight?: boolean;
  color?: string;
  badge?: string;
}

interface FinalCTA {
  title: string;
  text: string;
  buttonLabel: string;
  buttonLink: string;
  variant?: string;
}

interface BusinessPageProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  headerTitle: string;
  headerText: string;
  headerButtonLabel: string;
  headerButtonLink: string;
  headerVariant?: string;
  sections: Section[];
  finalCTA: FinalCTA;
}

export default function BusinessPage({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  headerTitle,
  headerText,
  headerButtonLabel,
  headerButtonLink,
  headerVariant = "primary",
  sections,
  finalCTA,
}: BusinessPageProps) {

  
  return (
    <div className="business-page">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Batistack Development" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={twitterImage} />
      </Helmet>

      <header className="hero-section text-center py-5 bg-light shadow-sm">
        <Container>
          <h1 className="display-4 fw-bold text-uppercase mb-3 text-dark">{headerTitle}</h1>
          <p className="fs-5 text-muted mb-4">{headerText}</p>
          <Button variant={headerVariant} size="lg" href={headerButtonLink} className="shadow">
            {headerButtonLabel}
          </Button>
        </Container>
      </header>

      <Container className="py-5">
        {sections.map((section, index) => (
          <Row
            key={index}
            className={`align-items-center mb-5 ${index % 2 === 1 ? "flex-md-row-reverse" : ""}`}
          >
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src={section.image}
                alt={section.imageAlt}
                className="img-fluid rounded-4 shadow w-100 object-fit-cover"
                style={{ maxHeight: "400px" }}
              />
            </Col>
            <Col md={6}>
              <span className={`badge bg-${section.color || "secondary"} mb-2`}>{section.badge}</span>
              <h3 className={`fw-bold text-${section.color || "dark"}`}>{section.title}</h3>
              <p className="text-secondary">{section.text}</p>
              {section.list && (
                <ul className="text-secondary">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </Col>
          </Row>
        ))}

        <div className="text-center bg-light p-5 rounded-4 shadow">
          <h2 className="fw-bold mb-3">{finalCTA.title}</h2>
          <p className="fs-5 text-muted mb-4">{finalCTA.text}</p>
          <Button variant={finalCTA.variant || "primary"} size="lg" href={finalCTA.buttonLink} className="shadow">
            {finalCTA.buttonLabel}
          </Button>
        </div>
      </Container>
    </div>
  );
}
