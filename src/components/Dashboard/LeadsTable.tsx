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
    <Container className="my-4">
      <Card className="shadow-sm border-0 rounded-3 p-3" style={{ backgroundColor: "#ffffff" }}>
        <motion.div
          className="d-flex align-items-center justify-content-between mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="mb-0 text-dark fw-bold">📩 Leads Analytics</h4>
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
            <Table className="table-sm align-middle mb-0" style={{ fontSize: "0.9rem", tableLayout: "fixed", width: "100%" }}>
              <thead className="bg-light text-dark sticky-top" style={{ position: "sticky", top: 0, zIndex: 10, borderBottom: "2px solid #ddd" }}>
                <tr>
                  <th style={{ width: "15%" }} className="fw-bold text-start">Name</th>
                  <th style={{ width: "20%" }} className="fw-bold text-start">Email</th>
                  <th style={{ width: "35%" }} className="fw-bold text-start">Message</th>
                  <th style={{ width: "15%" }} className="fw-bold text-center">Source</th>
                  <th style={{ width: "15%" }} className="fw-bold text-end">Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.length > 0 ? (
                  leads.slice(0, 20).map((lead) => (
                    <tr key={lead.id} className="hover-row">
                      <td className="text-start text-truncate" style={{ maxWidth: "150px" }}>{lead.name}</td>
                      <td className="text-start text-truncate" style={{ maxWidth: "180px" }}>{lead.email}</td>
                      <td className="text-start text-truncate" style={{ maxWidth: "250px" }}>
                        {lead.message ? lead.message.slice(0, 100) + (lead.message.length > 100 ? "..." : "") : "No message"}
                      </td>
                      <td className="text-center">{lead.source || "Direct"}</td>
                      <td className="text-end text-muted small">{new Date(lead.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-muted text-center py-3">
                      No leads recorded.
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

export default LeadsTable;
