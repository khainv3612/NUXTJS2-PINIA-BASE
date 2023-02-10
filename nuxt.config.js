export default {
  server: {
    port: process.env.LISTEN_PORT || 8000,
    host: '0.0.0.0'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.TITLE || 'BASE',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/vue2-org-tree/dist/style.css' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,500;0,700;1,500;1,700&display=swap'
      }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/index.scss',
    'aos/dist/aos.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n.js',
    '@/plugins/pinia.js',
    '@/plugins/permission.js',
    '@/services/languageService.js',
    { src: '@/plugins/aos.js', ssr: false },
    '@/plugins/vue-slick-carousel.js',
    { src: '@/plugins/vue-tree-chart.js', ssr: false },
    { src: '@/plugins/vue2Orgtree.js', ssr: false }],

  // middleware route
  router: {
    middleware: process.env.IS_AUTH === '1' ? [
      'auth-guard',
      'i18n'
    ] : [
      'i18n'
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/device',
    '@nuxtjs/composition-api/module',
    ['@pinia/nuxt', { disableVuex: false }],
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    debug: process.env.DEBUG || false,
    proxyHeaders: false,
    credentials: false
  },

  recaptcha: {
    hideBadge: false,
    language: 'vn',
    siteKey: process.env.KEY_CAPTCHA,
    version: 1,
    size: 'normal'
  },

  auth: {
    strategies: {
      local: {
        token: {
          maxAge: 31536000
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'data.access_token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'get', propertyName: 'data' }
        }
      }
    },
    plugins: [
      '~/plugins/axios.js'
    ],
    redirect: {
      login: '/#login',
      logout: false,
      callback: '/#login',
      home: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
