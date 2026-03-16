/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ohana: {
          dark: "#0f172a",
          mid: "#1e293b",
          accent: "#6366f1",
          light: "#a5b4fc",
          muted: "#94a3b8",
        }
      }
    }
  },
  plugins: [],
}
