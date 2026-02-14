import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Work | Reehan Ahmed",
  description:
    "Case studies in platform product management — from algorithmic foundations to strategic AI augmentation.",
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section
        className="pt-24 md:pt-32 pb-6 md:pb-8"
        style={{ backgroundColor: "var(--mono-bg)" }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p
            className="text-xs tracking-[0.15em] uppercase mb-4"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--mono-accent)",
            }}
          >
            Work
          </p>
          <h1
            className="text-3xl md:text-4xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "var(--mono-text)",
              lineHeight: 1.1,
            }}
          >
            Case Studies
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--mono-muted)",
              lineHeight: 1.6,
            }}
          >
            Deep dives into platform product management at Whatfix — from
            algorithmic foundations to strategic AI augmentation.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section
        className="border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className={`group block py-6 md:py-8 transition-colors duration-200 ${index < caseStudies.length - 1 ? "border-b" : ""}`}
              style={{ borderColor: "var(--mono-border)" }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs tracking-[0.1em] uppercase"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--mono-accent)",
                      }}
                    >
                      {study.frontmatter.number === "Zero"
                        ? "00"
                        : study.frontmatter.number.padStart(2, "0")}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--mono-accent)",
                      }}
                    >
                      /
                    </span>
                    {study.frontmatter.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--mono-muted)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2
                    className="text-lg md:text-xl mb-3 group-hover:text-[var(--mono-text)] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      color: "var(--mono-muted)",
                    }}
                  >
                    {study.frontmatter.title}
                  </h2>

                  <p
                    className="text-sm italic mb-3"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--mono-text)",
                    }}
                  >
                    &ldquo;{study.frontmatter.hook}&rdquo;
                  </p>

                  <p
                    className="text-sm max-w-xl"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--mono-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {study.frontmatter.description}
                  </p>
                </div>

                {/* Metrics */}
                {study.frontmatter.metrics && (
                  <div className="flex lg:flex-col gap-6 lg:gap-4 flex-shrink-0">
                    {study.frontmatter.metrics.map((metric, i) => (
                      <div key={i} className="lg:text-right">
                        <p
                          className="text-2xl md:text-3xl"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            color: "var(--mono-text)",
                          }}
                        >
                          {metric.value}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--mono-muted)",
                          }}
                        >
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
