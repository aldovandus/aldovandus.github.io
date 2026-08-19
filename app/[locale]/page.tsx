import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { getFeaturedProjects } from "@/lib/projects";
import type { Locale } from "@/i18n/routing";

type Props = PageProps<"/[locale]">;

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("hero");
  const home = await getTranslations("home");
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <section className="animate-fade-in">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-3xl">
            <p className="section-label mb-6">Portfolio</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              {t("name")}
            </h1>
            <p className="mt-6 text-xl font-medium leading-snug tracking-tight text-foreground/80 sm:text-2xl">
              {t("headline")}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {t("subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                {t("ctaProjects")}
              </Link>
              <Link href="/contact" className="btn-secondary">
                {t("ctaContact")}
              </Link>
            </div>
          </div>
          <ProfilePhoto alt={t("profileAlt")} priority />
        </div>
      </section>

      <section className="mt-28 animate-fade-in">
        <SectionHeading
          title={home("featuredTitle")}
          subtitle={home("featuredSubtitle")}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale as Locale}
            />
          ))}
        </div>
      </section>

      <section className="card mt-28 animate-fade-in overflow-hidden">
        <div className="flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl leading-relaxed text-muted">{home("stackStrip")}</p>
          <Link
            href="/about"
            className="btn-secondary shrink-0 self-start sm:self-center"
          >
            {home("learnMore")} →
          </Link>
        </div>
      </section>
    </div>
  );
}
