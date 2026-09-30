import { copyFile, mkdir } from 'node:fs/promises'

await copyFile('dist/index.html', 'dist/404.html')

const projectRoutes = [
  'quinoa-milk',
  'effervescent-tablets',
  'butterfly-pea-rosemary-candy',
  'custard-apple',
]

for (const route of projectRoutes) {
  const directory = `dist/work/${route}`
  await mkdir(directory, { recursive: true })
  await copyFile('dist/index.html', `${directory}/index.html`)
}
