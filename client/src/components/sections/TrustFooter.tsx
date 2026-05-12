/*
 * LIFEWOVEN Trust Row + PWA Install FAQ + Footer
 *
 * Trust row: "THE WISDOM TRADITIONS THAT MADE THIS POSSIBLE"
 * PWA FAQ: expandable accordion — "How do I install it on my phone?"
 * Footer: logo, nav links, copyright
 */
import { useState } from "react";
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

const pwaFaqs = [
  {
    q: "How do I install Lifewoven on my iPhone?",
    a: "Open lifewoven.click in Safari. Tap the Share button (the box with an arrow pointing up) at the bottom of the screen. Scroll down and tap 'Add to Home Screen.' Tap 'Add' in the top right. Lifewoven will appear on your home screen like any other app — no App Store required.",
  },
  {
    q: "How do I install it on Android?",
    a: "Open lifewoven.click in Chrome. Tap the three-dot menu (⋮) in the top right corner. Tap 'Add to Home screen' or 'Install app.' Confirm by tapping 'Add.' Lifewoven will appear on your home screen and in your app drawer.",
  },
  {
    q: "Does it work in a desktop browser too?",
    a: "Yes. Lifewoven runs in any modern browser — Chrome, Safari, Firefox, Edge. You can also install it as a desktop app from Chrome or Edge by clicking the install icon in the address bar.",
  },
  {
    q: "Will I get updates automatically?",
    a: "Yes. Because Lifewoven is a Progressive Web App (PWA), updates install silently in the background the next time you open it. You'll always have the latest version without visiting an app store.",
  },
  {
    q: "Is my data private?",
    a: "Your journal entries, check-ins, and Woven Self portraits are stored securely and are never sold or shared. During the beta, your data lives on encrypted servers. A full privacy policy is available at lifewoven.click/privacy.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--lw-border)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.1rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--lw-text)",
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "1px solid rgba(212,175,100,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#D4AF64",
            fontSize: "14px",
            fontWeight: 300,
            transition: "transform 0.25s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "14px",
            color: "var(--lw-text-muted)",
            lineHeight: 1.65,
            paddingBottom: "1.1rem",
            margin: 0,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

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

export function PWAInstallFAQ() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="reveal"
      aria-label="How to install Lifewoven"
      style={{
        padding: "clamp(48px, 8vw, 80px) 0",
        borderTop: "1px solid var(--lw-border)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            maxWidth: "760px",
            margin: "0 auto",
          }}
          className="md:grid-cols-[280px_1fr]"
        >
          {/* Left: heading */}
          <div>
            <p className="eyebrow mb-4">Install Guide</p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "var(--lw-text)",
                marginBottom: "0.75rem",
              }}
            >
              How to install it on your{" "}
              <em style={{ color: "#D4AF64", fontStyle: "italic" }}>phone.</em>
            </h2>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "14px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.6,
              }}
            >
              No app store. No download. Just open, install, and it lives on your home screen like any other app.
            </p>
          </div>

          {/* Right: FAQ accordion */}
          <div
            style={{
              borderTop: "1px solid var(--lw-border)",
            }}
          >
            {pwaFaqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
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
                src="/manus-storage/lifewoven_mark_25b1dd02.svg"
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
                { label: "The Audit", href: "https://app.lifewoven.click/audit" },
                { label: "Founding Members", href: "#pricing" },
                { label: "Install Guide", href: "#install-guide" },
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
