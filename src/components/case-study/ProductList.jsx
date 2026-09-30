import { Reveal } from '../motion/Reveal'

export function ProductList({ products }) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {products.map((product, index) => (
        <Reveal key={product} delay={index * 0.06} className="flex aspect-[4/3] flex-col justify-between bg-olive-dark p-6 text-canvas">
          <span className="text-sm opacity-60">0{index + 1}</span>
          <p className="font-display text-3xl leading-none">{product}</p>
        </Reveal>
      ))}
    </div>
  )
}
