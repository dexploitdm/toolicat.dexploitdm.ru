const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css", integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/", crossorigin:"anonymous" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  /*
  ** Global CSS
  */
  css: [ ],

  /*
  ** Plugins to load before mounting the App
  * './plugins/mixins/validation',
  * './plugins/mixins/user',
  *  './plugins/axios'
  */
  plugins: [
      {src: './plugins/mixins/validation'},
      {src: './plugins/mixins/user'},
      {src: './plugins/axios'},
      {src: './plugins/element-ui'},
      {src: 'plugins/owl.js', ssr: false},
      {src: './plugins/clipboard'}
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'https://toolicat.dexploitdm.ru/api/',
    baseUrlImage: 'https://toolicat.dexploitdm.ru/uploads/'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login', method: 'post', propertyName: 'token'
          },
          user: {
            url: 'me', method: 'get', propertyName: 'data'
          },
          logout: {
            method: 'get',
            url: 'auth/logout', method: 'get'
          }
        }
      }
    },
    redirect: {
      login: '/auth/login',
      home: '/'
    },
    plugins: [
      './plugins/auth'
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",

    "@nuxtjs/auth",
    '@tui-nuxt/editor',
    'vue-social-sharing/nuxt'
  ],
  tui: {
     editor: {}
  },
  bootstrapVue: {
    bootstrapCSS: true, // or `css`
    bootstrapVueCSS: true // or `bvCSS`
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://toolicat.dexploitdm.ru/api/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {},
    html: { minify: { collapseWhitespace: true }}
  },
  generate: {
    "dir": "public"
  }

};
