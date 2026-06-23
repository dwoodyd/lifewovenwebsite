/**
 * FirstHonestWeekSection — "THE FIRST HONEST WEEK"
 * Brief: Inserted between The Weave (VaultSection) and The Woven (WovenGallerySection).
 * Layout: full-width dark card with eyebrow, headline, 3-step process, CTA
 * Tone: direct, grounding — this is the entry point for book readers
 */

import { useReveal } from "../../hooks/useReveal";
import { APP_URL } from "../../config";

const steps = [
  {
    number: "01",
    heading: "Take stock across all six dimensions.",
    body: "A 12-minute honest audit of where you actually are — not where you want to be.",
  },
  {
    number: "02",
    heading: "Name what's pulling the most weight.",
    body: "The Capacity Math shows you which dimension is costing you the most and why.",
  },
  {
    number: "03",
    heading: "Start one practice. Just one.",
    body: "Lumin surfaces the right first move from the 7 Pathways. You don't need a plan. You need a start.",
  },
];

export default function FirstHonestWeekSection() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      id="first-honest-week"
      className="section reveal"
      aria-label="The First Honest Week"
    >
      <div className="container">
        {/* Full-width dark card */}
        <div
          style={{
            background: "var(--lw-card)",
            border: "1px solid var(--lw-border)",
            borderRadius: "24px",
            padding: "clamp(2.5rem, 6vw, 5rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle amber glow top-left */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-80px",
              left: "-80px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(176,131,47,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Header */}
          <div style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)", maxWidth: "640px" }}>
            <p className="eyebrow mb-4">The First Honest Week</p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(30px, 4.5vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "var(--lw-text)",
                marginBottom: "1.25rem",
              }}
            >
              Already have the book?{" "}
              <em style={{ color: "var(--lw-amber)", fontStyle: "italic" }}>
                Start here.
              </em>
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 1.7vw, 19px)",
                color: "var(--lw-text-muted)",
                lineHeight: 1.7,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              The First Honest Week is the bridge between the book and the practice.
              Three moves. Seven days. The whole system comes alive.
            </p>
          </div>

          {/* 3-step process */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "clamp(1.5rem, 3vw, 2.5rem)",
              marginBottom: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {/* Step number */}
                <span
                  className="font-display"
                  style={{
                    fontSize: "clamp(36px, 4vw, 52px)",
                    fontWeight: 700,
                    color: "rgba(176,131,47,0.25)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.number}
                </span>

                {/* Divider */}
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "var(--lw-amber)",
                    borderRadius: "2px",
                  }}
                />

                {/* Heading */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(17px, 1.7vw, 21px)",
                    fontWeight: 600,
                    color: "var(--lw-text)",
                    lineHeight: 1.25,
                  }}
                >
                  {step.heading}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--lw-text-muted)",
                    lineHeight: 1.65,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={`${APP_URL}/first-honest-week`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Begin The First Honest Week →
            </a>
            <p
              style={{
                fontSize: "13px",
                color: "var(--lw-text-muted)",
                fontFamily: "'DM Sans', sans-serif",
                fontStyle: "italic",
              }}
            >
              Free for all Lifewoven members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
