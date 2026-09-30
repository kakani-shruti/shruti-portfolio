import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Reveal } from '../motion/Reveal'
import { ProjectImage } from '../ui/ProjectImage'
import { ProjectLink } from '../ui/ProjectLink'
import { projects } from '../../data/projects'

export function SelectedWork() {
  return (
    <Section id="work" className="py-20 sm:py-28 lg:py-40">
      <Container>
        <Reveal className="grid gap-y-5 lg:grid-cols-12 lg:gap-x-8">
          <p className="font-display text-2xl italic text-olive-dark lg:col-span-3">Selected work</p>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:col-span-7 lg:col-start-5 lg:text-6xl">
            Four academic projects in food product development, formulation and evaluation.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-28 sm:mt-28 sm:space-y-36 lg:mt-40 lg:space-y-52">
          {projects.map((project) => <ProjectEntry key={project.id} project={project} />)}
        </div>
      </Container>
    </Section>
  )
}

function ProjectEntry({ project }) {
  if (project.layout === 'lead') return <LeadProject project={project} />
  if (project.layout === 'reverse') return <ReverseProject project={project} />
  if (project.layout === 'wide') return <WideProject project={project} />
  return <SplitProject project={project} />
}

function LeadProject({ project }) {
  return (
    <article className="group grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
      <ProjectImage {...project} className="lg:col-span-8" />
      <ProjectCopy project={project} className="lg:col-span-4 lg:pb-4" titleClassName="text-5xl sm:text-6xl" />
    </article>
  )
}

function ReverseProject({ project }) {
  return (
    <article className="group grid gap-y-8 lg:grid-cols-12 lg:items-center lg:gap-x-8">
      <ProjectCopy project={project} className="lg:col-span-5 lg:pr-8" titleClassName="text-5xl sm:text-6xl" />
      <ProjectImage {...project} className="mx-auto w-full max-w-[33rem] lg:col-span-7 lg:col-start-6 lg:max-w-none" />
    </article>
  )
}

function WideProject({ project }) {
  return (
    <article className="group">
      <ProjectImage {...project} />
      <div className="mt-8 grid gap-y-6 lg:grid-cols-12 lg:gap-x-8">
        <ProjectCopy project={project} className="lg:col-span-9" titleClassName="text-5xl sm:text-7xl lg:text-8xl" horizontal />
      </div>
    </article>
  )
}

function SplitProject({ project }) {
  return (
    <article className="group grid gap-y-8 lg:grid-cols-12 lg:items-start lg:gap-x-8">
      <ProjectImage {...project} className="lg:col-span-6" />
      <ProjectCopy project={project} className="lg:col-span-5 lg:col-start-8 lg:pt-14" titleClassName="text-5xl sm:text-6xl lg:text-7xl" />
    </article>
  )
}

function ProjectCopy({ project, className = '', titleClassName = '', horizontal = false }) {
  return (
    <Reveal className={`${className} transition-opacity duration-500 group-hover:opacity-90`}>
      <div className={horizontal ? 'grid gap-y-6 lg:grid-cols-9 lg:gap-x-8' : ''}>
        <div className={horizontal ? 'lg:col-span-5' : ''}>
          <p className="mb-4 text-sm text-muted">{project.number} / 04</p>
          <h3 className={`font-display leading-[0.95] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1 ${titleClassName}`}>
            {project.title}
          </h3>
        </div>
        <div className={horizontal ? 'lg:col-span-4 lg:pt-7' : 'mt-7'}>
          <p className="max-w-xl text-base leading-7 text-muted">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.1em] text-olive-dark" aria-label={`${project.title} themes`}>
            {project.categories.map((category) => <li key={category}>{category}</li>)}
          </ul>
          <div className="mt-8"><ProjectLink href={project.route} /></div>
        </div>
      </div>
    </Reveal>
  )
}
