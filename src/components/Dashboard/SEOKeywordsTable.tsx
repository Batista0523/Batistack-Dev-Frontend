// src/components/Dashboard/SEOKeywordsTable.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner, Alert, Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

interface SEOKeyword {
  id: number;
  keyword: string;
  impressions: number;
  clicks: number;
  ctr: number;
  avg_position: number;
  date: string;
}

function SEOKeywordsTable() {
  const [seoKeywords, setSeoKeywords] = useState<SEOKeyword[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchSEOKeywords = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${URL}/seo-keywords`);
        setSeoKeywords(response.data.payload);
      } catch (err) {
        setError("Error fetching SEO keywords.");
        console.error("Error fetching SEO keywords:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSEOKeywords();
  }, []);

  return (
  <Container className="py-5">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="shadow-sm border-0 rounded-4 p-4 bg-white">
        <motion.div
          className="d-flex align-items-center justify-content-between mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="fw-bold text-dark m-0">
            SEO <span style={{ color: "#0d6efd" }}>Keywords</span> Analytics
          </h3>
            <small className="text-muted">
            Last Updated: <br /><strong>{new Date().toLocaleString()}</strong>
          </small>
        </motion.div>

        {loading ? (
          <div className="text-center my-4">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : error ? (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        ) : (
          <motion.div
            className="table-responsive"
            style={{
              maxHeight: "400px",
              overflowY: "auto",
              borderRadius: "12px",
              border: "4px solid #e3e6f0",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.05)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Table
              hover
              className="table-sm align-middle mb-0"
              style={{ fontSize: "0.80rem" }}
            >
              <thead
                className="bg-light text-dark sticky-top"
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 10,
                  borderBottom: "2px solid #dee2e6",
                }}
              >
                <tr>
                  <th className="fw-semibold text-start">Keyword</th>
                  <th className="fw-semibold text-center">Impressions</th>
                  <th className="fw-semibold text-center">Clicks</th>
                  <th className="fw-semibold text-center">CTR (%)</th>
                  <th className="fw-semibold text-center">Avg. Position</th>
                  <th className="fw-semibold text-end">Date</th>
                </tr>
              </thead>
              <tbody>
                {seoKeywords.length > 0 ? (
                  seoKeywords.slice(0, 20).map((keyword) => (
                    <tr key={keyword.id}>
                      <td className="text-start text-truncate" style={{ maxWidth: "180px" }}>
                        {keyword.keyword}
                      </td>
                      <td className="text-center text-primary fw-bold">
                        {keyword.impressions.toLocaleString()}
                      </td>
                      <td className="text-center fw-semibold text-success">
                        {keyword.clicks.toLocaleString()}
                      </td>
                      <td className="text-center">{keyword.ctr}%</td>
                      <td className="text-center">{keyword.avg_position}</td>
                      <td className="text-end text-muted small">
                        {new Date(keyword.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-muted text-center py-4">
                      No SEO keywords recorded.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </motion.div>
        )}
      </Card>
    </motion.div>
  </Container>
);

}

export default SEOKeywordsTable;
