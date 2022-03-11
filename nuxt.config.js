export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dr. Tiago Machado de Souza - Bucomaxilofacial',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [
      {
        src: 'https://cdn.lordicon.com/lusqsztk.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './node_modules/normalize.css/normalize.css',
    './assets/fonts/stylesheet.css',
    '@/assets/scss/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxt/image'
  ],

  styleResources: {
    // your settings here
    scss: ['@/components/bosons/*.scss'] // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/image'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
