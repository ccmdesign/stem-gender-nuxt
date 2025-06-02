// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  nitro: {
    preset: 'netlify-static'
  },
  ssr: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
    app: {
    head: {
      title: 'Breaking barriers, Building bridges',
      meta: [
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
      script: [],
    }
  },
  components: {
    dirs: [
      '~/components',
      '~/components/content'
    ]
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    'nuxt-gtag'
  ],

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
  googleFonts: {
    families: {
      Poppins: true,
    }
  },
  gtag: {
    id: 'G-1PTFML4ED1'
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
  },
  plugins: [
    { src: '~/plugins/clarity.client.js', mode: 'client' }
  ],
  // content: {
  //   locales: ['en', 'de', 'ru'],
  //   defaultLocale: 'en',
  // }
})