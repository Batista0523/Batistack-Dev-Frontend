// src/components/Dashboard/Dashboard.tsx
import { useState, useEffect } from "react";
import { Row, Col, Container, Card, Spinner } from "react-bootstrap";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ArcElement,
} from "chart.js";
import TrafficEventsTable from "./TrafficEventsTable";
import DailyStatsTable from "./DailyStatsTable";
import SEOKeywordsTable from "./SEOKeywordsTable";
import MarketingCampaignTable from "./MarketingCampaignTable";
import LeadsTable from "./LeadsTable";
import axios from "axios";
import { motion } from "framer-motion";
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ArcElement
);

function Dashboard() {
  const [trafficData, setTrafficData] = useState<number[]>([0, 0]);
  const [dailyVisits, setDailyVisits] = useState<number>(0);
  const [seoData, setSeoData] = useState<number[]>([0, 0, 0]);
  const [leadsLabels, setLeadsLabels] = useState<string[]>([]);
  const [leadsData, setLeadsData] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([fetchTrafficData(), fetchSEOData(), fetchLeadsData()]);
    setLoading(false);
  };

  const fetchTrafficData = async () => {
    try {
      const response = await axios.get(`${url}/traffic`);
      const events = response.data.payload;
      const pageViews = events.length;
      const uniqueVisitors = new Set(events.map((e: any) => e.ip_address)).size;
      const todayVisits = events.filter(
        (e: any) =>
          new Date(e.created_at).toDateString() === new Date().toDateString()
      ).length;
      setTrafficData([pageViews, uniqueVisitors]);
      setDailyVisits(todayVisits);
    } catch (error) {
      console.error("Error fetching traffic data:", error);
    }
  };

  const fetchSEOData = async () => {
    try {
      const response = await axios.get(`${url}/seo-keywords`);
      const keywords = response.data.payload;
      const impressions = keywords.reduce(
        (acc: number, k: any) => acc + k.impressions,
        0
      );
      const clicks = keywords.reduce(
        (acc: number, k: any) => acc + k.clicks,
        0
      );
      const avgPosition =
        keywords.length > 0
          ? keywords.reduce((acc: number, k: any) => acc + k.avg_position, 0) /
            keywords.length
          : 0;
      setSeoData([impressions, clicks, avgPosition]);
    } catch (error) {
      console.error("Error fetching SEO data:", error);
    }
  };

  const fetchLeadsData = async () => {
    try {
      const response = await axios.get(`${url}/leads`);
      const leads = response.data.payload;
      const sourceCounts: Record<string, number> = {};
      leads.forEach((lead: any) => {
        const source = lead.source ? lead.source.toLowerCase() : "unknown";
        sourceCounts[source] = (sourceCounts[source] || 0) + 1;
      });
      setLeadsLabels(Object.keys(sourceCounts));
      setLeadsData(Object.values(sourceCounts));
    } catch (error) {
      console.error("Error fetching leads data:", error);
    }
  };

  return (
    <Container className="dashboard-container mt-4">
      <motion.h1
        className="dashboard-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📊 Admin Dashboard
      </motion.h1>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
          <p>Loading Dashboard Data...</p>
        </div>
      ) : (
        <>
          <Row className="mb-4 g-4">
            <Col md={3}>
              <Card className="dashboard-card">
                <h6>Today's Visits</h6>
                <h3>{dailyVisits}</h3>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="dashboard-card">
                <h6>Total Page Views</h6>
                <h3>{trafficData[0]}</h3>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="dashboard-card">
                <h6>Unique Visitors</h6>
                <h3>{trafficData[1]}</h3>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="dashboard-card">
                <h6>SEO Clicks</h6>
                <h3>{seoData[1]}</h3>
              </Card>
            </Col>
          </Row>

          <Row className="mb-4 g-4">
            <Col md={6}>
              <Card className="dashboard-card chart-card">
                <h6>Traffic Trends</h6>
                <Line
                  data={{
                    labels: ["Total Page Views", "Unique Visitors"],
                    datasets: [
                      {
                        label: "Traffic Stats",
                        data: trafficData,
                        borderColor: "#4e73df",
                        backgroundColor: "rgba(78, 115, 223, 0.15)",
                        borderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: "#4e73df",
                      },
                    ],
                  }}
                />
              </Card>
            </Col>
            <Col md={6}>
              <Card className="dashboard-card chart-card">
                <h6>Leads by Source</h6>
                <Pie
                  data={{
                    labels: leadsLabels,
                    datasets: [
                      {
                        data: leadsData,
                        backgroundColor: [
                          "red",
                          "#36a2eb",
                          "#ffcd56",
                          "#4bc0c0",
                        ],
                      },
                    ],
                  }}
                />
              </Card>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6}>
              <TrafficEventsTable />
            </Col>
            <Col md={6}>
              <DailyStatsTable />
            </Col>
            <Col md={6}>
              <SEOKeywordsTable />
            </Col>
            <Col md={6}>
              <MarketingCampaignTable />
            </Col>
            <Col md={6}>
              <LeadsTable />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Dashboard;
