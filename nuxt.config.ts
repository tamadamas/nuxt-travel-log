// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/icon", "nuxt-svgo"],

  eslint: {
    config: {
      standalone: false,
    },
  },
});
