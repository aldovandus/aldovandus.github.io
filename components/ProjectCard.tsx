"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/lib/project-types";
import { getLocalizedValue } from "@/lib/project-types";
import type { Locale } from "@/i18n/routing";
import { TechTags } from "./TechTags";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={getLocalizedValue(project.title, locale)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-0 top-0 font-mono bg-background/90 px-3 py-1.5 text-[0.65rem] font-medium tracking-wider text-muted backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col border-t border-border p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
          {getLocalizedValue(project.title, locale)}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {getLocalizedValue(project.description, locale)}
        </p>

        <div className="mt-4">
          <TechTags technologies={project.technologies} limit={4} />
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-5 border-t border-border pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider text-accent transition-colors hover:text-accent-hover"
          >
            {t("caseStudy")}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-foreground"
            >
              {t("liveDemo")} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
