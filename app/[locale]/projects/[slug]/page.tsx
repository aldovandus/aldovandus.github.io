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
    <article className="page-shell mx-auto max-w-3xl py-16 sm:py-24">
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
      >
        ← {caseStudy("backToProjects")}
      </Link>

      <div className="relative mb-10 aspect-[16/10] overflow-hidden border border-border">
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
        <p className="mb-4 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-accent">
          {project.year}
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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

      <div className="animate-fade-in border border-border bg-card p-8 sm:p-10">
        <MarkdownContent content={getLocalizedValue(project.content, typedLocale)} />
      </div>

      <section className="mt-10 border border-border bg-card p-8">
        <h2 className="section-label mb-5">{caseStudy("stack")}</h2>
        <TechTags technologies={project.technologies} />
      </section>
    </article>
  );
}
