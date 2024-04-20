import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': '--font-open-sans',
        'variable': '--font-urbanist',
      },
      borderColor: {
        "mercury": "rgb(228, 228, 231)",
      },
      colors: {
        "sunglow": "rgb(255, 204, 51)",
        "selective-yellow": "rgb(253, 185, 18)",
        "brown-pod": "rgb(67, 26, 5)",
        "tuatara": "rgb(54, 54, 54)",
        "star-dust": "rgb(153, 153, 153)",
      },
      boxShadow: {
        "form": "0 35px 60px -15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
