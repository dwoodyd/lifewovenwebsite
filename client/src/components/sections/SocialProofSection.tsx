/**
 * SocialProofSection — "The book that started this"
 * Layout: Three-column on desktop — book mockup (larger) | quote + copy | woven lady reading video
 * The woven lady reading video (dark starfield, gold particles) sits to the right of the copy.
 * On mobile: stacks vertically — book → copy → video.
 */

import { useRef, useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal";

export default function SocialProofSection() {
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
      className="section reveal"
      aria-label="The book that started this"
    >
      <div className="container">
        {/* Three-column layout: book | quote | video */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

          {/* Column 1 — Book mockup (larger) */}
          <div
            className="flex-shrink-0 flex justify-center"
            style={{ width: "clamp(220px, 26vw, 340px)" }}
            aria-label="Before the Words — the book"
          >
            <div
              style={{
                transform: "rotate(-3deg)",
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.55))",
                transition: "transform 0.4s ease, filter 0.4s ease",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "rotate(0deg) scale(1.03)";
                (e.currentTarget as HTMLElement).style.filter =
                  "drop-shadow(0 40px 80px rgba(212,175,100,0.25))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "rotate(-3deg)";
                (e.currentTarget as HTMLElement).style.filter =
                  "drop-shadow(0 30px 60px rgba(0,0,0,0.55))";
              }}
            >
              <img
                src="/manus-storage/book_mockup_before_the_words_1778253763210_0a5dbe61.png"
                alt="Before the Words — the book that started Lifewoven"
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 2 — Quote + copy */}
          <div className="flex-1 min-w-0" style={{ maxWidth: "420px" }}>
            <p className="eyebrow mb-6">The book that started this</p>

            <blockquote
              className="font-display mb-6"
              style={{
                fontSize: "clamp(20px, 2.8vw, 32px)",
                lineHeight: 1.3,
                color: "var(--lw-text)",
                fontStyle: "italic",
                fontWeight: 400,
                borderLeft: "2px solid var(--lw-amber)",
                paddingLeft: "1.5rem",
              }}
            >
              "The wisdom you carry becomes who you are — but only if you give it a place to land."
            </blockquote>

            <p
              style={{
                fontSize: "15px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              <em>Before the Words</em> is the book that asked the question.
              Lifewoven is where the answer lives.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="btn-outline" style={{ fontSize: "14px" }}>
                Get the book →
              </a>
              <a href="#audit" className="btn-secondary" style={{ fontSize: "14px" }}>
                Start with the Audit
              </a>
            </div>
          </div>

          {/* Column 3 — Woven lady reading video */}
          <div
            className="flex-shrink-0 flex justify-center"
            style={{ width: "clamp(200px, 24vw, 320px)" }}
            aria-label="A woven figure reading Before the Words"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,100,0.12)",
                aspectRatio: "9/16",
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
                  borderRadius: "16px",
                  boxShadow: "inset 0 0 40px rgba(212,175,100,0.06)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
