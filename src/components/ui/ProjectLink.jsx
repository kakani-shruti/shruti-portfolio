import { ArrowRight } from 'lucide-react'

export function ProjectLink({ href, children = 'View project' }) {
  const navigate = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    window.history.pushState({}, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <a href={href} onClick={navigate} className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-ink">
      {children}
      <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
