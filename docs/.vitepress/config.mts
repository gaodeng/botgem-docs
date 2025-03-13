import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BotGem Docs",
  description: "Your AI-Powered Toolbox for Tomorrow",
  head: [
    ['meta', { name: 'theme-color', content: '#eaefea' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon-16x16.png" }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Contrail+One&display=swap' }],


  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/Letter B.png',
    nav: [
      { text: 'Home', link: process.env.NODE_ENV === 'production' ? 'https://botgem.com' : 'http://localhost:3003', target: "_self", noIcon: true, },
      {
        text: 'Get The App',
        link: process.env.NODE_ENV === 'production' ? 'https://botgem.com/#get-the-app' : 'http://localhost:3003#get-the-app',
        target: "_self",
        noIcon: true,
      },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      {
        text: 'GET STARTED',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Quickstart', link: '/quickstart' }
        ]
      },
      {
        text: 'GUIDES',
        items: [
          { text: 'Service Providers', link: '/service-providers' },
          { text: 'Ollama', link: '/ollama' },
          { text: 'AI-Fusion', link: '/ai-fusion' },
        ]
      },
      {
        text: 'PARTNER WITH US',
        collapsed: false,
        items: [
          {
            text: 'Contact',
            link: '/contact'
          },
          { text: 'Media Kit', link: '/media-kit' },
          // { text: 'Affiliate Program', link: '/affiliate-program' }
        ]
      },
      {
        text: 'FAQ',
        link: '/faq'
      },
      {
        text: 'Get The App',
        link: 'https://botgem.com/#get-the-app'
      },
    ],
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh',
      title: "BotGem 文档",
      themeConfig: {
        nav: [
          { text: '官网', link: 'https://botgem.com', target: "_self", noIcon: true },
          {
            text: '下载',
            link: 'https://botgem.com/#get-the-app',
            target: "_self",
            noIcon: true,
          },
          { text: '常见问题', link: '/faq' }
        ],
        sidebar: [
          {
            text: 'GET STARTED',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Quickstart', link: '/quickstart' }
            ]
          },
          {
            text: 'GUIDES',
            items: [
              { text: 'Service Providers', link: '/service-providers' },
              { text: 'Ollama', link: '/ollama' },
              { text: 'AI-Fusion', link: '/ai-fusion' },
            ]
          },
          {
            text: 'PARTNER WITH US',
            collapsed: false,
            items: [
              {
                text: 'Contact',
                link: '/contact'
              },
              { text: 'Media Kit', link: '/media-kit' },
              // { text: 'Affiliate Program', link: '/affiliate-program' }
            ]
          },
          {
            text: 'FAQ',
            link: '/faq'
          },
          {
            text: 'Get The App',
            link: 'https://botgem.com/#get-the-app'
          },
        ],
      }
    }
  }
})
