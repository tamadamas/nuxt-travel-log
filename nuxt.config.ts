// https://nuxt.com/docs/api/configuration/nuxt-config
import "./server/config/env.ts";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "nuxt-svgo",
    "@nuxtjs/color-mode",
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },
  colorMode: {
    dataValue: "theme",
    preference: "forest",
    themes: ["pastel", "forest"],
  },
});
