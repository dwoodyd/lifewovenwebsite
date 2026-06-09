/*
 * LIFEWOVEN Pricing Section — "Choose your path."
 *
 * Design: Deep indigo / Cormorant Garamond display, DM Sans body
 * Amber (#D4AF64) accents, warm ivory text on dark background
 *
 * Three cards: Explorer (free) | Seeker (founding $10/mo) | Oracle (founding $25/mo, MOST POPULAR)
 * Oracle card includes condensed 9-item library list
 * "Locked for life" footnote below cards
 * Application form preserved — routes to founding seat apply flow
 *
 * SCARCITY COUNTER — update this one line to change the number:
 */
// ↓↓↓ UPDATE THIS NUMBER MANUALLY AS SLOTS ARE CLAIMED ↓↓↓
const SLOTS_CLAIMED = 23;
const TOTAL_SLOTS = 100;
// ↑↑↑ UPDATE THIS NUMBER MANUALLY AS SLOTS ARE CLAIMED ↑↑↑

import { useRef, useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { APPLY_ENDPOINT, APP_URL } from "../../config";

const libraryItems = [
  { icon: "📐", title: "Alignment Fundamentals", format: "6-week course", price: "$97" },
  { icon: "🌀", title: "The Alignment Current", format: "4-week course", price: "$147" },
  { icon: "⚛️", title: "Identity in Motion", format: "Course", price: "$127" },
  { icon: "🔍", title: "The Meaning Foundation", format: "4-week course", price: "$97" },
  { icon: "✍️", title: "Belief Rewrite Workbook", format: "PDF · 30 days", price: "$19" },
  { icon: "🧱", title: "The Identity Stack Workbook", format: "PDF", price: "$22" },
  { icon: "🎧", title: "Morning Alignment Series", format: "7 audio sessions", price: "$37" },
  { icon: "🔄", title: "Reset Audio", format: "45-min audio", price: "$27" },
  { icon: "🃏", title: "Wisdom Card Deck", format: "PDF · 52 cards", price: "$34" },
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
  "30% off all standalone library products",
];

const oracleExtras = [
  "Unlimited Oracle AI sessions (Guide / Unstuck / Pattern Mirror)",
  "AI-powered journal reflections",
  "Cross-module pattern insights",
  "Personalized pathway recommendations",
  "Monthly Oracle deep-dive report",
  "Early access to new features",
  "1-on-1 onboarding call",
];

const explorerFeatures = [
  "Alignment Audit diagnostic",
  "Daily emotional check-in",
  "Journal (up to 30 entries in The Weave)",
  "Align & Uplift pathways",
  "5S Framework overview",
];

export default function PricingSection() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [annualToggle, setAnnualToggle] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", application_text: "", tier: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  // Spam protection: honeypot input + minimum time-on-form
  const honeypotRef = useRef<HTMLInputElement>(null);
  const loadedAt = useRef(Date.now());

  // ── Endpoint is imported from src/config.ts ──

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || formState.application_text.length < 200) return;
    // Bots fill hidden fields and submit almost instantly. Quietly accept
    // (show success) without hitting the API so we don't tip them off.
    if (honeypotRef.current?.value || Date.now() - loadedAt.current < 2500) {
      setSubmitted(true);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch(APPLY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          application_text: formState.application_text,
          tier: formState.tier || "Not specified",
          source: "lifewoven-marketing-site",
          submitted_at: new Date().toISOString(),
        }),
      });
      // Accept 2xx responses as success; treat everything else as an error
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Server responded ${res.status}: ${text}`);
      }
      setSubmitted(true);
    } catch (err) {
      console.error("[Founding Member Application] submission error:", err);
      setSubmitError(
        "Something went wrong sending your application. Please try again or email us directly at dewayne@lifewoven.click."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section reveal"
      aria-label="Pricing — Choose your path"
    >
      <div className="container">
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="eyebrow mb-4">Investment</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1.0,
              fontWeight: 600,
              color: "var(--lw-text)",
              marginBottom: "1.25rem",
            }}
          >
            Choose your path.
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(15px, 1.8vw, 17px)",
              color: "var(--lw-text-muted)",
              maxWidth: "54ch",
              margin: "0 auto 2rem",
              lineHeight: 1.65,
            }}
          >
            Founding rates locked for life. Lifewoven is in closed beta — 100 seats per app.
            Founding members lock in the rates below, even when retail rises.
          </p>

          {/* Monthly / Annual toggle */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(245,240,232,0.05)",
              border: "1px solid rgba(212,175,100,0.2)",
              borderRadius: "9999px",
              padding: "0.35rem 0.5rem",
            }}
          >
            <button
              onClick={() => setAnnualToggle(false)}
              style={{
                padding: "0.4rem 1.1rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                background: !annualToggle ? "#D4AF64" : "transparent",
                color: !annualToggle ? "#1A140E" : "rgba(245,240,232,0.55)",
                transition: "all 0.2s ease",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnualToggle(true)}
              style={{
                padding: "0.4rem 1.1rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                background: annualToggle ? "#D4AF64" : "transparent",
                color: annualToggle ? "#1A140E" : "rgba(245,240,232,0.55)",
                transition: "all 0.2s ease",
              }}
            >
              Annual <span style={{ fontSize: "11px", opacity: 0.8 }}>save ~47%</span>
            </button>
          </div>
        </div>

        {/* ── Three pricing cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
            marginBottom: "3rem",
          }}
        >
          {/* ── Card 1: Explorer ── */}
          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(212,175,100,0.15)",
              borderRadius: "20px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(212,175,100,0.65)",
                  marginBottom: "0.5rem",
                }}
              >
                Explorer
              </p>
              <p
                className="font-display"
                style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 600, color: "var(--lw-text)", lineHeight: 1.05 }}
              >
                Free
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: "rgba(245,240,232,0.45)",
                  marginTop: "0.25rem",
                }}
              >
                Forever free.
              </p>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.65,
              }}
            >
              Lumin walks with you through the core tools. Begin the weave — no commitment required.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {explorerFeatures.map((f) => (
                <li key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF64", fontSize: "13px", marginTop: "2px", flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.65)", lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                border: "1px solid rgba(212,175,100,0.35)",
                color: "rgba(212,175,100,0.85)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.04em",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
                marginTop: "auto",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#D4AF64";
                (e.currentTarget as HTMLElement).style.color = "#D4AF64";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.35)";
                (e.currentTarget as HTMLElement).style.color = "rgba(212,175,100,0.85)";
              }}
            >
              Start Free
            </a>
          </div>

          {/* ── Card 2: Seeker ── */}
          <div
            style={{
              background: "rgba(245,240,232,0.04)",
              border: "1px solid rgba(212,175,100,0.25)",
              borderRadius: "20px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(212,175,100,0.65)",
                  marginBottom: "0.5rem",
                }}
              >
                Seeker · Founding Rate
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
                <p
                  className="font-display"
                  style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 600, color: "var(--lw-text)", lineHeight: 1.05 }}
                >
                  {annualToggle ? "$99" : "$10"}
                </p>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.5)" }}>
                  {annualToggle ? "/yr founding" : "/mo founding"}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(245,240,232,0.3)",
                    textDecoration: "line-through",
                  }}
                >
                  {annualToggle ? "$189/yr retail" : "$19/mo retail"}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: "rgba(212,175,100,0.6)",
                  marginTop: "0.35rem",
                }}
              >
                Locked at the founding rate for life.
              </p>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.65,
              }}
            >
              Lumin opens the full system to you. Every tool, every pathway, every module — fully unlocked.
            </p>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(212,175,100,0.5)", marginBottom: "0.75rem" }}>Everything in Explorer, plus:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {seekerFeatures.map((f) => (
                  <li key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#D4AF64", fontSize: "13px", marginTop: "2px", flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.65)", lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#pricing-form"
              onClick={(e) => { e.preventDefault(); document.getElementById("pricing-form")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                border: "1px solid rgba(212,175,100,0.5)",
                color: "#D4AF64",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.04em",
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s",
                marginTop: "auto",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(212,175,100,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Apply for a Founding Seat
            </a>
          </div>

          {/* ── Card 3: Oracle (MOST POPULAR) ── */}
          <div
            style={{
              background: "rgba(212,175,100,0.06)",
              border: "2px solid rgba(212,175,100,0.55)",
              borderRadius: "20px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              position: "relative",
            }}
          >
            {/* Most Popular badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#D4AF64",
                color: "#1A140E",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "0.3rem 1rem",
                borderRadius: "9999px",
                whiteSpace: "nowrap",
              }}
            >
              Most Popular
            </div>

            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#D4AF64",
                  marginBottom: "0.5rem",
                }}
              >
                Oracle · Founding Rate
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
                <p
                  className="font-display"
                  style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 600, color: "var(--lw-text)", lineHeight: 1.05 }}
                >
                  {annualToggle ? "$249" : "$25"}
                </p>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.5)" }}>
                  {annualToggle ? "/yr founding" : "/mo founding"}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(245,240,232,0.3)",
                    textDecoration: "line-through",
                  }}
                >
                  {annualToggle ? "$479/yr retail" : "$49/mo retail"}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: "rgba(212,175,100,0.75)",
                  marginTop: "0.35rem",
                }}
              >
                Locked at the founding rate for life.
              </p>
            </div>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.65,
              }}
            >
              Lumin and the Oracle work continuously on your behalf — reading your patterns, naming what you cannot yet see.{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>Plus the complete Lifewoven library.</strong>
            </p>

            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(212,175,100,0.6)", marginBottom: "0.75rem" }}>Everything in Seeker, plus:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                {oracleExtras.map((f) => (
                  <li key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#D4AF64", fontSize: "13px", marginTop: "2px", flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.65)", lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Library included list */}
              <div
                style={{
                  background: "rgba(10,10,30,0.4)",
                  border: "1px solid rgba(212,175,100,0.2)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#D4AF64",
                    marginBottom: "0.9rem",
                  }}
                >
                  The complete Lifewoven library — included:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {libraryItems.map((item) => (
                    <li key={item.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.7)", lineHeight: 1.4 }}>
                        {item.icon} <em style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic" }}>{item.title}</em>
                        <span style={{ color: "rgba(245,240,232,0.35)", fontSize: "12px" }}> · {item.format}</span>
                      </span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.3)", textDecoration: "line-through", flexShrink: 0 }}>{item.price}</span>
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "15px",
                    color: "#D4AF64",
                    marginTop: "1rem",
                    textAlign: "right",
                  }}
                >
                  Combined library retail: $607. Yours with Oracle.
                </p>
              </div>
            </div>

            <a
              href="#pricing-form"
              onClick={(e) => { e.preventDefault(); document.getElementById("pricing-form")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.85rem 1.5rem",
                borderRadius: "9999px",
                background: "#D4AF64",
                color: "#1A140E",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                marginTop: "auto",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#c49d4e";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#D4AF64";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Apply for a Founding Seat
            </a>
          </div>
        </div>

        {/* ── "Locked for life" footnote ── */}
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto 4rem",
            padding: "1.5rem 2rem",
            background: "rgba(245,240,232,0.025)",
            border: "1px solid rgba(245,240,232,0.07)",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p
            className="font-display"
            style={{ fontSize: "18px", fontWeight: 600, color: "var(--lw-text)", marginBottom: "0.6rem" }}
          >
            What "locked for life" means.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "rgba(245,240,232,0.5)",
              lineHeight: 1.7,
            }}
          >
            When the beta closes, founding members keep their rate forever — even when public pricing rises.
            As long as your subscription remains active without interruption, the rate you locked in today
            is the rate you'll pay in five years.
          </p>
        </div>

        {/* ── Application form ── */}
        <div id="pricing-form" style={{ maxWidth: "600px", margin: "0 auto" }}>
          {/* Scarcity counter */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(212,175,100,0.85)",
              textAlign: "center",
              marginBottom: "2rem",
              letterSpacing: "0.02em",
            }}
          >
            <em
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontSize: "17px",
              }}
            >
              {SLOTS_CLAIMED} of {TOTAL_SLOTS} founding member slots claimed.
            </em>
          </p>

          {submitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "3rem 2rem",
                background: "rgba(212,175,100,0.06)",
                border: "1px solid rgba(212,175,100,0.25)",
                borderRadius: "16px",
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 600,
                  color: "var(--lw-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Application received.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "var(--lw-text-muted)",
                  lineHeight: 1.65,
                  marginBottom: "0.5rem",
                }}
              >
                Lumin will be in touch within 48 hours.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.4)",
                  lineHeight: 1.6,
                }}
              >
                Check your inbox — and your spam folder, just in case. If you don't hear back, reach out directly at{" "}
                <a href="mailto:dewayne@lifewoven.click" style={{ color: "rgba(212,175,100,0.7)", textDecoration: "none" }}>dewayne@lifewoven.click</a>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(212,175,100,0.2)",
                borderRadius: "20px",
                padding: "clamp(1.5rem, 4vw, 2.5rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Honeypot — must stay empty; hidden from people and screen readers */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
                <label htmlFor="fm-company">Company (leave this field empty)</label>
                <input
                  id="fm-company"
                  ref={honeypotRef}
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                <h3
                  className="font-display"
                  style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 600, color: "var(--lw-text)", marginBottom: "0.5rem" }}
                >
                  Apply for a Founding Seat.
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "var(--lw-text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  100 seats. Locked rate for life. Oracle tier includes the complete Library.
                </p>
              </div>

              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  htmlFor="fm-name"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,100,0.7)",
                  }}
                >
                  Your name
                </label>
                <input
                  id="fm-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="First and last name"
                  style={{
                    background: "rgba(10,10,30,0.5)",
                    border: "1px solid rgba(212,175,100,0.2)",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    color: "#F5F0E8",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.5)"; }}
                  onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.2)"; }}
                />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  htmlFor="fm-email"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,100,0.7)",
                  }}
                >
                  Email address
                </label>
                <input
                  id="fm-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="you@example.com"
                  style={{
                    background: "rgba(10,10,30,0.5)",
                    border: "1px solid rgba(212,175,100,0.2)",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    color: "#F5F0E8",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.5)"; }}
                  onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.2)"; }}
                />
              </div>

              {/* Tier selector — optional */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  htmlFor="fm-tier"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,100,0.7)",
                  }}
                >
                  Which tier are you interested in? <span style={{ opacity: 0.5, fontWeight: 400 }}>(optional)</span>
                </label>
                <select
                  id="fm-tier"
                  value={formState.tier}
                  onChange={(e) => setFormState((s) => ({ ...s, tier: e.target.value }))}
                  style={{
                    background: "rgba(10,10,30,0.5)",
                    border: "1px solid rgba(212,175,100,0.2)",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    color: formState.tier ? "#F5F0E8" : "rgba(245,240,232,0.4)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    outline: "none",
                    cursor: "pointer",
                    appearance: "none",
                    WebkitAppearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23D4AF64' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    paddingRight: "2.5rem",
                  }}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.5)"; }}
                  onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.2)"; }}
                >
                  <option value="" disabled>Select a tier…</option>
                  <option value="Explorer">Explorer — Free (start here)</option>
                  <option value="Seeker">Seeker — $10/mo founding</option>
                  <option value="Oracle">Oracle — $25/mo founding (includes Library)</option>
                  <option value="Either">Either — I'm open to both</option>
                  <option value="Not sure">Not sure yet</option>
                </select>
              </div>

              {/* Work question */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  htmlFor="fm-work"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,100,0.7)",
                  }}
                >
                  Where are you in your work right now?
                </label>
                <textarea
                  id="fm-work"
                  required
                  minLength={200}
                  value={formState.application_text}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.length <= 600) {
                      setFormState((s) => ({ ...s, application_text: val }));
                    }
                  }}
                  placeholder="Tell us where you are. There's no wrong answer."
                  rows={5}
                  style={{
                    background: "rgba(10,10,30,0.5)",
                    border: "1px solid rgba(212,175,100,0.2)",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    color: "#F5F0E8",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    outline: "none",
                    resize: "vertical",
                    lineHeight: 1.6,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.5)"; }}
                  onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.2)"; }}
                />
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    color: formState.application_text.length >= 200 ? "rgba(212,175,100,0.5)" : "rgba(245,240,232,0.3)",
                    textAlign: "right",
                    transition: "color 0.3s ease",
                  }}
                >
                  {formState.application_text.length < 200
                    ? `${formState.application_text.length} / 200 minimum`
                    : `✓ ${formState.application_text.length} characters`}
                </p>
              </div>

              {/* Error message */}
              {submitError && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,100,100,0.85)",
                    lineHeight: 1.55,
                    padding: "0.75rem 1rem",
                    background: "rgba(255,100,100,0.06)",
                    border: "1px solid rgba(255,100,100,0.2)",
                    borderRadius: "8px",
                  }}
                >
                  {submitError}
                </p>
              )}

              {/* Submit */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
                <button
                  type="submit"
                  disabled={submitting || formState.application_text.length < 200}
                  style={{
                    width: "100%",
                    background: submitting || formState.application_text.length < 200 ? "rgba(212,175,100,0.4)" : "#D4AF64",
                    color: "#1A140E",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    padding: "0.9rem 2rem",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: submitting || formState.application_text.length < 200 ? "not-allowed" : "pointer",
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting && formState.application_text.length >= 200) {
                      (e.currentTarget as HTMLElement).style.background = "#c49d4e";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      submitting || formState.application_text.length < 200 ? "rgba(212,175,100,0.4)" : "#D4AF64";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {submitting ? "Sending…" : "Apply for Founding Member access."}
                </button>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(245,240,232,0.4)",
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  We review every application. You'll hear back within 48 hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
