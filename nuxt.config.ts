import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Francesco Coniglione',
      meta: [
        { name: 'description', content: 'Welcome to my portfolio! I am Francesco Coniglione, a passionate software engineer specializing in building dynamic and responsive web applications. Explore my projects, skills, and get in touch!' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Francesco Coniglione' },
        { name: 'keywords', content: 'Francesco Coniglione, Software Engineer, Portfolio, Web Development, JavaScript, TypeScript, React, Node.js, Projects' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    id: 'G-2STPMGFEJF'
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