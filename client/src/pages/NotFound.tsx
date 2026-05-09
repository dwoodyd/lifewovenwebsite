import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--lw-bg)",
        color: "var(--lw-text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        fontFamily: "var(--font-body)",
      }}
    >
      <p
        style={{
          fontSize: "13px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--lw-amber)",
          marginBottom: "1.5rem",
          fontWeight: 500,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 6vw, 72px)",
          fontWeight: 600,
          lineHeight: 1.05,
          marginBottom: "1.5rem",
          color: "var(--lw-text)",
        }}
      >
        This thread doesn't exist.
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "var(--lw-text-muted)",
          marginBottom: "2.5rem",
          maxWidth: "400px",
          lineHeight: 1.6,
        }}
      >
        The page you're looking for has been unwoven.
        Let's find your way back.
      </p>
      <button
        onClick={() => setLocation("/")}
        className="btn-primary"
      >
        Return home →
      </button>
    </div>
  );
}
