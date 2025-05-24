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
          { 
            text: 'Service Providers', 
            link: '/service-providers',
            items: [
              { text: 'OpenAI', link: '/openai-configuration' },
              { 
                text: 'Anthropic (Claude)', 
                link: '/anthropic-configuration',
                items: [
                  { text: 'Extended Thinking Mode', link: '/claude-extended-thinking' }
                ]
              },
              { 
                text: 'Google (Gemini)', 
                link: '/google-configuration',
                items: [
                  { text: 'Thinking Mode', link: '/gemini-thinking-mode' },
                  { text: 'Image Generation', link: '/gemini-image-generation' }
                ]
              },
              { text: 'Groq', link: '/groq-configuration' },
              { text: 'Azure OpenAI', link: '/azure-configuration' },
              { text: 'DeepSeek', link: '/deepseek-configuration' },
              { text: 'Volcengine', link: '/volcengine-configuration' },
              { text: 'OpenAI API Compatible', link: '/openai-compatible' },
            ]
          },
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
          { text: '常见问题', link: '/zh/faq' }
        ],
        sidebar: [
          {
            text: '开始使用',
            collapsed: false,
            items: [
              { text: '介绍', link: '/zh/introduction' },
              { text: '快速入门', link: '/zh/quickstart' }
            ]
          },
          {
            text: '指南',
            items: [
              { 
                text: 'AI 服务提供商', 
                link: '/zh/service-providers',
                items: [
                  { text: 'OpenAI', link: '/zh/openai-configuration' },
                  { 
                    text: 'Anthropic (Claude)', 
                    link: '/zh/anthropic-configuration',
                    items: [
                      { text: '扩展思考模式', link: '/zh/claude-extended-thinking' }
                    ]
                  },
                  { 
                    text: 'Google (Gemini)', 
                    link: '/zh/google-configuration',
                    items: [
                      { text: '图像生成', link: '/zh/gemini-image-generation' }
                    ]
                  },
                  { text: 'Groq', link: '/zh/groq-configuration' },
                  { text: 'Azure OpenAI', link: '/zh/azure-configuration' },
                  { text: 'DeepSeek', link: '/zh/deepseek-configuration' },
                  { text: '火山引擎', link: '/zh/volcengine-configuration' },
                  { text: 'OpenAI API 兼容服务', link: '/zh/openai-compatible' }
                ]
              },
              { text: 'Ollama', link: '/zh/ollama' },
              { text: 'AI-Fusion', link: '/zh/ai-fusion' },
            ]
          },
          {
            text: '与我们合作',
            collapsed: false,
            items: [
              {
                text: '联系我们',
                link: '/zh/contact'
              },
              { text: '媒体工具包', link: '/zh/media-kit' },
              { text: '联盟计划', link: '/zh/affiliate-program' }
            ]
          },
          {
            text: '常见问题',
            link: '/zh/faq'
          },
          {
            text: '下载应用',
            link: 'https://botgem.com/#get-the-app'
          },
        ],
      }
    }
  }
})
