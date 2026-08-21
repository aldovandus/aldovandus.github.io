import type { Locale } from "@/i18n/routing";

export type LocalizedString = Record<Locale, string>;

export type Project = {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  year: number;
  technologies: string[];
  liveUrl?: string;
  featured: boolean;
  image: string;
  content: LocalizedString;
};

export function getLocalizedValue(
  value: LocalizedString,
  locale: Locale,
): string {
  return value[locale];
}
