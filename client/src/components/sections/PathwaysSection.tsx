/*
 * PathwaysSection — "7 Pathways. One for where you are right now."
 *
 * Design: warm bark ground, woven gold accent, Cormorant Garamond display
 * Compact horizontal strip — scannable in 20 seconds
 * Reset Audio called out as flagship (Resilience After Setback)
 * Positioned between LibrarySection and PricingSection
 */

import { useReveal } from "../../hooks/useReveal";
import { AUDIT_URL } from "../../config";

const PATHWAYS = [
  {
    id: "reset",
    icon: "🔄",
    label: "Resilience After Setback",
    sub: "Reset",
    flagship: true,
    description: "For the moment when alignment feels distant. The full resilience protocol.",
    thread: "State",
    threadColor: "var(--thread-state)",
  },
  {
    id: "identity",
    icon: "⚛️",
    label: "Identity in Motion",
    sub: null,
    flagship: false,
    description: "Habit architecture for the whole self — behavior science applied to who you are becoming.",
    thread: "Story",
    threadColor: "var(--thread-story)",
  },
  {
    id: "meaning",
    icon: "🔍",
    label: "Meaning & Purpose",
    sub: null,
    flagship: false,
    description: "Purpose, resilience, and the unshakeable why. Meaning is not found — it is made.",
    thread: "Standards",
    threadColor: "var(--thread-standards)",
  },
  {
    id: "alignment",
    icon: "📐",
    label: "Daily Alignment",
    sub: null,
    flagship: false,
    description: "The 5S Framework in practice. Six weeks, five dimensions, one coherent life.",
    thread: "Strategy",
    threadColor: "var(--thread-strategy)",
  },
  {
    id: "belief",
    icon: "✍️",
    label: "Belief Rewrite",
    sub: null,
    flagship: false,
    description: "Surface limiting beliefs and rewrite with evidence. Thirty days.",
    thread: "Story",
    threadColor: "var(--thread-story)",
  },
  {
    id: "stewardship",
    icon: "🌱",
    label: "Stewardship & Legacy",
    sub: null,
    flagship: false,
    description: "Tend what you've built — relationships, resources, energy, and legacy.",
    thread: "Stewardship",
    threadColor: "var(--thread-stewardship)",
  },
  {
    id: "ground",
    icon: "🌿",
    label: "The Ground",
    sub: "Faith-rooted",
    flagship: false,
    description: "A contemplative, faith-anchored layer woven through all five threads.",
    thread: "All threads",
    threadColor: "var(--lw-forest)",
  },
];

export default function PathwaysSection() {
  const sectionRef = useReveal(0.08) as React.RefObject<HTMLElement>;

  return (
    <section
      id="pathways"
      ref={sectionRef}
      className="section reveal"
      aria-label="7 Pathways"
      style={{
        borderTop: "1px solid rgba(176,131,47,0.12)",
        borderBottom: "1px solid rgba(176,131,47,0.12)",
        background: "rgba(26,20,14,0.5)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="eyebrow mb-4">7 Pathways</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(32px, 4.5vw, 60px)",
              lineHeight: 1.05,
              fontWeight: 600,
              color: "var(--lw-text)",
              marginBottom: "1rem",
            }}
          >
            One for where you are{" "}
            <em style={{ fontStyle: "italic", color: "var(--lw-amber)" }}>right now.</em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "var(--lw-text-muted)",
              maxWidth: "52ch",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Lifewoven is not a curriculum you complete in order. Each pathway meets you at a specific
            moment — and the app routes you to the right one based on your Audit.
          </p>
        </div>

        {/* Pathway grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {PATHWAYS.map((p) => (
            <div
              key={p.id}
              style={{
                position: "relative",
                padding: "1.25rem 1.5rem",
                background: p.flagship
                  ? "rgba(176,131,47,0.10)"
                  : "rgba(38,32,25,0.6)",
                border: p.flagship
                  ? "1px solid rgba(176,131,47,0.45)"
                  : "1px solid var(--lw-border)",
                borderRadius: "12px",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Flagship badge */}
              {p.flagship && (
                <span
                  style={{
                    position: "absolute",
                    top: "-1px",
                    right: "1rem",
                    background: "var(--lw-amber)",
                    color: "#1A140E",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  Flagship
                </span>
              )}

              {/* Icon + label row */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.6rem" }}>
                <span style={{ fontSize: "1.25rem", lineHeight: 1, marginTop: "2px", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      color: "var(--lw-text)",
                      lineHeight: 1.25,
                      margin: 0,
                    }}
                  >
                    {p.label}
                    {p.sub && (
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "var(--lw-amber)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginLeft: "0.5rem",
                          verticalAlign: "middle",
                        }}
                      >
                        · {p.sub}
                      </span>
                    )}
                  </p>
                  {/* Thread tag */}
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px",
                      color: p.threadColor,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: "3px 0 0",
                      fontWeight: 500,
                    }}
                  >
                    {p.thread}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--lw-text-muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note + CTA */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--lw-border)",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              color: "var(--lw-text-muted)",
              margin: 0,
              maxWidth: "48ch",
            }}
          >
            The Alignment Audit identifies which pathway fits your current moment — and routes you
            directly into it. Free, 12 questions, no account required.
          </p>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flexShrink: 0 }}
          >
            Find your pathway →
          </a>
        </div>
      </div>
    </section>
  );
}
