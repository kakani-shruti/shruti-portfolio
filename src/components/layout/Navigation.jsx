import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import { Container } from './Container'
import { getAppPathname, toAppUrl } from '../../utils/routing'

const links = [
  { label: 'Home', href: '#main-content' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const [activeSection, setActiveSection] = useState(() => getAppPathname().startsWith('/work/') ? 'Work' : 'Home')
  const reduceMotion = useReducedMotion()
  const onHomePage = getAppPathname() === '/'

  useEffect(() => {
    const updateNavigation = () => {
      setScrolled(window.scrollY > 24)

      if (!onHomePage) {
        setActiveSection(getAppPathname().startsWith('/work/') ? 'Work' : 'Home')
        return
      }

      const work = document.querySelector('#work')
      const experience = document.querySelector('#experience')
      const about = document.querySelector('#about')
      const contact = document.querySelector('#contact')
      const threshold = 140
      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      if (atPageEnd || (contact && contact.getBoundingClientRect().top <= threshold)) setActiveSection('Contact')
      else if (about && about.getBoundingClientRect().top <= threshold) setActiveSection('About')
      else if (experience && experience.getBoundingClientRect().top <= threshold) setActiveSection('Experience')
      else if (work && work.getBoundingClientRect().top <= threshold) setActiveSection('Work')
      else setActiveSection('Home')
    }

    updateNavigation()
    window.addEventListener('scroll', updateNavigation, { passive: true })
    return () => window.removeEventListener('scroll', updateNavigation)
  }, [onHomePage])

  useEffect(() => {
    if (!open) return undefined
    const handleKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <div className="h-[5.25rem]">
      <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ease-editorial ${scrolled ? 'border-b border-line bg-[rgba(243,239,230,0.9)] backdrop-blur-[8px]' : 'border-b border-transparent bg-transparent'}`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Container className={`flex items-center justify-between transition-[height] duration-500 ease-editorial ${scrolled ? 'h-[4.5rem]' : 'h-[5.25rem]'}`}>
        <a href={onHomePage ? '#main-content' : toAppUrl('/#main-content')} className="group leading-none" aria-label="Shruti Kakani, home">
          <span className="block font-display text-[1.4rem] tracking-[-0.02em] sm:text-[1.55rem]">Shruti Kakani</span>
          <span className={`mt-1.5 hidden text-[0.68rem] uppercase tracking-[0.15em] text-muted transition-[opacity,transform] duration-300 sm:block ${scrolled ? '-translate-y-0.5 opacity-0' : 'opacity-100'}`}>Food Processing Technology</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={onHomePage ? link.href : toAppUrl(`/${link.href}`)}
              className={`nav-link ${activeSection === link.label ? 'text-ink' : ''}`}
              aria-current={activeSection === link.label ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="grid h-10 w-10 place-items-center lg:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
        </Container>

        <AnimatePresence>
          {open && (
            <Motion.nav
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-full w-full border-b border-line bg-canvas px-5 pb-8 pt-4 sm:px-8 lg:hidden"
              aria-label="Mobile navigation"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={onHomePage ? link.href : toAppUrl(`/${link.href}`)}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 font-display text-3xl"
                  aria-current={activeSection === link.label ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </Motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  )
}
