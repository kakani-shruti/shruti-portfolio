import { Reveal } from '../motion/Reveal'

export function IngredientList({ items }) {
  return (
    <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.name} delay={index * 0.05} className="border-t border-line pt-5">
          <dt className="font-display text-3xl leading-none">{item.name}</dt>
          <dd className="mt-3 text-sm leading-6 text-muted">{item.note}</dd>
        </Reveal>
      ))}
    </dl>
  )
}
