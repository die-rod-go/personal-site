/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "cus-primary": "var(--cus-primary)",
        "cus-secondary": "var(--cus-secondary)",
        "cus-accent": "var(--cus-accent)",
        "cus-background": "var(--cus-background)",
      },
    },
  },
  plugins: [],
};
