import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";

export default function SettingsSection() {
  const { user } = useAuth();
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [feedback, setFeedback] = useState<{ msg: string; error: boolean } | null>(null);
  const [saving, setSaving] = useState(false);
  const url = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async () => {
    setFeedback(null);
    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      setFeedback({ msg: "All fields are required.", error: true });
      return;
    }
    if (form.newPassword !== form.confirmPassword) {
      setFeedback({ msg: "New passwords do not match.", error: true });
      return;
    }
    if (form.newPassword.length < 6) {
      setFeedback({ msg: "New password must be at least 6 characters.", error: true });
      return;
    }
    setSaving(true);
    try {
      await axios.patch(`${url}/users/${user!.id}/password`, {
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });
      setFeedback({ msg: "Password updated successfully.", error: false });
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (e: unknown) {
      const msg =
        axios.isAxiosError(e) && e.response?.data?.error
          ? e.response.data.error
          : "Failed to update password.";
      setFeedback({ msg, error: true });
    } finally {
      setSaving(false);
    }
  };

  const inputFields = [
    { key: "currentPassword", label: "Current Password" },
    { key: "newPassword",     label: "New Password" },
    { key: "confirmPassword", label: "Confirm New Password" },
  ] as const;

  return (
    <>
      <p className="db-section-heading">Settings</p>

      <div className="db-settings-section">
        <p className="db-settings-title">Account</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "32px" }}>
          {[
            { label: "Name",  value: user?.name },
            { label: "Email", value: user?.email },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--mist)", width: "60px" }}>
                {label}
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--bone)" }}>
                {value}
              </span>
            </div>
          ))}
        </div>

        <p className="db-settings-title">Change Password</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {inputFields.map(({ key, label }) => (
            <div className="db-form-group" key={key}>
              <label className="db-form-label">{label}</label>
              <input
                className="db-form-input"
                type="password"
                value={form[key]}
                onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
              />
            </div>
          ))}
          <button
            className="db-btn db-btn-gold"
            style={{ alignSelf: "flex-start", marginTop: "4px" }}
            onClick={handleSubmit}
            disabled={saving}
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>
          {feedback && (
            <div className={`db-feedback${feedback.error ? " error" : ""}`}>
              {feedback.msg}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
