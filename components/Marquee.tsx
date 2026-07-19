type MarqueeTheme = "dark" | "light" | "accent";

type MarqueeProps = {
  items: string[];
  theme?: MarqueeTheme;
  accent?: string;
};

export default function Marquee({
  items,
  theme = "dark",
  accent = "var(--fuchsia-500)",
}: MarqueeProps) {
  const bg =
    theme === "accent"
      ? "var(--fuchsia-500)"
      : theme === "light"
      ? "#fff"
      : "#000";
  const fg =
    theme === "accent"
      ? "#fff"
      : theme === "light"
      ? "var(--neutral-900)"
      : "#fff";
  const star = theme === "accent" ? "#fff" : accent;

  const seq: React.ReactNode[] = [];
  for (let r = 0; r < 3; r++) {
    items.forEach((it, i) => {
      seq.push(
        <span
          key={r + "-" + i}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 34,
            paddingRight: 34,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-0.02em",
              color: fg,
              whiteSpace: "nowrap",
            }}
          >
            {it}
          </span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
              fill={star}
            />
          </svg>
        </span>
      );
    });
  }

  return (
    <div
      style={{
        background: bg,
        overflow: "hidden",
        padding: "22px 0",
        borderTop: theme === "light" ? "1px solid var(--border)" : "none",
        borderBottom: theme === "light" ? "1px solid var(--border)" : "none",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "inline-flex",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        {seq}
      </div>
    </div>
  );
}
