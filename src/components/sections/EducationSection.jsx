import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Reveal } from '../motion/Reveal'
import { education } from '../../data/profile'

export function EducationSection() {
  return (
    <Section className="py-20 sm:py-28 lg:py-36" aria-labelledby="education-title">
      <Container>
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-3">
            <p className="font-display text-2xl italic text-olive-dark">Education</p>
          </Reveal>
          <Reveal delay={0.06} className="min-w-0 lg:col-span-8 lg:col-start-5">
            <h2 id="education-title" className="max-w-2xl font-display text-4xl leading-[1.04] tracking-[-0.03em] sm:text-5xl">
              {education.degree}
            </h2>
            <p className="mt-4 text-lg text-muted">{education.institution}</p>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-6 sm:max-w-xl">
              <div><dt className="technical-label">CGPA</dt><dd className="mt-3 font-display text-4xl">{education.cgpa}</dd></div>
              <div><dt className="technical-label">Expected graduation</dt><dd className="mt-3 font-display text-4xl">{education.graduation}</dd></div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
