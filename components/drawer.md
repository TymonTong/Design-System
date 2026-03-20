# Drawer 抽屉

抽屉从屏幕边缘滑出，用于承载次要操作、详情查看、筛选面板等场景，不完全打断当前流程。

**尺寸规范**：左/右侧抽屉提供 3 种宽度 —— `400px`（轻量面板）、`600px`（标准详情/表单）、`800px`（复杂内容）；上/下侧抽屉默认高度 `50%`。

---

## 演示

<Demo src="/demos/drawer-demo.html" />

---

## 颜色规范

<table class="spec-table">
  <thead>
    <tr><th>区域</th><th>属性</th><th>CSS 变量</th></tr>
  </thead>
  <tbody>
    <tr><td>标题</td><td>文字色</td><td><code>--el-color-text-1000</code></td></tr>
    <tr><td>标题栏</td><td>底部边框</td><td><code>--el-color-text-300</code></td></tr>
    <tr><td>关闭按钮</td><td>默认色</td><td><code>--el-color-text-700</code></td></tr>
    <tr><td>关闭按钮</td><td>Hover 色</td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>内容区</td><td>背景</td><td>白色 <code>#fff</code></td></tr>
    <tr><td>遮罩层</td><td>背景</td><td><code>rgba(0, 0, 0, 0.5)</code>（El Plus 原生）</td></tr>
  </tbody>
</table>

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>左/右侧宽度</td><td>400 / 600 / 800px</td><td>通过 <code>size</code> 属性设置</td></tr>
    <tr><td>上/下侧高度</td><td>40% ~ 50%</td><td>通过 <code>size</code> 属性设置</td></tr>
    <tr><td>标题栏高度</td><td>56px</td><td>含上下 padding</td></tr>
    <tr><td>标题字号</td><td>16px / 500</td><td><code>--el-color-text-1000</code></td></tr>
    <tr><td>内容区 padding</td><td>20px</td><td>四周均匀</td></tr>
    <tr><td>底部操作区</td><td>右对齐，按钮间距 12px</td><td>主操作在右，次操作在左</td></tr>
    <tr><td>遮罩</td><td>点击可关闭（默认）</td><td>可设 <code>:close-on-click-modal="false"</code> 禁止</td></tr>
    <tr><td>方向</td><td>rtl（默认右侧）</td><td>ltr / rtl / ttb / btt</td></tr>
  </tbody>
</table>
