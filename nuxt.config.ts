// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/styles/main.scss"
  ],
  build: {
    transpile: ['vue-agile'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
        }
      }
    }

  },
  plugins: ['~/plugins/vue-agile'],
  modules: [
    ['@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },],
  ],
})