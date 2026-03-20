# 左侧区域 <span class="component-badge">组件</span>

Logo 区域 + 菜单的完整侧边栏，白色背景无边框，宽度在展开（240px）与折叠（80px）之间平滑切换。

> **折叠/展开按钮不在本组件内部。** `<AppSidebar>` 是纯展示组件，只负责按照外部传入的 `collapsed` 值来伸缩，由谁控制、按钮放哪里，由页面决定。

---

## 使用方式

```html
<!-- 页面上声明一个共享变量 -->
<script setup>
import { ref } from 'vue'
const isCollapse = ref(false)
</script>

<!-- 按钮可以放在任意位置（如顶部栏），点击时修改共享变量 -->
<AppTopbar v-model:collapsed="isCollapse" />

<!-- 侧边栏读取同一个变量，自动响应伸缩 -->
<AppSidebar :collapsed="isCollapse" />
```

---

## 跨组件控制说明

**顶部栏里的按钮，能控制侧边栏的展开收起吗？——能。**

原理如下：

```
页面声明：isCollapse = false
          ↓              ↓
  AppTopbar            AppSidebar
  按钮点击时            读取 isCollapse
  修改 isCollapse  →   自动伸缩
```

`isCollapse` 是页面级的共享变量，`AppTopbar` 负责修改它，`AppSidebar` 负责读取它。两个组件互不依赖，中间通过这个变量"握手"。

---

## 演示

<Demo src="/demos/sidebar-demo.html" />

---

## Props 参数

<table class="spec-table">
  <thead>
    <tr><th>参数名</th><th>类型</th><th>默认值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td><code>collapsed</code></td><td>Boolean</td><td><code>false</code></td><td>是否折叠，由外部控制</td></tr>
    <tr><td><code>logoFull</code></td><td>String</td><td><code>/images/logo/logo-full.png</code></td><td>展开状态 Logo 路径，建议尺寸 ≤ 160×40</td></tr>
    <tr><td><code>logoIcon</code></td><td>String</td><td><code>/images/logo/logo-icon.png</code></td><td>折叠状态 Logo 路径，建议尺寸 40×40</td></tr>
    <tr><td><code>menuItems</code></td><td>Array</td><td>内置示例菜单</td><td>导航菜单项，支持一级/二级/三级菜单</td></tr>
  </tbody>
</table>

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>整体背景</td><td>#FFFFFF</td><td>无边框、无阴影</td></tr>
    <tr><td>整体宽度（展开）</td><td>240px</td><td>含菜单四边 16px 内边距</td></tr>
    <tr><td>整体宽度（折叠）</td><td>80px</td><td>含菜单四边 16px 内边距，图标居中</td></tr>
    <tr><td>宽度过渡</td><td>0.3s</td><td><code>transition: width 0.3s</code></td></tr>
    <tr><td>Logo 区域高度</td><td>56px</td><td>固定高度，内容居中</td></tr>
    <tr><td>折叠控制</td><td>外部传入 <code>:collapsed</code></td><td>本组件不含按钮，由页面级变量驱动</td></tr>
  </tbody>
</table>
