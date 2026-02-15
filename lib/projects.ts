import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getTableOfContents, getReadingTime } from "./mdx";

const PROJECTS_PATH = path.join(process.cwd(), "content/projects");

export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  oneLiner: string;
  githubUrl: string;
}

export interface ProjectSource {
  frontmatter: ProjectFrontmatter;
  content: string;
  slug: string;
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_PATH)) {
    return [];
  }

  const files = fs.readdirSync(PROJECTS_PATH);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): ProjectSource | null {
  const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as ProjectFrontmatter,
    content,
    slug,
  };
}

export function getAllProjects(): ProjectSource[] {
  const slugs = getProjectSlugs();

  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectSource => project !== null)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
}

export { getTableOfContents, getReadingTime };
