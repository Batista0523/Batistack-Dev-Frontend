import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";
import OverviewSection from "./sections/OverviewSection";
import LeadsSection from "./sections/LeadsSection";
import TrafficSection from "./sections/TrafficSection";
import SEOSection from "./sections/SEOSection";
import CampaignsSection from "./sections/CampaignsSection";
import SettingsSection from "./sections/SettingsSection";
import BrandLogo from "../BrandLogo";

type Section = "Overview" | "Leads" | "Traffic" | "SEO" | "Campaigns" | "Settings";

const SECTIONS: Section[] = ["Overview", "Leads", "Traffic", "SEO", "Campaigns", "Settings"];

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<Section>("Overview");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-root">
      <div className="dashboard-inner">
        {/* ── SIDEBAR ── */}
        <aside className="dashboard-sidebar">
          <div className="dashboard-sidebar-brand">
            <BrandLogo size="sm" />
          </div>

          <p className="dashboard-sidebar-label">Navigation</p>
          <ul className="dashboard-sidebar-nav">
            {SECTIONS.map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  style={{
                    color: activeSection === section ? "#c9a84c" : undefined,
                    background: activeSection === section ? "#111" : undefined,
                    borderLeft: activeSection === section
                      ? "2px solid #c9a84c"
                      : "2px solid transparent",
                  }}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ borderTop: "1px solid var(--smoke)", marginTop: "auto", paddingTop: "16px" }}>
            <p className="dashboard-sidebar-label">Account</p>
            <ul className="dashboard-sidebar-nav">
              <li>
                <button
                  onClick={handleLogout}
                  style={{ color: "var(--mist)" }}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1 className="dashboard-welcome">
              Welcome back, <em>{user?.name ?? "Admin"}</em>
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

          {activeSection === "Overview"  && <OverviewSection />}
          {activeSection === "Leads"     && <LeadsSection />}
          {activeSection === "Traffic"   && <TrafficSection />}
          {activeSection === "SEO"       && <SEOSection />}
          {activeSection === "Campaigns" && <CampaignsSection />}
          {activeSection === "Settings"  && <SettingsSection />}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
