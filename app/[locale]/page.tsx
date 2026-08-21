import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
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
      <section className="relative">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="section-label mb-5 animate-fade-in justify-center lg:justify-start">
              {t("availability")}
            </p>

            <h1 className="font-display animate-fade-in-delay-1 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
              {t("name")}
            </h1>

            <p className="animate-fade-in-delay-2 mt-5 text-xl font-medium leading-snug tracking-tight text-foreground/75 sm:text-2xl">
              {t("headline")}
            </p>

            <p className="animate-fade-in-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted mx-auto lg:mx-0">
              {t("subtitle")}
            </p>

            <div className="animate-fade-in-delay-3 mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/projects" className="btn-primary">
                {t("ctaProjects")}
              </Link>
              <Link href="/contact" className="btn-secondary">
                {t("ctaContact")}
              </Link>
              <a
                href={siteConfig.cv}
                download
                className="btn-ghost ml-1"
              >
                {t("ctaCv")} ↓
              </a>
            </div>
          </div>

          <div className="animate-fade-in relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rotate-3 rounded-[1.75rem] bg-accent-muted"
            />
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-accent/15 blur-2xl"
            />
            <ProfilePhoto
              alt={t("profileAlt")}
              priority
              className="animate-float"
            />
          </div>
        </div>
      </section>

      <section className="mt-28 sm:mt-36">
        <SectionHeading
          label={home("featuredLabel")}
          title={home("featuredTitle")}
          subtitle={home("featuredSubtitle")}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className={
                index === 0
                  ? "animate-fade-in"
                  : index === 1
                    ? "animate-fade-in-delay-1"
                    : "animate-fade-in-delay-2"
              }
            >
              <ProjectCard project={project} locale={locale as Locale} />
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band animate-fade-in mt-28 sm:mt-36">
        <div className="flex flex-col gap-8 p-8 sm:flex-row sm:items-end sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <p className="section-label mb-4">{home("ctaLabel")}</p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {home("ctaTitle")}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              {home("ctaSubtitle")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              {home("ctaContact")}
            </Link>
            <Link href="/about" className="btn-secondary">
              {home("learnMore")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
