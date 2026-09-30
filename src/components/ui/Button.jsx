const variants = {
  primary: 'border-olive bg-olive text-canvas hover:bg-olive-dark',
  outline: 'border-line text-ink hover:border-olive',
  text: 'border-transparent px-0 text-ink hover:text-olive-dark',
}

export function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 border px-5 text-xs font-medium uppercase tracking-[0.13em] transition-all duration-300 ease-editorial hover:-translate-y-0.5 ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }

  return <button type="button" className={classes} {...props}>{children}</button>
}
