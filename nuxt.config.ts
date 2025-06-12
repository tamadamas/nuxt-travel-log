// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "nuxt-svgo", "@nuxtjs/tailwindcss"],

  eslint: {
    config: {
      standalone: false,
    },
  },
  icon: {
    cssLayer: "components",
  },
});
