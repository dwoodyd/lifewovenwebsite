/**
 * FiveThreadsSection — Full-bleed video background: woman smiling on bench (warm library setting)
 * Design: Warm overlay on bright library video. Copy floats right-aligned over the video.
 * The 5S tabs sit in a semi-transparent card over the video.
 * Video: Woman_smiling_on_bench — knit figure in warm library, light background
 * Typography: Cormorant Garamond display, DM Sans body
 * Palette: dark text on light overlay (video is warm/bright), amber accents
 */

import { useState, useRef, useEffect } from "react";
import { useReveal } from "../../hooks/useReveal";
import { AUDIT_URL } from "../../config";

const THREADS = [
  {
    id: "state",
    label: "State",
    icon: "◈",
    headline: "How you feel shapes everything else.",
    body: "Emotional alignment, nervous system regulation, and the quality of your inner weather. Your state is the soil everything else grows from.",
  },
  {
    id: "story",
    label: "Story",
    icon: "◉",
    headline: "The narrative you carry becomes the life you live.",
    body: "The narrative you carry about who you are, what you're capable of, and what the world owes you. Stories can be rewritten — but first they must be seen.",
  },
  {
    id: "standards",
    label: "Standards",
    icon: "◎",
    headline: "Your values are only real when they cost you something.",
    body: "The values and principles that govern your choices — your inner compass. Standards without practice are just preferences.",
  },
  {
    id: "strategy",
    label: "Strategy",
    icon: "◆",
    headline: "Intention without architecture is just wishing.",
    body: "How you move toward what matters — your systems, plans, and daily architecture. Strategy is wisdom made operational.",
  },
  {
    id: "stewardship",
    label: "Stewardship",
    icon: "◇",
    headline: "What you tend grows. What you neglect unravels.",
    body: "How you tend to what you've built — your relationships, resources, energy, and legacy. Stewardship is the thread most people forget until it frays.",
  },
];

export default function FiveThreadsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const v = videoRef.current;
    if (!section || !v) return;

    const startVideo = () => {
      v.load();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          startVideo();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const thread = THREADS[active];

  return (
    <section
      id="the-method"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
              aria-label="The Method — 5S Framework"
    >
      {/* ── Full-bleed video ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/manus-storage/poster_woman_bench_fba43ab2.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        >
          <source
            src="/manus-storage/Woman_smiling_on_bench_202605071112_a486398e.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay — right side darker for the copy panel, left side shows the figure */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(26,20,14,0.08) 0%, rgba(26,20,14,0.30) 38%, rgba(26,20,14,0.80) 62%, rgba(26,20,14,0.92) 100%)",
          }}
        />
        {/* Top and bottom fades */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "12%",
            background: "linear-gradient(to bottom, rgba(26,20,14,0.95), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "12%",
            background: "linear-gradient(to bottom, transparent, rgba(26,20,14,0.95))",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{ minHeight: "100svh", padding: "6rem 0 4rem" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">

            {/* Left: headline — sits over the lighter part of the video */}
            <div className="lg:w-5/12 section reveal">
              <p
                className="uppercase tracking-[0.18em] font-medium mb-5"
                style={{ color: "#B0832F", fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}
              >
                The 5S Framework
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                  lineHeight: 1.05,
                  color: "#F5F0E8",
                  letterSpacing: "-0.01em",
                  marginBottom: "1.25rem",
                }}
              >
                Five threads.{" "}
                <em style={{ fontStyle: "italic", color: "#B0832F" }}>One</em>
                <br />
                <em style={{ fontStyle: "italic", color: "#B0832F" }}>life, woven.</em>
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(245,240,232,0.72)",
                  lineHeight: 1.7,
                  maxWidth: "36ch",
                }}
              >
                The 6 Dimensions name what you are tending. The 5S Framework is
                how you tend them — through State, Story, Standards, Strategy,
                and Stewardship.
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  color: "rgba(245,240,232,0.55)",
                  marginTop: "1rem",
                }}
              >
                Hold them as one thing.
              </p>
            </div>

            {/* Right: interactive thread tabs */}
            <div className="lg:w-7/12 w-full section reveal">
              {/* Tab buttons */}
              <div
                className="flex flex-wrap gap-2 mb-6"
                role="tablist"
                aria-label="The Five Threads"
              >
                {THREADS.map((t, i) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={active === i}
                    onClick={() => setActive(i)}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: active === i ? 700 : 400,
                      fontSize: "0.85rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "0.5rem 1.1rem",
                      borderRadius: "9999px",
                      border: active === i
                        ? "1px solid #B0832F"
                        : "1px solid rgba(245,240,232,0.2)",
                      background: active === i
                        ? "rgba(176,131,47,0.15)"
                        : "rgba(26,20,14,0.4)",
                      color: active === i ? "#B0832F" : "rgba(245,240,232,0.55)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {t.icon} {t.label}
                  </button>
                ))}
              </div>

              {/* Active thread card */}
              <div
                key={thread.id}
                role="tabpanel"
                style={{
                  background: "rgba(26,20,14,0.65)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(176,131,47,0.2)",
                  borderRadius: "16px",
                  padding: "2rem 2.25rem",
                  animation: "fadeInUp 0.35s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#B0832F",
                    marginBottom: "0.75rem",
                  }}
                >
                  {thread.icon} {thread.label}
                </p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    color: "#F5F0E8",
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                  }}
                >
                  {thread.headline}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(245,240,232,0.72)",
                    lineHeight: 1.7,
                  }}
                >
                  {thread.body}
                </p>
              </div>

              {/* The Ground callout */}
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem 1.5rem",
                  background: "rgba(79,97,87,0.15)",
                  border: "1px solid rgba(79,97,87,0.35)",
                  borderRadius: "10px",
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.1rem", marginTop: "2px" }}>🌿</span>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4F6157", marginBottom: "0.3rem", fontWeight: 600 }}>The Ground</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(239,231,214,0.75)", lineHeight: 1.6, margin: 0 }}>
                    A faith-rooted, contemplative layer woven through all five threads — for those whose practice is anchored in something larger than self.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href={AUDIT_URL} target="_blank" rel="noopener noreferrer"
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
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#B0832F";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(176,131,47,0.4)";
                  }}
                >
                  Take the Load-Bearing Survey →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
