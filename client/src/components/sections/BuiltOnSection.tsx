/*
 * LIFEWOVEN Built On Section — "Built on Frankl. Clear. Covey. Brown."
 * 
 * Subtle center band. Restrained. 60% opacity typeset names.
 * The traditions you've already been reading.
 */
import { useReveal } from "../../hooks/useReveal";

const traditions = [
  { name: "Viktor Frankl", work: "Logotherapy" },
  { name: "James Clear", work: "Atomic Habits" },
  { name: "Stephen Covey", work: "7 Habits" },
  { name: "Brené Brown", work: "Daring Greatly" },
  { name: "David Hawkins", work: "22 Levels" },
  { name: "Steven Hayes", work: "ACT" },
  { name: "Richard Schwartz", work: "IFS" },
  { name: "Marcus Aurelius", work: "Stoic Ethics" },
];

export default function BuiltOnSection() {
  const sectionRef = useReveal(0.15) as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="reveal"
      aria-label="Built on the wisdom traditions"
      style={{
        padding: "clamp(48px, 8vw, 96px) 0",
        borderTop: "1px solid var(--lw-border)",
        borderBottom: "1px solid var(--lw-border)",
      }}
    >
      <div className="container">
        <div className="text-center">
          <p
            className="mb-8"
            style={{
              fontSize: "clamp(18px, 2.5vw, 28px)",
              color: "var(--lw-text-muted)",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              lineHeight: 1.4,
            }}
          >
            Built on Frankl. Clear. Covey. Brown.
            <br />
            <span style={{ fontSize: "0.8em" }}>
              The traditions you've already been reading.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {traditions.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center px-5 py-3 rounded-lg"
                style={{
                  background: "rgba(45,46,72,0.3)",
                  border: "1px solid rgba(45,46,72,0.8)",
                  opacity: 0.65,
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.65")}
              >
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--lw-text)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--lw-amber)",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.05em",
                    marginTop: "2px",
                  }}
                >
                  {t.work}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
