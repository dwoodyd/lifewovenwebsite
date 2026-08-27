/*
 * LIFEWOVEN Closing CTA — "Begin where you are."
 * 
 * Full-width, centered, generous whitespace
 * The final invitation before the footer
 */
import { useReveal } from "../../hooks/useReveal";
import { AUDIT_URL, SIGNUP_URL } from "../../config";

export default function ClosingCTA() {
  const sectionRef = useReveal(0.15) as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="section reveal"
      aria-label="Begin your practice"
      style={{
        borderTop: "1px solid var(--lw-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(176,131,47,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Woven figure trio */}
          <div
            className="flex justify-center gap-4 mb-12"
            aria-hidden="true"
          >
            {[
              "/manus-storage/lumen_group_v3_1_1778194988941_1c73397e.jpg",
              "/manus-storage/lumen_group_v3_2_1778195002242_f76ec0fa.jpg",
              "/manus-storage/lumen_group_v3_3_1778195018342_e8ac3d62.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="woven-figure"
                style={{
                  width: "clamp(100px, 22vw, 160px)",
                  height: "clamp(130px, 28vw, 200px)",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: "8px",
                  opacity: 0.6 + i * 0.15,
                  transform: `translateY(${i === 1 ? "-12px" : "0"})`,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
                loading="lazy"
              />
            ))}
          </div>

          <h2
            className="font-display mb-6"
            style={{
              fontSize: "clamp(40px, 6.5vw, 96px)",
              lineHeight: 1.02,
              fontWeight: 600,
              color: "var(--lw-text)",
            }}
          >
            Begin where you are.
          </h2>

          <p
            className="mb-10"
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "var(--lw-text-muted)",
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
            }}
          >
            The Load-Bearing Survey takes three minutes.
            The practice takes a lifetime.
            <br />
            <em style={{ color: "var(--lw-text)" }}>Both begin with the same first step.</em>
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "16px", padding: "0.9rem 2.25rem" }}>
              Start free →
            </a>
            <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "16px", padding: "0.9rem 2.25rem" }}>
              Take the Load-Bearing Survey →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
