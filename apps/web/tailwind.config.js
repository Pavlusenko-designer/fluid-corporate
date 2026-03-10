/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          900: '#111827',
        },
        sand: {
          50: '#f5f1e7',
          100: '#ebe3d2',
        },
        ink: {
          200: '#cfdae3',
          500: '#6c8598',
          600: '#4d6b80',
          700: '#2e5268',
          800: '#173c54',
          900: '#0f2738',
          950: '#081520',
        },
        accent: {
          200: '#e9d8b2',
          300: '#d8be87',
          500: '#be954a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
