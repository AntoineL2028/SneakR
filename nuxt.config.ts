// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, modules: ['@nuxtjs/supabase', '@nuxt/ui'], supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/',
      exclude: [
        "/",
        "/login",
        "/register",
        "/details/*",
        "/wishlist",
        "/collection",
      ],
    },
  },
  colorMode: {
    preference: "light"
  }
});