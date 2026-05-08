/*
 * LIFEWOVEN Woven Gallery Section — "These are not before-and-afters."
 * 
 * Horizontal marquee of Woven Selves
 * Hover freezes marquee and shows anonymous quote
 * Testimonial-as-aesthetic: no headshots, no LinkedIn proof
 */
import { useReveal } from "../../hooks/useReveal";

const figures = [
  {
    src: "/manus-storage/lumen_woc_1_1778193478991_f73f2f0c.jpg",
    alt: "A woven figure — professional woman with natural hair",
    quotes: [
      "I stopped trying to do all five at once. I started letting them work on me.",
      "The audit told me I was overextending my Story. It was right.",
      "I returned after 11 weeks. Lumin was still there.",
    ],
  },
  {
    src: "/manus-storage/lumen_father_1_1778193873573_9355cd63.jpg",
    alt: "A woven figure — elder man in amber cardigan",
    quotes: [
      "Sixty-two years old and still being woven. Don't think you've missed your chance.",
      "I had the books. I needed the practice.",
      "Standards is where I started. State is where I'm still learning.",
    ],
  },
  {
    src: "/manus-storage/lumen_woc_2_1778193490329_cee6e02b.jpg",
    alt: "A woven figure — woman in contemplative pose",
    quotes: [
      "The Audit gave me language for something I'd felt for years.",
      "I thought I needed a new strategy. Turns out I needed a new story.",
      "Stewardship was the thread I'd been ignoring. It was the one holding the others.",
    ],
  },
  {
    src: "/manus-storage/lumen_woc_3_1778193506312_54a84517.jpg",
    alt: "A woven figure — woman with reading shawl",
    quotes: [
      "I've read Frankl, Covey, Brown. This is where they finally connect.",
      "Something about seeing it as five threads — not five tasks — changed everything.",
      "I keep returning. That's the practice.",
    ],
  },
  {
    src: "/manus-storage/lumen_father_3_1778193897365_5483f19d.jpg",
    alt: "A woven figure — elder in knit layers",
    quotes: [
      "My standards were borrowed. The audit helped me find my own.",
      "I thought I was doing well. The alignment showed me where I was drifting.",
      "The wisdom was always there. I just needed a place to put it.",
    ],
  },
  {
    src: "/manus-storage/lumen_mature_peek_side_1778118410062_eab63167.jpg",
    alt: "A woven figure — mature figure in profile",
    quotes: [
      "This isn't self-help. It's self-recognition.",
      "I've been weaving for forty years. I just didn't have a name for it.",
      "Lumin doesn't tell you what to do. She shows you what you already know.",
    ],
  },
];

// Duplicate for seamless loop
const allFigures = [...figures, ...figures];

function FigureCard({ figure, index }: { figure: typeof figures[0]; index: number }) {
  const quoteIndex = index % figure.quotes.length;

  return (
    <div className="gallery-figure" style={{ width: "220px", flexShrink: 0 }}>
      <div className="gallery-figure-quote">
        <span style={{ color: "var(--lw-amber)", fontSize: "20px", lineHeight: 1 }}>"</span>
        <p style={{ marginTop: "4px" }}>{figure.quotes[quoteIndex]}</p>
      </div>
      <img
        src={figure.src}
        alt={figure.alt}
        className="woven-figure"
        style={{
          width: "220px",
          height: "300px",
          objectFit: "cover",
          objectPosition: "top center",
          borderRadius: "12px",
          display: "block",
        }}
        loading="lazy"
      />
    </div>
  );
}

export default function WovenGallerySection() {
  return (
    <section
      className="section reveal"
      aria-label="The Woven — gallery of figures"
      style={{ overflow: "hidden" }}
    >
      {/* Header */}
      <div className="container mb-12">
        <p className="eyebrow mb-4">The Woven</p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 1.05,
            fontWeight: 600,
            color: "var(--lw-text)",
            maxWidth: "640px",
          }}
        >
          These are not before-and-afters.
          <br />
          <span style={{ color: "var(--lw-text-muted)", fontWeight: 400 }}>
            They are people who keep returning.
          </span>
        </h2>
      </div>

      {/* Marquee */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
        aria-label="Gallery of Woven Selves — hover to pause and read"
      >
        <div className="overflow-hidden">
          <div className="marquee-track" style={{ gap: "1.5rem", paddingBottom: "1rem" }}>
            {allFigures.map((figure, i) => (
              <FigureCard key={i} figure={figure} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Reduced motion fallback */}
      <div
        className="container mt-8 hidden"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {figures.map((figure, i) => (
            <img
              key={i}
              src={figure.src}
              alt={figure.alt}
              className="woven-figure rounded-xl"
              style={{ width: "100%", height: "240px", objectFit: "cover", objectPosition: "top" }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
