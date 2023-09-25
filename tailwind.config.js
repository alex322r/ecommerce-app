/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'headset': "url('./assets/icons/headset.svg')",
        'car': "url('./assets/icons/car.svg')",
        'place': "url('./assets/icons/place.svg')",

      },
      backgroundSize: {
        'full': '100%',
        'icon': '28px 16px'
      }

    },
  },
  plugins: [],
}
