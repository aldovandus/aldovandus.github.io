import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

type Props = PageProps<"/[locale]/contact">;

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  const contacts = [
    {
      href: `mailto:${siteConfig.email}`,
      label: t("emailLabel"),
      value: siteConfig.email,
      external: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      href: siteConfig.linkedin,
      label: t("linkedinLabel"),
      value: "linkedin.com/in/aldo-vandus",
      external: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      href: siteConfig.cv,
      label: t("cvLabel"),
      value: "PDF · Full Stack",
      external: false,
      download: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M12 18v-6" />
          <path d="m9 15 3 3 3-3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="page-shell mx-auto max-w-3xl py-16 sm:py-24">
      <SectionHeading as="h1" title={t("title")} subtitle={t("subtitle")} />

      <div className="animate-fade-in space-y-px border border-border bg-border">
        {contacts.map((contact) => (
          <a
            key={contact.href}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener noreferrer" : undefined}
            download={contact.download || undefined}
            className="group flex items-center gap-5 bg-card p-6 transition-colors hover:bg-accent-subtle"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-surface text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-card">
              {contact.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted">
                {contact.label}
              </p>
              <p className="mt-1 truncate text-base font-medium text-foreground transition-colors group-hover:text-accent">
                {contact.value}
              </p>
            </div>
            <span className="shrink-0 font-mono text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">
              {contact.external ? "↗" : contact.download ? "↓" : "→"}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
