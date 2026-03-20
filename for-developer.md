# 快速接入指南

> 面向前端开发者。接入规范后，所有 `<el-*>` 组件视觉自动符合设计规范，无需修改任何组件代码。

---

## 第一步：安装 Element Plus

```bash
npm install element-plus
```

---

## 第二步：引入 CSS 文件

在项目入口文件 `main.js` 中，按以下**固定顺序**引入：

```js
import { createApp } from 'vue'
import App from './App.vue'

// 1. 先引入 Element Plus 默认样式
import 'element-plus/dist/index.css'

// 2. 再引入设计规范覆盖文件（顺序不能颠倒）
import './styles/el-plus-theme.css'

import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

::: warning 注意顺序
`el-plus-theme.css` 必须在 `element-plus/dist/index.css` **之后**引入，否则覆盖不生效。
:::

---

## 第三步：直接使用原生组件

无需做任何其他配置，直接使用 Element Plus 原生组件即可：

```vue
<template>
  <!-- 视觉自动符合设计规范 -->
  <el-button type="primary">主要按钮</el-button>
  <el-input v-model="value" placeholder="请输入内容" />
  <el-select v-model="selected" placeholder="请选择">
    <el-option label="选项一" value="1" />
  </el-select>
</template>
```

---

## CSS 变量覆盖文件说明

`el-plus-theme.css` 文件位于 `public/` 目录下，覆盖了以下 Element Plus CSS 变量：

| 变量分类 | 覆盖内容 |
|---------|---------|
| 主色系 | `--el-color-primary` 及全部 light-1~9、dark-2 |
| 成功色系 | `--el-color-success` 及全部衍生变量 |
| 警告色系 | `--el-color-warning` 及全部衍生变量 |
| 危险色系 | `--el-color-danger` 及全部衍生变量 |
| 文字颜色 | primary / regular / secondary / placeholder / disabled |
| 边框颜色 | default / light / lighter / extra-light / dark / darker |
| 背景颜色 | bg-color / bg-color-page / fill-color 系列 |
| 字体族 | 系统字体栈（中英文混排最优） |
| 字号 | extra-small 到 extra-large 全部字号 |
| 圆角 | base（4px）/ small（2px）/ round（12px）/ circle（50%）|
| 阴影 | lighter / light / default / dark 四档 |
| 组件高度 | large（40px）/ default（36px）/ small（28px）|

---

## 设计 Token 文件位置

Token 文件位于 `tokens/` 目录，供 AI 工具生成原型时参考：

```
tokens/
├── colors.json      # 所有颜色 Token
├── typography.json  # 字体 Token
├── border.json      # 边框 & 圆角 & 阴影 Token
└── spacing.json     # 间距 Token
```

---

## 常见问题

**Q：CSS 覆盖不生效？**  
A：检查引入顺序，override 文件必须在 element-plus/dist/index.css 之后引入。

**Q：可以局部覆盖某个组件的样式吗？**  
A：可以，在组件的 `<style scoped>` 中使用 `:deep()` 选择器覆盖即可，但建议优先通过 Token 文件统一修改。

**Q：深色模式怎么办？**  
A：当前规范仅定义浅色模式，如需深色模式，需在 `.dark` 类下额外定义一套变量覆盖。
