/**
 * LuminSection — Full-bleed video background: welcoming/waving knit figure in craft studio
 * Design: Bright warm video fills the screen. Copy floats left with dark overlay for legibility.
 * Lumin is gender-neutral throughout — no "she/her" pronouns.
 * Video: Woman_gesturing_welcoming_motion — knit figure waving in colourful craft studio
 * Typography: Cormorant Garamond display, Lato body
 * Palette: dark text panel on left, video visible on right
 */

import { useRef, useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal";

export default function LuminSection() {
  const sectionRef = useReveal(0.15) as React.RefObject<HTMLElement>;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onReady = () => setVideoReady(true);
    v.addEventListener("canplaythrough", onReady);
    v.load();
    return () => v.removeEventListener("canplaythrough", onReady);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden section reveal"
      style={{ minHeight: "100svh" }}
      aria-label="Inside the Weave — Meet Lumin"
    >
      {/* ── Full-bleed video ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/poster_welcoming_9db86a23.jpg"
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
          poster="/manus-storage/poster_welcoming_9db86a23.jpg"
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
          <source
            src="/manus-storage/Woman_gesturing_welcoming_motion_202605071135_1cab2164.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay — left side darker for legibility, right side shows the figure */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,10,30,0.88) 0%, rgba(10,10,30,0.72) 42%, rgba(10,10,30,0.28) 68%, rgba(10,10,30,0.08) 100%)",
          }}
        />
        {/* Top and bottom fades */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "12%",
            background: "linear-gradient(to bottom, rgba(10,10,30,0.95), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "12%",
            background: "linear-gradient(to bottom, transparent, rgba(10,10,30,0.95))",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{ minHeight: "100svh", padding: "6rem 0 4rem" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="max-w-xl lg:max-w-2xl">

            {/* Eyebrow */}
            <p
              className="uppercase tracking-[0.22em] text-xs font-medium mb-6"
              style={{ color: "#D4AF64", fontFamily: "'Lato', sans-serif" }}
            >
              Inside the Weave
            </p>

            {/* Headline — gender-neutral */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                lineHeight: 1.02,
                color: "#F5F0E8",
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
              }}
            >
              Meet{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#D4AF64",
                  background: "rgba(212,175,100,0.12)",
                  padding: "0 0.1em",
                  borderRadius: "2px",
                }}
              >
                Lumin.
              </em>
            </h2>

            {/* Body — gender-neutral */}
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                color: "rgba(245,240,232,0.78)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "40ch",
              }}
            >
              Lumin walks with you. Doesn't talk back.
              <br />
              Marks the moments that matter — and waits for the ones that don't.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: "◈", label: "Daily check-ins" },
                { icon: "◉", label: "Evidence Log" },
                { icon: "◎", label: "The Threshold" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                  style={{
                    background: "rgba(212,175,100,0.1)",
                    border: "1px solid rgba(212,175,100,0.25)",
                    backdropFilter: "blur(8px)",
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

            {/* CTA */}
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
