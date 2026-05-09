/*
 * LIFEWOVEN Trust Row + Footer
 * 
 * Trust row: "THE WISDOM TRADITIONS THAT MADE THIS POSSIBLE"
 * Chips: Logotherapy · Atomic Habits · 7 Habits · Daring Greatly · 22 Levels · ACT · IFS · Stoic ethics
 */
import { useReveal } from "../../hooks/useReveal";

const trustChips = [
  "Logotherapy",
  "Atomic Habits",
  "7 Habits",
  "Daring Greatly",
  "22 Levels",
  "ACT",
  "IFS",
  "Stoic ethics",
];

export function TrustRow() {
  const sectionRef = useReveal(0.15) as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="reveal"
      aria-label="The wisdom traditions"
      style={{
        padding: "clamp(48px, 8vw, 80px) 0",
        borderTop: "1px solid var(--lw-border)",
      }}
    >
      <div className="container">
        <div className="text-center">
          <p
            className="eyebrow mb-8"
            style={{ letterSpacing: "0.18em" }}
          >
            The wisdom traditions that made this possible
          </p>
          <div
            className="flex flex-wrap justify-center gap-3"
            role="list"
            aria-label="Wisdom traditions"
          >
            {trustChips.map((chip) => (
              <span key={chip} className="trust-chip" role="listitem">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--lw-border)",
        padding: "clamp(32px, 5vw, 56px) 0",
      }}
      role="contentinfo"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/manus-storage/convert-this-uploaded-lifewoven-logo-into-a-pure-m_ad4b74df.svg"
                alt="Lifewoven"
                className="w-6 h-6"
                style={{ filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.9)" }}
              />
              <span
                className="font-display font-semibold"
                style={{ fontSize: "18px", color: "var(--lw-text)" }}
              >
                Lifewoven.
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "var(--lw-text-muted)",
                fontStyle: "italic",
                fontFamily: "var(--font-display)",
              }}
            >
              The wisdom you carry becomes who you are.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <div className="flex flex-wrap gap-6">
              {[
                { label: "The Five", href: "#the-five" },
                { label: "The Audit", href: "#audit" },
                { label: "Founding Members", href: "#pricing" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    color: "var(--lw-text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--lw-text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--lw-text-muted)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Copyright */}
          <p
            style={{
              fontSize: "12px",
              color: "var(--lw-text-muted)",
              opacity: 0.6,
            }}
          >
            © {new Date().getFullYear()} Lifewoven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
