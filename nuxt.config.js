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

  // Components auto-import configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config#components
  components: {
    dirs: [
      '~/src/components/elements',
      '~/src/components/modules',
      '~/src/components/partials',
      '~/src/components',
    ],
  },

  // Global CSS configuration
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#css
  css: ['@/styles/global.scss'],

  // Change directories
  // See: https://nuxt.com/docs/api/configuration/nuxt-config/#dir
  dir: {
    assets: 'src/assets',
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
      preview: true,
      publicPath: process.env.NUXT_PUBLIC_PUBLIC_PATH,
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
