// For options see: https://nuxt.com/docs/api/nuxt-config

import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
  ssr: false,

  devServer: {
    host: '0.0.0.0',
  },

  app: {
    head: {
      title: '',
      meta: [
        {
          name: 'title',
          content: '',
        },
        {
          name: 'description',
          content: '',
        },
      ],
      script: [],
      link: [
        // {
        //   rel: 'icon',
        //   type: 'image/x-icon',
        //   href: '/assets/favicons/favicon.ico',
        // },
        // {
        //   rel: 'apple-touch-icon',
        //   sizes: '180x180',
        //   href: '/assets/favicons/apple-touch-icon.png',
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '32x32',
        //   href: '/assets/favicons/favicon-32x32.png'
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '16x16',
        //   href: '/assets/favicons/favicon-16x16.png'
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '192x192',
        //   href: '/assets/favicons/android-chrome-192x192.png'
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '512x512',
        //   href: '/assets/favicons/android-chrome-512x512.png'
        // },
        // {
        //   rel: 'manifest',
        //   href: '/assets/favicons/site.webmanifest'
        // },
      ],
    },
  },

  css: ['@/styles/global.scss'],
  modules: ['@nuxtjs/i18n', '@pinia/nuxt', 'nuxt-viewport'],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en-us',
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root',
    },
    compilation: {
      strictMessage: false,
    },
    locales: [
      {
        code: 'en-us',
        name: 'English',
        file: 'en-us.json',
      },
    ],
  },

  pinia: {
    storesDirs: ['~/stores/**'],
  },

  viewport: {
    fallbackBreakpoint: 'l',
    breakpoints: {
      xxxs: 0,
      xxs: 320,
      xs: 450,
      s: 600,
      m: 768,
      l: 1024,
      xl: 1340,
      xxl: 1440,
      xxxl: 1920,
    },
    defaultBreakpoints: {
      desktop: 'l',
      tablet: 'm',
      mobile: 'xxxs',
    },
    fallbackBreakpoint: 'l',
  },

  vite: {
    plugins: [glsl()],
  },

  compatibilityDate: '2025-01-07',
})
