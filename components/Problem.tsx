import { CopyX, Flame, TrendingUp, Users, type LucideIcon } from "lucide-react";

type Pain = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const pains: Pain[] = [
  {
    Icon: CopyX,
    title: "Your ads look like ads",
    desc: "People come to TikTok to be entertained, not sold to. The second your video feels like a commercial, they scroll. That means higher costs to reach anyone, and fewer of them buying.",
  },
  {
    Icon: Flame,
    title: "You run out of creative",
    desc: "One or two good videos can't carry a TikTok account. Ads burn out fast here, so without a steady stream of fresh angles, your results flatline within weeks, and you're back to square one.",
  },
  {
    Icon: TrendingUp,
    title: "You’re guessing, not scaling",
    desc: "Boosting posts and hoping isn't a strategy. With no real way to test, you can't tell what's actually driving sales, so you never feel safe spending more, and growth stalls.",
  },
  {
    Icon: Users,
    title: "A team that can’t keep up",
    desc: "One or two people can’t produce the ad volume TikTok demands and run the account.",
  },
];

export default function Problem() {
  return (
    <div style={{ background: "#fff", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        className="bg-outline-wrap"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 24,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div className="outline-black bg-outline-text">MADE FOR TIKTOK</div>
      </div>

      <div
        className="mob-pad"
        style={{
          position: "relative",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "110px 40px 150px",
          fontFamily: "var(--font-body)",
        }}
      >
        <div
          className="prob-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "end",
            marginBottom: 64,
          }}
        >
          <h2
            className="section-mega"
            style={{ margin: 0, color: "var(--neutral-900)" }}
          >
            THE
            <br />
            PROBLEM
          </h2>
          <div style={{ paddingBottom: 8 }}>
            <div
              style={{
                font: "var(--type-overline)",
                letterSpacing: "var(--tracking-overline)",
                textTransform: "uppercase",
                color: "var(--fuchsia-700)",
                marginBottom: 16,
              }}
            >
              Most brands burn cash on TikTok. Here&apos;s why
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(20px, 2vw, 26px)",
                lineHeight: 1.3,
                color: "var(--neutral-900)",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              TikTok isn&apos;t Facebook with a different logo. It has its own
              rules, and the brands that win treat it that way. The ones that
              lose keep running ads that were never built for the platform,
              and wonder why the money disappears.
            </p>
          </div>
        </div>

        <div
          className="prob-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {pains.map((p) => {
            const Icon = p.Icon;
            return (
              <div
                key={p.title}
                style={{
                  background: "var(--neutral-50)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "var(--fuchsia-50)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={22} color="var(--fuchsia-600)" strokeWidth={2} />
                </div>
                <div style={{ font: "var(--type-h4)", color: "var(--neutral-900)" }}>
                  {p.title}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "var(--neutral-500)",
                    lineHeight: 1.55,
                  }}
                >
                  {p.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
