import { motion as Motion, useReducedMotion } from 'framer-motion'

export function ProjectImage({ src, image, alt, aspectRatio = '4 / 3', objectPosition = 'center', caption, className = '', loading = 'lazy' }) {
  const reduceMotion = useReducedMotion()
  const imageSource = src ?? image

  return (
    <figure className={className}>
      <Motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden bg-sand"
        style={{ aspectRatio }}
      >
        <img
          src={imageSource}
          alt={alt}
          loading={loading}
          decoding="async"
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="h-full w-full object-cover transition duration-700 ease-editorial group-hover:scale-[1.025]"
          style={{ objectPosition }}
        />
      </Motion.div>
      {caption && <figcaption className="mt-3 max-w-xl text-xs leading-5 text-muted">{caption}</figcaption>}
    </figure>
  )
}
