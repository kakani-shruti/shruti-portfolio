import { copyFile, cp, mkdir, rm, writeFile } from 'node:fs/promises'

await rm('assets', { recursive: true, force: true })
await cp('dist/assets', 'assets', { recursive: true })
await rm('images', { recursive: true, force: true })
await cp('dist/images', 'images', { recursive: true })

await copyFile('dist/index.html', 'index.html')
await copyFile('dist/404.html', '404.html')
await rm('work', { recursive: true, force: true })
await cp('dist/work', 'work', { recursive: true })

for (const filename of ['favicon.svg', 'og-shruti-kakani.jpg', 'robots.txt']) {
  await copyFile(`dist/${filename}`, filename)
}

await mkdir('assets', { recursive: true })
await writeFile('.nojekyll', '')
