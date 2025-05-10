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
    <Container className="my-4">
      <Card
        className="shadow-sm border-0 rounded-3 p-3"
        style={{ backgroundColor: "#ffffff" }}
      >
        <motion.div
          className="d-flex align-items-center justify-content-between mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="mb-0 text-dark fw-bold">
            📊 Marketing Campaigns Analytics
          </h4>
          <span className="text-muted small">
            Last Updated: {new Date().toLocaleString()}
          </span>
        </motion.div>

        {loading ? (
          <div className="text-center my-3">
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
            <Table
              hover
              className="table-sm align-middle mb-0"
              style={{ fontSize: "0.9rem" }}
            >
              <thead
                className="bg-light text-dark sticky-top"
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 10,
                  borderBottom: "2px solid #ddd",
                }}
              >
                <tr>
                  <th className="fw-bold text-start">Name</th>
                  <th className="fw-bold text-start">Platform</th>
                  <th className="fw-bold text-start">UTM Campaign</th>
                  <th className="fw-bold text-center">Budget</th>
                  <th className="fw-bold text-center">Start Date</th>
                  <th className="fw-bold text-center">End Date</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.length > 0 ? (
                  campaigns.slice(0, 20).map((campaign) => (
                    <tr key={campaign.id} className="hover-row">
                      <td
                        className="text-start text-truncate"
                        style={{ maxWidth: "180px" }}
                      >
                        {campaign.name}
                      </td>
                      <td className="text-start">{campaign.platform}</td>
                      <td className="text-start text-truncate">
                        {campaign.utm_campaign}
                      </td>
                      <td className="text-center">
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
                    <td colSpan={6} className="text-muted text-center py-3">
                      No marketing campaigns recorded.
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

export default MarketingCampaignTable;
