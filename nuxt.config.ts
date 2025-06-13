// https://nuxt.com/docs/api/configuration/nuxt-config
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
    preference: "nord", // Set default theme, or 'system'
    themes: ["nord", "forest"], // List your DaisyUI themes here
  },
});
