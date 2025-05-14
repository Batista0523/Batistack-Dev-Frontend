// src/components/Dashboard/MarketingCampaignTable.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner, Alert, Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

interface MarketingCampaign {
  id: number;
  name: string;
  platform: string;
  utm_campaign: string;
  budget: number;
  start_date: string;
  end_date: string;
}

function MarketingCampaignTable() {
  const [campaigns, setCampaigns] = useState<MarketingCampaign[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${URL}/campaigns`);
        setCampaigns(response.data.payload);
      } catch (err) {
        setError("Error fetching marketing campaigns.");
        console.error("Error fetching marketing campaigns:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
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
             Marketing <span style={{ color: "#0d6efd" }}>Campaigns</span> Analytics
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
                  <th className="fw-semibold text-start">Name</th>
                  <th className="fw-semibold text-start">Platform</th>
                  <th className="fw-semibold text-start">UTM Campaign</th>
                  <th className="fw-semibold text-center">Budget</th>
                  <th className="fw-semibold text-center">Start</th>
                  <th className="fw-semibold text-center">End</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.length > 0 ? (
                  campaigns.slice(0, 20).map((campaign) => (
                    <tr key={campaign.id}>
                      <td className="text-start text-truncate">
                        {campaign.name}
                      </td>
                      <td className="text-start">{campaign.platform}</td>
                      <td className="text-start text-truncate">
                        {campaign.utm_campaign}
                      </td>
                      <td className="text-center text-success">
                        ${campaign.budget.toLocaleString()}
                      </td>
                      <td className="text-center text-muted">
                        {new Date(campaign.start_date).toLocaleDateString()}
                      </td>
                      <td className="text-center text-muted">
                        {new Date(campaign.end_date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-muted text-center py-4">
                      No marketing campaigns recorded.
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

export default MarketingCampaignTable;
