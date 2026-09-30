import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Reveal } from '../motion/Reveal'
import { experience } from '../../data/profile'

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-t border-line py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-3">
            <p className="font-display text-2xl italic text-olive-dark">Experience</p>
          </Reveal>
          <ExperienceItem />
        </div>
      </Container>
    </Section>
  )
}

function ExperienceItem() {
  return (
    <Reveal delay={0.06} className="min-w-0 border-t border-line pt-6 lg:col-span-8 lg:col-start-5">
      <div className="grid gap-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5">
        <span className="text-sm text-muted">01</span>
        <div className="grid min-w-0 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
          <div>
            <h2 className="font-display text-4xl leading-none tracking-[-0.03em] sm:text-5xl">{experience.organization}</h2>
            <p className="mt-3 text-base text-olive-dark">{experience.type}</p>
          </div>
          <dl className="space-y-5 text-sm md:min-w-40">
            <div><dt className="technical-label">Location</dt><dd className="mt-2">{experience.location}</dd></div>
            <div><dt className="technical-label">Period</dt><dd className="mt-2">{experience.period}</dd></div>
          </dl>
        </div>
      </div>
    </Reveal>
  )
}
