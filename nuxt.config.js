const {
  author,
  config,
} = require('./package.json')

const BASE_URL = process.env.NODE_ENV === 'production'
  ? author.url
  : `http://localhost:${config.nuxt.port}`

module.exports = {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Alain Cao Van Truong',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#111111' },
      { name: 'theme-color', content: '#111111' },
      { name: 'og:title', content: 'Alain Cao Van Truong - Full-stack developer' },
      { name: 'og:description', content: 'Full-stack developer and third year student at HETIC looking for a 5-month internship from July to November 2019.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: BASE_URL },
      { name: 'og:image', content: `${BASE_URL}/favicons/acvt.png` },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@AlainCVT' },
      { name: 'twitter:title', content: 'Alain Cao Van Truong - Full-stack developer' },
      { name: 'twitter:description', content: 'Full-stack developer and third year student at HETIC looking for a 5-month internship from July to November 2019.' },
      { name: 'twitter:image', content: `${BASE_URL}/favicons/acvt.png` },
      { name: 'twitter:image:alt', content: 'Alain Cao Van Truong' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${BASE_URL}/favicons/favicon.ico` },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${BASE_URL}/favicons/apple-touch-icon.png` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${BASE_URL}/favicons/favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${BASE_URL}/favicons/favicon-16x16.png` },
      { rel: 'manifest', href: `${BASE_URL}/favicons/site.webmanifest` },
      { rel: 'mask-icon', href: `${BASE_URL}/favicons/safari-pinned-tab.svg`, color: '#111111' },
    ]
  },

  loading: {
    color: '#111111',
    background: '#EEEEEE',
  },

  router: {
    middleware: [
      'route-visit',
    ],
  },

  plugins: [
    { src: '~/plugins/vue-analytics.js', ssr: false },
  ],

	css: [
    '~/assets/styles/app.styl',
  ],

  generate: {
    routes: [
      '/projects/mars-journey',
      '/projects/pokedex',
      '/projects/green-tips',
      '/projects/chat-mean',
      '/projects/gaetan-lefebvre',
      '/projects/scaneat',
      '/projects/offit',
    ],
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  }
}
