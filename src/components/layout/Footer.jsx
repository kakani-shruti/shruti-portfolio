import { Container } from './Container'

const footerLinks = [
  ['Home', '#main-content'],
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export function Footer() {
  return (
    <footer className="border-t border-line py-10 sm:py-12">
      <Container className="grid gap-9 sm:grid-cols-2 sm:items-end lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Shruti Kakani</p>
          <p className="mt-2 text-sm text-muted">Food Processing Technology</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted lg:justify-center" aria-label="Footer navigation">
          {footerLinks.map(([label, href]) => <a key={label} href={href} className="transition-colors hover:text-ink">{label}</a>)}
        </nav>
        <p className="text-xs uppercase tracking-[0.14em] text-muted sm:col-span-2 lg:col-span-1 lg:text-right">© {new Date().getFullYear()}</p>
      </Container>
    </footer>
  )
}
