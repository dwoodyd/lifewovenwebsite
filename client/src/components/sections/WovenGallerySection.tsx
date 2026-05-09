/*
 * LIFEWOVEN Woven Gallery Section — "Portraits of the woven."
 * 
 * Horizontal marquee of Woven Selves — symbolic portraits / archetypes
 * Hover/tap reveals archetype label + one-sentence reveal
 * Desktop: label appears on hover (150ms fade). Mobile: tap to show, tap-outside to dismiss.
 * Animation: soft fade-in, not a hard pop
 */
import { useState, useRef, useEffect } from "react";

const archetypes = [
  {
    src: "/manus-storage/lumen_woc_1_1778193478991_f73f2f0c.jpg",
    alt: "A woven figure — professional woman with natural hair",
    label: "The Returner",
    reveal: "Started six times. This is the time it sticks — because something has to.",
  },
  {
    src: "/manus-storage/lumen_father_1_1778193873573_9355cd63.jpg",
    alt: "A woven figure — elder man in amber cardigan",
    label: "The Seeker",
    reveal: "Has read everything. Is finally ready to live one of them.",
  },
  {
    src: "/manus-storage/lumen_woc_2_1778193490329_cee6e02b.jpg",
    alt: "A woven figure — woman in contemplative pose",
    label: "The Builder",
    reveal: "Putting down the next layer of who they're becoming, one quiet day at a time.",
  },
  {
    src: "/manus-storage/lumen_woc_3_1778193506312_54a84517.jpg",
    alt: "A woven figure — woman with reading shawl",
    label: "The Witness",
    reveal: "No longer running from the story. Sitting with it. Letting it speak.",
  },
  {
    src: "/manus-storage/lumen_father_3_1778193897365_5483f19d.jpg",
    alt: "A woven figure — elder in knit layers",
    label: "The Elder",
    reveal: "Has lived enough to know what matters. Now the work is to honor it.",
  },
  {
    src: "/manus-storage/lumen_mature_peek_side_1778118410062_eab63167.jpg",
    alt: "A woven figure — mature figure in profile",
    label: "The Bearer",
    reveal: "Carrying something — a loss, a name, a debt of love. The thread holds it.",
  },
  {
    src: "/manus-storage/lumen_group_v3_1_1778194988941_5a78e1c5.jpg",
    alt: "A woven figure — the beginner again",
    label: "The Beginner Again",
    reveal: "Forty-three. Starting over. Not afraid this time. Mostly.",
  },
  {
    src: "/manus-storage/lumen_group_v3_2_1778195002242_1b1e2e6b.jpg",
    alt: "A woven figure — the one who almost stopped",
    label: "The One Who Almost Stopped",
    reveal: "Came back the next morning anyway. That's the whole practice.",
  },
];

// Duplicate for seamless loop
const allArchetypes = [...archetypes, ...archetypes];

function ArchetypeCard({
  archetype,
  activeIndex,
  cardIndex,
  onActivate,
  onDeactivate,
}: {
  archetype: typeof archetypes[0];
  activeIndex: number | null;
  cardIndex: number;
  onActivate: (i: number) => void;
  onDeactivate: () => void;
}) {
  const isActive = activeIndex === cardIndex;

  return (
    <div
      className="gallery-figure"
      style={{
        width: "220px",
        flexShrink: 0,
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={() => onActivate(cardIndex)}
      onMouseLeave={onDeactivate}
      onClick={() => (isActive ? onDeactivate() : onActivate(cardIndex))}
      role="button"
      tabIndex={0}
      aria-label={`${archetype.label}: ${archetype.reveal}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          isActive ? onDeactivate() : onActivate(cardIndex);
        }
      }}
    >
      {/* Figure image */}
      <img
        src={archetype.src}
        alt={archetype.alt}
        className="woven-figure"
        style={{
          width: "220px",
          height: "300px",
          objectFit: "cover",
          objectPosition: "top center",
          borderRadius: "12px",
          display: "block",
          transition: "filter 0.2s ease",
          filter: isActive ? "brightness(0.65)" : "brightness(1)",
        }}
        loading="lazy"
      />

      {/* Always-visible small-caps label at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0.6rem 0.75rem",
          background: "linear-gradient(to top, rgba(10,10,30,0.75) 0%, transparent 100%)",
          borderRadius: "0 0 12px 12px",
        }}
      >
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(212,175,100,0.9)",
            margin: 0,
          }}
        >
          {archetype.label}
        </p>
      </div>

      {/* Hover/tap reveal overlay */}
      <div
        aria-hidden={!isActive}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.25rem",
          textAlign: "center",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.18s ease",
          pointerEvents: isActive ? "auto" : "none",
          background: "rgba(10,10,30,0.55)",
          backdropFilter: "blur(2px)",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "15px",
            color: "#F5F0E8",
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          {archetype.reveal}
        </p>
      </div>
    </div>
  );
}

export default function WovenGallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Tap-outside dismissal on mobile
  useEffect(() => {
    if (activeIndex === null) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (sectionRef.current && !sectionRef.current.contains(target)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="section reveal"
      aria-label="Portraits of the woven — symbolic archetypes"
      style={{ overflow: "hidden" }}
    >
      {/* Header */}
      <div className="container mb-12">
        <p className="eyebrow mb-4">The Woven</p>
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
          Portraits of the woven.
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
          These aren't before-and-afters. These are archetypes — the people who keep
          returning to the practice.{" "}
          <span style={{ color: "rgba(212,175,100,0.7)" }}>
            Hover one to meet them.
          </span>
        </p>
      </div>

      {/* Marquee */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
        aria-label="Gallery of Woven Selves — hover or tap to meet each archetype"
      >
        <div className="overflow-hidden">
          <div
            className="marquee-track"
            style={{
              gap: "1.5rem",
              paddingBottom: "1rem",
              // Pause marquee when any card is active
              animationPlayState: activeIndex !== null ? "paused" : "running",
            }}
          >
            {allArchetypes.map((archetype, i) => (
              <ArchetypeCard
                key={i}
                archetype={archetype}
                cardIndex={i}
                activeIndex={activeIndex}
                onActivate={setActiveIndex}
                onDeactivate={() => setActiveIndex(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
