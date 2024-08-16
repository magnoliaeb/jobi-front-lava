// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  css: ["./assets/scss/main.scss"],
  plugins: ['~/plugins/sweetalert.js'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: '#244034', // Color primario personalizado
              secondary: '#d2f34c', // Color secundario personalizado
              accent: '#8c9eff',   // Color de acento
              error: '#b71c1c',    // Color de error
              success: '#00bf58',  // Color de éxito
            },
          },
        },
      },
    },
  },
  // router: {
  //   middleware: ['auth-redirect']
  // }
});
