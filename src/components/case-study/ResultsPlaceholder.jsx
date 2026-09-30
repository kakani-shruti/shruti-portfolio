import { Reveal } from '../motion/Reveal'

export function ResultsPlaceholder({ note, title = 'Project documentation' }) {
  return (
    <Reveal className="border-l border-olive pl-5 sm:pl-7">
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-olive-dark">{title}</p>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{note}</p>
    </Reveal>
  )
}
