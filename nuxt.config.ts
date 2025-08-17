// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts'
  ],


  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },

  app: {
    head: {
      title: 'Enterprise AI Solutions - Production-Ready Automation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Deploy production-grade AI automation in days, not months. Built on Microsoft\'s enterprise framework.' 
        },
        { property: 'og:title', content: 'Enterprise AI Solutions' },
        { 
          property: 'og:description', 
          content: 'Production-ready multi-agent automation templates built on Microsoft\'s proven enterprise framework' 
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  }
})
