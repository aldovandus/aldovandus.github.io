"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const links = [
    {
      href: `mailto:${siteConfig.email}`,
      label: t("email"),
      external: false,
    },
    {
      href: siteConfig.linkedin,
      label: t("linkedin"),
      external: true,
    },
    {
      href: siteConfig.cv,
      label: t("cv"),
      external: false,
      download: true,
    },
  ];

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 py-10 pl-[calc(1.5rem+2.5rem)] pr-6 sm:flex-row sm:items-center sm:justify-between sm:pl-[calc(2rem+3rem)] sm:pr-8 lg:pl-[calc(2rem+3.5rem)]">
        <div>
          <p className="font-mono text-xs tracking-wide text-muted">
            © {year}{" "}
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </p>
          <p className="mt-2 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
            <span className="status-dot" />
            {t("builtWith")}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.08em] text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(link.download ? { download: true } : {})}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
