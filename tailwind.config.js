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
      'font-acent-light-color': '#FF2625',
      'font-acent-dark-color': '#F8F8F8',
      'secondary-light-color': '#78DCCA',
      'acent-light-color-1': '#3A1212',
      'acent-light-color-2': '#FF77E9',
      'secondary-dark-color': '#780CC0',
      'acent-dark-color-1': '#3A07B0',
      'acent-dark-color-2': '#FF07E0'
    },
    },
  },
  plugins: [],
};
