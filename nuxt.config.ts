import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Francesco Coniglione',
      meta: [
        { name: 'description', content: 'Author website of Francesco Coniglione, focused on enterprise security, human behaviour, and insider risk.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Francesco Coniglione' },
        { name: 'keywords', content: 'Francesco Coniglione, enterprise security, human behaviour, insider risk, investigations, author' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '192x192' },
      ],
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-2STPMGFEJF',
    enabled: process.env.NODE_ENV === 'production'
  },
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