import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("hero");

  return (
    <div className="page-shell mx-auto flex max-w-3xl flex-col items-center py-32 text-center">
      <p className="font-mono text-6xl font-semibold tracking-tight text-muted">404</p>
      <h1 className="font-display mt-4 text-2xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
      <Link href="/" className="btn-primary mt-8">
        {t("ctaProjects")}
      </Link>
    </div>
  );
}
