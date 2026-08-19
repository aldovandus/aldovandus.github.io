"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitch() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5 text-xs font-semibold">
      {(["it", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          className={`rounded-md px-2.5 py-1 uppercase transition-all ${
            locale === code
              ? "bg-accent text-white shadow-sm dark:text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
