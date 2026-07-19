"use client";

import { useCallback } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  const openAudit = useCallback(() => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/olajidealexazeez/30min?hide_gdpr_banner=1",
      });
    }
  }, []);

  return (
    <>
      <Nav onBookAudit={openAudit} />
      <Hero onBookAudit={openAudit} />
      <Marquee
        theme="accent"
        items={[
          "Profitable scale",
          "More spend, same ROAS",
          "Creative volume",
          "Media buying",
        ]}
      />
      <Problem />
      <Services />
      <Process />
      <Results />
      <Marquee
        theme="dark"
        items={[
          "Break the ceiling",
          "Ship 20+ ads a month",
          "Own the number",
          "TikTok Shop",
        ]}
      />
      <Testimonials />
      <FAQ />
      <CTAFooter onBookAudit={openAudit} />
    </>
  );
}
