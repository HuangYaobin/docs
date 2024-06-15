import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  outDir: 'docs', // 打包输出的目录
  base: '/docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '快乐老家', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    // 修改页脚
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/huangyaobin' }],
  },
})
