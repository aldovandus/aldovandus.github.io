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
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="mb-16 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <ProfilePhoto alt={hero("profileAlt")} size="md" className="sm:mt-1" />
        <SectionHeading
          as="h1"
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-0 text-center sm:text-left"
        />
      </div>

      <section className="mb-16 animate-fade-in">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-accent">
          {t("journeyTitle")}
        </h2>
        <div className="relative space-y-8 border-l border-border pl-8">
          {journey.map((item) => (
            <div key={item.period} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {item.period}
              </p>
              <h3 className="font-display mt-1 font-semibold text-foreground">
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
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent">
          {t("approachTitle")}
        </h2>
        <ul className="space-y-3">
          {approach.map((item) => (
            <li
              key={item}
              className="flex gap-4 border-b border-border/70 py-4 text-sm leading-relaxed text-muted last:border-0"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16 animate-fade-in">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent">
          {t("stackTitle")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(stack).map(([key, value]) => (
            <div key={key} className="border-t border-border pt-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                {key}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band animate-fade-in overflow-hidden">
        <div className="p-8 sm:p-10">
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
