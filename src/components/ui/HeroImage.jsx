import { ImageReveal } from '../motion/ImageReveal'

export function HeroImage({
  src,
  alt = '',
  aspectRatio = '4 / 5',
  objectPosition = 'center',
  caption,
  className = '',
}) {
  return (
    <figure className={className}>
      <ImageReveal className="bg-transparent">
        <div className="bg-[#e7e2d8] p-2.5 sm:p-3">
          <div style={{ aspectRatio }} className="overflow-hidden bg-[#b9b9ad]">
            {src ? (
              <img
                src={src}
                alt={alt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover"
                style={{ objectPosition }}
              />
            ) : (
              <div
                className="h-full w-full bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(62,74,57,0.09))]"
                role="img"
                aria-label={alt || 'Space reserved for a professional portrait or project photograph'}
              />
            )}
          </div>
        </div>
      </ImageReveal>
      {caption && <figcaption className="mt-3 max-w-sm text-sm leading-5 text-muted">{caption}</figcaption>}
    </figure>
  )
}
