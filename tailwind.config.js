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
      'button-light-color': '#FFF2BD',
      'primary-dark-color': '#010101',
      'font-light-color': '#000000',
      'font-dark-color': '#F8F8F8',
      'font-accent-light-color': '#FF2625',
      'font-accent-dark-color': '#F8F8F8',
      'secondary-light-color': '#FFA9A9',
      'accent-light-color-1': '#FF2625',
      'accent-light-color-2': '#FF77E9',
      'accent-light-color-3': '#FCC757',
      'secondary-dark-color': '#780CC0',
      'accent-dark-color-1': '#3A07B0',
      'accent-dark-color-2': '#FF07E0'
    },
    },
  },
  plugins: [],
};
