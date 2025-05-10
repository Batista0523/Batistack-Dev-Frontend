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
    <Container className="my-4">
      <Card className="shadow-sm border-0 rounded-3 p-3" style={{ backgroundColor: "#ffffff" }}>
        <motion.div
          className="d-flex align-items-center justify-content-between mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="mb-0 text-dark fw-bold">🔍 SEO Keywords Analytics</h4>
          <span className="text-muted small">Last Updated: {new Date().toLocaleString()}</span>
        </motion.div>

        {loading ? (
          <div className="text-center my-3">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : error ? (
          <Alert variant="danger" className="text-center">{error}</Alert>
        ) : (
          <motion.div
            className="table-responsive"
            style={{
              maxHeight: "350px",
              overflowY: "auto",
              borderRadius: "8px",
              border: "1px solid #e3e6f0",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.05)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Table hover className="table-sm align-middle mb-0" style={{ fontSize: "0.9rem" }}>
              <thead className="bg-light text-dark sticky-top" style={{ position: "sticky", top: 0, zIndex: 10, borderBottom: "2px solid #ddd" }}>
                <tr>
                  <th className="fw-bold text-start">Keyword</th>
                  <th className="fw-bold text-center">Impressions</th>
                  <th className="fw-bold text-center">Clicks</th>
                  <th className="fw-bold text-center">CTR (%)</th>
                  <th className="fw-bold text-center">Avg Position</th>
                  <th className="fw-bold text-end">Date</th>
                </tr>
              </thead>
              <tbody>
                {seoKeywords.length > 0 ? (
                  seoKeywords.slice(0, 20).map((keyword) => (
                    <tr key={keyword.id} className="hover-row">
                      <td className="text-start text-truncate" style={{ maxWidth: "180px" }}>{keyword.keyword}</td>
                      <td className="text-center">{keyword.impressions.toLocaleString()}</td>
                      <td className="text-center">{keyword.clicks.toLocaleString()}</td>
                      <td className="text-center">{keyword.ctr}%</td>
                      <td className="text-center">{keyword.avg_position}</td>
                      <td className="text-end text-muted small">{new Date(keyword.date).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-muted text-center py-3">
                      No SEO keywords recorded.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </motion.div>
        )}
      </Card>
    </Container>
  );
}

export default SEOKeywordsTable;
