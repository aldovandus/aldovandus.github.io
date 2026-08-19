import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "@/i18n/routing";

export type LocalizedString = Record<Locale, string>;

export type Project = {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  year: number;
  technologies: string[];
  liveUrl?: string;
  featured: boolean;
  image: string;
  content: LocalizedString;
};

const projectsDirectory = path.join(process.cwd(), "content/projects");

function parseLocalizedField(
  value: unknown,
  fallback = "",
): LocalizedString {
  if (typeof value === "object" && value !== null && "it" in value && "en" in value) {
    const record = value as Record<string, string>;
    return { it: record.it, en: record.en };
  }

  if (typeof value === "string") {
    return { it: value, en: value };
  }

  return { it: fallback, en: fallback };
}

function parseContent(rawContent: string): LocalizedString {
  const itMatch = rawContent.match(/<!--\s*it\s*-->([\s\S]*?)<!--\s*en\s*-->/);
  const enMatch = rawContent.match(/<!--\s*en\s*-->([\s\S]*)/);

  if (itMatch && enMatch) {
    return {
      it: itMatch[1].trim(),
      en: enMatch[1].trim(),
    };
  }

  return { it: rawContent.trim(), en: rawContent.trim() };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectsDirectory).filter((file) => file.endsWith(".md"));

  const projects = files.map((file) => {
    const filePath = path.join(projectsDirectory, file);
    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));

    return {
      slug: data.slug as string,
      title: parseLocalizedField(data.title),
      description: parseLocalizedField(data.description),
      year: data.year as number,
      technologies: data.technologies as string[],
      liveUrl: data.liveUrl as string | undefined,
      featured: Boolean(data.featured),
      image: data.image as string,
      content: parseContent(content),
    };
  });

  return projects.sort((a, b) => b.year - a.year);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getLocalizedValue(
  value: LocalizedString,
  locale: Locale,
): string {
  return value[locale];
}
