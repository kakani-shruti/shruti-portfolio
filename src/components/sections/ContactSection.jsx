import { ArrowUpRight } from 'lucide-react'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Reveal } from '../motion/Reveal'
import { contact } from '../../data/profile'

export function ContactSection() {
  const hasContactLinks = contact.email || contact.linkedin

  return (
    <Section id="contact" className="bg-olive-dark py-20 text-canvas sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-3">
            <p className="font-display text-2xl italic text-[#d8d4c8]">Contact</p>
          </Reveal>
          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            <Reveal delay={0.06}>
              <h2 className="max-w-3xl font-display text-[clamp(2.8rem,5.5vw,6rem)] leading-[0.96] tracking-[-0.04em]">
                Let’s connect.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#d8d4c8]">
                For enquiries related to food product development, research or early-career opportunities.
              </p>
            </Reveal>

            {hasContactLinks ? (
              <Reveal delay={0.12} className="mt-12 flex flex-wrap gap-x-9 gap-y-5">
                {contact.email && <ContactLink href={`mailto:${contact.email}`}>Email</ContactLink>}
                {contact.linkedin && <ContactLink href={contact.linkedin} external>LinkedIn</ContactLink>}
              </Reveal>
            ) : (
              <Reveal delay={0.12} className="mt-12 border-t border-[rgba(243,239,230,0.28)] pt-6">
                <p className="text-sm text-[#d8d4c8]">Contact details will be added once verified.</p>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function ContactLink({ href, external = false, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 border-b border-[rgba(243,239,230,0.45)] pb-2 text-sm transition-colors hover:border-canvas"
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}<ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}
