"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/lib/site";

export function Header() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/projects" as const, label: t("projects") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    if (menuOpen) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md pt-[var(--safe-top)]">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between pl-shell pr-shell">
          <Link
            href="/"
            className="group flex min-w-0 flex-col justify-center gap-0.5 text-foreground"
            onClick={closeMenu}
          >
            <span className="truncate font-display text-sm font-semibold leading-none tracking-tight transition-opacity group-hover:opacity-70">
              {siteConfig.name}
            </span>
            <span className="truncate font-mono text-[0.6rem] font-medium uppercase leading-none tracking-[0.16em] text-muted">
              {t("tagline")}
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
            <LanguageSwitch />
            <ThemeToggle />
            <button
              type="button"
              className="menu-btn md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="menu-btn-bar" />
              <span className="menu-btn-bar" />
              <span className="menu-btn-bar" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="mobile-nav-overlay md:hidden"
          aria-label={t("mainNav")}
          onClick={closeMenu}
        >
          <button
            type="button"
            className="mobile-nav-close mobile-nav-item"
            onClick={closeMenu}
            style={{ animationDelay: "0s" }}
          >
            {t("closeMenu")} ×
          </button>
          <ul
            className="flex flex-col gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link, index) => (
              <li
                key={link.href}
                className="mobile-nav-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="mobile-nav-item mt-8 border-t border-border pt-6"
            style={{ animationDelay: "0.2s" }}
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={siteConfig.cv}
              download
              className="mobile-nav-link-muted"
              onClick={closeMenu}
            >
              {t("cv")} ↓
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
