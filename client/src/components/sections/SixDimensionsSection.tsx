/**
 * SixDimensionsSection — "THE 6 DIMENSIONS"
 * Brief: Inserted below the 5S Framework section.
 * Layout: eyebrow + headline + 6 dimension cards in a 2-col or 3-col grid
 * Each dimension: icon, name, one-line description, thread colour dot
 * Closing line: "The Capacity Audit measures where you are across all six."
 */

import { useReveal } from "../../hooks/useReveal";
import { AUDIT_URL } from "../../config";

const dimensions = [
  {
    icon: "🧠",
    name: "Mental Clarity",
    description: "How clearly you think, decide, and discern what matters.",
    thread: "#4F6157", // forest
  },
  {
    icon: "💪",
    name: "Physical Vitality",
    description: "The energy your body has to sustain the life you're building.",
    thread: "#B5653F", // clay
  },
  {
    icon: "❤️",
    name: "Emotional Depth",
    description: "Your capacity to feel, process, and stay present with others.",
    thread: "#8B6F9E", // violet
  },
  {
    icon: "🤝",
    name: "Relational Health",
    description: "The quality of the connections that carry you through hard seasons.",
    thread: "#B0832F", // gold
  },
  {
    icon: "🎯",
    name: "Purposeful Work",
    description: "Whether your daily effort is aligned with who you are becoming.",
    thread: "#4F6157", // forest
  },
  {
    icon: "✝️",
    name: "Spiritual Groundedness",
    description: "The Ground beneath everything — faith, meaning, and the unshakeable.",
    thread: "#B5653F", // clay
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
          <p className="eyebrow mb-4">The 6 Dimensions</p>
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
            A whole life needs{" "}
            <em style={{ color: "var(--lw-amber)", fontStyle: "italic" }}>
              all six.
            </em>
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "var(--lw-text-muted)",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Most people optimise one or two and wonder why everything still feels off.
            The Soul Engineer Method works across all six — simultaneously.
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
                <span style={{ fontSize: "24px" }}>{dim.icon}</span>
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
            The Capacity Audit measures where you are across all six.{" "}
            <span style={{ color: "var(--lw-text)" }}>
              It takes 12 minutes.
            </span>
          </p>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Take the Capacity Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
