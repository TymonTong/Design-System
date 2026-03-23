# 设计规范交付包 — 开发接入指南

> 本文档面向**前端开发者**，说明如何将设计规范和封装组件接入 Vue 3 项目。

---

## 交付包文件说明

```
交付包/
├── .cursorrules                   ← 产品用 Cursor AI 生成原型时的 AI 规则（开发可忽略）
├── README.md                      ← 产品经理使用说明（开发可忽略）
├── README-dev.md                  ← 本文件
│
├── el-plus-theme.css              ← 【必须引入】全局主题样式，覆盖 Element Plus 默认样式
│
├── AppSidebar.vue                 ← 左侧导航栏组件
├── AppTopbar.vue                  ← 右侧顶部栏组件
├── AppFilter.vue                  ← 表格筛选区组件
├── AppStatCard.vue                ← 数据统计卡片组件
│
├── public/
│   └── images/
│       ├── cards/                 ← 【必须复制】统计卡片背景图和装饰图（8 张）
│       └── logo/                 ← Logo 图片目录（README.txt 有说明）
│
├── colors.md / typography.md      ← 基础规范参考文档
├── spacing.md / border.md
├── components/                   ← 26 个 Element Plus 组件的视觉规范文档
└── instances/                    ← 4 个封装组件的 Props / 用法说明
```

---

## 一、新建项目（从零开始）

### 第 1 步：创建 Vue 3 + Vite 项目

```bash
npm create vite@latest my-project -- --template vue
cd my-project
```

### 第 2 步：安装依赖

```bash
npm install element-plus @element-plus/icons-vue
npm install
```

### 第 3 步：配置 `src/main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './el-plus-theme.css'          // ⚠️ 必须在 element-plus css 之后引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
```

### 第 4 步：复制文件

将以下文件复制到项目对应位置：

| 交付包文件 | 复制到 |
|-----------|--------|
| `el-plus-theme.css` | `src/el-plus-theme.css` |
| `AppSidebar.vue` | `src/components/AppSidebar.vue` |
| `AppTopbar.vue` | `src/components/AppTopbar.vue` |
| `AppFilter.vue` | `src/components/AppFilter.vue` |
| `AppStatCard.vue` | `src/components/AppStatCard.vue` |
| `public/images/cards/`（整个目录） | `public/images/cards/` |
| `public/images/logo/`（整个目录） | `public/images/logo/` |

### 第 5 步：全局注册封装组件（在 `main.js` 追加）

```js
import AppSidebar  from './components/AppSidebar.vue'
import AppTopbar   from './components/AppTopbar.vue'
import AppFilter   from './components/AppFilter.vue'
import AppStatCard from './components/AppStatCard.vue'

app.component('AppSidebar',  AppSidebar)
app.component('AppTopbar',   AppTopbar)
app.component('AppFilter',   AppFilter)
app.component('AppStatCard', AppStatCard)
```

完成后即可在任何页面直接使用 `<AppSidebar />`、`<AppTopbar />` 等组件。

---

## 二、已有项目（接入设计规范）

### 第 1 步：确认依赖已安装

```bash
npm install element-plus @element-plus/icons-vue
```

若已安装可跳过。

### 第 2 步：引入主题样式

在 `main.js` 中，**在 `element-plus/dist/index.css` 之后**追加：

```js
import 'element-plus/dist/index.css'
import './el-plus-theme.css'   // ⚠️ 顺序不能颠倒，否则样式会被覆盖
```

将 `el-plus-theme.css` 放到 `src/` 目录下。

### 第 3 步：复制组件和图片

同新建项目的第 4、5 步，复制 `.vue` 组件和 `public/images/` 目录，并在 `main.js` 全局注册。

> 接入后所有 Element Plus 组件的颜色、尺寸、圆角等视觉样式会自动更新为设计规范效果，不影响已有业务逻辑。

---

## 三、封装组件快速参考

### AppSidebar — 左侧导航栏

```html
<AppSidebar :collapsed="isCollapse" :menu-items="menuItems" />
```

| Prop | 类型 | 说明 |
|------|------|------|
| `collapsed` | Boolean | 是否折叠，由外部控制 |
| `menuItems` | Array | 菜单配置，支持三级嵌套 |
| `logoFull` | String | 展开时 Logo 路径，默认 `/images/logo/logo-full.png` |
| `logoIcon` | String | 折叠时 Logo 路径，默认 `/images/logo/logo-icon.png` |

> Logo 图片放入 `public/images/logo/` 即可自动显示，缺失时 Logo 区域保留空白不报错。

---

### AppTopbar — 右侧顶部栏

```html
<AppTopbar v-model:collapsed="isCollapse" :breadcrumbs="['账号管理', '账号列表']" />
```

| Prop | 类型 | 说明 |
|------|------|------|
| `collapsed` | Boolean（v-model） | 控制侧边栏折叠，双向绑定 |
| `breadcrumbs` | Array\<String\> | 面包屑导航文字数组 |

---

### AppFilter — 表格筛选区

```html
<AppFilter :fields="fields" @search="onSearch" @reset="onReset" />
```

| Prop | 类型 | 说明 |
|------|------|------|
| `fields` | Array | 筛选项配置 |
| `maxVisible` | Number | 默认显示的筛选项数量，超出折叠 |

---

### AppStatCard — 数据统计卡片

```html
<AppStatCard label="总账号数" value="240" :icon="User"
  bg="/images/cards/bg-purple.png" deco="/images/cards/deco-purple.png"
  fallback="linear-gradient(135deg,#f0f0ff,#dcdeff)" />
```

| Prop | 类型 | 说明 |
|------|------|------|
| `label` | String | 指标名称 |
| `value` | String | 指标数值 |
| `bg` | String | 背景图路径（可选，缺失自动用 fallback 渐变） |
| `deco` | String | 装饰图路径（可选） |
| `fallback` | String | 背景图缺失时的 CSS 渐变兜底 |
| `icon` | Object/String | Element Plus 图标组件 |

---

## 四、注意事项

1. **`el-plus-theme.css` 必须在 `element-plus/dist/index.css` 之后引入**，否则主题样式会被覆盖
2. **操作列按钮间距**：将操作按钮放在 `<div class="tbl-actions">` 内，间距自动为 12px
3. **表格容器**：用 `<div class="table-container">` 包裹 `<el-table>`，自动获得外边框和圆角
4. **Logo 图片**：放入 `public/images/logo/` 目录，详见该目录下的 `README.txt`
5. **卡片图片**：交付包已内置，放入 `public/images/cards/` 即可，无需额外处理
