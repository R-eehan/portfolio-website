import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_PATH = path.join(process.cwd(), "content/case-studies");

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  number: string;
  hook: string;
  description: string;
  tags: string[];
  metrics?: CaseStudyMetric[];
  prevSlug: string | null;
  nextSlug: string | null;
}

export interface CaseStudySource {
  frontmatter: CaseStudyFrontmatter;
  content: string;
  slug: string;
}

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_PATH)) {
    return [];
  }

  const files = fs.readdirSync(CASE_STUDIES_PATH);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getCaseStudyBySlug(slug: string): CaseStudySource | null {
  const filePath = path.join(CASE_STUDIES_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as CaseStudyFrontmatter,
    content,
    slug,
  };
}

export function getAllCaseStudies(): CaseStudySource[] {
  const slugs = getCaseStudySlugs();

  return slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((study): study is CaseStudySource => study !== null)
    .sort((a, b) => {
      const numA = a.frontmatter.number === "Zero" ? -1 : parseInt(a.frontmatter.number);
      const numB = b.frontmatter.number === "Zero" ? -1 : parseInt(b.frontmatter.number);
      return numA - numB;
    });
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function getTableOfContents(content: string): TOCItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({
      id,
      text,
      level: match[1].length,
    });
  }

  return headings;
}

export function getReadingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, "").replace(/[#*`\[\]()]/g, "");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 230));
}

export function getCaseStudyNavigation(currentSlug: string): {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
} {
  const current = getCaseStudyBySlug(currentSlug);

  if (!current) {
    return { prev: null, next: null };
  }

  const prevStudy = current.frontmatter.prevSlug
    ? getCaseStudyBySlug(current.frontmatter.prevSlug)
    : null;

  const nextStudy = current.frontmatter.nextSlug
    ? getCaseStudyBySlug(current.frontmatter.nextSlug)
    : null;

  return {
    prev: prevStudy
      ? { slug: prevStudy.slug, title: prevStudy.frontmatter.title }
      : null,
    next: nextStudy
      ? { slug: nextStudy.slug, title: nextStudy.frontmatter.title }
      : null,
  };
}
