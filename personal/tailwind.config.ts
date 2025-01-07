import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    
    extend: {
      spacing: {
        '100': '28rem',  // Adds 32rem as an option
      },
      screens: {
        xs: "320px", // Extra small breakpoint
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#BE4A4A",
        blackblack: "#141416",
        lightblack: "#1B1C1E",
        darkgrey: "#3F4349",
        grey: "#8A8A8A",
        white: "#FFFFFF",
        secondary: "#889CE7",
        "red-style": "#BE4A4A",
      },
      fontFamily: {
        saira: ['"Saira Stencil One"', "sans-serif"],
        stencil: ['"Stencil Std Bold"', "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 6s infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;