/*
 * LIFEWOVEN Nav — Monastery Library at Dusk
 * Transparent over hero, frosted glass on scroll
 */
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 btn-primary text-sm z-50"
      >
        Skip to content
      </a>

      {/* Logo */}
      <a href="/" className="flex items-center gap-2.5 group" aria-label="Lifewoven home">
        <img
          src="/manus-storage/lifewoven_mark_25b1dd02.svg"
          alt="Lifewoven woven mark"
          className="w-7 h-7 opacity-90 group-hover:opacity-100 transition-opacity"
          style={{ filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(1.1)" }}
        />
        <span
          className="font-display text-xl font-semibold tracking-tight"
          style={{ color: "var(--lw-text)", fontFamily: "var(--font-display)" }}
        >
          Lifewoven.
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#the-five" className="text-sm font-medium transition-colors hover:text-amber-400"
           style={{ color: "var(--lw-text-muted)" }}>
          The Five
        </a>
        <a href="https://app.lifewoven.click/audit" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-amber-400"
           style={{ color: "var(--lw-text-muted)" }}>
          The Audit
        </a>
        <a href="#pricing" className="text-sm font-medium transition-colors hover:text-amber-400"
           style={{ color: "var(--lw-text-muted)" }}>
          Founding Members
        </a>
        <a href="https://app.lifewoven.click/signin" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-amber-400"
           style={{ color: "var(--lw-text-muted)" }}>
          Sign in
        </a>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <a href="https://app.lifewoven.click/audit" target="_blank" rel="noopener noreferrer" className="btn-primary hidden md:inline-flex">
          Take the Audit
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                style={{ background: "var(--lw-text)" }} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                style={{ background: "var(--lw-text)" }} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                style={{ background: "var(--lw-text)" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-0 md:hidden"
          style={{
            background: "rgba(15, 16, 35, 0.97)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--lw-border)",
          }}
        >
          {[
            { label: "The Five", href: "#the-five", external: false },
            { label: "The Audit", href: "https://app.lifewoven.click/audit", external: true },
            { label: "Founding Members", href: "#pricing", external: false },
            { label: "Sign in", href: "https://app.lifewoven.click/signin", external: true },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="px-6 py-4 text-base font-medium border-b transition-colors hover:text-amber-400"
              style={{
                color: "var(--lw-text-muted)",
                borderColor: "var(--lw-border)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 py-4">
            <a href="https://app.lifewoven.click/audit" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center" onClick={() => setMenuOpen(false)}>
              Take the Audit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
