/*
 * LIFEWOVEN Nav — compact, persistent conversion header.
 */
import { useEffect, useState } from "react";
import { SIGNIN_URL, SIGNUP_URL } from "../config";

const NAV_ITEMS = [
  { label: "The Method", href: "#the-method", external: false },
  { label: "The Library", href: "#the-library", external: false },
  { label: "Pathways", href: "#pathways", external: false },
  { label: "Membership", href: "#pricing", external: false },
  { label: "Sign in", href: SIGNIN_URL, external: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 btn-primary text-sm z-50"
      >
        Skip to content
      </a>

      <a href="/" className="flex items-center gap-2.5 group shrink-0" aria-label="Lifewoven home">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-md border font-bold transition-opacity group-hover:opacity-100"
          style={{ borderColor: "rgba(212,175,100,0.8)", color: "#D4AF64", background: "rgba(212,175,100,0.14)", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.04em", lineHeight: 1 }}
        >
          LW
        </span>
        <span className="font-display text-xl font-semibold tracking-tight" style={{ color: "var(--lw-text)", fontFamily: "var(--font-display)" }}>
          Lifewoven.
        </span>
      </a>

      <div className="hidden xl:flex min-w-0 items-center gap-5 whitespace-nowrap">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="text-[13px] font-medium transition-colors hover:text-amber-400"
            style={{ color: "var(--lw-text-muted)" }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm whitespace-nowrap">
          Start free
        </a>
        <button
          className="xl:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--lw-text)" }} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--lw-text)" }} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--lw-text)" }} />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 flex flex-col gap-0 xl:hidden" style={{ background: "rgba(26, 20, 14, 0.98)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--lw-border)" }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="px-6 py-4 text-base font-medium border-b transition-colors hover:text-amber-400"
              style={{ color: "var(--lw-text-muted)", borderColor: "var(--lw-border)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 py-4">
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center" onClick={() => setMenuOpen(false)}>
              Start free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
