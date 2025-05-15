
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner, Alert, Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

interface DailyStat {
  id: number;
  date: string;
  total_visits: number;
  total_clicks: number;
  unique_visitors: number;
}

function DailyStatsTable() {
  const [dailyStats, setDailyStats] = useState<DailyStat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchDailyStats = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${URL}/daily-stats`);
        setDailyStats(response.data.payload);
      } catch (err) {
        setError("Error fetching daily stats.");
        console.error("Error fetching daily stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDailyStats();
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
            Daily Stats <span style={{ color: "#0d6efd" }}>Analytics</span>
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
              maxHeight: "350px",
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
                  <th className="fw-semibold text-start">Date</th>
                  <th className="fw-semibold text-center">Total Visits</th>
                  <th className="fw-semibold text-center">Total Clicks</th>
                  <th className="fw-semibold text-center">Unique Visitors</th>
                </tr>
              </thead>
              <tbody>
                {dailyStats.length > 0 ? (
                  dailyStats.slice(0, 20).map((stat) => (
                    <tr key={stat.id}>
                      <td className="text-start">
                        {new Date(stat.date).toLocaleDateString()}
                      </td>
                      <td className="text-center">
                        {stat.total_visits.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {stat.total_clicks.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {stat.unique_visitors.toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-muted text-center py-4">
                      No daily stats recorded.
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

export default DailyStatsTable;
