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
import { useAuth } from "../../context/AuthContext";

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
  const { user } = useAuth();
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
  const dynamicColors = [
    "#4e73df",
    "#1cc88a",
    "#36b9cc",
    "#f6c23e",
    "#e74a3b",
    "#858796",
    "#5a5c69",
    "#20c997",
    "#fd7e14",
    "#6610f2",
  ];

  return (
    <Container className="dashboard-container mt-4">
      <motion.h1
        className="dashboard-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {user ? `Welcome  ${user.name}` : "Welcome"}
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
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [
                      {
                        label: "Page Views",
                        data: trafficData,
                        fill: true,
                        borderColor: "#0d6efd",
                        backgroundColor: "rgba(13, 110, 253, 0.15)",
                        tension: 0.4,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: "#0d6efd",
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: true,
                        labels: {
                          color: "#333",
                          font: { size: 13, weight: "bold" },
                        },
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: { color: "#666" },
                      },
                      x: {
                        ticks: { color: "#666" },
                      },
                    },
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
                        backgroundColor: leadsLabels.map(
                          (_, i) => dynamicColors[i % dynamicColors.length]
                        ),
                        hoverOffset: 8,
                        borderWidth: 1,
                        borderColor: "#ffffff",
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        position: "bottom",
                        labels: {
                          color: "#4e4e4e",
                          font: { size: 14 },
                        },
                      },
                    },
                  }}
                />
              </Card>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={12}>
              <SEOKeywordsTable />
            </Col>
            <Col md={6}>
              <MarketingCampaignTable />
            </Col>
            <Col md={6}>
              <DailyStatsTable />
            </Col>
            <Col md={6}>
              <TrafficEventsTable />
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
