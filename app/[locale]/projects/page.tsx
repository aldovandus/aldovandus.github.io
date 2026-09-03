import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getAllProjects } from "@/lib/projects";
import type { Locale } from "@/i18n/routing";

type Props = PageProps<"/[locale]/projects">;

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("projects");
  const projects = getAllProjects();

  return (
    <div className="page-shell mx-auto max-w-6xl py-16 sm:py-24">
      <SectionHeading as="h1" title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.slug} className="bg-background">
            <ProjectCard
              project={project}
              locale={locale as Locale}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
