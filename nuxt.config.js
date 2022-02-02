export default {
  // Change default Nuxt SSR value
  ssr: true,

  // Change default Nuxt target
  target: 'server',

  // Runtime configurations / Environment variables
  // See: https://nuxtjs.org/docs/directory-structure/nuxt-config#runtimeconfig
  // ----------
  // Public environment variables
  publicRuntimeConfig: {
    appMode: process.env.APP_MODE || 'app',
    appPreview: process.env.APP_PREVIEW || true,
  },

  // Private environment variables
  privateRuntimeConfig: {},

  // Define default meta for the application
  // See: https://nuxtjs.org/docs/configuration-glossary/configuration-head
  head: {
    title: 'Dogstudio | Nuxt Starter',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, user-scalable=no',
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Dogstudio | Nuxt Starter',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Opinionated Nuxt starter by Dogstudio',
      },

      // Open Graph / Facebook
      {
        hid: 'og:type',
        content: 'website',
        property: 'og:type',
      },
      {
        hid: 'og:url',
        content: 'http://localhost:3000',
        property: 'og:url',
      },
      {
        hid: 'og:title',
        content: 'Dogstudio | Nuxt Starter',
        property: 'og:title',
      },
      {
        hid: 'og:image',
        content: '/assets/images/share.png',
        property: 'og:image',
      },
      {
        hid: 'og:description',
        content: 'Opinionated Nuxt starter by Dogstudio',
        property: 'og:description',
      },

      // Twitter
      {
        hid: 'twitter:url',
        content: 'http://localhost:3000',
        property: 'twitter:url',
      },
      {
        hid: 'twitter:card',
        content: 'summary_large_image',
        property: 'twitter:card',
      },
      {
        hid: 'twitter:title',
        content: 'Dogstudio | Nuxt Starter',
        property: 'twitter:title',
      },
      {
        hid: 'twitter:image',
        content: '/assets/images/share.png',
        property: 'twitter:image',
      },
      {
        hid: 'twitter:description',
        content: 'Opinionated Nuxt starter by Dogstudio',
        property: 'twitter:description',
      },
    ],

    // Links
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico',
      },
    ],

    // Scripts
    script: [
      {
        src: '/vendors/modernizr.js',
        type: 'text/javascript',
        async: true,
      },
    ],
  },

  // Define custom directories for the application
  // See: https://nuxtjs.org/docs/configuration-glossary/configuration-dir
  dir: {
    // Static files
    static: 'public',

    // Source files
    app: 'src/app',
    store: 'src/store',
    assets: 'src/assets',
    layouts: 'src/layouts',
    middleware: 'src/middleware',
  },

  // Global CSS files includes in every page
  // See: https://nuxtjs.org/docs/configuration-glossary/configuration-css
  css: ['~/src/styles/global.scss'],

  // Toggle the loading indicators between the routes or customize them
  // See: https://nuxtjs.org/docs/configuration-glossary/configuration-loading
  // See: https://nuxtjs.org/docs/configuration-glossary/configuration-loading-indicator
  loading: false,
  loadingIndicator: false,

  // Enable Nuxt router middlewares from the `middleware` directory
  // See: https://nuxtjs.org/docs/directory-structure/middleware/#router-middleware
  router: {
    middleware: [],
  },

  // Enable Nuxt plugins from the `plugins` directory
  // See: https://nuxtjs.org/docs/configuration-glossary/configuration-plugins
  plugins: [],

  // Enable Nuxt modules to extend its core functionalities
  // See: https://nuxtjs.org/docs/configuration-glossary/configuration-modules
  modules: ['@nuxtjs/axios'],

  // Enable auto-import of components within pages, layouts and other components
  // See: https://nuxtjs.org/docs/configuration-glossary/configuration-components
  components: [
    { path: '~/src/components', extensions: ['vue'] },
    { path: '~/src/components/modules', extensions: ['vue'] },
    { path: '~/src/components/elements', extensions: ['vue'] },
    { path: '~/src/components/partials', extensions: ['vue'] },
  ],

  // Axios global configuration
  // See: https://axios.nuxtjs.org/options
  axios: {},

  // Enable / Disable telemetry
  telemetry: false,

  // Customize Webpack configuration
  // See: https://nuxtjs.org/docs/configuration-glossary/configuration-build
  build: {
    // Add Webpack plugins
    plugins: [],

    // Customize options for integrated Webpack loaders
    loaders: {
      vue: {
        // See: https://nuxtjs.org/docs/features/configuration#extend-webpack-to-load-audio-files
        transformAssetUrls: {
          audio: 'src',
        },
      },
      imgUrl: {
        limit: false,
      },
      fontUrl: {
        limit: false,
      },
    },

    // Extend Webpack configuration
    extend(config, context) {
      // New Webpack rules
      const rules = [
        // Audio files
        // See: https://nuxtjs.org/docs/features/configuration#extend-webpack-to-load-audio-files
        {
          test: /\.(ogg|mp3|wav|mpe?g)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'audios/[name].[contenthash:7].[ext]',
              esModule: false,
            },
          },
        },

        // Shaders
        {
          test: /\.(glsl|frag|vert)$/,
          exclude: /node_modules/,
          use: [
            'raw-loader',
            {
              loader: 'glslify-loader',
              options: {
                transform: ['glslify-import'],
              },
            },
          ],
        },
      ]

      // Add Webpack rules
      for (const rule of rules) {
        config.module.rules.push(rule)
      }

      // Resolve Extensions
      config.resolve.extensions.push('.css')
      config.resolve.extensions.push('.sass')
      config.resolve.extensions.push('.scss')
      config.resolve.extensions.push('.json')

      // Resolve Modules
      config.resolve.modules.push('.')
      config.resolve.modules.push('src')
    },
  },
}
