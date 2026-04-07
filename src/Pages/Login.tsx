import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// ─── Gold-underline input ─────────────────────────────────────────────────────

function GoldInput({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: "32px" }}>
      <label
        style={{
          display: "block",
          fontFamily: "var(--font-sans)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--mist)",
          marginBottom: "8px",
        }}
      >
        {label}
      </label>
      <input
        {...props}
        className="bs-login-field"
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${focused ? "var(--gold)" : "var(--smoke)"}`,
          padding: "12px 0",
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          color: "var(--bone)",
          outline: "none",
          transition: "border-color 0.2s",
          display: "block",
          boxSizing: "border-box",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/dashboardPage");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Batistack Development</title>
        <meta
          name="description"
          content="Secure admin login for Batistack Development's internal dashboard. Access analytics, leads, and project data."
        />
        <meta
          name="keywords"
          content="admin login, batistack dashboard, secure login, client portal, website admin panel"
        />
        <meta name="author" content="Batistack Development" />
        <meta property="og:title" content="Batistack Admin Login" />
        <meta
          property="og:description"
          content="Login to Batistack Development's admin dashboard to manage data and view performance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batistack.com/login" />
      </Helmet>

      <style>{`
        .bs-login-field::placeholder { color: var(--mist); opacity: 1; }
      `}</style>

      <div
        style={{
          background: "var(--void)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "440px",
            width: "100%",
            padding: "60px 48px",
            background: "var(--ash)",
            border: "1px solid var(--smoke)",
            margin: "0 24px",
          }}
        >
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                color: "var(--bone)",
              }}
            >
              BATI
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "28px",
                color: "var(--gold)",
              }}
            >
              STACK
            </span>
          </div>

          {/* Admin label */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--mist)",
              textAlign: "center",
              margin: "0",
            }}
          >
            ADMIN ACCESS
          </p>

          {/* Separator */}
          <div
            style={{
              height: "1px",
              background: "var(--smoke)",
              margin: "32px 0",
            }}
          />

          {/* Form */}
          <form onSubmit={handleLogin}>
            <GoldInput
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <GoldInput
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              data-cursor="cta"
              disabled={loading}
              style={{
                display: "block",
                width: "100%",
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                letterSpacing: "0.05em",
                background: "var(--gold)",
                color: "var(--void)",
                padding: "18px",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                marginTop: "40px",
                opacity: loading ? 0.8 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {loading ? "SIGNING IN..." : "SIGN IN →"}
            </button>
          </form>

          {/* Error */}
          {error && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#e05c5c",
                marginTop: "12px",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}

          {/* Footer */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              color: "var(--mist)",
              textAlign: "center",
              marginTop: "24px",
            }}
          >
            Batistack Development Corp · Admin Only
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default LoginPage;
