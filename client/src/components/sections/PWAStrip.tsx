/**
 * PWAStrip — "How you'll use it" three-column device strip
 * Sits between Hero and Five Threads.
 * Three abstract device frames (iPhone / Android / Browser) with one-line captions.
 * Under 200px tall on desktop. Warm taupe / cream palette.
 * Design: Cormorant Garamond captions, DM Sans labels, amber accent lines
 */

export default function PWAStrip() {
  const devices = [
    {
      icon: (
        // iPhone outline — rounded rectangle with home indicator
        <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 36, height: 60 }}>
          <rect x="2" y="2" width="44" height="76" rx="8" stroke="currentColor" strokeWidth="2.5" />
          <rect x="18" y="5" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.5" />
          <rect x="16" y="70" width="16" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
          {/* Screen content — abstract Lifewoven mark */}
          <rect x="10" y="14" width="28" height="48" rx="3" fill="currentColor" opacity="0.06" />
          <rect x="18" y="28" width="12" height="12" rx="2" fill="currentColor" opacity="0.18" />
          <rect x="14" y="44" width="20" height="2" rx="1" fill="currentColor" opacity="0.2" />
          <rect x="17" y="49" width="14" height="2" rx="1" fill="currentColor" opacity="0.15" />
        </svg>
      ),
      label: "iPhone",
      caption: "Install to your iOS home screen.",
    },
    {
      icon: (
        // Android outline — rounded rectangle with chin
        <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 36, height: 60 }}>
          <rect x="2" y="6" width="44" height="68" rx="6" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="24" cy="76" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="9" r="2" fill="currentColor" opacity="0.4" />
          {/* Screen content */}
          <rect x="10" y="16" width="28" height="44" rx="3" fill="currentColor" opacity="0.06" />
          <rect x="18" y="28" width="12" height="12" rx="6" fill="currentColor" opacity="0.18" />
          <rect x="14" y="44" width="20" height="2" rx="1" fill="currentColor" opacity="0.2" />
          <rect x="17" y="49" width="14" height="2" rx="1" fill="currentColor" opacity="0.15" />
        </svg>
      ),
      label: "Android",
      caption: "Install to your Android home screen.",
    },
    {
      icon: (
        // Browser window outline
        <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 60, height: 45 }}>
          <rect x="2" y="2" width="76" height="56" rx="6" stroke="currentColor" strokeWidth="2.5" />
          <line x1="2" y1="16" x2="78" y2="16" stroke="currentColor" strokeWidth="2" opacity="0.5" />
          {/* Browser chrome dots */}
          <circle cx="12" cy="9" r="2.5" fill="currentColor" opacity="0.35" />
          <circle cx="20" cy="9" r="2.5" fill="currentColor" opacity="0.35" />
          <circle cx="28" cy="9" r="2.5" fill="currentColor" opacity="0.35" />
          {/* URL bar */}
          <rect x="36" y="5.5" width="36" height="7" rx="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          {/* Page content */}
          <rect x="12" y="24" width="56" height="26" rx="3" fill="currentColor" opacity="0.06" />
          <rect x="28" y="30" width="24" height="10" rx="2" fill="currentColor" opacity="0.14" />
          <rect x="20" y="44" width="40" height="2" rx="1" fill="currentColor" opacity="0.15" />
        </svg>
      ),
      label: "Browser",
      caption: "Or open it in any browser, anywhere.",
    },
  ];

  return (
    <section
      aria-label="How you'll use Lifewoven"
      style={{
        background: "rgba(245,240,232,0.03)",
        borderTop: "1px solid rgba(212,175,100,0.12)",
        borderBottom: "1px solid rgba(212,175,100,0.12)",
        padding: "3.5rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {devices.map((device) => (
            <div
              key={device.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
                textAlign: "center",
              }}
            >
              {/* Device illustration */}
              <div
                style={{
                  color: "rgba(212,175,100,0.65)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {device.icon}
              </div>

              {/* Label */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(212,175,100,0.75)",
                }}
              >
                {device.label}
              </p>

              {/* Caption */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.72)",
                  lineHeight: 1.5,
                  maxWidth: "20ch",
                }}
              >
                {device.caption}
              </p>
            </div>
          ))}
        </div>

        {/* "No app store required" footnote */}
        <p
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(245,240,232,0.42)",
            letterSpacing: "0.04em",
          }}
        >
          No app store required.
        </p>
      </div>
    </section>
  );
}
