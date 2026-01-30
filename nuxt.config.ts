import { components } from './config/nuxt/components'
import { alias } from './config/nuxt/alias'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  // FSD-like settings
  alias,
  components,
  app: {
    head: {
      // %s will be replaced with the title of the specific page
      titleTemplate: '%s | Your Site',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
    }
  },
  runtimeConfig: {
    // Variables that are accessible on both the server and the client
    public: {
      baseURL: process.env.PUBLIC_APP_DOMAIN,
      baseApiURL: process.env.PUBLIC_API_BASE_URL,
      appName: 'Your App Name'
    }
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@/assets/*': ['./app/shared/assets/*'],
        }
      }
    }
  }
})