/**
 * LuminSection — Full-bleed Lumin mascot video with scroll-triggered word-by-word copy entrance
 * Design: Lumin mascot (glowing knit sun on dark starfield) fills the entire screen.
 * Copy animates in word-by-word as the section enters the viewport:
 *   "Meet" fades in first → then "Lumin." slides up 300ms later → body text follows → pills → CTA
 * Typography: Cormorant Garamond display, Lato body
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
      { threshold: 0.18 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Video load
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onReady = () => setVideoReady(true);
    v.addEventListener("canplaythrough", onReady);
    v.load();
    return () => v.removeEventListener("canplaythrough", onReady);
  }, []);

  // Word-by-word stagger: each word gets an index-based delay
  const WordReveal = ({
    text,
    baseDelay = 0,
    className = "",
    style = {},
  }: {
    text: string;
    baseDelay?: number;
    className?: string;
    style?: React.CSSProperties;
  }) => {
    const words = text.split(" ");
    return (
      <span className={className} style={style} aria-label={text}>
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
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Inside the Weave — Meet Lumin"
    >
      {/* ── Full-bleed Lumin mascot video ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/poster_lumin_mascot_e748fb1e.jpg"
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
          poster="/manus-storage/poster_lumin_mascot_e748fb1e.jpg"
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

        {/* Radial vignette — darkens edges, keeps mascot centre bright */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(10,10,30,0.0) 30%, rgba(10,10,30,0.55) 75%, rgba(10,10,30,0.82) 100%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "14%",
            background: "linear-gradient(to bottom, rgba(10,10,30,0.92), transparent)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "14%",
            background: "linear-gradient(to bottom, transparent, rgba(10,10,30,0.92))",
          }}
        />
      </div>

      {/* ── Copy — bottom-anchored, centered ── */}
      <div
        className="relative z-10 flex flex-col justify-end"
        style={{ minHeight: "100svh", paddingBottom: "8vh" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="flex flex-col items-center text-center">

            {/* Eyebrow — fades in first */}
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.22em",
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

            {/* Headline — "Meet" then "Lumin." staggered */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                marginBottom: "1.25rem",
                color: "#F5F0E8",
              }}
            >
              {/* "Meet" — delay 100ms */}
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
              {/* "Lumin." — delay 380ms, slides up from slightly lower */}
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

            {/* Body — word-by-word, starts at 700ms */}
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                color: "rgba(245,240,232,0.78)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "44ch",
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
            </p>

            {/* Feature pills — staggered in after body */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { icon: "◈", label: "Daily check-ins", delay: 1400 },
                { icon: "◉", label: "Evidence Log", delay: 1520 },
                { icon: "◎", label: "The Threshold", delay: 1640 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                  style={{
                    background: "rgba(212,175,100,0.1)",
                    border: "1px solid rgba(212,175,100,0.25)",
                    backdropFilter: "blur(8px)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0) scale(1)" : "translateY(12px) scale(0.96)",
                    transition: `opacity 0.5s ease ${item.delay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${item.delay}ms`,
                  }}
                >
                  <span style={{ color: "#D4AF64", fontSize: "13px" }}>{item.icon}</span>
                  <span
                    style={{
                      color: "#F5F0E8",
                      fontSize: "13px",
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA — last to appear */}
            <a
              href="#pricing"
              style={{
                display: "inline-block",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#D4AF64",
                textDecoration: "none",
                borderBottom: "1px solid rgba(212,175,100,0.4)",
                paddingBottom: "2px",
                letterSpacing: "0.04em",
                transition: "border-color 0.2s",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#D4AF64";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.4)";
              }}
            >
              See what Lumin unlocks →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
