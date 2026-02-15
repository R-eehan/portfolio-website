import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Reehan Ahmed",
  description:
    "Side projects born from real problems. Built to learn.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ProjectsPage() {
  const projects = getAllProjects();

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
            Projects
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
            Tinkering log
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--mono-muted)",
              lineHeight: 1.6,
            }}
          >
            Side projects born from real problems. Built to learn.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        className="border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group block py-6 md:py-8 transition-colors duration-200 ${index < projects.length - 1 ? "border-b" : ""}`}
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
                    {formatDate(project.frontmatter.date)}
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

                <h2
                  className="text-lg md:text-xl mb-3 group-hover:text-[var(--mono-text)] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "var(--mono-muted)",
                  }}
                >
                  {project.frontmatter.title}
                </h2>

                <p
                  className="text-sm max-w-xl"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--mono-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {project.frontmatter.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
