// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../app/**/*.{js,ts,jsx,tsx}", // Add this to include your app's components
  ],
  theme: {
    extend: {
      colors: {
        // Method 1: Simple single colors
        primary: "#FF0000",
        secondary: "#00FF00",

        // Method 2: Object with shade variations
        custom: {
          50: "#f8fafc",
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

        // Method 3: Semantic naming
        brand: {
          light: "#AED581",
          DEFAULT: "#8BC34A", // This will be used when you just use 'bg-brand'
          dark: "#689F38",
        },
      },
    },
  },
  plugins: [],
};
export default config;
