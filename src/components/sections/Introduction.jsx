import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Reveal } from '../motion/Reveal'

const facts = [
  ['04', 'Academic projects'],
  ['01', 'Industry internship'],
  ['8.1', 'CGPA'],
  ['2027', 'Expected graduation'],
]

export function Introduction() {
  return (
    <Section id="profile" className="bg-[#ebe6dc] py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-3">
            <p className="font-display text-2xl italic text-olive-dark">Profile</p>
          </Reveal>

          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal delay={0.06}>
              <h2 className="max-w-4xl font-display text-[clamp(2.7rem,5.2vw,5.5rem)] leading-[0.98] tracking-[-0.04em]">
                Currently studying Food Processing Technology at MGM University.
              </h2>
            </Reveal>

            <Reveal delay={0.12} className="mt-8 sm:mt-10">
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                Shruti’s academic work includes four food-product projects covering formulation,
                product development, quality evaluation and the use of food ingredients. She also
                completed an industry internship at NAFARI, Pune, from May to June 2025.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.08} className="mt-16 sm:mt-24 lg:ml-[33.333%] lg:mt-28">
          <dl className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
            {facts.map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-5xl leading-none tracking-[-0.04em] text-ink sm:text-6xl">{value}</dt>
                <dd className="mt-3 max-w-[9rem] text-sm leading-5 text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </Section>
  )
}
