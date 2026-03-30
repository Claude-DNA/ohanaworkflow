/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        neural: {
          50: "#e2e8f0",
          100: "#cbd5e1",
          200: "#1e293b",
          300: "#334155",
          400: "#94a3b8",
          500: "#64748b",
          600: "#94a3b8",
          700: "#cbd5e1",
          800: "#e2e8f0",
          900: "#f8fafc",
          950: "#0a0a0f",
        },
        void: {
          DEFAULT: "#0a0a0f",
          light: "#0d1117",
          card: "#111827",
          hover: "#1a1a2e",
        },
        accent: {
          blue: "#00d4ff",
          purple: "#a855f7",
          "purple-light": "#c084fc",
          green: "#10b981",
          amber: "#f59e0b",
        },
        glow: {
          blue: "rgba(0, 212, 255, 0.15)",
          purple: "rgba(168, 85, 247, 0.15)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    }
  },
  plugins: [],
}
