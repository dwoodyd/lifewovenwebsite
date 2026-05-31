/**
 * SocialProofSection — "The Companion Book"
 * Layout: 50/50 two-column grid on desktop — left: book + quote + CTAs | right: woven figure reading video
 * Book: Build a Life That Doesn't Break You (coming soon) — no retail link, single CTA: Start with the Audit
 * On mobile: stacks vertically — copy → video.
 */

import { useRef, useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal";

export default function SocialProofSection() {
  const sectionRef = useReveal(0.12) as React.RefObject<HTMLElement>;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const v = videoRef.current;
    if (!section || !v) return;

    let timeout: ReturnType<typeof setTimeout>;

    const startVideo = () => {
      const onReady = () => {
        clearTimeout(timeout);
        setVideoReady(true);
      };
      v.addEventListener("canplay", onReady, { once: true });
      v.addEventListener("loadeddata", onReady, { once: true });
      v.load();
      timeout = setTimeout(() => setVideoReady(true), 3000);
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
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section reveal"
      aria-label="The companion book"
    >
      <div className="container">
        {/* 50/50 grid — equal columns, vertically centered */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "center",
          }}
          className="social-proof-grid"
        >
          {/* ── LEFT: Book + copy + CTA ── */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-8">The companion book</p>

            {/* Book mockup */}
            <div className="mb-10" aria-label="Build a Life That Doesn't Break You — the companion book">
              <div
                style={{
                  transform: "rotate(-3deg)",
                  filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.55))",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                  width: "clamp(160px, 18vw, 260px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "rotate(0deg) scale(1.03)";
                  (e.currentTarget as HTMLElement).style.filter =
                    "drop-shadow(0 32px 64px rgba(212,175,100,0.25))";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "rotate(-3deg)";
                  (e.currentTarget as HTMLElement).style.filter =
                    "drop-shadow(0 24px 48px rgba(0,0,0,0.55))";
                }}
              >
                <img
                  src="/manus-storage/build_a_life_book_b9b9ff99.jpg"
                  alt="Build a Life That Doesn't Break You — the book this practice is built around, by DeWayne Woods"
                  style={{ width: "100%", borderRadius: "4px", display: "block" }}
                  loading="lazy"
                />
              </div>
            </div>

            <blockquote
              className="font-display mb-6"
              style={{
                fontSize: "clamp(18px, 2vw, 26px)",
                lineHeight: 1.4,
                color: "var(--lw-text)",
                fontStyle: "italic",
                fontWeight: 400,
                borderLeft: "2px solid var(--lw-amber)",
                paddingLeft: "1.25rem",
                maxWidth: "480px",
              }}
            >
              "The wisdom you carry becomes who you are — but only if you give it a place to land."
            </blockquote>

            <p
              style={{
                fontSize: "16px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.7,
                marginBottom: "0.75rem",
                maxWidth: "420px",
              }}
            >
              <em>Build a Life That Doesn't Break You</em> is the book this practice is built around. Written by DeWayne Woods. Coming soon.
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "420px",
              }}
            >
              The book gives you the philosophy. Lifewoven gives you the practice.{" "}
              <span style={{ color: "rgba(212,175,100,0.85)" }}>
                Founding members will receive a download the moment it releases.
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.lifewoven.click/audit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "15px" }}
              >
                Start with the Audit
              </a>
            </div>
          </div>

          {/* ── RIGHT: Woven figure reading video — fills the full column ── */}
          <div
            className="flex flex-col items-center"
            aria-label="A woven figure reading the companion book"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,100,0.15)",
                aspectRatio: "9/16",
                maxHeight: "70vh",
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  opacity: videoReady ? 1 : 0,
                  transition: "opacity 0.6s ease",
                }}
              >
                {/* Shorter 1.5MB clip first for fast mobile load */}
                <source
                  src="/manus-storage/knit_reading_1351_3d7b6a4b.mp4"
                  type="video/mp4"
                />
                {/* Longer alternate as fallback */}
                <source
                  src="/manus-storage/knit_reading_1420_6b0ed7e5.mp4"
                  type="video/mp4"
                />
              </video>
              {/* Dark gradient overlay so video edges blend into the card */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  background: "linear-gradient(to bottom, transparent 60%, rgba(10,10,30,0.35) 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Subtle amber glow ring */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  boxShadow: "inset 0 0 60px rgba(212,175,100,0.08)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Amber italic caption */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                color: "rgba(212,175,100,0.75)",
                textAlign: "center",
                marginTop: "1rem",
                letterSpacing: "0.01em",
                lineHeight: 1.5,
              }}
            >
              A Woven Self, reading the book that started this practice
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: stack columns */}
      <style>{`
        @media (max-width: 767px) {
          .social-proof-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
