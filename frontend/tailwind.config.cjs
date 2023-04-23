/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-100': '#0FC2C0',
        'green-500': '#023535',
      },
    },
  },
  plugins: [],
};

