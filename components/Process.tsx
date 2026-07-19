import { ArrowRight } from "lucide-react";

type Step = { n: string; title: string; desc: string };

const steps: Step[] = [
  {
    n: "01",
    title: "Audit",
    desc: "Before we touch anything, we dig into your current ads, your numbers, and your product. You walk away knowing exactly what's working, what's wasting money, and what's possible on TikTok, whether or not you hire us.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "We map out the strategies worth testing and start setting up the campaigns and creatives to match. You see the direction and sign off before a single dollar goes live. No surprises.",
  },
  {
    n: "03",
    title: "Launch",
    desc: "We launch and optimise daily, your ads go live in a proper testing setup. We're in the account every day, cutting what's losing, feeding budget to what's winning. You get a simple weekly update.",
  },
  {
    n: "04",
    title: "Scale",
    desc: "We scale what works, once we've found your winners, we push them harder, growing revenue while protecting your ROAS. And we keep fresh creative coming in, so performance doesn't stall the moment things are going well.",
  },
];

export default function Process() {
  return (
    <div
      id="process"
      style={{
        background: "var(--neutral-50)",
        borderTop: "1px solid var(--border)",
      }}
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
            marginBottom: 64,
          }}
        >
          <div>
            <div
              style={{
                font: "var(--type-overline)",
                letterSpacing: "var(--tracking-overline)",
                textTransform: "uppercase",
                color: "var(--cyan-700)",
                marginBottom: 16,
              }}
            >
              How we work
            </div>
            <h2
              className="section-mega"
              style={{ margin: 0, color: "var(--neutral-900)" }}
            >
              PROCESS
            </h2>
          </div>
          <p
            style={{
              font: "var(--type-body-lg)",
              color: "var(--neutral-500)",
              maxWidth: 400,
              margin: 0,
            }}
          ></p>
        </div>

        <div
          className="proc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 28,
          }}
        >
          {steps.map((s, i) => (
            <div key={s.n} style={{ position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 44,
                    fontWeight: 700,
                    color: "var(--fuchsia-500)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{ flex: 1, height: 1, background: "var(--border)" }}
                />
                {i < steps.length - 1 && (
                  <ArrowRight size={18} color="var(--neutral-400)" strokeWidth={2} />
                )}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 28,
                  letterSpacing: "-0.01em",
                  color: "var(--neutral-900)",
                  marginBottom: 12,
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "var(--neutral-500)",
                  lineHeight: 1.6,
                  paddingRight: 12,
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
