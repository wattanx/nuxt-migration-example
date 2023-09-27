import { defineNuxtConfig } from 'nuxt/config';

const isAnalyzeMode = process.env.ANALYZE === 'true';

export default defineNuxtConfig({
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
  css: ['~/assets/css/main.css'],
  components: true,
  modules: ['@wattanx/nuxt-vuex'],
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
