/*
 * LIFEWOVEN LegalPage — shared layout for Privacy & Terms
 * On-brand: deep indigo ground, Cormorant display, DM Sans body, amber accents.
 */
import { useEffect } from "react";
import { Link } from "wouter";

export interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalPageProps {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "var(--lw-bg)", color: "var(--lw-text)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "clamp(2rem, 8vw, 6rem) 1.5rem 5rem" }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--lw-amber)",
            textDecoration: "none",
          }}
        >
          ← Lifewoven
        </Link>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 600,
            lineHeight: 1.05,
            margin: "1.5rem 0 0.75rem",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--lw-text-muted)",
            marginBottom: "2.5rem",
          }}
        >
          Last updated: {updated}
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            lineHeight: 1.7,
            color: "rgba(240,232,216,0.82)",
            marginBottom: "2.5rem",
          }}
        >
          {intro}
        </p>

        {sections.map((s) => (
          <section key={s.heading} style={{ marginBottom: "2.25rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: "0.9rem",
              }}
            >
              {s.heading}
            </h2>
            {s.body.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(240,232,216,0.72)",
                  marginBottom: "1rem",
                }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </section>
        ))}

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "var(--lw-text-muted)",
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--lw-border)",
          }}
        >
          Questions? Reach us at{" "}
          <a href="mailto:dewayne@lifewoven.click" style={{ color: "var(--lw-amber)", textDecoration: "none" }}>
            dewayne@lifewoven.click
          </a>
          .
        </p>
      </div>
    </div>
  );
}
