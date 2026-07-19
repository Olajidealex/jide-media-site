import { Star } from "lucide-react";
import ImageSlot from "./ImageSlot";

type Quote = { id: string; quote: string; name: string; role: string };

const quotes: (Quote & { src: string })[] = [
  {
    id: "tm-1",
    quote:
      "The audit alone was worth the call. They found three structural issues our last agency missed entirely.",
    name: "Michael Adedeji",
    role: "CMO, MAREA",
    src: "/assets/slots/tm-1.webp",
  },
  {
    id: "tm-2",
    quote:
      "We finally have a creative pipeline instead of scrambling every two weeks. That’s the whole game on TikTok.",
    name: "Tom Whitfield",
    role: "Founder, RIPTIDE",
    src: "/assets/slots/tm-2.webp",
  },
  {
    id: "tm-3",
    quote:
      "Spend doubled, ROAS held. I stopped checking Ads Manager at midnight. That’s the number that matters.",
    name: "Lena Park",
    role: "VP Growth, HÜXLEY",
    src: "/assets/slots/tm-3.webp",
  },
];

export default function Testimonials() {
  return (
    <div style={{ background: "#fff" }}>
      <div
        className="mob-pad"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "110px 40px",
          fontFamily: "var(--font-body)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              font: "var(--type-overline)",
              letterSpacing: "var(--tracking-overline)",
              textTransform: "uppercase",
              color: "var(--fuchsia-700)",
              marginBottom: 16,
            }}
          >
            What founders say
          </div>
          <h2
            className="section-mega"
            style={{ margin: 0, color: "var(--neutral-900)" }}
          >
            TESTIMONIALS
          </h2>
        </div>
        <div
          className="tm-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {quotes.map((q) => (
            <div
              key={q.id}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--neutral-50)",
                border: "1px solid var(--border)",
                borderRadius: 18,
                padding: 32,
              }}
            >
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    color="var(--fuchsia-500)"
                    fill="var(--fuchsia-500)"
                  />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 19,
                  lineHeight: 1.5,
                  color: "var(--neutral-900)",
                  margin: "0 0 28px",
                  flex: 1,
                }}
              >
                &ldquo;{q.quote}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderTop: "1px solid var(--border)",
                  paddingTop: 20,
                }}
              >
                <ImageSlot
                  id={q.id}
                  shape="circle"
                  placeholder="Photo"
                  src={q.src}
                  alt={q.name}
                  style={{ width: 48, height: 48, flexShrink: 0 }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--neutral-900)",
                    }}
                  >
                    {q.name}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--neutral-500)" }}>
                    {q.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
