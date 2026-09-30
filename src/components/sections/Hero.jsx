import { ArrowDown } from 'lucide-react'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Reveal } from '../motion/Reveal'
import { HeroImage } from '../ui/HeroImage'

const academicDetails = [
  'B.Tech Food Processing Technology',
  'MGM University',
  'CGPA 8.1',
  'Expected 2027',
]

export function Hero() {
  return (
    <Section className="pb-20 pt-8 sm:pb-28 sm:pt-12 lg:pb-32 lg:pt-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-8 lg:row-start-1 lg:self-center">
            <h1 className="font-display text-[clamp(5rem,10vw,9rem)] font-normal leading-[0.78] tracking-[-0.06em]">
              Shruti <span className="italic text-olive-dark">Kakani</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08} className="mt-12 lg:col-span-7 lg:row-start-2 lg:mt-12 lg:pr-8">
            <p className="max-w-[12ch] font-display text-[clamp(3.25rem,5.2vw,5.75rem)] leading-[0.93] tracking-[-0.045em]">
              Food technology, product development &amp; research.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-12 sm:mt-16 lg:col-span-4 lg:col-start-9 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:self-start">
            <HeroImage
              src={`${import.meta.env.BASE_URL}images/shruti-portrait.jpg`}
              alt="Portrait of Shruti Kakani"
              aspectRatio="3 / 4"
              objectPosition="center"
              width={1200}
              height={1600}
              className="mx-auto max-w-[32rem] lg:max-w-[27rem]"
            />
          </Reveal>

          <div className="mt-9 lg:col-span-7 lg:row-start-3 lg:mt-10 lg:pr-8">
            <Reveal delay={0.16}>
              <p className="max-w-xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                I’m a Food Processing Technology student interested in developing food products,
                understanding their quality and studying what makes them work.
              </p>
            </Reveal>

            <Reveal delay={0.22} className="mt-10 sm:mt-14">
              <ul className="grid gap-x-8 gap-y-3 text-sm leading-6 text-ink sm:grid-cols-2" aria-label="Academic details">
                {academicDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26} className="mt-12 hidden lg:block">
              <a href="#profile" className="group inline-flex items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-ink">
                <ArrowDown size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-y-1" />
                Read more
              </a>
            </Reveal>
          </div>

          <a href="#profile" className="mt-10 inline-flex items-center gap-3 text-sm text-muted lg:hidden">
            <ArrowDown size={16} strokeWidth={1.5} />
            Read more
          </a>
        </div>
      </Container>
    </Section>
  )
}
