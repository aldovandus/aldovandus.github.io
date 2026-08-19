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
    <div className={`mb-14 animate-fade-in ${className}`}>
      {label && <p className="section-label mb-4">{label}</p>}
      <Tag className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}
