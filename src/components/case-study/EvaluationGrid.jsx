import { Reveal } from '../motion/Reveal'

export function EvaluationGrid({ items }) {
  return (
    <ul className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4" aria-label="Evaluation areas">
      {items.map((item, index) => (
        <Reveal as="li" key={item} delay={index * 0.05} className="min-h-36 bg-[#ebe6dc] p-5 sm:min-h-44 sm:p-7">
          <span className="text-sm text-muted">{String(index + 1).padStart(2, '0')}</span>
          <p className="mt-8 font-display text-2xl leading-[1.05] sm:text-3xl">{item}</p>
        </Reveal>
      ))}
    </ul>
  )
}
