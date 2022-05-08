export default {
  head: {
    title: 'Dr. Tiago Machado de Souza - Cirugião Bucomaxilofacial',
    htmlAttrs: {
      lang: 'PT-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Sou especialista em Cirurgia Bucomaxilo Facial, Implantodontia e HOF. Prezo pelo atendimento humanitário, qualidade e sofisticação dos meus pacientes.'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [
    './node_modules/normalize.css/normalize.css',
    './assets/scss/vuesax-alt.scss',
    './assets/scss/base.scss',
    './assets/css/hover-master/css/hover.css',
    './assets/scss/procedimentos.scss',
    './assets/scss/cards.scss',
    './assets/scss/depoimentos.scss',
    './node_modules/vuesax/dist/vuesax.css',
    './node_modules/vuesax/dist/vuesax.min.css',
  ],

  plugins: ['./plugins/vuesax.js'],

  components: [{ path: '@components', pathPrefix: false }],
  
  target: 'static',

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-7JP4XTD5NX',
    autoTracking: {
      screenview: true
    }
  },

  styleResources: {
    scss: ['@/components/bosons/*.scss']
  },

  modules: [],

  build: {}
}
