import { Reveal } from '../motion/Reveal'

export function ProcessFlow({ steps }) {
  return (
    <ol className="grid gap-x-8 sm:grid-cols-2 xl:grid-cols-3" aria-label="Development process">
      {steps.map((step, index) => (
        <Reveal
          as="li"
          key={step}
          delay={index * 0.06}
          className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-t border-line py-6 sm:min-h-40 sm:grid-cols-1 sm:content-between sm:py-7"
        >
          <span className="text-xs tracking-[0.12em] text-muted">{String(index + 1).padStart(2, '0')}</span>
          <p className="min-w-0 font-display text-[1.75rem] leading-[1.02] sm:mt-10 sm:text-3xl">{step}</p>
          {index < steps.length - 1 && (
            <span className="col-start-2 mt-5 text-base leading-none text-olive sm:col-start-1 sm:mt-6" aria-hidden="true">↓</span>
          )}
        </Reveal>
      ))}
    </ol>
  )
}
