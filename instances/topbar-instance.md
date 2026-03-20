# 右侧顶部 <span class="component-badge">组件</span>

右侧顶部栏高度固定 56px，透明背景无下边框。由三个组件组合而成：

| 位置 | 组件 | 规范来源 |
|------|------|----------|
| 左侧 | 折叠/展开按钮 | [左侧区域](/instances/sidebar-instance) |
| 左侧 | 面包屑 | [Breadcrumb 面包屑](/components/breadcrumb) |
| 右侧 | 用户头像 | [Avatar 用户头像](/components/avatar) |

---

## 使用方式

```html
<!-- 页面声明共享变量 -->
<script setup>
import { ref } from 'vue'
const isCollapse = ref(false)
</script>

<!-- 顶部栏持有折叠按钮，通过 v-model:collapsed 修改共享变量 -->
<AppTopbar v-model:collapsed="isCollapse" />

<!-- 侧边栏读取同一变量，自动响应 -->
<AppSidebar :collapsed="isCollapse" />

<!-- 单独使用（不需要控制侧边栏时） -->
<AppTopbar
  :breadcrumbs="['任务管理', '任务列表']"
  user-name="李四"
  user-role="运营专员"
/>
```

---

## 演示

<Demo src="/demos/topbar-demo.html" />

---

## Props 参数

<table class="spec-table">
  <thead>
    <tr><th>参数名</th><th>类型</th><th>默认值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td><code>collapsed</code></td><td>Boolean</td><td><code>false</code></td><td>侧边栏当前是否折叠，配合 <code>v-model:collapsed</code> 使用</td></tr>
    <tr><td><code>breadcrumbs</code></td><td>Array</td><td><code>['账号管理', '账号列表']</code></td><td>面包屑路径数组，从左到右排列</td></tr>
    <tr><td><code>userName</code></td><td>String</td><td><code>'张三'</code></td><td>下拉菜单中显示的用户名</td></tr>
    <tr><td><code>userRole</code></td><td>String</td><td><code>'管理员'</code></td><td>下拉菜单中显示的角色名</td></tr>
  </tbody>
</table>

## Events 事件

<table class="spec-table">
  <thead>
    <tr><th>事件名</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td><code>update:collapsed</code></td><td>点击折叠/展开按钮时触发，配合 <code>v-model:collapsed</code> 自动双向绑定</td></tr>
  </tbody>
</table>

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>高度</td><td>56px</td><td>固定高度</td></tr>
    <tr><td>背景</td><td>透明</td><td>无背景色、无下边框</td></tr>
    <tr><td>左侧内容</td><td>折叠按钮 + 分割线 + 面包屑</td><td>依次水平排列</td></tr>
    <tr><td>折叠按钮样式</td><td>复用 <code>.app-topbar__collapse-btn</code></td><td>来自「左侧区域」组件规范</td></tr>
    <tr><td>分割线</td><td>竖向 16px / <code>--el-color-text-400</code></td><td><code>el-divider direction="vertical"</code>，左右各 12px</td></tr>
    <tr><td>面包屑样式</td><td>复用面包屑组件规范</td><td>来自「Breadcrumb 面包屑」组件规范</td></tr>
    <tr><td>右侧内容</td><td>用户头像（含下拉菜单）</td><td>复用 <code>.user-avatar</code> + <code>.user-dropdown-popper</code></td></tr>
    <tr><td>头像样式</td><td>复用头像组件规范</td><td>来自「Avatar 用户头像」组件规范</td></tr>
  </tbody>
</table>
