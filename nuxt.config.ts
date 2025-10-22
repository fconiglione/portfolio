import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],
  colorMode: {
    classSuffix: ''
  },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
  runtimeConfig: {
    public: {
      googleAppsScriptUrl: process.env.GOOGLE_APPS_SCRIPT_URL
    }
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-CA', file: 'en.json', name: 'English' },
      { code: 'fr', iso: 'fr-CA', file: 'fr.json', name: 'Français' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  langDir: './locales/',
    detectBrowserLanguage: false
  }
})