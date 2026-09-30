const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

export function getAppPathname(pathname = window.location.pathname) {
  if (!basePath || basePath === '/') return pathname || '/'
  if (pathname === basePath) return '/'
  if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length) || '/'
  return pathname || '/'
}

export function toAppUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}` || '/'
}

export function getSiteUrl(path = '/') {
  return new URL(toAppUrl(path), window.location.origin).href
}
