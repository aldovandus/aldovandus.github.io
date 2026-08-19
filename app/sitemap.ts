import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { routing } from "@/i18n/routing";

const baseUrl = "https://aldovandus.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/about", "/contact"];

  const staticEntries = routing.locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );

  const projectEntries = getAllProjects().flatMap((project) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticEntries, ...projectEntries];
}
