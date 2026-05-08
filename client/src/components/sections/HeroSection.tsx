/*
 * LIFEWOVEN Hero Section — "A Woven Self meets the visitor"
 * 
 * Layout: Woven Self figure right 40%, copy left
 * Copy: "You have the books. Something still isn't woven."
 * Animation: Figure fades in, then text staggers in
 */
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);
  const [figureVisible, setFigureVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // Stagger: figure first, then text
    const t1 = setTimeout(() => setFigureVisible(true), 200);
    const t2 = setTimeout(() => setTextVisible(true), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section
      id="main-content"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
      aria-label="Hero — For people who've read the books"
    >
      {/* Ambient radial glow behind figure */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(233,185,110,0.06) 0%, transparent 70%)",
          right: "5%",
        }}
      />

      {/* Slow-rotating brand mark behind figure */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          right: "3%",
          width: "520px",
          height: "520px",
          opacity: 0.06,
          animation: "brand-rotate 60s linear infinite",
        }}
      >
        <img
          src="/manus-storage/convert-this-uploaded-lifewoven-logo-into-a-pure-m_ad4b74df.svg"
          alt=""
          className="w-full h-full"
          style={{ filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg)" }}
        />
      </div>

      <div className="container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-0 min-h-[calc(100vh-80px)] py-16 lg:py-0">

          {/* Left — Copy */}
          <div
            className="flex-1 max-w-[600px] lg:pb-24"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* Eyebrow */}
            <p className="eyebrow mb-6">For people who've read the books</p>

            {/* H1 */}
            <h1
              className="font-display mb-6"
              style={{
                fontSize: "clamp(48px, 7.5vw, 120px)",
                lineHeight: 1.02,
                fontWeight: 600,
                color: "var(--lw-text)",
                letterSpacing: "-0.01em",
              }}
            >
              You have the books.
              <br />
              Something still isn't{" "}
              <span className="highlight-amber">woven.</span>
            </h1>

            {/* Body */}
            <p
              className="mb-10"
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "var(--lw-text-muted)",
                maxWidth: "480px",
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.9s 0.15s cubic-bezier(0.16,1,0.3,1), transform 0.9s 0.15s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              The wisdom you've already gathered doesn't need more reading.
              It needs a place to land.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-6"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.9s 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.9s 0.3s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <a href="#audit" className="btn-primary">
                Take the Audit →
              </a>
              <a href="#" className="btn-secondary">
                I'm tired of starting over.
              </a>
            </div>
          </div>

          {/* Right — Woven Self figure (video with image fallback) */}
          <div
            className="relative flex-shrink-0 flex items-end justify-center lg:absolute lg:right-0 lg:bottom-0"
            style={{
              width: "clamp(300px, 42vw, 580px)",
              height: "clamp(300px, 65vh, 680px)",
              overflow: "hidden",
              opacity: figureVisible ? 1 : 0,
              transform: figureVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)",
            }}
            aria-hidden="true"
          >
            {/* Stacked container: image always visible, video overlays when ready */}
            <div className="relative" style={{ width: "100%", height: "100%" }}>
              {/* Fallback image — always rendered */}
              <img
                src="/manus-storage/lumen_woc_1_1778193478991_f73f2f0c.jpg"
                alt="A Woven Self — knit figure holding stillness"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  opacity: videoReady ? 0 : 1,
                  transition: "opacity 0.8s ease",
                }}
                loading="eager"
              />
              {/* Video — positioned absolutely over image, fades in when ready */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/manus-storage/mascot_poster_68af7f00.jpg"
                onCanPlay={() => setVideoReady(true)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 60%",
                  opacity: videoReady ? 1 : 0,
                  transition: "opacity 0.8s ease",
                }}
              >
                <source src="/manus-storage/Woven_mascot_floats_center_202605071646_b9e2ec92.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: textVisible ? 0.5 : 0,
          transition: "opacity 1s 1s ease",
        }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--lw-text-muted)", fontSize: "10px" }}>
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, var(--lw-text-muted), transparent)",
            animation: "scroll-pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes brand-rotate {
          from { transform: translateY(-50%) rotate(0deg); }
          to { transform: translateY(-50%) rotate(360deg); }
        }
        @keyframes scroll-pulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}
