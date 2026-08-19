/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./*.html"], // Include root html files too
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0A2A4E',
        'primary-accent': '#00BFFF',
        'primary-text': '#1D2C38',
        'light-bg': '#F4F7F9',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Montserrat', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
