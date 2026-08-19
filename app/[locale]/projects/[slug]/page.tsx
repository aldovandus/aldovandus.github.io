import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import { TechTags } from "@/components/TechTags";
import {
  getAllProjects,
  getLocalizedValue,
  getProjectBySlug,
} from "@/lib/projects";
import type { Locale } from "@/i18n/routing";

type Props = PageProps<"/[locale]/projects/[slug]">;

export function generateStaticParams() {
  return getAllProjects().flatMap((project) =>
    ["it", "en"].map((locale) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${getLocalizedValue(project.title, locale as Locale)} — Aldo Vandus`,
    description: getLocalizedValue(project.description, locale as Locale),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("projects");
  const caseStudy = await getTranslations("caseStudy");
  const typedLocale = locale as Locale;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        ← {caseStudy("backToProjects")}
      </Link>

      <div className="card relative mb-10 aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={getLocalizedValue(project.title, typedLocale)}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <header className="mb-12 animate-fade-in">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-accent-muted px-2.5 py-0.5 text-xs font-semibold text-accent">
            {project.year}
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {getLocalizedValue(project.title, typedLocale)}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {getLocalizedValue(project.description, typedLocale)}
        </p>
        {project.liveUrl && (
          <div className="mt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t("liveDemo")} ↗
            </a>
          </div>
        )}
      </header>

      <div className="card animate-fade-in p-8 sm:p-10">
        <MarkdownContent content={getLocalizedValue(project.content, typedLocale)} />
      </div>

      <section className="mt-10 card p-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
          {caseStudy("stack")}
        </h2>
        <TechTags technologies={project.technologies} />
      </section>
    </article>
  );
}
