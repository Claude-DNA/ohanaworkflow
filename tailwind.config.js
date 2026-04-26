/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Light/airy slate scale (matches conventional Tailwind direction:
        // 50 = lightest, 900 = darkest)
        neural: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        surface: {
          DEFAULT: "#ffffff",
          alt:     "#f8fafc",
          muted:   "#f1f5f9",
          border:  "#e2e8f0",
        },
        accent: {
          blue:           "#06b6d4",  // cyan-500, slightly softer than #00d4ff for light bg
          "blue-light":   "#67e8f9",
          purple:         "#8b5cf6",  // violet-500, more readable on white than #a855f7
          "purple-light": "#c4b5fd",
          green:          "#10b981",
          amber:          "#f59e0b",
        },
        glow: {
          blue:   "rgba(6, 182, 212, 0.15)",
          purple: "rgba(139, 92, 246, 0.15)",
        },
      },
      fontFamily: {
        // Inter is loaded in layout.tsx (--font-inter); Montserrat for headings.
        sans:    ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
      },
      animation: {
        float:           "float 6s ease-in-out infinite",
        "glow-pulse":    "glow-pulse 3s ease-in-out infinite",
        "gradient-shift":"gradient-shift 8s ease infinite",
        "fade-in-up":    "fade-in-up 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "card":      "0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.04)",
        "card-hover":"0 2px 4px rgba(15,23,42,0.06), 0 12px 32px rgba(15,23,42,0.08)",
        "glow-blue": "0 10px 40px rgba(6,182,212,0.25)",
      },
    },
  },
  plugins: [],
};
