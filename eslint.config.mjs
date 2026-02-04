import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

const antfuConfig = antfu({
  ignores: ['nuxt.config.ts'],
  standalone: false,
  stylistic: true,
  formatters: {
    html: true,
    css: true,
    markdown: true,
  },
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
        singleline: { max: 1 },
        multiline: { max: 1 },
      }],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'beside',
        multiline: 'below',
      }],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
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
