import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

const antfuConfig = antfu({
  ignores: ['nuxt.config.ts'],
  javascript: {
    overrides: {
      'unused-imports/no-unused-vars': ['error', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '^_',
      }],
    },
  },
  typescript: {
    overrides: {
      'ts/no-non-null-assertion': 'error',
    },
  },
  vue: {
    overrides: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        registeredComponentsOnly: false,
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: 1,
        multiline: { max: 1 },
      }],
      'vue/attributes-order': ['error', {
        alphabetical: true,
      }],
      'vue/singleline-html-element-content-newline': ['error', {
        ignoreWhenNoAttributes: false,
        ignores: ['pre', 'textarea'],
      }],
    },
  },
})

export default withNuxt(
  antfuConfig,
)