/**
 * SocialProofSection — "The book that started this"
 * Layout: 50/50 two-column grid on desktop — left: book + quote + CTAs | right: woven lady reading video
 * Both columns are equal visual weight. Video fills the full column height.
 * On mobile: stacks vertically — copy → video.
 */

import { useRef, useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal";

export default function SocialProofSection() {
  const sectionRef = useReveal(0.12) as React.RefObject<HTMLElement>;
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
      className="section reveal"
      aria-label="The book that started this"
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
          {/* ── LEFT: Book + copy + CTAs ── */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-8">The book that started this</p>

            {/* Book mockup */}
            <div className="mb-10" aria-label="Before the Words — the book">
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
                  src="/manus-storage/book_mockup_before_the_words_1778253763210_0a5dbe61.png"
                  alt="Before the Words — the book that started Lifewoven"
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
                marginBottom: "2rem",
                maxWidth: "420px",
              }}
            >
              <em>Before the Words</em> is the book that asked the question.
              Lifewoven is where the answer lives.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.soulengineer.online/book-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: "15px" }}
              >
                Get the book →
              </a>
              <a
                href="https://app.lifewoven.click/audit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: "15px" }}
              >
                Start with the Audit
              </a>
            </div>
          </div>

          {/* ── RIGHT: Woven lady reading video — fills the full column ── */}
          <div
            className="flex flex-col items-center"
            aria-label="A woven figure reading Before the Words"
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
              {/* Poster */}
              <img
                src="/manus-storage/poster_woven_reading_b555a69d.jpg"
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  opacity: videoReady ? 0 : 1,
                  transition: "opacity 0.6s ease",
                }}
              />
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster="/manus-storage/poster_woven_reading_b555a69d.jpg"
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
                <source
                  src="/manus-storage/woven_lady_reading_v64_9f719457.mp4"
                  type="video/mp4"
                />
              </video>
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
              A Woven Self, reading{" "}
              <em style={{ color: "rgba(212,175,100,0.95)" }}>Before the Words</em>
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
