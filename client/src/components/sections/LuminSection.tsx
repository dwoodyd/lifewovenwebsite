/*
 * LIFEWOVEN Lumin Section — "Inside the Weave"
 * 
 * PROTECTED: This is the ONLY place Lumin appears on the marketing site.
 * Palette deepens to #0A0B1A. Woven Selves recede entirely.
 * Lumin alone, breathing, in dark space with gold particles.
 */
import { useReveal } from "../../hooks/useReveal";

export default function LuminSection() {
  const sectionRef = useReveal(0.15) as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="lumin-section section reveal"
      aria-label="Inside the Weave — Meet Lumin"
      style={{
        background: "var(--lw-bg-lumin)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(233,185,110,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Gold particle dots — denser in this section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(233,185,110,0.3) 1px, transparent 1px),
            radial-gradient(circle, rgba(233,185,110,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 40px 40px",
          backgroundPosition: "0 0, 20px 20px",
          opacity: 0.4,
        }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p
            className="eyebrow mb-6"
            style={{ color: "#D4A853", letterSpacing: "0.2em" }}
          >
            Inside the Weave
          </p>

          {/* Lumin video */}
          <div
            className="relative mb-10"
            style={{ width: "clamp(240px, 35vw, 420px)" }}
            aria-label="Lumin — the companion"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full"
              style={{
                borderRadius: "16px",
                filter: "drop-shadow(0 0 60px rgba(233,185,110,0.2))",
                objectFit: "cover",
                aspectRatio: "3/4",
              }}
            >
              <source src="/manus-storage/Lumen_hugging_camera_lens_202605061915_9f199796.mp4" type="video/mp4" />
              <source src="/manus-storage/Lumen_smiling_and_gesturing_to_202605061952_4c2e660b.mp4" type="video/mp4" />
              <img
                src="/manus-storage/lumen_woc_1_1778193478991_f73f2f0c.jpg"
                alt="Lumin — the glowing companion"
                style={{ width: "100%", borderRadius: "16px" }}
              />
            </video>

            {/* Glow ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: "0 0 80px rgba(233,185,110,0.12), inset 0 0 40px rgba(233,185,110,0.04)",
              }}
            />
          </div>

          {/* Headline */}
          <h2
            className="font-display mb-6"
            style={{
              fontSize: "clamp(40px, 6vw, 96px)",
              lineHeight: 1.02,
              fontWeight: 600,
              color: "var(--lw-text)",
              maxWidth: "640px",
            }}
          >
            Meet{" "}
            <span className="highlight-amber">Lumin.</span>
          </h2>

          {/* Body */}
          <p
            className="mb-12"
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "var(--lw-text-muted)",
              maxWidth: "520px",
            }}
          >
            She walks with you. She doesn't talk back.
            <br />
            She marks the moments that matter — and waits for the ones that don't.
          </p>

          {/* Three feature labels */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: "◈", label: "Daily check-ins" },
              { icon: "◉", label: "Evidence Log" },
              { icon: "◎", label: "The Threshold" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-5 py-3 rounded-full"
                style={{
                  background: "rgba(233,185,110,0.08)",
                  border: "1px solid rgba(233,185,110,0.2)",
                }}
              >
                <span style={{ color: "var(--lw-amber)", fontSize: "14px" }}>{item.icon}</span>
                <span
                  style={{
                    color: "var(--lw-text)",
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#pricing" className="btn-outline">
            See what Lumin unlocks →
          </a>
        </div>
      </div>
    </section>
  );
}
