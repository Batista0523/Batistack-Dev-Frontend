import { Link } from "react-router-dom";

interface ButtonProps {
  variant: "primary" | "ghost";
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  style?: React.CSSProperties;
}

export default function Button({ variant, children, to, href, onClick, type = "button", disabled, style }: ButtonProps) {
  const primaryStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "16px 40px",
    background: "var(--black)",
    color: "var(--off-white)",
    fontSize: "12px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 500,
    textDecoration: "none",
    border: "none",
    transition: "background 0.3s, transform 0.2s",
    ...style,
  };

  const ghostStyle: React.CSSProperties = {
    fontSize: "12px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: 500,
    color: "var(--gray)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "transparent",
    border: "none",
    transition: "color 0.25s",
    ...style,
  };

  const s = variant === "primary" ? primaryStyle : ghostStyle;

  if (to) {
    return <Link to={to} style={s} className={variant === "ghost" ? "btn-ghost-bs" : "btn-primary-bs"}>{children}</Link>;
  }
  if (href) {
    return <a href={href} style={s} className={variant === "ghost" ? "btn-ghost-bs" : "btn-primary-bs"}>{children}</a>;
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={s} className={variant === "ghost" ? "btn-ghost-bs" : "btn-primary-bs"}>
      {children}
    </button>
  );
}
