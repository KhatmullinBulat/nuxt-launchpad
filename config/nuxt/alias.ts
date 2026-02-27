import type { NuxtConfig } from 'nuxt/schema'
import { resolve } from 'pathe'

export const alias: NuxtConfig['alias'] = {
  '~': resolve(__dirname, '../../app'),
  '@': resolve(__dirname, '../../app'),

  '#entities': resolve(__dirname, '../../app/entities'),
  '#features': resolve(__dirname, '../../app/features'),
  '#widgets': resolve(__dirname, '../../app/widgets'),
  '#shared': resolve(__dirname, '../../app/shared'),
}
