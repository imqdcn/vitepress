import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  ignoreDeadLinks: true, //忽略死链查询
  // base:"vitepress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '指南', link: '/guide/',activeMatch: '/guide/' }
    ],

    sidebar: {
      '/':
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
        collapsed: false,
      },
      '/guide/':
      {
        text: '快速开始1',
        base:"/guide/",
        items:[
          // { text: "index", link: "/" },
          {
            text: "简介",
            items: [
              { text: "index", link: "/" },
            ],
            collapsed: true,
          },
          {
            text: "写作",
            items: [
              { text: "快速开始", link: "/get-start" },
            ],
            collapsed: false,
          }
        ],
        collapsed: false,
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
