/*
 * LIFEWOVEN Membership — self-serve plans with founding rates.
 */
import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { APP_URL, SIGNUP_URL } from "../../config";

const explorerFeatures = [
  "Load-Bearing Survey diagnostic",
  "Daily emotional check-in",
  "Journal (up to 30 entries in The Weave)",
  "Align & Uplift pathways",
  "5S Framework overview",
];

const seekerFeatures = [
  "Unlimited journal entries (The Weave)",
  "All 7 branded pathways",
  "Full 5S module suite",
  "Habit tracker & scorecard",
  "Decision journal & analysis",
  "Energy audit & trends",
  "Belief rewrite system",
  "Priority support",
  "30% off standalone Library products",
];

const oracleFeatures = [
  "Unlimited Oracle AI sessions",
  "AI-powered journal reflections",
  "Cross-module pattern insights",
  "Personalized pathway recommendations",
  "Monthly Oracle deep-dive report",
  "Early access to new features",
  "1-on-1 onboarding call",
  "Complete Lifewoven Library included",
];

type Plan = {
  id: "explorer" | "seeker" | "oracle";
  name: string;
  label: string;
  description: string;
  monthly: string;
  annual: string;
  retail: string;
  features: string[];
  featured?: boolean;
};

function SignupButton({ planId, featured = false }: { planId: Plan["id"]; featured?: boolean }) {
  const signupUrl = planId === "explorer" ? SIGNUP_URL : `${SIGNUP_URL}&tier=${planId}`;
  const disclosureId = `signup-disclosure-${planId}`;

  return (
    <div style={{ marginTop: "auto" }}>
      <a
        href={signupUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby={disclosureId}
        style={{
          display: "block",
          textAlign: "center",
          padding: "0.85rem 1.5rem",
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
        Start free →
      </a>
      <p id={disclosureId} style={{ margin: "0.65rem 0 0", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", lineHeight: 1.5, textAlign: "center", color: "rgba(245,240,232,0.45)" }}>
        By continuing, you agree to Lifewoven&apos;s <a href={`${APP_URL}/legal/terms`} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Terms</a> and acknowledge its <a href={`${APP_URL}/legal/privacy`} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</a>. Optional AI guidance is provided through Manus services.
      </p>
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      {features.map((feature) => (
        <li key={feature} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
          <span style={{ color: "#D4AF64", fontSize: "13px", marginTop: "2px", flexShrink: 0 }}>✓</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.65)", lineHeight: 1.5 }}>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PricingSection() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [annualToggle, setAnnualToggle] = useState(false);

  const plans: Plan[] = [
    {
      id: "explorer",
      name: "Explorer",
      label: "Explorer",
      description: "Lumen walks with you through the core tools. Begin the weave — no commitment required.",
      monthly: "Free",
      annual: "Free",
      retail: "Forever free.",
      features: explorerFeatures,
    },
    {
      id: "seeker",
      name: "Seeker",
      label: "Seeker · Founding Rate",
      description: "Lumen opens the full system to you. Every tool, every pathway, every module — fully unlocked.",
      monthly: "$9",
      annual: "$89",
      retail: "Founding rate while your subscription remains active.",
      features: seekerFeatures,
    },
    {
      id: "oracle",
      name: "Oracle",
      label: "Oracle · Founding Rate",
      description: "Lumen and the Oracle work continuously on your behalf — reading the records you choose to bring into the conversation.",
      monthly: "$25",
      annual: "$249",
      retail: "Founding rate while your subscription remains active.",
      features: oracleFeatures,
      featured: true,
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="section reveal" aria-label="Membership — Choose your path">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="eyebrow mb-4">Membership</p>
          <h2 className="font-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1, fontWeight: 600, color: "var(--lw-text)", marginBottom: "1.25rem" }}>
            Choose your path.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 1.8vw, 17px)", color: "var(--lw-text-muted)", maxWidth: "54ch", margin: "0 auto 1.5rem", lineHeight: 1.65 }}>
            Start with the core practice for free. When you are ready, Founding rates remain in place while your subscription stays active.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "17px", color: "rgba(212,175,100,0.85)" }}>
            100 Founding seats.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(245,240,232,0.05)", border: "1px solid rgba(212,175,100,0.2)", borderRadius: "9999px", padding: "0.35rem 0.5rem", marginTop: "1.5rem" }}>
            <button onClick={() => setAnnualToggle(false)} style={{ padding: "0.4rem 1.1rem", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", background: !annualToggle ? "#D4AF64" : "transparent", color: !annualToggle ? "#1A140E" : "rgba(245,240,232,0.55)" }}>
              Monthly
            </button>
            <button onClick={() => setAnnualToggle(true)} style={{ padding: "0.4rem 1.1rem", borderRadius: "9999px", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", background: annualToggle ? "#D4AF64" : "transparent", color: annualToggle ? "#1A140E" : "rgba(245,240,232,0.55)" }}>
              Annual <span style={{ fontSize: "11px", opacity: 0.8 }}>save 17–18% vs monthly</span>
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {plans.map((plan) => (
            <article key={plan.name} style={{ background: plan.featured ? "rgba(212,175,100,0.06)" : "rgba(245,240,232,0.03)", border: plan.featured ? "2px solid rgba(212,175,100,0.55)" : "1px solid rgba(212,175,100,0.2)", borderRadius: "20px", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem", position: "relative" }}>
              {plan.featured && <span style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "#D4AF64", color: "#1A140E", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.3rem 1rem", borderRadius: "9999px", whiteSpace: "nowrap" }}>Most Popular</span>}
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: plan.featured ? "#D4AF64" : "rgba(212,175,100,0.65)", marginBottom: "0.5rem" }}>{plan.label}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
                  <p className="font-display" style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 600, color: "var(--lw-text)", lineHeight: 1.05 }}>{annualToggle ? plan.annual : plan.monthly}</p>
                  {plan.name !== "Explorer" && <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.5)" }}>{annualToggle ? "/yr founding" : "/mo founding"}</span>}
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "14px", color: "rgba(212,175,100,0.7)", marginTop: "0.35rem" }}>{plan.retail}</p>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--lw-text-muted)", lineHeight: 1.65 }}>{plan.description}</p>
              <FeatureList features={plan.features} />
              <SignupButton planId={plan.id} featured={plan.featured} />
            </article>
          ))}
        </div>

        <p style={{ maxWidth: "60ch", margin: "2.5rem auto 0", textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.45)", lineHeight: 1.65 }}>
          Your Founding rate remains in place while your paid subscription stays active without interruption. See our Terms for the current conditions.
        </p>
      </div>
    </section>
  );
}
