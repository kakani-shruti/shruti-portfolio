import { motion as Motion, useReducedMotion } from 'framer-motion'

export function ImageReveal({ children, className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.div
      initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(0 0 8% 0)', y: 12 }}
      animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)', y: 0 }}
      transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden bg-sand ${className}`}
    >
      {children}
    </Motion.div>
  )
}
