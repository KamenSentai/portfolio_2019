module.exports = {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Alain CAO VAN TRUONG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#111111' },
      { name: 'theme-color', content: '#111111' },
      { name: 'og:title', content: 'Alain CAO VAN TRUONG | Full-Stack developer' },
      { name: 'og:description', content: 'Full-stack developer and third year student at HETIC looking for a 5-month internship from July to November 2019.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://wwww.alain-caovantruong.fr/' },
      { name: 'og:image', content: 'avt.png' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@AlainCVT' },
      { name: 'twitter:title', content: 'Alain CAO VAN TRUONG | Full-Stack developer' },
      { name: 'twitter:description', content: 'Full-stack developer and third year student at HETIC looking for a 5-month internship from July to November 2019.' },
      { name: 'twitter:image', content: 'acvt.png' },
      { name: 'twitter:image:alt', content: 'Alain CAO VAN TRUONG' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#111111' }
    ]
  },

  loading: {
    color: '#111111',
    background: '#EE1111'
  },

	css: [
    '~/assets/styles/app.styl'
  ],

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

