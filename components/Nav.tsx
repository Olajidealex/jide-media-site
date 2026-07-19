"use client";

import { useEffect, useState } from "react";

type NavProps = {
  onBookAudit: () => void;
};

export default function Nav({ onBookAudit }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div
      data-theme="dark"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(0,0,0,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        transition: "background .2s ease, border-color .2s ease",
      }}
    >
      <div
        className="mob-pad"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/jide-logo-white-transparent.png"
            alt="JIDE MEDIA"
            style={{ height: 69, width: 74, display: "block" }}
          />
        </a>
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: 40,
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: "rgba(255,255,255,0.72)",
                textDecoration: "none",
                transition: "color .15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.72)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={onBookAudit}
          className="nav-cta"
          style={{
            padding: "12px 24px",
            borderRadius: 999,
            border: "none",
            background: "var(--fuchsia-500)",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
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
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "#fff",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div
          className="mob-pad"
          style={{
            padding: "0 40px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
