/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className'],
  tailwindFunctions: ['classNames'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
        'sm': '30em',
        'md': '48em',
        'lg': '62em',
        'xl': '80em',
        '2xl': '96em',
    },
    extend: {},
  },
};
