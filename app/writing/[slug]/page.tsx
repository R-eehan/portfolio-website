import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/TableOfContents";
import {
  getArticleBySlug,
  getArticleSlugs,
  getTableOfContents,
  getReadingTime,
} from "@/lib/articles";
import {
  MetricCard,
  TechnicalToggle,
  Callout,
  ImagePlaceholder,
} from "@/components/mdx";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const mdxComponents = {
  MetricCard,
  TechnicalToggle,
  Callout,
  ImagePlaceholder,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text =
      typeof props.children === "string"
        ? props.children
        : String(props.children);
    const id = generateId(text);
    return (
      <h2
        id={id}
        className="text-xl md:text-2xl mt-10 mb-4 scroll-mt-24"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: "var(--mono-text)",
        }}
        {...props}
      />
    );
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text =
      typeof props.children === "string"
        ? props.children
        : String(props.children);
    const id = generateId(text);
    return (
      <h3
        id={id}
        className="text-lg md:text-xl mt-8 mb-3 scroll-mt-24"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: "var(--mono-text)",
        }}
        {...props}
      />
    );
  },
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-base leading-relaxed mb-6"
      style={{
        fontFamily: "var(--font-sans)",
        color: "var(--mono-muted)",
      }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc pl-6 mb-6 space-y-2"
      style={{ color: "var(--mono-muted)" }}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal pl-6 mb-6 space-y-2"
      style={{ color: "var(--mono-muted)" }}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className="text-base leading-relaxed"
      style={{ fontFamily: "var(--font-sans)" }}
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: "var(--mono-text)", fontWeight: 600 }} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="underline transition-colors duration-200 hover:text-white"
      style={{ color: "var(--mono-text)" }}
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-2 pl-6 my-6 italic"
      style={{
        borderColor: "var(--mono-accent)",
        color: "var(--mono-muted)",
      }}
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="px-1.5 py-0.5 rounded text-sm"
      style={{
        fontFamily: "var(--font-mono)",
        backgroundColor: "var(--mono-surface)",
        color: "var(--mono-text)",
      }}
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="p-4 rounded-lg overflow-x-auto my-6"
      style={{
        fontFamily: "var(--font-mono)",
        backgroundColor: "var(--mono-surface)",
        color: "var(--mono-text)",
      }}
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 rounded-lg border" style={{ borderColor: "var(--mono-border)" }}>
      <table
        className="w-full text-sm"
        style={{ fontFamily: "var(--font-sans)", borderCollapse: "collapse" }}
        {...props}
      />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead style={{ backgroundColor: "var(--mono-surface)" }} {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-4 py-3 text-left text-xs tracking-wide uppercase border-b"
      style={{
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        color: "var(--mono-text)",
        borderColor: "var(--mono-border)",
      }}
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="px-4 py-3 border-b"
      style={{
        color: "var(--mono-muted)",
        borderColor: "var(--mono-border)",
      }}
      {...props}
    />
  ),
};

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.frontmatter.title} | Reehan Ahmed`,
    description: article.frontmatter.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, content } = article;
  const toc = getTableOfContents(content);
  const readingTime = getReadingTime(content);

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-24 md:pt-32 pb-8 md:pb-12"
        style={{ backgroundColor: "var(--mono-bg)" }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            {/* Reading Time + Date */}
            <div className="flex items-center gap-4 mb-6">
              <p
                className="text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                {formatDate(frontmatter.date)}
              </p>
              <span
                className="text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                /
              </span>
              <p
                className="text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                {readingTime} min read
              </p>
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl leading-[1.1] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--mono-text)",
              }}
            >
              {frontmatter.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded"
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
        </div>
      </section>

      {/* Content Section — two column on desktop */}
      <section
        className="py-12 md:py-16 border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-16">
            {/* Article */}
            <div className="max-w-3xl">
              <article>
                <MDXRemote
                  source={content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </article>
            </div>

            {/* TOC Sidebar */}
            <TableOfContents items={toc} readingTime={readingTime} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
