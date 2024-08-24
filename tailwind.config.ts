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
        customGrey: '#eaeaea',
        customBlack: '#2d2d2d',
        customYellow: '#e9ba2f',
        customRed: '#fa8b94',
        customBlue: '#3eb4eb',
        customGreen: '#76d257',

      },
      screens: {
        'sm': '380px',  // Custom breakpoint for screens smaller than 380px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
