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
              Hey, I&apos;m Reehan
            </h1>
            <p
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--mono-muted)",
              }}
            >
              Senior Platform Product Manager at Whatfix where I build and own the AI
              engine that powers how thousands of users learn and use enterprise software.
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
            {/* Photo */}
            <div
              className="aspect-[4/5] rounded-lg overflow-hidden order-2 md:order-1"
              style={{
                backgroundColor: "var(--mono-bg)",
                border: "1px solid var(--mono-border)",
              }}
            >
              <img
                src="/images/reehan-anvil-2025.jpeg"
                alt="Reehan Ahmed speaking at Whatfix Anvil 2025"
                className="w-full h-full object-cover object-[35%_15%]"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 -mt-1">
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  Before I transitioned to product, I started in technical
                  support at BrowserStack - triaging & assisting individual developers and larger QA teams with their manual and automated testing workflows, progressing to lead a
                  small team, and built a full-stack debugging tool in Python to solve recurring debugging workflows.
                  This foundation led me to develop empathy truly understand customer problems, and connect technical solutions to user problems.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  I joined Whatfix as a Solutions Engineer, managing a $1M
                  enterprise customer portfolio across Salesforce, Workday, and SAP.
                  Sitting across the table from customers, I kept seeing the same
                  problem: non-technical users unable to navigate a relatively technical product, while being unable to comprehend why things didn't work as intended when they should. I made the case to own it, moved into
                  product management, and shipped three generations of algorithmic
                  improvements that brought failure rates under 2%. That system
                  became the foundation of what Whatfix now calls <a href="https://whatfix.com/ai/screensense/" className="text-white underline">ScreenSense</a>.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                  }}
                >
                  Today I lead ScreenSense&apos;s Context Layer - the patented
                  AI engine powering Whatfix&apos;s DAP, Product Analytics, Simulation products and
                  AI Agents. I&apos;m most at home in the space between hard
                  engineering problems and user outcomes. I believe in 'show vs tell', often prototyping before I
                  spec. Instrumentation and observability is something I deeply value, striving to imbibe this into everything I do. Throughout my time at Whatfix, I&apos;ve
                  learned that the best AI products/features are built on a solid foundation of "does AI solve or unlock this problem better?" as opposed to force-fitting.
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
                  going down a rabbit hole about World War II history. I&apos;m chronically online
                  tracking the AI landscape, while tinkering and experimenting with whatever helps me push and refine my own thinking. 
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
