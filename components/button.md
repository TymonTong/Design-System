# Button 按钮

按钮分为三大类：**主要按钮**（5种）、**文字按钮**（2种）、**文字链接**（2种颜色 × 基础/带下划线 = 4种）。

每种按钮只有一个固定尺寸：高度 `36px`，左右内边距 `12px`，圆角 `4px`，字号 `14px`。

---

## 演示

<Demo src="/demos/button-demo.html" />

---

## 设计规范

::: info 按钮规范
**按钮尺寸**：高度 36px，左右内边距 12px，宽度自适应文字内容。

**按钮组间距**：多个按钮并排时，按钮之间的间距为 **12px**，使用 Element Plus 原生 `margin-left: 12px` 实现。

**按钮内间距**：按钮内图标与文字之间的间距为 **8px**，使用 `margin-left: 8px` 实现，不使用 gap，避免影响宽度计算。
:::

## 主要按钮

共 5 种，承载不同视觉权重的操作场景。前 3 种使用 `<el-button>` 原生 type；后 2 种通过在 `el-plus-theme.css` 中覆盖 `--el-button-*` CSS 变量实现。

| 按钮类型 | 用法 | 说明 |
|---------|------|------|
| 主要按钮 | `<el-button type="primary">` | 最强视觉优先级，每个操作区最多出现一个 |
| 次要按钮 | `<el-button type="primary" plain>` | 主色系轮廓按钮，Hover 时变为实色 |
| 默认按钮 | `<el-button>` | 白色背景，灰色边框，Hover 时呈现主色感知 |
| 填充按钮 | `<el-button class="btn-filled">` | 一级灰底色，低调辅助操作 |
| 幽灵按钮 | `<el-button class="btn-ghost">` | Hover / Active 时仅边框变主色 |

## 文字按钮

使用 `<el-button text>` 实现，无背景无边框。

| 按钮类型 | 用法 | 适用场景 |
|---------|------|---------|
| 主色文字 | `<el-button type="primary" text>` | 表格操作列、弹窗内次要操作 |
| 次级文字 | `<el-button text>` | 低强调场景 |

## 文字链接

使用 `<el-link>` 组件实现，分为**主色文字**和**次级文字**，每种提供基础（无下划线）和带下划线两种用法。

```html
<!-- 主色链接 -->
<el-link type="primary">链接</el-link>
<el-link type="primary" class="link-always-underline">链接（带下划线）</el-link>

<!-- 次级链接（需要 CSS 变量覆盖） -->
<el-link class="link-secondary">链接</el-link>
<el-link class="link-secondary link-always-underline">链接（带下划线）</el-link>
```
