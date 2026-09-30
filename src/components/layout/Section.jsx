export function Section({ as = 'section', className = '', children, ...props }) {
  const Element = as
  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  )
}
