"use client";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden noise-overlay"
      style={{ backgroundColor: "var(--mono-bg)" }}
    >
      {/* Hero Content — compact */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-6 md:pb-8">
        {/* Name */}
        <h1
          className="mono-animate-fade text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-5"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            color: "var(--mono-text)",
            opacity: 0,
            animationDelay: "0.1s",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Reehan Ahmed
        </h1>

        {/* Thin rule */}
        <div
          className="mono-animate-line w-10 h-[1px] mb-4 md:mb-5"
          style={{
            backgroundColor: "var(--mono-accent)",
            opacity: 0,
            animationDelay: "0.2s",
          }}
        />

        {/* Subtitle */}
        <p
          className="mono-animate-fade text-base md:text-lg max-w-lg mb-3"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            color: "var(--mono-muted)",
            opacity: 0,
            animationDelay: "0.3s",
            lineHeight: 1.6,
          }}
        >
          Building products at the intersection of algorithms and AI.
        </p>

        {/* Brief context */}
        <p
          className="mono-animate-fade text-sm max-w-md"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--mono-accent)",
            opacity: 0,
            animationDelay: "0.4s",
            lineHeight: 1.6,
          }}
        >
          Platform PM at Whatfix. I build foundations before I build features.
        </p>
      </div>
    </section>
  );
}
