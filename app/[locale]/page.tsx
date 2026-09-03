import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
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

  const [firstName, ...restName] = t("name").split(" ");
  const lastName = restName.join(" ");

  return (
    <div className="page-shell mx-auto max-w-6xl pb-20 pt-12 sm:pb-28 sm:pt-16">
      <section className="relative grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-20">
        <div className="relative z-10 max-w-xl lg:max-w-none lg:pb-8">
          <p className="section-label mb-8 animate-fade-in">
            {t("availability")}
          </p>

          <h1 className="hero-name animate-fade-in-delay-1 text-[clamp(3rem,7.5vw,5.75rem)] text-foreground">
            <span>{firstName}</span>
            <span className="text-accent">{lastName || firstName}</span>
          </h1>

          <p className="animate-fade-in-delay-2 mt-8 max-w-md font-mono text-sm leading-relaxed tracking-wide text-foreground/80 sm:text-[0.95rem]">
            {t("headline")}
          </p>

          <p className="animate-fade-in-delay-2 mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="animate-fade-in-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="btn-primary">
              {t("ctaProjects")}
            </Link>
            <Link href="/contact" className="btn-secondary">
              {t("ctaContact")}
            </Link>
          </div>
        </div>

        <div className="animate-fade-in relative -mr-[var(--shell-pad-x)] min-h-[22rem] sm:min-h-[28rem] lg:mr-0 lg:min-h-[32rem]">
          <div className="absolute inset-0 overflow-hidden border-y border-border lg:border lg:border-border">
            <Image
              src={siteConfig.profilePhoto}
              alt={t("profileAlt")}
              fill
              priority
              className="object-cover object-[center_18%] grayscale-[15%] contrast-[1.05]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-background/25"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-0 right-0 h-px bg-accent lg:bottom-auto lg:left-0 lg:right-auto lg:top-0 lg:h-full lg:w-px"
            />
          </div>
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <SectionHeading
          label={home("featuredLabel")}
          title={home("featuredTitle")}
          subtitle={home("featuredSubtitle")}
        />
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className={
                index === 0
                  ? "animate-fade-in bg-background"
                  : index === 1
                    ? "animate-fade-in-delay-1 bg-background"
                    : "animate-fade-in-delay-2 bg-background"
              }
            >
              <ProjectCard project={project} locale={locale as Locale} />
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band animate-fade-in mt-24 sm:mt-32">
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
