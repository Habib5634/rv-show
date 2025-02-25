/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herobg': "url('/assets/herobg.png')",
        
               

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green":'#295A4A'
      },
    },
  },
  plugins: [],
};
