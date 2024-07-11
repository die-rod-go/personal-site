/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        //"cus-primary": "#D33F49",
        "cus-primary": "#FF6969",
        "cus-secondary": "#0C1844",
        "cus-accent": "#C80036",
        "cus-background": "#FFF5E1",
      },
    },
  },
  plugins: [],
};
