# Deployment notes

The portfolio is a Vite single-page application. Its production output is generated in `dist/` with:

```sh
npm run build
```

The included `public/_redirects` file is copied into the build and provides an SPA fallback on Netlify-compatible hosts, ensuring direct visits to `/work/*` routes resolve to `index.html`.

For another static host, configure its equivalent rewrite so every non-file request serves `/index.html` with a successful response. Do not redirect the URL itself; the client-side router reads the original pathname.

No production domain is currently configured. Canonical and Open Graph URLs are resolved from the active deployment origin at runtime.
