// src/components/Dashboard/LeadsTable.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner, Alert, Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

interface LeadsTable {
  id: number;
  name: string;
  email: string;
  message: string;
  source: string;
  created_at: string;
}

function LeadsTable() {
  const [leads, setLeads] = useState<LeadsTable[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchLeadsData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${URL}/leads`);
        setLeads(response.data.payload);
      } catch (err) {
        setError("Error fetching leads data.");
        console.error("Error fetching leads data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeadsData();
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
            Leads <span style={{ color: "#0d6efd" }}>Analytics</span>
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
              maxWidth:"9",
              maxHeight: "430px",
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
              className="align-middle table-sm mb-0"
              style={{
                fontSize: "0.70rem",
                tableLayout: "auto",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
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
                  <th className="fw-semibold text-start">Email</th>
                  <th className="fw-semibold text-start">Message</th>
                  <th className="fw-semibold text-center">Source</th>
                  <th className="fw-semibold text-end">Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.length > 0 ? (
                  leads.slice(0, 20).map((lead) => (
                    <tr key={lead.id}>
                      <td className="text-start">{lead.name}</td>
                      <td className="text-start">{lead.email}</td>
                      <td className="text-start">
                        {lead.message || "No message"}
                      </td>
                      <td className="text-center">{lead.source || "Direct"}</td>
                      <td className="text-end text-muted small">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-muted text-center py-4">
                      No leads recorded.
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

export default LeadsTable;
