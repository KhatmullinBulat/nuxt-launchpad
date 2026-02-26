import type { NuxtConfig } from 'nuxt/schema'
import { resolve } from 'pathe'

export const alias: NuxtConfig['alias'] = {
  '#entities': resolve(__dirname, '../../app/entities'),
  '#features': resolve(__dirname, '../../app/features'),
  '#widgets': resolve(__dirname, '../../app/widgets'),
  '#shared': resolve(__dirname, '../../app/shared'),

  '@/assets': resolve(__dirname, '../../app/shared/assets'),
  '~/assets': resolve(__dirname, '../../app/shared/assets'),
  '@/composables': resolve(__dirname, '../../app/shared/composables'),
  '~/composables': resolve(__dirname, '../../app/shared/composables'),
}
