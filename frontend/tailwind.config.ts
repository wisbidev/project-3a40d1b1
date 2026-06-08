import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#3B82F6",
        bg: "#0A0A0F",
        surface: "#1E1E2A",
        muted: "#A1A1AA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "radial-blue":
          "radial-gradient(ellipse at center, rgba(59,130,246,0.25) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
