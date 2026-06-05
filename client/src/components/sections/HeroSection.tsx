/**
 * HeroSection — Full-bleed video background: man holding a book to his chest
 * Design: Deep indigo overlay on warm dark-navy video. Copy floats left-aligned over the video.
 * Video: Man_holding_book_stillness — knit elder figure, dark starfield background
 * Typography: Cormorant Garamond display, DM Sans body
 * Palette: cream/ivory text, amber "woven" italic, indigo overlay gradient
 */

import { useEffect, useRef, useState } from "react";
import { AUDIT_URL } from "../../config";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
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
      // canplay fires earlier than canplaythrough — better for iOS
      v.addEventListener("canplay", onReady, { once: true });
      v.addEventListener("loadeddata", onReady, { once: true });
      v.load();
      // Fallback: if video hasn't signalled ready in 3s, show it anyway
      timeout = setTimeout(() => setVideoReady(true), 3000);
    };

    // Hero is above the fold — load immediately but defer one tick
    const raf = requestAnimationFrame(startVideo);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero"
    >
      {/* ── Full-bleed video ── */}
      <div className="absolute inset-0 z-0">
        {/* Poster / fallback */}
        <img
          src="/manus-storage/poster_build_a_life_hero_c0872244.jpg"
          alt="A Woven Self, reading Build a Life That Does Not Break You"
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
          poster="/manus-storage/poster_build_a_life_hero_c0872244.jpg"
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
            src="/manus-storage/man_holding_book_b43e91a0.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlay — left side darker for legibility, right side more transparent */}
        <div
          className="absolute inset-0 hero-gradient-overlay"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,10,30,0.88) 0%, rgba(10,10,30,0.72) 45%, rgba(10,10,30,0.25) 75%, rgba(10,10,30,0.10) 100%)",
          }}
        />
        {/* Mobile-only: stronger full overlay so copy is always legible on narrow viewports */}
        <style>{`
          @media (max-width: 640px) {
            .hero-gradient-overlay {
              background: linear-gradient(
                to bottom,
                rgba(10,10,30,0.75) 0%,
                rgba(10,10,30,0.60) 50%,
                rgba(10,10,30,0.80) 100%
              ) !important;
            }
          }
        `}</style>
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "18%",
            background:
              "linear-gradient(to bottom, transparent, rgba(10,10,30,0.95))",
          }}
        />
      </div>

      {/* ── Nav spacer ── */}
      <div className="relative z-10 pt-20 md:pt-24" />

      {/* ── Copy — floats left over video ── */}
      <div className="relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(100svh - 5rem)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="max-w-xl lg:max-w-2xl">

            {/* Eyebrow */}
            <p
              className="uppercase font-medium mb-6"
              style={{ color: "rgba(212,175,100,0.9)", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", letterSpacing: "0.18em" }}
            >
              For people who've read the books
            </p>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(3rem, 7vw, 6rem)",
                lineHeight: 1.0,
                color: "#F5F0E8",
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
              }}
            >
              You have the books.
              <br />
              <span style={{ fontWeight: 300, color: "rgba(245,240,232,0.7)" }}>
                Something still
              </span>
              <br />
              <span style={{ fontWeight: 300, color: "rgba(245,240,232,0.7)" }}>
                isn't{" "}
              </span>
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: "#D4AF64",
                  background: "rgba(212,175,100,0.12)",
                  padding: "0 0.12em",
                  borderRadius: "2px",
                }}
              >
                woven.
              </em>
            </h1>

            {/* Sub */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "rgba(245,240,232,0.78)",
                lineHeight: 1.65,
                marginBottom: "2.5rem",
                maxWidth: "38ch",
              }}
            >
              The wisdom you've already gathered doesn't need more reading.
              It needs a place to land.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={AUDIT_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#D4AF64",
                  color: "#0F1023",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.04em",
                  padding: "0.85rem 2rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#c49d4e";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#D4AF64";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Take the Audit →
              </a>
              <a
                href="#the-five"
                style={{
                  display: "inline-block",
                  color: "rgba(245,240,232,0.7)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.9rem",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(245,240,232,0.3)",
                  paddingBottom: "2px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#F5F0E8";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.7)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.3)";
                }}
              >
                I'm tired of starting over.
              </a>
            </div>

            {/* PWA descriptor — quiet clarifier, not a feature box */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "rgba(245,240,232,0.55)",
                marginTop: "1.25rem",
                lineHeight: 1.5,
                maxWidth: "38ch",
              }}
            >
              A daily practice — in your pocket or on the web.
              Install on iOS, Android, or open in any browser.
            </p>
            {/* Oracle library chip — small, non-dominant */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "rgba(212,175,100,0.55)",
                marginTop: "1rem",
                lineHeight: 1.5,
                maxWidth: "44ch",
              }}
            >
              Founding members at Oracle tier get the complete Library — 9 products, $607 retail value, included.
            </p>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10"
        style={{ transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            opacity: 0.5,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "#F5F0E8",
              textTransform: "uppercase",
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #F5F0E8, transparent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
