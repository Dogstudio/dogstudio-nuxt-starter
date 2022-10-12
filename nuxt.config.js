// Dependencies
import path from 'path'

// Locales
// import locales from './src/locales'

export default defineNuxtConfig({
  // Application configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config#app
  app: {
    // Default `<head>` configuration
    // See: https://v3.nuxtjs.org/api/configuration/nuxt-config#head
    head: {
      // Title
      title: 'Dogstudio | Nuxt Starter',

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
    transpile: [],
  },

  // Change `build` directory
  buildDir: path.join(__dirname, '.nuxt'),

  // Components auto-import configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config#components
  components: {
    dirs: [
      '~/components/elements',
      '~/components/modules',
      '~/components/partials',
      '~/components',
    ],
  },

  // Global CSS configuration
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#css
  css: ['@/styles/global.scss'],

  // Change directories
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#dir
  dir: {
    pages: path.join(__dirname, 'pages'),
    public: path.join(__dirname, 'public'),
    layouts: path.join(__dirname, 'src', 'layouts'),
    plugins: path.join(__dirname, 'src', 'plugins'),
    middleware: path.join(__dirname, 'src', 'middleware'),
  },

  // Ignore some files during build time
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#ignore
  ignore: [],

  // Enable Nuxt modules to extend its core features
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config/#modules
  modules: [
    // '@nuxtjs/i18n',
  ],

  // Change root directory
  // See: https://v3.nuxtjs.org/api/configuration/nuxt-config#rootdir
  rootDir: path.join(__dirname, 'src'),

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

  // TODO: Bring back translations
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
