/**
 * FirstHonestWeekSection — "THE FIRST HONEST WEEK"
 * Brief: Inserted between The Weave (VaultSection) and The Woven (WovenGallerySection).
 * Layout: full-width dark card with eyebrow, headline, 3-step process, CTA
 * Tone: direct, grounding — this is the entry point for book readers
 */

import { useReveal } from "../../hooks/useReveal";
import { APP_URL } from "../../config";

const days = [
  { day: "Day 1", title: "Name the Load", body: "What are you actually carrying? Not what you're supposed to be carrying. What is actually in your hands right now." },
  { day: "Day 2", title: "Read One Signal", body: "Your body has been trying to tell you something. Today you listen to one signal you have been ignoring." },
  { day: "Day 3", title: "Remove One Nonessential Demand", body: "Not a goal. Not a commitment. One thing you agreed to that is costing more than it is worth." },
  { day: "Day 4", title: "Name the Relationship That Needs Attention", body: "One relationship. Not a list. The one that, if you are honest, you know you have been managing instead of tending." },
  { day: "Day 5", title: "Locate Your Ground", body: "Where do you go when everything else falls away? Today you name it and return to it deliberately." },
  { day: "Day 6", title: "Make One Thing", body: "Not a task. Not a deliverable. Something that exists because you made it and for no other reason." },
  { day: "Day 7", title: "Write the Sentence", body: "One sentence about who you are becoming. Not who you were. Not who you are supposed to be. Who you are becoming." },
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
          <div style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)", maxWidth: "680px" }}>
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
              The last chapter of the book ends with a program. Seven days.
              Each one named. Each one asking something specific of you.
              Lifewoven is where you live them.
            </p>
          </div>

          {/* 7-day grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "clamp(1rem, 2vw, 1.5rem)",
              marginBottom: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            {days.map((d, i) => (
              <div
                key={d.day}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--lw-border)",
                  borderRadius: "12px",
                  padding: "clamp(1rem, 2vw, 1.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {/* Day label */}
                <span
                  style={{
                    fontSize: "11px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(176,131,47,0.65)",
                  }}
                >
                  {d.day}
                </span>

                {/* Amber rule */}
                <div
                  style={{
                    width: "24px",
                    height: "2px",
                    background: "var(--lw-amber)",
                    borderRadius: "2px",
                    opacity: 0.5 + i * 0.07,
                  }}
                />

                {/* Title */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(15px, 1.5vw, 18px)",
                    fontWeight: 600,
                    color: "var(--lw-text)",
                    lineHeight: 1.25,
                  }}
                >
                  {d.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--lw-text-muted)",
                    lineHeight: 1.6,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {d.body}
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
