import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { getTierSignupUrl, SIGNIN_URL, SIGNUP_URL } from "../../config";

const SLOTS_CLAIMED = 27;
const TOTAL_SLOTS = 100;

const seekerFeatures = [
  "Unlimited journal entries (The Weave)",
  "All 7 branded pathways",
  "Full 5S module suite",
  "Habit tracker & scorecard",
  "Decision journal & analysis",
  "Energy audit & trends",
  "Belief rewrite system",
  "Priority support",
];

const oracleFeatures = [
  "Everything in Seeker",
  "Unlimited Oracle AI sessions",
  "Cross-module pattern insights",
  "Personalized pathway recommendations",
  "Monthly Oracle deep-dive report",
  "The complete nine-product Library — $607 retail value, included",
];

const explorerFeatures = [
  "Load-Bearing Survey diagnostic",
  "Daily emotional check-in",
  "Journal (up to 30 entries in The Weave)",
  "Align & Uplift pathways",
  "5S Framework overview",
];

type TierCardProps = {
  name: string;
  label: string;
  price: string;
  detail: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
  featured?: boolean;
};

function TierCard({ name, label, price, detail, description, features, href, cta, featured = false }: TierCardProps) {
  return (
    <article
      style={{
        background: featured ? "rgba(212,175,100,0.06)" : "rgba(245,240,232,0.03)",
        border: featured ? "2px solid rgba(212,175,100,0.55)" : "1px solid rgba(212,175,100,0.18)",
        borderRadius: "20px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        position: "relative",
      }}
    >
      {featured && (
        <span
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#D4AF64",
            color: "#1A140E",
            borderRadius: "9999px",
            padding: "0.3rem 1rem",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Most Popular
        </span>
      )}
      <div>
        <p className="eyebrow" style={{ marginBottom: "0.55rem", color: featured ? "#D4AF64" : "rgba(212,175,100,0.7)" }}>
          {label}
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.45rem", flexWrap: "wrap" }}>
          <h3 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 52px)", color: "var(--lw-text)", lineHeight: 1 }}>
            {price}
          </h3>
          <span style={{ color: "var(--lw-text-muted)", fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>{detail}</span>
        </div>
        <p style={{ color: "rgba(212,175,100,0.78)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "14px", marginTop: "0.55rem" }}>
          Founding rate while your subscription remains active.
        </p>
      </div>
      <p style={{ color: "var(--lw-text-muted)", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", lineHeight: 1.65 }}>{description}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
        {features.map((feature) => (
          <li key={feature} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
            <span style={{ color: "#D4AF64", marginTop: "2px" }}>✓</span>
            <span style={{ color: "rgba(245,240,232,0.7)", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", lineHeight: 1.5 }}>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textAlign: "center",
          padding: "0.82rem 1.5rem",
          borderRadius: "9999px",
          background: featured ? "#D4AF64" : "transparent",
          border: featured ? "1px solid #D4AF64" : "1px solid rgba(212,175,100,0.5)",
          color: featured ? "#1A140E" : "#D4AF64",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "0.04em",
          textDecoration: "none",
        }}
      >
        {cta}
      </a>
    </article>
  );
}

export default function PricingSection() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [annualToggle, setAnnualToggle] = useState(false);

  return (
    <section id="pricing" ref={sectionRef} className="section reveal" aria-label="Pricing — Choose your path">
      <div className="container">
        <header style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="eyebrow mb-4">Investment</p>
          <h2 className="font-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1, fontWeight: 600, color: "var(--lw-text)", marginBottom: "1.25rem" }}>
            Choose your path.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 1.8vw, 17px)", color: "var(--lw-text-muted)", maxWidth: "54ch", margin: "0 auto 2rem", lineHeight: 1.65 }}>
            Founding rates remain in place while an uninterrupted paid subscription stays active. Lifewoven is in closed beta — {TOTAL_SLOTS} seats per app.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(245,240,232,0.05)", border: "1px solid rgba(212,175,100,0.2)", borderRadius: "9999px", padding: "0.35rem 0.5rem" }}>
            <button type="button" onClick={() => setAnnualToggle(false)} style={{ padding: "0.4rem 1.1rem", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, background: !annualToggle ? "#D4AF64" : "transparent", color: !annualToggle ? "#1A140E" : "rgba(245,240,232,0.55)" }}>Monthly</button>
            <button type="button" onClick={() => setAnnualToggle(true)} style={{ padding: "0.4rem 1.1rem", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, background: annualToggle ? "#D4AF64" : "transparent", color: annualToggle ? "#1A140E" : "rgba(245,240,232,0.55)" }}>Annual</button>
          </div>
          <p style={{ marginTop: "0.75rem", color: "rgba(245,240,232,0.45)", fontFamily: "'DM Sans', sans-serif", fontSize: "12px" }}>
            {annualToggle ? "Annual saves 17–18% vs monthly." : "Pay annually to save 17–18% vs monthly."}
          </p>
        </header>

        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1.5rem", alignItems: "stretch" }}>
          <TierCard name="Explorer" label="Explorer · Free" price="$0" detail="forever" description="Begin with a clear reading of where you are, then build from there." features={explorerFeatures} href={SIGNIN_URL} cta="Start free — instant" />
          <TierCard name="Seeker" label="Seeker · Founding Rate" price={annualToggle ? "$89" : "$9"} detail={annualToggle ? "/yr founding" : "/mo founding"} description="The core practices, pathways, and journals for returning to the work." features={seekerFeatures} href={getTierSignupUrl("seeker")} cta="Claim your founding seat" />
          <TierCard name="Oracle" label="Oracle · Founding Rate" price={annualToggle ? "$249" : "$25"} detail={annualToggle ? "/yr founding" : "/mo founding"} description="The full Lifewoven system, with every tool, pathway, and Library practice unlocked." features={oracleFeatures} href={getTierSignupUrl("oracle")} cta="Claim your founding seat" featured />
        </div>

        <div id="pricing-form" style={{ maxWidth: "600px", margin: "4rem auto 0", textAlign: "center", padding: "2rem", borderRadius: "16px", background: "rgba(245,240,232,0.025)", border: "1px solid rgba(212,175,100,0.2)" }}>
          <p className="font-display" style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 600, color: "var(--lw-text)", marginBottom: "0.6rem" }}>
            Founding Member · {TOTAL_SLOTS} seats · {SLOTS_CLAIMED} claimed
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--lw-text-muted)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            Founding rate while your subscription remains active.
          </p>
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-block", fontSize: "15px" }}>
            Claim a Founding Seat.
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--lw-text-muted)", marginTop: "0.9rem" }}>
            Start free, then choose your tier.
          </p>
        </div>
      </div>
    </section>
  );
}
