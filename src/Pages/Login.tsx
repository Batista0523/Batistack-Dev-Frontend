import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// ─── Design tokens ────────────────────────────────────────────────────────────
const t = {
  black: "#0a0a0a",
  offWhite: "#f5f3ef",
  gold: "#c9a84c",
  grayLight: "#d4d0c8",
  gray: "#6b6b6b",
  fontSerif: "'Cormorant Garamond', Georgia, serif",
  fontSans: "'DM Sans', sans-serif",
};

// ─── Gold-underline input helper ──────────────────────────────────────────────
function GoldInput({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 32 }}>
      <label
        style={{
          display: "block",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: t.gray,
          marginBottom: 10,
          fontFamily: t.fontSans,
        }}
      >
        {label}
      </label>
      <input
        {...props}
        style={{
          width: "100%",
          padding: "14px 0",
          border: "none",
          borderBottom: `1.5px solid ${focused ? t.gold : t.grayLight}`,
          background: "transparent",
          fontFamily: t.fontSans,
          fontSize: 15,
          color: t.black,
          outline: "none",
          transition: "border-color 0.3s",
          display: "block",
          boxSizing: "border-box",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bs-login-placeholder"
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
        <meta property="og:url" content="https://www.batistack.com/login" />
      </Helmet>

      <style>{`
        .bs-login-placeholder::placeholder { color: ${t.grayLight}; }
      `}</style>

      <div
        style={{
          background: t.offWhite,
          minHeight: "100vh",
          color: t.black,
        }}
      >
        <div
          style={{
            maxWidth: 400,
            margin: "0 auto",
            paddingTop: 160,
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 80,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Brand */}
            <div
              style={{
                fontFamily: t.fontSerif,
                fontSize: 32,
                fontWeight: 400,
                color: t.black,
                marginBottom: 32,
                letterSpacing: "0.01em",
              }}
            >
              Bati
              <span style={{ color: t.gold }}>stack</span>
            </div>

            {/* Label */}
            <p
              style={{
                fontFamily: t.fontSans,
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: t.gold,
                marginBottom: 12,
              }}
            >
              Admin Access
            </p>

            {/* Headline */}
            <h2
              style={{
                fontFamily: t.fontSerif,
                fontSize: 40,
                fontWeight: 300,
                color: t.black,
                margin: "0 0 40px",
                lineHeight: 1.1,
              }}
            >
              Welcome back.
            </h2>

            {/* Error */}
            {error && (
              <div
                style={{
                  color: "#b93333",
                  fontSize: 13,
                  marginBottom: 20,
                  fontFamily: t.fontSans,
                }}
              >
                {error}
              </div>
            )}

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
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "18px 0",
                  background: loading ? t.gray : t.black,
                  color: "#ffffff",
                  border: "none",
                  fontFamily: t.fontSans,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background 0.3s",
                  marginTop: 8,
                }}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* Footer note */}
            <p
              style={{
                fontFamily: t.fontSans,
                fontSize: 12,
                color: t.gray,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              Authorized personnel only.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
