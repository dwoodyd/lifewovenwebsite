/**
 * SixDimensionsSection — "THE SIX DIMENSIONS OF THE SELF"
 * Brief: Inserted below the 5S Framework section.
 * Layout: eyebrow + headline + 6 dimension cards in a 2-col or 3-col grid
 * Each dimension: icon, name, one-line description, thread colour dot
 * Closing line: "The Load-Bearing Survey measures where you are across all six."
 */

import { useReveal } from "../../hooks/useReveal";
import { AUDIT_URL } from "../../config";

const dimensions = [
  {
    icon: "◯",
    name: "Emotional",
    mapsTo: "State",
    description: "Your ability to feel, process, and be present to your interior life without suppressing it or being overwhelmed by it.",
    thread: "#8B6F9E", // violet
  },
  {
    icon: "▢",
    name: "Physical",
    mapsTo: "State",
    description: "The quality of your relationship with your body — receiving its signals, honoring its requirements, sustaining rather than depleting.",
    thread: "#B5653F", // clay
  },
  {
    icon: "△",
    name: "Spiritual",
    mapsTo: "Standards",
    description: "Connection to meaning that is not dependent on performance or output. Somewhere to be when the external structures fall away.",
    thread: "#4F6157", // forest
  },
  {
    icon: "◇",
    name: "Creative",
    mapsTo: "Story",
    description: "The deep human impulse to bring something into being that was not there before. Requires safety, surplus, and freedom from obligation.",
    thread: "#B0832F", // gold
  },
  {
    icon: "⬡",
    name: "Identity",
    mapsTo: "Story",
    description: "Who you are beneath and beyond what you produce. The self that remains when the role is removed and the audience is gone.",
    thread: "#B5653F", // clay
  },
  {
    icon: "→",
    name: "Purpose",
    mapsTo: "Standards",
    description: "The sense of something you are building toward that is larger than any single project or season. Direction across time.",
    thread: "#4F6157", // forest
  },
];

export default function SixDimensionsSection() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      id="six-dimensions"
      className="section reveal"
      aria-label="The 6 Dimensions"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <p className="eyebrow mb-4">The Six Dimensions of the Self</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 600,
              lineHeight: 1.1,
              color: "var(--lw-text)",
              marginBottom: "1.25rem",
            }}
          >
            Six dimensions of the self.{" "}
            <em style={{ color: "var(--lw-amber)", fontStyle: "italic" }}>
              One life.
            </em>
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "var(--lw-text-muted)",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            The Soul Engineer Method names six dimensions of the self —
            not as metaphysics, but as a practical map for what you are
            building when you are building a life.
            <br /><br />
            The 5S is how you work on them, one thread at a time.
          </p>
        </div>

        {/* 6-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(1rem, 2vw, 1.5rem)",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {dimensions.map((dim) => (
            <div
              key={dim.name}
              style={{
                background: "var(--lw-card)",
                border: "1px solid var(--lw-border)",
                borderRadius: "16px",
                padding: "clamp(1.25rem, 2.5vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "border-color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(176,131,47,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--lw-border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Thread colour dot + icon */}
              <div className="flex items-center gap-3">
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: dim.thread,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "22px", color: "var(--lw-text-muted)" }}>{dim.icon}</span>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(176,131,47,0.55)",
                    marginLeft: "auto",
                  }}
                >
                  Maps to {dim.mapsTo}
                </span>
              </div>

              {/* Name */}
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  fontWeight: 600,
                  color: "var(--lw-text)",
                  lineHeight: 1.2,
                }}
              >
                {dim.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--lw-text-muted)",
                  lineHeight: 1.65,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {dim.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line + CTA */}
        <div className="text-center">
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              color: "var(--lw-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1.75rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            The Load-Bearing Survey shows you which dimension to pick up first.
          </p>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Take the Load-Bearing Survey →
          </a>
        </div>
      </div>
    </section>
  );
}
