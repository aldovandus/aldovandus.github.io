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
    <div className={`mb-12 animate-fade-in sm:mb-14 ${className}`}>
      {label && <p className="section-label mb-4">{label}</p>}
      <Tag className="font-display text-3xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
