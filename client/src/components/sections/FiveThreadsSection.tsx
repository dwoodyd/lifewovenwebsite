/*
 * LIFEWOVEN Five Threads Section — "Five dimensions. One life, woven."
 * 
 * The 5S Framework: State · Story · Standards · Strategy · Stewardship
 * Visual: Woven Self with five colored knit strands extending from her body
 * Interaction: Hover a strand to brighten it and reveal its caption
 */
import { useRef, useState } from "react";
import { useReveal } from "../../hooks/useReveal";

const threads = [
  {
    id: "state",
    label: "State",
    color: "#7BA7C9",
    description: "Emotional alignment, nervous system regulation, and the quality of your inner ground.",
    position: { top: "15%", right: "8%" },
    lineFrom: { x: 58, y: 28 },
    lineTo: { x: 88, y: 18 },
  },
  {
    id: "story",
    label: "Story",
    color: "#E9B96E",
    description: "The narrative you carry about who you are, what you're capable of, and where you're going.",
    position: { top: "38%", right: "5%" },
    lineFrom: { x: 62, y: 42 },
    lineTo: { x: 90, y: 38 },
  },
  {
    id: "standards",
    label: "Standards",
    color: "#7BC99A",
    description: "The values and principles that govern your choices — your inner compass.",
    position: { bottom: "30%", right: "8%" },
    lineFrom: { x: 60, y: 62 },
    lineTo: { x: 88, y: 68 },
  },
  {
    id: "strategy",
    label: "Strategy",
    color: "#9B9BE8",
    description: "How you move toward what matters — your systems, plans, and daily architecture.",
    position: { bottom: "30%", left: "8%" },
    lineFrom: { x: 40, y: 62 },
    lineTo: { x: 12, y: 68 },
  },
  {
    id: "stewardship",
    label: "Stewardship",
    color: "#C97B7B",
    description: "How you tend to what you've built — your relationships, resources, and legacy.",
    position: { top: "38%", left: "5%" },
    lineFrom: { x: 38, y: 42 },
    lineTo: { x: 10, y: 38 },
  },
];

export default function FiveThreadsSection() {
  const [activeThread, setActiveThread] = useState<string | null>(null);
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      id="the-five"
      ref={sectionRef}
      className="section reveal"
      aria-label="The Five Threads — 5S Framework"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">The 5S Framework</p>
          <h2
            className="font-display mb-6"
            style={{
              fontSize: "clamp(36px, 5.5vw, 80px)",
              lineHeight: 1.05,
              fontWeight: 600,
              color: "var(--lw-text)",
            }}
          >
            Five dimensions.{" "}
            <span className="highlight-amber">One life, woven.</span>
          </h2>
          <p style={{ color: "var(--lw-text-muted)", fontSize: "18px", lineHeight: 1.6 }}>
            Other tools work on one of these at a time. Yours are already entangled —
            your state shapes your story, your story sets your standards, your standards
            bend your strategy.
            <br /><br />
            <em style={{ color: "var(--lw-text)" }}>Hold them as one thing.</em>
          </p>
        </div>

        {/* Five Threads Diagram */}
        <div className="relative mx-auto" style={{ maxWidth: "800px" }}>
          {/* Desktop: figure with strands */}
          <div className="hidden md:block relative" style={{ height: "560px" }}>
            {/* SVG strands */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {threads.map((thread) => (
                <g key={thread.id}>
                  <line
                    x1={`${thread.lineFrom.x}%`}
                    y1={`${thread.lineFrom.y}%`}
                    x2={`${thread.lineTo.x}%`}
                    y2={`${thread.lineTo.y}%`}
                    stroke={thread.color}
                    strokeWidth="0.5"
                    strokeDasharray="2 1.5"
                    opacity={activeThread === null ? 0.7 : activeThread === thread.id ? 1 : 0.2}
                    style={{ transition: "opacity 0.2s ease" }}
                  />
                  <circle
                    cx={`${thread.lineTo.x}%`}
                    cy={`${thread.lineTo.y}%`}
                    r="0.8"
                    fill={thread.color}
                    opacity={activeThread === null ? 0.8 : activeThread === thread.id ? 1 : 0.2}
                    style={{ transition: "opacity 0.2s ease" }}
                  />
                </g>
              ))}
            </svg>

            {/* Central figure */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 2 }}
            >
              <img
                src="/manus-storage/lumen_woc_1_1778193478991_f73f2f0c.jpg"
                alt="A Woven Self — the five threads extend from her"
                className="woven-figure"
                style={{
                  height: "480px",
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Thread labels */}
            {threads.map((thread) => (
              <button
                key={thread.id}
                className="absolute thread-strand"
                style={{
                  ...thread.position,
                  zIndex: 3,
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
                onMouseEnter={() => setActiveThread(thread.id)}
                onMouseLeave={() => setActiveThread(null)}
                onFocus={() => setActiveThread(thread.id)}
                onBlur={() => setActiveThread(null)}
                aria-label={`${thread.label}: ${thread.description}`}
              >
                <div
                  className="flex flex-col gap-1 items-start"
                  style={{
                    opacity: activeThread === null ? 1 : activeThread === thread.id ? 1 : 0.3,
                    transition: "opacity 0.2s ease",
                    textAlign: thread.position.right ? "right" : "left",
                    alignItems: thread.position.right ? "flex-end" : "flex-start",
                  }}
                >
                  <span
                    className="font-display font-semibold"
                    style={{
                      fontSize: "20px",
                      color: thread.color,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {thread.label}
                  </span>
                  {activeThread === thread.id && (
                    <p
                      className="text-sm"
                      style={{
                        color: "var(--lw-text-muted)",
                        maxWidth: "180px",
                        lineHeight: 1.4,
                        fontSize: "13px",
                        animation: "fadeIn 0.2s ease",
                      }}
                    >
                      {thread.description}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="md:hidden flex flex-col gap-4">
            <div className="flex justify-center mb-6">
              <img
                src="/manus-storage/lumen_woc_1_1778193478991_f73f2f0c.jpg"
                alt="A Woven Self"
                className="woven-figure rounded-lg"
                style={{ height: "280px", width: "auto", objectFit: "contain" }}
              />
            </div>
            {threads.map((thread) => (
              <div
                key={thread.id}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  background: "var(--lw-bg-elevated)",
                  border: `1px solid ${thread.color}33`,
                }}
              >
                <div
                  className="w-1 self-stretch rounded-full flex-shrink-0"
                  style={{ background: thread.color }}
                />
                <div>
                  <h3
                    className="font-display font-semibold mb-1"
                    style={{ color: thread.color, fontSize: "18px" }}
                  >
                    {thread.label}
                  </h3>
                  <p style={{ color: "var(--lw-text-muted)", fontSize: "14px", lineHeight: 1.5 }}>
                    {thread.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a href="#audit" className="btn-primary" style={{ fontSize: "16px", padding: "0.9rem 2.25rem" }}>
          Take the Audit →
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
