/*
 * LIFEWOVEN Founding Member Section
 * 
 * Replaces the open-launch pricing tiles.
 * Three columns: Free during beta | Locked for life | A real seat at the table
 * Application form (not checkout): Name + Email + "Where are you in your work right now?"
 * Scarcity counter: "23 of 100 founding member slots claimed."
 * After Beta reference card at bottom.
 * PWA format line from Fix 1.3.
 * 
 * SCARCITY COUNTER — update this one line to change the number:
 */

// ↓↓↓ UPDATE THIS NUMBER MANUALLY AS SLOTS ARE CLAIMED ↓↓↓
const SLOTS_CLAIMED = 23;
const TOTAL_SLOTS = 100;
// ↑↑↑ UPDATE THIS NUMBER MANUALLY AS SLOTS ARE CLAIMED ↑↑↑

import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";

const afterBetaTiers = [
  {
    name: "Explorer",
    price: "Free",
    included: "Lumin + the daily practice + 7 days of history",
  },
  {
    name: "Seeker",
    price: "$19/mo or $189/yr",
    included: "Full archive, all 5S exercises, monthly Woven Self portrait",
  },
  {
    name: "Oracle",
    price: "$49/mo or $479/yr",
    included:
      "Everything in Seeker + Oracle access + premium identity portraits + early access to every release",
  },
];

export default function PricingSection() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    work: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || formState.work.length < 20) return;
    setSubmitting(true);
    // Static site — simulate submission (wire to webhook/email in production)
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section reveal"
      aria-label="Founding Members"
    >
      <div className="container">

        {/* ── Header ── */}
        <div className="text-center mb-6">
          <p className="eyebrow mb-4">Founding Members</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5.5vw, 72px)",
              lineHeight: 1.05,
              fontWeight: 600,
              color: "var(--lw-text)",
              marginBottom: "0.6rem",
            }}
          >
            Founding Members.
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "var(--lw-text-muted)",
              marginBottom: "1.25rem",
            }}
          >
            100 people. Locked rates for life. A real seat at the table.
          </p>

          {/* PWA format line — Fix 1.3 */}
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "14px",
              color: "rgba(245,240,232,0.5)",
              maxWidth: "56ch",
              margin: "0 auto",
              lineHeight: 1.55,
            }}
          >
            Lifewoven is a Progressive Web App. Install on iOS or Android, or open it in any
            browser. No app store gatekeeping. Your data stays yours.
          </p>
        </div>

        {/* ── Three columns ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            maxWidth: "960px",
            margin: "3rem auto 0",
          }}
        >
          {/* Column 1 — Free during beta */}
          <div
            style={{
              background: "rgba(245,240,232,0.04)",
              border: "1px solid rgba(212,175,100,0.18)",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(212,175,100,0.7)",
              }}
            >
              During Beta
            </p>
            <h3
              className="font-display"
              style={{ fontSize: "22px", fontWeight: 600, color: "var(--lw-text)" }}
            >
              Free during beta.
            </h3>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "15px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.65,
              }}
            >
              Every founding member starts on Seeker for the full 90-day beta — no credit
              card, no preview limits. You get the full practice from day one.
            </p>
          </div>

          {/* Column 2 — Locked for life */}
          <div
            style={{
              background: "rgba(212,175,100,0.06)",
              border: "1px solid rgba(212,175,100,0.35)",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              position: "relative",
            }}
          >
            {/* Featured badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#D4AF64",
                color: "#0F1023",
                fontFamily: "'Lato', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 14px",
                borderRadius: "9999px",
                whiteSpace: "nowrap",
              }}
            >
              Founding rate
            </div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(212,175,100,0.7)",
              }}
            >
              Locked for Life
            </p>
            <h3
              className="font-display"
              style={{ fontSize: "22px", fontWeight: 600, color: "var(--lw-text)" }}
            >
              Locked for life.
            </h3>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "15px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.65,
              }}
            >
              $10/month Seeker. $25/month Oracle. Locked at the founding rate forever — even
              when retail moves to $19 and $49. As long as your subscription stays active,
              your rate never changes.
            </p>

            {/* Rate comparison cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                marginTop: "0.25rem",
              }}
            >
              {[
                { tier: "Seeker", founding: "$10/mo", foundingYr: "$99/yr", retail: "$19/mo", retailYr: "$189/yr" },
                { tier: "Oracle", founding: "$25/mo", foundingYr: "$249/yr", retail: "$49/mo", retailYr: "$479/yr" },
              ].map((r) => (
                <div
                  key={r.tier}
                  style={{
                    background: "rgba(10,10,30,0.4)",
                    border: "1px solid rgba(212,175,100,0.15)",
                    borderRadius: "10px",
                    padding: "0.85rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(212,175,100,0.8)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {r.tier}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#D4AF64",
                      lineHeight: 1,
                      marginBottom: "2px",
                    }}
                  >
                    {r.founding}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "11px",
                      color: "rgba(245,240,232,0.45)",
                    }}
                  >
                    or {r.foundingYr}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "11px",
                      color: "rgba(245,240,232,0.3)",
                      marginTop: "0.4rem",
                      textDecoration: "line-through",
                    }}
                  >
                    After beta: {r.retail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 — A real seat at the table */}
          <div
            style={{
              background: "rgba(245,240,232,0.04)",
              border: "1px solid rgba(212,175,100,0.18)",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(212,175,100,0.7)",
              }}
            >
              Community
            </p>
            <h3
              className="font-display"
              style={{ fontSize: "22px", fontWeight: 600, color: "var(--lw-text)" }}
            >
              A real seat at the table.
            </h3>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "15px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.65,
              }}
            >
              Founding members get a monthly office-hour with the founder, early access to
              every new feature, and a direct line into what we build next. You're not a beta
              tester. You're the people Lifewoven is being built with.
            </p>
          </div>
        </div>

        {/* ── Application form ── */}
        <div
          style={{
            maxWidth: "600px",
            margin: "4rem auto 0",
          }}
        >
          {/* Scarcity counter */}
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
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
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "15px",
                  color: "var(--lw-text-muted)",
                  lineHeight: 1.65,
                }}
              >
                We review every application. You'll hear back within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(212,175,100,0.2)",
                borderRadius: "16px",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
              aria-label="Founding member application"
            >
              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="fm-name"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,100,0.7)",
                  }}
                >
                  Name
                </label>
                <input
                  id="fm-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Your name"
                  style={{
                    background: "rgba(10,10,30,0.5)",
                    border: "1px solid rgba(212,175,100,0.2)",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    color: "#F5F0E8",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.5)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.2)";
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="fm-email"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,100,0.7)",
                  }}
                >
                  Email
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
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.5)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.2)";
                  }}
                />
              </div>

              {/* Where are you in your work */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="fm-work"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
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
                  minLength={20}
                  value={formState.work}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.length <= 600) {
                      setFormState((s) => ({ ...s, work: val }));
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
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "15px",
                    outline: "none",
                    resize: "vertical",
                    lineHeight: 1.6,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.5)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.2)";
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "12px",
                    color: "rgba(245,240,232,0.3)",
                    textAlign: "right",
                  }}
                >
                  {formState.work.length} / 600
                </p>
              </div>

              {/* Submit */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
                <button
                  type="submit"
                  disabled={submitting || formState.work.length < 20}
                  style={{
                    width: "100%",
                    background: submitting || formState.work.length < 20 ? "rgba(212,175,100,0.4)" : "#D4AF64",
                    color: "#0F1023",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    padding: "0.9rem 2rem",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: submitting || formState.work.length < 20 ? "not-allowed" : "pointer",
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting && formState.work.length >= 20) {
                      (e.currentTarget as HTMLElement).style.background = "#c49d4e";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      submitting || formState.work.length < 20 ? "rgba(212,175,100,0.4)" : "#D4AF64";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {submitting ? "Sending…" : "Apply for Founding Member access."}
                </button>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
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

        {/* ── After Beta reference card ── */}
        <div
          style={{
            maxWidth: "800px",
            margin: "4rem auto 0",
            background: "rgba(245,240,232,0.025)",
            border: "1px solid rgba(245,240,232,0.08)",
            borderRadius: "12px",
            padding: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.35)",
              marginBottom: "1.25rem",
            }}
          >
            What it'll be after beta.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {afterBetaTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  padding: "1rem",
                  background: "rgba(10,10,30,0.3)",
                  borderRadius: "8px",
                  border: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,100,0.6)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {tier.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "rgba(245,240,232,0.55)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tier.price}
                </p>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "12px",
                    color: "rgba(245,240,232,0.3)",
                    lineHeight: 1.5,
                  }}
                >
                  {tier.included}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
