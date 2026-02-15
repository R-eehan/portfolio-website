import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/mdx";
import { getAllArticles, getReadingTime } from "@/lib/articles";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const caseStudies = getAllCaseStudies();
  const articles = getAllArticles();
  const projects = getAllProjects();

  const featuredSlugs = ["diagnostics", "ai-evaluation"];
  const featuredWork = caseStudies.filter((s) =>
    featuredSlugs.includes(s.slug)
  );

  return (
    <main>
      <Navigation />
      <Hero />

      {/* Latest Writing Section */}
      <section
        className="pt-6 md:pt-8 pb-6 md:pb-8 border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-4 md:mb-6">
            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Latest Writing
              </p>
              <h2
                className="text-2xl md:text-3xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--mono-text)",
                }}
              >
                Articles
              </h2>
            </div>
            <Link
              href="/writing"
              className="hidden md:inline-flex items-center gap-2 text-sm transition-colors duration-200 group"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                color: "var(--mono-muted)",
              }}
            >
              <span className="group-hover:text-[var(--mono-text)] transition-colors">
                View all
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            </Link>
          </div>

          {/* Article Entries */}
          <div className="space-y-1">
            {articles.map((article, index) => {
              const readingTime = getReadingTime(article.content);
              const date = new Date(article.frontmatter.date).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "short", day: "numeric" }
              );

              return (
                <Link
                  key={article.slug}
                  href={`/writing/${article.slug}`}
                  className={`group block py-5 md:py-6 transition-colors duration-200 ${index < articles.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: "var(--mono-border)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--mono-accent)",
                          }}
                        >
                          {date}
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
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--mono-accent)",
                          }}
                        >
                          {readingTime} min read
                        </span>
                      </div>

                      <h3
                        className="text-lg md:text-xl mb-2 group-hover:text-[var(--mono-text)] transition-colors duration-200"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          color: "var(--mono-muted)",
                        }}
                      >
                        {article.frontmatter.title}
                      </h3>

                      <p
                        className="text-sm md:text-base max-w-xl"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "var(--mono-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        {article.frontmatter.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {article.frontmatter.tags.map((tag) => (
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
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile View All */}
          <Link
            href="/writing"
            className="md:hidden mt-8 inline-flex items-center gap-2 text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: "var(--mono-muted)",
            }}
          >
            <span>View all articles</span>
            <svg
              className="w-4 h-4"
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
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        className="pt-6 md:pt-8 pb-6 md:pb-8 border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-4 md:mb-6">
            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Side Projects
              </p>
              <h2
                className="text-2xl md:text-3xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--mono-text)",
                }}
              >
                Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm transition-colors duration-200 group"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                color: "var(--mono-muted)",
              }}
            >
              <span className="group-hover:text-[var(--mono-text)] transition-colors">
                View all
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            </Link>
          </div>

          {/* Project Entries */}
          <div className="space-y-1">
            {projects.map((project, index) => {
              const date = new Date(project.frontmatter.date).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "short", day: "numeric" }
              );

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`group block py-5 md:py-6 transition-colors duration-200 ${index < projects.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: "var(--mono-border)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--mono-accent)",
                          }}
                        >
                          {date}
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
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--mono-muted)",
                          }}
                        >
                          {project.frontmatter.oneLiner}
                        </span>
                      </div>

                      <h3
                        className="text-lg md:text-xl mb-2 group-hover:text-[var(--mono-text)] transition-colors duration-200"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          color: "var(--mono-muted)",
                        }}
                      >
                        {project.frontmatter.title}
                      </h3>

                      <p
                        className="text-sm md:text-base max-w-xl"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "var(--mono-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        {project.frontmatter.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile View All */}
          <Link
            href="/projects"
            className="md:hidden mt-8 inline-flex items-center gap-2 text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: "var(--mono-muted)",
            }}
          >
            <span>View all projects</span>
            <svg
              className="w-4 h-4"
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
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
      <section
        className="pt-6 md:pt-8 pb-6 md:pb-8 border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-4 md:mb-6">
            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Featured Work
              </p>
              <h2
                className="text-2xl md:text-3xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--mono-text)",
                }}
              >
                Case Studies
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-sm transition-colors duration-200 group"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                color: "var(--mono-muted)",
              }}
            >
              <span className="group-hover:text-[var(--mono-text)] transition-colors">
                View all
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            </Link>
          </div>

          {/* Case Study Cards */}
          <div className="space-y-1">
            {featuredWork.map((study, index) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className={`group block py-5 md:py-6 transition-colors duration-200 ${index < featuredWork.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "var(--mono-border)" }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
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

                    <h3
                      className="text-lg md:text-xl mb-2 group-hover:text-[var(--mono-text)] transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        color: "var(--mono-muted)",
                      }}
                    >
                      {study.frontmatter.title}
                    </h3>

                    <p
                      className="text-sm md:text-base max-w-xl"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: "var(--mono-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {study.frontmatter.description}
                    </p>
                  </div>

                  {/* Metric highlight */}
                  {study.frontmatter.metrics && study.frontmatter.metrics.length > 0 && (
                    <div className="hidden md:block text-right flex-shrink-0">
                      <p
                        className="text-2xl md:text-3xl"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          color: "var(--mono-text)",
                        }}
                      >
                        {study.frontmatter.metrics[0].value}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--mono-muted)",
                        }}
                      >
                        {study.frontmatter.metrics[0].label}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile View All */}
          <Link
            href="/work"
            className="md:hidden mt-8 inline-flex items-center gap-2 text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              color: "var(--mono-muted)",
            }}
          >
            <span>View all case studies</span>
            <svg
              className="w-4 h-4"
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
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
