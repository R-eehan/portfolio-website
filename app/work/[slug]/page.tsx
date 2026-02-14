import React from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/TableOfContents";
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
  getCaseStudyNavigation,
  getTableOfContents,
  getReadingTime,
} from "@/lib/mdx";
import {
  MetricCard,
  TechnicalToggle,
  Callout,
  ImagePlaceholder,
  CaseStudyNav,
} from "@/components/mdx";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const mdxComponents = {
  MetricCard,
  TechnicalToggle,
  Callout,
  ImagePlaceholder,
  // Style default MDX elements
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text =
      typeof props.children === "string"
        ? props.children
        : String(props.children);
    const id = generateId(text);
    return (
      <h2
        id={id}
        className="text-xl md:text-2xl mt-8 mb-3 scroll-mt-24"
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
        className="text-lg md:text-xl mt-6 mb-2 scroll-mt-24"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: "var(--mono-text)",
        }}
        {...props}
      />
    );
  },
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    // MDX wraps images in <p> tags. Unwrap to prevent invalid HTML
    // (<figure> inside <p>) which causes Next.js hydration errors.
    const childArray = React.Children.toArray(children);
    if (
      childArray.some(
        (child) =>
          React.isValidElement(child) &&
          (child as React.ReactElement<{ src?: string }>).props?.src !==
            undefined
      )
    ) {
      return <>{children}</>;
    }
    return (
      <p
        className="text-base leading-relaxed mb-6"
        style={{
          fontFamily: "var(--font-sans)",
          color: "var(--mono-muted)",
        }}
        {...props}
      >
        {children}
      </p>
    );
  },
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
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-lg w-full border"
        style={{ borderColor: "var(--mono-border)" }}
        alt={props.alt || ""}
        {...props}
      />
      {props.alt && (
        <figcaption
          className="mt-2 text-sm text-center"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--mono-muted)",
          }}
        >
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
};

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.frontmatter.title} | Reehan Ahmed`,
    description: caseStudy.frontmatter.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const { frontmatter, content } = caseStudy;
  const navigation = getCaseStudyNavigation(slug);
  const toc = getTableOfContents(content);
  const readingTime = getReadingTime(content);

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
            {/* Case Study Number + Reading Time */}
            <div className="flex items-center gap-4 mb-6">
              <p
                className="text-xs tracking-[0.2em] uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--mono-accent)",
                }}
              >
                Case Study {frontmatter.number}
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
              className="text-3xl md:text-4xl leading-[1.1] mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--mono-text)",
              }}
            >
              {frontmatter.title}
            </h1>

            {/* Hook */}
            <p
              className="text-base md:text-lg leading-relaxed mb-6 italic"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--mono-muted)",
              }}
            >
              &ldquo;{frontmatter.hook}&rdquo;
            </p>

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
        className="pt-4 md:pt-6 pb-12 md:pb-16 border-t"
        style={{
          backgroundColor: "var(--mono-bg)",
          borderColor: "var(--mono-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-16">
            {/* Article */}
            <div className="max-w-3xl">
              <article className="[&>:first-child]:mt-0">
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

              {/* Navigation */}
              <CaseStudyNav prev={navigation.prev} next={navigation.next} />
            </div>

            {/* TOC Sidebar */}
            <TableOfContents items={toc} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
