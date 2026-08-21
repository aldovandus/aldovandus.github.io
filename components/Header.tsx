"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/lib/site";

export function Header() {
  const t = useTranslations("nav");

  const links = [
    { href: "/projects" as const, label: t("projects") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="font-display flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-[0.7rem] font-bold tracking-wide text-white dark:text-background">
            AV
          </span>
          <span className="font-display transition-colors group-hover:text-accent">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>

      <nav className="flex items-center justify-center gap-8 border-t border-border/50 px-6 py-3 md:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
