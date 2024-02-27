// @ts-check

import colors from "tailwindcss/colors"

const sans = ["Open Sans Hebrew", "sans-serif"]
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        bg: {
          DEFAULT: "#FFFFFF",
          alt: "#F2F2F2",
        },
        primary: {
          DEFAULT: "#AB3B55",
          bg: "#EBD5D5",
          light: "#BC8A96",
          foreground: colors.white,
          hover: "#BE4964",
        },
        link: {
          DEFAULT: "",
          hover: "#EA8A8A",
        },
        "photo-shadow": "#00000030",
      },
      fontFamily: {
        sans: sans,
        amatic: ["Amatic SC", ...sans],
        varela: ["Varela Round", ...sans],
      },
    },
  },
  plugins: [],
}
