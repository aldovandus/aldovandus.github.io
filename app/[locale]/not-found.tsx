import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("hero");

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <p className="text-6xl font-semibold tracking-tight text-muted">404</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        {t("ctaProjects")}
      </Link>
    </div>
  );
}
