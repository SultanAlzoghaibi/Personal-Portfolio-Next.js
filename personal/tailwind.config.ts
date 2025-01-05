import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
} satisfies Config;