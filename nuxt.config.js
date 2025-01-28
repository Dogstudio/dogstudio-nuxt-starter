// For options see: https://nuxt.com/docs/api/nuxt-config
import glsl from "vite-plugin-glsl";
import * as fs from "fs";
import * as path from "path";

function getI18nLocales() {
  const files = fs.readdirSync("./locales");
  return files
    .filter((file) => path.extname(file) === ".json")
    .map((file) => path.basename(file, ".json"));
}

import { BREAKPOINTS } from "./utils/constants.js";

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  devServer: {
    host: "0.0.0.0",
  },
  app: {
    head: {
      title: "",
      meta: [
        {
          name: "description",
          content: "",
        },

        //  Facebook / Open Graph
        {
          property: "og:url",
          content: "",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "",
        },
        {
          property: "og:description",
          content: "",
        },
        {
          property: "og:image",
          content: "/share.jpg", // 1200x628
        },

        // Twitter / Open Graph
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:domain",
          content: "",
        },
        {
          property: "twitter:url",
          content: "",
        },
        {
          name: "twitter:title",
          content: "",
        },
        {
          name: "twitter:description",
          content: "",
        },
        {
          name: "twitter:image",
          content: "/share-twitter.jpg", // 506×254
        },
      ],
      script: [],
      link: [],
    },
  },
  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "nuxt-viewport"],
  i18n: {
    defaultLocale: "en",
    locales: getI18nLocales(),
    strategy: "prefix_except_default",
    vueI18n: "./i18n.config.js",
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: "root",
    },
    compilation: {
      strictMessage: false,
    },
  },
  pinia: {
    storesDirs: ["~/stores/**"],
  },
  viewport: {
    breakpoints: BREAKPOINTS,
    fallbackBreakpoint: "L",
    defaultBreakpoints: {
      desktop: "L",
      tablet: "M",
      mobile: "XXXS",
    },
  },
  css: ["~/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/styles/vendors/sass-mq/_mq.scss";
            @import "~/styles/utils/_utilities.scss";
            @import "~/styles/utils/_easings.scss";
            @import "~/styles/utils/_variables.scss";
            @import "~/styles/utils/_functions.scss";
          `,
        },
      },
    },
    plugins: [glsl()],
  },
  compatibilityDate: "2025-01-07",
});
