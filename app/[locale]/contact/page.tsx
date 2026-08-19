import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/SectionHeading";

type Props = PageProps<"/[locale]/contact">;

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  const contacts = [
    {
      href: "mailto:aldovandus@gmail.com",
      label: t("emailLabel"),
      value: "aldovandus@gmail.com",
      external: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      href: "https://linkedin.com/in/aldo-vandus",
      label: t("linkedinLabel"),
      value: "linkedin.com/in/aldo-vandus",
      external: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <SectionHeading
        as="h1"
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="animate-fade-in space-y-4">
        {contacts.map((contact) => (
          <a
            key={contact.href}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener noreferrer" : undefined}
            className="card card-interactive group flex items-center gap-5 p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white dark:group-hover:text-background">
              {contact.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {contact.label}
              </p>
              <p className="mt-1 truncate text-base font-medium text-foreground transition-colors group-hover:text-accent">
                {contact.value}
              </p>
            </div>
            <span className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">
              {contact.external ? "↗" : "→"}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
