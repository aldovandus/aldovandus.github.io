type TechTagsProps = {
  technologies: string[];
  limit?: number;
};

export function TechTags({ technologies, limit }: TechTagsProps) {
  const visible = limit ? technologies.slice(0, limit) : technologies;
  const remaining = limit ? technologies.length - limit : 0;

  return (
    <div className="flex flex-wrap gap-1.5">
      {visible.map((tech) => (
        <span
          key={tech}
          className="rounded-md bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent"
        >
          {tech}
        </span>
      ))}
      {remaining > 0 && (
        <span className="rounded-md bg-surface px-2 py-0.5 text-xs font-medium text-muted">
          +{remaining}
        </span>
      )}
    </div>
  );
}
