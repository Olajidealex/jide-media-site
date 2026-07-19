"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type FAQItem = { q: string; a: string };

const items: FAQItem[] = [
  {
    q: "What’s the minimum ad spend to work together?",
    a: "We do our best work with brands spending around $1k/month or more on TikTok, enough budget to test properly and scale what wins. Not there yet? Book the audit anyway. We’ll tell you honestly whether now’s the right time for an agency or whether you’re better off waiting a bit, no hard sell either way.",
  },
  {
    q: "How long is the contract?",
    a: "We start with a 60-day runway, then move month-to-month. Sixty days is simply how long it takes to test enough creative, find your winners, campaign strategies, and start scaling them properly, anything faster is a gamble with your money. After that, we earn your business month by month. If we’re not moving the number, you’re free to walk.",
  },
  {
    q: "What’s included — do you handle the creative?",
    a: "No, but we work with partner creative agencies that can help with creative production and strategy using AI and real influencers. We also use affiliate center on TikTok to get influencers to make videos on your product or services.",
  },
  {
    q: "How fast will we see results?",
    a: "Live ads and early data within the first week. Real, reliable performance usually lands around the 30–60 day mark, that’s how long it takes to test enough creative to find what genuinely sells, then pour budget into it. Anyone promising overnight results on TikTok is guessing, and it’s your budget they’re guessing with.",
  },
  {
    q: "Do you only do paid ads, or TikTok Shop too?",
    a: "TikTok is all we do, but that means the whole platform. Paid ads (Spark Ads and in-feed), plus TikTok Shop setup and creator-driven content when native commerce fits your brand. We lead with whatever moves your sales fastest, not whatever’s easiest for us.",
  },
  {
    q: "What does the free audit actually cover?",
    a: "A real teardown, not a sales call in disguise. We go through your current TikTok ads (or your setup, if you’re just starting), your creative, and your numbers, then hand you the specific changes we’d make to grow, money leaks included. It’s yours to keep whether or not we work together. Thirty minutes, no pitch, no obligation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div id="faq" style={{ background: "var(--neutral-100)" }}>
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
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 56,
            alignItems: "start",
          }}
          className="faq-layout"
        >
          <div className="faq-sticky" style={{ position: "sticky", top: 100 }}>
            <div
              style={{
                font: "var(--type-overline)",
                letterSpacing: "var(--tracking-overline)",
                textTransform: "uppercase",
                color: "var(--fuchsia-700)",
                marginBottom: 16,
              }}
            >
              FAQ
            </div>
            <h2
              className="section-mega"
              style={{ margin: 0, color: "var(--neutral-900)" }}
            >
              ANSWERS
              <br />
              FIRST
            </h2>
            <p
              style={{
                font: "var(--type-body-lg)",
                color: "var(--neutral-500)",
                maxWidth: 340,
                marginTop: 24,
              }}
            >
              Straight answers to the questions we get asked most
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((it, i) => {
              const isOpen = open === i;
              const Icon = isOpen ? Minus : Plus;
              return (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "22px 26px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "var(--neutral-900)",
                    }}
                  >
                    <span>{it.q}</span>
                    <Icon
                      size={20}
                      color="var(--fuchsia-600)"
                      style={{ flexShrink: 0 }}
                    />
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 26px 24px",
                        fontSize: 15,
                        color: "var(--neutral-500)",
                        lineHeight: 1.6,
                      }}
                    >
                      {it.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
