/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "alta-custom-grey": "#f8f8f8",
        "alta-custom-blue": "#2563eb",
        "alta-custom-amber": "#d97706",
      },
    },
  },
  plugins: [require("daisyui")],
};
