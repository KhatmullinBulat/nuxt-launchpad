import type { NuxtConfig } from 'nuxt/schema'

export const components: NuxtConfig['components'] = {
  dirs: [
    {
      path: '~/entities',
      pathPrefix: false,
      pattern: '**/ui/*.vue',
      extensions: ['.vue'],
    },
    {
      path: '~/widgets',
      pathPrefix: false,
      pattern: '**/*.vue',
      extensions: ['.vue'],
    },
    {
      path: '~/shared/ui',
      pathPrefix: false,
      pattern: '**/icons/*.vue',
      extensions: ['.vue'],
    },
  ],
}
