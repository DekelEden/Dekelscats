// @ts-check

console.log("import")
import _colors from "tailwindcss/colors"

console.log("reduce")
/** @type Record<string, any> */
const colors = [
  "inherit",
  "current",
  "transparent",
  "black",
  "white",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  // @ts-ignore
].reduce((acc, key) => ({ ...acc, [key]: _colors[key] }), {})

const sans = ["Open Sans Hebrew", "sans-serif"]
console.log("export")
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
          DEFAULT: "#B66666",
          // DEFAULT: "#AB3B55",
          bg: "#EBD5D5",
          light: "#BC8A96",
          foreground: colors.white,
          hover: "#c87a7a",
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
