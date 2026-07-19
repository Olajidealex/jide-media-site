"use client";

import { useState } from "react";

type Service = {
  n: string;
  id: string;
  title: string;
  outcome: string;
  desc: string;
};

const services: Service[] = [
  {
    n: "01",
    id: "svc-1",
    title: "Full media buying",
    outcome: "A structure built to scale",
    desc: "We build, launch, and run your campaigns end to end. Daily optimisation, tight budget control, and a constant hunt for what's actually profitable, so you're never babysitting your ad account.",
  },
  {
    n: "02",
    id: "svc-2",
    title: "Creative that fits the feed",
    outcome: "20+ fresh ads a month",
    desc: "Creative that fits the feed We create angles and find UGC creators that stop the scroll, the kind of content that gets watched, not skipped. No stiff brand films nobody asked for.",
  },
  {
    n: "03",
    id: "svc-3",
    title: "Scaling that protects your margins",
    outcome: "More spend, same ROAS",
    desc: "Once we've found winners, we scale them carefully, growing revenue while keeping your cost-per-sale where it needs to be. Growth you can actually afford.",
  },
  {
    n: "04",
    id: "svc-4",
    title: "Testing that finds winners",
    outcome: "Native commerce that converts",
    desc: "We run structured tests to find the hooks, angles, and offers that genuinely sell. No more guessing which ad works, the numbers tell us, then we act on them.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number>(0);

  return (
    <div
      id="services"
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
              What we actually do for you
            </div>
            <h2 className="section-mega" style={{ margin: 0, color: "#fff" }}>
              SERVICES
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
            Everything TikTok needs to work, handled by one team.
          </p>
        </div>

        <div className="svc-layout">
          <div>
            {services.map((s, i) => {
              const on = active === i;
              return (
                <div
                  key={s.id}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(active === i ? -1 : i)}
                  className="svc-item"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 24,
                    alignItems: "center",
                    padding: "30px 8px",
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                    borderBottom:
                      i === services.length - 1
                        ? "1px solid rgba(255,255,255,0.12)"
                        : "none",
                    cursor: "default",
                    transition: "padding .2s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 14,
                      color: on
                        ? "var(--fuchsia-400)"
                        : "rgba(255,255,255,0.4)",
                      transition: "color .2s ease",
                    }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <div
                      className="svc-title"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(26px, 3.4vw, 44px)",
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                        color: on ? "var(--fuchsia-500)" : "#fff",
                        transition: "color .2s ease",
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: on ? 300 : 0,
                        opacity: on ? 1 : 0,
                        transition:
                          "max-height .25s ease, opacity .25s ease, margin .25s ease",
                        marginTop: on ? 12 : 0,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 15,
                          color: "rgba(255,255,255,0.62)",
                          lineHeight: 1.55,
                          maxWidth: 520,
                        }}
                      >
                        {s.desc}
                      </div>
                    </div>
                  </div>
                  <span
                    className="svc-outcome"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: on
                        ? "var(--cyan-300)"
                        : "rgba(255,255,255,0.4)",
                      textAlign: "right",
                      transition: "color .2s ease",
                    }}
                  >
                    {s.outcome}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
