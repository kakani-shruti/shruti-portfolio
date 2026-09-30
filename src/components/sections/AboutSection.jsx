import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Reveal } from '../motion/Reveal'
import { CapabilityList } from './CapabilityList'

export function AboutSection() {
  return (
    <Section id="about" className="bg-[#ebe6dc] py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-3">
            <p className="font-display text-2xl italic text-olive-dark">About</p>
          </Reveal>
          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            <Reveal delay={0.06}>
              <h2 className="max-w-3xl font-display text-[clamp(2.4rem,4.5vw,4.75rem)] leading-[1] tracking-[-0.035em]">
                Learning through formulation, evaluation and product development.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 max-w-2xl">
              <p className="text-lg leading-8 text-muted">
                Shruti is studying Food Processing Technology and is currently interested in how food products are formulated, processed and evaluated. Her academic projects have explored plant-based beverages, functional formulations, confectionery and value-added fruit products.
              </p>
            </Reveal>
            <Reveal delay={0.14} className="mt-8 border-l border-olive pl-5 sm:pl-7">
              <p className="max-w-2xl text-base leading-7 text-muted">
                Food Processing Technology student with academic experience in product development, formulation and evaluation, alongside an industry internship.
              </p>
            </Reveal>
          </div>
        </div>

        <CapabilityList />
      </Container>
    </Section>
  )
}
