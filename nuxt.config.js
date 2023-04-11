// Dependencies
import path from 'path'

// Vite Plugins
import glsl from 'vite-plugin-glsl'

// Locales
import locales from './src/locales'

console.log(process.env)

export default defineNuxtConfig({
  // Aliases configuration
  alias: {
    '~': path.resolve(__dirname, 'src'),
    '@': path.resolve(__dirname, 'src'),
    '~~': path.resolve(__dirname),
    '@@': path.resolve(__dirname),
    'assets': path.resolve(__dirname, 'src', 'assets'),
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
          content: process.env.NUXT_PUBLIC_PUBLIC_PATH || 'http://localhost:3000/',
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
          content: process.env.NUXT_PUBLIC_PUBLIC_PATH || 'http://localhost:3000/',
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
    layouts: 'src/layouts',
    plugins: 'src/plugins',
    middleware: 'src/middleware',
  },

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
    },
  },

  // Default runtime configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#runtimeconfig
  runtimeConfig: {
    public: {
      mode: 'app',
      publicPath: 'http://localhost:3000/',
    },
  },

  // Enable / Disable Nuxt telemetry
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#telemetry
  telemetry: false,

  // Vite configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    plugins: [glsl()],
  },

  // i18n configuration
  // See: https://v8.i18n.nuxtjs.org/getting-started/basic-usage
  i18n: {
    lazy: true,
    langDir: 'src/locales',
    locales,
    baseUrl: process.env.NUXT_PUBLIC_PUBLIC_PATH || 'http://localhost:3000/',
    vueI18n: {
      fallbackLocale: process.env.I18N_FALLBACK_LOCALE,
    },
    strategy: 'prefix',
    defaultLocale: process.env.I18N_DEFAULT_LOCALE,
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
      alwaysRedirect: true,
      cookieCrossOrigin: true,
    },
  },
})
