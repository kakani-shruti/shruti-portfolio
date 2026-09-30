import { ArrowLeft } from 'lucide-react'
import { Container } from '../layout/Container'
import { toAppUrl } from '../../utils/routing'
import { Reveal } from '../motion/Reveal'
import { ProjectImage } from '../ui/ProjectImage'

export function CaseStudyHero({ project }) {
  const study = project.caseStudy
  const displayTitle = study.displayTitle || project.title
  const titleSize = displayTitle.length > 60
    ? 'text-[clamp(2rem,2.9vw,3.25rem)] leading-[1.08]'
    : 'text-[clamp(2.2rem,3.5vw,3.75rem)] leading-[1.04]'

  return (
    <header className="pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pb-36 lg:pt-24">
      <Container>
        <Reveal>
          <a href={toAppUrl('/#work')} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
            <ArrowLeft size={15} strokeWidth={1.5} aria-hidden="true" /> Selected Work
          </a>
        </Reveal>
        <Reveal delay={0.03} className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <span>{project.number} / 04</span>
          <span>{study.category}</span>
        </Reveal>

        <div className="mt-10 grid gap-y-8 lg:grid-cols-12 lg:items-start lg:gap-x-12">
          <Reveal delay={0.06} className="min-w-0 lg:col-span-8">
            <h1 className={`max-w-[24ch] font-display font-normal tracking-[-0.025em] ${titleSize}`}>
              {displayTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.12} className="min-w-0 lg:col-span-4 lg:pt-2">
            <p className="max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">{project.description}</p>
          </Reveal>
        </div>

        <ProjectImage
          {...project}
          aspectRatio="16 / 9"
          className="group mt-14 sm:mt-20"
          caption="Temporary editorial study — original project photography to be added."
        />
      </Container>
    </header>
  )
}
