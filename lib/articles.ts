import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getTableOfContents, getReadingTime } from "./mdx";

const ARTICLES_PATH = path.join(process.cwd(), "content/articles");

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface ArticleSource {
  frontmatter: ArticleFrontmatter;
  content: string;
  slug: string;
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_PATH)) {
    return [];
  }

  const files = fs.readdirSync(ARTICLES_PATH);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(slug: string): ArticleSource | null {
  const filePath = path.join(ARTICLES_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as ArticleFrontmatter,
    content,
    slug,
  };
}

export function getAllArticles(): ArticleSource[] {
  const slugs = getArticleSlugs();

  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is ArticleSource => article !== null)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
}

export { getTableOfContents, getReadingTime };
