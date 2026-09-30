import { EditorialImagePlaceholder } from './EditorialImagePlaceholder'

export function ProjectGallery() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="Future project image gallery">
      <EditorialImagePlaceholder title="Original process photography to be added" />
      <EditorialImagePlaceholder title="Original product photography to be added" />
    </div>
  )
}
