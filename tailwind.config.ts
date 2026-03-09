import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        platinum: "#1A1A1A",
        silver: "#C0C0C0",
        gold: "#D4AF37"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 20px 50px rgba(0,0,0,0.4)",
        glow: "0 0 40px rgba(212,175,55,0.25)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.2), transparent 45%), radial-gradient(circle at 80% 80%, rgba(192,192,192,0.1), transparent 35%)"
      }
    }
  },
  plugins: []
} satisfies Config;
