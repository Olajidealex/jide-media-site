import type { CSSProperties } from "react";

type Shape = "circle" | "rounded" | "square";

type ImageSlotProps = {
  shape?: Shape;
  radius?: number | string;
  placeholder?: string;
  fit?: "cover" | "contain";
  className?: string;
  style?: CSSProperties;
  id?: string;
};

export default function ImageSlot({
  shape = "rounded",
  radius,
  placeholder,
  className,
  style,
  id,
}: ImageSlotProps) {
  const resolvedRadius: CSSProperties["borderRadius"] =
    shape === "circle"
      ? "50%"
      : radius !== undefined
      ? typeof radius === "number"
        ? `${radius}px`
        : radius
      : 12;

  return (
    <div
      id={id}
      className={className}
      aria-label={placeholder}
      role="img"
      style={{
        background: "var(--neutral-300)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--neutral-600)",
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        textAlign: "center",
        borderRadius: resolvedRadius,
        overflow: "hidden",
        ...style,
      }}
    >
      <span style={{ padding: "0 8px", opacity: 0.85 }}>{placeholder}</span>
    </div>
  );
}
