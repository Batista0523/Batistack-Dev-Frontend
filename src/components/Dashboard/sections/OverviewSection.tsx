import { useEffect, useState } from "react";
import axios from "axios";

interface OverviewData {
  todayVisits: number;
  totalLeads: number;
  newLeadsThisWeek: number;
  topSource: string;
}

export default function OverviewSection() {
  const [data, setData] = useState<OverviewData>({
    todayVisits: 0,
    totalLeads: 0,
    newLeadsThisWeek: 0,
    topSource: "—",
  });
  const [loading, setLoading] = useState(true);
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [trafficRes, leadsRes] = await Promise.all([
          axios.get(`${url}/traffic/summary?days=7`),
          axios.get(`${url}/leads`),
        ]);

        const summary = trafficRes.data.payload;
        const leads: Array<{ status: string; source?: string; created_at: string }> =
          leadsRes.data.payload;

        const today = new Date().toISOString().slice(0, 10);
        const todayVisits =
          summary.dailyCounts.find((d: { date: string }) => d.date === today)?.count ?? 0;

        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
        const newLeadsThisWeek = leads.filter(
          (l) => l.status === "new" && l.created_at >= weekAgo
        ).length;

        const sourceCounts: Record<string, number> = {};
        leads.forEach((l) => {
          const s = l.source ?? "direct";
          sourceCounts[s] = (sourceCounts[s] || 0) + 1;
        });
        const topSource =
          Object.entries(sourceCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";

        setData({
          todayVisits,
          totalLeads: leads.length,
          newLeadsThisWeek,
          topSource,
        });
      } catch (e) {
        console.error("Overview fetch error:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [url]);

  const stats = [
    { label: "Today's Visits",     value: loading ? "…" : String(data.todayVisits) },
    { label: "Total Leads",         value: loading ? "…" : String(data.totalLeads) },
    { label: "New Leads This Week", value: loading ? "…" : String(data.newLeadsThisWeek) },
    { label: "Top Traffic Source",  value: loading ? "…" : data.topSource },
  ];

  return (
    <>
      <p className="db-section-heading">Overview</p>
      <div className="dashboard-stats">
        {stats.map((s) => (
          <div className="dashboard-stat-card" key={s.label}>
            <p className="dashboard-stat-label">{s.label}</p>
            <div className="dashboard-stat-value">{s.value}</div>
          </div>
        ))}
      </div>
    </>
  );
}
