import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

interface Lead {
  id: number;
  name: string;
  email: string;
  message?: string;
  source?: string;
  status: string;
  notes?: string;
  created_at: string;
}

type StatusFilter = "all" | "new" | "contacted" | "converted" | "closed";

export default function LeadsSection() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [noteDraft, setNoteDraft] = useState("");
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}/leads`);
      setLeads(res.data.payload);
    } catch (e) {
      console.error("Error fetching leads:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: number, status: string) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status } : l))
    );
    try {
      await axios.patch(`${url}/leads/${id}`, { status });
    } catch (e) {
      console.error("Error updating status:", e);
      fetchLeads();
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this lead? This cannot be undone.")) return;
    setLeads((prev) => prev.filter((l) => l.id !== id));
    try {
      await axios.delete(`${url}/leads/${id}`);
    } catch (e) {
      console.error("Error deleting lead:", e);
      fetchLeads();
    }
  };

  const handleNotesSave = async (id: number) => {
    try {
      await axios.patch(`${url}/leads/${id}`, { notes: noteDraft });
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, notes: noteDraft } : l))
      );
      setExpandedId(null);
    } catch (e) {
      console.error("Error saving notes:", e);
    }
  };

  const handleRowClick = (lead: Lead) => {
    if (expandedId === lead.id) {
      setExpandedId(null);
    } else {
      setExpandedId(lead.id);
      setNoteDraft(lead.notes ?? "");
    }
  };

  const filtered = leads.filter((l) => {
    const matchSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const filterTabs: StatusFilter[] = ["all", "new", "contacted", "converted", "closed"];

  return (
    <>
      <p className="db-section-heading">Leads</p>

      <div className="db-toolbar">
        <input
          className="db-search-input"
          placeholder="Search by name or email…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="db-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`db-filter-tab${statusFilter === tab ? " active" : ""}`}
              onClick={() => setStatusFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="dashboard-table-card" style={{ padding: 0 }}>
        {loading ? (
          <p style={{ padding: "24px", color: "var(--mist)", fontFamily: "var(--font-sans)", fontSize: "12px" }}>
            Loading…
          </p>
        ) : (
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Source</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "var(--mist)", padding: "32px" }}>
                    No leads found.
                  </td>
                </tr>
              ) : (
                filtered.map((lead) => (
                  <React.Fragment key={lead.id}>
                    <tr
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRowClick(lead)}
                    >
                      <td>{lead.name}</td>
                      <td style={{ color: "var(--mist)" }}>{lead.email}</td>
                      <td style={{ maxWidth: "220px" }}>
                        {lead.message ? lead.message.slice(0, 60) + (lead.message.length > 60 ? "…" : "") : "—"}
                      </td>
                      <td>
                        <span style={{ color: "var(--mist)", fontSize: "11px" }}>
                          {lead.source ?? "direct"}
                        </span>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <select
                          className="db-status-select"
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="converted">Converted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td style={{ color: "var(--mist)", fontSize: "11px", whiteSpace: "nowrap" }}>
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <button
                          className="db-btn db-btn-danger"
                          onClick={() => handleDelete(lead.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    {expandedId === lead.id && (
                      <tr className="db-notes-row">
                        <td colSpan={7}>
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--mist)", marginBottom: "6px" }}>
                            Notes
                          </p>
                          <textarea
                            className="db-notes-textarea"
                            value={noteDraft}
                            onChange={(e) => setNoteDraft(e.target.value)}
                            placeholder="Add internal notes about this lead…"
                          />
                          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                            <button
                              className="db-btn db-btn-gold"
                              onClick={() => handleNotesSave(lead.id)}
                            >
                              Save Notes
                            </button>
                            <button
                              className="db-btn"
                              onClick={() => setExpandedId(null)}
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
