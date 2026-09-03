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
          className="font-mono border border-border bg-surface px-2 py-0.5 text-[0.65rem] font-medium tracking-wide text-muted"
        >
          {tech}
        </span>
      ))}
      {remaining > 0 && (
        <span className="font-mono border border-border px-2 py-0.5 text-[0.65rem] font-medium text-muted">
          +{remaining}
        </span>
      )}
    </div>
  );
}
