export function Container({ as = 'div', className = '', children }) {
  const Element = as
  return (
    <Element className={`mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Element>
  )
}
