export default {
  head: {
    title: "Dr. Tiago Machado de Souza - Cirugião Bucomaxilofacial",
    htmlAttrs: {
      lang: "PT-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Sou especialista em Cirurgia Bucomaxilo Facial, Implantodontia e HOF. Prezo pelo atendimento humanitário, qualidade e sofisticação dos meus pacientes.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
      },
    ],
  },

  css: [
    "./node_modules/normalize.css/normalize.css",
    "./assets/scss/vuesax-alt.scss",
    "./assets/scss/base.scss",
    "./assets/css/hover-master/css/hover.css",
    "./assets/scss/procedimentos.scss",
    "./assets/scss/cards.scss",
    "./assets/scss/depoimentos.scss",
    "./node_modules/vuesax/dist/vuesax.css",
    "./node_modules/vuesax/dist/vuesax.min.css",
    "./assets/scss/Dropdown.scss",
  ],

  plugins: ["./plugins/vuesax.js"],

  components: [{ path: "@components", pathPrefix: false }],

  target: "static",

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/svg",
    "@nuxtjs/style-resources",
    "@nuxt/image",
    "@nuxtjs/vuetify",
  ],

  styleResources: {
    scss: ["@/components/bosons/*.scss"],
  },

  modules: ["@nuxtjs/gtm"],
  gtm: {
    id: "G-F93CYBJFLC",
    scriptURL: "https://www.googletagmanager.com/gtag/js?id=G-F93CYBJFLC",
  },

  build: {},
};
