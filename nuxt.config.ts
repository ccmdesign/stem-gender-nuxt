const description = 'A Southern-led research network to advance gender equality in STEM.'
const title = 'Breaking barriers, Building bridges'
const OG = '/OG.png'
const claritySnippet = `!function(c,l,a,r,i,t,y){function sync(){(new Image).src="https://c.clarity.ms/c.gif"}"complete"==document.readyState?sync():window.addEventListener("load",sync);a[c]("metadata",(function(){a[c]("set","C_IS","0")}),!1,!0);if(a[c].v||a[c].t)return a[c]("event",c,"dup."+i.projectId);a[c].t=!0,(t=l.createElement(r)).async=!0,t.src="https://scripts.clarity.ms/0.8.41/clarity.js",(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y),a[c]("start",i),a[c].q.unshift(a[c].q.pop()),a[c]("set","C_IS","0")}("clarity",document,window,"script",{"projectId":"rtakp7puhx","upload":"https://i.clarity.ms/collect","expire":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"content":true,"report":"https://report.clarity.ms/eus2-tag","keep":["msclkid"],"dob":2148});`

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
    'nuxt-gtag',
    '@weareheavy/nuxt-cookie-consent'
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
  cookieConsent: {
    provider: 'cookieinformation',
    init: false,
    dev: true,
    scripts: {
      statistic: [
        {
          children: claritySnippet,
          type: 'text/javascript'
        }
      ]
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
  },
  // content: {
  //   locales: ['en', 'de', 'ru'],
  //   defaultLocale: 'en',
  // }
})
