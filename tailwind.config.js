/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "cus-home": "var(--home-secondary)",
        "cus-blog": "var(--blog-secondary)",
        "cus-showcase": "var(--showcase-secondary)",
        "cus-contact": "var(--contact-secondary)",
        "cus-primary": "var(--cus-primary)",
        "cus-secondary": "var(--cus-secondary)",
        "cus-accent": "var(--cus-accent)",
        "cus-background": "var(--cus-background)",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
