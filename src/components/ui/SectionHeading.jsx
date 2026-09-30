export function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <p className="technical-label mb-5">{eyebrow}</p>}
      <h2 className="max-w-sm font-display text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 max-w-md leading-7 text-muted">{description}</p>}
    </div>
  )
}
