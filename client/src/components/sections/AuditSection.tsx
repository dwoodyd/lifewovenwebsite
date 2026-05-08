/*
 * LIFEWOVEN Audit Section — "Twelve questions. Three to five minutes."
 * 
 * Visual: Phone mockup with example audit questions cycling
 * CTA: Take the Audit →
 */
import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../hooks/useReveal";

const auditQuestions = [
  {
    number: "01",
    question: "When you imagine your life five years from now, what feeling arises first?",
    thread: "State",
    threadColor: "#7BA7C9",
  },
  {
    number: "02",
    question: "What story do you tell yourself about why you haven't made the change you want?",
    thread: "Story",
    threadColor: "#E9B96E",
  },
  {
    number: "03",
    question: "Name one standard you hold for others that you rarely apply to yourself.",
    thread: "Standards",
    threadColor: "#7BC99A",
  },
  {
    number: "04",
    question: "What does your current daily rhythm say about what you actually value?",
    thread: "Strategy",
    threadColor: "#9B9BE8",
  },
  {
    number: "05",
    question: "What are you tending to? What are you letting go untended?",
    thread: "Stewardship",
    threadColor: "#C97B7B",
  },
];

export default function AuditSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const sectionRef = useReveal(0.15) as React.RefObject<HTMLElement>;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % auditQuestions.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const q = auditQuestions[currentQuestion];

  return (
    <section
      id="audit"
      ref={sectionRef}
      className="section reveal"
      aria-label="The Alignment Audit"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left — Copy */}
          <div className="flex-1 max-w-[540px]">
            <p className="eyebrow mb-6">The Alignment Audit</p>
            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(36px, 5.5vw, 80px)",
                lineHeight: 1.05,
                fontWeight: 600,
                color: "var(--lw-text)",
              }}
            >
              Twelve questions.
              <br />
              Three to five minutes.
              <br />
              <span className="highlight-amber">Free, no account required.</span>
            </h2>
            <p
              className="mb-10"
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "var(--lw-text-muted)",
              }}
            >
              The Audit shows you which thread to pick up first.
            </p>
            <a href="#audit" className="btn-primary">
              Take the Audit →
            </a>
          </div>

          {/* Right — Phone mockup with cycling questions */}
          <div
            className="flex-shrink-0 relative"
            style={{ width: "clamp(260px, 30vw, 340px)" }}
            aria-label="Example audit questions"
          >
            {/* Phone frame */}
            <div
              className="relative rounded-[32px] overflow-hidden"
              style={{
                background: "var(--lw-bg-elevated)",
                border: "1px solid var(--lw-border)",
                padding: "20px 16px",
                boxShadow: "0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                transform: "rotate(-4deg)",
              }}
            >
              {/* Phone notch */}
              <div
                className="mx-auto mb-4 rounded-full"
                style={{
                  width: "80px",
                  height: "6px",
                  background: "var(--lw-border)",
                }}
              />

              {/* App header */}
              <div className="flex items-center justify-between mb-6 px-2">
                <span
                  className="font-display font-semibold"
                  style={{ fontSize: "16px", color: "var(--lw-text)" }}
                >
                  Alignment Audit
                </span>
                <span
                  className="text-xs"
                  style={{ color: "var(--lw-amber)", fontFamily: "var(--font-body)" }}
                >
                  {currentQuestion + 1} / 12
                </span>
              </div>

              {/* Progress bar */}
              <div
                className="rounded-full mb-6 mx-2"
                style={{
                  height: "3px",
                  background: "var(--lw-border)",
                  overflow: "hidden",
                }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${((currentQuestion + 1) / 12) * 100}%`,
                    background: "var(--lw-amber)",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>

              {/* Thread label */}
              <div className="px-2 mb-3">
                <span
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: q.threadColor, letterSpacing: "0.12em" }}
                >
                  {q.thread}
                </span>
              </div>

              {/* Question */}
              <div
                className="px-2 mb-8"
                style={{ minHeight: "100px" }}
                key={currentQuestion}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.45,
                    color: "var(--lw-text)",
                    fontWeight: 500,
                    animation: "fadeSlideIn 0.4s ease",
                  }}
                >
                  {q.question}
                </p>
              </div>

              {/* Answer area */}
              <div
                className="rounded-xl px-3 py-3 mb-4 mx-2"
                style={{
                  background: "rgba(45,46,72,0.5)",
                  border: "1px solid var(--lw-border)",
                  minHeight: "72px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--lw-text-muted)",
                    fontStyle: "italic",
                  }}
                >
                  Your answer...
                </p>
              </div>

              {/* Next button */}
              <div className="px-2">
                <div
                  className="w-full text-center py-3 rounded-xl text-sm font-medium"
                  style={{
                    background: "var(--lw-amber)",
                    color: "#0F1023",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Continue →
                </div>
              </div>

              {/* Phone home bar */}
              <div
                className="mx-auto mt-4 rounded-full"
                style={{
                  width: "100px",
                  height: "4px",
                  background: "var(--lw-border)",
                }}
              />
            </div>

            {/* Woven figure beside phone */}
            <div
              className="absolute -right-16 bottom-0 hidden lg:block"
              aria-hidden="true"
              style={{ width: "120px" }}
            >
              <img
                src="/manus-storage/lumen_woc_2_1778193490329_cee6e02b.jpg"
                alt=""
                className="woven-figure"
                style={{
                  width: "120px",
                  height: "180px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: "8px",
                  opacity: 0.8,
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
