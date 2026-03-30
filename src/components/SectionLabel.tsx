interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <p
      style={{
        fontSize: "11px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--gold)",
        fontWeight: 500,
        marginBottom: "20px",
        opacity: light ? 0.9 : 1,
      }}
    >
      {children}
    </p>
  );
}
