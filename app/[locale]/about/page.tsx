import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "@/i18n/navigation";

type Props = PageProps<"/[locale]/about">;

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const hero = await getTranslations("hero");
  const home = await getTranslations("home");
  const journey = t.raw("journey") as Array<{
    period: string;
    role: string;
    description: string;
  }>;
  const approach = t.raw("approach") as string[];
  const stack = t.raw("stack") as Record<string, string>;

  return (
    <div className="page-shell mx-auto max-w-3xl py-12 sm:py-24">
      <div className="mb-12 flex flex-col items-center gap-6 sm:mb-16 sm:flex-row sm:items-start sm:gap-8">
        <ProfilePhoto alt={hero("profileAlt")} size="lg" className="sm:mt-1" />
        <SectionHeading
          as="h1"
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-0 text-center sm:text-left"
        />
      </div>

      <section className="mb-16 animate-fade-in">
        <h2 className="section-label mb-8">{t("journeyTitle")}</h2>
        <div className="relative space-y-0 border-l border-border pl-6 sm:pl-8">
          {journey.map((item) => (
            <div key={item.period} className="relative border-b border-border/70 py-5 last:border-0 sm:py-7">
              <span className="absolute -left-[calc(1.5rem+3.5px)] top-8 h-1.5 w-1.5 bg-accent sm:-left-[calc(2rem+3.5px)] sm:top-9" />
              <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-accent">
                {item.period}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold tracking-tight text-foreground">
                {item.role}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 animate-fade-in">
        <h2 className="section-label mb-6">{t("approachTitle")}</h2>
        <ul className="space-y-0">
          {approach.map((item) => (
            <li
              key={item}
              className="flex gap-4 border-b border-border py-4 text-sm leading-relaxed text-muted last:border-0"
            >
              <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16 animate-fade-in">
        <h2 className="section-label mb-6">{t("stackTitle")}</h2>
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {Object.entries(stack).map(([key, value]) => (
            <div key={key} className="bg-card p-5">
              <h3 className="mb-2 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-accent">
                {key}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band animate-fade-in overflow-hidden">
        <div className="p-6 sm:p-10">
          <h2 className="font-display mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {t("aiTitle")}
          </h2>
          <p className="leading-relaxed text-muted">{t("aiFocus")}</p>
          <Link href="/contact" className="btn-primary mt-8">
            {home("ctaContact")}
          </Link>
        </div>
      </section>
    </div>
  );
}
