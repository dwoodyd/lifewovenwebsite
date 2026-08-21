/*
 * LIFEWOVEN Home Page — "Monastery Library at Dusk"
 * 
 * Design: Deep indigo (#1A140E) + amber (#B0832F) + cream (#F0E8D8)
 * Typography: Cormorant Garamond (display) + DM Sans (body)
 * Mood: Quiet, wise, attentive — a library at dusk
 * 
 * Section order:
 * 0. Nav (sticky)
 * 1. Hero — full-bleed man holding book
 * 1b. PWA device strip
 * 2. Five Threads — 5S Framework (full-bleed woman on bench)
 * 3. Built On — wisdom traditions
 * 4. Vault — "Where the work is kept."
 * 5. Woven Gallery — archetype portraits
 * 6. Audit — 12 questions, free
 * 6b. App Preview
 * 7. Lumin — Meet Lumin (full-bleed mascot)
 * 8. Social Proof — the book
 * 8b. Library — 9-product grid
 * 8c. 7 Pathways — compact strip
 * 9. Founding Members — application form
 * 10. Trust Row → Closing CTA → Footer
 */
import { useEffect } from "react";
import Nav from "../components/Nav";
import ParticleField from "../components/ParticleField";
import HeroSection from "../components/sections/HeroSection";
import FiveThreadsSection from "../components/sections/FiveThreadsSection";
import AuditSection from "../components/sections/AuditSection";
import LumenSection from "../components/sections/LuminSection";
import PricingSection from "../components/sections/PricingSection";
import { TrustRow, PWAInstallFAQ, Footer } from "../components/sections/TrustFooter";
import SocialProofSection from "../components/sections/SocialProofSection";
import ClosingCTA from "../components/sections/ClosingCTA";
import LibrarySection from "../components/sections/LibrarySection";

export default function Home() {
  // Initialize scroll reveal for all .reveal elements
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    if (reducedMotion) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        background: "var(--lw-bg)",
        color: "var(--lw-text)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Ambient gold particles — fixed background layer */}
      <ParticleField />

      {/* Navigation */}
      <Nav />

      {/* Main content */}
      <main id="main-content" tabIndex={-1} style={{ outline: "none" }}>
        {/* 1. Hero — full-bleed man holding book */}
        <HeroSection />

        {/* 2. Five Threads — 5S Framework */}
        <FiveThreadsSection />

        {/* 3. The Audit — the one primary public next step */}
        <AuditSection />

        {/* 4. Lumen — Meet Lumen (full-bleed mascot) */}
        <LumenSection />

        {/* 5. Social Proof — the book */}
        <SocialProofSection />

        {/* 6. The Library — 9-product grid */}
        <LibrarySection />

        {/* 7. Membership — instant Explorer or reviewed paid founding access */}
        <PricingSection />

        {/* 10. Trust Row */}
        <TrustRow />

        {/* 10b. PWA Install FAQ */}
        <PWAInstallFAQ />

        {/* 11. Closing CTA */}
        <ClosingCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
