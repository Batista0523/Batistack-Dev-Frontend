import { useEffect, useState } from "react";
import axios from "axios";

interface Campaign {
  id: number;
  name: string;
  platform: string;
  utm_campaign: string;
  budget: number;
  start_date: string;
  end_date: string;
}

const EMPTY_FORM = { name: "", platform: "", utm_campaign: "", budget: "", start_date: "", end_date: "" };

export default function CampaignsSection() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => { fetchCampaigns(); }, []);

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}/campaigns`);
      setCampaigns(res.data.payload);
    } catch (e) {
      console.error("Error fetching campaigns:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (c: Campaign) => {
    setEditingId(c.id);
    setForm({
      name: c.name,
      platform: c.platform,
      utm_campaign: c.utm_campaign,
      budget: String(c.budget),
      start_date: c.start_date.slice(0, 10),
      end_date: c.end_date.slice(0, 10),
    });
    setShowForm(true);
  };

  const handleSubmit = async () => {
    const payload = { ...form, budget: Number(form.budget) };
    try {
      if (editingId !== null) {
        await axios.put(`${url}/campaigns/${editingId}`, payload);
      } else {
        await axios.post(`${url}/campaigns`, payload);
      }
      setShowForm(false);
      setEditingId(null);
      setForm(EMPTY_FORM);
      fetchCampaigns();
    } catch (e) {
      console.error("Error saving campaign:", e);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this campaign?")) return;
    try {
      await axios.delete(`${url}/campaigns/${id}`);
      setCampaigns((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      console.error("Error deleting campaign:", e);
    }
  };

  const fields: { key: keyof typeof EMPTY_FORM; label: string; type?: string }[] = [
    { key: "name",         label: "Campaign Name" },
    { key: "platform",     label: "Platform" },
    { key: "utm_campaign", label: "UTM Campaign" },
    { key: "budget",       label: "Budget ($)", type: "number" },
    { key: "start_date",   label: "Start Date",  type: "date" },
    { key: "end_date",     label: "End Date",    type: "date" },
  ];

  return (
    <>
      <p className="db-section-heading">Campaigns</p>

      <div className="db-toolbar">
        <span />
        <button
          className="db-btn db-btn-gold"
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm(EMPTY_FORM); }}
        >
          {showForm ? "Cancel" : "+ New Campaign"}
        </button>
      </div>

      {showForm && (
        <div className="db-inline-form">
          {fields.map((f) => (
            <div className="db-form-group" key={f.key}>
              <label className="db-form-label">{f.label}</label>
              <input
                className="db-form-input"
                type={f.type ?? "text"}
                value={form[f.key]}
                onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
              />
            </div>
          ))}
          <div className="db-form-actions">
            <button className="db-btn db-btn-gold" onClick={handleSubmit}>
              {editingId !== null ? "Update Campaign" : "Create Campaign"}
            </button>
            <button className="db-btn" onClick={() => { setShowForm(false); setEditingId(null); setForm(EMPTY_FORM); }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="dashboard-table-card" style={{ padding: 0 }}>
        {loading ? (
          <p style={{ padding: "24px", color: "var(--mist)", fontFamily: "var(--font-sans)", fontSize: "12px" }}>Loading…</p>
        ) : (
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Platform</th>
                <th>UTM</th>
                <th style={{ textAlign: "right" }}>Budget</th>
                <th>Start</th>
                <th>End</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "var(--mist)", padding: "32px" }}>
                    No campaigns yet. Create one above.
                  </td>
                </tr>
              ) : (
                campaigns.map((c) => (
                  <tr key={c.id}>
                    <td>{c.name}</td>
                    <td style={{ color: "var(--mist)" }}>{c.platform}</td>
                    <td style={{ fontFamily: "monospace", fontSize: "11px" }}>{c.utm_campaign}</td>
                    <td style={{ textAlign: "right", color: "var(--gold)" }}>${Number(c.budget).toLocaleString()}</td>
                    <td style={{ fontSize: "11px", color: "var(--mist)" }}>{c.start_date?.slice(0, 10)}</td>
                    <td style={{ fontSize: "11px", color: "var(--mist)" }}>{c.end_date?.slice(0, 10)}</td>
                    <td>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button className="db-btn" onClick={() => handleEdit(c)}>Edit</button>
                        <button className="db-btn db-btn-danger" onClick={() => handleDelete(c.id)}>Delete</button>
                      </div>
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
