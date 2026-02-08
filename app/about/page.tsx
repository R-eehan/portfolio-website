import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Reehan Ahmed",
  description:
    "Platform Product Manager at Whatfix. Building ScreenSense's Context Layer with algorithmic discipline before AI augmentation.",
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-24 md:pt-32 pb-16 md:pb-24"
        style={{ backgroundColor: "var(--mono-bg)" }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--mono-muted)",
              }}
            >
              About
            </p>
            <h1
              className="text-3xl md:text-4xl leading-[1.1] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--mono-text)",
              }}
            >
              Building robust foundations before layering intelligence
            </h1>
            <p
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--mono-muted)",
              }}
            >
              I&apos;m the primary PM for ScreenSense&apos;s Context Layer at
              Whatfix — the patented AI engine powering DAP, Analytics, and AI
              Agents.
            </p>
          </div>
        </div>
      </section>

      {/* Photo + Intro Section */}
      <section
        className="py-16 md:py-24 border-t"
        style={{
          backgroundColor: "var(--mono-surface)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Photo placeholder */}
            <div
              className="aspect-[4/5] rounded-lg flex items-center justify-center order-2 md:order-1"
              style={{
                backgroundColor: "var(--mono-bg)",
                border: "1px solid var(--mono-border)",
              }}
            >
              <p
                className="text-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Photo coming soon
              </p>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2
                className="text-xl md:text-2xl mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--mono-text)",
                }}
              >
                The journey to platform ownership
              </h2>

              {/* Placeholder for Reehan's copy */}
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  [Reehan to provide: Pre-Whatfix context — what led you here,
                  your background, and the path to becoming a Platform PM]
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  [Reehan to provide: The Whatfix chapter — how you came to own
                  ScreenSense, what full-stack platform ownership means to you,
                  and your philosophy on building products]
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  [Reehan to provide: Your approach — algorithmic discipline
                  before AI augmentation, being data-informed not data-driven,
                  and what makes your PM style unique]
                </p>
              </div>

              {/* Key beliefs */}
              <div
                className="mt-10 pt-10 border-t"
                style={{ borderColor: "var(--mono-border)" }}
              >
                <h3
                  className="text-xs tracking-[0.2em] uppercase mb-6"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--mono-accent)",
                  }}
                >
                  Core Beliefs
                </h3>
                <ul className="space-y-4">
                  {[
                    "Algorithmic discipline before AI augmentation",
                    "Data-informed, not data-driven",
                    "Build for observability from day one",
                    "AI as a surgical layer, not a replacement",
                  ].map((belief, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      style={{ color: "var(--mono-muted)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "var(--mono-accent)" }}
                      />
                      <span
                        className="text-base"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {belief}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience/Timeline Section */}
      <section
        className="py-16 md:py-24 border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2
            className="text-xl md:text-2xl mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "var(--mono-text)",
            }}
          >
            Experience
          </h2>

          <div className="space-y-12">
            {/* Whatfix */}
            <div
              className="grid md:grid-cols-[200px_1fr] gap-6 pb-12 border-b"
              style={{ borderColor: "var(--mono-border)" }}
            >
              <div>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--mono-accent)",
                  }}
                >
                  2019 — Present
                </p>
              </div>
              <div>
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "var(--mono-text)",
                  }}
                >
                  Whatfix
                </h3>
                <p
                  className="text-base mb-4"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  Platform Product Manager — ScreenSense Context Layer
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  Primary PM for ScreenSense&apos;s Context Layer — the patented
                  AI engine powering DAP, Analytics, and AI Agents. Built the
                  engine, the observability, and co-created the narrative.
                </p>
              </div>
            </div>

            {/* Placeholder for additional experience */}
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              <div>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--mono-accent)",
                  }}
                >
                  Prior
                </p>
              </div>
              <div>
                <p
                  className="text-base"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  [Reehan to provide: Previous experience, education, or other
                  relevant background]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking & Recognition */}
      <section
        className="py-16 md:py-24 border-t"
        style={{
          backgroundColor: "var(--mono-surface)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2
            className="text-xl md:text-2xl mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "var(--mono-text)",
            }}
          >
            Speaking & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Speaking */}
            <div
              className="p-8 rounded-lg"
              style={{
                backgroundColor: "var(--mono-bg)",
                border: "1px solid var(--mono-border)",
              }}
            >
              <h3
                className="text-xs tracking-[0.15em] uppercase mb-6"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Speaking
              </h3>
              <ul className="space-y-4">
                <li>
                  <p
                    className="text-base mb-1"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--mono-text)",
                    }}
                  >
                    Anvil 2025
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--mono-muted)",
                    }}
                  >
                    [Topic TBD]
                  </p>
                </li>
                <li>
                  <p
                    className="text-base mb-1"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--mono-text)",
                    }}
                  >
                    DAP Summit
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--mono-muted)",
                    }}
                  >
                    [Topic TBD]
                  </p>
                </li>
              </ul>
            </div>

            {/* Recognition */}
            <div
              className="p-8 rounded-lg"
              style={{
                backgroundColor: "var(--mono-bg)",
                border: "1px solid var(--mono-border)",
              }}
            >
              <h3
                className="text-xs tracking-[0.15em] uppercase mb-6"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Recognition
              </h3>
              <ul className="space-y-4">
                <li>
                  <p
                    className="text-base mb-1"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--mono-text)",
                    }}
                  >
                    Customer Insights Award
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--mono-muted)",
                    }}
                  >
                    For Diagnostics platform impact
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
