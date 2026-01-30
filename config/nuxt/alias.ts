import type { NuxtConfig } from 'nuxt/schema'

export const alias: NuxtConfig['alias'] = {
  '@/assets': './app/shared/assets',
  '~/assets': './app/shared/assets',
  '@/composables': './app/shared/composables',
  '~/composables': './app/shared/composables',
}
