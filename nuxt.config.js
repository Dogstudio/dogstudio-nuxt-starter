// Dependencies
import path from 'path'

// Locales
// import locales from './src/locales'
// console.log(process.env)

/* prettier-ignore */
export default defineNuxtConfig({
  // Application configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config#app
  app: {
    // Default `<head>` configuration
    // See: https://v3.nuxtjs.org/api/configuration/nuxt-config#head
    head: {
      // Metadata
      meta: [
        {
          name: 'title',
          content: 'Dogstudio | Nuxt Starter',
        },
        {
          name: 'description',
          content: 'Opinionated Nuxt starter by Dogstudio',
        },

        // Open Graph / Facebook
        {
          content: 'website',
          property: 'og:type',
        },
        {
          content: 'http://localhost:3000',
          property: 'og:url',
        },
        {
          content: 'Dogstudio | Nuxt Starter',
          property: 'og:title',
        },
        {
          content: '/assets/images/share.png',
          property: 'og:image',
        },
        {
          content: 'Opinionated Nuxt starter by Dogstudio',
          property: 'og:description',
        },

        // Twitter
        {
          content: 'http://localhost:3000',
          property: 'twitter:url',
        },
        {
          content: 'summary_large_image',
          property: 'twitter:card',
        },
        {
          content: 'Dogstudio | Nuxt Starter',
          property: 'twitter:title',
        },
        {
          content: '/assets/images/share.png',
          property: 'twitter:image',
        },
        {
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
        },
      ],
    }
  },

  // Build configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#build
  build: {
    // Add exceptions
    // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#build
    transpile: [],
  },

  // Builder configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#builder
  // builder: '@nuxt/webpack-builder',

  // Components configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#components
  components: {
    dirs: [
      'src/components',
      'src/components/modules',
      'src/components/elements',
      'src/components/partials',
    ],
  },

  // Global CSS files included in every page
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#css
  css: ['@/styles/global.scss'],

  // Define custom directories for the application
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#dir
  dir: {
    layouts: 'src/layouts',
    plugins: 'src/plugins',
    middleware: 'src/middleware',
  },

  // Ignore some files during build time
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#ignore
  ignore: [],

  // Enable Nuxt modules to extend its core features
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#modules
  modules: [
    // '@nuxtjs/i18n',
  ],

  // Default runtime configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#runtimeconfig
  runtimeConfig: {
    public: {
      mode: 'app',
      preview: true,
      publicPath: 'http://localhost:3000',
    },
  },

  // Rendering configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#ssr
  ssr: true,

  // Enable / Disable Nuxt telemetry
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#telemetry
  telemetry: false,

  // Vite configuration
  vite: {
    root: path.join(__dirname, 'src'),
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@@': path.join(__dirname),
      },
    },
    server: {
      port: 3000,
    },
    plugins: [],
    publicDir: path.resolve(__dirname, 'public'),
  },

  // Webpack configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#webpack-1
  // webpack: {
  //   // Customize the options of Nuxt's integrated webpack loaders
  //   // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#loaders
  //   loaders: {
  //     vue: {
  //       transformAssetUrls: {
  //         audio: 'src',
  //       },
  //     },
  //     imgUrl: {
  //       limit: false,
  //     },
  //     fontUrl: {
  //       limit: false,
  //     },
  //   },

  //   // Add Webpack plugins
  //   // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#plugins-2
  //   plugins: [],
  // },

  // Translations
  // See: https://i18n.nuxtjs.org/
  // i18n: {
  //   lazy: true,
  //   langDir: '~/src/locales/',
  //   locales,
  //   strategy: 'prefix',
  //   defaultLocale: process.env.CONFIG_DEFAULT_LOCALE,
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     redirectOn: 'root',
  //     alwaysRedirect: true,
  //     fallbackLocale: process.env.CONFIG_FALLBACK_LOCALE,
  //     cookieCrossOrigin: true,
  //   },
  // },
})
