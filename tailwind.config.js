/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  purge: {
    options: {
      safelist: [
        'bg-red-800', 'bg-orange-800', 'bg-yellow-800', 'bg-green-800', 'bg-teal-800', 'bg-blue-800', 'bg-indigo-800', 'bg-purple-800', 'bg-pink-800',
        'bg-rose-800', 'bg-emerald-800', 'bg-cyan-800', 'bg-sky-800', 'bg-lime-800', 'bg-amber-800', 'bg-fuchsia-800',
        'bg-gray-800', 'bg-zinc-800', 'bg-stone-800', 'bg-slate-800','bg-violet-800',
        'bg-red-700', 'bg-orange-700', 'bg-yellow-700', 'bg-green-700', 'bg-teal-700', 'bg-blue-700', 'bg-indigo-700', 'bg-purple-700', 'bg-pink-700',
        'bg-rose-700', 'bg-emerald-700', 'bg-cyan-700', 'bg-sky-700', 'bg-lime-700', 'bg-amber-700', 'bg-fuchsia-700',
        'bg-gray-700', 'bg-zinc-700', 'bg-stone-700', 'bg-slate-700','bg-violet-700',
        'bg-neutral-950', 'bg-neutral-900', 'bg-neutral-800', 'bg-neutral-700', 'bg-neutral-600', 'bg-neutral-500', 'bg-neutral-400', 'bg-neutral-300', 'bg-neutral-200', 'bg-neutral-100',
        'bg-neutral-950', 'bg-neutral-900', 'bg-neutral-800', 'bg-neutral-700', 'bg-neutral-600', 'bg-neutral-500', 'bg-neutral-400', 'bg-neutral-300', 'bg-neutral-200', 'bg-neutral-50',
        'bg-neutral-950', 'bg-neutral-900', 'bg-neutral-800', 'bg-neutral-700', 'bg-neutral-600', 'bg-neutral-500', 'bg-neutral-400', 'bg-neutral-300', 'bg-neutral-200', 'bg-neutral-0',
        'my-1', 'my-2', 'my-3', 'my-4', 'my-5', 'my-6', 'my-7', 'my-8',
        'py-1', 'py-2', 'py-3', 'py-4', 'py-5', 'py-6', 'py-7', 'py-8'
      ]
    },
  },
  plugins: [],
}

