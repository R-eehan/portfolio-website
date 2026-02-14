import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Reehan Ahmed",
  description:
    "Senior Platform Product Manager at Whatfix. Builder, PM, endlessly curious.",
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-24 md:pt-32 pb-6 md:pb-8"
        style={{ backgroundColor: "var(--mono-bg)" }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--mono-muted)",
              }}
            >
              About
            </p>
            <h1
              className="text-3xl md:text-4xl leading-[1.1] mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--mono-text)",
              }}
            >
              Hey, I&apos;m Reehan.
            </h1>
            <p
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--mono-muted)",
              }}
            >
              Senior Platform Product Manager at Whatfix. I build and own the AI
              engine that powers how millions of people learn and use software.
            </p>
          </div>
        </div>
      </section>

      {/* Photo + Bio Section */}
      <section
        className="pt-6 md:pt-8 pb-10 md:pb-12 border-t"
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
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  I didn&apos;t take the MBA-to-PM pipeline. I started in
                  support at BrowserStack — triaging enterprise issues, leading a
                  small team, and building a full-stack debugging tool in Python
                  because I couldn&apos;t stop asking why things broke the way
                  they did. That itch to understand systems at their edges, not
                  just use them, is what pulled me toward product.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  I joined Whatfix as a Solutions Engineer, managing a $1M
                  enterprise portfolio across Salesforce, Workday, and SAP.
                  Sitting across the table from customers, I kept seeing the same
                  problem: the platform&apos;s element detection was failing
                  15–20% of the time. I made the case to own it, moved into
                  product, and shipped three generations of algorithmic
                  improvements that brought failure rates under 2%. That system
                  became the foundation of what Whatfix now calls ScreenSense.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  Today I lead ScreenSense&apos;s Context Layer — the patented
                  AI engine powering Whatfix&apos;s DAP, Product Analytics, and
                  AI Agents. I&apos;m most at home in the space between hard
                  engineering problems and user outcomes. I prototype before I
                  spec, I build observability into everything, and I&apos;ve
                  learned that the best AI products are built on solid
                  algorithmic foundations — not the other way around.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  When I&apos;m not shipping, I&apos;m probably deep in an F1
                  race weekend, dialing in a pour-over, mixing a whiskey sour, or
                  going down a rabbit hole about World War II history. I played
                  cricket semi-professionally growing up, I listen to everything
                  from hip hop to techno, and I&apos;m permanently online
                  tracking the AI landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        className="py-12 md:py-16 border-t"
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

          <div className="space-y-0">
            {/* Whatfix - Senior Platform PM */}
            <div
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-6 py-8 border-b"
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
                  2025 — Present
                </p>
              </div>
              <div>
                <h3
                  className="text-base mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    color: "var(--mono-text)",
                  }}
                >
                  Senior Platform Product Manager
                </h3>
                <p
                  className="text-sm mb-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--mono-accent)",
                  }}
                >
                  Whatfix
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  Leading ScreenSense&apos;s Context Layer and the Runtime
                  Platform POD. Shipped AI-powered platform enhancements, built
                  Diagnostics, and designed the AI evaluation methodology.
                </p>
              </div>
            </div>

            {/* Whatfix - Platform PM */}
            <div
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-6 py-8 border-b"
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
                  2022 — 2025
                </p>
              </div>
              <div>
                <h3
                  className="text-base mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    color: "var(--mono-text)",
                  }}
                >
                  Associate &rarr; Platform Product Manager
                </h3>
                <p
                  className="text-sm mb-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--mono-accent)",
                  }}
                >
                  Whatfix
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  Built the algorithmic foundations that became ScreenSense. Led
                  three generations of element detection improvements, built
                  Smart Targeting, and established platform instrumentation from
                  scratch.
                </p>
              </div>
            </div>

            {/* Whatfix - Solutions Engineer */}
            <div
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-6 py-8 border-b"
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
                  2021 — 2022
                </p>
              </div>
              <div>
                <h3
                  className="text-base mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    color: "var(--mono-text)",
                  }}
                >
                  Senior Solutions Engineer
                </h3>
                <p
                  className="text-sm mb-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--mono-accent)",
                  }}
                >
                  Whatfix
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  Managed a $1M enterprise portfolio across Salesforce, Workday,
                  and SAP. Deep exposure to enterprise app ecosystems directly
                  informed the transition to product.
                </p>
              </div>
            </div>

            {/* BrowserStack */}
            <div
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-6 py-8 border-b"
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
                  2018 — 2021
                </p>
              </div>
              <div>
                <h3
                  className="text-base mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    color: "var(--mono-text)",
                  }}
                >
                  Product Support &rarr; Sr. DevOps Support Engineer
                </h3>
                <p
                  className="text-sm mb-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--mono-accent)",
                  }}
                >
                  BrowserStack
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  Progressed from front-line support to leading a team of 6.
                  Built a full-stack debugging tool in Python/Flask that
                  automated diagnostic workflows across teams.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-6 py-8">
              <div>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--mono-accent)",
                  }}
                >
                  2014 — 2018
                </p>
              </div>
              <div>
                <h3
                  className="text-base mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    color: "var(--mono-text)",
                  }}
                >
                  B.E. Electronics & Telecommunication
                </h3>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--mono-accent)",
                  }}
                >
                  University of Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
