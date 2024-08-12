const isAnalyzeMode = process.env.ANALYZE === 'true';

import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'app',
      htmlAttrs: {
        lang: 'ja',
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
  modules: ['@wattanx/nuxt-vuex'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      targetOrganization: 'facebook',
      targetRepository: 'react',
    },
  },
  ssr: false,
  builder: 'webpack',
  webpack: {
    analyze: isAnalyzeMode
      ? {
          generateStatsFile: true,
          analyzeMode: 'disabled',
          openAnalyzer: false,
        }
      : false,
  },
});
