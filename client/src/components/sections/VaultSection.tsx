/**
 * WeaveSection — "Where the work is kept."
 * (renamed from VaultSection — "The Vault" → "The Weave" per brand lock)
 * 
 * Headline: "Where the work is kept."
 * Body: privacy/data promise copy
 * Three icon+label pairs: Lock / Download / Eye-slash
 * 
 * Design: deep indigo background, amber accent, Cormorant Garamond display
 */

import { useReveal } from "../../hooks/useReveal";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 28, height: 28 }}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    label: "Private by default.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 28, height: 28 }}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    label: "Export anytime.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 28, height: 28 }}>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
    label: "We don't train on your data.",
  },
];

export default function VaultSection() { // component name kept for import compatibility
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="section reveal"
      aria-label="Where the work is kept"
      style={{
        borderTop: "1px solid rgba(212,175,100,0.1)",
        borderBottom: "1px solid rgba(212,175,100,0.1)",
        background: "rgba(10,10,30,0.6)",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <p className="eyebrow mb-4">The Weave</p>

          {/* Headline */}
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 1.05,
              fontWeight: 600,
              color: "var(--lw-text)",
              marginBottom: "1.5rem",
            }}
          >
            Where the work is kept.
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "var(--lw-text-muted)",
              lineHeight: 1.75,
              marginBottom: "3rem",
              maxWidth: "58ch",
              margin: "0 auto 3rem",
            }}
          >
            Every entry, every Woven Self portrait, every reflection — kept in your private
            weave. Searchable. Exportable. Yours.{" "}
            <span style={{ color: "rgba(245,240,232,0.55)" }}>
              We don't read it, we don't train on it, we don't sell it.
            </span>{" "}
            The Weave is the receipt that you're doing the work.
          </p>

          {/* Three pillars */}
          <div
            className="weave-pillars"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "2rem 1.25rem",
                  background: "rgba(212,175,100,0.05)",
                  border: "1px solid rgba(212,175,100,0.14)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ color: "rgba(212,175,100,0.75)" }}>
                  {p.icon}
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.82)",
                    textAlign: "center",
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
