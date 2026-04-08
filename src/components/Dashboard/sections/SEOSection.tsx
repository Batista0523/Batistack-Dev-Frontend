import { useEffect, useState } from "react";
import axios from "axios";

interface SEOKeyword {
  id: number;
  keyword: string;
  impressions: number;
  clicks: number;
  ctr: number;
  avg_position: number;
  date: string;
}

export default function SEOSection() {
  const [keywords, setKeywords] = useState<SEOKeyword[]>([]);
  const [loading, setLoading] = useState(true);
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios
      .get(`${url}/seo-keywords`)
      .then((res) => setKeywords(res.data.payload))
      .catch((e) => console.error("Error fetching SEO keywords:", e))
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <>
      <p className="db-section-heading">SEO Keywords</p>
      <div className="dashboard-table-card" style={{ padding: 0 }}>
        {loading ? (
          <p style={{ padding: "24px", color: "var(--mist)", fontFamily: "var(--font-sans)", fontSize: "12px" }}>Loading…</p>
        ) : (
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Keyword</th>
                <th style={{ textAlign: "right" }}>Impressions</th>
                <th style={{ textAlign: "right" }}>Clicks</th>
                <th style={{ textAlign: "right" }}>CTR</th>
                <th style={{ textAlign: "right" }}>Avg Position</th>
                <th style={{ textAlign: "right" }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {keywords.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", color: "var(--mist)", padding: "32px" }}>
                    No SEO keyword data yet.
                  </td>
                </tr>
              ) : (
                keywords.map((k) => (
                  <tr key={k.id}>
                    <td>{k.keyword}</td>
                    <td style={{ textAlign: "right" }}>{k.impressions}</td>
                    <td style={{ textAlign: "right", color: "var(--gold)" }}>{k.clicks}</td>
                    <td style={{ textAlign: "right" }}>{(Number(k.ctr) * 100).toFixed(1)}%</td>
                    <td style={{ textAlign: "right" }}>{Number(k.avg_position).toFixed(1)}</td>
                    <td style={{ textAlign: "right", color: "var(--mist)", fontSize: "11px" }}>
                      {new Date(k.date + "T12:00:00").toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
