import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

interface Feature {
  icon: string;
  title: string;
  desc: string;
  color?: string;
}

interface FeatureSectionProps {
  sectionClass?: string;
  title: string;
  subtitle: string;
  features: Feature[];
  extraValues?: Feature[];
  extraTitle?: string;
}

function FeatureSection({
  sectionClass = "py-5 bg-dark",
  title,
  subtitle,
  features,
  extraValues,
  extraTitle = "What Makes Us Different",
}: FeatureSectionProps) {
  return (
    <section className={sectionClass}>
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold display-5 text-white">
            {title} <span className="text-primary">Batistack</span>
          </h2>
          <p className="text-light fs-5">{subtitle}</p>
        </motion.div>

        <Row className="g-4 mb-5">
          {features.map((feature, i) => (
            <Col md={4} key={i}>
              <motion.div
                className="text-center px-4 py-5 bg-dark rounded-4 h-100 shadow-sm border border-secondary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
              >
                <i
                  className={`bi ${feature.icon} ${
                    feature.color ?? "text-primary"
                  } mb-3`}
                  style={{ fontSize: "2.5rem" }}
                ></i>
                <h5 className="fw-bold text-white">{feature.title}</h5>
                <p className="text-light">{feature.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {extraValues && (
          <motion.div
            className="bg-black border border-secondary rounded-4 p-4 p-md-5 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-white fw-bold mb-4 text-center display-6">
              {extraTitle}
            </h4>
            <Row className="g-4">
              {extraValues.map((item, i) => (
                <Col md={6} lg={4} key={i}>
                  <motion.div
                    className="bg-dark border border-secondary rounded-4 p-4 h-100 text-light"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * i }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <i
                        className={`bi ${item.icon} text-primary fs-2 me-3`}
                      ></i>
                      <h5 className="mb-0 text-white fw-bold">{item.title}</h5>
                    </div>
                    <p className="mb-0 text-light">{item.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

export default FeatureSection;
