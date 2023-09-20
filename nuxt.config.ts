const isAnalyzeMode = process.env.ANALYZE === 'true';

import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  bridge: {
    capi: true,
    typescript: true,
    meta: true,
    nitro: false,
  },
  app: {
    head: {
      title: 'app',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    analyze: isAnalyzeMode
      ? {
          generateStatsFile: true,
          // @ts-ignore bridgeに移行するときに修正する必要あり
          analyzeMode: 'disabled',
          openAnalyzer: false,
        }
      : false,
  },
  plugins: [{ src: '~/plugins/client', ssr: false }],
  publicRuntimeConfig: {
    targetOrganization: 'facebook',
    targetRepository: 'react',
  },
  ssr: false,
});
