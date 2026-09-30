import { ArrowRight } from 'lucide-react'
import { Container } from '../layout/Container'
import { projects } from '../../data/projects'

function navigate(event, href) {
  event.preventDefault()
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'auto' })
}

export function ProjectNavigation({ project }) {
  const index = projects.findIndex((item) => item.id === project.id)
  const previous = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null

  return (
    <nav className="border-t border-line py-12 sm:py-16" aria-label="Project navigation">
      <Container>
        <div className="grid gap-7 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
          <div className="text-sm text-muted">{project.number} / 04</div>
          <div className="flex items-end justify-between gap-8 sm:col-start-3 sm:justify-end">
            {previous ? (
              <a href={previous.route} onClick={(event) => navigate(event, previous.route)} className="text-sm text-muted transition-colors hover:text-ink">← Previous Project</a>
            ) : <span className="text-sm text-line">—</span>}
            {next ? (
              <a href={next.route} onClick={(event) => navigate(event, next.route)} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">Next Project <ArrowRight size={16} strokeWidth={1.5} /></a>
            ) : <span className="text-sm text-line">—</span>}
          </div>
        </div>
      </Container>
    </nav>
  )
}
