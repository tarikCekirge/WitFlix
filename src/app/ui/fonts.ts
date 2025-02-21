import { Bebas_Neue, Roboto } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: [
    "latin",
    "latin-ext",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "vietnamese",
  ],
  display: "swap",
  variable: "--font-roboto",
  preload: true,
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});
