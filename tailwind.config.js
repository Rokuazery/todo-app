/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /bg-(red|green|blue)-(500|600|700)/,
      variants: ["lg", "hover", "focus", "lg:hover", "active"],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
