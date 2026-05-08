/*
 * LIFEWOVEN Social Proof Section — "The book that started this"
 * 
 * Book mockup + key quote from the founder's perspective
 * Asymmetric layout: book left, quote right
 */
import { useReveal } from "../../hooks/useReveal";

export default function SocialProofSection() {
  const sectionRef = useReveal(0.15) as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="section reveal"
      aria-label="The book that started this"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — Book */}
          <div
            className="flex-shrink-0"
            style={{ width: "clamp(200px, 22vw, 280px)" }}
            aria-label="Before the Words — the book"
          >
            <div
              style={{
                transform: "rotate(-3deg)",
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
                transition: "transform 0.4s ease, filter 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "rotate(0deg) scale(1.03)";
                (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 40px 80px rgba(233,185,110,0.2))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "rotate(-3deg)";
                (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 30px 60px rgba(0,0,0,0.5))";
              }}
            >
              <img
                src="/manus-storage/book_mockup_before_the_words_1778253763210_0a5dbe61.png"
                alt="Before the Words — the book that started Lifewoven"
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — Quote + context */}
          <div className="flex-1 max-w-[520px]">
            <p className="eyebrow mb-6">The book that started this</p>

            <blockquote
              className="font-display mb-6"
              style={{
                fontSize: "clamp(22px, 3.5vw, 36px)",
                lineHeight: 1.3,
                color: "var(--lw-text)",
                fontStyle: "italic",
                fontWeight: 400,
                borderLeft: "2px solid var(--lw-amber)",
                paddingLeft: "1.5rem",
              }}
            >
              "The wisdom you carry becomes who you are — but only if you give it a place to land."
            </blockquote>

            <p
              style={{
                fontSize: "15px",
                color: "var(--lw-text-muted)",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              <em>Before the Words</em> is the book that asked the question.
              Lifewoven is where the answer lives.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="btn-outline"
                style={{ fontSize: "14px" }}
              >
                Get the book →
              </a>
              <a
                href="#audit"
                className="btn-secondary"
                style={{ fontSize: "14px" }}
              >
                Start with the Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
