export function Tag({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center border border-line px-3 py-2 text-[0.68rem] uppercase tracking-[0.12em] text-muted ${className}`}>
      {children}
    </span>
  )
}
