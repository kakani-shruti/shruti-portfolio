import { ImagePlus } from 'lucide-react'
import { Reveal } from '../motion/Reveal'

export function EditorialImagePlaceholder({
  eyebrow = 'Project documentation',
  title,
  aspect = 'aspect-[4/3]',
  className = '',
}) {
  return (
    <Reveal
      className={`grid ${aspect} min-h-40 place-items-center border border-line bg-[#e5dfd3] p-6 text-center sm:min-h-48 ${className}`}
    >
      <div className="max-w-56">
        <ImagePlus className="mx-auto text-olive" size={18} strokeWidth={1.25} aria-hidden="true" />
        <p className="mt-4 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-olive-dark">{eyebrow}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{title}</p>
      </div>
    </Reveal>
  )
}
