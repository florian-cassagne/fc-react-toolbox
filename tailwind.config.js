/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  purge: {
    options: {
      safelist: [
        'bg-white', "bg-black",
        {
          pattern: /bg-(red|orange|green|cyan|blue|purple|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
          variants: ['hover'],
        },
        {
          pattern: /text-(red|orange|green|cyan|blue|purple|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
          variants: ['hover'],
        },
        {
          pattern: /my-[1-9]/,
        },
        {
          pattern: /py-[1-9]/,
        }
      ]
    },
  },
  plugins: [],
}

