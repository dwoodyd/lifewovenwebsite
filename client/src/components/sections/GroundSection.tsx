import { useReveal } from "../../hooks/useReveal";

export default function GroundSection() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      id="the-ground"
      ref={sectionRef}
      className="section reveal"
      aria-label="The Ground"
      style={{
        background: "rgba(79,97,87,0.1)",
        borderTop: "1px solid rgba(79,97,87,0.25)",
        borderBottom: "1px solid rgba(79,97,87,0.25)",
      }}
    >
      <div className="container" style={{ maxWidth: "820px", textAlign: "center" }}>
        <p className="eyebrow mb-4">The Ground</p>
        <h2
          className="font-display"
          style={{
            color: "var(--lw-text)",
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: 600,
            lineHeight: 1.08,
            marginBottom: "1.25rem",
          }}
        >
          A place to stand when the rest is moving.
        </h2>
        <p
          style={{
            color: "var(--lw-text-muted)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 19px)",
            lineHeight: 1.75,
            margin: "0 auto",
            maxWidth: "60ch",
          }}
        >
          A faith-rooted, contemplative layer woven through all five threads — for those whose practice is
          anchored in something larger than self.
        </p>
      </div>
    </section>
  );
}
