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
    <footer className="mt-auto border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted">
            © {year}{" "}
            <span className="font-display font-semibold text-foreground">
              {siteConfig.name}
            </span>
          </p>
          <p className="mt-1.5 flex items-center gap-2 text-xs text-muted">
            <span className="status-dot" />
            {t("builtWith")}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
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
