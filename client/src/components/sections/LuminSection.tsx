/**
 * LuminSection — Full-bleed Lumin mascot video with scroll-triggered word-by-word copy entrance
 * 
 * Layout fix (Fix 4):
 *   Desktop: two-column — video fills left 55%, copy sits in right 45% (no collision)
 *   Mobile: stacked — video top (50vh), copy below
 * 
 * Copy animates in word-by-word as the section enters the viewport:
 *   "Meet" fades in first → then "Lumin." slides up 300ms later → body text follows → pills → CTA
 * 
 * Typography: Cormorant Garamond display, DM Sans body
 * Palette: cream/ivory text, amber "Lumin." italic highlight
 */

import { useRef, useEffect, useState } from "react";

export default function LuminSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [inView, setInView] = useState(false);

  // Intersection observer — triggers once when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Video load — deferred until section is in view
  useEffect(() => {
    if (!inView) return;
    const v = videoRef.current;
    if (!v) return;
    let timeout: ReturnType<typeof setTimeout>;
    const onReady = () => {
      clearTimeout(timeout);
      setVideoReady(true);
    };
    v.addEventListener("canplay", onReady, { once: true });
    v.addEventListener("loadeddata", onReady, { once: true });
    v.load();
    timeout = setTimeout(() => setVideoReady(true), 3000);
    return () => clearTimeout(timeout);
  }, [inView]);

  // Word-by-word stagger helper
  const WordReveal = ({
    text,
    baseDelay = 0,
    style = {},
  }: {
    text: string;
    baseDelay?: number;
    style?: React.CSSProperties;
  }) => {
    const words = text.split(" ");
    return (
      <span style={style} aria-label={text}>
        {words.map((word, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              display: "inline-block",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 0.55s ease ${baseDelay + i * 80}ms, transform 0.55s ease ${baseDelay + i * 80}ms`,
              marginRight: i < words.length - 1 ? "0.28em" : 0,
            }}
          >
            {word}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="meet-lumin"
      aria-label="Inside the Weave — Meet Lumin"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "rgba(17,13,8,0.98)",
      }}
    >
      {/* ── Desktop: two-column grid. Mobile: stacked ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "55% 45%",
          minHeight: "100svh",
        }}
        className="lumin-grid"
      >
        {/* ── LEFT: Video column ── */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Poster */}
          <img
            src="/manus-storage/mascot_poster_5f6e568a.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              opacity: videoReady ? 0 : 1,
              transition: "opacity 0.8s ease",
            }}
          />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/manus-storage/mascot_poster_5f6e568a.jpg"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              opacity: videoReady ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          >
            <source src="/manus-storage/lumin_mascot_v58_b9df5b9e.mp4" type="video/mp4" />
          </video>

          {/* Right-edge fade — blends into the copy column */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "20%",
              background: "linear-gradient(to right, transparent, rgba(17,13,8,0.98))",
            }}
          />
          {/* Top fade */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "12%",
              background: "linear-gradient(to bottom, rgba(17,13,8,0.9), transparent)",
            }}
          />
          {/* Bottom fade */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "12%",
              background: "linear-gradient(to bottom, transparent, rgba(17,13,8,0.9))",
            }}
          />
        </div>

        {/* ── RIGHT: Copy column ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5rem 3rem 5rem 2rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D4AF64",
              marginBottom: "1.25rem",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.5s ease 0ms, transform 0.5s ease 0ms",
            }}
          >
            Inside the Weave
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 4.5vw, 5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              marginBottom: "1.5rem",
              color: "#F5F0E8",
            }}
          >
            <span
              style={{
                display: "inline-block",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.6s ease 100ms, transform 0.6s ease 100ms",
                marginRight: "0.28em",
              }}
            >
              Meet
            </span>
            <em
              style={{
                display: "inline-block",
                fontStyle: "italic",
                color: "#D4AF64",
                background: "rgba(212,175,100,0.12)",
                padding: "0 0.1em",
                borderRadius: "2px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.7s ease 380ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) 380ms",
              }}
            >
              Lumin.
            </em>
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 1.6vw, 1.05rem)",
              color: "rgba(245,240,232,0.78)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "38ch",
            }}
          >
            <WordReveal
              text="Lumin walks with you. Doesn't talk back."
              baseDelay={700}
            />
            <br />
            <WordReveal
              text="Marks the moments that matter — and waits for the ones that don't."
              baseDelay={1050}
            />
            <br />
            <WordReveal
              text="Lumin is your guide. The Oracle is the AI layer that reads your patterns and names what you cannot yet see."
              baseDelay={1350}
            />
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: "◈", label: "Daily check-ins", delay: 1400 },
              { icon: "◉", label: "Evidence Log", delay: 1520 },
              { icon: "◎", label: "The Threshold", delay: 1640 },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                style={{
                  background: "rgba(176,131,47,0.1)",
                  border: "1px solid rgba(176,131,47,0.25)",
                  backdropFilter: "blur(8px)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0) scale(1)" : "translateY(12px) scale(0.96)",
                  transition: `opacity 0.5s ease ${item.delay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${item.delay}ms`,
                }}
              >
                <span style={{ color: "#B0832F", fontSize: "13px" }}>{item.icon}</span>
                <span
                  style={{
                    color: "#F5F0E8",
                    fontSize: "13px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#pricing"
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "#B0832F",
              textDecoration: "none",
              borderBottom: "1px solid rgba(176,131,47,0.4)",
              paddingBottom: "2px",
              letterSpacing: "0.04em",
              transition: "border-color 0.2s, opacity 0.5s ease 1800ms",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(8px)",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#B0832F";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(176,131,47,0.4)";
            }}
          >
            See what Lumin unlocks →
          </a>
        </div>
      </div>

      {/* ── Mobile: stack video on top, copy below ── */}
      <style>{`
        @media (max-width: 768px) {
          .lumin-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: 50svh auto;
          }
          .lumin-grid > div:last-child {
            padding: 2.5rem 1.5rem 3rem !important;
          }
          .lumin-grid > div:last-child a[href="#pricing"] {
            align-self: center !important;
          }
        }
      `}</style>
    </section>
  );
}
