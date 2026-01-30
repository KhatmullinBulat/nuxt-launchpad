import { alias } from './config/nuxt/alias'
import { components } from './config/nuxt/components'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  components,
  devtools: { enabled: true },
  app: {
    head: {
      // %s will be replaced with the title of the specific page
      titleTemplate: '%s | Your Site',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
  runtimeConfig: {
    // Variables that are accessible on both the server and the client
    public: {
      baseURL: process.env.PUBLIC_APP_DOMAIN,
      baseApiURL: process.env.PUBLIC_API_BASE_URL,
      appName: 'Your App Name',
    },
  },
  // FSD-like settings
  alias,
  compatibilityDate: '2025-07-15',
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@/assets/*': ['./app/shared/assets/*'],
        },
      },
    },
  },
  eslint: {
    config: {
      standalone: false,
      stylistic: true,
      formatters: {
        html: true,
        css: true,
        markdown: true,
      },
    },
  },
})
