import type { CSSProperties } from "react";

type Shape = "circle" | "rounded" | "square";

type ImageSlotProps = {
  shape?: Shape;
  radius?: number | string;
  placeholder?: string;
  fit?: "cover" | "contain";
  src?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

export default function ImageSlot({
  shape = "rounded",
  radius,
  placeholder,
  fit = "cover",
  src,
  alt,
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

  const baseStyle: CSSProperties = {
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
  };

  if (src) {
    return (
      <div id={id} className={className} style={baseStyle}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? placeholder ?? ""}
          style={{
            width: "100%",
            height: "100%",
            objectFit: fit,
            display: "block",
          }}
        />
      </div>
    );
  }

  return (
    <div
      id={id}
      className={className}
      aria-label={placeholder}
      role="img"
      style={baseStyle}
    >
      <span style={{ padding: "0 8px", opacity: 0.85 }}>{placeholder}</span>
    </div>
  );
}
