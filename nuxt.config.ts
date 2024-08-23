// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      appName: "",
    },
  },

  ssr: true,

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

  googleFonts: {
    useStylesheet: true,
    outputDir: "assets",
    families: {
      Poppins: {
        wght: [400, 500, 600, 700],
        italic: [400, 500, 600, 700],
      },
      Roboto: {
        wght: [300, 400, 500, 600, 700],
        italic: [300, 400, 500, 600, 700],
      },
    },
  },
});
