import { copyFile, cp, mkdir, rm, writeFile } from 'node:fs/promises'

await rm('assets', { recursive: true, force: true })
await cp('dist/assets', 'assets', { recursive: true })

await copyFile('dist/index.html', 'index.html')
await copyFile('dist/404.html', '404.html')

for (const filename of ['favicon.svg', 'og-shruti-kakani.jpg', 'robots.txt']) {
  await copyFile(`dist/${filename}`, filename)
}

await mkdir('assets', { recursive: true })
await writeFile('.nojekyll', '')
