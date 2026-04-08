import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);

interface DayCount { date: string; count: number; }
interface PageCount { path: string; count: number; }
interface Summary {
  dailyCounts: DayCount[];
  topPages: PageCount[];
  uniqueVisitors: number;
}

export default function TrafficSection() {
  const [days, setDays] = useState<7 | 30>(7);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}/traffic/summary?days=${days}`);
        setSummary(res.data.payload);
      } catch (e) {
        console.error("Error fetching traffic summary:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [days, url]);

  const chartLabels = summary?.dailyCounts.map((d) =>
    new Date(d.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })
  ) ?? [];

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Daily Visits",
        data: summary?.dailyCounts.map((d) => d.count) ?? [],
        fill: true,
        borderColor: "#c9a84c",
        backgroundColor: "rgba(201,168,76,0.07)",
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "#c9a84c",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1a1a1a",
        titleColor: "#c9a84c",
        bodyColor: "#f0ede6",
        borderColor: "#2e2e2e",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#555", stepSize: 1 },
        grid: { color: "rgba(46,46,46,0.6)" },
      },
      x: {
        ticks: { color: "#555" },
        grid: { color: "rgba(46,46,46,0.3)" },
      },
    },
  };

  return (
    <>
      <p className="db-section-heading">Traffic</p>

      <div className="db-toggle-group">
        {([7, 30] as const).map((d) => (
          <button
            key={d}
            className={`db-toggle-btn${days === d ? " active" : ""}`}
            onClick={() => setDays(d)}
          >
            {d} days
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: "var(--mist)", fontFamily: "var(--font-sans)", fontSize: "12px" }}>Loading…</p>
      ) : (
        <>
          <div className="dashboard-charts" style={{ gridTemplateColumns: "2fr 1fr", marginTop: 0 }}>
            <div className="dashboard-chart-card">
              <p className="dashboard-chart-title">Daily Visits — Last {days} Days</p>
              <Line data={chartData} options={chartOptions} />
            </div>
            <div className="dashboard-chart-card">
              <p className="dashboard-chart-title">Unique Visitors</p>
              <div className="dashboard-stat-value" style={{ fontSize: "64px", marginTop: "20px" }}>
                {summary?.uniqueVisitors ?? 0}
              </div>
            </div>
          </div>

          <div className="dashboard-table-card" style={{ marginTop: "12px" }}>
            <p className="dashboard-table-title">Top Pages</p>
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Path</th>
                  <th style={{ textAlign: "right" }}>Visits</th>
                </tr>
              </thead>
              <tbody>
                {summary?.topPages.map((p) => (
                  <tr key={p.path}>
                    <td style={{ fontFamily: "monospace", fontSize: "12px" }}>{p.path}</td>
                    <td style={{ textAlign: "right", color: "var(--gold)" }}>{p.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
