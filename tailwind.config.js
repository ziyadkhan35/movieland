/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'land-cyan': '#00C8F0', //alternative 12F4DC 00C8F0 19D9FF
        'land-gray': '#EAEFF2',
        'land-black': '#040D12',
        'land-cyan-hover': '#29ADB2',
      },
      fontFamily: {
        'gemunu': ['Gemunu Libre', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '34rem'
      }
    },
  },
  plugins: [],
}
