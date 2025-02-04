// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxtjs/i18n', '@nuxt/eslint', '@nuxt/content', '@pinia/nuxt'],
  
  css: ['~/assets/css/styles.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true
        }
      }
    }
  },
  
  i18n: {
    // Module Options
    lazy: true,
    langDir: 'locales',

    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.yml'
      },
      {
        code: 'es',
        iso: 'es',
        name: 'Español',
        file: 'es.yml'
      },
      {
        code: 'fr',
        iso: 'fr',
        name: 'Français',
        file: 'fr.yml'
      }
    ],
    defaultLocale: 'en'
  }
  // content: {
  //   locales: ['en', 'de', 'ru'],
  //   defaultLocale: 'en',
  // }
})
