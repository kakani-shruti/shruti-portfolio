import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const reduceMotion = useReducedMotion()
  const MotionComponent = motion[as]

  return (
    <MotionComponent
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}
