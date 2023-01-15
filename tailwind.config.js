// @ts-check
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/*"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-hover", "&:not(:hover)");
      addVariant("not-active", "&:not(:active)");
      addVariant("not-focus", "&:not(:focus)");
      addVariant("not-focus-visible", "&:not(:focus-visible)");
      addVariant("not-disabled", "&:not([disabled])");
    }),
  ],
};
