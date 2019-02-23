const bodyParser = require('body-parser');
module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'ru'
        },
        title: 'Dinoshop',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Dinoshop' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        { src: '~/assets/scss/main.scss', lang: 'scss' }
    ],
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#3B8070'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
            config.node = {
                fs: 'empty',
                tls: 'empty',
                net: 'empty'
            }
        }
    },
    serverMiddleware: [
        bodyParser.json(),
        { path: '/yandex-check', handler: '~/api/require.js' }
    ],
    plugins: [
        { src: '~/plugins/element-ui.js', ssr: true },
        { src: '~/plugins/cart.js', ssr: true },
        { src: '~/plugins/vue-paginate.js', ssr: true },
    ],
    modules: [
        'cookie-universal-nuxt',
    ]
}
