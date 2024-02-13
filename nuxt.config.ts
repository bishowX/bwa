// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  extends: ["@nuxt/ui-pro"],
  css: ["~/assets/css/tailwind.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  googleFonts: {
    families: {
      Inter: "200..700",
    },
  },
});
