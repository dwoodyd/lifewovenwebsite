/*
 * LIFEWOVEN App Preview Section — "What you'll see when you open it"
 *
 * Design philosophy: Deep indigo / Cormorant Garamond display, Lato body
 * Amber (#D4AF64) accents, warm ivory text on dark background
 *
 * Desktop: 2×2 grid + 1 centered below (5 total)
 * Mobile: horizontal snap-scroll carousel, one card per view
 * Each card shows the mockup image with its headline and sub-caption
 */

import { useRef, useState } from "react";

const screens = [
  {
    src: "/manus-storage/mockup_dashboard_e54848b7.png",
    alt: "Lifewoven dashboard showing daily greeting, beta badge, next-step check-in card, the 5S Framework chips for State, Story, Standards, Strategy, and Stewardship, and Today's Rhythms with morning pages task.",
    headline: "Your whole life,",
    headlineItalic: "woven.",
    caption: "One screen. Five doors in. State, Story, Standards, Strategy, Stewardship.",
  },
  {
    src: "/manus-storage/mockup_dashboard2_b1e088da.webp",
    alt: "Lifewoven Ground Check screen asking 'Where are you right now?' with the subtitle 'Seven honest questions. No score. No judgment.' showing question 1 of 7 about how settled the body feels, with answer options on a 0-4 scale.",
    headline: "Good morning,",
    headlineItalic: "DeWayne.",
    caption: "Your daily check-in, your rhythms, and your next step — all in one place.",
  },
  {
    src: "/manus-storage/mockup_mood_f50b957e.png",
    alt: "Lifewoven Mood Rhythm Chart showing today's mood log with a 1-10 slider currently at 5 'Neutral', a Cycle Analysis section reading '0 of 14 days', and an explanatory note crediting research by Professor Rex Hersey at the University of Pennsylvania and Professor Edward R. Dewey at the Foundation for the Study of Cycles.",
    headline: "Your moods aren't",
    headlineItalic: "random.",
    caption: "Track 14 days. Reveal your cycle. Predict your next high and low.",
  },
  {
    src: "/manus-storage/mockup_pathway_d951a5f2.png",
    alt: "Lifewoven Pathway screen listing daily practices: Enter the Ground (2-5 min), Return to the Ground (30 sec to 2 min), The State You Enter (3 min), Living as Heard (5-10 min), and Thanking From There (2 min), each with a one-line description.",
    headline: "A path for the",
    headlineItalic: "whole day.",
    caption: "Enter the ground. Return to it. Live as heard. Close the gap.",
  },
  {
    src: "/manus-storage/mockup_state_5b90a472.png",
    alt: "Lifewoven practices library listing four practice types: Align (Daily Grounding, 5-10 min), Resonance (Advanced Alignment Practice, 20-30 min), Uplift (Emotional Set-Point Shifting, 15-20 min), and Flow (Visualization & Creative Imagination).",
    headline: "Meet yourself",
    headlineItalic: "where you are.",
    caption: "Align. Resonance. Uplift. Flow. Four doorways into the practice.",
  },
];

function MockupCard({ screen, index }: { screen: typeof screens[0]; index: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        background: "rgba(245,240,232,0.04)",
        border: "1px solid rgba(212,175,100,0.15)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      className="mockup-card"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 24px 60px rgba(212,175,100,0.12), 0 8px 24px rgba(0,0,0,0.35)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "9/16",
          background: "rgba(15,16,35,0.6)",
          overflow: "hidden",
        }}
      >
        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "2px solid rgba(212,175,100,0.3)",
                borderTopColor: "#D4AF64",
                animation: "spin 0.8s linear infinite",
              }}
            />
          </div>
        )}
        <img
          src={screen.src}
          alt={screen.alt}
          onLoad={() => setLoaded(true)}
          loading={index < 2 ? "eager" : "lazy"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>

      {/* Caption bar */}
      <div
        style={{
          padding: "1.25rem 1.5rem 1.5rem",
          background: "rgba(15,16,35,0.95)",
          backdropFilter: "blur(8px)",
        }}
      >
        <p
          className="font-display"
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 600,
            lineHeight: 1.15,
            color: "var(--lw-text)",
            marginBottom: "0.4rem",
          }}
        >
          {screen.headline}{" "}
          <em style={{ color: "#D4AF64", fontStyle: "italic" }}>{screen.headlineItalic}</em>
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            color: "var(--lw-text-muted)",
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          {screen.caption}
        </p>
      </div>
    </div>
  );
}

export default function AppPreviewSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveSlide(index);
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(newIndex, screens.length - 1));
  };

  return (
    <section
      className="section reveal"
      aria-label="App screen previews — what you'll see when you open Lifewoven"
      style={{ overflow: "hidden" }}
    >
      {/* Header */}
      <div className="container mb-12">
        <p className="eyebrow mb-4">Inside the App</p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 1.05,
            fontWeight: 600,
            color: "var(--lw-text)",
            maxWidth: "640px",
            marginBottom: "0.75rem",
          }}
        >
          What you'll see when you open it.
        </h2>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--lw-text-muted)",
            maxWidth: "52ch",
            lineHeight: 1.5,
          }}
        >
          Five screens. One practice. Everything you've gathered, finally given a place to land.
        </p>
      </div>

      {/* ── DESKTOP: 2×2 + 1 grid ── */}
      <div
        className="container"
        style={{
          display: "none",
        }}
        id="app-preview-desktop"
      >
        {/* Top row: 2 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "2rem",
            maxWidth: "900px",
            margin: "0 auto 2rem",
          }}
        >
          {screens.slice(0, 2).map((screen, i) => (
            <MockupCard key={i} screen={screen} index={i} />
          ))}
        </div>
        {/* Middle row: 2 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            maxWidth: "900px",
            margin: "0 auto 2rem",
          }}
        >
          {screens.slice(2, 4).map((screen, i) => (
            <MockupCard key={i + 2} screen={screen} index={i + 2} />
          ))}
        </div>
        {/* Bottom row: 1 centered card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            maxWidth: "420px",
            margin: "0 auto",
          }}
        >
          <MockupCard screen={screens[4]} index={4} />
        </div>
      </div>

      {/* ── MOBILE: horizontal snap carousel ── */}
      <div
        id="app-preview-mobile"
        style={{
          display: "block",
          position: "relative",
        }}
      >
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "32px",
            background: "linear-gradient(to right, var(--lw-bg), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "32px",
            background: "linear-gradient(to left, var(--lw-bg), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          ref={carouselRef}
          onScroll={handleScroll}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            gap: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingBottom: "1rem",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          className="carousel-hide-scrollbar"
        >
          {screens.map((screen, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "min(72vw, 300px)",
                scrollSnapAlign: "center",
              }}
            >
              <MockupCard screen={screen} index={i} />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "1.25rem",
          }}
        >
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to screen ${i + 1}`}
              style={{
                width: i === activeSlide ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === activeSlide ? "#D4AF64" : "rgba(212,175,100,0.3)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Responsive toggle: show desktop grid on md+, show mobile carousel on sm */}
      <style>{`
        @media (min-width: 768px) {
          #app-preview-desktop { display: block !important; }
          #app-preview-mobile { display: none !important; }
        }
        .carousel-hide-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
