import ImageSlot from "./ImageSlot";

type Stat = { label: string; value: string; accent: "f" | "c" };
type CaseStudy = {
  id: string;
  industry: string;
  title: string;
  quote: string;
  name: string;
  role: string;
  stats: Stat[];
};

const cases: CaseStudy[] = [
  {
    id: "case-1",
    industry: "Skincare · DTC",
    title: "From an $8K/day ceiling to $31K/day — profitably",
    quote:
      "They rebuilt our account and marketing strategy in two weeks. We’d been stuck for six months. Now we scale and the ROAS holds.",
    name: "Dana Osei",
    role: "Founder, GLOWERY",
    stats: [
      { label: "Daily spend", value: "$8K→$31K", accent: "f" },
      { label: "Blended ROAS", value: "2.1→3.9x", accent: "c" },
      { label: "Window", value: "90 days", accent: "f" },
    ],
  },
  {
    id: "case-2",
    industry: "Apparel · DTC",
    title: "Cut CPA 44% while doubling TikTok budget",
    quote:
      "The creative volume is the difference. There’s always a fresh winner before the last one dies. Our in-house team never managed that.",
    name: "Marcus Reed",
    role: "Head of Growth, NORTHBOUND",
    stats: [
      { label: "CPA", value: "−44%", accent: "c" },
      { label: "Monthly spend", value: "2x", accent: "f" },
      { label: "Ads / month", value: "24", accent: "c" },
    ],
  },
];

export default function Results() {
  return (
    <div
      id="results"
      data-theme="dark"
      style={{ background: "#000", position: "relative", overflow: "hidden" }}
    >
      <div
        className="mob-pad"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "110px 40px",
          fontFamily: "var(--font-body)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <div>
            <div
              style={{
                font: "var(--type-overline)",
                letterSpacing: "var(--tracking-overline)",
                textTransform: "uppercase",
                color: "var(--fuchsia-300)",
                marginBottom: 16,
              }}
            >
              Results, not promises
            </div>
            <h2 className="section-mega" style={{ margin: 0, color: "#fff" }}>
              RESULTS
            </h2>
          </div>
          <p
            style={{
              font: "var(--type-body-lg)",
              color: "rgba(255,255,255,0.6)",
              maxWidth: 380,
              margin: 0,
            }}
          >
            We&apos;d rather show you than tell you. Here&apos;s what happened
            when brands handed us their TikTok Ads
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {cases.map((c, idx) => (
            <div
              key={c.id}
              className="case-row"
              style={{
                display: "grid",
                gridTemplateColumns:
                  idx % 2 === 0 ? "0.85fr 1.15fr" : "1.15fr 0.85fr",
                gap: 0,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 18,
                overflow: "hidden",
                background: "var(--neutral-900)",
              }}
            >
              <ImageSlot
                id={c.id}
                shape="rounded"
                radius={0}
                placeholder="Case study visual"
                className="case-img"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: 340,
                  order: idx % 2 === 0 ? 0 : 2,
                }}
              />
              <div
                style={{
                  padding: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--cyan-300)",
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  {c.industry}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(24px, 2.4vw, 32px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    color: "#fff",
                    marginBottom: 28,
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16,
                    marginBottom: 30,
                    paddingBottom: 28,
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 24,
                          fontWeight: 700,
                          color:
                            s.accent === "f"
                              ? "var(--fuchsia-400)"
                              : "var(--cyan-300)",
                          marginBottom: 4,
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.5)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: 18,
                    lineHeight: 1.5,
                    color: "#fff",
                    margin: "0 0 20px",
                  }}
                >
                  &ldquo;{c.quote}&rdquo;
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--neutral-700)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: 14,
                    }}
                  >
                    {c.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </div>
                  <div>
                    <div
                      style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}
                    >
                      {c.name}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}
                    >
                      {c.role}
                    </div>
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
