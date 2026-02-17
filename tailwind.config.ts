import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          dark: "#212842",   // Deep navy - professional, calming
          light: "#D6E6F3",  // Soft light blue - calming, serene
        },
        // Accent Color
        accent: {
          sage: "#7BA8A0",   // Soft sage/teal - healing, growth
          DEFAULT: "#7BA8A0",
        },
        // Semantic Colors
        background: "#D6E6F3",
        text: {
          primary: "#212842",
          secondary: "#4A5568",
          light: "#6B7280",
        },
        // Legacy colors (for gradual migration)
        cream: "#D6E6F3",
        slate: {
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-calligraphy)', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
