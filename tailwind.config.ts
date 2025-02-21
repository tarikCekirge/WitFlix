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
        wit: {
          "50": "#fff0f1",
          "100": "#ffdee0",
          "200": "#ffc3c6",
          "300": "#ff999e",
          "400": "#ff5e66",
          "500": "#ff2c37",
          "600": "#e50914",
          "700": "#cf0610",
          "800": "#ab0911",
          "900": "#8d0f15",
          "950": "#4d0206",
        },
      },
    },
    container: {
      center: true,
      screens: {
        xs: "516px",
        sm: "645px",
        md: "783px",
        lg: "1058px",
        xl: "1333px",
        "2xl": "1608px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
} satisfies Config;
