import { Reveal } from '../motion/Reveal'
import { capabilities } from '../../data/profile'

export function CapabilityList() {
  return (
    <div className="mt-20 grid gap-y-9 lg:ml-[33.333%] lg:mt-28 lg:grid-cols-8 lg:gap-x-8">
      <Reveal className="lg:col-span-8">
        <p className="technical-label">Current areas of work</p>
      </Reveal>
      <ol className="grid min-w-0 sm:grid-cols-2 lg:col-span-8" aria-label="Current areas of capability">
        {capabilities.map((capability, index) => (
          <CapabilityItem key={capability.title} capability={capability} index={index} />
        ))}
      </ol>
    </div>
  )
}

function CapabilityItem({ capability, index }) {
  return (
    <Reveal as="li" delay={index * 0.04} className="min-w-0 border-t border-line py-6 sm:pr-8">
      <span className="text-xs tracking-[0.12em] text-muted">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="mt-5 font-display text-3xl leading-none">{capability.title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{capability.note}</p>
    </Reveal>
  )
}
