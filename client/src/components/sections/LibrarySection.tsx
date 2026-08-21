/*
 * LIFEWOVEN Library Section — "Nine practices. One Library. Yours with Oracle."
 *
 * Design: Deep indigo / Cormorant Garamond display, DM Sans body
 * Amber (#D4AF64) accents, warm ivory text on dark background
 *
 * Positioned between SocialProofSection (The Companion Book) and PricingSection (Founding Members)
 * 9-product grid with "Included with Oracle" badges
 * Two CTAs: "Get all of it with Oracle" + "Browse standalone"
 * Closing footnote about independent creation
 */

import { useReveal } from "../../hooks/useReveal";
import { SHOP_URL } from "../../config";

const products = [
  {
    icon: "📐",
    title: "Alignment Fundamentals",
    description: "The 5S Framework in practice — working across all six dimensions. Six weeks, one coherent life.",
    format: "6-week course",
    price: "$97",
  },
  {
    icon: "🌀",
    title: "The Alignment Current",
    description: "Advanced alignment practice. Move from peak experience to a way of being.",
    format: "4-week course",
    price: "$147",
  },
  {
    icon: "⚛️",
    title: "Identity in Motion",
    description: "Building for Decades — habit architecture for the whole self. Behavior science applied to who you are becoming.",
    format: "Course",
    price: "$127",
  },
  {
    icon: "🔍",
    title: "The Meaning Foundation",
    description: "Purpose, resilience, and the unshakeable why. Meaning is not found — it is made.",
    format: "4-week course",
    price: "$97",
  },
  {
    icon: "✍️",
    title: "Belief Rewrite Workbook",
    description: "Rewire your story in 30 days. Surface limiting beliefs and rewrite with evidence.",
    format: "PDF · 30 days",
    price: "$19",
  },
  {
    icon: "🧱",
    title: "The Identity Stack Workbook",
    description: "Design the habits that make you, you. Identity declaration through habit stack.",
    format: "PDF",
    price: "$22",
  },
  {
    icon: "🎧",
    title: "Morning Alignment Series",
    description: "Fifteen minutes, before the day asks anything of you. Seven complete sessions.",
    format: "7 audio sessions",
    price: "$37",
  },
  {
    icon: "🔄",
    title: "Reset Audio",
    description: "The full resilience protocol. For the specific moment when alignment feels distant.",
    format: "45-min audio",
    price: "$27",
  },
  {
    icon: "🃏",
    title: "Wisdom Card Deck",
    description: "One card. One week. One practice. Fifty-two insights from the wisdom traditions.",
    format: "PDF · 52 cards",
    price: "$34",
  },
];

export default function LibrarySection() {
  const sectionRef = useReveal(0.08) as React.RefObject<HTMLElement>;

  return (
    <section
      id="the-library"
      ref={sectionRef}
      className="section reveal"
      aria-label="The Lifewoven Library"
    >
      <div className="container">
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="eyebrow mb-4">The Library</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1.0,
              fontWeight: 600,
              color: "var(--lw-text)",
              marginBottom: "1.25rem",
            }}
          >
            Nine practices.{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "#D4AF64",
              }}
            >
              One Library. Yours with Oracle.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(15px, 1.8vw, 17px)",
              color: "var(--lw-text-muted)",
              maxWidth: "56ch",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Lifewoven members at the Oracle tier get the complete Library included — every course, every
            workbook, every audio session, and the Wisdom Card Deck. Combined standalone retail: $607.
            You can also buy any product standalone. Seekers save 30%. Explorers pay full price.
          </p>
        </div>

        {/* ── 9-product grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.title}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(212,175,100,0.15)",
                borderRadius: "16px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "border-color 0.25s ease, background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.35)";
                (e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.15)";
                (e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.03)";
              }}
            >
              {/* Icon + title row */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ fontSize: "22px", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>{product.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    className="font-display"
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "var(--lw-text)",
                      lineHeight: 1.25,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {product.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      color: "rgba(212,175,100,0.6)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {product.format}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.55)",
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {product.description}
              </p>

              {/* Price + badge row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginTop: "auto",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(245,240,232,0.35)",
                    textDecoration: "line-through",
                  }}
                >
                  {product.price} standalone
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#1A140E",
                    background: "#D4AF64",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Included with Oracle
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Two CTAs ── */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <a
            href="#pricing-form"
            onClick={(e) => { e.preventDefault(); document.getElementById("pricing-form")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.85rem 1.75rem",
              borderRadius: "9999px",
              background: "#D4AF64",
              color: "#1A140E",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
              cursor: "pointer",
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
            Get all of it with Oracle →
          </a>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.85rem 1.75rem",
              borderRadius: "9999px",
              border: "1px solid rgba(212,175,100,0.4)",
              color: "rgba(212,175,100,0.85)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#D4AF64";
              (e.currentTarget as HTMLElement).style.color = "#D4AF64";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,100,0.4)";
              (e.currentTarget as HTMLElement).style.color = "rgba(212,175,100,0.85)";
            }}
          >
            Browse standalone →
          </a>
        </div>

        {/* ── Closing footnote ── */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "rgba(245,240,232,0.25)",
            textAlign: "center",
            maxWidth: "60ch",
            margin: "0 auto",
            lineHeight: 1.65,
          }}
        >
          Lifewoven Library products are original creations, informed by wisdom traditions but independently
          produced. Not affiliated with, endorsed by, or licensed by any named author, teacher, or publisher.
        </p>
      </div>
    </section>
  );
}
