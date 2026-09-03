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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between pl-[calc(1.5rem+2.5rem)] pr-6 sm:pl-[calc(2rem+3rem)] sm:pr-8 lg:pl-[calc(2rem+3.5rem)]">
        <Link
          href="/"
          className="group flex items-center gap-3 text-foreground"
        >
          <span className="font-mono flex h-7 w-7 items-center justify-center border border-accent bg-accent text-[0.65rem] font-semibold tracking-wider text-card">
            AV
          </span>
          <span className="font-display text-sm font-semibold tracking-tight transition-colors group-hover:text-accent">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <a href={siteConfig.cv} download className="nav-link">
            {t("cv")}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={siteConfig.cv} download className="nav-link md:hidden">
            {t("cv")}
          </a>
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>

      <nav className="flex items-center justify-center gap-7 border-t border-border/80 px-6 py-2.5 md:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
