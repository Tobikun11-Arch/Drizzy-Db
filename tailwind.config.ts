import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'custom-smd': '1024px', // Custom breakpoint for min-width 1024px
        'custom-lg': '1440px', // Custom breakpoint for min-width 1440px
      },
      gridTemplateColumns: {
        'custom-smd': 'repeat(5, minmax(0, 1fr))', // 5 columns for custom-smd breakpoint
        'custom-lg': 'repeat(6, minmax(0, 1fr))', // 6 columns for custom-lg breakpoint
      },
    },
  },
  plugins: [],
};

export default config;
