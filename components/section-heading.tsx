type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-14 space-y-4">
      <p className="text-accent text-xs font-semibold uppercase tracking-[0.32em]" style={{ color: "rgb(var(--text-muted))" }}>
        {eyebrow}
      </p>
      <h2
        className="text-primary max-w-4xl font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
        style={{ color: "rgb(var(--text-primary))" }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className="text-secondary max-w-xl text-sm leading-8 sm:text-base"
          style={{ color: "rgb(var(--text-secondary))" }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
