/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  purge: {
    options: {
      safelist: [
        {
          pattern: /bg-*/,
        },
        {
          pattern: /my-*/,
        },
        {
          pattern: /py-*/,
        }
      ]
    },
  },
  plugins: [],
}

