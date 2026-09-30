import { Container } from '../layout/Container'
import { Reveal } from '../motion/Reveal'

export function CaseStudySection({ number, title, children, tone = 'canvas', className = '' }) {
  const background = tone === 'warm' ? 'bg-[#ebe6dc]' : 'bg-canvas'

  return (
    <section className={`${background} py-20 sm:py-28 lg:py-36 ${className}`}>
      <Container>
        <div className="grid min-w-0 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="min-w-0 lg:col-span-3">
            <p className="text-sm text-muted">{number}</p>
            <h2 className="mt-3 max-w-full break-words font-display text-3xl leading-[1.05] italic text-olive-dark">{title}</h2>
          </Reveal>
          <div className="min-w-0 lg:col-span-8 lg:col-start-5">{children}</div>
        </div>
      </Container>
    </section>
  )
}
