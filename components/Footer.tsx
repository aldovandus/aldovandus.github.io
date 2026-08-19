import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 text-sm text-muted sm:flex-row">
        <p>
          © {year}{" "}
          <span className="font-medium text-foreground">Aldo Vandus</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          {t("builtWith")}
        </p>
      </div>
    </footer>
  );
}
