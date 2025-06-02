const description = 'A Southern-led research network to advance gender equality in STEM.'
const title = 'Breaking barriers, Building bridges'
const OG = '/OG.jpg'

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
      title: title,
      meta: [
        { name: "description", content: description },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: 'og:site_name',  content: title},
        { property: 'og:title',  content: title},
        { property: 'og:description',  content: description},
        { property: 'og:image',  content: OG},
        { property: 'og:image:alt',  content: `Imagem de página para ${title}`},
        { name: 'twitter:image',  content: OG},
        { name: 'twitter:image:alt',  content: `Imagem de página para ${title}`},
        { name: 'twitter:description', content: description }
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