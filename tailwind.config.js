/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        olive: 'var(--color-olive)',
        'olive-dark': 'var(--color-olive-dark)',
        sand: 'var(--color-sand)',
        line: 'var(--color-line)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        site: '90rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
