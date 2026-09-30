import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Navigation } from './components/layout/Navigation'
import { Hero } from './components/sections/Hero'
import { Introduction } from './components/sections/Introduction'
import { SelectedWork } from './components/sections/SelectedWork'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { AboutSection } from './components/sections/AboutSection'
import { EducationSection } from './components/sections/EducationSection'
import { ContactSection } from './components/sections/ContactSection'
import { CaseStudyPage } from './components/case-study/CaseStudyPage'
import { getProjectByRoute } from './data/projects'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const updatePath = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  useEffect(() => {
    if (pathname !== '/' || !window.location.hash) return
    const target = window.location.hash
    const scrollToTarget = () => document.querySelector(target)?.scrollIntoView()
    const frame = requestAnimationFrame(() => requestAnimationFrame(scrollToTarget))
    const timeout = window.setTimeout(scrollToTarget, 120)
    document.fonts?.ready.then(scrollToTarget)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
    }
  }, [pathname])

  const activeProject = getProjectByRoute(pathname)

  useEffect(() => {
    const title = activeProject
      ? `Shruti Kakani | ${activeProject.title}`
      : 'Shruti Kakani | Food Processing Technology'
    const description = activeProject
      ? activeProject.description
      : 'Portfolio of Shruti Kakani, a Food Processing Technology student exploring product development, formulation, food quality and research.'
    const absoluteUrl = `${window.location.origin}${pathname}`
    const socialImage = `${window.location.origin}/og-shruti-kakani.jpg`

    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', absoluteUrl)
    setMeta('meta[property="og:image"]', 'content', socialImage)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', socialImage)
    setCanonical(absoluteUrl)
  }, [activeProject, pathname])

  if (activeProject) {
    return <CaseStudyPage project={activeProject} />
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink">
      <Navigation />

      <main id="main-content">
        <Hero />
        <Introduction />
        <SelectedWork />
        <ExperienceSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    const propertyMatch = selector.match(/property="([^"]+)"/)
    const nameMatch = selector.match(/name="([^"]+)"/)
    if (propertyMatch) element.setAttribute('property', propertyMatch[1])
    if (nameMatch) element.setAttribute('name', nameMatch[1])
    document.head.appendChild(element)
  }
  element.setAttribute(attribute, value)
}

function setCanonical(href) {
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', href)
}
