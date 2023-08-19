/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "960px",
        desktop: "1248px",
      },

    colors: {
      'primary-light-color': '#F1F1F1',
      'primary-dark-color': '#010101',
      'font-light-color': '#000000',
      'font-dark-color': '#F8F8F8',
      'secondary-light-color-1': '#78DCCA',
      'acent-light-color-2': '#3AB7BF',
      'acent-light-color-3': '#FF77E9',
      'secondary-dark-color-1': '#780CC0',
      'acent-dark-color-2': '#3A07B0',
      'acent-dark-color-3': '#FF07E0'
    },
    },
  },
  plugins: [],
};
