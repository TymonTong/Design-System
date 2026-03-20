import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Design-System/',   // 必须与 GitHub 仓库名完全一致（区分大小写）
  title: '设计规范',
  description: 'B端产品设计规范文档系统 · 基于 Element Plus',
  lang: 'zh-CN',

  vite: {
    ssr: {
      noExternal: ['element-plus']
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '设计规范',

    nav: [
      { text: '首页', link: '/' },
      { text: '开发接入', link: '/for-developer' },
      { text: '基础规范', link: '/colors' },
      { text: '全局布局组件', link: '/instances/sidebar-instance' },
      { text: '组件规范', link: '/components/button' },
      { text: '⬇ 交付包下载', link: '/download' },
    ],

    sidebar: [
      {
        text: '开发接入',
        items: [
          { text: '快速接入指南', link: '/for-developer' }
        ]
      },
      {
        text: '基础规范',
        items: [
          { text: '色彩', link: '/colors' },
          { text: '字体', link: '/typography' },
          { text: '边框 & 圆角', link: '/border' },
          { text: '间距', link: '/spacing' }
        ]
      },
      {
        text: '全局布局组件',
        items: [
          { text: '左侧区域 <strong style="color:#4628FF;font-weight:600">-组件</strong>', link: '/instances/sidebar-instance' },
          { text: '右侧顶部 <strong style="color:#4628FF;font-weight:600">-组件</strong>', link: '/instances/topbar-instance' },
          { text: '表格筛选 <strong style="color:#4628FF;font-weight:600">-组件</strong>', link: '/instances/filter-instance' }
        ]
      },
      {
        text: '组件规范',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Radio 单选框', link: '/components/radio' },
          { text: 'Checkbox 多选框', link: '/components/checkbox' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Tag 标签', link: '/components/tag' },
          { text: 'Upload 上传', link: '/components/upload' },
          { text: 'Badge 徽章', link: '/components/badge' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'InputNumber 计数器', link: '/components/input-number' },
          { text: 'Select 选择器', link: '/components/select' },
          { text: 'Cascader 级联选择器', link: '/components/cascader' },
          { text: 'DateTimePicker 时间选择器', link: '/components/date-time-picker' },
          { text: 'Form 表单', link: '/components/form' },
          { text: 'Pagination 分页', link: '/components/pagination' },
          { text: 'Table 表格', link: '/components/table' },
          { text: 'Dialog 弹窗', link: '/components/dialog' },
          { text: 'Drawer 抽屉', link: '/components/drawer' },
          { text: 'Tree 树形控件', link: '/components/tree' },
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'Menu 菜单', link: '/components/menu' },
          { text: 'Tabs 标签页', link: '/components/tabs' },
          { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
          { text: 'PageHeader 页头', link: '/components/page-header' },
          { text: 'Tooltip 文字提示', link: '/components/tooltip' },
          { text: 'Card 卡片', link: '/components/card' },
          { text: 'Avatar 用户头像', link: '/components/avatar' }
        ]
      }
    ],

    footer: {
      message: '设计规范文档 · 仅供内部使用'
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部'
  }
})
