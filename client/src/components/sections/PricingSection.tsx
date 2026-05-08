/*
 * LIFEWOVEN Pricing Section — Three tiers, mascot-first
 * 
 * Explorer (Free) → Seeker ($19/mo) → Oracle ($49/mo)
 * Visual progression: figure alone → figure walking → figure with Lumin
 * The upgrade story told through the characters, not a feature table
 */
import { useReveal } from "../../hooks/useReveal";

const tiers = [
  {
    name: "Explorer",
    price: "Free",
    priceNote: "forever",
    description: "Begin the audit. Find your first thread.",
    cta: "Start Free",
    ctaStyle: "outline",
    features: [
      "The Alignment Audit",
      "Daily check-ins",
      "5S overview",
      "Public Library",
    ],
    figure: {
      src: "/manus-storage/lumen_woc_2_1778193490329_cee6e02b.jpg",
      alt: "A woven figure standing alone — the beginning",
    },
    featured: false,
  },
  {
    name: "Seeker",
    price: "$19",
    priceNote: "/ month",
    description: "All seven pathways. The full practice.",
    cta: "Begin Transformation",
    ctaStyle: "primary",
    badge: "Most chosen",
    features: [
      "Everything in Explorer",
      "All seven Pathways",
      "Full 5S module suite",
      "Habit tracker · Decision Journal",
      "Belief rewrite · Energy audit",
      "Course library access",
    ],
    figure: {
      src: "/manus-storage/lumen_woc_1_1778193478991_f73f2f0c.jpg",
      alt: "A woven figure mid-stride — moving forward",
    },
    featured: true,
  },
  {
    name: "Oracle",
    price: "$49",
    priceNote: "/ month",
    description: "The companion who walks with you.",
    cta: "Step In",
    ctaStyle: "outline",
    features: [
      "Everything in Seeker",
      "Unlimited Oracle AI chat",
      "AI journal reflections",
      "AI decision analysis",
      "Cross-module pattern insights",
      "Monthly Oracle deep-dive report",
      "Early access · 1-on-1 onboarding",
    ],
    figure: {
      src: "/manus-storage/lumen_father_1_1778193873573_9355cd63.jpg",
      alt: "A woven figure walking beside Lumin — the companion",
    },
    featured: false,
    luminBadge: true,
  },
];

export default function PricingSection() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section reveal"
      aria-label="Pricing"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Pricing</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5.5vw, 72px)",
              lineHeight: 1.05,
              fontWeight: 600,
              color: "var(--lw-text)",
            }}
          >
            Choose your practice.
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          role="list"
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card ${tier.featured ? "featured" : ""}`}
              role="listitem"
              aria-label={`${tier.name} tier — ${tier.price}`}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "var(--lw-amber)",
                    color: "#0F1023",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tier.badge}
                </div>
              )}

              {/* Figure */}
              <div
                className="flex justify-center"
                style={{ height: "180px", overflow: "hidden" }}
                aria-hidden="true"
              >
                <img
                  src={tier.figure.src}
                  alt={tier.figure.alt}
                  className="woven-figure"
                  style={{
                    height: "180px",
                    width: "auto",
                    objectFit: "cover",
                    objectPosition: "top center",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
              </div>

              {/* Tier info */}
              <div>
                <h3
                  className="font-display font-semibold mb-1"
                  style={{ fontSize: "24px", color: "var(--lw-text)" }}
                >
                  {tier.name}
                </h3>
                <p style={{ color: "var(--lw-text-muted)", fontSize: "14px" }}>
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span
                  className="font-display"
                  style={{
                    fontSize: "40px",
                    fontWeight: 700,
                    color: tier.featured ? "var(--lw-amber)" : "var(--lw-text)",
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </span>
                <span style={{ color: "var(--lw-text-muted)", fontSize: "14px" }}>
                  {tier.priceNote}
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "var(--lw-border)",
                }}
              />

              {/* Features */}
              <ul className="flex flex-col gap-2.5" role="list">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5"
                    style={{ fontSize: "14px", color: "var(--lw-text-muted)" }}
                  >
                    <span style={{ color: "var(--lw-amber)", marginTop: "2px", flexShrink: 0 }}>
                      ◈
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={tier.ctaStyle === "primary" ? "btn-primary justify-center" : "btn-outline justify-center"}
                style={{ textAlign: "center" }}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Upgrade story note */}
        <p
          className="text-center mt-10"
          style={{
            color: "var(--lw-text-muted)",
            fontSize: "14px",
            fontStyle: "italic",
            fontFamily: "var(--font-display)",
          }}
        >
          The progression from figure alone → figure walking → figure with companion
          tells the entire upgrade story.
        </p>
      </div>
    </section>
  );
}
