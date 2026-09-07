type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  label?: string;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  label,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 animate-fade-in sm:mb-12 ${className}`}>
      {label && <p className="section-label mb-3 sm:mb-4">{label}</p>}
      <Tag className="font-display text-2xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:mt-4 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
