const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

export function getAppPathname(pathname = window.location.pathname) {
  let appPath = pathname || '/'
  if (basePath && basePath !== '/') {
    if (pathname === basePath) return '/'
    if (pathname.startsWith(`${basePath}/`)) appPath = pathname.slice(basePath.length) || '/'
  }
  return appPath.length > 1 ? appPath.replace(/\/$/, '') : appPath
}

export function toAppUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}` || '/'
}

export function getSiteUrl(path = '/') {
  return new URL(toAppUrl(path), window.location.origin).href
}
