"use client";

import type { ReactNode } from "react";

type Social = { label: string; href: string; svg: ReactNode };

const socials: Social[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jidemedia/",
    svg: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/jide-media/",
    svg: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
];

const navLinks = ["Services", "Results", "Process", "FAQ"];

type CTAFooterProps = {
  onBookAudit: () => void;
};

export default function CTAFooter({ onBookAudit }: CTAFooterProps) {
  return (
    <div
      data-theme="dark"
      style={{ background: "#000", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-electric-soft-1)",
          opacity: 0.6,
        }}
      />

      <div
        className="mob-pad"
        style={{
          position: "relative",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "120px 40px 90px",
          fontFamily: "var(--font-body)",
        }}
      >
        <div
          className="cta-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(40px, 5.6vw, 82px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            Make TikTok your
            <br />
            best channel{" "}
            <span style={{ color: "var(--fuchsia-500)" }}>
              Book
              <br />
              your audit.
            </span>
          </h2>
          <div style={{ maxWidth: 420 }}>
            <p
              style={{
                font: "var(--type-body-lg)",
                color: "rgba(255,255,255,0.65)",
                margin: "0 0 32px",
              }}
            >
              Book a free audit and we&apos;ll show you exactly where your
              TikTok ads can do better, with real numbers, not fluff. If
              it&apos;s a fit, we&apos;ll talk about working together. If not,
              you keep the insights and we part as friends.
            </p>
            <button
              onClick={onBookAudit}
              style={{
                padding: "18px 42px",
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
              Book your audit
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          className="mob-pad"
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "48px 40px 24px",
            fontFamily: "var(--font-body)",
          }}
        >
          <div
            className="foot-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr",
              gap: 40,
            }}
          >
            <div style={{ maxWidth: 320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logos/jide-logo-white-on-black.png"
                alt="JIDE MEDIA"
                style={{ height: 56, marginBottom: 8, marginLeft: -4 }}
              />
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                A TikTok-only paid media agency.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      transition: "border-color .15s, color .15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--fuchsia-400)";
                      e.currentTarget.style.borderColor = "var(--fuchsia-500)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.18)";
                    }}
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 18,
                }}
              >
                Explore
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {navLinks.map((l) => (
                  <a
                    key={l}
                    href={"#" + l.toLowerCase()}
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                    }
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 18,
                }}
              >
                Get in touch
              </div>
              <a
                href="mailto:olajidealexazeez@gmail.com"
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                olajidealexazeez@gmail.com
              </a>
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.6,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div style={{ overflow: "hidden", padding: "0 20px" }}>
          <div
            className="footer-wordmark"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(80px, 20vw, 260px)",
              lineHeight: 0.82,
              letterSpacing: "-0.03em",
              color: "var(--fuchsia-500)",
              textAlign: "center",
              marginBottom: "-0.12em",
              whiteSpace: "nowrap",
            }}
          >
            JIDE MEDIA
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div
            className="mob-pad"
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              padding: "20px 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
              © 2026 JIDE MEDIA. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: 24, fontSize: 12 }}>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                }}
              >
                Privacy
              </a>
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                }}
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
