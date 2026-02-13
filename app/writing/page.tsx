import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getReadingTime } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Writing | Reehan Ahmed",
  description:
    "Articles on product management, AI agents, and building with LLMs.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section
        className="pt-24 md:pt-32 pb-10 md:pb-14"
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
            Writing
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
            Articles
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--mono-muted)",
              lineHeight: 1.6,
            }}
          >
            Thinking out loud about product management, AI agents, and building
            with LLMs.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section
        className="border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          {articles.map((article) => {
            const readingTime = getReadingTime(article.content);
            return (
              <Link
                key={article.slug}
                href={`/writing/${article.slug}`}
                className="group block py-10 md:py-12 border-b transition-colors duration-200"
                style={{ borderColor: "var(--mono-border)" }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--mono-accent)",
                      }}
                    >
                      {formatDate(article.frontmatter.date)}
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
                      {readingTime} min read
                    </span>
                  </div>

                  <h2
                    className="text-lg md:text-xl mb-3 group-hover:text-[var(--mono-text)] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      color: "var(--mono-muted)",
                    }}
                  >
                    {article.frontmatter.title}
                  </h2>

                  <p
                    className="text-sm max-w-xl mb-4"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--mono-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {article.frontmatter.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          fontFamily: "var(--font-mono)",
                          backgroundColor: "var(--mono-surface)",
                          color: "var(--mono-muted)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
