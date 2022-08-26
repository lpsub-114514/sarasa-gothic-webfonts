import { defineConfig, DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.sidebar = {
  '/en/': [
    {
      text: 'Introduction',
      items: [
        { text: 'About LPSub Fonts', link: '/en/' },
        { text: 'Getting Started', link: '/en/guide/getting-started' },
      ],
    },
    {
      text: 'Instructions for use',
      items: [
        { text: 'Sarasa Gothic', link: '/en/explain/Sarasa-Gothic' },
      ],
    }
  ],
  '/zh-cn/': [
    {
      text: '介绍',
      items: [
        { text: '关于 LPSub Fonts', link: '/zh-cn/' },
        { text: '开始使用', link: '/zh-cn/guide/getting-started' },
      ],
    },
    {
      text: '使用说明',
      items: [
        { text: '更纱黑体', link: '/zh-cn/explain/Sarasa-Gothic' },
      ],
    }
  ],
  '/zh-hk/': [
    {
      text: '介紹',
      items: [
        { text: '關於 LPSub Fonts', link: '/zh-hk/' },
        { text: '開始使用', link: '/zh-hk/guide/getting-started' },
      ],
    },
    {
      text: '使用說明',
      items: [
        { text: '更紗黑體', link: '/zh-hk/explain/Sarasa-Gothic' },
      ],
    }
  ],
  '/zh-tw/': [
    {
      text: '介紹',
      items: [
        { text: '關於 LPSub Fonts', link: '/zh-tw/' },
        { text: '開始使用', link: '/zh-tw/guide/getting-started' },
      ],
    },
    {
      text: '使用說明',
      items: [
        { text: '更紗黑體', link: '/zh-tw/explain/Sarasa-Gothic' },
      ],
    }
  ],
  '/jp/': [
    {
      text: '導入',
      items: [
        { text: 'LPSub Fonts について', link: '/jp/' },
        { text: '開始', link: '/jp/guide/getting-started' },
      ],
    },
    {
      text: '使用説明書',
      items: [
        { text: '更紗ゴシック', link: '/jp/explain/Sarasa-Gothic' },
      ],
    }
  ],
}

export default defineConfig({
  title: 'LPSub Fonts',
  description: 'LPSub Fonts Document',
  locales: {
    '/en/': {
      lang: 'en',
      title: 'LPSub Fonts',
      description: 'LPSub Fonts Document',
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'LPSub Fonts',
      description: 'LPSub Fonts 文档',
    },
    '/zh-hk/': {
      lang: 'zh-HK',
      title: 'LPSub Fonts',
      description: 'LPSub Fonts 文檔',
    },
    '/zh-tw/': {
      lang: 'zh-TW',
      title: 'LPSub Fonts',
      description: 'LPSub Fonts 文檔',
    },
    '/jp/': {
      lang: 'jp',
      title: 'LPSub Fonts',
      description: 'LPSub Fonts ドキュメント',
    },
  },
  themeConfig: {
    sidebar,
    localeLinks: {
      text: '',
      items: [
        { text: 'English', link: '/en/' },
        { text: '简体中文', link: '/zh-cn/' },
        { text: '繁體中文（香港）', link: '/zh-hk/' },
        { text: '繁體中文（台灣）', link: '/zh-tw/' },
        { text: '日本語', link: '/jp/' },
      ],
    }
  },
})
