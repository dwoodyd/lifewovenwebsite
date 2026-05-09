/**
 * SocialProofSection — "The book that started this"
 * Layout: Two-column on desktop — left: book + quote + CTAs | right: woven lady reading video (tall)
 * The video is the visual hero of this section — large, portrait, commanding.
 * On mobile: stacks vertically — book → copy → video.
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
        {/* Two-column layout: left content | right video — mirrors AuditSection pattern */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left column — book + quote + copy + CTAs */}
          <div className="flex-1 flex flex-col justify-center" style={{ minWidth: 0, maxWidth: "540px" }}>

            <p className="eyebrow mb-8">The book that started this</p>

            {/* Book mockup */}
            <div
              className="flex justify-start mb-10"
              aria-label="Before the Words — the book"
            >
              <div
                style={{
                  transform: "rotate(-3deg)",
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.55))",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                  width: "clamp(180px, 22vw, 300px)",
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
                  style={{ width: "100%", borderRadius: "4px", display: "block" }}
                  loading="lazy"
                />
              </div>
            </div>

            <blockquote
              className="font-display mb-6"
              style={{
                fontSize: "clamp(22px, 2.6vw, 34px)",
                lineHeight: 1.35,
                color: "var(--lw-text)",
                fontStyle: "italic",
                fontWeight: 400,
                borderLeft: "2px solid var(--lw-amber)",
                paddingLeft: "1.5rem",
                maxWidth: "520px",
              }}
            >
              "The wisdom you carry becomes who you are — but only if you give it a place to land."
            </blockquote>

            <p
              style={{
                fontSize: "17px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "460px",
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
              <a href="https://lifewoven.click" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "15px" }}>
                Start with the Audit
              </a>
            </div>
          </div>

          {/* Right column — Woven lady reading video (tall, commanding) */}
          <div
            className="flex-shrink-0 flex flex-col items-center justify-center w-full lg:w-auto"
            style={{ maxWidth: "380px", margin: "0 auto" }}
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
                fontSize: "15px",
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
    </section>
  );
}
