import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Reehan Ahmed",
  description:
    "Get in touch to discuss product strategy, AI implementation, or platform engineering.",
};

export default function ContactPage() {
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
              Contact
            </p>
            <h1
              className="text-3xl md:text-4xl leading-[1.1] mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--mono-text)",
              }}
            >
              Let&apos;s connect
            </h1>
            <p
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--mono-muted)",
              }}
            >
              Interested in discussing product strategy, AI implementation, or
              platform engineering? I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section
        className="pt-6 md:pt-8 pb-10 md:pb-12 border-t"
        style={{
          backgroundColor: "var(--mono-surface)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Email */}
            <a
              href="mailto:reehan@example.com"
              className="group p-8 rounded-lg border transition-all duration-300 hover:border-[#555555]"
              style={{
                backgroundColor: "var(--mono-bg)",
                borderColor: "var(--mono-border)",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--mono-surface)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--mono-muted)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "var(--mono-accent)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <h2
                className="text-xl mb-2 group-hover:text-white transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--mono-muted)",
                }}
              >
                Email
              </h2>
              <p
                className="text-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                reehan@example.com
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/reehanahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-lg border transition-all duration-300 hover:border-[#555555]"
              style={{
                backgroundColor: "var(--mono-bg)",
                borderColor: "var(--mono-border)",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--mono-surface)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--mono-muted)" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "var(--mono-accent)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <h2
                className="text-xl mb-2 group-hover:text-white transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--mono-muted)",
                }}
              >
                LinkedIn
              </h2>
              <p
                className="text-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                /in/reehanahmed
              </p>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="group p-8 rounded-lg border transition-all duration-300 hover:border-[#555555]"
              style={{
                backgroundColor: "var(--mono-bg)",
                borderColor: "var(--mono-border)",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--mono-surface)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--mono-muted)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                  style={{ color: "var(--mono-accent)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <h2
                className="text-xl mb-2 group-hover:text-white transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--mono-muted)",
                }}
              >
                Resume
              </h2>
              <p
                className="text-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Download PDF
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section
        className="py-12 md:py-16 border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-xl md:text-2xl mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--mono-text)",
              }}
            >
              Topics I enjoy discussing
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "AI-First Products",
                  description:
                    "Strategic integration of AI capabilities — when to use LLMs, when to rely on algorithms.",
                },
                {
                  title: "Platform Engineering",
                  description:
                    "Building internal platforms, developer experience, and observability systems.",
                },
                {
                  title: "Product Strategy",
                  description:
                    "From 0-to-1 features to scaling existing products. Data-informed decision making.",
                },
                {
                  title: "SaaS & Enterprise",
                  description:
                    "B2B product management, enterprise sales cycles, and customer success.",
                },
              ].map((topic, i) => (
                <div key={i}>
                  <h3
                    className="text-base mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      color: "var(--mono-text)",
                    }}
                  >
                    {topic.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--mono-muted)",
                    }}
                  >
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Note */}
      <section
        className="py-12 border-t"
        style={{
          backgroundColor: "var(--mono-surface)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p
            className="text-sm"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--mono-muted)",
            }}
          >
            Based in India • Open to remote opportunities worldwide
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
