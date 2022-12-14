// Dependencies
import path from 'path'

// Vite Plugins
import glsl from 'vite-plugin-glsl'

// Locales
import locales from './src/locales'

export default defineNuxtConfig({
  // Aliases configuration
  alias: {
    '@': path.join(__dirname, 'src'),
    '@@': path.join(__dirname),
  },

  // Application configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config#app
  app: {
    // Default `<head>` configuration
    // See: https://nuxt.com/docs/api/configuration/nuxt-config#head
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
          content: process.env.NUXT_PUBLIC_PUBLIC_PATH,
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
          content: process.env.NUXT_PUBLIC_PUBLIC_PATH,
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
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#build
  build: {
    transpile: [],
  },

  // Change `build` directory
  buildDir: path.join(__dirname, '.nuxt'),

  // Components auto-import configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config#components
  components: {
    dirs: [
      '~/components/elements',
      '~/components/modules',
      '~/components/partials',
      '~/components',
    ],
  },

  // Global CSS configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#css
  css: ['@/styles/global.scss'],

  // Change directories
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#dir
  dir: {
    pages: path.join(__dirname, 'pages'),
    public: path.join(__dirname, 'public'),
    layouts: path.join(__dirname, 'src', 'layouts'),
    plugins: path.join(__dirname, 'src', 'plugins'),
    middleware: path.join(__dirname, 'src', 'middleware'),
  },

  // Ignore some files during build time
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#ignore
  ignore: [],

  // Enable Nuxt modules to extend its core features
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#modules
  modules: [
    '@nuxtjs/i18n',
  ],

  // Nitro configuration
  // See: https://nitro.unjs.io/config/
  nitro: {
    output: {
      dir: path.join(__dirname, '.output'),
      serverDir: path.join(__dirname, '.output', 'server'),
      publicDir: path.join(__dirname, '.output', 'public'),
    },
  },

  // Change root directory
  // See: https://nuxt.com/docs/api/configuration/nuxt-config#rootdir
  rootDir: path.join(__dirname, 'src'),

  // Default runtime configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#runtimeconfig
  runtimeConfig: {
    public: {
      mode: 'app',
      preview: true,
      publicPath: process.env.NUXT_PUBLIC_PUBLIC_PATH,
    },
  },

  // Rendering configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#ssr
  ssr: true,

  // Enable / Disable Nuxt telemetry
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#telemetry
  telemetry: false,

  // Vite configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    plugins: [glsl()],
  },

  // i18n configuration
  i18n: {
    lazy: true,
    langDir: 'locales',
    locales,
    baseUrl: process.env.NUXT_PUBLIC_PUBLIC_PATH,
    vueI18n: {
      fallbackLocale: process.env.CONFIG_FALLBACK_LOCALE,
    },
    strategy: 'prefix',
    defaultLocale: process.env.CONFIG_DEFAULT_LOCALE,
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
      alwaysRedirect: true,
      cookieCrossOrigin: true,
    },
  },
})
