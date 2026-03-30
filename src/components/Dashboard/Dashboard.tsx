import { useState, useEffect } from "react";
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

const SIDEBAR_SECTIONS = ["Overview", "Traffic", "SEO", "Leads", "Campaigns"];

function Dashboard() {
  const [trafficData, setTrafficData] = useState<number[]>([0, 0]);
  const [dailyVisits, setDailyVisits] = useState<number>(0);
  const [seoData, setSeoData] = useState<number[]>([0, 0, 0]);
  const [leadsLabels, setLeadsLabels] = useState<string[]>([]);
  const [leadsData, setLeadsData] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState("Overview");
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
    "#c9a84c", "#e8d5a3", "#6b6b6b", "#d4d0c8",
    "#0a0a0a", "#c9a84c88", "#888", "#444",
    "#c9a84caa", "#ede9e1",
  ];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#555",
          font: { size: 12 },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#444" },
        grid: { color: "#1a1a1a" },
      },
      x: {
        ticks: { color: "#444" },
        grid: { color: "#1a1a1a" },
      },
    },
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#666",
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <div className="dashboard-root">
      <div className="dashboard-inner">
        {/* ── SIDEBAR ── */}
        <aside className="dashboard-sidebar">
          <div className="dashboard-sidebar-brand">
            Bati<span>stack</span>
          </div>
          <p className="dashboard-sidebar-label">Navigation</p>
          <ul className="dashboard-sidebar-nav">
            {SIDEBAR_SECTIONS.map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  style={{
                    color: activeSection === section ? "#c9a84c" : undefined,
                    background: activeSection === section ? "#111" : undefined,
                    borderLeft: activeSection === section ? "2px solid #c9a84c" : "2px solid transparent",
                  }}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
          <p className="dashboard-sidebar-label" style={{ marginTop: "24px" }}>Account</p>
          <ul className="dashboard-sidebar-nav">
            <li>
              <button onClick={fetchData} style={{ color: "#555" }}>
                ↻ Refresh Data
              </button>
            </li>
          </ul>
        </aside>

        {/* ── MAIN ── */}
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1 className="dashboard-welcome">
              Welcome back,{" "}
              <em>{user ? user.name : "Admin"}</em>
            </h1>
            <span className="dashboard-date">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {loading ? (
            <div className="dashboard-loading">
              <div className="dashboard-loading-ring" />
              <p className="dashboard-loading-text">Loading data</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* STAT CARDS */}
              <div className="dashboard-stats">
                {[
                  { label: "Today's Visits",  value: dailyVisits },
                  { label: "Total Page Views", value: trafficData[0] },
                  { label: "Unique Visitors",  value: trafficData[1] },
                  { label: "SEO Clicks",       value: seoData[1] },
                ].map((stat) => (
                  <div className="dashboard-stat-card" key={stat.label}>
                    <p className="dashboard-stat-label">{stat.label}</p>
                    <div className="dashboard-stat-value">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* CHARTS */}
              <div className="dashboard-charts">
                <div className="dashboard-chart-card">
                  <p className="dashboard-chart-title">Traffic Trends</p>
                  <Line
                    data={{
                      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                      datasets: [
                        {
                          label: "Page Views",
                          data: trafficData,
                          fill: true,
                          borderColor: "#c9a84c",
                          backgroundColor: "rgba(201,168,76,0.08)",
                          tension: 0.4,
                          pointRadius: 4,
                          pointHoverRadius: 6,
                          pointBackgroundColor: "#c9a84c",
                        },
                      ],
                    }}
                    options={chartOptions}
                  />
                </div>
                <div className="dashboard-chart-card">
                  <p className="dashboard-chart-title">Leads by Source</p>
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
                          borderColor: "#1e1e1e",
                        },
                      ],
                    }}
                    options={pieOptions}
                  />
                </div>
              </div>

              {/* TABLES */}
              <div className="dashboard-table-card">
                <p className="dashboard-table-title">SEO Keywords</p>
                <SEOKeywordsTable />
              </div>

              <div className="dashboard-tables-2col">
                <div className="dashboard-table-card">
                  <p className="dashboard-table-title">Marketing Campaigns</p>
                  <MarketingCampaignTable />
                </div>
                <div className="dashboard-table-card">
                  <p className="dashboard-table-title">Daily Stats</p>
                  <DailyStatsTable />
                </div>
                <div className="dashboard-table-card">
                  <p className="dashboard-table-title">Traffic Events</p>
                  <TrafficEventsTable />
                </div>
                <div className="dashboard-table-card">
                  <p className="dashboard-table-title">Leads</p>
                  <LeadsTable />
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
