import { config } from 'dotenv';
import { isProduction } from './utils/env';

config();

export default {
  server: {
    port: process.env.APP_PORT
  },
  head: {
    title: 'morizo-nuxt',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  styleResources: {
    scss: [
      '@/assets/scss/variables/index.scss'
    ]
  },
  css: [
    {
      src: '@/assets/scss/index.scss',
      lang: 'scss'
    }
  ],
  plugins: [
    '@/plugins/components'
  ],
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],
  axios: {},
  build: {
    extractCSS: isProduction,
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
};
