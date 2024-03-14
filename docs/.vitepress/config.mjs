import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的技术博客",
  description: "网站描述",
  ignoreDeadLinks: true, //忽略死链查询
  // base:"vitepress",
  // head给每一个页面都添加head，一般是包括全局的JS文件等静态资源
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/vitepress-logo-mini.png", //添加网站ico图标
      },
    ],
    ['script', {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js'
    }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=adssadfas",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'adssadfas');`,
    ],
  ],
  themeConfig: {
    outlineTitle: '目录',
    outline:[2,4], //目录显示级别
    search: {
      provider: "local", //启用vitepress本身的搜索
    },
    logo: "https://vitepress.dev/vitepress-logo-mini.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '指南', link: '/guide/',activeMatch: '/guide/' },
      { text: "外链", link: "https://www.baidu.com"  }, //外链
      {
        text: '二级菜单',
        items: [
          {
            // 该部分的标题
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: "https://www.baidu.com" }
            ]
          },
          {
            // 该部分的标题
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      }, //二级菜单
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
        items:getGuideBar(),
        collapsed: false,
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message:
        "MIT版权，未经许可禁止任何形式的转载",
      copyright: `Copyright © 2016-${new Date().getFullYear()} `, //这里可以写JS表达式
    },

  }
})

// import example from "/sidebar/example.js";
import guide from "../../public/sidebar/guide.js";
function getGuideBar() {
  return guide;
}

//  如果配置文件是JSON的读取方法
// import fs from 'fs';
// function getGuideBar() {
//   const content = fs.readFileSync('./public/guide.json', 'utf8').toString()
//   const json = JSON.parse(content)
//   return json;
// }