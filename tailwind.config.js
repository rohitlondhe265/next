/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D74E7',
        'secondary': '#4F67EB',
        'success': '#2FBB4F',
        'error': '',
        'bg': {
          'l': '#FFFFFF',
          'd': '#24292D'
        },
        'onbg': {
          'l': '#F0F4FF',
          'd': '#2B3137',
        },
        'textp': {
          'l': '#24292D',
          'd': '#FFFFFF'
        },
        'texts': {
          'l': '#2B3137',
          'd': '#FSFAFA'
        },
      },
    },
  },
  plugins: [],
}
