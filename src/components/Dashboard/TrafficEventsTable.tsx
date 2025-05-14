// src/components/Dashboard/TrafficEventsTable.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Spinner, Alert, Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

interface TrafficEvent {
  id: number;
  event_type: string;
  path: string;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  user_agent: string;
  ip_address: string;
  created_at: string;
}

function TrafficEventsTable() {
  const [trafficEvents, setTrafficEvents] = useState<TrafficEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchTrafficEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${URL}/traffic`);
        setTrafficEvents(response.data.payload);
      } catch (err) {
        setError("Error fetching traffic events.");
        console.error("Error fetching traffic events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrafficEvents();
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
           Traffic <span style={{ color: "#0d6efd" }}>Events</span> Analytics
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
                  <th className="fw-semibold text-start">Event Type</th>
                  <th className="fw-semibold text-start">Path</th>
                  <th className="fw-semibold text-start">Referrer</th>
                  <th className="fw-semibold text-center">UTM Source</th>
                  <th className="fw-semibold text-center">IP Address</th>
                  <th className="fw-semibold text-end">Date</th>
                </tr>
              </thead>
              <tbody>
                {trafficEvents.length > 0 ? (
                  trafficEvents.slice(0, 7).map((event) => (
                    <tr key={event.id}>
                      <td className="text-start text-truncate" style={{ maxWidth: "150px" }}>
                        {event.event_type}
                      </td>
                      <td className="text-start text-truncate" style={{ maxWidth: "180px" }}>
                        {event.path}
                      </td>
                      <td className="text-start text-truncate" style={{ maxWidth: "160px" }}>
                        {event.referrer || "Direct"}
                      </td>
                      <td className="text-center text-primary fw-bold">
                        {event.utm_source || "N/A"}
                      </td>
                      <td className="text-center text-muted">{event.ip_address}</td>
                      <td className="text-end text-muted small">
                        {new Date(event.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-muted text-center py-4">
                      No traffic events recorded.
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

export default TrafficEventsTable;
