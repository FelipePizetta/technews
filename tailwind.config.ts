import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "malachite": "rgb(0, 195, 43)",
      },
      fontFamily: {
        'sans': 'var(--font-open-sans)',
        'variable': 'var(--font-urbanist)',
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
        "form": "0 5px 20px 10px rgba(220, 220, 220, 0.2)",
        "sucess": "0 5px 35px 0.5px rgba(34, 187, 85, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
