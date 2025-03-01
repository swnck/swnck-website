/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '50%': { transform: 'translateY(-50%)', opacity: 0.1 },
          '60%': { transform: 'translateY(-40%)', opacity: 0.2 },
          '70%': { transform: 'translateY(-30%)', opacity: 0.5 },
          '80%': { transform: 'translateY(-20%)', opacity: 0.7 },
          '90%': { transform: 'translateY(-10%)', opacity: 0.8 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'line-down': 'slideDown 1.4s linear 1',
      }
    }
  },
  plugins: [],
}