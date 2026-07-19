"use client";

import { ArrowDown } from "lucide-react";
import ImageSlot from "./ImageSlot";

type HeroProps = {
  onBookAudit: () => void;
};

type TrustStatProps = {
  value: string;
  label: string;
  mono?: boolean;
};

function TrustStat({ value, label, mono = true }: TrustStatProps) {
  return (
    <div>
      <div
        style={{
          fontFamily: mono ? "var(--font-mono)" : "var(--font-display)",
          fontSize: 26,
          fontWeight: 700,
          color: "#fff",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginTop: 2,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Hero({ onBookAudit }: HeroProps) {
  const avatars = [
    { id: "hero-av-1", top: "14%", left: "14%", size: 92, ph: "Founder", src: "/assets/slots/hero-av-1.webp" },
    { id: "hero-av-2", top: "8%", left: "76%", size: 78, ph: "Buyer", src: "/assets/slots/hero-av-2.webp" },
    { id: "hero-av-3", top: "58%", left: "20%", size: 84, ph: "Creative", src: "/assets/slots/hero-av-3.webp" },
    { id: "hero-av-4", top: "52%", left: "80%", size: 96, ph: "Client", src: "/assets/slots/hero-av-4.webp" },
  ];

  return (
    <div
      id="top"
      data-theme="dark"
      style={{ background: "#000", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-electric-soft-1)",
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-electric-soft-2)",
          opacity: 0.7,
        }}
      />

      <div
        className="mob-pad"
        style={{
          position: "relative",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "150px 40px 40px",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          className="hero-eyebrow"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "7px 16px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.03)",
            font: "var(--type-overline)",
            letterSpacing: "var(--tracking-overline)",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.72)",
            marginBottom: 30,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--fuchsia-500)",
              boxShadow: "var(--glow-fuchsia)",
            }}
          ></span>
          <span style={{ fontSize: 15 }}>TikTok growth for Businesses</span>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {avatars.map((a) => (
            <ImageSlot
              key={a.id}
              id={a.id}
              shape="circle"
              placeholder={a.ph}
              src={a.src}
              className="hero-avatar"
              style={{
                position: "absolute",
                top: a.top,
                left: a.left,
                width: a.size,
                height: a.size,
                transform: "translate(-50%, -50%)",
                zIndex: 3,
                boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                border: "3px solid rgba(255,255,255,0.9)",
                borderRadius: "50%",
                background: "var(--neutral-300)",
              }}
            />
          ))}
          <h1
            className="hero-display"
            style={{ margin: 0, position: "relative", zIndex: 2 }}
          >
            <span className="fill-fuchsia">PROFITABLE</span>
            <br />
            <span className="outline-white">TIKTOK SCALING</span>
          </h1>
        </div>

        <p
          className="hero-sub"
          style={{
            font: "var(--type-body-lg)",
            color: "rgba(255,255,255,0.7)",
            maxWidth: 600,
            margin: "clamp(56px, 9vw, 116px) 0 0",
            position: "relative",
            zIndex: 5,
          }}
        >
          We build the creative, run the ads, and scale the winners, so TikTok
          brings you sales, not just views. Over $2M in ad spend managed for
          10+ businesses.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 38,
          }}
        >
          <button
            onClick={onBookAudit}
            className="btn-primary-lg"
            style={{
              padding: "18px 40px",
              borderRadius: 999,
              border: "none",
              background: "var(--fuchsia-500)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: 17,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background .15s ease, box-shadow .2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--fuchsia-400)";
              e.currentTarget.style.boxShadow = "var(--glow-fuchsia)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--fuchsia-500)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book a free audit
          </button>
          <div
            style={{
              font: "var(--type-sm)",
              color: "rgba(255,255,255,0.55)",
              textAlign: "left",
              maxWidth: 200,
            }}
          >
            We&apos;ll show you exactly where your TikTok ads are leaking
            money. No pitch.
          </div>
        </div>

        <div
          className="hero-badge"
          style={{
            position: "absolute",
            right: 44,
            bottom: 150,
            width: 128,
            height: 128,
            zIndex: 4,
          }}
        >
          <svg
            className="spin"
            viewBox="0 0 200 200"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <path
                id="badgeCircle"
                d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
              />
            </defs>
            <text
              fill="rgba(255,255,255,0.85)"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              <textPath href="#badgeCircle" startOffset="0">
                MEDIA BUYING · CREATIVE VOLUME · PROFITABLE SCALE ·{" "}
              </textPath>
            </text>
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "var(--fuchsia-500)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowDown size={22} color="#fff" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar - Desktop */}
      <div
        className="trust-desktop"
        style={{
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="mob-pad"
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "30px 40px",
            fontFamily: "var(--font-body)",
          }}
        >
          <div
            className="trust-row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
            }}
          >
            <div
              className="trust-stats"
              style={{ display: "flex", gap: 48, flexWrap: "wrap" }}
            >
              <TrustStat value="$10M+" label="Ad spend managed" />
              <TrustStat value="10+" label="Businesses Scaled" />
              <TrustStat value="TikTok" label="It's all we do" mono={false} />
            </div>
            <div
              className="trust-brands"
              style={{
                display: "flex",
                gap: 30,
                flexWrap: "wrap",
                alignItems: "center",
                opacity: 0.55,
              }}
            >
              {["GLOWERY", "NORTHBOUND", "HÜXLEY", "MAREA", "RIPTIDE"].map(
                (l) => (
                  <span
                    key={l}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 15,
                      letterSpacing: "0.04em",
                      color: "#fff",
                    }}
                  >
                    {l}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar - Mobile marquee */}
      <div
        className="trust-mobile"
        style={{
          display: "none",
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.5)",
          overflow: "hidden",
          padding: "18px 0",
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
          {[0, 1, 2].map((r) => (
            <span key={r} style={{ display: "inline-flex" }}>
              {[
                { v: "$10M+", l: "Ad spend managed" },
                { v: "10+", l: "Businesses Scaled" },
                { v: "TikTok", l: "It's all we do" },
              ].map((s) => (
                <span
                  key={r + "-" + s.v}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    paddingRight: 40,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {s.v}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.l}
                  </span>
                  <span
                    style={{ color: "var(--fuchsia-500)", margin: "0 12px" }}
                  >
                    ·
                  </span>
                </span>
              ))}
              {["GLOWERY", "NORTHBOUND", "HÜXLEY", "MAREA", "RIPTIDE"].map(
                (l) => (
                  <span
                    key={r + "-" + l}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      paddingRight: 32,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: 14,
                        letterSpacing: "0.04em",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {l}
                    </span>
                    <span
                      style={{
                        color: "var(--fuchsia-500)",
                        marginLeft: 32,
                      }}
                    >
                      ·
                    </span>
                  </span>
                )
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
