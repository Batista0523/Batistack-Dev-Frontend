interface SectionMarkerProps {
  number: string;
  label:  string;
}

export default function SectionMarker({ number, label }: SectionMarkerProps) {
  return (
    <div
      style={{
        display:    "flex",
        alignItems: "center",
        gap:        "16px",
      }}
    >
      {/* Large number */}
      <span
        style={{
          fontFamily:    "var(--font-display)",
          fontSize:      "14px",
          color:         "var(--gold-dim)",
          letterSpacing: "0.1em",
          lineHeight:    1,
        }}
      >
        {number}
      </span>

      {/* Separator */}
      <span
        style={{
          color:      "var(--smoke)",
          fontSize:   "14px",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        /
      </span>

      {/* Label */}
      <span
        style={{
          fontFamily:    "var(--font-sans)",
          fontSize:      "10px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color:         "var(--mist)",
          lineHeight:    1,
        }}
      >
        {label}
      </span>
    </div>
  );
}
