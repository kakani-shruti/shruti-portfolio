import { Navigation } from '../layout/Navigation'
import { Reveal } from '../motion/Reveal'
import { CaseStudyHero } from './CaseStudyHero'
import { CaseStudySection } from './CaseStudySection'
import { EvaluationGrid } from './EvaluationGrid'
import { IngredientList } from './IngredientList'
import { ProcessFlow } from './ProcessFlow'
import { ProductList } from './ProductList'
import { ProjectGallery } from './ProjectGallery'
import { ProjectNavigation } from './ProjectNavigation'
import { ResultsPlaceholder } from './ResultsPlaceholder'
import { EditorialImagePlaceholder } from './EditorialImagePlaceholder'

export function CaseStudyPage({ project }) {
  const study = project.caseStudy

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink">
      <Navigation />
      <main id="main-content">
        <CaseStudyHero project={project} />

        <CaseStudySection number="01" title="Overview" tone="warm">
          <Reveal>
            <p className="max-w-3xl font-display text-[clamp(1.9rem,3.2vw,3.35rem)] font-normal leading-[1.12] tracking-[-0.025em]">{study.overview}</p>
          </Reveal>
        </CaseStudySection>

        <CaseStudySection number="02" title="Objective">
          <Reveal>
            <p className="max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">{study.objective}</p>
          </Reveal>
        </CaseStudySection>

        <CaseStudySection number="03" title={project.id === 'effervescent-tablets' ? 'Formulation & development' : 'Development'} tone="warm">
          <ProcessFlow steps={study.process} />
          <Reveal className="mt-10 max-w-2xl text-base leading-7 text-muted">{study.approachNote}</Reveal>
          {project.id === 'effervescent-tablets' && <RsmPlaceholder />}
        </CaseStudySection>

        <CaseStudySection number="04" title={project.id === 'custard-apple' ? 'Raw material & products' : 'Ingredients / materials'}>
          <IngredientList items={study.materials} />
          {study.products && <div className="mt-12 sm:mt-16"><ProductList products={study.products} /></div>}
        </CaseStudySection>

        <CaseStudySection number="05" title={project.id === 'butterfly-pea-rosemary-candy' ? 'Characterization & evaluation' : 'Evaluation'} tone="warm">
          <EvaluationGrid items={study.evaluation} />
        </CaseStudySection>

        <CaseStudySection number="06" title="Outcome / findings">
          <ResultsPlaceholder note={study.resultsNote} />
          <ProjectGallery />
        </CaseStudySection>

        <CaseStudySection number="07" title="Reflection / learning" tone="warm">
          <ResultsPlaceholder title="Reflection" note={study.reflectionNote} />
        </CaseStudySection>
      </main>
      <ProjectNavigation project={project} />
    </div>
  )
}

function RsmPlaceholder() {
  return (
    <Reveal className="mt-12 grid gap-y-7 border border-line bg-canvas p-6 sm:p-9 lg:grid-cols-5 lg:gap-x-8">
      <div className="lg:col-span-2">
        <p className="font-display text-4xl leading-none">Response Surface Methodology</p>
        <p className="mt-5 text-base leading-7 text-muted">Response Surface Methodology was used as part of the formulation optimization process.</p>
      </div>
      <EditorialImagePlaceholder
        eyebrow="Formulation documentation"
        title="RSM graphs and optimization results to be added"
        aspect="aspect-[16/9]"
        className="lg:col-span-3"
      />
    </Reveal>
  )
}
